"use client";

import Link from "next/link";
import { useLang } from "./LangContext";
import { t } from "../translations";

export default function Nav() {
  const { lang, setLang } = useLang();
  const c = t[lang];

  return (
    <nav className="px-6 py-6 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link href="/" className="text-4xl font-bold tracking-tight text-gray-900">
          Bay Designer Studio
        </Link>
        <div className="flex items-center gap-8 text-[11px] uppercase tracking-wider text-gray-400">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="transition-colors hover:text-gray-900"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <Link href="/portfolio" className="hidden sm:block transition-colors hover:text-gray-900">
            {c.nav.work}
          </Link>
          <Link href="/services" className="hidden sm:block transition-colors hover:text-gray-900">
            {c.nav.services}
          </Link>
          <Link href="/contact" className="transition-colors hover:text-gray-900">
            {c.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
}
