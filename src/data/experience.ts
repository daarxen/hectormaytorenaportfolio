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
      'Deliver service to 50+ guests per shift.',
      'Communicate with guests and resolve concerns.',
      'Coordinate with 15+ kitchen and support staff.',
      'Collaborate through high-volume periods, including 100+ cover rushes.',
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
      'Led and supervised a front-of-house team.',
      'Delegated tasks and maintained operational standards.',
      'Trained and coached new employees.',
      'Supported efficient service during high-traffic periods.',
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
      'Hosted open houses and represented licensed realtors.',
      'Engaged prospective buyers and collected leads.',
      'Used MLS to analyze property and listing information.',
      'Created marketing materials using Canva and CapCut.',
      'Developed TikTok videos and promotional flyers.',
    ],
    skills: ['Marketing', 'Market research', 'MLS', 'Content creation'],
  },
  {
    org: 'Amazon Fulfillment Center — TUS2',
    title: 'Problem Solver, Shipping Department',
    start: 'May 2021',
    end: 'May 2022',
    lens: 'Analytical problem-solving inside a high-volume operation.',
    points: [
      'Analyzed and resolved 30–50 shipment issues per shift.',
      'Investigated errors and helped prevent outbound delays.',
      'Organized and standardized shipping workflows.',
      'Collaborated with leadership on solutions affecting 100+ outbound orders daily.',
    ],
    skills: ['Analysis', 'Process improvement', 'Attention to detail', 'Operations'],
  },
];
