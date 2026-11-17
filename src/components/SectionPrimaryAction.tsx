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
    <section id="kontak" className="bg-brand py-20 text-paper md:py-28">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <h2 className="max-w-[15ch] text-balance font-display text-[clamp(2rem,4.4vw,3.3rem)] font-medium leading-[1.02] tracking-[-0.04em]">
                Bawa presisi ini ke meja Anda.
              </h2>
              <p className="mt-6 max-w-[44ch] text-[14px] leading-relaxed text-paper/85 lg:text-[15px]">
                Unduh dokumen resmi perusahaan untuk evaluasi internal: rekam
                jejak proyek, kompetensi tim, legalitas, dan arsitektur solusi
                GARISDev.
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
                    className="group flex items-baseline justify-between gap-4 border-t border-paper/25 py-4 last:border-b"
                  >
                    <span className="text-[10px] uppercase tracking-[0.18em] text-paper/75">
                      {contact.label}
                    </span>
                    <span className="flex items-center gap-2 text-[13.5px] font-medium text-paper/90 transition-colors duration-200 group-hover:text-paper">
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
                className="link-underline mt-5 inline-block max-w-[46ch] text-[11.5px] leading-relaxed text-paper/75 hover:text-paper"
              >
                {COMPANY_INFO.address}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="relative w-full max-w-[460px] bg-paper p-7 text-ink sm:p-9">
              <span className="absolute inset-x-0 top-0 h-1 bg-ink" aria-hidden="true" />

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
                variant="ink"
                className="mt-8 min-h-[54px] w-full"
                label="Unduh Company Profile"
              />
              <p className="mt-3 text-center text-[10.5px] text-ink-faint">
                Tanpa formulir. Unduhan langsung.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
