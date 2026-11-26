export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
}

export interface WhyChooseBullet {
  id: string;
  segments: ReadonlyArray<{ text: string; strong?: boolean }>;
}

export interface HomeServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  cropPreset?: 'doc-bus';
}

export interface StorySlide {
  id: string;
  stepLabel: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: readonly string[];
  characters?: ReadonlyArray<{
    name: string;
    traits: readonly string[];
  }>;
}

export const HOME_HERO = {
  heading: 'Expert Dental Care for Your Family',
  subtagline: 'Dental & Orthodontic Care  for a healthy smile in  Bakersfield, CA 93306',
  ctaLabel: 'Book Your Appointment',
  ctaTo: '/contact',
  phoneDisplay: '661-516-2904',
  phoneHref: 'tel:6615162904',
  imageSrc: '/assets/home/hero/hero-children-smiling-circle.jpg',
  imageAlt: 'Five smiling children looking down in a circle outdoors under a bright sky',
} as const;

export const PRIORITY_GALLERY = {
  heading: 'Your Smile, Our Priority',
  images: [
    {
      id: 'priority-1',
      src: '/assets/home/priority-gallery/priority-01.jpg',
      alt: 'Young dental patient wearing a mouse dental bib giving a high-five to a smiling clinician',
    },
    {
      id: 'priority-2',
      src: '/assets/home/priority-gallery/priority-02.jpg',
      alt: 'Dentist smiling with a young girl holding a blue tooth-shaped mirror in the dental chair',
    },
    {
      id: 'priority-3',
      src: '/assets/home/priority-gallery/priority-03.jpg',
      alt: 'Four smiling children embracing outdoors showing healthy smiles',
    },
    {
      id: 'priority-4',
      src: '/assets/home/priority-gallery/priority-04.jpg',
      alt: 'Smiling young girl with orthodontic braces resting her chin in her hands outdoors',
    },
    {
      id: 'priority-5',
      src: '/assets/home/priority-gallery/priority-05.jpg',
      alt: 'Two young girls smiling outdoors, one wearing pink orthodontic braces',
    },
    {
      id: 'priority-6',
      src: '/assets/home/priority-gallery/priority-06.jpg',
      alt: 'Close-up demonstration of interdental flossing on an orthodontic braces model',
    },
  ] satisfies readonly GalleryImageItem[],
} as const;

export const WHY_CHOOSE = {
  heading: 'Why Choose Magic Smiles Dental and Orthodontics?',
  imageSrc: '/assets/brand/magic-smiles-castle-emblem.png',
  imageAlt: 'Magic Smiles Dental & Orthodontics illuminated castle emblem',
  bullets: [
    {
      id: 'comprehensive',
      segments: [
        { text: 'Comprehensive Dental & Orthodontic Care', strong: true },
        {
          text: ': From general dentistry and pediatric care to orthodontics, implants, and cosmetic treatments, we cover all your dental needs under one roof.',
        },
      ],
    },
    {
      id: 'payment',
      segments: [
        { text: 'Flexible Payment Options', strong: true },
        { text: ': We accept ' },
        { text: 'Medi-Cal, PPO insurance, and cash', strong: true },
        { text: ', making high-quality dental care accessible for everyone.' },
      ],
    },
    {
      id: 'comfort',
      segments: [
        { text: 'Comfort Comes First', strong: true },
        { text: ': For anxious patients, we offer safe and effective ' },
        { text: 'sedation dentistry', strong: true },
        { text: ', so you can relax while we care for your smile.' },
      ],
    },
    {
      id: 'family',
      segments: [
        { text: 'Family-Friendly Dentistry', strong: true },
        { text: ': Our office is designed for comfort, and we welcome children of all ages.' },
      ],
    },
  ] satisfies readonly WhyChooseBullet[],
} as const;

