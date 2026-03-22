"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang } from "../components/LangContext";
import { t } from "../translations";

export default function ServicesPage() {
  const { lang } = useLang();
  const c = t[lang];
  const services = [c.services.s1, c.services.s2, c.services.s3];

  return (
    <div className="min-h-screen bg-[#f9f8f6]">
      <Nav />

      <section className="px-6 pt-16 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="animate-fade-in-up text-[clamp(2rem,5vw,4rem)] font-bold leading-[1] tracking-tighter text-gray-900">
            {c.services.heading}
          </h1>
          <p className="animate-fade-in-up-delay-1 mt-4 text-sm text-gray-400">
            {c.services.label}
          </p>

          <div className="mt-20 grid gap-20">
            {services.map((s, i) => (
              <div key={i} className="grid items-start gap-8 md:grid-cols-[120px_1fr]">
                <p className="text-[clamp(3rem,6vw,5rem)] font-bold leading-none tracking-tighter text-gray-100">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900">
                    {s.title}
                  </h2>
                  <p className="max-w-lg text-sm leading-relaxed text-gray-400">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-900 transition-colors hover:text-gray-500"
            >
              {c.hero.cta} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
