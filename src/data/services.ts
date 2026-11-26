export interface ServiceDetailItem {
  id: string;
  anchorId: string;
  index: string;
  categoryBadge: string;
  title: string;
  leadTerm: string;
  descriptionBody: string;
  highlights: readonly string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  ctaLabel: string;
  ctaTo: string;
}

export const SERVICES_META = {
  title: 'Our Services | Magic Smiles Dental and Orthodontics',
  description:
    'Explore our comprehensive dental and orthodontic services, including mobile dental outreach, preventive dentistry, and personalized orthodontic treatments.',
} as const;

export const SERVICES_HERO = {
  eyebrow: 'Dental & Orthodontic Care',
  heading: 'Our Services',
  intro: 'We provide a full range of dental and orthodontic treatments.',
  paymentSummary: 'We accept Medi-Cal, PPO insurance, and cash.',
  primaryCtaLabel: 'Book Your Appointment',
  primaryCtaTo: '/contact',
  phoneDisplay: '661-516-2904',
  phoneHref: 'tel:6615162904',
  imageSrc: '/assets/services/services-contact-child-exam.jpg',
  imageAlt: 'Dentist examining a young girl smiling comfortably in a dental chair',
} as const;

export const SERVICES_CLINICAL_LIST: readonly ServiceDetailItem[] = [
  {
    id: 'general-preventive',
    anchorId: 'general-preventive-dentistry',
    index: '01',
    categoryBadge: 'Preventive & Family Care',
    title: 'General & Preventive Dentistry',
    leadTerm: 'General and Preventive Dentistry',
    descriptionBody:
      ' includes regular checkups, professional cleanings, digital X-rays, and oral health screenings to keep your teeth and gums strong. We also provide fillings, sealants, fluoride treatments, and gum disease care to prevent problems before they develop and to maintain long-term oral health.',
    highlights: [
      'Regular checkups',
      'Professional cleanings',
      'Digital X-rays',
      'Fillings & sealants',
      'Fluoride treatments',
      'Gum disease care',
    ],
    imageSrc: '/assets/services/services-general-preventive.jpg',
    imageAlt: 'A girl smiling at a dentist during a checkup.',
    imagePosition: 'center 20%',
    ctaLabel: 'Book Your Appointment',
    ctaTo: '/contact',
  },
  {
    id: 'orthodontics',
    anchorId: 'orthodontics',
    index: '02',
    categoryBadge: 'Alignment & Bite Care',
    title: 'Orthodontics',
    leadTerm: 'Orthodontics',
    descriptionBody:
      ' is available for children, teens, and adults who want straighter, healthier smiles. We offer traditional braces as well as clear aligners, with customized treatment plans designed to correct misalignments, improve bite function, and enhance overall appearance.',
    highlights: [
      'Traditional braces',
      'Clear aligners',
      'Children, teens, and adults',
    ],
    imageSrc: '/assets/services/services-orthodontics.jpg',
    imageAlt: 'Child undergoing dental checkup while holding a toy.',
    imagePosition: 'center 15%',
    ctaLabel: 'Schedule a Consultation',
    ctaTo: '/contact',
  },
  {
    id: 'implants-restoration',
    anchorId: 'dental-implants-restoration',
    index: '03',
    categoryBadge: 'Restorative Care & Extractions',
    title: 'Dental Implants & Restoration',
    leadTerm: 'Dental Implants',
    descriptionBody:
      ' help restore both function and confidence for patients with missing or damaged teeth. Our team places permanent dental implants, creates natural-looking crowns and bridges, and provides partial and full dentures. When necessary, we also perform gentle tooth extractions to protect overall health and prepare for future restorations.',
    highlights: [
      'Permanent dental implants',
      'Crowns and bridges',
      'Partial & full dentures',
      'Gentle tooth extractions',
    ],
    imageSrc: '/assets/services/services-implants-restoration.jpg',
    imageAlt: "Dentist examining a patient's teeth.",
    imagePosition: 'center 20%',
    ctaLabel: 'Contact Our Practice',
    ctaTo: '/contact',
  },
  {
    id: 'sedation-dentistry',
    anchorId: 'sedation-dentistry',
    index: '04',
    categoryBadge: 'Smile Care',
    title: 'Sedation Dentistry',
    leadTerm: 'Sedation Dentistry',
    descriptionBody:
      ' is designed for those who want to improve the look of their smile. We offer professional teeth whitening treatments, custom veneers, and complete smile makeovers that can dramatically enhance appearance while preserving a natural look.',
    highlights: [
      'Teeth whitening treatments',
      'Custom veneers',
      'Complete smile makeovers',
    ],
    imageSrc: '/assets/services/services-sedation-dentistry.jpg',
    imageAlt: 'Dental shade matching for teeth whitening.',
    imagePosition: 'center center',
    ctaLabel: 'Book Your Appointment',
    ctaTo: '/contact',
  },
  {
    id: 'pediatric-dentistry',
    anchorId: 'pediatric-dentistry',
    index: '05',
    categoryBadge: 'Core Practice Focus',
    title: 'Pediatric Dentistry',
    leadTerm: 'Pediatric Dentistry',
    descriptionBody:
      ' is a core part of our practice, and we are dedicated to making every child’s dental visit a positive one. We focus on preventive care, early orthodontic evaluations, and education to encourage lifelong healthy habits, all while ensuring children feel comfortable and safe.',
    highlights: [
      'Preventive care',
      'Early orthodontic evaluations',
      'Lifelong healthy habits education',
    ],
    imageSrc: '/assets/services/services-pediatric-dentistry.jpg',
    imageAlt: 'Young boy at dental clinic holding dental X-ray.',
    imagePosition: 'center 18%',
    ctaLabel: 'Book Your Appointment',
    ctaTo: '/contact',
  },
] as const;

