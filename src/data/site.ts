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
  mockup: PreviewMockup;
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
  name: 'MyTeamHub',
  title: 'MyTeamHub | Simple workflows for sports program operations',
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

export const featuresSecondaryCta: CallToAction = {
  label: 'See Savings',
  href: withBase('/savings'),
};

export const savingsSecondaryCta: CallToAction = {
  label: 'See Setup FAQ',
  href: withBase('/setup-faq'),
};

export const homePage = {
  pageName: 'home',
  title: siteMeta.title,
  description:
    'MyTeamHub homepage for sports programs, focused on simple branded workflows for setup, signup, and family updates.',
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
        body: 'Add your logo, details, and dates.',
      },
      {
        title: 'Invite families',
        body: 'Share one app and one clear next step.',
      },
      {
        title: 'Run the season',
        body: 'Post schedules and updates.',
      },
    ] satisfies Step[],
  },
  showcase: {
    title: 'See the branded experience that feels like your program',
    body: 'Families open your app, not a generic tool.',
    bullets: [
      {
        title: 'Your logo and colors',
        body: 'The experience looks like yours from the first tap.',
      },
      {
        title: 'Schedules and rosters',
        body: 'Key details stay together instead of scattered across channels.',
      },
      {
        title: 'Registration and payments',
        body: 'The next step stays close to the program information.',
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
    title: 'Bring the season into one clear app',
    body: 'Set it up once. Share one polished experience with families.',
  },
};

export const featuresPage = {
  pageName: 'features',
  title: 'Features | MyTeamHub',
  description:
    'Feature overview for MyTeamHub, centered on the simple workflows sports program operators use every week.',
  hero: {
    eyebrow: 'Workflow Features',
    title: 'The core flows, in one app.',
    body:
      'The jobs your staff repeat, and the path families follow, in one branded place.',
  },
  overview: {
    title: 'What MyTeamHub covers',
    body: 'The core jobs most programs repeat, with less back-and-forth around each one.',
    cards: [
      {
        value: 'Setup',
        title: 'Program details',
        body: 'Dates, fees, and locations in one place.',
        tone: 'brand',
      },
      {
        value: 'Signup',
        title: 'Registration flow',
        body: 'A clearer next step for families.',
        tone: 'field',
      },
      {
        value: 'Brand',
        title: 'Family experience',
        body: 'Your logo, colors, and tone stay visible.',
        tone: 'accent',
      },
    ] satisfies ResultCard[],
  },
  showcase: {
    eyebrow: 'See The Experience',
    title: 'One branded place for families.',
    body: 'The program looks like yours, and the next step stays easy to find.',
    chips: ['Dates and fees', 'Register here', 'See updates'],
    badges: ['Family view', 'Less confusion'],
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
      benefit: 'Less time repeating the basics.',
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
      mockup: {
        label: 'Program overview',
        title: 'Fall Season',
        items: ['Dates and fees', 'Location details', 'Register next'],
        action: 'View program',
        theme: 'light',
        tone: 'brand',
        tilt: 'none',
      },
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
      mockup: {
        label: 'Schedule view',
        title: 'This week',
        items: ['Tuesday practice', 'Field update', 'Saturday game'],
        action: 'Open schedule',
        theme: 'dark',
        tone: 'field',
        tilt: 'none',
      },
    },
    {
      id: 'registration',
      title: 'Signup and payment',
      body: 'Keep the action step close to the details.',
      benefit: 'A shorter path from review to action.',
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
      mockup: {
        label: 'Registration flow',
        title: 'Join the program',
        items: ['Review details', 'Register here', 'Complete payment'],
        action: 'Start signup',
        theme: 'light',
        tone: 'accent',
        tilt: 'none',
      },
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
      mockup: {
        label: 'Updates feed',
        title: 'Latest notice',
        items: ['Practice moved', 'Reminder posted', 'New team note'],
        action: 'Read updates',
        theme: 'dark',
        tone: 'brand',
        tilt: 'none',
      },
    },
    {
      id: 'branding',
      title: 'Your brand',
      body: 'Keep your logo and colors front and center.',
      benefit: 'A more polished family experience.',
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
      mockup: {
        label: 'Branded app',
        title: 'Club identity',
        items: ['Your logo', 'Your colors', 'Your family app'],
        action: 'Open your app',
        theme: 'light',
        tone: 'brand',
        tilt: 'none',
      },
    },
  ] satisfies FeatureSection[],
  proof: {
    title: 'The page stays focused on the workflows that matter',
    body:
      'No feature sprawl. Just the jobs most programs repeat every week and the clearer family experience those jobs support.',
  },
  cta: {
    eyebrow: 'Workflow Tour',
    title: 'Start with the workflows that cost the most time',
    body:
      'Setup, schedules, signup, updates, and brand in one clearer place.',
  },
};

