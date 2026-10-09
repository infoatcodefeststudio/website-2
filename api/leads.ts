import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleLeadRequest } from '../server/lead-handler';
import { handleLeadWebRequest } from '../server/lead-web-handler';

async function webHandler(request: Request) {
  try {
    return await handleLeadWebRequest(request, process.env);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to send notification';
    console.error('[api/leads]', message);
    return Response.json(
      { ok: false, message: 'Failed to send your message. Please try again.' },
      { status: 500 }
    );
  }
}

async function nodeHandler(req: IncomingMessage, res: ServerResponse) {
  await handleLeadRequest(req, res, process.env);
}

const handler = Object.assign(nodeHandler, { fetch: webHandler });

export default handler;
export { webHandler as GET, webHandler as POST };
