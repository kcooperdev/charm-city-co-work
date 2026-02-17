export interface CoWorkEvent {
  date: string;
  locationName: string;
  neighborhood: string;
  vibe: string;
  details: string;
  revealDate: Date;
  eventUrl?: string;
}

export enum VibeType {
  QUIET = "Quiet & Focused",
  SOCIAL = "Social & Collaborative",
  CAFFEINATED = "High Caffeine / High Energy",
  CREATIVE = "Artsy & Inspiring",
}
