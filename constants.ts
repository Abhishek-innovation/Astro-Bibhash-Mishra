import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'voice-15',
    title: 'Astrology Voice Recording (15 Min)',
    description: 'Concise reading focusing on one specific major query.',
    duration: '15 Minutes',
    price: 3000
  },
  {
    id: 'voice-30',
    title: 'Astrology Voice Recording (30 Min)',
    description: 'Detailed reading covering major life aspects.',
    duration: '30 Minutes',
    price: 5100
  },
  {
    id: 'voice-45',
    title: 'Astrology Voice Recording (45 Min)',
    description: 'In-depth analysis including dasha periods and remedies.',
    duration: '45 Minutes',
    price: 11000
  },
  {
    id: 'voice-60',
    title: 'Astrology Voice Recording (1 Hour)',
    description: 'Comprehensive life reading with extensive Q&A coverage.',
    duration: '1 Hour',
    price: 21000
  },
  {
    id: 'call-15',
    title: 'Telephonic Call Session (15 Min)',
    description: 'Quick consultation to discuss immediate specific questions.',
    duration: '15 Minutes',
    price: 5100
  },
  {
    id: 'call-30',
    title: 'Telephonic Call Session (30 Min)',
    description: 'Live conversation to discuss your specific concerns in detail.',
    duration: '30 Minutes',
    price: 11000
  },
  {
    id: 'call-45',
    title: 'Telephonic Call Session (45 Min)',
    description: 'Premium extended session for complete chart analysis and guidance.',
    duration: '45 Minutes',
    price: 51000
  },
  {
    id: 'vastu',
    title: 'Vastu Consultation',
    description: 'Analysis of your living or workspace for positive energy flow.',
    duration: 'Consultation',
    price: 21000
  },
  {
    id: 'motivation',
    title: 'Motivation Voice Recording (1 Hour)',
    description: 'Astrological guidance combined with motivational coaching and live examples.',
    duration: '1 Hour',
    price: 51000
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Book Now', href: '#booking' },
];