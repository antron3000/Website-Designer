"use client";

import { ArrowUpRight } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLang } from "../components/LangContext";
import { t } from "../translations";

export default function ContactPage() {
  const { lang } = useLang();
  const c = t[lang];

  return (
    <div className="min-h-screen bg-[#f9f8f6]">
      <Nav />

      <section className="px-6 pt-16 pb-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[800px]">
          <h1 className="animate-fade-in-up text-[clamp(2rem,5vw,4rem)] font-bold leading-[1] tracking-tighter text-gray-900">
            {c.contact.heading1}
            <br />
            {c.contact.heading2}
          </h1>
          <p className="animate-fade-in-up-delay-1 mt-4 text-sm text-gray-400">
            {c.contact.label}
          </p>

          <form className="animate-fade-in-up-delay-2 mt-16 space-y-8">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
                {c.contact.formName}
              </label>
              <input
                type="text"
                className="w-full border-b border-gray-200 bg-transparent py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gray-900 placeholder:text-gray-300"
                placeholder={c.contact.formName}
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
                {c.contact.formEmail}
              </label>
              <input
                type="email"
                className="w-full border-b border-gray-200 bg-transparent py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gray-900 placeholder:text-gray-300"
                placeholder={c.contact.formEmail}
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-gray-400">
                {c.contact.formMessage}
              </label>
              <textarea
                rows={4}
                className="w-full resize-none border-b border-gray-200 bg-transparent py-3 text-sm text-gray-900 outline-none transition-colors focus:border-gray-900 placeholder:text-gray-300"
                placeholder={c.contact.formMessage}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-900 transition-colors hover:text-gray-500"
            >
              {c.contact.formSend} <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </form>

          <div className="mt-24 border-t border-gray-200/60 pt-10">
            <a
              href="mailto:hello@baydesignerstudio.com"
              className="inline-flex items-center gap-2 border-b border-gray-300 pb-2 text-sm text-gray-900 transition-colors hover:border-gray-900"
            >
              hello@baydesignerstudio.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
