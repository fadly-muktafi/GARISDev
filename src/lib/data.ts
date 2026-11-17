export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Klien', href: '#klien', id: 'klien' },
  { label: 'Layanan', href: '#layanan', id: 'layanan' },
  { label: 'Produk Unggulan', href: '#produk', id: 'produk' },
  { label: 'Nilai SPORTIF', href: '#nilai', id: 'nilai' },
  { label: 'Kontak', href: '#kontak', id: 'kontak' },
];

export const COMPANY_INFO = {
  legalName: 'PT Global Agra Ripta Solusindo',
  brandName: 'GARISDev',
  foundedYear: '2014',
  address: '18 Office Park Suite, Jl. TB. Simatupang No. 18, Jakarta Selatan 12520',
  phone: '(021) 80674603',
  whatsapp: '+62 813-8729-7524',
  email: 'Relation@garisdev.co.id',
  whatsappUrl: 'https://wa.me/6281387297524?text=Halo%20GARISDev%2C%20saya%20ingin%20berkonsultasi%20mengenai%20solusi%20rekayasa%20perangkat%20lunak%20enterprise.',
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

export const CREDENTIALS = [
  { label: 'Badan Hukum', value: 'PT Global Agra Ripta Solusindo' },
  { label: 'Akta Pendirian', value: 'No. 394 · 29 Januari 2021' },
  { label: 'NIB', value: '124700220599' },
  { label: 'NPWP', value: '41.298.684.6-017.000' },
  { label: 'SIUP', value: 'PP No. 24 Tahun 2018' },
];

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

export type PreviewVariant = 'chart' | 'list' | 'map';

export interface FlagshipProductItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  preview: PreviewVariant;
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
    preview: 'chart',
    description: 'Sistem operasional jaringan gerai spa, penjadwalan terapis presisi, POS modern, dan kontrol stok multi-cabang terintegrasi.',
    modules: ['Booking Online', 'POS Kasir', 'Multi-Outlet'],
  },
  {
    id: 'aparthub',
    name: 'ApartHub',
    badge: 'RESIDENTIAL APARTMENT',
    category: 'property',
    preview: 'map',
    description: 'Platform ekosistem hunian modern untuk pengelola gedung dan penghuni: auto-billing IPL, tiket perbaikan, dan visitor pass QR.',
    modules: ['Resident App', 'Auto Billing IPL', 'Visitor Pass QR'],
  },
  {
    id: 'tenanthub',
    name: 'TenantHub',
    badge: 'MALL & TENANT PORTAL',
    category: 'commercial',
    preview: 'list',
    description: 'Portal pengelola kawasan komersial dan tenant: rekonsiliasi sewa, billing utilitas, izin kerja fit-out, dan antrean loading dock.',
    modules: ['Portal Tenant', 'Billing Utilitas', 'Permit-to-Work'],
  },
  {
    id: 'stayora',
    name: 'Stayora',
    badge: 'HOTEL & RESORT PMS',
    category: 'hotel',
    preview: 'chart',
    description: 'Property Management System (PMS) untuk reservasi kamar instan, profil tamu, koordinasi housekeeping, dan analitik okupansi real-time.',
    modules: ['Front Desk PMS', 'Housekeeping', 'Live Occupancy'],
  },
  {
    id: 'goambulan',
    name: 'GoAmbulan',
    badge: 'EMERGENCY DISPATCH',
    category: 'healthcare',
    preview: 'map',
    description: 'Platform dispatching ambulans darurat dengan live GPS tracking armada, integrasi rumah sakit rujukan, dan navigasi rute tercepat.',
    modules: ['Live GPS Fleet', 'Integrasi RS', 'Emergency Dispatch'],
  },
  {
    id: 'aira',
    name: 'AIRA',
    badge: 'AI RESEARCH & INTEL',
    category: 'ai',
    preview: 'list',
    description: 'Platform analitik cerdas berbasis AI untuk pemantauan percakapan publik, deteksi sentimen real-time, dan pelaporan intelijen otomatis.',
    modules: ['AI Sentiment', 'Multi-Channel', 'Intel Dashboard'],
  },
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
    description: 'Mempertahankan kualitas layanan terbaik, keandalan kode, dan dukungan sistem jangka panjang bagi mitra klien.',
  },
  {
    letter: 'P',
    title: 'Professional',
    description: 'Mengutamakan kompetensi teknis, efektivitas, efisiensi kerja, serta tanggung jawab penuh atas solusi yang dikembangkan.',
  },
  {
    letter: 'O',
    title: 'Observe',
    description: 'Proaktif mengamati dan mengadopsi perkembangan teknologi terkini agar dapat diaplikasikan secara optimal pada kebutuhan klien.',
  },
  {
    letter: 'R',
    title: 'Relationship',
    description: 'Membangun kemitraan strategis yang sinergis dan berkelanjutan dengan prinsip saling menguntungkan.',
  },
  {
    letter: 'T',
    title: 'Trust',
    description: 'Menjaga kepercayaan klien dan seluruh pemangku kepentingan melalui integritas kerja dan keamanan data.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    description: 'Menciptakan inovasi dan terobosan teknologi dalam rangka memberikan solusi terbaik bagi efisiensi operasional.',
  },
  {
    letter: 'F',
    title: 'Flexible',
    description: 'Mampu beradaptasi dan menyesuaikan solusi dengan dinamika kebutuhan bisnis serta perkembangan teknologi terkini.',
  },
];
