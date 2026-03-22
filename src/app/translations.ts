export const t = {
  en: {
    nav: { work: "Portfolio", services: "Services", contact: "Contact" },
    hero: { cta: "Start a project" },
    services: {
      label: "What we do",
      heading: "Our Services",
      s1: { title: "Website Design", desc: "Clean, modern sites tailored to your brand. Strategy, UI/UX, and development — start to finish." },
      s2: { title: "Full Setup", desc: "Domain, hosting, SSL, SEO, analytics. Everything configured so you launch with zero friction." },
      s3: { title: "AI Website Manager", desc: "Chat with your AI manager on Telegram. Update content, check traffic, get SEO tips — anytime." },
    },
    work: {
      label: "Selected work",
      heading: "Portfolio",
      w1: { title: "DevCash", sub: "devcash.dev", desc: "A developer-focused platform built for speed and clarity. Clean interface, powerful tooling." },
      w2: { title: "Degent Club", sub: "degent.club", desc: "A bold community hub with a distinct identity. Designed to stand out and drive engagement." },
      w3: { title: "Maison Sukoh", sub: "maisonsukoh.com", desc: "An elegant brand experience for a luxury label. Refined visuals, seamless e-commerce." },
      w4: { title: "Bitcoin Cay", sub: "bitcoincay.ca", desc: "A modern crypto-forward site built for trust and performance. Clear messaging, sharp design." },
      w5: { title: "Block.Space", sub: "block.space", desc: "A cutting-edge web3 platform. Minimal design paired with powerful blockchain integration." },
    },
    about: {
      label: "About",
      text: "A design studio on Bay Street, Toronto — combining sharp craft with AI to give every client a website that looks stunning and practically manages itself.",
    },
    contact: {
      label: "Get in touch",
      heading1: "Let\u2019s build",
      heading2: "something together.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Tell us about your project",
      formSend: "Send message",
    },
    team: {
      label: "The team",
      members: [
        { name: "Antoine De Vuyst", role: "Developer", image: "/antoine.jpg" },
        { name: "Tessia Ladas", role: "Creative Director", image: "" },
      ],
    },
    footer: {
      desc: "Bay Designer Studio designs beautiful, high-performance websites — then pairs you with an AI Website Manager you can chat with on Telegram. Powered by OpenClaw.",
      location: "Bay Street, Toronto",
    },
  },
  fr: {
    nav: { work: "Portfolio", services: "Services", contact: "Contact" },
    hero: { cta: "Démarrer un projet" },
    services: {
      label: "Ce que nous faisons",
      heading: "Nos services",
      s1: { title: "Design Web", desc: "Des sites modernes et épurés, adaptés à votre marque. Stratégie, UI/UX et développement — du début à la fin." },
      s2: { title: "Installation complète", desc: "Domaine, hébergement, SSL, SEO, analytique. Tout est configuré pour un lancement sans friction." },
      s3: { title: "Gestionnaire IA", desc: "Discutez avec votre gestionnaire IA sur Telegram. Mettez à jour le contenu, consultez le trafic, obtenez des conseils SEO — à tout moment." },
    },
    work: {
      label: "Projets sélectionnés",
      heading: "Portfolio",
      w1: { title: "DevCash", sub: "devcash.dev", desc: "Une plateforme axée développeurs, conçue pour la vitesse et la clarté. Interface épurée, outils puissants." },
      w2: { title: "Degent Club", sub: "degent.club", desc: "Un hub communautaire audacieux avec une identité distincte. Conçu pour se démarquer et stimuler l'engagement." },
      w3: { title: "Maison Sukoh", sub: "maisonsukoh.com", desc: "Une expérience de marque élégante pour un label de luxe. Visuels raffinés, e-commerce fluide." },
      w4: { title: "Bitcoin Cay", sub: "bitcoincay.ca", desc: "Un site crypto moderne conçu pour la confiance et la performance. Message clair, design percutant." },
      w5: { title: "Block.Space", sub: "block.space", desc: "Une plateforme web3 de pointe. Design minimaliste allié à une intégration blockchain puissante." },
    },
    about: {
      label: "À propos",
      text: "Un studio de design sur Bay Street, Toronto — alliant savoir-faire et intelligence artificielle pour offrir à chaque client un site web magnifique qui se gère pratiquement tout seul.",
    },
    contact: {
      label: "Nous joindre",
      heading1: "Construisons",
      heading2: "quelque chose ensemble.",
      formName: "Nom",
      formEmail: "Courriel",
      formMessage: "Parlez-nous de votre projet",
      formSend: "Envoyer le message",
    },
    team: {
      label: "L'équipe",
      members: [
        { name: "Antoine De Vuyst", role: "Développeur", image: "/antoine.jpg" },
        { name: "Tessia Ladas", role: "Directrice créative", image: "" },
      ],
    },
    footer: {
      desc: "Bay Designer Studio conçoit des sites web performants et magnifiques — puis vous accompagne avec un gestionnaire IA de site web sur Telegram. Propulsé par OpenClaw.",
      location: "Bay Street, Toronto",
    },
  },
};

export type Lang = keyof typeof t;
