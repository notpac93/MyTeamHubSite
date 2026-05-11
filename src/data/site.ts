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
  name: 'HuddleWay',
  title: 'HuddleWay | One app for families, one system for admins',
  description:
    'HuddleWay gives families one app for schedules, updates, and registration while admins manage pages, events, payments, and updates from one system.',
  footerBlurb:
    'Built for sports programs that want one clear app for families and one simple system to manage pages, events, registration, payments, and updates.',
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
    'HuddleWay homepage for sports programs that want one app for families and one simple system for admins.',
  hero: {
    eyebrow: 'One App For Families. One System For Admins.',
    title: 'The app families keep on their phones. The system admins use every day.',
    body: 'Families can find schedules, updates, and registration in one place. Admins can manage pages, events, registration, payments, and updates from one system.',
  },
  heroPill: 'A trusted app for families, built-in tools for admins',
  quickChecks: [
    'Schedules and updates',
    'Registration and payments',
    'Pages and events',
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
    body: 'Save time, stay organized, and give families a clearer experience.',
    cards: [
      {
        value: 'One place',
        title: 'Families know where to look',
        body: 'Schedules, updates, and registration stay together in one app.',
        tone: 'brand',
      },
      {
        value: 'One system',
        title: 'Admins manage the day-to-day work',
        body: 'Pages, events, registration, payments, and updates stay in one workflow.',
        tone: 'field',
      },
      {
        value: 'Built-in tools',
        title: 'A more professional experience',
        body: 'Your logo, colors, and program details stay clear from setup through signup.',
        tone: 'accent',
      },
    ] satisfies ResultCard[],
  },
  steps: {
    title: 'From setup to live in 3 steps',
    body: 'Set up your program, publish the key details, and invite families into one clear app.',
    items: [
      {
        title: 'Set up your program',
        body: 'Add your logo, details, and dates.',
      },
      {
        title: 'Publish pages and events',
        body: 'Keep the family-facing path and the admin workflow in one system.',
      },
      {
        title: 'Run the season',
        body: 'Manage registration, payments, schedules, and updates from the same place.',
      },
    ] satisfies Step[],
  },
  showcase: {
    title: 'See the family app that keeps the season easy to follow',
    body: 'Families open one trusted app to find schedules, updates, and registration in one place.',
    bullets: [
      {
        title: 'Your logo and colors',
        body: 'The experience looks like yours from the first tap.',
      },
      {
        title: 'Schedules, pages, and updates together',
        body: 'Key details stay together instead of getting split across different tools and threads.',
      },
      {
        title: 'Registration and payments stay close',
        body: 'The next step stays near the program details families already need.',
      },
    ] satisfies Card[],
    note: 'One clear app for families. One simple system for admins.',
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
    body: 'Set it up once, then give families one app while admins manage the work in one system.',
  },
};

