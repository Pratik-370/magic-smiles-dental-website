export interface NavItem {
  label: string;
  to: string;
}

export const SITE_INFO = {
  businessName: 'Magic Smiles Dental and Orthodontics',
  shortBusinessName: 'Magic Smiles Dental & Orthodontics',
  announcementText: 'Office hours Mon-Sat: 9:00AM - 6:00PM',
  phoneDisplay: '661-516-2904',
  phoneHref: 'tel:6615162904',
  addressHomeAndFooter: '2935 Oswell St. Bakersfield, CA 93306',
  addressContactFull: '2935 Oswell St, Bakersfield, CA 93306, USA',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=2935+Oswell+St,+Bakersfield,+CA+93306',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=35.3999541,-118.9496722&z=15&output=embed',
  logoSrc: '/assets/brand/logo/magic-smiles-logo.jpg',
  logoAlt: 'Magic Smiles Dental',
  headerCtaLabel: 'Book Your Appointment',
  headerCtaTo: '/contact',
  copyright: 'Copyright © 2025 Magic Smiles Dental - All Rights Reserved.',
  designedBy: 'Designed by ZehoTech',
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Services', to: '/our-services' },
  { label: 'Contact', to: '/contact' },
];

export const COOKIE_BANNER = {
  title: 'This website uses cookies.',
  message:
    'We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.',
  acceptLabel: 'Accept',
  storageKey: 'magic_smiles_cookie_consent_v1',
} as const;
