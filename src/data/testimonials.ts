export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  companyName: string;
  companyCategory: 'Logistics & 3PL' | 'Manufacturing' | 'FMCG & Retail' | 'Hospitality';
  companyLocation: string;
  avatarUrl: string;
  companyLogoText: string;
  companyLogoColor: string; // Tailwind class
  productsUsed: string[];
  rating: number;
  highlightStat: string;
  statLabel: string;
  headline: string;
  quote: string;
  verifiedTag: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    clientName: 'Rajesh Nair',
    role: 'VP of Operations & Supply Chain',
    companyName: 'Apex Cold Logistics Ltd.',
    companyCategory: 'Logistics & 3PL',
    companyLocation: 'Mumbai & Ahmedabad Hubs',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    companyLogoText: 'APEX COLD',
    companyLogoColor: 'bg-blue-600',
    productsUsed: ['Warehouse Management (WMS)', 'Transport Management (TMS)'],
    rating: 5,
    highlightStat: '99.94%',
    statLabel: 'Inventory Dispatch Accuracy',
    headline: 'Eliminated order fulfillment errors across 6 regional hubs',
    quote: 'Before Codefest Studio, managing cold chain inventory across multi-zone temperatures was a daily firefight. Their WMS and TMS integration gave our floor teams handheld barcode workflows with batch-expiry tracking and automated route manifests. Our dock turnaround dropped by 38% in under 60 days.',
    verifiedTag: 'Multi-site Enterprise Deployment'
  },
  {
    id: 't-2',
    clientName: 'Ananya Deshmukh',
    role: 'Director of Plant Logistics',
    companyName: 'Mahindra Dynamics Automotive',
    companyCategory: 'Manufacturing',
    companyLocation: 'Pune Industrial Corridor',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    companyLogoText: 'DYNAMIC AUTO',
    companyLogoColor: 'bg-emerald-600',
    productsUsed: ['Gate & Yard Management', 'Vendor Management (VMS)'],
    rating: 5,
    highlightStat: '-45 min',
    statLabel: 'Avg. Inbound Gate Detention Time',
    headline: 'Real-time dock scheduling transformed our plant entrance',
    quote: 'Our factory gate used to experience 2-hour truck queues during peak shifts. With Codefest’s Gate & Yard Management System linked to automated weighbridge sync and digital gate passes, driver processing takes under 4 minutes. Inbound bottleneck chaos is completely solved.',
    verifiedTag: 'Tier-1 Automotive Supplier'
  },
  {
    id: 't-3',
    clientName: 'Vikramaditya Sengupta',
    role: 'Chief Operating Officer',
    companyName: 'The Imperial Grand Resorts',
    companyCategory: 'Hospitality',
    companyLocation: 'Goa & Udaipur Properties',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
    companyLogoText: 'IMPERIAL RESORTS',
    companyLogoColor: 'bg-amber-600',
    productsUsed: ['Hotel ERP & Restaurant POS', 'Inventory Management'],
    rating: 5,
    highlightStat: '0% Leakage',
    statLabel: 'F&B Inventory Reconciliation',
    headline: 'Unified guest billing, kitchen orders, and inventory audits',
    quote: 'Switching from legacy fragmented software to Codefest Hotel ERP streamlined our guest check-ins, dynamic QR dining tables, and central liquor & kitchen store transfers. Our guest checkout wait time decreased to under 60 seconds while audit reconciliation became 100% airtight.',
    verifiedTag: 'Luxury Heritage Hotel Group'
  },
  {
    id: 't-4',
    clientName: 'Priya Sundaram',
    role: 'Head of National Procurement',
    companyName: 'Vanguard FMCG Retailers',
    companyCategory: 'FMCG & Retail',
    companyLocation: 'Bangalore & Chennai Stores',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
    companyLogoText: 'VANGUARD',
    companyLogoColor: 'bg-indigo-600',
    productsUsed: ['Vendor Management (VMS)', 'Inventory Management'],
    rating: 5,
    highlightStat: '₹1.8 Cr',
    statLabel: 'Annual Billing Leakage Prevented',
    headline: 'Automated 3-way matching and vendor contract compliance',
    quote: 'Managing rate sheets and compliance for 350+ suppliers was nearly impossible on spreadsheets. Codefest VMS enforce rate cards automatically, checks GST status in real time, and runs automated 3-way matching before releasing payment milestones. The transparency is unmatched.',
    verifiedTag: 'Retail & Supermarket Chain'
  },
  {
    id: 't-5',
    clientName: 'Sanjay Chawla',
    role: 'Managing Director',
    companyName: 'TransGlobal Freightways',
    companyCategory: 'Logistics & 3PL',
    companyLocation: 'National Fleet Network (140+ Trucks)',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80',
    companyLogoText: 'TRANSGLOBAL',
    companyLogoColor: 'bg-violet-600',
    productsUsed: ['Transport Management (TMS)'],
    rating: 5,
    highlightStat: '+22%',
    statLabel: 'Fleet Fuel & Route Efficiency',
    headline: 'Live GPS telematics and instant digital POD settlement',
    quote: 'Codefest TMS provided algorithmic route grouping and real-time trip expense tracking. Our drivers upload e-POD signatures right on their mobile app upon delivery, cutting client invoice settlement turnaround from 21 days down to 48 hours.',
    verifiedTag: 'National Express Freight Network'
  },
  {
    id: 't-6',
    clientName: 'Meera Kulkarni',
    role: 'Chief Technology Officer',
    companyName: 'Orion Precision Engineering',
    companyCategory: 'Manufacturing',
    companyLocation: 'Hyderabad Hub',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    companyLogoText: 'ORION TECH',
    companyLogoColor: 'bg-cyan-600',
    productsUsed: ['Custom ERP Integration', 'Inventory Management'],
    rating: 5,
    highlightStat: '3.5x',
    statLabel: 'Faster Monthly Stock Audits',
    headline: 'Customized business logic integrated directly with our legacy SAP',
    quote: 'Codefest Studio delivered a custom production floor telemetry layer on top of our existing ERP. Their engineering team understood our industrial assembly workflows down to the screw bin. Deploying with them felt like adding a veteran in-house product team.',
    verifiedTag: 'Precision Engineering Firm'
  }
];
