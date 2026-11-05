export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Layanan', href: '#layanan', id: 'layanan' },
  { label: 'Produk Unggulan', href: '#produk', id: 'produk' },
  { label: 'Nilai SUPORTIF', href: '#nilai', id: 'nilai' },
  { label: 'Legalitas', href: '#legalitas', id: 'legalitas' },
  { label: 'Kontak', href: '#kontak', id: 'kontak' },
];

export const COMPANY_INFO = {
  legalName: 'PT Global Agra Ripta Solusindo',
  brandName: 'GARISDev',
  foundedYear: '2014',
  nib: '124700220599',
  npwp: '41.298.684.6-017.000',
  address: '18 Office Park Suite, Jl. TB. Simatupang No. 18, Jakarta Selatan 12520',
  phone: '(021) 80674603',
  whatsapp: '+62 813-8729-7524',
  email: 'info@garisdev.co.id',
  whatsappUrl: 'https://wa.me/6281387297524?text=Halo%20GARISDev%2C%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20rekayasa%20perangkat%20lunak%20enterprise.',
};

export interface ClientItem {
  name: string;
  logo: string;
  category?: string;
}

export const CLIENTS: ClientItem[] = [
  { name: 'BNPT RI', logo: '/assets/clients/01_bnpt_ri.png', category: 'Lembaga Non-Kementerian' },
  { name: 'Mabes TNI', logo: '/assets/clients/02_mabes_tni.png', category: 'Instansi Pertahanan RI' },
  { name: 'Kemnaker RI', logo: '/assets/clients/03_kemnaker_ri.png', category: 'Kementerian Ketenagakerjaan' },
  { name: 'JFX Exchange', logo: '/assets/clients/04_jfx_exchange.png', category: 'Bursa Berjangka Jakarta' },
  { name: 'PT ISP', logo: '/assets/clients/05_isp.png', category: 'PT Inti Sinergi Persada' },
  { name: 'Asuransi Jasindo', logo: '/assets/clients/06_asuransi_jasindo.png', category: 'BUMN Asuransi Jasa Indonesia' },
  { name: 'Mom N Jo', logo: '/assets/clients/07_mom_n_jo.png', category: 'Spa & Wellness Network' },
  { name: 'Kementan RI', logo: '/assets/clients/08_kementan_ri.png', category: 'Kementerian Pertanian' },
  { name: 'PT Adinata Graha Raya', logo: '/assets/clients/09_adinata_graha_raya.png', category: 'Pengembang Properti Nasional' },
];

export interface CoreServiceItem {
  title: string;
  description: string;
  iconName: 'compass' | 'globe' | 'smartphone' | 'git-merge' | 'layout-dashboard' | 'wrench';
  tags: string[];
}

export const CORE_SERVICES: CoreServiceItem[] = [
  {
    title: 'Digital Strategy & Consulting',
    description: 'Perencanaan roadmap arsitektur teknologi, analisis kelayakan sistem, dan audit digitalisasi enterprise secara menyeluruh.',
    iconName: 'compass',
    tags: ['Roadmap', 'Feasibility', 'Enterprise Audit'],
  },
  {
    title: 'Web Application Development',
    description: 'Pembangunan web application modern berperforma tinggi, aman, scalable, dan berlisensi arsitektur cloud native.',
    iconName: 'globe',
    tags: ['Cloud Native', 'Next.js', 'Microservices'],
  },
  {
    title: 'Mobile App Development',
    description: 'Pengembangan aplikasi iOS dan Android native serta cross-platform untuk rekayasa operasional dan kebutuhan korporat.',
    iconName: 'smartphone',
    tags: ['iOS Native', 'Android', 'Flutter'],
  },
  {
    title: 'System Integration',
    description: 'Menghubungkan berbagai sistem heterogen melalui API terpadu, middleware aman, dan pipeline transmisi data efisien.',
    iconName: 'git-merge',
    tags: ['REST & GraphQL', 'Secure Middleware'],
  },
  {
    title: 'Dashboard & Business Intelligence',
    description: 'Visualisasi data real-time, monitoring operasional, dan analitik prediktif untuk optimalisasi pengambilan keputusan strategis.',
    iconName: 'layout-dashboard',
    tags: ['Real-time Telemetry', 'Decision BI'],
  },
  {
    title: 'Maintenance & Technology Support',
    description: 'Pengawalan infrastruktur 24/7, pembaruan keamanan preventif, mitigasi risiko, dan optimalisasi sistem berkelanjutan.',
    iconName: 'wrench',
    tags: ['24/7 SLA', 'Security Audit'],
  },
];

export interface FlagshipProductItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  badgeColor: string;
  description: string;
  modules: string[];
}

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Semua Platform (6)', mobileLabel: 'Semua' },
  { id: 'hospitality', label: 'Hospitality & Wellness', mobileLabel: 'Wellora' },
  { id: 'property', label: 'Property Management', mobileLabel: 'ApartHub' },
  { id: 'commercial', label: 'Commercial & Retail', mobileLabel: 'TenantHub' },
  { id: 'hotel', label: 'Hotel & Resort', mobileLabel: 'Stayora' },
  { id: 'healthcare', label: 'Healthcare Dispatch', mobileLabel: 'GoAmbulan' },
  { id: 'ai', label: 'AI & Intelligence', mobileLabel: 'AIRA' },
];

