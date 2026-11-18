import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Phone, MessageSquare, Mail, Globe } from 'lucide-react';
import { COMPANY_INFO, COMPANY_PROFILE } from '@/lib/data';
import { DownloadButton } from './ui/download-button';
import { Reveal } from './ui/reveal';

const CONTACTS = [
  {
    label: 'Telepon Kantor',
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}`,
    icon: Phone,
  },
  {
    label: 'WhatsApp Konsultasi',
    value: COMPANY_INFO.whatsapp,
    href: COMPANY_INFO.whatsappUrl,
    external: true,
    icon: MessageSquare,
  },
  {
    label: 'Email Korespondensi',
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
    icon: Mail,
  },
  {
    label: 'Website Resmi',
    value: COMPANY_INFO.website,
    href: COMPANY_INFO.websiteUrl,
    external: true,
    icon: Globe,
  },
];

export function SectionPrimaryAction() {
  return (
    <section id="kontak" className="bg-paper py-20 text-ink md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-16">
          {/* Kolom Kiri: Alamat, Foto Gedung, dan Kontak Resmi */}
          <div>
            <Reveal>
              <h2 className="max-w-[20ch] text-balance font-display text-[clamp(1.9rem,4vw,3.1rem)] font-medium leading-[1.05] tracking-[-0.035em]">
                Konsultasi Solusi &amp; Profil Perusahaan
              </h2>
              <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
                Diskusikan kebutuhan arsitektur perangkat lunak, sistem E-Government, dan integrasi enterprise Anda langsung bersama tim teknis GARISDev.
              </p>
            </Reveal>

            {/* Foto Gedung 18 Office Park */}
            <Reveal delay={0.05}>
              <div className="mt-8 overflow-hidden rounded-xl border border-line bg-white shadow-2xs">
                <div className="relative aspect-[16/9] w-full bg-paper">
                  <Image
                    src="/assets/gedung-18-office-park.png"
                    alt="Gedung 18 Office Park Suite, Jl. TB. Simatupang, Jakarta Selatan"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border-t border-line/60">
                  <MapPin className="h-4 w-4 shrink-0 text-brand mt-0.5" strokeWidth={1.75} />
                  <div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint block">
                      Kantor Pusat
                    </span>
                    <a
                      href={COMPANY_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-[13px] leading-relaxed text-ink font-medium hover:text-brand transition-colors"
                    >
                      {COMPANY_INFO.address}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Kanal Kontak Resmi */}
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col rounded-xl border border-line bg-white overflow-hidden shadow-2xs">
                {CONTACTS.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      {...(contact.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex items-center justify-between gap-4 p-4 border-b border-line/60 last:border-b-0 hover:bg-paper-deep/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper text-ink-soft group-hover:text-brand transition-colors">
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="text-[9.5px] uppercase tracking-[0.14em] text-ink-faint block">
                            {contact.label}
                          </span>
                          <span className="text-[13.5px] font-medium text-ink group-hover:text-brand transition-colors">
                            {contact.value}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight
                        className="h-4 w-4 text-ink-faint transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Kolom Kanan: Card Unduh Dokumen Company Profile */}
          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <div className="relative w-full rounded-2xl border border-line bg-white p-7 text-ink shadow-sm sm:p-9">
              <span className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-brand" aria-hidden="true" />

              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/assets/garisdev-logo-dark-cropped.png"
                  alt="GARISDev"
                  width={1053}
                  height={279}
                  sizes="100px"
                  className="h-5 w-auto object-contain"
                />
              </div>

              <div className="mt-8">
                <h3 className="font-display text-[22px] font-medium leading-tight tracking-[-0.03em] sm:text-[25px]">
                  PT Global Agra Ripta Solusindo
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-muted">
                  Unduh dokumen resmi profil perusahaan untuk kebutuhan evaluasi internal, pengadaan B2B/pemerintah, rekam jejak portofolio, dan arsitektur kapabilitas sistem.
                </p>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5">
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Format File</dt>
                  <dd className="mt-1 text-[13px] font-medium text-ink">{COMPANY_PROFILE.format}</dd>
                </div>
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Ukuran Dokumen</dt>
                  <dd className="tnum mt-1 text-[13px] font-medium text-ink">{COMPANY_PROFILE.size}</dd>
                </div>
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Bahasa</dt>
                  <dd className="mt-1 text-[13px] font-medium text-ink">{COMPANY_PROFILE.language}</dd>
                </div>
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Edisi Terbitan</dt>
                  <dd className="tnum mt-1 text-[13px] font-medium text-ink">{COMPANY_PROFILE.edition}</dd>
                </div>
              </dl>

              <DownloadButton
                variant="brand"
                className="mt-8 min-h-[54px] w-full rounded-xl text-[13.5px] font-semibold shadow-sm"
                label="Unduh Company Profile (PDF)"
              />
              <p className="mt-3.5 text-center text-[11px] text-ink-faint">
                Unduhan langsung tanpa formulir registrasi.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
