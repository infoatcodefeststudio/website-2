export interface IndustrySolution {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutionsProvided: string[];
  recommendedProducts: { name: string; slug: string; code: string }[];
  impactMetrics: { label: string; value: string }[];
  iconName: string;
}

export const SOLUTIONS: IndustrySolution[] = [
  {
    id: 'logistics-transportation',
    title: 'Logistics & Transportation',
    badge: 'Fleet & Dispatch',
    tagline: 'Streamline fleet movement, reduce empty miles, and gain real-time consignment control.',
    description: 'Empower 3PLs, logistics service providers, and fleet operators with end-to-end trip planning, AI-assisted route sequencing, driver payroll tracking, live GPS telematics, and instant electronic proof-of-delivery.',
    challenges: [
      'High fuel consumption from non-optimized routes and idling',
      'Delayed freight billing due to physical paper POD retrieval',
      'Poor vehicle allocation visibility leading to low asset utilization',
      'Lack of real-time consignment tracking for end customers'
    ],
    solutionsProvided: [
      'Algorithmic multi-stop route optimization & load consolidation',
      'Instant mobile digital POD with e-signature and geo-tagged photos',
      'Automated driver attendance, advance cash logs, and trip allowances',
      'Customer-facing live tracking portals and automated SMS/WhatsApp alerts'
    ],
    recommendedProducts: [
      { name: 'Transport Management System', slug: 'tms', code: 'TMS' },
      { name: 'Gate / Yard Management', slug: 'gate-yard-management', code: 'YMS' }
    ],
    impactMetrics: [
      { label: 'Fuel Expense Reduction', value: '18%' },
      { label: 'On-Time SLA Delivery', value: '98.6%' },
      { label: 'Instant POD Turnaround', value: '< 2 min' }
    ],
    iconName: 'Truck'
  },
  {
    id: 'warehousing-fulfillment',
    title: 'Warehousing & Fulfillment',
    badge: 'Multi-Tier Storage',
    tagline: 'High-density bin management, rapid barcode picking, and flawless dispatch cycles.',
    description: 'Transform high-throughput fulfillment centers, regional depots, and multi-tier mother warehouses into precision operations with intelligent putaway, wave picking, and automated cycle counts.',
    challenges: [
      'Frequent picking errors and missing SKU locations on the floor',
      'Slow manual GRN and delayed stock availability after inward',
      'Underutilized vertical rack space and improper stock allocation',
      'Inventory inaccuracies causing order cancellations'
    ],
    solutionsProvided: [
      'Dynamic 3D bin hierarchy & velocity-based putaway suggestions',
      'Scan-to-verify wave and batch picking with handheld terminals',
      'Real-time automated GRN and batch/lot expiry tracking',
      'Audit-ready continuous cycle counting without shutting operations'
    ],
    recommendedProducts: [
      { name: 'Warehouse Management System', slug: 'wms', code: 'WMS' },
      { name: 'Inventory Management System', slug: 'inventory-management', code: 'IMS' }
    ],
    impactMetrics: [
      { label: 'Inventory Accuracy', value: '99.9%' },
      { label: 'Pick & Pack Speed', value: '3.2x' },
      { label: 'Storage Density Gain', value: '+35%' }
    ],
    iconName: 'Warehouse'
  },
  {
    id: 'supply-chain-procurement',
    title: 'Supply Chain & Procurement',
    badge: 'End-to-End Visibility',
    tagline: 'Unify suppliers, purchase orders, inventory buffers, and logistics handoffs.',
    description: 'Connect enterprise supply chains from vendor onboarding and contracted rate cards to inbound dock scheduling and finished goods distribution.',
    challenges: [
      'Fragmented vendor communication and non-standard rate cards',
      'Lack of compliance oversight leading to regulatory risks',
      'Supply bottlenecks caused by lack of visibility into supplier lead times',
      'Manual purchase order approvals and 3-way invoice reconciliation disputes'
    ],
    solutionsProvided: [
      'Supplier self-service portal for onboarding, KYC, and document uploads',
      'Automated vendor performance scorecards based on OTIF metrics',
      'Centralized contract management with automated price variance alerts',
      'Seamless multi-tier PO to GRN to invoice matching'
    ],
    recommendedProducts: [
      { name: 'Vendor Management System', slug: 'vendor-management', code: 'VMS' },
      { name: 'Inventory Management System', slug: 'inventory-management', code: 'IMS' }
    ],
    impactMetrics: [
      { label: 'Vendor Onboarding Speed', value: '4x' },
      { label: 'Contract Compliance', value: '99.8%' },
      { label: 'Invoice Processing Time', value: '-65%' }
    ],
    iconName: 'Share2'
  },
  {
    id: 'manufacturing-plants',
    title: 'Manufacturing & Plants',
    badge: 'Plant & Gate Control',
    tagline: 'Orchestrate raw material intake, yard queues, and finished goods movement.',
    description: 'Eliminate plant gate congestion, coordinate supplier truck appointments, enforce safety checklists, and streamline raw material consumption across manufacturing facilities.',
    challenges: [
      'Truck congestion outside factory gates causing municipal issues',
      'Unsynchronized raw material arrivals causing assembly line delays',
      'Manual gate pass registers and lack of driver verification logs',
      'Disputes with carriers over weighbridge discrepancies and detention'
    ],
    solutionsProvided: [
      'Digital gate pass generation with driver KYC and vehicle number verification',
      'Time-slotted dock appointment scheduling and live yard staging queue',
      'Hardware integration with weighbridges, ANPR cameras, and boom barriers',
      'Automated BOM material issue tracking to production lines'
    ],
    recommendedProducts: [
      { name: 'Gate / Yard Management', slug: 'gate-yard-management', code: 'YMS' },
      { name: 'Warehouse Management System', slug: 'wms', code: 'WMS' }
    ],
    impactMetrics: [
      { label: 'Gate Turnaround Time', value: '-65%' },
      { label: 'Detention Costs', value: '$0' },
      { label: 'Yard Visibility', value: '100%' }
    ],
    iconName: 'Factory'
  },
  {
    id: 'retail-distribution',
    title: 'Retail & Multi-Store Distribution',
    badge: 'Multi-Store Balancing',
    tagline: 'Prevent store stock-outs, automate store replenishments, and track stock turnover.',
    description: 'Empower retail brands and franchises with centralized inventory control across store chains, automated store replenishment requests, and point-of-sale integrated inventory ledgers.',
    challenges: [
      'Stock-outs on best-selling items while slow movers occupy valuable floor space',
      'Slow and error-prone inter-store stock transfers',
      'Inconsistent product catalog and pricing across regional stores',
      'Delayed purchasing decisions due to lagged store sales reports'
    ],
    solutionsProvided: [
      'Automated minimum/maximum threshold triggers with suggested transfer orders',
      'Inter-store transfer dispatch slips with barcode scan receiving',
      'Centralized item master catalog with multi-tier pricing and tax rules',
      'Real-time retail inventory valuation (FIFO and Weighted Average)'
    ],
    recommendedProducts: [
      { name: 'Inventory Management System', slug: 'inventory-management', code: 'IMS' },
      { name: 'Warehouse Management System', slug: 'wms', code: 'WMS' }
    ],
    impactMetrics: [
      { label: 'Stock-Out Incidents', value: '-85%' },
      { label: 'Working Capital Free-Up', value: '22%' },
      { label: 'Transfer Accuracy', value: '100%' }
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'hospitality-dining',
    title: 'Hospitality & Dining',
    badge: 'Guest Experience & POS',
    tagline: 'Delight guests with instant check-in, contactless QR dining, and unified billing.',
    description: 'Modernize hotel properties, boutique resorts, and multi-outlet restaurants with an integrated front office, live housekeeping dispatch, touchless QR room dining, and Kitchen Display Systems.',
    challenges: [
      'Long queues at front desk during peak check-in/out hours',
      'Missed room service orders and delayed food delivery to guest rooms',
      'Housekeeping delays leading to unavailable rooms for arriving guests',
      'Disjointed restaurant and room billing causing invoice discrepancies'
    ],
    solutionsProvided: [
      'Express individual and corporate check-in with digital guest registration',
      'Interactive in-room QR code food menu with direct Kitchen (KDS) order routing',
      'Live mobile housekeeping app for instant room readiness status',
      'Unified GST-compliant folio billing combining stay, dining, and amenities'
    ],
    recommendedProducts: [
      { name: 'Hotel ERP', slug: 'hotel-erp', code: 'HERP' },
      { name: 'Inventory Management System', slug: 'inventory-management', code: 'IMS' }
    ],
    impactMetrics: [
      { label: 'Check-In Speed', value: '45 sec' },
      { label: 'F&B In-Room Revenue', value: '+32%' },
      { label: 'Room Turnaround Time', value: '25 min' }
    ],
    iconName: 'Hotel'
  },
  {
    id: 'distribution-wholesale',
    title: 'Distribution & Wholesale',
    badge: 'B2B Trade & Dispatch',
    tagline: 'Accelerate bulk order fulfillment, credit monitoring, and multi-location dispatches.',
    description: 'Designed for high-volume B2B distributors and wholesale traders to streamline large consignment orders, customer credit terms, batch traceability, and multi-hub fulfillment.',
    challenges: [
      'Managing massive catalog batches with varying expiry and tax rates',
      'Delays in processing bulk dispatch manifests and e-way bills',
      'Tracking credit limits and outstanding receivables across retail clients',
      'Coordinating split-shipments from multiple regional warehouses'
    ],
    solutionsProvided: [
      'Batch and lot management with strict FEFO/FIFO dispatch rules',
      'One-click automated invoice, e-way bill, and transport manifest printing',
      'Credit limit controls and customer ledger tracking',
      'Multi-warehouse order routing for closest-point fulfillment'
    ],
    recommendedProducts: [
      { name: 'Warehouse Management System', slug: 'wms', code: 'WMS' },
      { name: 'Transport Management System', slug: 'tms', code: 'TMS' }
    ],
    impactMetrics: [
      { label: 'Dispatch Manifest Speed', value: '5x' },
      { label: 'Batch Traceability', value: '100%' },
      { label: 'Fulfillment Costs', value: '-19%' }
    ],
    iconName: 'PackageCheck'
  },
  {
    id: 'enterprise-operations',
    title: 'Enterprise Operations',
    badge: 'Custom Architecture',
    tagline: 'Bespoke software architecture engineered around your unique business logic.',
    description: 'When off-the-shelf software falls short, Codefest Studio designs, develops, and integrates custom software, enterprise portals, workflow automations, and AI-enabled decision engines.',
    challenges: [
      'Siloed legacy software that fails to communicate with modern tools',
      'Complex unique business processes not supported by generic SaaS',
      'Scalability and security bottlenecks in outdated on-premise systems',
      'Lack of unified executive analytics and operational visibility'
    ],
    solutionsProvided: [
      'Custom web and mobile application engineering with modern microservices',
      'Bidirectional API integration connecting ERPs, CRMs, and payment gateways',
      'Role-based enterprise security, SSO, and audit-logged operations',
      'Custom dashboards, executive reporting, and predictive AI decision support'
    ],
    recommendedProducts: [
      { name: 'Custom Technology Solutions', slug: 'custom-technology', code: 'CUSTOM' }
    ],
    impactMetrics: [
      { label: 'Process Automation', value: '80%' },
      { label: 'System Integration', value: '100% APIs' },
      { label: 'Uptime SLA', value: '99.95%' }
    ],
    iconName: 'Cpu'
  }
];