export const featuresPage = {
  pageName: 'features',
  title: 'Features | HuddleWay',
  description:
    'Feature overview for HuddleWay, centered on the family app experience and the admin workflows sports programs use every week.',
  hero: {
    eyebrow: 'Workflow Features',
    title: 'A simple all-in-one management tool with a clear family app built in.',
    body:
      'Admins can manage pages, events, registration, payments, and updates from one system while families follow the same program in the app on their phones.',
  },
  overview: {
    title: 'What HuddleWay covers',
    body: 'The built-in tools many programs already need, without making families bounce between separate steps.',
    cards: [
      {
        value: 'Setup',
        title: 'Pages and program details',
        body: 'Dates, fees, locations, and key pages stay in one system.',
        tone: 'brand',
      },
      {
        value: 'Operations',
        title: 'Events, registration, and payments',
        body: 'Admins manage the day-to-day workflow without splitting it apart.',
        tone: 'field',
      },
      {
        value: 'Family app',
        title: 'Schedules, updates, and next steps',
        body: 'Families can find what they need in one place on the phone.',
        tone: 'accent',
      },
    ] satisfies ResultCard[],
  },
  showcase: {
    eyebrow: 'See The Experience',
    title: 'One family app connected to one admin system.',
    body: 'The program looks like yours, the next step stays easy to find, and admins update the same system behind it.',
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
    { label: 'Events', href: '#schedules' },
    { label: 'Registration', href: '#registration' },
    { label: 'Updates', href: '#communication' },
    { label: 'Brand', href: '#branding' },
  ] satisfies Link[],
  sections: [
    {
      id: 'publishing',
      title: 'Pages and program details',
      body: 'Keep dates, fees, locations, and core program pages together.',
      benefit: 'Less time repeating the basics.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Manage the season overview and key pages',
        'Update core details once',
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
      title: 'Events and schedules',
      body: 'Keep time, location, and event changes easy to track.',
      benefit: 'Less resending when plans change.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post event dates and schedule changes',
        'Update the latest timing once',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Check the latest timing',
        'Confirm locations and event details quickly',
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
        'Show the registration step clearly',
        'Keep payment expectations close to signup',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Review what to do',
        'Finish registration in a clearer flow',
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
      'No feature sprawl. Just the built-in tools many programs already use to manage the day-to-day work and the clearer family experience those tools support.',
  },
  cta: {
    eyebrow: 'Workflow Tour',
    title: 'Start with the workflows that cost the most time',
    body:
      'Pages, events, registration, payments, updates, and brand in one clearer system.',
  },
};

export const savingsPage = {
  pageName: 'savings',
  title: 'Savings | HuddleWay',
  description:
    'Operational savings page for HuddleWay focused on how one family app and one admin system reduce repeat work and tool sprawl.',
  hero: {
    eyebrow: 'Operational Savings',
    title: 'Keep it together.',
    body:
      'Keep the family app and the admin workflow in one system so staff spend less time reconnecting the same details.',
  },
  snapshot: {
    title: 'Less wasted time.',
    body: 'Fewer tool hops. Less manual cleanup. Easier reporting and review.',
  },
  comparison: {
    title: 'Before. After.',
    body: 'What teams stop repeating when the workflow stays together.',
    beforeLabel: 'Without HuddleWay',
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
    afterLabel: 'With HuddleWay',
    afterItems: [
      {
        title: 'Post in one clearer place',
        body: 'Families know where to check.',
      },
      {
        title: 'Signup stays connected',
        body: 'Registration and payment stay in the same system.',
      },
      {
        title: 'Give families one path',
        body: 'Brand, details, updates, and next steps stay together.',
      },
    ] satisfies CompareItem[],
  },
  spotlight: {
    eyebrow: 'See It In Practice',
    title: 'Daily savings.',
    body: 'Same details. Less cleanup. Easier follow-through for admins and families.',
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
    rightTitle: 'HuddleWay brings together',
    rightItems: [
      'Program details, branded pages, and events',
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
  title: 'Setup FAQ | HuddleWay',
  description:
    'Setup FAQ for HuddleWay covering fit, rollout expectations, and how the family app and admin system work before launch.',
  hero: {
    eyebrow: 'Setup FAQ',
    title: 'Set it up once. Share it with confidence.',
    body:
      'Confirm fit, prepare the rollout, and review both the family app and the admin workflow before launch.',
  },
  example: {
    eyebrow: 'Illustrative Brand View',
    title: 'See how your program can look inside HuddleWay.',
    body:
      'The goal is simple: families should see your brand, your program details, and the next step in one clear app on the phone.',
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
    body: 'Clubs, camps, and leagues that want one clear family app and one simple system for day-to-day management.',
  },
  audiences: [
    {
      title: 'Club Directors',
      body: 'For leaders who want one system to manage pages, events, registration, payments, and family updates.',
    },
    {
      title: 'Camp Operators',
      body: 'For programs that need one app families can use for schedules, updates, and registration.',
    },
    {
      title: 'League Administrators',
      body: 'For organizations that need a more consistent structure across teams, divisions, events, and family-facing information.',
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
      body: 'Prepare the schedules, registration, payment expectations, and update paths families will use most often.',
    },
    {
      title: 'Review before launch',
      body: 'Review the live experience carefully so the public-facing path feels clear before you share it.',
    },
  ] satisfies Step[],
  experience: {
    title: 'The admin system and the family app should both feel obvious',
    body:
      'A strong rollout gives staff one clearer management workflow and gives families one clearer app experience to follow.',
    operator: {
      title: 'As the operator',
      bullets: [
        'Keep pages, events, schedules, and updates organized in one system',
        'Set the registration and payment path more clearly before launch',
        'Run the day-to-day workflow without needing a deeply technical setup process',
        'Review the public-facing experience before sharing it with families',
      ],
    },
    family: {
      title: 'As the family',
      bullets: [
        'Find the program and understand the basics quickly',
        'See schedules, updates, and next steps in one place on the phone',
        'Follow a more consistent path for registration and payment expectations',
      ],
    },
  },
  trust: {
    title: 'Trust comes from clear steps and controlled access',
    body:
      'Keep the trust language factual: HuddleWay supports secure activation, role-based admin controls, and a connected registration and payment path.',
    cards: [
      {
        title: 'Clear next steps',
        body: 'Families should know where to register, how to review payment expectations, and where to check for updates.',
        tone: 'brand',
      },
      {
        title: 'Role-based admin controls',
        body: 'Admins manage the program from one system with controlled access for the operational side.',
        tone: 'field',
      },
      {
        title: 'Secure activation and review',
        body: 'Before rollout, staff should check the live details carefully so the family-facing workflow is ready to share.',
        tone: 'accent',
      },
    ] satisfies Card[],
  },
  faqs: [
    {
      question: 'Is HuddleWay a fit for my type of program?',
      answer:
        'HuddleWay is built for sports program operators who want one app for families and one simpler system to manage the core program workflow.',
    },
    {
      question: 'How should I think about setup?',
      answer:
        'Think about setup as a rollout plan: create the program account, add your brand and details, set the family flow, and review the live experience before launch.',
    },
    {
      question: 'What should families expect?',
      answer: 'Families should expect one app where they can review program information, understand the next step, and check for schedules and updates.',
    },
    {
      question: 'What should I review before launch?',
      answer:
        'Review the branding, program details, pages, schedules, registration step, payment expectations, and update paths so the experience feels clear before you share it.',
    },
    {
      question: 'Can I use HuddleWay across multiple teams or divisions?',
      answer:
        'HuddleWay is designed for programs that need a more consistent structure across teams, divisions, events, and family information. Plan the exact setup around how your organization is organized today.',
    },
    {
      question: 'How should I think about the payment step?',
      answer:
        'Treat the payment step as part of the overall family flow. Keep expectations clear, review the experience carefully, and make sure families understand what happens next.',
    },
    {
      question: 'Do I need to be tech-savvy to use HuddleWay?',
      answer:
        'No. HuddleWay is meant to feel straightforward for everyday operators. The goal is a clear setup, a clear family path, and less manual upkeep once the program is live.',
    },
  ] satisfies FaqItem[],
  cta: {
    eyebrow: 'Rollout Planning',
    title: 'Launch with a plan that feels clear before launch',
    body:
      'Use the setup page to reduce uncertainty and prepare a clearer family app and admin workflow before launch.',
  },
};
