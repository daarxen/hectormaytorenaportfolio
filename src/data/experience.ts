/**
 * Employment history, newest first. Source of truth: Hector's résumé.
 * Do not add metrics or responsibilities that are not on the résumé.
 */
export interface Role {
  org: string;
  title: string;
  start: string;
  end: string;
  current?: boolean;
  lens: string; // one-line framing of what the role demonstrates
  points: string[];
  skills: string[];
}

export const experience: Role[] = [
  {
    org: 'Texas Roadhouse Delaware LLC',
    title: 'Front of House Team Member',
    start: 'Mar 2025',
    end: 'Present',
    current: true,
    lens: 'Customer experience and performance under pressure.',
    points: [
      'Deliver high-quality service to 50+ guests per shift, communicating clearly and resolving concerns.',
      'Coordinate with 15+ kitchen and support staff for accurate, timely service across multiple tables.',
      'Collaborate during high-volume shifts to reduce wait times and keep service flowing through 100+ cover rushes.',
    ],
    skills: ['Communication', 'Teamwork', 'Adaptability', 'Customer experience'],
  },
  {
    org: 'Panda Restaurant Group, Inc.',
    title: 'Front of House Shift Leader',
    start: 'Jul 2024',
    end: 'Feb 2025',
    lens: 'Leading a team and setting the standard for execution.',
    points: [
      'Led and supervised a front-of-house team of 5+ employees per shift, delegating tasks to maintain speed and standards.',
      'Trained and coached 8+ new hires, explaining procedures and evaluating performance for faster onboarding.',
      'Oversaw shift operations during high-traffic periods in an above-average sales environment.',
    ],
    skills: ['Leadership', 'Delegation', 'Coaching', 'Execution'],
  },
  {
    org: 'Realty ONE Group Integrity',
    title: 'Independent Real Estate Marketing Assistant',
    start: 'Mar 2023',
    end: 'Dec 2023',
    lens: 'Marketing, market research and representing others professionally.',
    points: [
      'Hosted open houses representing licensed realtors, presenting property features and collecting client leads.',
      'Brought in new customers through cold calling and guided potential buyers through the process alongside lenders and inspectors.',
      'Analyzed market and listing data in MLS to support realtor marketing and client follow-ups.',
      'Created TikTok videos and flyers in Canva and CapCut to grow social media presence and listing visibility.',
      'Assisted with property management tasks.',
    ],
    skills: ['Marketing', 'Sales outreach', 'MLS', 'Client guidance', 'Content creation'],
  },
  {
    org: 'Amazon Fulfillment Center — TUS2',
    title: 'Problem Solver, Shipping Department',
    start: 'May 2021',
    end: 'May 2022',
    lens: 'Analytical problem-solving inside a high-volume operation.',
    points: [
      'Analyzed and resolved 30–50 shipment issues per shift, investigating errors to prevent outbound delays.',
      'Streamlined shipping workflows by organizing and standardizing processes, improving accuracy and reducing rework.',
      'Collaborated with leadership to document and execute solutions affecting 100+ outbound orders daily.',
    ],
    skills: ['Analysis', 'Process improvement', 'Attention to detail', 'Operations'],
  },
];
