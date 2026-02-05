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
  },
  {
    date: "Feb 25",
    locationName: "The Boiler Room",
    neighborhood: "Station North",
    vibe: "Industrial & Artsy",
    details:
      "A creative stronghold for designers and developers alike. Great acoustics for focused work.",
    revealDate: new Date("2026-02-06T00:00:00"),
  },
  {
    date: "Feb 26",
    locationName: "Oakes & Anchor",
    neighborhood: "Fells Point",
    vibe: "Cozy & Historical",
    details:
      "The final push. Work from a converted wharf space at the edge of the harbor.",
    revealDate: new Date("2026-02-09T00:00:00"),
  },
];

export const NAV_LINKS = [
  { label: "The Mission", href: "#mission" },
  { label: "Schedule", href: "#schedule" },
];