export const HOME_SERVICES = {
  heading: 'OUR SERVICES',
  items: [
    {
      id: 'general-preventive',
      title: 'General and Preventive Dentistry',
      description: 'Cleanings, exams, fillings, and preventive care',
      imageSrc: '/assets/home/services-cards/home-service-general-preventive.jpg',
      imageAlt: 'Smiling child sitting in a dental chair during a preventive checkup',
    },
    {
      id: 'orthodontics',
      title: 'Orthodontics',
      description: 'Braces and aligners for children, teens, and adults',
      imageSrc: '/assets/home/services-cards/home-service-orthodontics.jpg',
      imageAlt: 'Orthodontic examination of teeth with braces using a dental mirror',
    },
    {
      id: 'dental-implants',
      title: 'Dental Implants',
      description: 'Permanent solutions for missing teeth',
      imageSrc: '/assets/home/services-cards/home-service-dental-implants.jpg',
      imageAlt: 'Clinician performing a dental implant and restorative tooth procedure',
    },
    {
      id: 'sedation-dentistry',
      title: 'Sedation Dentistry',
      description: 'Teeth whitening, veneers to keep you comfortable and relaxed',
      imageSrc: '/assets/home/services-cards/home-service-sedation-dentistry.jpg',
      imageAlt: 'Patient receiving comfortable chairside care from a dental team',
    },
    {
      id: 'tooth-extractions',
      title: 'Tooth Extractions',
      description: 'Gentle and stress-free removal when necessary',
      imageSrc: '/assets/home/services-cards/home-service-tooth-extractions.jpg',
      imageAlt: 'Gloved dental clinician performing a gentle tooth extraction procedure',
    },
    {
      id: 'mobile-outreach',
      title: 'Mobile Dental Outreach Programs',
      description: 'We proudly serve schools, community centers, and local organizations',
      imageSrc: '/assets/services/mobile-dental-outreach-bus.jpg',
      imageAlt: 'Purple and white Dentist On Call mobile dental outreach bus',
      cropPreset: 'doc-bus',
    },
  ] satisfies readonly HomeServiceItem[],
} as const;

export const FUN_ZONE_GALLERY = {
  heading: 'The Fun Zone for Little Smiles',
  images: [
    {
      id: 'fun-1',
      src: '/assets/home/fun-zone-gallery/fun-zone-01.jpg',
      alt: 'Magic Smiles Dental lobby featuring colorful Welcome and Bienvenidos fantasy castle murals',
    },
    {
      id: 'fun-2',
      src: '/assets/home/fun-zone-gallery/fun-zone-02.jpg',
      alt: 'Kids arcade gaming room with Nintendo Switch display and Magic Smiles arcade cabinet',
    },
    {
      id: 'fun-3',
      src: '/assets/home/fun-zone-gallery/fun-zone-03.jpg',
      alt: 'Framed Anti Cavity Crew themed character poster inside the clinic',
    },
    {
      id: 'fun-4',
      src: '/assets/home/fun-zone-gallery/fun-zone-04.jpg',
      alt: 'Clinic exterior wall featuring Magic Smiles Dental & Orthodontics banner and character portraits',
    },
    {
      id: 'fun-5',
      src: '/assets/home/fun-zone-gallery/fun-zone-05.jpg',
      alt: 'Kids lounge with interactive floor cushion seating, touchscreen table, and curved nook',
    },
    {
      id: 'fun-6',
      src: '/assets/home/fun-zone-gallery/fun-zone-06.jpg',
      alt: 'Starlit ceiling arcade zone with multiple Magic Smiles gaming cabinets and large screen',
    },
    {
      id: 'fun-7',
      src: '/assets/home/fun-zone-gallery/fun-zone-07.jpg',
      alt: 'Magic Smiles Dental & Orthodontics 2935 Oswell St street monument sign with phone 661-516-2904',
    },
    {
      id: 'fun-8',
      src: '/assets/home/fun-zone-gallery/fun-zone-08.jpg',
      alt: 'Themed Toy Tavern and Eddie Enamel castle archway mural inside the lobby',
    },
    {
      id: 'fun-9',
      src: '/assets/home/fun-zone-gallery/fun-zone-09.jpg',
      alt: 'Arcade room corner with Magic Smiles gaming units, TV screen, and character-wrapped prize case',
    },
  ] satisfies readonly GalleryImageItem[],
} as const;

export const EXPERIENCE_MAGIC = {
  heading: 'Experience the Magic of a Healthy Smile',
  subheading: 'Highly Trained Dental Professionals',
  paragraphs: [
    'Your oral health is essential to your overall well-being, and we’re here to make dental visits simple, stress-free, and effective. Our friendly team is committed to providing top-quality care while treating every patient like family.',
    'Whether you’re due for a check-up, considering orthodontics, or need advanced treatment, Magic Smiles Dental & Orthodontics is here for you.',
  ],
  imageSrc: '/assets/home/experience-magic-family.jpg',
  imageAlt: 'Smiling family together outdoors showing bright healthy smiles',
} as const;

