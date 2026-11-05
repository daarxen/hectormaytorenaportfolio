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
  /** Drop the PDF into /public with exactly this name and every résumé link activates automatically. */
  resumeFile: 'Hector-Maytorena-Abreu-Resume.pdf',
  interests: ['Corporate finance', 'FP&A', 'Financial planning', 'Business strategy'],
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
