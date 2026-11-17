import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, COMPANY_PROFILE } from '@/lib/data';
import { DownloadButton } from './ui/download-button';
import { Reveal } from './ui/reveal';

const CONTACTS = [
  { label: 'Email', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
  { label: 'Telepon', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}` },
  { label: 'WhatsApp', value: COMPANY_INFO.whatsapp, href: COMPANY_INFO.whatsappUrl, external: true },
];

export function SectionPrimaryAction() {
  return (
    <section id="kontak" className="bg-paper py-20 text-ink md:py-28 border-t border-line">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <h2 className="max-w-[20ch] text-balance font-display text-[clamp(2rem,4.4vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.035em]">
                Dokumen profil perusahaan dan konsultasi teknis
              </h2>
              <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted lg:text-[16px]">
                Dapatkan dokumen resmi Company Profile PT Global Agra Ripta Solusindo
                untuk meninjau kapabilitas rekayasa teknologi, portofolio solusi, dan
                rekam jejak implementasi sistem secara komprehensif.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-10 flex flex-col">
                {CONTACTS.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    {...(contact.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-baseline justify-between gap-4 border-t border-line py-4 last:border-b"
                  >
                    <span className="text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                      {contact.label}
                    </span>
                    <span className="flex items-center gap-2 text-[13.5px] font-medium text-ink transition-colors duration-200 group-hover:text-brand">
                      {contact.value}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                ))}
              </div>

              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-5 inline-block max-w-[46ch] text-[12px] leading-relaxed text-ink-muted hover:text-ink"
              >
                {COMPANY_INFO.address}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="relative w-full max-w-[460px] bg-white border border-line p-7 text-ink shadow-sm sm:p-9">
              <span className="absolute inset-x-0 top-0 h-1 bg-brand" aria-hidden="true" />

              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/assets/garisdev-logo-dark-cropped.png"
                  alt="GARISDev"
                  width={1053}
                  height={279}
                  sizes="96px"
                  className="h-5 w-auto object-contain"
                />
                <span className="text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                  {COMPANY_PROFILE.format} · {COMPANY_PROFILE.edition}
                </span>
              </div>

              <div className="mt-14">
                <p className="font-display text-[22px] font-medium leading-tight tracking-[-0.03em] sm:text-[25px]">
                  PT Global Agra Ripta Solusindo
                </p>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5">
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Format</dt>
                  <dd className="mt-1 text-[12.5px] font-medium">{COMPANY_PROFILE.format}</dd>
                </div>
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Ukuran</dt>
                  <dd className="tnum mt-1 text-[12.5px] font-medium">{COMPANY_PROFILE.size}</dd>
                </div>
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Bahasa</dt>
                  <dd className="mt-1 text-[12.5px] font-medium">{COMPANY_PROFILE.language}</dd>
                </div>
                <div>
                  <dt className="text-[9.5px] uppercase tracking-[0.16em] text-ink-faint">Edisi</dt>
                  <dd className="tnum mt-1 text-[12.5px] font-medium">{COMPANY_PROFILE.edition}</dd>
                </div>
              </dl>

              <DownloadButton
                variant="brand"
                className="mt-8 min-h-[54px] w-full"
                label="Unduh Company Profile"
              />
              <p className="mt-3 text-center text-[10.5px] text-ink-faint">
                Tanpa formulir. Unduhan langsung dokumen PDF.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
