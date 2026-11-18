export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Klien & Proyek', href: '#klien', id: 'klien' },
  { label: 'Layanan', href: '#layanan', id: 'layanan' },
  { label: 'Produk Unggulan', href: '#produk', id: 'produk' },
  { label: 'Nilai SPORTIF', href: '#nilai', id: 'nilai' },
  { label: 'Teknologi', href: '#teknologi', id: 'teknologi' },
  { label: 'Kontak', href: '#kontak', id: 'kontak' },
];

export const COMPANY_INFO = {
  legalName: 'PT Global Agra Ripta Solusindo',
  brandName: 'GARISDev',
  foundedYear: '2014',
  address: '18 Office Park Suite, Jl. TB. Simatupang No. 18, RT 002/RW 001, Kel. Kebagusan, Kec. Pasar Minggu, Jakarta Selatan 12520',
  addressShort: '18 Office Park Suite, Jl. TB. Simatupang No. 18, Jakarta Selatan 12520',
  phone: '(021) 80674603',
  whatsapp: '+62 813-8729-7524',
  email: 'Relation@garisdev.co.id',
  website: 'www.garisdev.co.id',
  websiteUrl: 'https://www.garisdev.co.id',
  whatsappUrl: 'https://wa.me/6281387297524?text=Halo%20GARISDev%2C%20saya%20ingin%20berkonsultasi%20mengenai%20kebutuhan%20pengembangan%20sistem%20dan%20solusi%20teknologi%20informasi.',
  mapsUrl: 'https://maps.google.com/?q=18+Office+Park+Suite+Jl+TB+Simatupang+18+Jakarta+Selatan',
};

export const COMPANY_PROFILE = {
  href: '/documents/company-profile-garisdev-2026.pdf',
  fileName: 'COMPANY-PROFILE-GARISDEV-2026.pdf',
  format: 'PDF',
  size: '2,1 MB',
  language: 'Indonesia',
  edition: '2026',
};

export interface ClientItem {
  name: string;
  logo: string;
  category?: string;
}

export const CLIENTS: ClientItem[] = [
  { name: 'BNPT RI', logo: '/assets/clients/trim/01_bnpt_ri.png', category: 'Lembaga Non-Kementerian' },
  { name: 'Mabes TNI', logo: '/assets/clients/trim/02_mabes_tni.png', category: 'Instansi Pertahanan RI' },
  { name: 'Kemnaker RI', logo: '/assets/clients/trim/03_kemnaker_ri.png', category: 'Kementerian Ketenagakerjaan' },
  { name: 'JFX Exchange', logo: '/assets/clients/trim/04_jfx_exchange.png', category: 'Bursa Berjangka Jakarta' },
  { name: 'PT ISP', logo: '/assets/clients/trim/05_isp.png', category: 'PT Inti Sinergi Persada' },
  { name: 'Asuransi Jasindo', logo: '/assets/clients/trim/06_asuransi_jasindo.png', category: 'BUMN Asuransi Jasa Indonesia' },
  { name: 'Mom N Jo', logo: '/assets/clients/trim/07_mom_n_jo.png', category: 'Spa & Wellness Network' },
  { name: 'Kementan RI', logo: '/assets/clients/trim/08_kementan_ri.png', category: 'Kementerian Pertanian' },
  { name: 'PT Adinata Graha Raya', logo: '/assets/clients/trim/09_adinata_graha_raya.png', category: 'Pengembang Properti Nasional' },
];

export interface StrategicProjectItem {
  no: number;
  title: string;
  year: string;
  category: string;
  client: string;
  description: string;
}

