import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'voice-15',
    title: 'Astrology Voice Recording (15 Min)',
    description: 'Concise analysis of your chart with key predictions.',
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
    price: 7500
  },
  {
    id: 'voice-60',
    title: 'Astrology Voice Recording (1 Hour)',
    description: 'Comprehensive life reading with extensive Q&A coverage.',
    duration: '1 Hour',
    price: 11000
  },
  {
    id: 'call-30',
    title: 'Telephonic Call Session',
    description: 'Live conversation to discuss your specific concerns.',
    duration: '30 Minutes',
    price: 5700
  },
  {
    id: 'vastu',
    title: 'Vastu Consultation',
    description: 'Analysis of your living or workspace for positive energy flow.',
    duration: 'Consultation',
    price: 6600
  },
  {
    id: 'motivation',
    title: 'Motivation Voice Recording',
    description: 'Astrological guidance combined with motivational coaching and live examples.',
    duration: 'Session',
    price: 12000
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Book Now', href: '#booking' },
];