export const MOBILE_OUTREACH_PROGRAM = {
  id: 'mobile-outreach',
  anchorId: 'mobile-dental-outreach-programs',
  index: '06',
  categoryBadge: 'Community Outreach Program',
  title: 'Mobile Dental Outreach Programs',
  leadTerm: 'Mobile Dental Outreach Programs',
  descriptionBody:
    ' proudly serve schools, community centers, and local organizations by delivering on-site dental checkups, preventive treatments, and oral health education. This program ensures that even patients with limited access to transportation can still receive the dental services they need.',
  pillars: [
    'Schools, community centers & local organizations',
    'On-site dental checkups & preventive treatments',
    'Oral health education with zero clinic travel barriers',
  ],
  imageSrc: '/assets/services/mobile-dental-outreach-bus.jpg',
  imageAlt: 'Dentist On Call (DOC) Mobile Dental Outreach vehicle serving schools and community organizations',
  ctaLabel: 'Get in Touch',
  ctaTo: '/contact',
} as const;

export const SERVICES_DIRECTORY_ITEMS = [
  ...SERVICES_CLINICAL_LIST.map((item) => ({
    id: item.id,
    anchorId: item.anchorId,
    index: item.index,
    title: item.title,
    kind: 'Service' as const,
  })),
  {
    id: MOBILE_OUTREACH_PROGRAM.id,
    anchorId: MOBILE_OUTREACH_PROGRAM.anchorId,
    index: MOBILE_OUTREACH_PROGRAM.index,
    title: MOBILE_OUTREACH_PROGRAM.title,
    kind: 'Community Program' as const,
  },
] as const;

export const SERVICES_CONTACT_SECTION = {
  eyebrow: 'Contact Us',
  heading: 'Visit Us Today!',
  description: 'We provide a full range of dental and orthodontic treatments.',
  businessName: 'Magic Smiles Dental and Orthodontics',
  address: 'South Oswell Street, Bakersfield, CA 93307, USA',
  phoneDisplay: '661-516-2904',
  phoneHref: 'tel:6615162904',
  primaryCtaLabel: 'Book Your Appointment',
  primaryCtaTo: '/contact',
  toggleButtonLabel: 'Send a note',
  formTitle: 'Send a note',
  submitLabel: 'Send',
  cancelLabel: 'Cancel',
} as const;
