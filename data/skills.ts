export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'CMS & Frameworks',
    skills: [
      'Drupal 9/10/11',
      'Decoupled / Headless Drupal',
      'Drupal Migrations (D8→D9→D10→D11)',
      'PHP 7/8 (8.3)',
      'Laravel',
      'CakePHP 3.4/3.5',
    ],
  },
  {
    category: 'Drupal Architecture',
    skills: [
      'Custom Module & Plugin Development',
      'Custom Content Entities',
      'Views & Contextual Filters',
      'Single Directory Components (SDC)',
      'Group Module (multi-tenant)',
      'Panels / Page Manager',
      'Hook system & execution ordering',
      'Custom theming (Twig)',
    ],
  },
  {
    category: 'APIs & Integrations',
    skills: [
      'REST API & JSON:API design',
      'Simple OAuth / JWT',
      'OpenID Connect / SSO',
      'Azure Active Directory',
      'Firebase Push Notifications',
      'Stripe / Braintree',
      'Google Maps & Distance Matrix',
      'GA4 / GTM',
      'Twilio · Bullhorn · Wistia · AWS APIs',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'Azure Kubernetes Service (AKS)',
      'Docker',
      'Kubernetes manifests (PVC, probes, PDB)',
      'Azure Pipelines CI/CD',
      'Nginx & PHP-FPM tuning',
      'Cloudflare caching',
      'Acquia Cloud',
      'Git / GitHub / Azure DevOps',
    ],
  },
  {
    category: 'Languages & Front-End',
    skills: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'Twig', 'AJAX', 'JSON'],
  },
  {
    category: 'Tools & Practices',
    skills: [
      'DDEV',
      'Postman',
      'AI-augmented development (Claude)',
      'Agile / Scrum / JIRA',
      'Technical leadership & estimation',
      'Mentoring & knowledge transfer',
      'Arabic RTL / English multilingual delivery',
    ],
  },
]

/** Short list for the home page. */
export const headlineSkills = [
  'Drupal 9/10/11',
  'Decoupled / Headless',
  'PHP 8.3',
  'Laravel',
  'REST & JSON:API',
  'OAuth / JWT',
  'Azure AKS',
  'Docker & Kubernetes',
  'CI/CD',
  'Firebase',
  'MySQL',
  'Twig / SDC',
]
