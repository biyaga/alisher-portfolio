export const en = {
  langName: "English",
  skip: "Skip to content",
  nav: {
    projects: "Projects",
    writing: "Writing",
    reading: "Reading",
    contact: "Contact",
  },
  toggles: {
    theme: "Switch between dark and light theme",
    lang: "Choose language",
  },
  hero: {
    kicker: "Law × AI",
    role: "Law Student / AI Engineer",
    intro:
      "I study law and build AI tools that make legal knowledge easier to reach, starting with Karakalpakstan, Uzbekistan.",
    prompt: "researching law and legal technology",
    scaleTitle: "Pixel-art balance scale, the symbol of justice",
    cta: "See projects",
  },
  projects: {
    title: "Projects",
    status: "In progress",
    linkSoon: "Link soon",
    open: "Open",
    items: {
      kundelik: {
        tag: "Encyclopedia",
        topics: ["Terminology", "Education"],
        description:
          "A legal and law terminology encyclopedia for students, professors and people from all walks of life.",
      },
      yuristbiy: {
        tag: "AI assistant",
        topics: ["AI", "Legal research"],
        description:
          "A legal assistant that helps students and professors find legal information in a new way, instead of relying only on books.",
      },
    },
  },
  writing: {
    title: "Writing",
    text: "Notes and essays on law, technology and AI.",
  },
  reading: {
    title: "Reading",
    text: "Books and papers I am reading on law and AI.",
  },
  soon: "Soon",
  contact: {
    title: "Contact",
    text: "Open to research collaboration, student projects and LegalTech ideas.",
    telegram: "Telegram",
    email: "Email",
  },
  footer: {
    rights: "All rights reserved.",
    top: "top",
  },
};

/** Every language must provide the same keys as English. */
export type Dict = typeof en;
