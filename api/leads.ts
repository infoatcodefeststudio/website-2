import type { IncomingMessage, ServerResponse } from 'node:http';

export type LeadEnv = Record<string, string | undefined>;
export type LeadSource = 'contact' | 'demo';

type LeadPayload = {
  source: LeadSource;
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  designation?: string;
  productSlug?: string;
  businessType?: string;
  numberOfLocations?: string;
  message: string;
};

type VercelIncoming = IncomingMessage & { body?: unknown };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function optional(value: unknown): string | undefined {
  const trimmed = asTrimmedString(value);
  return trimmed ? trimmed : undefined;
}

function parseLeadPayload(
  json: unknown
): { ok: true; data: LeadPayload } | { ok: false; issues: Record<string, string[]> } {
  if (!json || typeof json !== 'object') {
    return { ok: false, issues: { form: ['Invalid form data'] } };
  }

  const input = json as Record<string, unknown>;
  const issues: Record<string, string[]> = {};
  const source = asTrimmedString(input.source);
  const fullName = asTrimmedString(input.fullName);
  const email = asTrimmedString(input.email);
  const message = asTrimmedString(input.message);

  if (source !== 'contact' && source !== 'demo') issues.source = ['Invalid source'];
  if (fullName.length < 2) issues.fullName = ['Enter your full name'];
  if (!EMAIL_RE.test(email)) issues.email = ['Enter a valid email'];
  if (!message) issues.message = ['Tell us about your requirement'];

  if (Object.keys(issues).length > 0) {
    return { ok: false, issues };
  }

  return {
    ok: true,
    data: {
      source: source as LeadSource,
      fullName,
      companyName: optional(input.companyName),
      email,
      phone: optional(input.phone),
      designation: optional(input.designation),
      productSlug: optional(input.productSlug),
      businessType: optional(input.businessType),
      numberOfLocations: optional(input.numberOfLocations),
      message,
    },
  };
}

function requireEnv(env: LeadEnv, key: string): string {
  const value = env[key]?.trim();
  if (!value) {
    throw new Error(`Missing server environment variable: ${key}`);
  }
  return value;
}

function zeptoAuthorization(apiKey: string): string {
  const trimmed = apiKey.trim();
  if (/^Zoho-enczapikey\s+/i.test(trimmed)) return trimmed;
  return `Zoho-enczapikey ${trimmed}`;
}

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function row(label: string, value: string | undefined): string {
  if (!value?.trim()) return '';
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`;
}

async function sendLeadEmail(env: LeadEnv, lead: LeadPayload & { ticketId: string }): Promise<void> {
  const apiKey = requireEnv(env, 'ZEPTOMAIL_API_KEY');
  const fromEmail = requireEnv(env, 'ZEPTOMAIL_FROM_EMAIL');
  const notifyEmail = requireEnv(env, 'LEAD_NOTIFY_EMAIL');
  const fromName = env.ZEPTOMAIL_FROM_NAME?.trim() || 'Codefest Studio';
  const apiUrl = env.ZEPTOMAIL_API_URL?.trim() || 'https://api.zeptomail.com/v1.1/email';
  const sourceLabel = lead.source === 'demo' ? 'Book a Demo' : 'Contact';
  const subject = `[${lead.ticketId}] ${sourceLabel} — ${lead.fullName}${lead.companyName ? ` — ${lead.companyName}` : ''}`;

  const htmlbody = `
    <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#111">
      <h2 style="margin:0 0 12px">New ${escapeHtml(sourceLabel)} inquiry</h2>
      <p style="margin:0 0 16px;font-size:16px"><strong>Ticket reference:</strong> ${escapeHtml(lead.ticketId)}</p>
      <table style="border-collapse:collapse">${row('Ticket', lead.ticketId)}${row('Name', lead.fullName)}${row('Company', lead.companyName)}${row('Email', lead.email)}${row('Phone', lead.phone)}${row('Designation', lead.designation)}${row('Product', lead.productSlug)}${row('Business type', lead.businessType)}${row('Locations', lead.numberOfLocations)}</table>
      <p style="margin:16px 0 6px;font-weight:600">Message</p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(lead.message)}</p>
    </div>
  `.trim();

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: zeptoAuthorization(apiKey),
    },
    body: JSON.stringify({
      from: { address: fromEmail, name: fromName },
      to: [{ email_address: { address: notifyEmail, name: 'Codefest Studio' } }],
      reply_to: [{ address: lead.email, name: lead.fullName }],
      subject,
      htmlbody,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(
      `ZeptoMail request failed (${response.status})${detail ? `: ${detail.slice(0, 200)}` : ''}`
    );
  }
}

async function readJsonBody(req: VercelIncoming): Promise<unknown> {
  if (req.body !== undefined && req.body !== null && req.body !== '') {
    if (typeof req.body === 'string') return JSON.parse(req.body) as unknown;
    return req.body;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw.trim()) throw new Error('Empty request body');
  return JSON.parse(raw) as unknown;
}

function sendJson(res: ServerResponse, status: number, body: object) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

export async function handleLeadRequest(
  req: IncomingMessage,
  res: ServerResponse,
  env: LeadEnv
): Promise<void> {
  if (req.method !== 'POST') {
    sendJson(res, 405, { ok: false, message: 'Method not allowed' });
    return;
  }

  let json: unknown;
  try {
    json = await readJsonBody(req);
  } catch (error) {
    console.error('[api/leads]', error instanceof Error ? error.message : error);
    sendJson(res, 400, { ok: false, message: 'Invalid JSON' });
    return;
  }

  const parsed = parseLeadPayload(json);
  if (!parsed.ok) {
    sendJson(res, 400, { ok: false, message: 'Invalid form data', issues: parsed.issues });
    return;
  }

  const prefix = parsed.data.source === 'demo' ? 'CONSULT' : 'ENQ';
  const ticketId = `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

  try {
    await sendLeadEmail(env, { ...parsed.data, ticketId });
    sendJson(res, 200, { ok: true, ticketId });
  } catch (error) {
    console.error('[api/leads]', error instanceof Error ? error.message : error);
    sendJson(res, 500, { ok: false, message: 'Failed to send your message. Please try again.' });
  }
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  await handleLeadRequest(req, res, process.env);
}

export const config = {
  maxDuration: 10,
};
