export type Link = {
  label: string;
  href: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type Card = {
  title: string;
  body: string;
  eyebrow?: string;
  summary?: string;
  tone?: 'brand' | 'field' | 'accent';
};

export type Step = {
  title: string;
  body: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WorkflowCard = {
  title: string;
  body: string;
  benefit: string;
  bullets: string[];
  eyebrow?: string;
  tag?: string;
  tone?: 'brand' | 'field' | 'accent';
};

export type ResultCard = {
  value: string;
  title: string;
  body: string;
  tone?: 'brand' | 'field' | 'accent';
};

export type PreviewMockup = {
  label: string;
  title: string;
  items: string[];
  action?: string;
  theme?: 'light' | 'dark';
  tone?: 'brand' | 'field' | 'accent';
  tilt?: 'left' | 'right' | 'none';
};

export type FeatureSection = {
  id: string;
  title: string;
  body: string;
  benefit: string;
  operatorTitle: string;
  operatorItems: string[];
  familyTitle: string;
  familyItems: string[];
};

export type CompareItem = {
  title: string;
  body: string;
};

export type SavingsCard = {
  title: string;
  before: string;
  after: string;
  tag: string;
  tone?: 'brand' | 'field' | 'accent';
  icon?: 'announce' | 'payment' | 'roster' | 'schedule' | 'family' | 'registration';
};

export type ToolItem = {
  title: string;
  body: string;
};

const withBase = (path: string) => {
  if (path.startsWith('#')) {
    return path;
  }

  const [pathname, hash = ''] = path.split('#');
  const normalizedPath = pathname.replace(/^\/+|\/+$/g, '');
  const resolved = normalizedPath === '' ? 'index.html' : `${normalizedPath}.html`;

  return hash ? `${resolved}#${hash}` : resolved;
};

export const siteMeta = {
  name: 'MyTeam',
  title: 'MyTeam | Simple workflows for sports program operations',
  description:
    'A marketing site for sports organizations that want one clear flow for schedules, registration, payments, and family updates.',
  footerBlurb:
    'Built for sports organizations that want one clear place to publish program details, guide signup, and keep families informed.',
};

export const navigation: Link[] = [
  { label: 'Home', href: withBase('/') },
  { label: 'Features', href: withBase('/features') },
  { label: 'Savings', href: withBase('/savings') },
  { label: 'Setup FAQ', href: withBase('/setup-faq') },
];

export const primaryCta: CallToAction = {
  label: 'Start Setup',
  href: withBase('/setup-faq#setup-steps'),
};

export const secondaryCta: CallToAction = {
  label: 'See Features',
  href: withBase('/features'),
};

export const homePage = {
  pageName: 'home',
  title: siteMeta.title,
  description:
    'MyTeam homepage for sports programs, focused on simple branded workflows for setup, signup, and family updates.',
  hero: {
    eyebrow: 'Branded App For Sports Programs',
    title: 'Your program. Your app.',
    body: 'Schedules, signup, payments, and updates in one place.',
  },
  heroPill: 'Launch a branded family app',
  quickChecks: [
    'Your logo',
    'One app',
    'Clear updates',
  ],
  heroVisuals: [
    {
      label: 'Family view',
      title: 'Find your program',
      items: ['Search once', 'Save one app', 'See next step'],
      action: 'Join your team',
      theme: 'light',
      tone: 'brand',
      tilt: 'left',
    },
    {
      label: 'Program app',
      title: 'Summer Club Tryouts',
      items: ['Register now', 'Check schedule', 'See roster'],
      action: 'Open app',
      theme: 'dark',
      tone: 'accent',
      tilt: 'right',
    },
  ] satisfies PreviewMockup[],
  results: {
    title: 'What your program gets',
    body: 'Less admin. Clearer steps. A stronger brand.',
    cards: [
      {
        value: 'One place',
        title: 'Schedules and updates',
        body: 'Families know where to look.',
        tone: 'brand',
      },
      {
        value: 'Less chasing',
        title: 'Registration and payments',
        body: 'Fewer repeat questions.',
        tone: 'field',
      },
      {
        value: 'Your brand',
        title: 'Front and center',
        body: 'Logo, colors, and name stay visible.',
        tone: 'accent',
      },
    ] satisfies ResultCard[],
  },
  steps: {
    title: 'From setup to live in 3 steps',
    body: 'Upload your brand, add your program, invite families.',
    items: [
      {
        title: 'Set up your program',
        body: 'Add logo, details, and dates.',
      },
      {
        title: 'Invite families',
        body: 'Share one app and one path.',
      },
      {
        title: 'Run the season',
        body: 'Post schedules and updates.',
      },
    ] satisfies Step[],
  },
  showcase: {
    title: 'See the branded experience',
    body: 'Families open your app, not a generic tool.',
    bullets: [
      {
        title: 'Your logo and colors',
        body: 'The program looks like yours from the first tap.',
      },
      {
        title: 'Schedules and rosters',
        body: 'Key details stay in one clear place.',
      },
      {
        title: 'Registration and payments',
        body: 'The next step stays close to the program info.',
      },
    ] satisfies Card[],
    note: 'One clear place for the season.',
    mockup: {
      label: 'Branded club app',
      title: 'Eagle Select',
      items: ['Schedule', 'Roster', 'Register', 'Pay online'],
      action: 'Open today',
      theme: 'dark',
      tone: 'field',
      tilt: 'none',
    } satisfies PreviewMockup,
  },
  cta: {
    eyebrow: 'Start Setup',
    title: 'Bring your program into one clear app',
    body: 'Set it up once. Share it with families.',
  },
};

export const featuresPage = {
  pageName: 'features',
  title: 'Features | MyTeam',
  description:
    'Feature overview for MyTeam, centered on the simple workflows sports program operators use every week.',
  hero: {
    eyebrow: 'Workflow Features',
    title: 'The core flows, in one branded app.',
    body:
      'Setup, schedules, signup, updates, and brand in one clearer place.',
  },
  overview: {
    title: 'What MyTeam covers',
    body: 'The core jobs most programs repeat every week.',
    cards: [
      {
        value: 'Setup',
        title: 'Program details',
        body: 'Dates, fees, locations.',
        tone: 'brand',
      },
      {
        value: 'Signup',
        title: 'Registration flow',
        body: 'A clearer next step.',
        tone: 'field',
      },
      {
        value: 'Brand',
        title: 'Family experience',
        body: 'Your logo. Your colors.',
        tone: 'accent',
      },
    ] satisfies ResultCard[],
  },
  showcase: {
    eyebrow: 'See The Experience',
    title: 'One branded place for families.',
    body: 'The program looks like yours and stays easy to scan.',
    chips: ['Dates and fees', 'Register here', 'See updates'],
    badges: ['Family view', 'One clearer path'],
    mockup: {
      label: 'Family app view',
      title: 'Club Season',
      items: ['Program page', 'Register now', 'Latest updates'],
      action: 'View details',
      theme: 'dark',
      tone: 'brand',
      tilt: 'none',
    } satisfies PreviewMockup,
  },
  indexLinks: [
    { label: 'Setup', href: '#publishing' },
    { label: 'Schedules', href: '#schedules' },
    { label: 'Signup', href: '#registration' },
    { label: 'Updates', href: '#communication' },
    { label: 'Brand', href: '#branding' },
  ] satisfies Link[],
  sections: [
    {
      id: 'publishing',
      title: 'Program page',
      body: 'Keep dates, fees, and locations together.',
      benefit: 'Families find the basics faster.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post the season overview',
        'Update details once',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'See dates and fees fast',
        'Know the next step',
      ],
    },
    {
      id: 'schedules',
      title: 'Schedules',
      body: 'Keep time and location changes easy to track.',
      benefit: 'Less resending when plans change.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post dates and changes',
        'Update the latest schedule once',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Check the latest timing',
        'Confirm locations quickly',
      ],
    },
    {
      id: 'registration',
      title: 'Signup and payment',
      body: 'Keep the action step close to the details.',
      benefit: 'A clearer path to completion.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Show the signup step clearly',
        'Keep payment expectations close',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Review what to do',
        'Finish in a clearer flow',
      ],
    },
    {
      id: 'communication',
      title: 'Updates',
      body: 'Share reminders where families already look.',
      benefit: 'Less digging through old threads.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post program updates',
        'Share reminders in context',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Find updates faster',
        'Understand what changed',
      ],
    },
    {
      id: 'branding',
      title: 'Your brand',
      body: 'Keep your logo and colors front and center.',
      benefit: 'A more recognizable family experience.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Apply your logo and colors',
        'Keep the experience visually connected',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Recognize the program immediately',
        'Feel more confident they are in the right place',
      ],
    },
  ] satisfies FeatureSection[],
  proof: {
    title: 'The page stays focused on the workflows that matter',
    body:
      'No feature sprawl. Just the jobs most programs repeat every week and the clearer family experience those jobs support.',
  },
  cta: {
    eyebrow: 'Workflow Tour',
    title: 'Start with the workflows your team repeats most',
    body:
      'Setup, schedules, signup, updates, and brand in one clearer flow.',
  },
};

