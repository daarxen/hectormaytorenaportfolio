/**
 * Central profile + navigation data.
 * Edit this file to update contact details, links and the résumé file name.
 */
export const profile = {
  name: 'Hector E. Maytorena Abreu',
  shortName: 'Hector Maytorena',
  role: 'Finance Student · Eller College of Management',
  headline: ['Business-minded.', 'Finance-driven.', 'Always evolving.'],
  tagline: 'Business-minded. Finance-driven. Always evolving.',
  description:
    'Hector Maytorena Abreu is a Finance student at the University of Arizona’s Eller College of Management with an entrepreneurial mindset and interests in corporate finance, FP&A and business strategy.',
  email: 'maytorena@arizona.edu',
  linkedin: 'https://www.linkedin.com/in/hector-maytorena-abreu-3915b1402',
  phone: '+1 (520) 406-6062',
  whatsapp: 'https://wa.me/15204066062',
  /** Professional persona video (YouTube). */
  video: {
    id: 'END-ofU3Bn4',
    title: 'Hector Maytorena — Professional Persona',
    url: 'https://youtu.be/END-ofU3Bn4',
  },
  /** Drop the PDF into /public with exactly this name and every résumé link activates automatically. */
  resumeFile: 'Hector-Maytorena-Abreu-Resume.pdf',
  interests: ['Corporate finance', 'FP&A', 'Financial planning', 'Business strategy'],
};

/** Spline 3D scene for “My Evolution”. Empty URL = show the still poster only. */
export const spline = {
  sceneUrl: 'https://prod.spline.design/5wthtQu8FAbzASrM/scene.splinecode',
  /** Abstract globe between the hero and About. */
  globeUrl: 'https://prod.spline.design/dn-Eb7vwDL46rfkD/scene.splinecode',
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'evolution', label: 'Evolution' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'resume', label: 'Résumé' },
  { id: 'contact', label: 'Contact' },
] as const;
