"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useLang } from "./components/LangContext";
import { t } from "./translations";

export default function Home() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <div className="min-h-screen bg-[#f9f8f6]">
      <Nav />

      {/* ── Hero ── */}
      <section className="px-6 pt-16 pb-32 md:px-12 md:pt-24 md:pb-40 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="animate-fade-in-up mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-900 transition-colors hover:text-gray-500"
            >
              {c.hero.cta} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-16 text-center text-[10px] uppercase tracking-widest text-gray-300">{c.services.label}</p>
          <div className="grid gap-y-16 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-widest text-gray-300">01</p>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">{c.services.s1.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{c.services.s1.desc}</p>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-widest text-gray-300">02</p>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">{c.services.s2.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{c.services.s2.desc}</p>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-widest text-gray-300">03</p>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-gray-900">{c.services.s3.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{c.services.s3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work Grid ── */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-16 text-center text-[10px] uppercase tracking-widest text-gray-300">{c.work.label}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="aspect-[4/5] bg-gray-900 p-8 flex flex-col justify-end">
              <h3 className="text-xl font-semibold tracking-tight text-white">{c.work.w1.title}</h3>
              <p className="mt-2 text-xs text-gray-500">{c.work.w1.sub}</p>
            </div>
            <div className="aspect-[4/5] bg-[#e8e4df] p-8 flex flex-col justify-end">
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">{c.work.w2.title}</h3>
              <p className="mt-2 text-xs text-gray-500">{c.work.w2.sub}</p>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="aspect-square bg-[#d42b2b] p-8 flex flex-col justify-end">
              <h3 className="text-lg font-semibold tracking-tight text-white">{c.work.w3.title}</h3>
              <p className="mt-2 text-xs text-white/50">{c.work.w3.sub}</p>
            </div>
            <div className="aspect-square bg-gray-200 p-8 flex flex-col justify-end">
              <h3 className="text-lg font-semibold tracking-tight text-gray-900">{c.work.w4.title}</h3>
              <p className="mt-2 text-xs text-gray-500">{c.work.w4.sub}</p>
            </div>
            <div className="aspect-square bg-gray-900 p-8 flex flex-col justify-end">
              <h3 className="text-lg font-semibold tracking-tight text-white">{c.work.w5.title}</h3>
              <p className="mt-2 text-xs text-gray-500">{c.work.w5.sub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="mb-10 text-[10px] uppercase tracking-widest text-gray-300">{c.about.label}</p>
          <p className="text-2xl font-semibold leading-snug tracking-tight text-gray-900 sm:text-3xl">
            {c.about.text}
          </p>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="px-6 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-16 text-center text-[10px] uppercase tracking-widest text-gray-300">{c.team.label}</p>
          <div className="grid gap-12 sm:grid-cols-2 md:gap-16 max-w-[700px] mx-auto">
            {c.team.members.map((member, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-6 aspect-[3/4] w-full max-w-[280px] overflow-hidden bg-gray-200">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={280}
                      height={373}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-widest text-gray-400">
                      Photo
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-gray-900">{member.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
