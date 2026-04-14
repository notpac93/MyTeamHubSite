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
};

export type Step = {
  title: string;
  body: string;
};

export type FlowGroup = {
  label: string;
  items: string[];
};

export type FeatureLane = {
  label: string;
  items: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

const withBase = (path: string) => {
  if (path.startsWith('#')) {
    return path;
  }

  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  const [pathname, hash = ''] = path.split('#');
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '') + '/';
  const resolved = base === '' || base === '/'
    ? normalizedPath
    : `${base}${normalizedPath === '/' ? '/' : normalizedPath}`;

  return hash ? `${resolved}#${hash}` : resolved;
};

export const siteMeta = {
  name: 'MyTeam',
  title: 'MyTeam | Clearer program operations for sports organizations',
  description:
    'A static marketing site for sports program operators who want a clearer way to present schedules, registration, payments, and updates.',
  footerBlurb:
    'Built for sports program operators who want a clearer digital home for the work families already rely on.',
};

export const navigation: Link[] = [
  { label: 'Home', href: withBase('/') },
  { label: 'Features', href: withBase('/features') },
  { label: 'Savings', href: withBase('/savings') },
  { label: 'Setup FAQ', href: withBase('/setup-faq') },
];

export const primaryCta: CallToAction = {
  label: 'Start Your Setup',
  href: withBase('/setup-faq#setup-steps'),
};

export const secondaryCta: CallToAction = {
  label: 'Explore Features',
  href: withBase('/features'),
};

export const homePage = {
  pageName: 'home',
  title: siteMeta.title,
  description:
    'MyTeam overview for sports program operators, with a clear operator-first message and family-facing value summary.',
  hero: {
    eyebrow: 'For Sports Program Operators',
    title: 'Run your program with a clearer digital home.',
    body:
      'MyTeam is built for sports programs that want a more organized way to handle schedules, registration, payments, and updates without sending families across multiple tools.',
  },
  heroFlow: {
    operator: {
      label: 'Operators manage',
      items: ['Schedules', 'Registration', 'Payments', 'Updates'],
    } satisfies FlowGroup,
    hubLabel: 'MyTeam',
    hubTitle: 'One clearer program home',
    hubItems: [
      'Bring key program details into one consistent flow',
      'Keep staff-facing information easier to maintain',
      'Give families a more reliable place to check next steps',
    ],
    family: {
      label: 'Families understand',
      items: ['Where to look', 'What changed', 'What to do next'],
    } satisfies FlowGroup,
  },
  valueProps: {
    title: 'One place for the work your program already manages',
    body:
      'MyTeam helps operators present key program information more clearly and keep day-to-day coordination easier to follow.',
    cards: [
      {
        title: 'Clearer Program Operations',
        body: 'Bring the essential parts of program administration into a more consistent experience for staff and families.',
      },
      {
        title: 'Simpler Family Experience',
        body: 'Give families one place to check the information they need instead of piecing it together across separate channels.',
      },
      {
        title: 'Stronger Program Presence',
        body: 'Present your program in a more polished way that feels intentional from first visit to ongoing use.',
      },
    ] satisfies Card[],
  },
  steps: {
    title: 'A straightforward path from setup to launch',
    body:
      'MyTeam is designed to help program operators move from configuration to day-to-day use with a simpler rollout path.',
    items: [
      {
        title: 'Set up your program details',
        body: 'Start with the core information your program needs families to see and follow.',
      },
      {
        title: 'Organize the experience',
        body: 'Structure schedules, registration, payments, and updates so the program is easier to manage.',
      },
      {
        title: 'Share with families',
        body: 'Roll out one program-facing experience that gives families a clearer place to stay informed.',
      },
    ] satisfies Step[],
  },
  proof: {
    title: 'Built for programs that want a more organized member experience',
    body:
      'MyTeam is meant to help programs present information more clearly, reduce friction for families, and make routine admin work easier to maintain over time.',
    note:
      'Illustrative operator view showing how a clearer program experience can come together in one place.',
    boardTitle: 'Illustrative program board',
    boardItems: [
      'Program overview in one clearer place',
      'Consistent paths for registration and payments',
      'Updates structured for easier follow-through',
      'A more polished presentation for staff and families',
    ],
  },
  family: {
    title: 'Easier for families to follow',
    body:
      'When a program is easier to navigate, families spend less time hunting for updates and more time acting on the information that matters.',
    bullets: [
      'A clearer place to check schedules and program details',
      'A more consistent path for registration and payments',
      'A simpler way to stay aligned with program updates',
    ],
  },
  cta: {
    eyebrow: 'Start Here',
    title: 'Bring more clarity to how your program runs',
    body:
      'If your team is managing key program tasks across too many places today, MyTeam gives you a cleaner starting point for bringing them together.',
  },
};

