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
      w1: { title: "E-Commerce Platform", sub: "Design & Development", desc: "A fully custom e-commerce experience built for scale. From product pages to checkout, every detail designed for conversion." },
      w2: { title: "Brand Identity", sub: "Strategy & Visual Design", desc: "A complete brand overhaul — logo, type system, color palette, and guidelines that unify every touchpoint." },
      w3: { title: "SaaS Dashboard", sub: "Product Design", desc: "An intuitive analytics dashboard that turns complex data into clear, actionable insights." },
      w4: { title: "Marketing Site", sub: "Web Development", desc: "A high-performance marketing site built to convert visitors into customers." },
      w5: { title: "AI Integration", sub: "Telegram & OpenClaw", desc: "A seamless AI website manager integration — letting clients manage their site through natural conversation." },
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
      w1: { title: "Plateforme E-Commerce", sub: "Design & Développement", desc: "Une expérience e-commerce entièrement sur mesure, conçue pour la croissance. Chaque détail pensé pour la conversion." },
      w2: { title: "Identité de marque", sub: "Stratégie & Design visuel", desc: "Une refonte complète de marque — logo, typographie, palette de couleurs et directives unifiant chaque point de contact." },
      w3: { title: "Tableau de bord SaaS", sub: "Design produit", desc: "Un tableau de bord analytique intuitif qui transforme des données complexes en informations claires et exploitables." },
      w4: { title: "Site marketing", sub: "Développement web", desc: "Un site marketing performant conçu pour convertir les visiteurs en clients." },
      w5: { title: "Intégration IA", sub: "Telegram & OpenClaw", desc: "Une intégration fluide de gestionnaire IA — permettant aux clients de gérer leur site par conversation naturelle." },
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
