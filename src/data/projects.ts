/**
 * Projects & portfolio. Each entry generates a case-study page at /work/<slug>.
 * Structure follows: overview → challenge → role → actions → results → skills → evidence.
 * Only publish real materials. Use `pending` for items that still need Hector's input.
 */
import type { ImageMetadata } from 'astro';
import elleTeam from '../assets/photos/eller-team.jpg';
import aceCertificate from '../assets/photos/ace-certificate.jpg';
import teamFormal from '../assets/photos/team-formal.jpg';
import teamCasual from '../assets/photos/team-casual.jpg';
import ellerBuilding from '../assets/photos/eller-building.jpg';
import graduation from '../assets/photos/graduation-2026.jpg';
import commencement from '../assets/photos/commencement.jpg';
import flyer from '../assets/photos/realestate-flyer.jpg';

export interface Evidence {
  image: ImageMetadata;
  alt: string;
  caption: string;
}

/** A real, viewable work sample (shown on the case study and in the homepage “Work samples” strip). */
export interface WorkSample {
  kind: 'canva' | 'image' | 'youtube';
  title: string;
  description: string;
  credit?: string;
  /** canva: view URL (embed is derived). youtube: watch URL. */
  url?: string;
  /** youtube video id */
  videoId?: string;
  image?: ImageMetadata;
  alt?: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  summary: string;
  cover?: ImageMetadata;
  coverAlt?: string;
  coverPosition?: string;
  mode: string; // individual vs collaborative
  featured?: boolean;
  overview: string;
  challenge: string;
  role: string;
  actions: string[];
  results: string[];
  skills: string[];
  evidence: Evidence[];
  sample?: WorkSample;
  note?: string;
  pending?: string[]; // what is still needed from Hector
}

