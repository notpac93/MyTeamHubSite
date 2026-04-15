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
    title: 'Built around the jobs your program already runs.',
    body:
      'Publish details, guide signup, keep schedules current, share updates, and keep the whole experience on brand.',
  },
  overview: {
    title: 'What MyTeam helps you run',
    body: 'Simple workflows for staff. Clearer paths for families.',
    cards: [
      {
        value: 'One place',
        title: 'Program details',
        body: 'Dates, fees, locations, and next steps stay together.',
        tone: 'brand',
      },
      {
        value: 'One path',
        title: 'Registration',
        body: 'Families move from interest to action with less friction.',
        tone: 'field',
      },
      {
        value: 'One brand',
        title: 'Family experience',
        body: 'Your program stays front and center from first visit onward.',
        tone: 'accent',
      },
    ] satisfies ResultCard[],
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
      title: 'Publish the program overview',
      body: 'Keep dates, fees, locations, and expectations in one clear place.',
      benefit: 'Families find the basics faster.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post the main program page',
        'Update dates and fees once',
        'Keep the public details current',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Review the basics quickly',
        'Save one dependable link',
        'See the next step sooner',
      ],
    },
    {
      id: 'schedules',
      title: 'Keep schedules easy to check',
      body: 'Keep timing and location details easier to maintain and easier to reference.',
      benefit: 'Staff repeat less. Families check faster.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post dates, times, and changes',
        'Keep updates close to the program context',
        'Change the schedule in one place',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Check the latest timing quickly',
        'Confirm locations without extra messages',
        'See changes in the same flow',
      ],
    },
    {
      id: 'registration',
      title: 'Guide registration and payment clearly',
      body: 'Keep signup and payment steps close to the program information.',
      benefit: 'Families move from review to action with less confusion.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Show the signup step clearly',
        'Keep payment expectations close by',
        'Reduce extra handoffs before completion',
      ],
      familyTitle: 'Families can',
      familyItems: [
        'Review what to do',
        'Register with less back-and-forth',
        'Finish the step in a clearer flow',
      ],
    },
    {
      id: 'communication',
      title: 'Send program updates where families already look',
      body: 'Keep reminders, changes, and team information in the same experience as the rest of the program.',
      benefit: 'Updates land in a clearer place to check.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Post program and team updates',
        'Share reminders in context',
        'Keep communication tied to the workflow',
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
      body: 'Keep the experience visually connected to your organization from the first visit onward.',
      benefit: 'A clearer brand makes the experience easier to trust.',
      operatorTitle: 'Use it to',
      operatorItems: [
        'Apply your logo and colors',
        'Keep public pages and flows visually connected',
        'Present a more polished digital home',
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
    title: 'The page stays focused on the workflows that matter',
    body:
      'No feature sprawl. Just the jobs most programs repeat every week and the clearer family experience those jobs support.',
  },
  cta: {
    eyebrow: 'Workflow Tour',
    title: 'See the workflows your program can simplify first',
    body:
      'Start with the parts of your program that create the most repeat work today.',
  },
};

