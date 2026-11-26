export interface AboutStoryBlock {
  id: string;
  anchorId: string;
  index: string;
  eyebrow: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
}

export interface TrustedPillarItem {
  id: string;
  index: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
}

export const ABOUT_META = {
  title: 'Affordable Dental Care in Bakersfield | Magic Smiles Dental',
  description:
    'Explore top-notch dental care in Bakersfield with Magic Smiles Dental. We offer expert, affordable, and comprehensive services for all ages.',
} as const;

export const ABOUT_HERO = {
  eyebrow: 'Magic Smiles Dental & Orthodontics',
  heading: 'About Magic Smiles Dental',
  subheading: 'Highly Trained Dental Professionals',
  introParagraph:
    'Your oral health is essential to your overall well-being, and we’re here to make dental visits simple, stress-free, and effective. Our friendly team is committed to providing top-quality care while treating every patient like family.',
  secondaryParagraph:
    'Whether you’re due for a check-up, considering orthodontics, or need advanced treatment, Magic Smiles Dental & Orthodontics is here for you.',
  primaryCtaLabel: 'Book Your Appointment',
  primaryCtaTo: '/contact',
  secondaryCtaLabel: 'Explore Our Services',
  secondaryCtaTo: '/our-services',
} as const;

export const ABOUT_PRACTICE_CHAPTERS: readonly AboutStoryBlock[] = [
  {
    id: 'expert-dental-care',
    anchorId: 'expert-dental-care',
    index: '01',
    eyebrow: 'Comfort & Quality',
    heading: 'Expert Dental Care',
    body: 'At Magic Smiles Dental and Orthodontics, we believe that dental care should be comfortable, convenient, and affordable. We strive to provide our patients with a stress-free experience from start to finish, and we work hard to keep our prices competitive without sacrificing quality.',
    imageSrc: '/assets/about/about-expert-dental-care.jpg',
    imageAlt: 'Patient receiving dental treatment with tools in mouth.',
    imagePosition: 'center center',
  },
  {
    id: 'our-technology',
    anchorId: 'our-technology',
    index: '02',
    eyebrow: 'Diagnostic Precision',
    heading: 'Our Technology',
    body: 'We use the latest technologies and techniques to ensure that our patients receive the best possible care. From digital x-rays to 3D imaging, we have invested in the tools and equipment necessary to provide accurate diagnoses and effective treatments.',
    imageSrc: '/assets/about/about-our-technology.jpg',
    imageAlt: 'Boy smiling in dental chair after treatment.',
    imagePosition: 'center 15%',
  },
] as const;

export const ABOUT_COMMUNITY_CHAPTER: AboutStoryBlock = {
  id: 'our-community',
  anchorId: 'our-community',
  index: '03',
  eyebrow: 'Bakersfield & Beyond',
  heading: 'Our Community',
  body: 'We are proud to be a part of the Magic Smiles Dental community, and we are committed to giving back in any way we can. From sponsoring local events to volunteering our time and resources, we believe in supporting our neighbors and building strong relationships.',
  imageSrc: '/assets/about/about-our-community.jpg',
  imageAlt: 'Hands holding a large tooth model in unity.',
  imagePosition: 'center center',
};

export const TRUSTED_PROVIDER_SECTION = {
  eyebrow: 'Practice Pillars',
  heading: 'Magic Smiles Dental - Your Trusted Dental Care Provider',
  pillars: [
    {
      id: 'comprehensive-services',
      index: '01',
      heading: 'Comprehensive Dental Services',
      body: 'We offer a wide range of dental services including general dentistry, cosmetic dentistry, and orthodontic treatments. Our team of experienced professionals is dedicated to providing you with the highest quality of care in a comfortable and relaxed environment.',
      imageSrc: '/assets/about/provider-comprehensive-services.jpg',
      imageAlt: 'Child patient in dental chair smiling during a comprehensive dental exam',
      imagePosition: 'center 20%',
    },
    {
      id: 'state-of-the-art-tech',
      index: '02',
      heading: 'State-of-the-Art Technology',
      body: 'At Magic Smiles Dental, we use the latest technology to provide you with the most accurate diagnosis and the most effective treatments. From digital x-rays to laser dentistry, we have the tools and expertise to give you the best possible dental care.',
      imageSrc: '/assets/about/provider-state-of-the-art-tech.jpg',
      imageAlt: 'Dental team performing careful care in a bright clinical operatory',
      imagePosition: 'center 22%',
    },
    {
      id: 'friendly-staff',
      index: '03',
      heading: 'Friendly and Experienced Staff',
      body: 'Our team of dental professionals is committed to making your visit to our office a positive and enjoyable experience. From the moment you walk through our doors, you will be greeted with a warm smile and treated with the utmost respect and care.',
      imageSrc: '/assets/about/provider-friendly-staff.jpg',
      imageAlt: 'Smiling patient consulting comfortably with a gentle dental professional',
      imagePosition: 'center 18%',
    },
    {
      id: 'flexible-scheduling',
      index: '04',
      heading: 'Convenient and Flexible Scheduling',
      body: 'We understand that your time is valuable, which is why we offer flexible scheduling options to accommodate your busy lifestyle. Whether you need an early morning appointment or a late afternoon visit, we are here to make dental care convenient for you.',
      imageSrc: '/assets/about/provider-flexible-scheduling.jpg',
      imageAlt: 'Dentist reviewing an appointment plan on a tablet with a smiling patient',
      imagePosition: 'center 15%',
    },
    {
      id: 'affordable-care',
      index: '05',
      heading: 'Affordable Dental Care',
      body: "At Magic Smiles Dental, we believe that everyone deserves access to high-quality dental care. That's why we offer a variety of payment options and accept most dental insurance plans. We also offer financing options to help make dental care more affordable for you and your family.",
      imageSrc: '/assets/about/provider-affordable-care.jpg',
      imageAlt: 'Clinician reviewing a detailed panoramic and 3D dental imaging display',
      imagePosition: 'center center',
    },
    {
      id: 'patient-education',
      index: '06',
      heading: 'Patient Education and Prevention',
      body: "We believe that education and prevention are the keys to maintaining good oral health. That's why we take the time to educate our patients on proper oral hygiene and provide preventive care to help you avoid dental problems before they start.",
      imageSrc: '/assets/about/provider-patient-education.jpg',
      imageAlt: 'Happy young child smiling warmly in the dental chair',
      imagePosition: 'center 20%',
    },
  ] satisfies readonly TrustedPillarItem[],
} as const;

export const ABOUT_CLOSING_CTA = {
  eyebrow: 'Visit Us Today!',
  heading: 'Experience Dental Care Built Around Your Family',
  description:
    'Whether you’re due for a check-up, considering orthodontics, or need advanced treatment, Magic Smiles Dental & Orthodontics is here for you.',
  primaryCtaLabel: 'Book Your Appointment',
  primaryCtaTo: '/contact',
  secondaryCtaLabel: 'Our Services',
  secondaryCtaTo: '/our-services',
} as const;
