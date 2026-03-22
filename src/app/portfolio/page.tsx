"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang } from "../components/LangContext";
import { t } from "../translations";

const screenshots = [
  "/screenshots/devcash.jpg",
  "/screenshots/degent.jpg",
  "/screenshots/maisonsukoh.jpg",
  "/screenshots/bitcoincay.jpg",
  "/screenshots/blockspace.jpg",
];

const urls = [
  "https://devcash.dev",
  "https://degent.club",
  "https://maisonsukoh.com",
  "https://bitcoincay.ca",
  "https://block.space",
];

export default function PortfolioPage() {
  const { lang } = useLang();
  const c = t[lang];
  const works = [c.work.w1, c.work.w2, c.work.w3, c.work.w4, c.work.w5];

  return (
    <div className="min-h-screen bg-[#f9f8f6]">
      <Nav />

      <section className="px-6 pt-16 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="animate-fade-in-up text-[clamp(2rem,5vw,4rem)] font-bold leading-[1] tracking-tighter text-gray-900">
            {c.work.heading}
          </h1>
          <p className="animate-fade-in-up-delay-1 mt-4 text-sm text-gray-400">
            {c.work.label}
          </p>

          <div className="mt-20 grid gap-20">
            {works.map((w, i) => (
              <div key={i} className="grid items-start gap-8 md:grid-cols-2">
                <a href={urls[i]} target="_blank" rel="noopener noreferrer" className="group relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image src={screenshots[i]} alt={w.title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </a>
                <div className="flex flex-col justify-center">
                  <p className="mb-4 text-[10px] uppercase tracking-widest text-gray-300">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900">
                    {w.title}
                  </h2>
                  <p className="mb-2 text-xs uppercase tracking-wider text-gray-400">
                    {w.sub}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {w.desc}
                  </p>
                  <a href={urls[i]} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-900 transition-colors hover:text-gray-500">
                    Visit site <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
