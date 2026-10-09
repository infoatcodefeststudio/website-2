import { parseLeadPayload, type LeadPayload } from './lead-schema';
import { sendLeadEmail } from './zeptomail';

export type LeadEnv = Record<string, string | undefined>;

export type LeadResponseBody = {
  ok: boolean;
  ticketId?: string;
  message?: string;
  issues?: Record<string, string[] | undefined>;
};

export type LeadProcessResult = {
  status: number;
  body: LeadResponseBody;
};

export type SendLeadEmail = (env: LeadEnv, lead: LeadPayload & { ticketId: string }) => Promise<void>;

function createTicketId(source: LeadPayload['source']): string {
  const prefix = source === 'demo' ? 'CONSULT' : 'ENQ';
  return `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;
}

export async function processLeadSubmission(
  method: string | undefined,
  json: unknown,
  env: LeadEnv,
  sendEmail?: SendLeadEmail
): Promise<LeadProcessResult> {
  if (method !== 'POST') {
    return { status: 405, body: { ok: false, message: 'Method not allowed' } };
  }

  const parsed = parseLeadPayload(json);
  if (!parsed.ok) {
    return {
      status: 400,
      body: {
        ok: false,
        message: 'Invalid form data',
        issues: parsed.issues,
      },
    };
  }

  const ticketId = createTicketId(parsed.data.source);

  try {
    await (sendEmail ?? sendLeadEmail)(env, { ...parsed.data, ticketId });
    return { status: 200, body: { ok: true, ticketId } };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to send notification';
    console.error('[api/leads]', message);
    return {
      status: 500,
      body: { ok: false, message: 'Failed to send your message. Please try again.' },
    };
  }
}