export const projects: Project[] = [
  {
    slug: 'ace-case-competition',
    index: '01',
    title: 'ACE Case Competition — First Place',
    kicker: 'Competition · 2026',
    summary:
      'Winner of the 2026 Arizona Community College Excellence (ACE) case competition, hosted through the Eller College of Management for Arizona community college students.',
    cover: elleTeam,
    coverAlt: 'Hector and his teammates in business attire behind large red “Eller” letters.',
    coverPosition: '60% 40%',
    mode: 'Team competition',
    featured: true,
    overview:
      'ACE brings together students from Arizona community colleges to analyze a business case and present their recommendations, hosted through the Eller College of Management. Our team took first place, awarded on April 10, 2026, in Tucson, Arizona.',
    challenge:
      'Understand a business problem quickly, agree on a direction as a team, and turn our analysis into recommendations we could present clearly and defend under time pressure.',
    role:
      'Team member and presenter. I contributed to analyzing the case, shaping our strategic recommendations and presenting them.',
    actions: [
      'Worked through the case with my teammates, comparing perspectives before committing to a recommendation.',
      'Helped structure the analysis into a clear, persuasive storyline.',
      'Presented our ideas and recommendations as part of the team.',
    ],
    results: [
      'First place — 2026 Arizona Community College Excellence Case Competition Winner.',
      'Recognized with a certificate and award presented by the Eller College of Management.',
    ],
    skills: ['Strategic thinking', 'Collaboration', 'Public speaking', 'Problem-solving', 'Working under pressure'],
    evidence: [
      {
        image: aceCertificate,
        alt: 'Certificate reading “2026 Arizona Community College Excellence Winner, presented to Hector Maytorena Abreu,” with a “Congratulations” award plaque behind it.',
        caption: 'Winner’s certificate and award plaque, April 10, 2026.',
      },
      {
        image: elleTeam,
        alt: 'Hector and three teammates in suits standing behind red “Eller” letters inside the college.',
        caption: 'With my team at the Eller College of Management.',
      },
    ],
    sample: {
      kind: 'youtube',
      title: 'ACE 2026 — Full Presentation',
      description: 'The complete first-place presentation by our team (Purple Team) at the 2026 Arizona Community College Excellence case competition.',
      credit: 'Team presentation · Video on YouTube',
      url: 'https://youtu.be/9JFhogvJ2ww',
      videoId: '9JFhogvJ2ww',
    },
    pending: ['Case topic and our final recommendation'],
  },
  {
    slug: 'dyson-strategy-benchmarking',
    index: '02',
    title: 'Dyson Strategy & Benchmarking',
    kicker: 'Business strategy · Academic project',
    summary:
      'A business communication and strategy project on how Dyson could make the value behind its premium pricing easier for customers to feel, benchmarked against Lululemon’s customer experience model.',
    cover: teamFormal,
    coverAlt: 'Hector with five teammates in business attire in a presentation room.',
    coverPosition: '50% 45%',
    mode: 'Team project · individual analysis',
    overview:
      'Dyson sells premium products in categories where lower-priced alternatives are easy to find. Our team studied how customers perceive that premium, and what Dyson could do to strengthen the link between the price they pay and the value they experience.',
    challenge:
      'Premium positioning only works when customers believe the experience justifies the price. The question we explored: how could customer experience become a source of differentiation for Dyson, not just product engineering?',
    role:
      'My contribution was the stakeholder analysis and the benchmarking of Dyson against Lululemon’s customer experience model.',
    actions: [
      'Mapped Dyson’s key stakeholders and what each group expects from the brand.',
      'Benchmarked Dyson against Lululemon, a brand that turns customer experience and community into part of its premium.',
      'Together, the team examined competitive alternatives and customer perceptions of premium pricing.',
      'Contributed to the team’s proposed concept: a traveling “Dyson First Impression” pop-up experience.',
    ],
    results: [
      'A strategic recommendation linking premium price to tangible customer experience.',
      'A proposed pop-up concept grounded in the stakeholder and benchmarking analysis.',
    ],
    skills: ['Stakeholder analysis', 'Competitive benchmarking', 'Brand positioning', 'Business communication'],
    evidence: [
      {
        image: teamFormal,
        alt: 'Hector and five teammates in business attire standing together in a classroom.',
        caption: 'Presentation day with my teammates.',
      },
      {
        image: teamCasual,
        alt: 'Hector and five teammates smiling together in a classroom.',
        caption: 'The team behind the work.',
      },
    ],
    sample: {
      kind: 'canva',
      title: 'Client Communication Plan — Dyson',
      description:
        'Our team’s final presentation (Group 27). My sections: the stakeholder analysis and the Dyson vs. Lululemon customer experience benchmark.',
      credit: 'Team presentation · Canva design by Sophia Delatorre',
      url: 'https://www.canva.com/design/DAHXQJx9yOY/T0LC-af2ONcr9DxM5evkUg/view',
    },
    note:
      'This was an academic project. The “Dyson First Impression” pop-up was a proposed concept and was not implemented by Dyson. This project is not affiliated with or endorsed by Dyson or Lululemon.',
    pending: ['Course name and term'],
  },
  {
    slug: 'education-and-development',
    index: '03',
    title: 'Pima to Eller: Education & Development',
    kicker: 'Education · 2026 → 2027',
    summary:
      'From an Associate of Business Administration at Pima Community College to a B.S.B.A. in Finance at the University of Arizona’s Eller College of Management.',
    cover: ellerBuilding,
    coverAlt: 'The University of Arizona “A” logo and the word “Eller” on a brick building.',
    coverPosition: '40% 50%',
    mode: 'Individual',
    overview:
      'My education has been a progression. Pima Community College gave me a foundation in business administration. The Eller College of Management is where I am building on it with a concentration in finance.',
    challenge:
      'Build a strong academic foundation while working, adapting to a new country and language, and preparing for a career in finance.',
    role: 'Student, working throughout my studies.',
    actions: [
      'Completed an Associate of Business Administration at Pima Community College (May 2026).',
      'Transferred to the University of Arizona, Eller College of Management, to study Finance.',
      'Recognized through the Eller Economic Development Program Business Certificate Program.',
      'Competed in, and won, the 2026 ACE case competition.',
    ],
    results: [
      '3.9 GPA at the University of Arizona.',
      'Certificate of Special Congressional Recognition from the U.S. House of Representatives (May 7, 2026), in recognition of dedication to academic success and continued perseverance.',
      'Expected graduation: December 2027.',
    ],
    skills: ['Consistency', 'Time management', 'Financial foundations', 'Perseverance'],
    evidence: [
      {
        image: graduation,
        alt: 'Hector holding an open certificate folder in front of gold “26” balloons and a “Congrats Grad” sign.',
        caption: 'Celebrating the Class of 2026.',
      },
      {
        image: commencement,
        alt: 'Hector taking a selfie with fellow graduates in caps and gowns at a commencement ceremony.',
        caption: 'Commencement, 2026.',
      },
    ],
  },
  {
    slug: 'real-estate-marketing',
    index: '04',
    title: 'Real Estate Marketing',
    kicker: 'Marketing · 2023',
    summary:
      'Hosting open houses for licensed realtors, bringing in new clients, guiding buyers through the process and producing marketing content.',
    cover: flyer,
    coverAlt: 'Real estate flyer designed by Hector: “Real Estate Tucson — Let me help you!” with his photo and contact button.',
    coverPosition: '50% 30%',
    mode: 'Independent',
    overview:
      'As an Independent Real Estate Marketing Assistant with Realty ONE Group Integrity, I supported licensed realtors with open houses, lead generation and marketing. It gave me direct exposure to how properties are researched, presented and marketed to buyers.',
    challenge:
      'Represent other professionals well, attract qualified buyers to listings, and make properties stand out online.',
    role: 'Independent marketing assistant supporting licensed realtors.',
    actions: [
      'Hosted open houses representing licensed realtors, presenting property features and collecting client leads.',
      'Brought in new customers through cold calling.',
      'Guided potential buyers through the process, working alongside lenders and inspectors.',
      'Analyzed market and listing data in MLS to support marketing and client follow-ups.',
      'Built digital and print marketing for realtors: TikTok videos, social media content and flyers made in Canva and CapCut.',
      'Assisted with property management.',
    ],
    results: [
      'Stronger social media presence and listing visibility for the realtors I supported.',
      'Hands-on experience across the buyer journey, from first contact to financing and inspection.',
    ],
    skills: ['Marketing', 'Sales outreach', 'MLS research', 'Client communication', 'Canva', 'CapCut'],
    evidence: [],
    sample: {
      kind: 'image',
      title: 'Real Estate Tucson — Marketing Flyer',
      description: 'A social media flyer I designed in Canva to generate buyer leads in Tucson.',
      credit: 'Designed by Hector · Canva',
      image: flyer,
      alt: 'Flyer reading “Real Estate Tucson. If you are interested in taking a new step in your life by getting your own house, let me help you! Don’t lose time!” with Hector’s photo and a contact phone number.',
    },
    pending: ['TikTok video links (optional)'],
  },
];

/** Placeholder slot for additional finance / Excel / strategy work. Rendered as "in progress", never as a finished project. */
export const upcoming = {
  title: 'Finance & Analytical Work',
  summary:
    'Finance assignments, Excel-based analysis and presentations from my coursework at Eller. Work samples will be added here as they are finalized.',
};
