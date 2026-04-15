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
    title: 'Each feature supports a job your staff already does.',
    body:
      'MyTeam is organized around clear operator tasks: publish the program, guide signup, manage the schedule, send updates, and keep the experience on brand.',
  },
  indexLinks: [
    { label: 'Program Setup', href: '#publishing' },
    { label: 'Schedules', href: '#schedules' },
    { label: 'Registration', href: '#registration' },
    { label: 'Updates', href: '#communication' },
    { label: 'Brand', href: '#branding' },
  ] satisfies Link[],
  sections: [
    {
      id: 'publishing',
      title: 'Publish the program overview',
      body: 'Use this area to keep season details, locations, dates, pricing, and expectations organized in one public-facing place.',
      benefit: 'Answer the first round of family questions with one dependable page.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Create the main program overview',
        'Update dates, fees, and requirements in one place',
        'Keep key information current without chasing multiple pages',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Review the basics quickly',
        'Save one link instead of collecting several',
        'See the next step without guessing',
      ],
    },
    {
      id: 'schedules',
      title: 'Keep schedules easy to check',
      body: 'Post event timing and location details in a format that is easier to maintain and easier for families to reference throughout the season.',
      benefit: 'Spend less time repeating where to look for the latest schedule.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Publish dates, times, and location changes',
        'Keep schedule details close to the team or program context',
        'Update once when the plan changes',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Check the latest timing faster',
        'Confirm locations without extra messages',
        'See changes in the same flow as other program details',
      ],
    },
    {
      id: 'registration',
      title: 'Guide registration and payment clearly',
      body: 'Keep signup and payment expectations close to the program information so families can move from review to action with less confusion.',
      benefit: 'Move families from interest to completion with fewer handoffs.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Show signup options clearly',
        'Pair payment expectations with the registration step',
        'Keep the path from program page to action simple',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Review what to choose',
        'Register and pay with less confusion',
        'Finish the step without bouncing between tools',
      ],
    },
    {
      id: 'communication',
      title: 'Send program updates where families already look',
      body: 'Keep reminders, changes, and team information tied to the same experience families use for schedules and next steps.',
      benefit: 'Reduce repeat questions by keeping reminders and changes in the same experience.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post team or program updates',
        'Share schedule changes and reminders in context',
        'Keep communications closer to the actual workflow',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Find updates faster',
        'Understand what changed',
        'Stay aligned without digging through old threads',
      ],
    },
    {
      id: 'branding',
      title: 'Present the program with a consistent brand',
      body: 'Keep the experience visually connected to your organization so the workflow feels more intentional from the first visit onward.',
      benefit: 'A more polished experience makes the workflow easier to trust from the first visit.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Apply your program identity across the experience',
        'Keep public pages and family-facing flows visually connected',
        'Present a more organized digital home',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Recognize the program immediately',
        'Feel more confident they are in the right place',
        'Move through the workflow with less uncertainty',
      ],
    },
  ] satisfies FeatureSection[],
  proof: {
    title: 'The feature set stays focused on clarity',
    body:
      'This page is intentionally centered on everyday program jobs, not a long list of abstract capabilities. The value is in making common workflows easier to run and easier to follow.',
  },
  cta: {
    eyebrow: 'Workflow Tour',
    title: 'Explore the workflow areas your program uses most',
    body:
      'See how MyTeam helps your staff publish, organize, collect, and communicate in one clearer experience.',
  },
};