export const savingsPage = {
  pageName: 'savings',
  title: 'Savings | MyTeam',
  description:
    'Operational savings page for MyTeam focused on how simpler workflows reduce repeat work and tool sprawl.',
  hero: {
    eyebrow: 'Operational Savings',
    title: 'Less patchwork. More room to run.',
    body:
      'When more of the program workflow lives in one place, staff spend less time reconnecting the same details and families have a clearer path to follow.',
  },
  snapshot: {
    title: 'The goal is simpler operations',
    body: 'Not inflated numbers. Less repeated work, fewer handoffs, and a cleaner family experience.',
  },
  comparison: {
    title: 'Before vs. after MyTeam',
    body: 'See how day-to-day program management changes when more of the workflow lives in one place.',
    beforeLabel: 'Without MyTeam',
    beforeItems: [
      {
        title: 'Schedules repeated across channels',
        body: 'Updates get copied into email threads, texts, and separate chats.',
      },
      {
        title: 'Payments tracked in a separate flow',
        body: 'Staff piece together what is paid, what is pending, and what still needs follow-up.',
      },
      {
        title: 'Rosters, forms, and details drift apart',
        body: 'Different copies make the program harder for staff and families to follow.',
      },
      {
        title: 'Brand gets lost in generic tools',
        body: 'Families move through disconnected systems instead of one clear program experience.',
      },
    ] satisfies CompareItem[],
    afterLabel: 'With MyTeam',
    afterItems: [
      {
        title: 'Post once in a clearer place',
        body: 'Families check the same experience for program details, schedule changes, and next steps.',
      },
      {
        title: 'Keep signup and payment steps closer together',
        body: 'There is less back-and-forth between reviewing the program and acting on it.',
      },
      {
        title: 'Work from a clearer source of truth',
        body: 'Schedules, rosters, and program details stay easier to maintain and easier to follow.',
      },
      {
        title: 'Your brand stays visible',
        body: 'The experience feels more polished from the first visit onward.',
      },
    ] satisfies CompareItem[],
  },
  timeBack: {
    title: 'Where teams often get time back',
    body: 'These are common admin jobs MyTeam is designed to make simpler.',
    cards: [
      {
        title: 'Announcements',
        before: 'Updates get rewritten across separate channels.',
        after: 'Post the change in the same program flow families already use.',
        tag: 'Less repeated posting',
        tone: 'brand',
        icon: 'announce',
      },
      {
        title: 'Payment follow-up',
        before: 'Staff track status in a separate step and follow up manually.',
        after: 'Payment-related next steps stay closer to registration.',
        tag: 'Less chasing status',
        tone: 'field',
        icon: 'payment',
      },
      {
        title: 'Roster updates',
        before: 'Different copies get shared around staff and families.',
        after: 'Team information stays easier to keep current in one place.',
        tag: 'Less version drift',
        tone: 'accent',
        icon: 'roster',
      },
      {
        title: 'Schedule changes',
        before: 'Timing changes get redistributed again and again.',
        after: 'The latest schedule stays easier to check from one experience.',
        tag: 'Less resending',
        tone: 'brand',
        icon: 'schedule',
      },
      {
        title: 'Family questions',
        before: 'Staff answer the same "where do I find this?" questions repeatedly.',
        after: 'Families have a clearer path to check program details themselves.',
        tag: 'Fewer repeat questions',
        tone: 'field',
        icon: 'family',
      },
      {
        title: 'Registration setup',
        before: 'Interest, forms, payment, and updates get split across tools.',
        after: 'The path from review to signup stays tighter and easier to follow.',
        tag: 'Fewer handoffs',
        tone: 'accent',
        icon: 'registration',
      },
    ] satisfies SavingsCard[],
  },
  consolidation: {
    title: 'One platform instead of a patchwork',
    body:
      'Actual savings depend on the tools your program already uses. The real value is bringing more of the workflow into one system.',
    leftTitle: 'Teams often juggle',
    leftItems: [
      {
        title: 'Email and message tools',
        body: 'A separate place for reminders, announcements, and family communication.',
      },
      {
        title: 'Payment tools or manual tracking',
        body: 'Another step to collect payments and confirm what is complete.',
      },
      {
        title: 'Scheduling software or spreadsheets',
        body: 'Another place to maintain dates, locations, and changes.',
      },
      {
        title: 'Form builders for registration',
        body: 'Another handoff before a family finishes the next step.',
      },
      {
        title: 'Separate public-facing pages',
        body: 'Another place to manage the program presentation and brand.',
      },
    ] satisfies ToolItem[],
    rightTitle: 'MyTeam brings together',
    rightItems: [
      'Program details and branded pages',
      'Registration and payment flow',
      'Schedules and updates',
      'Rosters and team information',
      'One clearer family-facing experience',
    ],
    note:
      'Review your current stack before turning this into a quantified savings claim.',
  },
  cta: {
    eyebrow: 'Simplify The Workflow',
    title: 'Start with the workflows creating the most repeat work',
    body:
      'Bring the highest-friction parts of your program into one clearer experience first.',
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