export const THEMED_STORY = {
  sectionLabel: 'A Themed Dentistry Adventure',
  slides: [
    {
      id: 'story-1',
      stepLabel: '1. Magic Smiles',
      title: 'MAGIC SMILES — where every visit is a new adventure... a themed dentistry',
      imageSrc: '/assets/home/themed-story/story-01-magic-smiles-banner.png',
      imageAlt:
        'Illustrated parchment scroll banner reading Magic Smiles, where every visit is a new adventure... a themed dentistry',
      paragraphs: [
        'MAGIC SMILES',
        'where every visit is a new adventure...',
        'a themed dentistry',
      ],
    },
    {
      id: 'story-2',
      stepLabel: '2. Welcome',
      title: 'WELCOME — Good Morrow young travelers!',
      imageSrc: '/assets/home/themed-story/story-02-welcome-faraway-land.jpg',
      imageAlt:
        'Welcome story slide with fantasy village moodboard photos and invitation to a magical journey',
      paragraphs: [
        'Good Morrow young travelers!',
        'A visit to the dentist’s office doesn’t have to be boring or routine.',
        'What if every visit to Magic Smiles took patients and their families on a whimsical and magical journey to a faraway land?',
        'Welcome to Magic Smiles Dentistry.',
      ],
    },
    {
      id: 'story-3',
      stepLabel: '3. Billy & Moe',
      title: 'BILLY & MOE',
      imageSrc: '/assets/home/themed-story/story-03-billy-and-moe.jpg',
      imageAlt:
        'Story slide introducing knight duo Billy and Moe and their pet dragon X-Ray',
      paragraphs: [
        'The patients at Magic Smiles join forces with Billy, Moe, (a brother and sister knight duo) and their pet dragon X-Ray to defeat the gum goblin and spread magic smiles across the lands.',
      ],
    },
    {
      id: 'story-4',
      stepLabel: '4. Gummy the Goblin',
      title: 'GUMMY THE GUM GOBLIN',
      imageSrc: '/assets/home/themed-story/story-04-gummy-the-gum-goblin.jpg',
      imageAlt:
        'Story slide introducing Gummy the Gum Goblin holding sugary treats and soda',
      paragraphs: [
        'A mischievous little creature who encourages kids to eat too many gummy worms, soda, and other foods that are bad for teeth. He never brushes his teeth and is known for his bad breath. He convinces the citizens of Flourindale they don’t need to take care of their teeth.',
      ],
    },
    {
      id: 'story-5',
      stepLabel: '5. Quest Allies',
      title: 'Billy and Moe encounter many characters to help them on their quest...',
      imageSrc: '/assets/home/themed-story/story-05-quest-characters.jpg',
      imageAlt:
        'Quest allies Eddie Enamel, Carie the Floss Fairy, and Dentin the Viking with character traits',
      paragraphs: [
        'Billy and Moe encounter many characters to help them on their quest...',
      ],
      characters: [
        {
          name: 'EDDIE ENAMEL',
          traits: [
            'magic toothbrush wand',
            'magic toothpaste',
            'dentist apron of invisibility',
          ],
        },
        {
          name: 'CARIE THE FLOSS FAIRY',
          traits: [
            'a new take on the tooth fairy',
            'bow and arrow made of floss',
          ],
        },
        {
          name: 'DENTIN THE VIKING',
          traits: ['works at the “pub” where they serve mouthwash'],
        },
      ],
    },
  ] satisfies readonly StorySlide[],
} as const;

export const HOME_CONTACT = {
  heading: 'Contact Us',
  formTitle: 'Drop us a line!',
  submitLabel: 'Send',
  recaptchaNoticePrefix: 'This site is protected by reCAPTCHA and the Google ',
  privacyLabel: 'Privacy Policy',
  privacyUrl: 'https://policies.google.com/privacy',
  termsLabel: 'Terms of Service',
  termsUrl: 'https://policies.google.com/terms',
  introHeading: 'Visit Us Today!',
  paymentHighlight: 'Medi-Cal, PPO insurance, and cash payments',
  businessTitle: 'Magic Smiles Dental & Orthodontics',
  address: '2935 Oswell St. Bakersfield, CA 93306',
  phoneDisplay: '661-516-2904',
  phoneHref: 'tel:6615162904',
  directionsLabel: 'Get directions',
} as const;