export const savingsPage = {
  pageName: 'savings',
  title: 'Savings | MyTeam',
  description:
    'Operational savings page for MyTeam focused on how simpler workflows reduce repeat work and tool sprawl.',
  hero: {
    eyebrow: 'Operational Savings',
    title: 'Save time by keeping the core workflow together.',
    body:
      'When schedules, registration, payments, and updates live in one consistent flow, staff spend less time reconnecting the same information and families have fewer places to check.',
  },
  comparison: {
    title: 'What gets simpler with one clear workflow',
    body: 'The savings come from reducing repeat work, not from adding more admin layers.',
    beforeLabel: 'When the workflow is scattered',
    beforeBody:
      'Staff update multiple tools, resend the same answers, and spend more time helping families piece together what should be one process.',
    afterLabel: 'When the workflow stays together',
    afterBody:
      'Program details, signup steps, and weekly updates are easier to maintain in one place, which makes the experience easier to run and easier to follow.',
  },
  sprawl: {
    title: 'The biggest savings show up in repeated weekly tasks',
    body:
      'The goal is not to promise magic. The goal is to remove avoidable friction from the tasks your program repeats all season.',
    leftTitle: 'Time lost today',
    leftBullets: [
      'Updating the same details in multiple places',
      'Answering repeat questions about dates, fees, or next steps',
      'Sending families across separate tools to finish one task',
      'Explaining schedule changes in disconnected channels',
    ],
    rightTitle: 'What a simpler flow can save',
    rightBullets: [
      'Fewer places to maintain program details',
      'Less back-and-forth before families complete signup',
      'A clearer path for weekly schedule and update checks',
      'A more consistent experience for staff and families',
    ],
  },
  proof: {
    title: 'Simple workflows create the savings',
    body:
      'The practical value comes from keeping the core program jobs connected: publish the details, collect the next step, and manage weekly updates without rebuilding context every time.',
    note:
      'Exact time or cost savings will vary by program and should be validated before use as a quantified claim.',
  },
  cta: {
    eyebrow: 'Simplify The Workflow',
    title: 'Reduce repeat work by making the program easier to follow',
    body:
      'Start with the tasks your staff repeat most often, then give families one clear path to find information and complete the next step.',
  },
};

export const setupFaqPage = {
  pageName: 'setup-faq',
  title: 'Setup FAQ | MyTeam',
  description:
    'Setup FAQ for MyTeam covering fit, rollout expectations, and workflow readiness before launch.',
  hero: {
    eyebrow: 'Setup FAQ',
    title: 'What to expect before you set up MyTeam.',
    body:
      'Use this page to confirm fit, understand the rollout path, and see how the core workflows are meant to come together before launch.',
  },
  audiences: [
    {
      title: 'Club Directors',
      body: 'For leaders who want a clearer way to publish program details, guide signup, and reduce day-to-day coordination friction.',
    },
    {
      title: 'Camp Operators',
      body: 'For programs that need one simpler workflow for schedules, registration, payments, and family communication.',
    },
    {
      title: 'League Administrators',
      body: 'For organizations that need a more consistent structure across participant-facing information and weekly operations.',
    },
  ] satisfies Card[],
  setupSteps: [
    {
      title: 'Map your core workflow',
      body: 'Start with the program details, dates, fees, and next steps families need to see clearly.',
    },
    {
      title: 'Prepare the family path',
      body: 'Organize the schedule, registration, payment, and update flows your families will use most often.',
    },
    {
      title: 'Review the live experience',
      body: 'Check the full experience carefully so the public-facing workflow feels consistent before rollout.',
    },
  ] satisfies Step[],
  experience: {
    title: 'Built for both sides of the experience',
    operator: {
      title: 'For operators',
      body: 'MyTeam is meant to support the recurring jobs that keep a program moving: publish the details, guide the next step, and manage updates clearly.',
    },
    family: {
      title: 'For families',
      body: 'The family side should feel easier to follow, easier to trust, and easier to act on because the next step is clearer.',
    },
  },
  trust: {
    title: 'Trust matters before launch',
    body:
      'Before launch, families need clear expectations, consistent presentation, and one dependable place to complete the workflow.',
    bullets: [
      'Clear schedule, registration, and payment expectations',
      'More consistent program presentation from first visit onward',
      'A simpler path for families to understand what to do next',
    ],
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
        'Think about setup as a simple rollout path: map the core workflow, prepare the family path, and review the experience carefully before launch.',
    },
    {
      question: 'What should families expect?',
      answer: 'Families should expect a more consistent place to follow program information, complete the next step, and check for updates.',
    },
    {
      question: 'How does MyTeam help create trust before launch?',
      answer:
        'MyTeam helps programs present clearer expectations, more consistent information, and a cleaner path for families to know what to do next.',
    },
  ] satisfies FaqItem[],
  cta: {
    eyebrow: 'Rollout Planning',
    title: 'Start with a clearer rollout plan',
    body:
      'Use the setup page to reduce uncertainty and plan a more consistent workflow before launch.',
  },
};