export const savingsPage = {
  pageName: 'savings',
  title: 'Savings | MyTeam',
  description:
    'Operational savings page for MyTeam focused on how simpler workflows reduce repeat work and tool sprawl.',
  hero: {
    eyebrow: 'Operational Savings',
    title: 'Keep the core flow together.',
    body:
      'Keep more of the program flow in one place.',
  },
  snapshot: {
    title: 'Fewer resets.',
    body: 'Fewer tool hops. Fewer repeated answers. Clearer next steps.',
  },
  comparison: {
    title: 'Before and after',
    body: 'What changes when the workflow stays together.',
    beforeLabel: 'Without MyTeam',
    beforeItems: [
      {
        title: 'Updates copied everywhere',
        body: 'The same change gets resent across threads.',
      },
      {
        title: 'Payment status checked elsewhere',
        body: 'What is paid lives in a separate step.',
      },
      {
        title: 'Families bounce between systems',
        body: 'The next step is harder to follow.',
      },
    ] satisfies CompareItem[],
    afterLabel: 'With MyTeam',
    afterItems: [
      {
        title: 'Post in one clearer place',
        body: 'Families know where to check.',
      },
      {
        title: 'Signup stays connected',
        body: 'Signup and payment feel more connected.',
      },
      {
        title: 'Give families one path',
        body: 'Brand, details, and next steps stay together.',
      },
    ] satisfies CompareItem[],
  },
  spotlight: {
    eyebrow: 'See It In Practice',
    title: 'Savings show up every day.',
    body: 'Same details. Fewer resets between tools.',
    chips: ['One place to post', 'One place to check', 'Fewer repeated answers'],
    badges: ['Operator flow', 'Family path'],
    mockup: {
      label: 'Operator view',
      title: 'Season dashboard',
      items: ['Post update', 'Check signup flow', 'Review schedule'],
      action: 'Run the day',
      theme: 'dark',
      tone: 'field',
      tilt: 'none',
    } satisfies PreviewMockup,
  },
  timeBack: {
    title: 'Where time comes back',
    body: 'Common jobs that get simpler.',
    cards: [
      {
        title: 'Announcements',
        before: 'Same update, several channels.',
        after: 'One clearer place to post it.',
        tag: 'Less repeat posting',
        tone: 'brand',
        icon: 'announce',
      },
      {
        title: 'Schedule changes',
        before: 'Timing changes get resent again.',
        after: 'Families check the latest schedule.',
        tag: 'Less resending',
        tone: 'field',
        icon: 'schedule',
      },
      {
        title: 'Family questions',
        before: 'Staff answer the same basics repeatedly.',
        after: 'Families have a clearer place to look.',
        tag: 'Fewer repeat questions',
        tone: 'accent',
        icon: 'family',
      },
      {
        title: 'Registration follow-up',
        before: 'Interest, forms, and payment split apart.',
        after: 'The path to signup stays tighter.',
        tag: 'Fewer handoffs',
        tone: 'brand',
        icon: 'registration',
      },
    ] satisfies SavingsCard[],
  },
  consolidation: {
    title: 'One platform, fewer tools',
    body:
      'The real value is bringing more of the workflow together.',
    leftTitle: 'Teams often juggle',
    leftItems: [
      {
        title: 'Messages',
        body: 'A separate place for reminders and announcements.',
      },
      {
        title: 'Payments',
        body: 'Another step to confirm what is complete.',
      },
      {
        title: 'Schedules',
        body: 'Another place to maintain dates and changes.',
      },
      {
        title: 'Forms',
        body: 'Another handoff before a family finishes the next step.',
      },
    ] satisfies ToolItem[],
    rightTitle: 'MyTeam brings together',
    rightItems: [
      'Program details and branded pages',
      'Registration and payment flow',
      'Schedules and updates',
      'One clearer family-facing experience',
    ],
    note:
      'Check your current stack before using exact savings numbers.',
  },
  cta: {
    eyebrow: 'Simplify The Workflow',
    title: 'Start with the busiest workflow',
    body:
      'Keep more of the daily rhythm in one clearer flow.',
  },
};

