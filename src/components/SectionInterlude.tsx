import React from 'react';
import Image from 'next/image';

export function SectionInterlude() {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="relative h-[54svh] min-h-[340px] md:h-[64svh]">
        <Image
          src="/assets/photos/interlude-office.jpg"
          alt="Koridor kantor modern dengan partisi kaca dan cahaya alami"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/20" />

        <div className="absolute inset-0 flex items-end">
          <div className="shell pb-10 md:pb-16">
            <p className="max-w-[26ch] font-serif text-[clamp(1.6rem,3.4vw,2.85rem)] italic leading-[1.18] tracking-[-0.015em] text-paper md:max-w-[34ch]">
              “Sistem yang baik tidak menarik perhatian. Ia hanya bekerja,
              setiap hari, tanpa kompromi.”
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-paper/55">
              Filosofi rekayasa GARISDev
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
