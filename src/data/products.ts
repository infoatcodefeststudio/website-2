export interface Product {
  id: string;
  slug: string;
  shortCode: string;
  name: string;
  category: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  headline: string;
  ctaText: string;
  iconName: string;
  stats: { label: string; value: string; trend?: string }[];
  keyBenefits: string[];
  features: string[];
  featureCategories?: { title: string; items: string[] }[];
  workflowSteps: { step: string; title: string; description: string; icon?: string }[];
  useCases: { title: string; scenario: string; outcome: string }[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  colorAccent: {
    badge: string;
    gradient: string;
    border: string;
    text: string;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'wms',
    slug: 'wms',
    shortCode: 'WMS',
    name: 'Warehouse Management System',
    category: 'Supply Chain & Logistics',
    tagline: 'Precision Inventory, Intelligent Putaway & High-Speed Fulfillment',
    shortDescription: 'Digitize and manage your complete warehouse operation from inward to storage, inventory movement, picking, packing, dispatch and reporting.',
    longDescription: 'Codefest Studio Warehouse Management System (WMS) is an enterprise-grade platform built to transform complex fulfillment centers and multi-facility operations. From automated GRN generation and dynamic 3D bin allocations to wave-based picking and automated dispatch manifests, our WMS gives your teams end-to-end control with 99.9% inventory accuracy.',
    headline: 'Complete Visibility Across Your Warehouse Operations',
    ctaText: 'Book a WMS Demo',
    iconName: 'Warehouse',
    stats: [
      { label: 'Inventory Accuracy', value: '99.9%', trend: '+14% improvement' },
      { label: 'Pick & Pack Speed', value: '3.2x', trend: 'Faster turnaround' },
      { label: 'Space Optimization', value: '+35%', trend: 'Bin density gain' },
      { label: 'Audit Time Reduction', value: '75%', trend: 'Cycle count automation' }
    ],
    keyBenefits: [
      'Reduce manual processes and paper-based tracking',
      'Improve inventory accuracy with real-time barcode / QR validation',
      'Increase warehouse floor productivity with optimized wave picking',
      'Instant real-time stock visibility across all bins and locations',
      'Reduce operational errors and mis-shipment chargebacks',
      'Improve order fulfillment speed and on-time SLA metrics',
      'Better executive management reporting and audit-ready stock ledgers'
    ],
    features: [
      'Warehouse Master',
      'Multi-Warehouse Management',
      'Inward Management',
      'GRN Management',
      'Putaway Management',
      'Bin Management',
      'Inventory Tracking',
      'Stock Movement',
      'Picking & Packing',
      'Dispatch Management',
      'Barcode / QR Code Support',
      'Batch & Lot Management',
      'Stock Adjustment',
      'Cycle Counting',
      'Warehouse User Management',
      'Dashboard & MIS',
      'Real-Time Inventory Visibility',
      'Role-Based Access',
      'Reports & Analytics'
    ],
    featureCategories: [
      {
        title: 'Inbound & Receiving',
        items: ['Inward Management', 'GRN Management', 'Barcode / QR Code Support', 'Batch & Lot Management', 'Quality Inspection Gates']
      },
      {
        title: 'Storage & Bin Optimization',
        items: ['Warehouse Master', 'Multi-Warehouse Management', 'Bin Management', 'Putaway Management', 'Cycle Counting & Stock Adjustment']
      },
      {
        title: 'Outbound & Fulfillment',
        items: ['Picking & Packing', 'Dispatch Management', 'Order Consolidation', 'Manifest Generation', 'Shipping Carrier Handover']
      },
      {
        title: 'Visibility & Governance',
        items: ['Real-Time Inventory Visibility', 'Warehouse User Management', 'Role-Based Access', 'Dashboard & MIS', 'Reports & Analytics']
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Inward & GRN', description: 'Goods arrive at bay; scanned via mobile barcode/QR and verified against Purchase Orders.' },
      { step: '02', title: 'Intelligent Putaway', description: 'System suggests optimal bin location based on velocity, weight, batch, and warehouse layout.' },
      { step: '03', title: 'Inventory Sync', description: 'Real-time stock ledger updates across all designated zones with live visibility.' },
      { step: '04', title: 'Wave Pick & Pack', description: 'Algorithmic route-optimized pick lists direct staff with scan-to-verify safety.' },
      { step: '05', title: 'Dispatch & Manifest', description: 'Automated invoice, gate pass, and transport manifest generated for immediate carrier handover.' }
    ],
    useCases: [
      {
        title: 'High-Throughput Distribution Centers',
        scenario: 'Handling 15,000+ daily SKU picks across 5 multi-tier fulfillment hubs.',
        outcome: 'Achieved 99.92% pick accuracy and shortened order-to-dispatch turnaround from 4 hours to 45 minutes.'
      },
      {
        title: 'Cold Storage & FMCG Perishables',
        scenario: 'Strict FEFO/FIFO compliance and lot traceability with expiry tracking.',
        outcome: 'Zero expired inventory write-offs and automated cycle counting during active shifts.'
      }
    ],
    faqs: [
      {
        question: 'Can Codefest WMS be customized for our specific warehouse layout and bin hierarchy?',
        answer: 'Yes. Codefest Studio customizes bin hierarchy, zone rules, pick paths, and storage constraints according to your exact physical layout and operational workflows.'
      },
      {
        question: 'Does the system support handheld barcode and QR code scanners?',
        answer: 'Yes. Our platform provides native support for industrial handheld terminals (Zebra, Honeywell, etc.), Android mobile scanners, and Bluetooth ring scanners for rapid verification.'
      },
      {
        question: 'Can we manage multiple separate warehouses under one company account?',
        answer: 'Absolutely. Codefest WMS features true multi-warehouse architecture allowing centralized inventory visibility, inter-warehouse stock transfers, and site-specific role permissions.'
      },
      {
        question: 'How does it integrate with our existing ERP or TMS?',
        answer: 'Codefest WMS provides REST APIs and pre-built connectors to integrate seamlessly with SAP, Oracle, NetSuite, Microsoft Dynamics, Tally, custom ERPs, and Transport Management systems.'
      },
      {
        question: 'How long does implementation and user training take?',
        answer: 'Standard ready-to-deploy setups are typically live in 2 to 4 weeks, including data migration, staff training, and pilot testing.'
      }
    ],
    seoTitle: 'Warehouse Management System (WMS) Software | Codefest Studio',
    seoDescription: 'Enterprise Warehouse Management System by Codefest Studio. Digitize inward, GRN, putaway, bin tracking, picking, packing, dispatch and real-time inventory.',
    colorAccent: {
      badge: 'bg-blue-50 text-blue-700 border-blue-200',
      gradient: 'from-blue-600 to-indigo-600',
      border: 'hover:border-blue-500/50',
      text: 'text-blue-600'
    }
  },
  {
    id: 'tms',
    slug: 'tms',
    shortCode: 'TMS',
    name: 'Transport Management System',
    category: 'Fleet & Logistics',
    tagline: 'End-to-End Fleet Orchestration, Route Optimization & Real-Time Tracking',
    shortDescription: 'Manage transportation operations from order creation and vehicle allocation to route planning, dispatch, live tracking and proof of delivery.',
    longDescription: 'Codefest Studio Transport Management System (TMS) empowers 3PLs, shippers, and corporate fleets with complete control over freight and delivery networks. Optimize routes with AI-assisted algorithms, track vehicles in real time with integrated GPS/SIM tracking, streamline driver payroll and attendance, and collect instant digital proof of delivery (e-POD).',
    headline: 'Smarter Transportation. Complete Delivery Visibility.',
    ctaText: 'Book a TMS Demo',
    iconName: 'Truck',
    stats: [
      { label: 'Fleet Fuel Savings', value: '18.4%', trend: 'Route optimization' },
      { label: 'On-Time Deliveries', value: '98.6%', trend: 'SLA compliance' },
      { label: 'Instant Digital POD', value: '< 2 min', trend: 'Paperless capture' },
      { label: 'Fleet Utilization', value: '+28%', trend: 'Dynamic allocation' }
    ],
    keyBenefits: [
      'Improve fleet utilization and reduce vehicle idle time',
      'Reduce overall transportation and fuel expenses with AI route planning',
      'Increase delivery visibility for operations teams and end customers',
      'Improve route efficiency and multi-drop load planning',
      'Faster proof-of-delivery (POD) collection and quick billing turnaround',
      'Better customer experience with automated tracking links and notifications',
      'Real-time operational control across owned and market-hired vehicle fleets'
    ],
    features: [
      'Transport Order Creation',
      'Trip Management',
      'Vehicle Master',
      'Driver Master',
      'Driver Attendance',
      'Vehicle Allocation',
      'Driver Allocation',
      'Route Planning',
      'AI-Assisted Route Planning',
      'Dispatch Management',
      'Live Vehicle Tracking',
      'Delivery Tracking',
      'POD Management',
      'Delivery Status',
      'Fuel Management',
      'Trip Expense Management',
      'Vendor Management',
      'Cost Tracking',
      'SLA Monitoring',
      'MIS & Analytics'
    ],
    featureCategories: [
      {
        title: 'Order & Trip Planning',
        items: ['Transport Order Creation', 'Trip Management', 'Route Planning', 'AI-Assisted Route Planning', 'Multi-Drop Scheduling']
      },
      {
        title: 'Fleet & Driver Allocation',
        items: ['Vehicle Master', 'Driver Master', 'Driver Attendance', 'Vehicle Allocation', 'Driver Allocation']
      },
      {
        title: 'Live Tracking & Fulfillment',
        items: ['Dispatch Management', 'Live Vehicle Tracking', 'Delivery Tracking', 'POD Management', 'Delivery Status Updates']
      },
      {
        title: 'Financials & Governance',
        items: ['Fuel Management', 'Trip Expense Management', 'Vendor Management', 'Cost Tracking', 'SLA Monitoring', 'MIS & Analytics']
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Order Ingestion', description: 'Consolidate freight shipments, orders, and consignment notes automatically.' },
      { step: '02', title: 'Route & Load Optimization', description: 'AI algorithm groups orders, selects appropriate vehicles, and computes the most fuel-efficient route.' },
      { step: '03', title: 'Driver & Vehicle Assignment', description: 'Assign drivers with digital trip sheets, safety checklists, and advance cash allowances.' },
      { step: '04', title: 'Live In-Transit Tracking', description: 'Real-time telemetry, geofence enter/exit triggers, and dynamic ETA updates for shippers.' },
      { step: '05', title: 'e-POD & Settlement', description: 'Driver captures customer signature and photo POD; automatic trip cost settlement and freight billing.' }
    ],
    useCases: [
      {
        title: 'Inter-City Full Truckload (FTL) & Part Truckload (LTL)',
        scenario: 'Managing 350+ trucks across nationwide multi-hub corridors.',
        outcome: 'Reduced empty miles by 22% and reduced trip settlement delay from 14 days to real-time.'
      },
      {
        title: 'Last-Mile & Urban Distribution',
        scenario: 'Daily multi-stop route dispatching with strict 2-hour customer delivery windows.',
        outcome: 'Achieved 98.6% on-time delivery rate with automated customer SMS tracking links.'
      }
    ],
    faqs: [
      {
        question: 'Does the TMS integrate with existing GPS hardware or OBD trackers?',
        answer: 'Yes. Codefest TMS integrates with all major telematics providers via API, as well as driver smartphone GPS and SIM-based cell tower tracking.'
      },
      {
        question: 'Can we manage both company-owned fleets and contracted market vehicles?',
        answer: 'Yes. The system supports mixed-fleet operations with dedicated rate cards, trip contracts, driver assignment, and vendor freight reconciliation.'
      },
      {
        question: 'How does electronic Proof of Delivery (e-POD) work?',
        answer: 'Drivers use our lightweight mobile web or app interface to upload recipient digital signatures, geo-tagged photos of cargo, and note any shortage or damage instantly.'
      },
      {
        question: 'Can we track fuel receipts, toll expenses, and driver advances per trip?',
        answer: 'Yes. Complete trip expense management is built-in, including fuel log reconciliation, FASTag/toll integrations, driver allowances, and profit-per-trip analytics.'
      }
    ],
    seoTitle: 'Transport Management System (TMS) Software | Codefest Studio',
    seoDescription: 'Enterprise Transport Management System by Codefest Studio. Vehicle allocation, AI route planning, live GPS tracking, trip expense, driver master and digital POD.',
    colorAccent: {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      gradient: 'from-indigo-600 to-violet-600',
      border: 'hover:border-indigo-500/50',
      text: 'text-indigo-600'
    }
  },
  {
    id: 'gate-yard-management',
    slug: 'gate-yard-management',
    shortCode: 'YMS',
    name: 'Gate / Yard Management System',
    category: 'Facility & Gate Logistics',
    tagline: 'Frictionless Gate Access, Dock Scheduling & Real-Time Yard Visibility',
    shortDescription: 'Manage vehicle entry, exit, yard movements, dock allocation and gate operations through one centralized platform.',
    longDescription: 'Codefest Studio Gate and Yard Management System (YMS) eliminates facility bottlenecks and driver dwell time. Automate security gate check-ins, streamline vehicle verification, manage dock appointments, and track trailer staging across massive manufacturing plants, container depots, and warehouse yards in real-time.',
    headline: 'Digitize Every Movement at Your Gate and Yard',
    ctaText: 'Book a Gate/Yard Demo',
    iconName: 'ShieldCheck',
    stats: [
      { label: 'Gate Dwell Time', value: '-65%', trend: 'Automated QR pass' },
      { label: 'Dock Turnaround', value: '+42%', trend: 'Scheduled slots' },
      { label: 'Congestion Reduction', value: '80%', trend: 'Pre-booked queues' },
      { label: 'Audit Compliance', value: '100%', trend: 'Digital logs & KYC' }
    ],
    keyBenefits: [
      'Reduce gate congestion and eliminate roadside truck queues',
      'Faster vehicle processing with digital pre-registration and QR passes',
      'Improve yard and bay utilization with dynamic dock assignment',
      'Increase facility security with driver KYC and vehicle verification',
      'Reduce driver waiting time and avoid detention charge disputes',
      'Complete real-time movement visibility from gate entry to bay exit'
    ],
    features: [
      'Vehicle Gate Entry',
      'Gate Pass Management',
      'Driver Verification',
      'Vehicle Verification',
      'Inward Vehicle Management',
      'Outward Vehicle Management',
      'Appointment Management',
      'Dock Management',
      'Yard Management',
      'Vehicle Queue Management',
      'Loading / Unloading Status',
      'Security Checklists',
      'Document Verification',
      'Gate Exit',
      'Real-Time Yard Visibility',
      'Dashboard & Reports'
    ],
    featureCategories: [
      {
        title: 'Gate Security & Inward',
        items: ['Vehicle Gate Entry', 'Gate Pass Management', 'Driver Verification', 'Vehicle Verification', 'Security Checklists']
      },
      {
        title: 'Dock & Slot Scheduling',
        items: ['Appointment Management', 'Dock Management', 'Vehicle Queue Management', 'Bay Allocation']
      },
      {
        title: 'Yard & Loading Operations',
        items: ['Yard Management', 'Inward Vehicle Management', 'Outward Vehicle Management', 'Loading / Unloading Status']
      },
      {
        title: 'Gate Out & Compliance',
        items: ['Document Verification', 'Gate Exit', 'Real-Time Yard Visibility', 'Dashboard & Reports']
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Pre-Booking / Arrival', description: 'Carrier receives appointment slot and QR pass prior to reaching facility.' },
      { step: '02', title: 'Security Gate In', description: 'Fast scan of vehicle number and driver KYC; automated weight bridge sync and pass generation.' },
      { step: '03', title: 'Yard Staging & Queue', description: 'Vehicle directed to designated staging lane; automated queue notification triggered.' },
      { step: '04', title: 'Dock Loading / Unloading', description: 'Bay sensor & operator updates loading status live to operations dashboard.' },
      { step: '05', title: 'Invoice Verification & Gate Out', description: 'Security verifies outbound e-way bill / seal integrity and timestamps gate exit.' }
    ],
    useCases: [
      {
        title: 'Manufacturing Plants & Refineries',
        scenario: 'Managing 600+ raw material & finished goods trucks entering high-security gates daily.',
        outcome: 'Reduced gate check-in time from 18 minutes to 45 seconds with 100% digital compliance recording.'
      },
      {
        title: 'Mega Retail Distribution Hubs',
        scenario: 'Complex multi-dock scheduling with 40 loading bays and peak arrival congestion.',
        outcome: 'Zero dock idle time and complete elimination of detention penalties.'
      }
    ],
    faqs: [
      {
        question: 'Can the Gate system integrate with automated boom barriers and ANPR cameras?',
        answer: 'Yes. Codefest Gate/Yard Management supports Automatic Number Plate Recognition (ANPR) cameras, RFID tag readers, and automated boom barriers.'
      },
      {
        question: 'Does it support weighbridge integration for gross and tare weights?',
        answer: 'Yes. We provide hardware interfaces to capture gross weight upon gate in and tare weight upon gate out to verify payload accuracy.'
      },
      {
        question: 'Can drivers check in using their smartphones without installing an app?',
        answer: 'Yes. We provide a lightweight mobile web portal where drivers scan an arrival QR code to check in and receive dock call-up alerts in multiple regional languages.'
      }
    ],
    seoTitle: 'Gate & Yard Management System (YMS) | Codefest Studio',
    seoDescription: 'Enterprise Gate & Yard Management System by Codefest Studio. Vehicle gate pass, driver verification, dock appointment scheduling, yard queue and real-time visibility.',
    colorAccent: {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      gradient: 'from-emerald-600 to-teal-600',
      border: 'hover:border-emerald-500/50',
      text: 'text-emerald-600'
    }
  },
  {
    id: 'vendor-management',
    slug: 'vendor-management',
    shortCode: 'VMS',
    name: 'Vendor Management System',
    category: 'Procurement & Governance',
    tagline: 'Unified Vendor Lifecycle, Digital Onboarding & Commercial Intelligence',
    shortDescription: 'Centralize vendor onboarding, documentation, compliance, performance and commercial information in one powerful platform.',
    longDescription: 'Codefest Studio Vendor Management System (VMS) transforms fragmented supplier relationships into a streamlined, high-compliance procurement engine. Manage supplier self-service onboarding, statutory KYC documents, rate contracts, quality scorecards, and multi-tier payment reconciliation in one secure environment.',
    headline: 'Manage Your Complete Vendor Lifecycle',
    ctaText: 'Book a VMS Demo',
    iconName: 'Users',
    stats: [
      { label: 'Onboarding Speed', value: '4x', trend: 'Self-service portal' },
      { label: 'Compliance Adherence', value: '99.8%', trend: 'Automated expiry alerts' },
      { label: 'Dispute Reduction', value: '72%', trend: 'Transparent rate cards' },
      { label: 'Vendor Scorecards', value: 'Real-Time', trend: 'KPI metrics tracking' }
    ],
    keyBenefits: [
      'Faster vendor onboarding with self-service registration and verification',
      'Centralized vendor master database across all departments and locations',
      'Better compliance visibility with proactive license and insurance expiry tracking',
      'Improved vendor performance through automated delivery and quality scorecards',
      'Simplified documentation with digital repository and audit trails',
      'Better commercial control with structured rate cards and invoice matching'
    ],
    features: [
      'Vendor Registration',
      'Vendor Onboarding',
      'Vendor Master',
      'KYC & Document Management',
      'Compliance Tracking',
      'Contract Management',
      'Rate Card Management',
      'Service Management',
      'Vendor Allocation',
      'Vendor Performance',
      'SLA Monitoring',
      'Vendor Billing',
      'Payment Tracking',
      'Debit / Credit Tracking',
      'Vendor Scorecard',
      'Reports & Analytics'
    ],
    featureCategories: [
      {
        title: 'Onboarding & KYC',
        items: ['Vendor Registration', 'Vendor Onboarding', 'Vendor Master', 'KYC & Document Management', 'Compliance Tracking']
      },
      {
        title: 'Commercials & Contracts',
        items: ['Contract Management', 'Rate Card Management', 'Service Management', 'Vendor Allocation']
      },
      {
        title: 'Performance & SLAs',
        items: ['Vendor Performance', 'SLA Monitoring', 'Vendor Scorecard', 'Quality Ratings']
      },
      {
        title: 'Billing & Settlement',
        items: ['Vendor Billing', 'Payment Tracking', 'Debit / Credit Tracking', 'Reports & Analytics']
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Registration Invite', description: 'Vendor receives secure invite link to fill company profile and banking details.' },
      { step: '02', title: 'KYC & Compliance Review', description: 'Automated document extraction and verification for GST, PAN, MSME, and insurance.' },
      { step: '03', title: 'Rate Contract Finalization', description: 'Department heads define contracted rate cards, terms of payment, and active service zones.' },
      { step: '04', title: 'Operational Allocation', description: 'Purchase orders and job allocations routed based on vendor performance scorecards.' },
      { step: '05', title: 'Invoice & Payment Tracking', description: 'Three-way match (PO, GRN, Invoice) with live payment milestone tracking.' }
    ],
    useCases: [
      {
        title: 'Multi-Location Enterprise Procurement',
        scenario: 'Managing 1,200+ raw material, packaging, and logistics vendors across 18 regional hubs.',
        outcome: 'Reduced vendor onboarding time from 3 weeks to 2 days while achieving 100% statutory compliance.'
      },
      {
        title: 'Service & Contractor Fleet Governance',
        scenario: 'Standardizing service contracts, rate variations, and penalty deductions.',
        outcome: 'Prevented duplicate billing and saved $380,000 annually through rate card enforcement.'
      }
    ],
    faqs: [
      {
        question: 'Can vendors log in to submit invoices and update their own bank details?',
        answer: 'Yes. Codefest VMS includes a dedicated Supplier Portal where vendors submit invoices, view PO statuses, upload renewal certificates, and raise queries.'
      },
      {
        question: 'Does the system notify us when vendor certifications or contracts are about to expire?',
        answer: 'Yes. Automated email and dashboard alerts trigger 60, 30, and 15 days prior to expiration of any insurance, contract, or statutory certificate.'
      },
      {
        question: 'How are vendor performance scorecards computed?',
        answer: 'Scorecards are generated dynamically based on on-time delivery percentages, defect/rejection rates from GRN, SLA response times, and billing dispute history.'
      }
    ],
    seoTitle: 'Vendor Management System (VMS) Software | Codefest Studio',
    seoDescription: 'Enterprise Vendor Management System by Codefest Studio. Vendor registration, KYC compliance, contract management, rate cards, scorecards and invoice tracking.',
    colorAccent: {
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      gradient: 'from-purple-600 to-pink-600',
      border: 'hover:border-purple-500/50',
      text: 'text-purple-600'
    }
  },
  {
    id: 'hotel-erp',
    slug: 'hotel-erp',
    shortCode: 'HERP',
    name: 'Hotel ERP & Hospitality Suite',
    category: 'Hospitality & Dining',
    tagline: 'Unified Front Desk, Guest Experience, Housekeeping & Smart QR Dining',
    shortDescription: 'Manage hotel operations, guest stays, billing, inventory, housekeeping, food ordering and kitchen operations through one integrated platform.',
    longDescription: 'Codefest Studio Hotel ERP is a full-stack hospitality operating system designed for boutique hotels, luxury resorts, and hotel chains. Seamlessly connect front desk check-ins, multi-folio GST billing, live room status, housekeeping workflows, and guest contactless QR food ordering with direct Kitchen Display System (KDS) integration.',
    headline: 'One Platform to Run Your Hotel Operations',
    ctaText: 'Book Hotel ERP Demo',
    iconName: 'Hotel',
    stats: [
      { label: 'Check-in Speed', value: '45 sec', trend: 'Corporate & mobile pass' },
      { label: 'F&B Order Revenue', value: '+32%', trend: 'QR digital room menu' },
      { label: 'Room Turnaround', value: '25 min', trend: 'Live housekeeping app' },
      { label: 'Billing Accuracy', value: '100%', trend: 'Integrated POS & Folio' }
    ],
    keyBenefits: [
      'Unified front office management for individual and corporate guests',
      'Touchless QR-code food ordering direct from guest rooms',
      'Instant Kitchen Order Ticket (KOT) routing to reduce meal prep time',
      'Automated GST-compliant room and dining combined folio billing',
      'Real-time housekeeping task assignment and room readiness status',
      'Integrated F&B inventory and raw material consumption tracking'
    ],
    features: [
      'Front Office Management',
      'Individual Check-In',
      'Corporate Check-In',
      'Room Management',
      'Room Availability',
      'Guest Management',
      'GST Billing',
      'Room Billing',
      'Food Billing',
      'Advance Payment',
      'Check-Out',
      'Housekeeping Management',
      'Inventory Management',
      'Kitchen Management',
      'Food Ordering',
      'Room Service',
      'QR-Based Food Menu',
      'Order Tracking',
      'Kitchen Order Status',
      'Guest Order Tracking',
      'Reports & Analytics'
    ],
    featureCategories: [
      {
        title: 'Front Office & Reservations',
        items: ['Front Office Management', 'Individual Check-In', 'Corporate Check-In', 'Room Management', 'Room Availability', 'Guest Management']
      },
      {
        title: 'Billing & Financials',
        items: ['GST Billing', 'Room Billing', 'Food Billing', 'Advance Payment', 'Split Folios', 'Check-Out']
      },
      {
        title: 'Housekeeping & Maintenance',
        items: ['Housekeeping Management', 'Room Status Updates', 'Lost & Found', 'Maintenance Work Orders']
      },
      {
        title: 'F&B, QR Menu & Kitchen (KDS)',
        items: ['QR-Based Food Menu', 'Food Ordering', 'Room Service', 'Kitchen Management', 'Order Tracking', 'Kitchen Order Status', 'Guest Order Tracking']
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Guest Check-In', description: 'Fast scan of ID, room allocation, advance deposit capture, and keycard issue.' },
      { step: '02', title: 'QR In-Room Dining', description: 'Guest scans in-room QR code; browses digital dynamic menu with dietary tags and specials.' },
      { step: '03', title: 'Kitchen KDS Order', description: 'Order instantly pings Kitchen Display System (KDS) with table/room number and preparation notes.' },
      { step: '04', title: 'Room Service Dispatch', description: 'Chef marks dish ready; room service butler assigned with live order status.' },
      { step: '05', title: 'Folio Sync & Express Check-Out', description: 'Dining charges auto-post to guest room folio; unified GST bill generated at check-out.' }
    ],
    useCases: [
      {
        title: 'Boutique Hotels & Luxury Resorts',
        scenario: 'Operating 120 rooms, 2 specialty restaurants, and 24/7 in-room dining.',
        outcome: 'Boosted average guest F&B spend by 32% via QR menu promotions and slashed billing checkout lines.'
      },
      {
        title: 'Business Hotels & Corporate Stays',
        scenario: 'High-volume corporate arrivals with customized company GST invoicing and credit ledgers.',
        outcome: 'Reduced corporate check-in time to under 1 minute with pre-generated registration cards.'
      }
    ],
    faqs: [
      {
        question: 'Do guests need to download an application to use the QR food ordering system?',
        answer: 'No. Guests simply scan the QR code in their room or restaurant table using their smartphone camera. The interactive menu opens instantly in any browser.'
      },
      {
        question: 'Does Codefest Hotel ERP support split billing and corporate GST invoicing?',
        answer: 'Yes. The system allows splitting folios between room tariff, corporate company billing, and personal dining expenses with full GST tax breakdowns.'
      },
      {
        question: 'Can the kitchen team update item availability or sold-out items in real time?',
        answer: 'Yes. Kitchen managers can mark ingredients or dishes as sold out with one click, updating the live guest QR menu immediately.'
      }
    ],
    seoTitle: 'Hotel ERP & QR In-Room Dining Software | Codefest Studio',
    seoDescription: 'Complete Hotel ERP by Codefest Studio. Front office, GST room billing, housekeeping management, QR food menu ordering, and kitchen display systems (KDS).',
    colorAccent: {
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
      gradient: 'from-amber-500 to-orange-600',
      border: 'hover:border-amber-500/50',
      text: 'text-amber-600'
    }
  },
  {
    id: 'inventory-management',
    slug: 'inventory-management',
    shortCode: 'IMS',
    name: 'Inventory Management System',
    category: 'Inventory & Stock Control',
    tagline: 'Multi-Location Stock Visibility, Automated Reorder & Real-Time Valuation',
    shortDescription: 'Manage purchasing, stock, transfers, consumption, dispatch and inventory visibility across multiple locations.',
    longDescription: 'Codefest Studio Inventory Management System (IMS) provides real-time stock control across retail outlets, regional stores, manufacturing plants, and central warehouses. Prevent stock-outs, automate purchase orders based on minimum/maximum safety thresholds, track inter-store transfers, and maintain continuous valuation records.',
    headline: 'Know What You Have. Where You Have It. When You Need It.',
    ctaText: 'Book Inventory Demo',
    iconName: 'Boxes',
    stats: [
      { label: 'Stock-Out Incidents', value: '-85%', trend: 'Automated reorder triggers' },
      { label: 'Working Capital Released', value: '22%', trend: 'Lean stock optimization' },
      { label: 'Audit Variance', value: '< 0.05%', trend: 'Real-time stock ledger' },
      { label: 'Inter-Store Transfers', value: '3x Faster', trend: 'Digital dispatch slips' }
    ],
    keyBenefits: [
      'Real-time stock visibility across all stores, depots, and branch locations',
      'Reduce revenue-killing stock-outs with dynamic reorder notifications',
      'Reduce excess inventory and obsolete carrying costs',
      'Improve purchasing efficiency with vendor lead-time tracking and PO approvals',
      'Improve inventory accuracy through barcode scan receipts and consumption logs',
      'Make confident, data-driven purchasing and stock allocation decisions'
    ],
    features: [
      'Item Master',
      'Category Management',
      'Multi-Location Inventory',
      'Purchase Orders',
      'GRN',
      'Stock Receipt',
      'Stock Transfer',
      'Stock Issue',
      'Stock Adjustment',
      'Stock Consumption',
      'Reorder Level',
      'Minimum / Maximum Stock',
      'Barcode / QR Code',
      'Batch Management',
      'Inventory Valuation',
      'Stock Ledger',
      'Real-Time Stock',
      'Inventory Reports',
      'Dashboard & Analytics'
    ],
    featureCategories: [
      {
        title: 'Master Catalog & Locations',
        items: ['Item Master', 'Category Management', 'Multi-Location Inventory', 'Barcode / QR Code', 'Batch Management']
      },
      {
        title: 'Purchasing & Receiving',
        items: ['Purchase Orders', 'GRN', 'Stock Receipt', 'Vendor Lead-Time Tracking']
      },
      {
        title: 'Stock Movements & Transfers',
        items: ['Stock Transfer', 'Stock Issue', 'Stock Consumption', 'Stock Adjustment']
      },
      {
        title: 'Valuation & Intelligence',
        items: ['Reorder Level', 'Minimum / Maximum Stock', 'Inventory Valuation (FIFO/Weighted Avg)', 'Stock Ledger', 'Dashboard & Analytics']
      }
    ],
    workflowSteps: [
      { step: '01', title: 'Threshold Alert', description: 'Item stock dips below safety threshold; system alerts purchasing with suggested PO quantities.' },
      { step: '02', title: 'PO Approval & Dispatch', description: 'Multi-level PO approval workflow with auto-dispatch to contracted supplier.' },
      { step: '03', title: 'GRN & Barcode Receipt', description: 'Storekeeper inspects items, scans barcodes, and posts Goods Receipt Note (GRN).' },
      { step: '04', title: 'Inter-Location Transfer', description: 'Branch requests replenishment; stock digitally reserved, transferred, and acknowledged.' },
      { step: '05', title: 'Consumption & Valuation Ledger', description: 'Department consumption tracked; live FIFO / weighted-average valuation ledger generated.' }
    ],
    useCases: [
      {
        title: 'Retail Chains & Multi-Store Franchises',
        scenario: 'Managing 60+ retail storefronts supplied by two regional mother warehouses.',
        outcome: 'Eliminated stock-outs of high-velocity items and automated inter-store stock balancing.'
      },
      {
        title: 'Manufacturing Assembly & Raw Materials',
        scenario: 'Tracking 4,500+ mechanical parts, consumables, and finished goods.',
        outcome: 'Zero production downtime caused by missing parts and precise bill-of-materials (BOM) consumption tracking.'
      }
    ],
    faqs: [
      {
        question: 'Does the inventory system support both FIFO and Weighted Average cost valuation?',
        answer: 'Yes. You can configure inventory valuation rules (FIFO, LIFO, or Weighted Average Cost) per product category for financial reporting.'
      },
      {
        question: 'Can we set up automated purchase orders when stock reaches reorder levels?',
        answer: 'Yes. The system can automatically generate draft or approved purchase orders to designated primary vendors when stock touches reorder thresholds.'
      },
      {
        question: 'How do stock transfers between branches work?',
        answer: 'Branch managers create a transfer request. The source warehouse dispatches the items generating an in-transit slip. Once received and scanned at destination, stock balances update immediately.'
      }
    ],
    seoTitle: 'Inventory Management System (IMS) Software | Codefest Studio',
    seoDescription: 'Enterprise Inventory Management System by Codefest Studio. Multi-location stock control, purchase orders, GRN, automated reorder levels, transfers and valuation ledger.',
    colorAccent: {
      badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      gradient: 'from-cyan-600 to-blue-600',
      border: 'hover:border-cyan-500/50',
      text: 'text-cyan-600'
    }
  }
];