export const FLAGSHIP_PRODUCTS: FlagshipProductItem[] = [
  {
    id: 'wellora',
    name: 'Wellora',
    badge: 'WELLNESS & SPA POS',
    category: 'hospitality',
    badgeColor: '#818CF8',
    description: 'Sistem operasional jaringan gerai spa, penjadwalan terapis presisi, POS modern, dan kontrol stok multi-cabang terintegrasi.',
    modules: ['Booking Online', 'POS Kasir', 'Multi-Outlet'],
  },
  {
    id: 'aparthub',
    name: 'ApartHub',
    badge: 'RESIDENTIAL APARTMENT',
    category: 'property',
    badgeColor: '#38BDF8',
    description: 'Platform ekosistem hunian modern untuk pengelola gedung dan penghuni: auto-billing IPL, tiket perbaikan, dan visitor pass QR.',
    modules: ['Resident App', 'Auto Billing IPL', 'Visitor Pass QR'],
  },
  {
    id: 'tenanthub',
    name: 'TenantHub',
    badge: 'MALL & TENANT PORTAL',
    category: 'commercial',
    badgeColor: '#C084FC',
    description: 'Portal pengelola kawasan komersial dan tenant: rekonsiliasi sewa, billing utilitas, izin kerja fit-out, dan antrean loading dock.',
    modules: ['Portal Tenant', 'Billing Utilitas', 'Permit-to-Work'],
  },
  {
    id: 'stayora',
    name: 'Stayora',
    badge: 'HOTEL & RESORT PMS',
    category: 'hotel',
    badgeColor: '#38BDF8',
    description: 'Property Management System (PMS) untuk reservasi kamar instan, profil tamu, koordinasi housekeeping, dan analitik okupansi real-time.',
    modules: ['Front Desk PMS', 'Housekeeping', 'Live Occupancy'],
  },
  {
    id: 'goambulan',
    name: 'GoAmbulan',
    badge: 'EMERGENCY DISPATCH',
    category: 'healthcare',
    badgeColor: '#22C55E',
    description: 'Platform dispatching ambulans darurat dengan live GPS tracking armada, integrasi rumah sakit rujukan, dan navigasi rute tercepat.',
    modules: ['Live GPS Fleet', 'Integrasi RS', 'Emergency Dispatch'],
  },
  {
    id: 'aira',
    name: 'AIRA',
    badge: 'AI RESEARCH & INTEL',
    category: 'ai',
    badgeColor: '#818CF8',
    description: 'Platform analitik cerdas berbasis AI untuk pemantauan percakapan publik, deteksi sentimen real-time, dan pelaporan intelijen otomatis.',
    modules: ['AI Sentiment', 'Multi-Channel', 'Intel Dashboard'],
  },
];

export interface SuportifItem {
  letter: string;
  pillar: string;
  title: string;
  description: string;
  color: string;
}

export const SUPORTIF_VALUES: SuportifItem[] = [
  {
    letter: 'S',
    pillar: 'PILAR 01',
    title: 'Sustainability',
    description: 'Menjaga kualitas layanan, stabilitas kode, dan keandalan sistem jangka panjang bagi mitra klien.',
    color: '#818CF8',
  },
  {
    letter: 'U',
    pillar: 'PILAR 02',
    title: 'Unggul',
    description: 'Mengedepankan keunggulan kualitas teknis, standar rekayasa terbaik, dan kompetensi teruji di setiap solusi sistem.',
    color: '#38BDF8',
  },
  {
    letter: 'P',
    pillar: 'PILAR 03',
    title: 'Professional',
    description: 'Kompetensi rekayasa tingkat tinggi, efisiensi kerja prima, dan tanggung jawab penuh atas SLA operasional.',
    color: '#818CF8',
  },
  {
    letter: 'O',
    pillar: 'PILAR 04',
    title: 'Observe',
    description: 'Senantiasa proaktif mengamati dinamika teknologi termutakhir untuk diadopsi menjadi solusi nyata.',
    color: '#38BDF8',
  },
  {
    letter: 'R',
    pillar: 'PILAR 05',
    title: 'Relationship',
    description: 'Membangun kemitraan strategis yang harmonis, saling menguntungkan, dan berkelanjutan.',
    color: '#818CF8',
  },
  {
    letter: 'T',
    pillar: 'PILAR 06',
    title: 'Trust',
    description: 'Menjaga integritas data tanpa kompromi serta memelihara kepercayaan mutlak seluruh pemangku kepentingan.',
    color: '#F59E0B',
  },
  {
    letter: 'I',
    pillar: 'PILAR 07',
    title: 'Innovation',
    description: 'Menghadirkan terobosan kreatif dan arsitektur solutif yang memecahkan tantangan operasional secara elegan.',
    color: '#C084FC',
  },
  {
    letter: 'F',
    pillar: 'PILAR 08',
    title: 'Flexible',
    description: 'Tangkas dan adaptif terhadap dinamika industri, skalabilitas bisnis, dan kebutuhan spesifik setiap klien.',
    color: '#22C55E',
  },
];