export const savingsPage = {
  pageName: 'savings',
  title: 'Savings | MyTeamHub',
  description:
    'Operational savings page for MyTeamHub focused on how simpler workflows reduce repeat work and tool sprawl.',
  hero: {
    eyebrow: 'Operational Savings',
    title: 'Keep it together.',
    body:
      'Keep more of the program flow in one place and spend less time reconnecting the same details.',
  },
  snapshot: {
    title: 'Less wasted time.',
    body: 'Fewer tool hops. Less manual cleanup. Easier reporting and review.',
  },
  comparison: {
    title: 'Before. After.',
    body: 'What teams stop repeating when the workflow stays together.',
    beforeLabel: 'Without MyTeamHub',
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
    afterLabel: 'With MyTeamHub',
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
    title: 'Daily savings.',
    body: 'Same details. Less cleanup. Easier follow-through for staff and families.',
    chips: ['One place to post', 'Less cleanup later', 'Reports easier to pull'],
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
    title: 'Time back.',
    body: 'Common jobs that stop stealing time, including upkeep after launch.',
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
    title: 'Fewer tools.',
    body:
      'The real value is fewer tools to manage and fewer places to double-check.',
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
    rightTitle: 'MyTeamHub brings together',
    rightItems: [
      'Program details and branded pages',
      'Registration and payment flow',
      'Schedules and updates',
      'A simpler rhythm for upkeep and reporting',
      'One clearer family-facing experience',
    ],
    note:
      'Review your current stack before turning this into an exact savings number.',
  },
  cta: {
    eyebrow: 'Simplify The Workflow',
    title: 'Start with one flow.',
    body:
      'Start with the part of the workflow that creates the most rework today.',
  },
};

export const setupFaqPage = {
  pageName: 'setup-faq',
  title: 'Setup FAQ | MyTeamHub',
  description:
    'Setup FAQ for MyTeamHub covering fit, rollout expectations, and workflow readiness before launch.',
  hero: {
    eyebrow: 'Setup FAQ',
    title: 'Set it up once. Share it with confidence.',
    body:
      'Confirm fit, prepare the rollout, and make the family-facing experience feel obvious before launch.',
  },
  example: {
    eyebrow: 'Illustrative Brand View',
    title: 'See how your program can look inside MyTeamHub.',
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
    body: 'Clubs, camps, and leagues that want a polished workflow without a technical learning curve.',
  },
  audiences: [
    {
      title: 'Club Directors',
      body: 'For leaders who want one polished place for schedules, registration, payments, and family updates.',
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
      body: 'Start with the core name, sport, and admin details you need to get moving.',
    },
    {
      title: 'Add your brand and program details',
      body: 'Upload the logo, shape the presentation, and organize the dates, fees, and locations families need first.',
    },
    {
      title: 'Set the family flow',
      body: 'Prepare the schedule, registration, payment expectations, and update paths families will use most often.',
    },
    {
      title: 'Review before launch',
      body: 'Review the live experience carefully so the public-facing path feels clear before you share it.',
    },
  ] satisfies Step[],
  experience: {
    title: 'The operator side and the family side should both feel obvious',
    body:
      'A strong rollout gives staff less explaining to do and gives families a clearer experience to follow.',
    operator: {
      title: 'As the operator',
      bullets: [
        'Keep program details, schedules, and updates organized in one place',
        'Set the registration and payment path more clearly before launch',
        'Run the day-to-day workflow without needing a deeply technical setup process',
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
      'Clear expectations build trust faster than long explanations. The setup should feel polished and straightforward before the first family sees it.',
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
      question: 'Is MyTeamHub a fit for my type of program?',
      answer:
        'MyTeamHub is built for sports program operators who want a clearer public-facing and family-facing experience around core program workflows.',
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
      question: 'Can I use MyTeamHub across multiple teams or divisions?',
      answer:
        'MyTeamHub is designed for programs that need a more consistent structure across teams, divisions, and family-facing information. Plan the exact setup around how your organization is organized today.',
    },
    {
      question: 'How should I think about the payment step?',
      answer:
        'Treat the payment step as part of the overall family flow. Keep expectations clear, review the experience carefully, and make sure families understand what happens next.',
    },
    {
      question: 'Do I need to be tech-savvy to use MyTeamHub?',
      answer:
        'No. MyTeamHub is meant to feel straightforward for everyday operators. The goal is a clear setup, a clear family path, and less manual upkeep once the program is live.',
    },
  ] satisfies FaqItem[],
  cta: {
    eyebrow: 'Rollout Planning',
    title: 'Launch with a plan that feels clear before launch',
    body:
      'Use the setup page to reduce uncertainty and prepare a cleaner family-facing experience before launch.',
  },
};