export const featuresPage = {
  pageName: 'features',
  title: 'Features | MyTeam',
  description:
    'Feature overview for MyTeam, focused on core workflow categories for sports program operators.',
  hero: {
    eyebrow: 'Features',
    title: 'The core workflows sports programs need to keep moving.',
    body:
      'MyTeam is designed around the work operators manage every week, with focused support for the information families and staff need most.',
  },
  indexLinks: [
    { label: 'Publishing', href: '#publishing' },
    { label: 'Schedules', href: '#schedules' },
    { label: 'Registration', href: '#registration' },
    { label: 'Communication', href: '#communication' },
    { label: 'Branding', href: '#branding' },
  ] satisfies Link[],
  sections: [
    {
      id: 'publishing',
      badge: 'CP',
      title: 'Content publishing support',
      body: 'Keep your program information current with an experience designed to make updates easier to manage and easier to follow.',
      highlights: [
        'A clearer structure for public-facing program details',
        'Fewer scattered places to maintain core information',
      ],
      lanes: [
        {
          label: 'Operators',
          items: ['Update program details in one clearer flow', 'Keep pages and key information more consistent'],
        },
        {
          label: 'Families',
          items: ['Find current information more easily', 'See a cleaner structure for what matters most'],
        },
      ] satisfies FeatureLane[],
    },
    {
      id: 'schedules',
      badge: 'SE',
      title: 'Schedules and events',
      body: 'Organize schedules and event information in a way that is easier for staff to maintain and easier for families to reference.',
      highlights: [
        'A more consistent place for timing and event details',
        'Easier reference points for staff and families',
      ],
      lanes: [
        {
          label: 'Operators',
          items: ['Post dates and event details more consistently', 'Maintain timing updates without extra handoffs'],
        },
        {
          label: 'Families',
          items: ['Check schedules in one clearer place', 'Follow the same event flow week to week'],
        },
      ] satisfies FeatureLane[],
    },
    {
      id: 'registration',
      badge: 'RP',
      title: 'Registration and payment support',
      body: 'Support key signup and payment workflows in a more consistent program-facing experience.',
      highlights: [
        'A cleaner path for registration-related next steps',
        'A more coordinated place for payment-related expectations',
      ],
      lanes: [
        {
          label: 'Operators',
          items: ['Guide sign-up steps more clearly', 'Set payment-related expectations in one flow'],
        },
        {
          label: 'Families',
          items: ['See where to register first', 'Understand the next action more quickly'],
        },
      ] satisfies FeatureLane[],
    },
    {
      id: 'communication',
      badge: 'RC',
      title: 'Rosters and communication support',
      body: 'Help your program keep the right people aligned with a clearer structure for team information and updates.',
      highlights: [
        'More consistent presentation of team-facing information',
        'Clearer update flows for operators and families',
      ],
      lanes: [
        {
          label: 'Operators',
          items: ['Keep rosters and updates aligned', 'Present team information more consistently'],
        },
        {
          label: 'Families',
          items: ['Follow updates in one clearer flow', 'Stay aligned with the right team details'],
        },
      ] satisfies FeatureLane[],
    },
    {
      id: 'branding',
      badge: 'BP',
      title: 'Brand presence',
      body: 'Present your program with a more recognizable look and feel so the experience feels connected to your organization.',
      highlights: [
        'A stronger sense of program identity',
        'A more connected experience from first visit onward',
      ],
      lanes: [
        {
          label: 'Operators',
          items: ['Present one recognizable program experience', 'Create a more connected look from first visit onward'],
        },
        {
          label: 'Families',
          items: ['Recognize the program more quickly', 'Move through a more polished public-facing flow'],
        },
      ] satisfies FeatureLane[],
    },
  ],
  proof: {
    title: 'Built around the realities of program operations',
    body:
      'The goal is not more software for its own sake. The goal is a clearer operating experience for the people running the program and the families following it.',
  },
  cta: {
    eyebrow: 'Next Step',
    title: 'See how MyTeam supports the workflows your program already manages',
    body:
      'Explore the workflow areas that help programs keep information, timing, and next steps easier to follow.',
  },
};

