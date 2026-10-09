import type { IncomingMessage, ServerResponse } from 'node:http';
import { processLeadSubmission, type LeadEnv } from './process-lead';

export type { LeadEnv };

type VercelIncoming = IncomingMessage & { body?: unknown };

async function readJsonBody(req: VercelIncoming): Promise<unknown> {
  if (req.body !== undefined && req.body !== null && req.body !== '') {
    if (typeof req.body === 'string') {
      return JSON.parse(req.body) as unknown;
    }
    return req.body;
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw.trim()) {
    throw new Error('Empty request body');
  }
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
  let json: unknown;
  if (req.method === 'POST') {
    try {
      json = await readJsonBody(req);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to send notification';
      console.error('[api/leads]', message);
      sendJson(res, 400, {
        ok: false,
        message: 'Invalid JSON',
      });
      return;
    }
  }

  const result = await processLeadSubmission(req.method, json, env);
  sendJson(res, result.status, result.body);
}
