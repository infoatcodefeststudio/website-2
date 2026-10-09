export type LeadSource = 'contact' | 'demo';

export type LeadPayload = {
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function optional(value: unknown): string | undefined {
  const trimmed = asTrimmedString(value);
  return trimmed ? trimmed : undefined;
}

export function parseLeadPayload(
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

  if (source !== 'contact' && source !== 'demo') {
    issues.source = ['Invalid source'];
  }
  if (fullName.length < 2) {
    issues.fullName = ['Enter your full name'];
  }
  if (!EMAIL_RE.test(email)) {
    issues.email = ['Enter a valid email'];
  }
  if (!message) {
    issues.message = ['Tell us about your requirement'];
  }

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