export const STRATEGIC_PROJECTS: StrategicProjectItem[] = [
  {
    no: 1,
    title: 'BNPT E-Government',
    year: '2019',
    category: 'Pemerintah / Lembaga Negara',
    client: 'Badan Nasional Penanggulangan Terorisme (BNPT RI)',
    description: 'Platform e-government untuk digital profiling, pemantauan web dan media sosial, pelacakan kebocoran data (leaked data tracking), serta analisis kata kunci otomatis.',
  },
  {
    no: 2,
    title: 'Aplikasi Matkomlek Skomlek Mabes TNI',
    year: '2022',
    category: 'Instansi Pertahanan',
    client: 'Skomlek Mabes TNI',
    description: 'Platform berbasis web untuk pemantauan, validasi, dan evaluasi ulang aset sistem komunikasi dan elektronik beserta pemetaan kerentanannya.',
  },
  {
    no: 3,
    title: 'Aplikasi Pemetaan Perumahan',
    year: '2023',
    category: 'Geospatial & GIS',
    client: 'Kementerian / Lembaga Terkait',
    description: 'Aplikasi pemetaan perumahan berbasis geospasial (GIS) untuk pengelolaan data lokasi hunian, informasi proyek, dan pemantauan berbasis wilayah.',
  },
  {
    no: 4,
    title: 'Website & Digital Platform JFX.CO.ID',
    year: '2024',
    category: 'Bursa & Korporasi',
    client: 'Jakarta Futures Exchange (JFX)',
    description: 'Platform informasi digital resmi Jakarta Futures Exchange (jfx.co.id) yang dirancang untuk memperkuat kehadiran daring, komunikasi korporat, dan distribusi informasi.',
  },
  {
    no: 5,
    title: 'Corporate Platform PT ISP',
    year: '2025',
    category: 'Korporasi Nasional',
    client: 'PT Inti Sinergi Persada',
    description: 'Website korporat ptisp.id dan platform informasi digital terpadu untuk mendukung komunikasi bisnis dan penyampaian konten perusahaan.',
  },
  {
    no: 6,
    title: 'Integrated Spa & Wellness System Mom N Jo',
    year: '2025',
    category: 'Enterprise POS & Operations',
    client: 'Mom N Jo Network',
    description: 'Sistem manajemen spa dan wellness terintegrasi mencakup reservasi, kasir (POS), perawatan, manajemen terapis, paket layanan, dan pelaporan operasional.',
  },
];

export interface CoreServiceItem {
  title: string;
  description: string;
  iconName: 'compass' | 'globe' | 'smartphone' | 'git-merge' | 'layout-dashboard' | 'wrench';
  tags?: string[];
}

export const CORE_SERVICES: CoreServiceItem[] = [
  {
    title: 'Digital Strategy & Consulting',
    description: 'Perencanaan arsitektur teknologi terpadu, analisis kelayakan sistem, dan penyusunan roadmap transformasi digital enterprise.',
    iconName: 'compass',
  },
  {
    title: 'Web Application Development',
    description: 'Pengembangan aplikasi web modern yang scalable, aman, dan berkinerja tinggi sesuai kebutuhan proses bisnis nyata.',
    iconName: 'globe',
  },
  {
    title: 'Mobile App Development',
    description: 'Pengembangan aplikasi mobile native (iOS & Android) dan cross-platform dengan performa optimal untuk operasional bisnis.',
    iconName: 'smartphone',
  },
  {
    title: 'System Integration',
    description: 'Integrasi sistem heterogen melalui arsitektur API terpadu, middleware aman, dan pipeline transmisi data antar-aplikasi.',
    iconName: 'git-merge',
  },
  {
    title: 'Dashboard & Business Intelligence',
    description: 'Visualisasi data real-time, monitoring operasional, dan analitik data untuk memperkuat kontrol dan pengambilan keputusan manajemen.',
    iconName: 'layout-dashboard',
  },
  {
    title: 'Maintenance & Technology Support',
    description: 'Layanan pemeliharaan sistem terencana, mitigasi keamanan berkala, dan optimalisasi performa teknologi secara berkelanjutan.',
    iconName: 'wrench',
  },
];

export interface FlagshipProductItem {
  id: string;
  number: string;
  name: string;
  subheading: string;
  badge: string;
  category: string;
  iconName: 'sparkles' | 'building-2' | 'store' | 'briefcase' | 'hotel' | 'ambulance' | 'brain-circuit';
  description: string;
  modules: string[];
}

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'Semua Platform (7)' },
  { id: 'hospitality', label: 'Spa & Wellness' },
  { id: 'property', label: 'Apartemen & Residensial' },
  { id: 'commercial', label: 'Mall & Tenant' },
  { id: 'property-dev', label: 'Developer Properti' },
  { id: 'hotel', label: 'Hotel & Resort' },
  { id: 'healthcare', label: 'Layanan Ambulans' },
  { id: 'ai', label: 'Riset & AI Intelijen' },
];

