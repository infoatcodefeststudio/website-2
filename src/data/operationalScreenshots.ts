export type OperationalScreen = {
  id: string;
  label: string;
  src: string;
  alt: string;
};

export type OperationalViewConfig = {
  windowTitle: string;
  statusLabel: string;
  statusTone: 'emerald' | 'indigo' | 'cyan';
  screens: OperationalScreen[];
};

export const WMS_OPERATIONAL_VIEW: OperationalViewConfig = {
  windowTitle: 'Codefest WMS • Inventory & warehouse control',
  statusLabel: 'Production console',
  statusTone: 'emerald',
  screens: [
    {
      id: 'dashboard',
      label: 'Active dashboard',
      src: '/images/wms/active_dashboard.png',
      alt: 'WMS inventory dashboard with stock KPIs and health widgets',
    },
    {
      id: 'kpis',
      label: 'Operations KPIs',
      src: '/images/wms/operations_kpi_widgets.png',
      alt: 'WMS operations KPI widgets and throughput metrics',
    },
    {
      id: 'monitoring',
      label: 'Real-time monitoring',
      src: '/images/wms/realtime_monitoring.png',
      alt: 'WMS real-time monitoring and floor activity view',
    },
    {
      id: 'modules',
      label: 'Warehouse modules',
      src: '/images/wms/warehouse_modules.png',
      alt: 'WMS module launcher for inbound, storage, and dispatch',
    },
  ],
};

export const TMS_OPERATIONAL_VIEW: OperationalViewConfig = {
  windowTitle: 'Codefest TMS • Ops command center',
  statusLabel: 'Fleet telemetry live',
  statusTone: 'indigo',
  screens: [
    {
      id: 'overview',
      label: 'Ops overview',
      src: '/images/tms/ops_overview.png',
      alt: 'TMS operations overview with fleet map and trip health',
    },
    {
      id: 'tracking',
      label: 'Live tracking',
      src: '/images/tms/live_tracing.png',
      alt: 'TMS live GPS tracking map and vehicle signals',
    },
    {
      id: 'bookings',
      label: 'Bookings',
      src: '/images/tms/bookigs.png',
      alt: 'TMS freight bookings and trip scheduling',
    },
    {
      id: 'masters',
      label: 'Masters',
      src: '/images/tms/masters.png',
      alt: 'TMS master data for vehicles, drivers, and routes',
    },
    {
      id: 'modules',
      label: 'Module launcher',
      src: '/images/tms/modules_launcer.png',
      alt: 'TMS module launcher and navigation hub',
    },
  ],
};

export const GMS_OPERATIONAL_VIEW: OperationalViewConfig = {
  windowTitle: 'Codefest GMS • Gate & yard command center',
  statusLabel: 'Yard telemetry live',
  statusTone: 'cyan',
  screens: [
    {
      id: 'dashboard',
      label: 'Live dashboard',
      src: '/images/gms/dashboard.png',
      alt: 'Gate management live dashboard with docks, parking, and exit bays',
    },
    {
      id: 'yard',
      label: 'Live yard',
      src: '/images/gms/live_yard.png',
      alt: 'Real-time yard view with vehicle positions and dock status',
    },
    {
      id: 'performance',
      label: 'Yard performance',
      src: '/images/gms/yard_perfomance.png',
      alt: 'Yard performance metrics and throughput indicators',
    },
    {
      id: 'analytics',
      label: 'Analytics',
      src: '/images/gms/analytics.png',
      alt: 'Gate and yard analytics reports and trends',
    },
  ],
};
