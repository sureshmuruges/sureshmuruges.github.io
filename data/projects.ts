export type WorkProject = {
  slug: string
  title: string
  client: string
  url?: string
  period: string
  role: string
  summary: string
  /** Tech tags used for the /work filter. */
  tags: string[]
  /** Bento sizing on /work and home: 'large' | 'wide' | 'tall' | 'small' */
  size: 'large' | 'wide' | 'tall' | 'small'
  featured?: boolean
}

export const workProjects: WorkProject[] = [
  {
    slug: 'qatar-stars-league',
    title: 'Qatar Stars League',
    client: 'QSL — qsl.qa',
    url: 'https://qsl.qa',
    period: '2024 — Present',
    role: 'Lead Developer',
    summary:
      'Decoupled Drupal 11 platform for Qatar’s top football league — five concurrent competitions on one Group-module architecture, JWT-secured APIs for web and mobile, Firebase push, bilingual Arabic/English, deployed on Azure AKS.',
    tags: ['Drupal 11', 'Decoupled', 'JWT', 'Firebase', 'Azure AKS', 'Docker', 'Arabic RTL'],
    size: 'large',
    featured: true,
  },
  {
    slug: 'qatar-university',
    title: 'Qatar University',
    client: 'Qatar University',
    period: '2024 — Present',
    role: 'Senior Drupal Developer',
    summary:
      'Drupal 11 platform with 22 custom modules: config-driven header resolution, custom content entities, a reusable migration toolkit, Entra ID SSO with Microsoft Graph, and an AI content-indexing API.',
    tags: ['Drupal 11', 'Entra ID SSO', 'Migrations', 'SDC', 'Custom Entities'],
    size: 'tall',
    featured: true,
  },
  {
    slug: 'qatar-social-work',
    title: 'Qatar Social Work',
    client: 'QSW Foundation',
    period: '2024 — Present',
    role: 'Drupal Developer',
    summary:
      'True Drupal multisite serving 10+ social-welfare organisations (Ehsan, Dreama, Shafallah, Best Buddies…) from one codebase — per-org themes, SAML SSO, JSON:API, and a 3-replica AKS deployment.',
    tags: ['Drupal 9', 'Multisite', 'SAML', 'JSON:API', 'Azure AKS', 'Firebase'],
    size: 'wide',
    featured: true,
  },
  {
    slug: 'lusail-city',
    title: 'Lusail City',
    client: 'Lusail — lcsc.qa',
    url: 'https://lcsc.qa',
    period: '2024 — Present',
    role: 'Project Lead',
    summary:
      'Drupal 11 CMS and mobile-app backend for Lusail City: custom REST resources, Firebase push service, social feed aggregation, and bilingual CSV news migrations.',
    tags: ['Drupal 11', 'REST API', 'Firebase', 'Mobile Backend', 'Arabic RTL'],
    size: 'small',
    featured: true,
  },
  {
    slug: 'qm-staff-services',
    title: 'QM Staff Services',
    client: 'Qatar Museums',
    period: '2024 — Present',
    role: 'Drupal Developer',
    summary:
      'Drupal 11 staff-services backend: taxonomy-driven service catalog with REST endpoints, FCM push notification management, and a mobile app version matrix fed from external release data.',
    tags: ['Drupal 11', 'REST API', 'FCM', 'Scheduler'],
    size: 'small',
  },
  {
    slug: 'documentation-portal',
    title: 'Engineering Documentation Portal',
    client: 'Appstation (internal)',
    period: '2024 — Present',
    role: 'Contributor',
    summary:
      'MkDocs Material knowledge base for the engineering org — project runbooks, Drupal/DevOps guides, and deployment workflows, shipped via Azure Pipelines.',
    tags: ['MkDocs', 'CI/CD', 'Documentation'],
    size: 'small',
  },
]

export type PersonalProject = {
  slug: string
  title: string
  status: string
  summary: string
  tags: string[]
  href: string
}

export const personalProjects: PersonalProject[] = [
  {
    slug: 'laravel-tracksen',
    title: 'Tracksen',
    status: 'Active — personal build',
    summary:
      'A freight & logistics tracking system built with Laravel 11: shipment bookings with air/sea manifests (MAWB/HAWB), multi-currency expense tracking, a GST-aware party address book, and an HSN product catalog. Full deep-dive with architecture and code excerpts.',
    tags: ['Laravel 11', 'PHP 8.2', 'MySQL/SQLite', 'Bootstrap 5', 'Vite', 'Breeze'],
    href: '/projects/laravel-tracksen/',
  },
  {
    slug: 'drupal-canvas-lab',
    title: 'Drupal Canvas Lab',
    status: 'Sandbox',
    summary:
      'A Drupal 11.4 playground exploring Commerce 3, the Canvas page builder, and a Storybook-driven SDC design system where stories render server-side from Drupal rather than JS — plus a multi-container Docker setup mirroring production.',
    tags: ['Drupal 11', 'Commerce', 'Storybook', 'SDC', 'Docker'],
    href: '/projects/',
  },
]

/** All distinct tags across work projects, for the filter UI. */
export const allWorkTags = Array.from(new Set(workProjects.flatMap((p) => p.tags))).sort()
