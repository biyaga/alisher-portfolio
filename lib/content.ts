/**
 * Facts that are the same in every language.
 * Edit here to change links; translated text lives in lib/i18n/.
 */

export const profile = {
  name: "Alisher Abdullamitov",
  initials: "AA",
  telegram: "ziywarbiy",
  email: "biyaga2221@gmail.com",
  // Phone number intentionally not published.
};

export type ProjectId = "kundelik" | "yuristbiy";

export const projects: { id: ProjectId; name: string; url?: string }[] = [
  {
    id: "kundelik",
    name: "Yurist Kúndelik",
    url: undefined, // add the live link when it is ready, e.g. "https://..."
  },
  {
    id: "yuristbiy",
    name: "Yuristbiy AI",
    url: undefined, // add the live link when it is ready
  },
];

/** Add entries here later; while empty the section shows "Soon". */
export const writing: { title: string; url: string; date: string }[] = [];
export const reading: { title: string; author: string; url?: string }[] = [];