export const setupFaqPage = {
  pageName: 'setup-faq',
  title: 'Setup FAQ | MyTeam',
  description:
    'Setup FAQ for MyTeam covering fit, rollout expectations, and workflow readiness before launch.',
  hero: {
    eyebrow: 'Setup FAQ',
    title: 'Plan the rollout before you share it with families.',
    body:
      'Use this page to confirm fit, understand the rollout path, and make sure the family-facing experience feels clear before launch.',
  },
  example: {
    eyebrow: 'Illustrative Brand View',
    title: 'See how your program can look inside MyTeam.',
    body:
      'The goal is simple: families should see your brand, your program details, and the next step in one clear experience.',
    bullets: [
      'Your logo and colors stay visible',
      'Program details and next steps stay together',
      'The family view is easier to follow at a glance',
    ],
    mockup: {
      label: 'Illustrative club app',
      title: 'Eagle Select',
      items: ['Check schedule', 'See team updates', 'Register here'],
      action: 'Open club app',
      theme: 'dark',
      tone: 'brand',
      tilt: 'none',
    } satisfies PreviewMockup,
  },
  audiencesIntro: {
    title: 'Built for sports program operators',
    body: 'Clubs, camps, and leagues that need a clearer program workflow for both staff and families.',
  },
  audiences: [
    {
      title: 'Club Directors',
      body: 'For leaders who want one clearer place for schedules, registration, payments, and family updates.',
    },
    {
      title: 'Camp Operators',
      body: 'For programs that need a cleaner family path from program details to sign-up and weekly updates.',
    },
    {
      title: 'League Administrators',
      body: 'For organizations that need a more consistent structure across teams, divisions, and family-facing information.',
    },
  ] satisfies Card[],
  setupSteps: [
    {
      title: 'Create your program account',
      body: 'Start with the core program name, sport, and admin details you need for setup.',
    },
    {
      title: 'Add your brand and program details',
      body: 'Upload the logo, define the presentation, and organize the dates, fees, and locations families need first.',
    },
    {
      title: 'Set the family flow',
      body: 'Prepare the schedule, registration, payment expectations, and update paths families will use most often.',
    },
    {
      title: 'Review before launch',
      body: 'Check the live experience carefully so the public-facing path feels clear before you share it.',
    },
  ] satisfies Step[],
  experience: {
    title: 'The operator side and the family side should both feel clear',
    body:
      'A strong rollout gives staff a simpler system to maintain and gives families a clearer experience to follow.',
    operator: {
      title: 'As the operator',
      bullets: [
        'Keep program details, schedules, and updates organized in one place',
        'Set the registration and payment path more clearly before launch',
        'Review the public-facing experience before sharing it with families',
      ],
    },
    family: {
      title: 'As the family',
      bullets: [
        'Find the program and understand the basics quickly',
        'See schedules, updates, and next steps in a clearer view',
        'Follow a more consistent path for registration and payment expectations',
      ],
    },
  },
  trust: {
    title: 'What families should feel before launch',
    body:
      'Clear expectations build trust faster than long explanations. The setup should feel straightforward before the first family sees it.',
    cards: [
      {
        title: 'Clear next steps',
        body: 'Families should know where to register, how to review payment expectations, and where to check for updates.',
        tone: 'brand',
      },
      {
        title: 'Consistent presentation',
        body: 'The program should feel recognizable from the first visit through the ongoing family experience.',
        tone: 'field',
      },
      {
        title: 'A dependable review pass',
        body: 'Before rollout, staff should check the details carefully so the public-facing workflow feels ready to share.',
        tone: 'accent',
      },
    ] satisfies Card[],
  },
  faqs: [
    {
      question: 'Is MyTeam a fit for my type of program?',
      answer:
        'MyTeam is built for sports program operators who want a clearer public-facing and family-facing experience around core program workflows.',
    },
    {
      question: 'How should I think about setup?',
      answer:
        'Think about setup as a rollout plan: create the program account, add your brand and details, set the family flow, and review the experience before launch.',
    },
    {
      question: 'What should families expect?',
      answer: 'Families should expect a more consistent place to review program information, understand the next step, and check for updates.',
    },
    {
      question: 'What should I review before launch?',
      answer:
        'Review the branding, program details, schedules, registration step, payment expectations, and update paths so the experience feels clear before you share it.',
    },
    {
      question: 'Can I use MyTeam across multiple teams or divisions?',
      answer:
        'MyTeam is designed for programs that need a more consistent structure across teams, divisions, and family-facing information. Plan the exact setup around how your organization is organized today.',
    },
    {
      question: 'How should I think about the payment step?',
      answer:
        'Treat the payment step as part of the overall family flow. Keep expectations clear, review the experience carefully, and make sure families understand what happens next.',
    },
  ] satisfies FaqItem[],
  cta: {
    eyebrow: 'Rollout Planning',
    title: 'Start with a rollout plan that feels clear before launch',
    body:
      'Use the setup page to reduce uncertainty and prepare a cleaner family-facing experience before launch.',
  },
};