export const FLAGSHIP_PRODUCTS: FlagshipProductItem[] = [
  {
    id: 'wellora',
    number: '01',
    name: 'Wellora',
    subheading: 'Spa & Wellness Management System',
    badge: 'HOSPITALITY & WELLNESS',
    category: 'hospitality',
    iconName: 'sparkles',
    description: 'Sistem operasional jaringan gerai spa, penjadwalan terapis presisi, POS modern, dan kontrol stok multi-cabang terintegrasi.',
    modules: ['Booking', 'POS Kasir', 'Manajemen Terapis', 'Membership', 'Inventori', 'Laporan Pendapatan'],
  },
  {
    id: 'aparthub',
    number: '02',
    name: 'ApartHub',
    subheading: 'Residential & Apartment Management Platform',
    badge: 'PROPERTY MANAGEMENT',
    category: 'property',
    iconName: 'building-2',
    description: 'Platform ekosistem hunian modern untuk pengelola gedung dan penghuni: auto-billing IPL, tiket perbaikan, dan visitor pass QR.',
    modules: ['Aplikasi Penghuni', 'Auto-Billing IPL', 'Visitor Pass', 'Tiket Layanan', 'Booking Fasilitas', 'Executive Dashboard'],
  },
  {
    id: 'tenanthub',
    number: '03',
    name: 'TenantHub',
    subheading: 'Tenant & Mall Management Platform',
    badge: 'COMMERCIAL & RETAIL',
    category: 'commercial',
    iconName: 'store',
    description: 'Portal pengelola kawasan komersial dan tenant: rekonsiliasi sewa, billing utilitas, izin kerja fit-out, dan antrean loading dock.',
    modules: ['Portal Tenant', 'Billing Utilitas', 'Izin Kerja (Permit)', 'Jadwal Loading Dock', 'Tiket Layanan', 'Alur Kepatuhan'],
  },
  {
    id: 'propera',
    number: '04',
    name: 'Propera',
    subheading: 'Property Developer Management Platform',
    badge: 'PROPERTY DEVELOPER',
    category: 'property-dev',
    iconName: 'briefcase',
    description: 'Platform manajemen developer properti terpadu untuk mengelola proses penjualan unit dari prospek awal hingga serah terima fisik.',
    modules: ['Manajemen Prospek (Lead)', 'Booking Unit', 'Inventori Unit', 'Penagihan Pembayaran', 'Serah Terima (Handover)', 'Layanan Purnajual'],
  },
  {
    id: 'stayora',
    number: '05',
    name: 'Stayora',
    subheading: 'Hotel Management & Guest Experience Platform',
    badge: 'HOTEL & RESORT PMS',
    category: 'hotel',
    iconName: 'hotel',
    description: 'Property Management System (PMS) untuk reservasi kamar instan, profil tamu, koordinasi housekeeping, dan analitik okupansi real-time.',
    modules: ['Reservasi Kamar', 'Profil Tamu', 'Koordinasi Housekeeping', 'Room Service', 'Billing', 'Hotel Dashboard'],
  },
  {
    id: 'goambulan',
    number: '06',
    name: 'GoAmbulan',
    subheading: 'Healthcare On-Demand Platform',
    badge: 'HEALTHCARE DISPATCH',
    category: 'healthcare',
    iconName: 'ambulance',
    description: 'Platform dispatching ambulans darurat dengan live GPS tracking armada, integrasi rumah sakit rujukan, dan navigasi rute tercepat.',
    modules: ['Pemesanan Ambulans', 'Dispatching Darurat', 'Live GPS Tracking', 'Manajemen Perjalanan Pasien', 'Monitoring Operator'],
  },
  {
    id: 'aira',
    number: '07',
    name: 'AIRA',
    subheading: 'Advanced Intelligence Research & Analytics',
    badge: 'AI & INTELLIGENCE',
    category: 'ai',
    iconName: 'brain-circuit',
    description: 'Platform analitik cerdas berbasis AI untuk pemantauan percakapan publik, deteksi sentimen real-time, dan pelaporan intelijen otomatis.',
    modules: ['Riset Digital', 'Pemantauan Multi-Kanal', 'Analisis Sentimen', 'Workspace Investigasi', 'Pelaporan Intelijen'],
  },
];

