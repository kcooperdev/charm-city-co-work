import React from "react";
import { CoWorkEvent } from "./types";

export const EVENTS: CoWorkEvent[] = [
  {
    date: "Feb 24",
    locationName: "Adee's Coffee & Bar",
    neighborhood: "Fells Point",
    vibe: "Modern & Professional",
    details:
      "Adee's Coffee Roasters is the kind of place where the aroma grabs you from the sidewalk and the first sip convinces you to stay awhile.",
    revealDate: new Date("2026-02-05T00:00:00"),
    eventUrl: "https://luma.com/7f7j7tbf",
  },
  {
    date: "Feb 25",
    locationName: "Tech Cafe Baltimore",
    neighborhood: "Mid-Town Belvedere",
    vibe: "Industrial & Artsy",
    details:
      "Tech Cafe is a no-frills neighborhood spot known for quick, comfort food and a laid-back vibe in Baltimore's Mid-Town Belvedere.",
    revealDate: new Date("2026-02-06T00:00:00"),
    eventUrl: "https://luma.com/pbeegk9h",
  },
  {
    date: "Feb 26",
    locationName: "Red Emma's Bookstore Coffeehouse",
    neighborhood: "Waverly",
    vibe: "Cozy & Historical",
    details:
      "9am - 5pm. Veg-friendly bookstore-cafe with a bright interior, featuring vegan versions of comfort food classics, espresso drinks and pastries.",
    revealDate: new Date("2026-02-09T00:00:00"),
    eventUrl: "https://luma.com/dcfsuxe2",
  },
];

export const NAV_LINKS = [
  { label: "The Mission", href: "#mission" },
  { label: "Schedule", href: "#schedule" },
];
