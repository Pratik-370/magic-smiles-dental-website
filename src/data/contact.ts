import { SITE_INFO } from './site';

export const CONTACT_META = {
  title: 'Contact Magic Smiles Dental Office for Care in Bakersfield',
  description:
    'Contact Magic Smiles Dental & Orthodontics in Bakersfield for expert dental care. Schedule your appointment today for a healthy smile!',
} as const;

export const CONTACT_HERO = {
  eyebrow: 'Bakersfield, CA 93306',
  heading: 'Contact Us',
  introHeading: 'Schedule your appointment today!',
  paragraphs: [
    'We make it easy to get in touch with our team. Whether you have a question about our services, want to schedule an appointment, or need urgent dental care, we are here to help.',
    'Our friendly staff is ready to assist you and ensure that every visit is smooth, comfortable, and convenient.',
  ],
  phoneDisplay: SITE_INFO.phoneDisplay,
  phoneHref: SITE_INFO.phoneHref,
  hoursText: SITE_INFO.announcementText,
  address: SITE_INFO.addressContactFull,
  directionsUrl: SITE_INFO.directionsUrl,
} as const;

export const CONTACT_FORM_DATA = {
  title: 'Send us message!',
  nameLabel: 'Name',
  emailLabel: 'Email*',
  messageLabel: 'Message',
  submitLabel: 'Send',
  requiredEmailError: 'Please enter a valid email address so our validation check can verify your request.',
  unconnectedNotice:
    'Contact form delivery is not currently connected. Please call our office at 661-516-2904 for direct assistance.',
  recaptchaPrivacyUrl: 'https://policies.google.com/privacy',
  recaptchaTermsUrl: 'https://policies.google.com/terms',
} as const;

export const CONTACT_LOCATION = {
  businessName: 'Magic Smiles Dental & Orthodontics',
  address: '2935 Oswell St, Bakersfield, CA 93306, USA',
  phoneDisplay: '661-516-2904',
  phoneHref: 'tel:6615162904',
  hoursText: 'Office hours Mon-Sat: 9:00AM - 6:00PM',
  paymentNote: 'We accept Medi-Cal, PPO insurance, and cash payments',
  directionsLabel: 'Get directions',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=2935+Oswell+St,+Bakersfield,+CA+93306',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=35.3999541,-118.9496722&z=15&output=embed',
  mapTitle: 'Google Map showing Magic Smiles Dental & Orthodontics at 2935 Oswell St, Bakersfield, CA 93306',
} as const;
