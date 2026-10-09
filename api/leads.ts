import { handleLeadWebRequest } from '../server/lead-web-handler';

export function POST(request: Request) {
  return handleLeadWebRequest(request, process.env);
}