export const OTHER_DIGITAL_SOLUTIONS: string[] = [
  'E-Government Application System',
  'Academic Information System',
  'PSB / Student Admission Platform',
  'Hospital Information System',
  'Human Resource Information System (HRIS)',
  'Inventory Management System',
  'Retail Sales Information System',
  'Finance & Budget Planning System',
  'Document & Archive Management System',
  'Correspondence Management System (E-Office)',
  'Customer Relationship Management System (CRM)',
  'Travel Umrah Management Platform',
  'Dashboard & Business Intelligence System',
  'Custom Mobile Application',
  'API Development & System Integration',
];

export interface SportifItem {
  letter: string;
  title: string;
  description: string;
}

export const SPORTIF_VALUES: SportifItem[] = [
  {
    letter: 'S',
    title: 'Sustainability',
    description: 'Mempertahankan kualitas layanan terbaik secara berkelanjutan bagi mitra klien.',
  },
  {
    letter: 'P',
    title: 'Professional',
    description: 'Mengedepankan kompetensi, efektivitas, dan efisiensi serta bertanggung jawab penuh atas hasil pekerjaan.',
  },
  {
    letter: 'O',
    title: 'Observe',
    description: 'Mengamati perkembangan teknologi terkini agar dapat diaplikasikan secara tepat guna.',
  },
  {
    letter: 'R',
    title: 'Relationship',
    description: 'Membangun kemitraan strategis yang baik dan bersinergi untuk mencapai harapan perusahaan serta stakeholder.',
  },
  {
    letter: 'T',
    title: 'Trust',
    description: 'Menjaga kepercayaan pelanggan dan stakeholder di setiap tahap kerja sama.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    description: 'Menciptakan inovasi dan terobosan baru dalam rangka memberikan solusi terbaik.',
  },
  {
    letter: 'F',
    title: 'Flexible',
    description: 'Mampu beradaptasi dan menyesuaikan diri dengan perkembangan teknologi serta kebutuhan bisnis terkini.',
  },
];

export interface TechCategory {
  category: string;
  description: string;
  items: { name: string; note?: string }[];
}

export const TECH_CAPABILITIES: TechCategory[] = [
  {
    category: 'Mobile & Web Framework',
    description: 'Framework modern berkinerja tinggi untuk aplikasi native dan web skala enterprise.',
    items: [
      { name: 'Android Native' },
      { name: 'iOS Apple Developer' },
      { name: 'Flutter' },
      { name: 'Laravel' },
      { name: 'Goravel' },
      { name: 'Inertia.js' },
    ],
  },
  {
    category: 'Enterprise Database',
    description: 'Mesin database performa tinggi untuk skalabilitas data, reliabilitas, dan integritas transaksi.',
    items: [
      { name: 'Oracle Database' },
      { name: 'Microsoft SQL Server' },
      { name: 'Tibero Database' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
    ],
  },
  {
    category: 'Business Intelligence & Analytics',
    description: 'Perangkat analitik dan visualisasi data eksekutif untuk pengambilan keputusan strategis.',
    items: [
      { name: 'Tableau' },
      { name: 'IBM Cognos' },
    ],
  },
  {
    category: 'Infrastructure, Network & Communication',
    description: 'Infrastruktur cloud, server fisik, jaringan privat aman, dan komunikasi enterprise.',
    items: [
      { name: 'Linux' },
      { name: 'Dell Server' },
      { name: 'MikroTik' },
      { name: 'Cloudflare' },
      { name: 'Tailscale' },
      { name: 'Asterisk VoIP' },
    ],
  },
];