export const savingsPage = {
  pageName: 'savings',
  title: 'Savings | MyTeam',
  description:
    'Operational simplification page for MyTeam focused on reducing workflow sprawl and coordination drag.',
  hero: {
    eyebrow: 'Savings',
    title: 'Fewer disconnected tools. Less operational drag.',
    body:
      'Many programs patch together scheduling, registration, payments, updates, and public-facing information across too many places. MyTeam is positioned to reduce that sprawl with a more unified experience.',
  },
  comparison: {
    title: 'From scattered workflows to a clearer operating model',
    beforeLabel: 'Without a clearer system',
    beforeBody:
      'Operators spend more energy stitching together tools, answering repeat questions, and maintaining inconsistent information across multiple places.',
    afterLabel: 'With a more unified program experience',
    afterBody:
      'Program information is easier to present, easier to maintain, and easier for families to follow in one consistent flow.',
  },
  systems: {
    connectorLabel: 'A clearer operating flow',
    beforeNodes: ['Schedule page', 'Registration form', 'Payment instructions', 'Update threads'],
    afterNodes: ['Program details', 'Schedules', 'Registration and payments', 'Updates and next steps'],
  },
  sprawl: {
    title: 'Reduce tool sprawl where it matters most',
    body:
      'The value comes from simplification, coordination, and clearer ownership across the program experience.',
    leftTitle: 'Common friction today',
    leftBullets: [
      'Scattered information',
      'Repeated family questions',
      'Inconsistent presentation',
      'Too many handoffs between tools',
    ],
    rightTitle: 'What a clearer setup can improve',
    rightBullets: [
      'More consistent program information',
      'Fewer places to maintain',
      'A cleaner family-facing experience',
      'Tighter operational coordination',
    ],
  },
  proof: {
    title: 'The value is operational clarity',
    body:
      'The value becomes visible when a program is easier to maintain, easier to present, and easier for families to follow.',
    note:
      'Clearer operations can reduce confusion, repeated questions, and unnecessary handoffs across tools.',
  },
  cta: {
    eyebrow: 'Simplify First',
    title: 'Build a cleaner operating experience for your program',
    body:
      'Start from simplification and coordination, then give families and staff a more consistent place to follow what matters.',
  },
};

export const setupFaqPage = {
  pageName: 'setup-faq',
  title: 'Setup FAQ | MyTeam',
  description:
    'Setup FAQ for MyTeam covering fit, rollout expectations, and common pre-launch questions.',
  hero: {
    eyebrow: 'Setup FAQ',
    title: 'What to expect before you get started.',
    body:
      'This page is for operators who want to understand fit, setup expectations, and the questions families may care about before launch.',
  },
  audiences: [
    {
      title: 'Club Directors',
      body: 'For leaders who want a clearer way to present their program and reduce day-to-day coordination friction.',
    },
    {
      title: 'Camp Operators',
      body: 'For programs that need a more organized experience around schedules, registration, payments, and communication.',
    },
    {
      title: 'League Administrators',
      body: 'For organizations that need a more consistent structure across participant-facing information.',
    },
  ] satisfies Card[],
  setupSteps: [
    {
      title: 'Confirm your program setup',
      body: 'Start with the core details, structure, and information your program needs to present clearly.',
    },
    {
      title: 'Prepare the experience',
      body: 'Organize the content and workflows your staff and families will use most often.',
    },
    {
      title: 'Review before launch',
      body: 'Check the experience carefully so the public-facing presentation is consistent before rollout.',
    },
  ] satisfies Step[],
  rolloutNote:
    'Use this page to answer fit, rollout, and handoff questions before implementation details become launch blockers.',
  experience: {
    title: 'Built for both sides of the experience',
    operator: {
      title: 'For operators',
      body: 'MyTeam is intended to support the day-to-day coordination work that keeps a program running.',
      points: ['Confirm program details', 'Organize the staff-facing flow', 'Review launch readiness'],
    },
    family: {
      title: 'For families',
      body: 'The family side should feel easier to follow, easier to trust, and easier to act on when information is presented consistently.',
      points: ['Know where to look first', 'See consistent information', 'Understand what to do next'],
    },
  },
  trust: {
    title: 'Trust matters before launch',
    body:
      'Families need clear expectations, consistent presentation, and a dependable path to the information and next steps they need.',
    bullets: [
      'Clearer payment-related expectations',
      'More consistent program presentation',
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
        'Think about setup as a clear rollout path: organize your program details, prepare the experience, and review it carefully before launch.',
    },
    {
      question: 'What should families expect?',
      answer: 'Families should expect a more consistent place to follow program information and next steps.',
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
      'Use the setup page to reduce uncertainty and plan a more consistent experience before launch.',
  },
};
