"use client";

import { useLang } from "./LangContext";
import { t } from "../translations";

export default function Footer() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <footer className="border-t border-gray-200/60 px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-8 max-w-md text-xs leading-relaxed text-gray-400">
          {c.footer.desc}
        </p>
        <div className="flex flex-col justify-between gap-3 text-[10px] uppercase tracking-wider text-gray-300 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Bay Designer Studio</p>
          <p>{c.footer.location}</p>
        </div>
      </div>
    </footer>
  );
}
