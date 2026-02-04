
import React from 'react';
import { CoWorkEvent } from './types';

export const EVENTS: CoWorkEvent[] = [
  {
    date: 'Feb 24',
    locationName: 'Signal Hill Hub',
    neighborhood: 'Federal Hill',
    vibe: 'Modern & Professional',
    details: 'Kick off the crawl in the heart of South Baltimore. High ceilings and harbor views.'
  },
  {
    date: 'Feb 25',
    locationName: 'The Boiler Room',
    neighborhood: 'Station North',
    vibe: 'Industrial & Artsy',
    details: 'A creative stronghold for designers and developers alike. Great acoustics for focused work.'
  },
  {
    date: 'Feb 26',
    locationName: 'Oakes & Anchor',
    neighborhood: 'Fells Point',
    vibe: 'Cozy & Historical',
    details: 'The final push. Work from a converted wharf space at the edge of the harbor.'
  }
];

export const NAV_LINKS = [
  { label: 'The Mission', href: '#mission' },
  { label: 'Schedule', href: '#schedule' }
];
