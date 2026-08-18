export type Experience = {
  role: string
  company: string
  location: string
  period: string
  stack: string[]
  highlights: string[]
  projects?: { name: string; note: string }[]
}

export const experience: Experience[] = [
  {
    role: 'Senior Drupal Developer — Project Lead',
    company: 'Appstation Pvt Ltd',
    location: 'Thiruvananthapuram, India',
    period: '2024 — Present',
    stack: ['Drupal 10/11', 'PHP 8.3', 'Azure AKS', 'Docker', 'Laravel', 'MySQL'],
    highlights: [
      'Lead custom module development and third-party API integration for qsl.qa — a decoupled Drupal 11 platform serving five concurrent competitions via a single-site Group module architecture, plus a mobile app backend.',
      'Implemented Simple OAuth/JWT-secured REST and JSON:API endpoints powering the decoupled front-end and native mobile apps, with Firebase push notifications and SSO.',
      'Restructured 4 high-traffic pages (Standings, Fixtures, Top Scorers, Archive) from controller-based rendering to Views + Single Directory Components.',
      'Handled Docker end-to-end: application images, DDEV local development, and containerized deployment and troubleshooting on AKS.',
      'Diagnosed production Cloudflare/Drupal cache-header conflicts and GTM/GA4 misconfigurations to restore accurate analytics.',
      'Delivered full bilingual (Arabic RTL / English) support across the custom qsl theme and Twig templates.',
      'Coordinated Match Center integration architecture with a Laravel-based match data API across Drupal, Laravel, and mobile teams.',
    ],
    projects: [
      { name: 'Qatar Stars League — qsl.qa', note: 'Decoupled Drupal 11 on Azure AKS' },
      { name: 'career.qsl.qa', note: 'Multi-site career portal with time-boxed job listings' },
      { name: 'Lusail (LCSC) — lcsc.qa', note: 'Project lead: estimation, custom theme, custom modules' },
    ],
  },
  {
    role: 'Associate Consultant',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Chennai, India',
    period: 'May 2023 — Nov 2023',
    stack: ['Drupal 8/9', 'Git', 'Acquia Cloud'],
    highlights: [
      'Led Drupal application support for Johnson & Johnson, ensuring on-time, quality-assured delivery.',
      'Diagnosed production issues across Drupal CMS, modules, themes, and integrations via log and root-cause analysis.',
      'Performed routine core/module/theme updates on Acquia Cloud for security patches and performance.',
      'Managed JIRA tickets, assigned tasks to junior developers, and mentored the team on Drupal best practices.',
    ],
  },
  {
    role: 'Senior Analyst Programmer',
    company: 'Unimity Solution Pvt Ltd',
    location: 'Chennai, India',
    period: 'Jul 2021 — Apr 2023',
    stack: ['Drupal 8/9', 'PHP', 'MySQL', 'Azure AD', 'OAuth'],
    highlights: [
      'Coin (Drupal 9.4): group-authoring CMS with role-based access, invite/join workflows, Redis caching, and SMTP.',
      'Crypta (Drupal 9.3): Azure Active Directory + OAuth integration; custom service API pulling O365 document data into content types; led the Drupal 8-to-9 migration.',
      'Engagez/BMC (Drupal 8): virtual events and conference-hosting platform; custom module integrating a third-party Avatar API.',
    ],
  },
  {
    role: 'Senior PHP Developer',
    company: 'Farshore Software Development Pvt Ltd',
    location: 'Madurai, India',
    period: 'Oct 2015 — Jul 2021',
    stack: ['PHP', 'Laravel 5.8', 'CakePHP 3.4/3.5', 'MySQL', 'REST API'],
    highlights: [
      'Delivered 7 client projects end-to-end across Laravel and CakePHP — mobile-app backends, payment and geolocation platforms.',
      'Stepaway: Laravel backend + REST APIs for an iOS/Android alcohol-addiction recovery companion app with milestone tracking.',
      'Oviesmaterwave: smart food-tracking app backend syncing a physical smart tag, with expiry alerts and recipe recommendations.',
      'QuickCup, PeopleCaddie, GetTread, Tiltas, Points: geolocation ordering, Bullhorn ATS staffing marketplace, Stripe-integrated tire installation, Twilio click-to-call, and Wistia quiz-gated e-learning.',
    ],
  },
]

export const education = [
  {
    degree: 'Master of Engineering (Computer Science)',
    school: 'Muthayammal Engineering College, Anna University',
    period: '2012 — 2014',
    note: 'CGPA 8.9',
  },
  {
    degree: 'Bachelor of Information Technology',
    school: 'SSM College of Engineering, Anna University',
    period: '',
    note: '73%',
  },
]

export const certifications = [
  { name: 'Drupal Master Class — Build 9 Projects', issuer: 'Udemy' },
  { name: 'Introduction to Cloud Computing on AWS', issuer: 'Udemy' },
  { name: 'Foundations of Project Management', issuer: 'Google (Coursera)' },
  { name: 'Agile Project Management', issuer: 'Google (Coursera)' },
  { name: 'Project Initiation: Starting a Successful Project', issuer: 'Google (Coursera)' },
]
