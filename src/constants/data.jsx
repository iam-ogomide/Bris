// Shared static data used across pages/components.
import heroImg1 from '../assets/h1.jpg'
import heroImg2 from '../assets/h2.jpg'
import heroImg3 from '../assets/h3.jpg'
import heroImg4 from '../assets/h4.jpg'
import heroImg5 from '../assets/h5.jpg'
import heroImg6 from '../assets/h6.jpg'
import heroImg7 from '../assets/h7.jpg'
import {
  ClockIcon,
  GlobeIcon,
  CoinsIcon,
  HeartIcon,
  ConvictionIcon,
  InsightIcon,
  AlignmentIcon,
  LongtermIcon,
  SteelRiverLogo,
  UnionSoftwareLogo,
  VertexMaterialsLogo,
  LatticePayLogo,
  NorthgateLogisticsLogo,
  MeridianHealthLogo,
  HarborAnalyticsLogo,
  LogoTargetIcon,
  LogoCompassIcon,
  LogoBoltIcon,
  LogoBadgeCheckIcon,
  LogoLoopArrowIcon,
  InstagramIcon,
  XSocialIcon,
  LinkedInSocialIcon,
  YoutubeIcon,
} from './icons'


///Navbar

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Investment Approach', to: '/approach' },
  { label: 'Insights', to: '/insights' },
]

export const ABOUT_ITEMS = [
  { label: 'About Us', to: '/about', description: 'Our story, mission, and team' },
  { label: 'News', to: '/news', description: 'Announcements and press' },
  { label: 'Careers', to: '/careers', description: 'Open roles and life at Bris' },
]


//////// Footer 

export const EXPLORE_LINKS = ['Investment', 'Advisor', 'AI Solutions', 'Focus', 'Company', 'News']

export const SOCIALS = [
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: XSocialIcon, label: 'X' },
  { Icon: LinkedInSocialIcon, label: 'LinkedIn' },
  { Icon: YoutubeIcon, label: 'YouTube' },
]



///Home

export const NEWS_POSTS = [
  {
    tag: 'Investment',
    date: 'May 31',
    img: 'https://picsum.photos/id/1043/500/620',
    title: (
      <>
        IMPACT Synergy is an
        <br />
        <b className="font-bold">AI powered</b> investment
        <br />
        banking solution
      </>
    ),
  },
  {
    tag: 'AI Solutions',
    date: 'May 31',
    img: 'https://picsum.photos/id/1040/500/620',
    title: (
      <>
        IMPACT Synergy is an
        <br />
        AI powered
        <br />
        <b className="font-bold">investment banking</b>
      </>
    ),
  },
  {
    tag: 'Company',
    date: 'May 31',
    img: 'https://picsum.photos/id/1048/500/620',
    title: (
      <>
        IMPACT Synergy is an
        <br />
        AI powered investment
        <br />
        banking solution
      </>
    ),
  },
  {
    tag: 'Focus',
    date: 'May 31',
    img: 'https://picsum.photos/id/1035/500/620',
    title: (
      <>
        IMPACT Synergy is an
        <br />
        AI powered <b className="font-bold">investment</b>
        <br />
        <b className="font-bold">banking</b> solution
      </>
    ),
  },
]


////Home / About

export const VALUES = [
  { key: 'conviction', Icon: ConvictionIcon, title: 'Conviction', desc: 'We back what we believe in, and stay the course even when markets don’t.' },
  { key: 'insight', Icon: InsightIcon, title: 'Insight-driven', desc: 'Every decision is grounded in rigorous analysis and firsthand operating experience.' },
  { key: 'alignment', Icon: AlignmentIcon, title: 'Alignment', desc: 'We structure every partnership so our incentives sit right next to our founders’.' },
  { key: 'longterm', Icon: LongtermIcon, title: 'Long-term thinking', desc: 'We’re building portfolios and relationships that are designed to compound over decades.' },
]

export const BACKERS = [
  'Meridian Capital',
  'Anchorpoint',
  'Solstice Partners',
  'Northbridge',
  'Vantage Point',
  'Sterling & Co',
  'Crestview',
  'Beacon Group',
]

export const TEAM = [
  { name: 'Mei Lin', role: 'Lead Designer', img: 'https://i.pravatar.cc/300?img=47' },
  { name: 'Bali Gee', role: 'Co-Founder', img: 'https://i.pravatar.cc/300?img=32' },
  { name: 'Marcus Reed', role: 'Creative Director', img: 'https://i.pravatar.cc/300?img=13' },
  { name: 'Sora Kim', role: 'Head of Marketing', img: 'https://i.pravatar.cc/300?img=44' },
  { name: 'Priya Nair', role: 'Product Lead', img: 'https://i.pravatar.cc/300?img=45' },
  { name: 'Oskar Lund', role: 'Engineering Lead', img: 'https://i.pravatar.cc/300?img=59' },
  { name: 'Claire Voss', role: 'Operations', img: 'https://i.pravatar.cc/300?img=49' },
]

export const TESTIMONIALS = [
  {
    quote: 'BRIS didn’t just write a check. They gave us the strategic capital and network to scale with confidence.',
    name: 'Diana Mounter',
    role: 'CEO, Novarik',
    img: 'https://i.pravatar.cc/100?img=22',
  },
  {
    quote: 'Their diligence was rigorous, but never slow. We closed our round in weeks, not months.',
    name: 'James Anderson',
    role: 'Founder, BrightLedger',
    img: 'https://i.pravatar.cc/100?img=54',
  },
  {
    quote: 'What sets them apart is how they show up after the term sheet is signed. True operating partners.',
    name: 'Matthew Brooks',
    role: 'Co-Founder, Amsterdam Labs',
    img: 'https://i.pravatar.cc/100?img=8',
  },
  {
    quote: 'They understood our market better than most operators we’d met. That insight shaped our whole strategy.',
    name: 'Paul Smith',
    role: 'Creative Director, Luminous',
    img: 'https://i.pravatar.cc/100?img=36',
  },
  {
    quote: 'Patient, disciplined capital that thinks in years, not quarters. Exactly what we needed at our stage.',
    name: 'David Mitchell',
    role: 'VP of Sales, ProLine',
    img: 'https://i.pravatar.cc/100?img=67',
  },
  {
    quote: 'Board meetings with BRIS feel like working sessions with a co-founder, not a check-in with an investor.',
    name: 'William Scott',
    role: 'Head of Product, Atlantic',
    img: 'https://i.pravatar.cc/100?img=15',
  },
]

export const FAQS = [
  {
    q: 'What stage companies do you invest in?',
    a: 'We typically lead or co-lead rounds from seed through growth stage, writing initial checks between $500K and $15M depending on the opportunity and follow-on capacity for the companies we believe in most.',
  },
  {
    q: 'What happens after you commit capital?',
    a: 'We move quickly into onboarding, introducing you to our network of operators, customers, and follow-on investors, and stay closely involved through board seats or observer rights.',
  },
  {
    q: 'Do you take board seats?',
    a: 'For most lead investments, yes. We believe governance built on trust and consistent involvement leads to better outcomes for founders and investors alike.',
  },
  {
    q: 'Can portfolio companies raise from other investors?',
    a: 'Absolutely. We regularly co-invest alongside other funds and encourage founders to build a syndicate that brings the most value to the business.',
  },
  {
    q: 'What do I need to submit a pitch?',
    a: 'A deck and a short note on your traction and vision is enough to start the conversation. We’ll ask the right questions to fill in the gaps from there.',
  },
]


/////Approach

export const PILLARS = [
  {
    num: '01',
    title: 'Conviction over consensus',
    body: 'We back founders early, before the market has agreed the opportunity is real, and we do the underwriting ourselves rather than waiting for a syndicate to validate it.',
  },
  {
    num: '02',
    title: 'Downside discipline',
    body: 'Capital goes out in stages, with reserves held back for the founders who earn them. We protect the downside so conviction can run on the upside.',
  },
  {
    num: '03',
    title: 'Alignment, not pressure',
    body: 'We raise from long-term partners who let us hold, not push us to exit early. Our incentives sit next to our founders’, for as long as the company needs them to.',
  },
]

export const FOCUS_AREAS = [
  {
    name: 'Pre-Seed & Seed',
    summary: 'First checks into founders with a sharp insight and an unfair advantage, before there is a deck to validate it.',
    body: 'We write the first institutional check more often than not, working alongside founders to pressure-test the thesis, build out the founding team, and get to a fundable Series A. Check sizes stay small enough that conviction, not consensus, drives the decision.',
    tags: ['First checks', 'Founding team build-out', 'Thesis development'],
  },
  {
    name: 'Series A',
    summary: 'Doubling down where early signal has turned into real, repeatable traction.',
    body: 'By Series A we usually know the team well, having already been in the room for a year. We lead or co-lead rounds where usage or revenue is compounding, and where the next eighteen months are about scaling what already works.',
    tags: ['Lead & co-lead', 'Go-to-market scaling', 'Board seats'],
  },
  {
    name: 'Growth Equity',
    summary: 'Later-stage capital for portfolio companies extending their lead into a category-defining position.',
    body: 'Reserved primarily for our own portfolio, growth checks fund the expansion moves — new markets, adjacent products, larger enterprise motions — once the core business has proven it can compound efficiently.',
    tags: ['Follow-on capital', 'International expansion', 'M&A support'],
  },
  {
    name: 'Fintech & Infrastructure',
    summary: 'The rails powering payments, lending, and financial access across emerging and frontier markets.',
    body: 'From credit infrastructure to embedded finance, we look for teams solving the plumbing problems that unlock a much larger addressable market once solved.',
    tags: ['Payments', 'Credit infrastructure', 'Embedded finance'],
  },
  {
    name: 'AI & Applied ML',
    summary: 'Applied intelligence layered into real workflows, not model research for its own sake.',
    body: 'We favor teams that treat the model as an implementation detail and the workflow it replaces or upgrades as the actual product — where defensibility comes from data and distribution, not the underlying architecture.',
    tags: ['Vertical AI', 'Workflow automation', 'Data moats'],
  },
  {
    name: 'Vertical SaaS',
    summary: 'Deep, opinionated software for industries the horizontal players have never bothered to serve well.',
    body: 'The best vertical software becomes the system of record for an entire industry. We look for founders with genuine domain expertise building the tool they once needed themselves.',
    tags: ['System of record', 'Domain expertise', 'Land and expand'],
  },
  {
    name: 'Consumer & Marketplaces',
    summary: 'Products and platforms built around genuine behavioral insight, not growth-hacked engagement.',
    body: 'We back consumer and marketplace businesses with a real supply-side or demand-side moat, and a founder who understands the underlying behavior well enough to build for it, not just around it.',
    tags: ['Two-sided marketplaces', 'Retention-first growth', 'Community'],
  },
  {
    name: 'Climate & Deep Tech',
    summary: 'Capital-efficient bets on the hard problems in energy, materials, and industrial systems.',
    body: 'Longer time horizons and bigger technical risk, underwritten with the same discipline we apply everywhere else — a credible path to unit economics, not just a compelling mission.',
    tags: ['Energy transition', 'Industrial software', 'Hardware-enabled'],
  },
  {
    name: 'Secondary & Opportunistic',
    summary: 'Selective secondary positions in companies we already know well, when the price is right.',
    body: 'Occasionally the best opportunity is a secondary stake in a company we have tracked for years but never had the allocation to lead. We move quickly when the terms and the company both make sense.',
    tags: [],
  },
]

export const STATS = [
  { value: 850, prefix: '$', suffix: 'M+', label: 'Assets under management' },
  { value: 15, prefix: '', suffix: '+', label: 'Year track record' },
  { value: 4, prefix: '', suffix: '', label: 'Offices worldwide' },
  { value: 180, prefix: '', suffix: '+', label: 'Portfolio companies' },
]


/////Contact

export const BENEFITS = [
  'Improve usability of your product',
  'Engage users at a higher level and outperform your competition',
  'Reduce the onboarding time and improve sales',
  'Balance user needs with your business goal',
]

export const LOCATIONS = [
  { label: 'USA', lines: ['280 W, 17th street', '4th floor, Flat no: 407', 'New York NY, 10018'] },
  { label: 'India', lines: ['Plot No 8-2-601/p/15ms', 'Banjara Hills, Road No 10', 'Hyderabad, 500034'] },
]


////Careers

export const DEPARTMENTS = ['Sales', 'Engineering', 'Design', 'Marketing', 'Support']

export const ROLES = [
  {
    id: 'field-sales',
    title: 'Field Sales',
    type: 'Full Time',
    department: 'Sales',
    location: 'New York / On-site',
    remote: false,
    about:
      "You'll own the full sales cycle for our New York territory — prospecting, running demos, and closing new accounts face to face. This is a floor role: you're in the field most days, not behind a desk.",
    bullets: [
      'Build and manage a pipeline of local business accounts',
      'Run in-person product walkthroughs and negotiate contracts',
      'Report weekly on pipeline health and close rates',
      'Work closely with onboarding to hand off new clients',
    ],
    salary: '$95,000',
    salaryNote: 'Lower base with uncapped commission — most reps land in the $180K–$220K range on-target.',
  },
  {
    id: 'frontend-dev',
    title: 'Front-end Development',
    type: 'Freelancer',
    department: 'Engineering',
    location: 'New York / Remote',
    remote: true,
    about:
      "A contract engagement to help ship a redesign of our investor-facing dashboard. You'll work directly with our design and platform teams to turn Figma files into fast, accessible interfaces.",
    bullets: [
      'Build components in React from finished design files',
      'Optimize load performance across the dashboard',
      'Pair with the design team on interaction details',
      'Ship in weekly increments alongside the core team',
    ],
    salary: '$110 / hr',
    salaryNote: '3-month contract, roughly 25–30 hours a week. Extension possible based on scope.',
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    type: 'Part-time',
    department: 'Design',
    location: 'New York / Remote',
    remote: true,
    about:
      "We're looking for a designer to help us keep our product feeling considered as it grows. You'll split time between new feature work and tending our design system.",
    bullets: [
      'Design flows for new features from sketch to hand-off',
      'Maintain and extend our shared component library',
      'Run lightweight usability checks with real users',
      'Partner with engineering on implementation details',
    ],
    salary: '$103,632',
    salaryNote: 'Pro-rated base for 20 hours a week, with full benefits eligibility.',
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    type: 'Full Time',
    department: 'Engineering',
    location: 'New York / Remote',
    remote: true,
    about:
      "You'll help build out the services behind our core platform — the systems that handle portfolio data, reporting pipelines, and everything our front-end relies on.",
    bullets: [
      'Design and maintain APIs used across the product',
      'Own reliability for a handful of core services',
      'Improve test coverage and deployment tooling',
      'Take part in on-call rotation with the rest of the team',
    ],
    salary: '$207,264',
    salaryNote: 'Standard company base, same for every full-time engineer regardless of location.',
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    type: 'Full Time',
    department: 'Marketing',
    location: 'New York / On-site',
    remote: false,
    about:
      "You'll shape how people first hear about Bris — planning campaigns, working with the founders on positioning, and keeping our story consistent everywhere it shows up.",
    bullets: [
      'Plan and run quarterly marketing campaigns',
      'Manage relationships with outside agencies and freelancers',
      'Track performance across channels and report on results',
      'Keep brand voice consistent across every touchpoint',
    ],
    salary: '$207,264',
    salaryNote: 'Standard company base, same as every other full-time role at Bris.',
  },
  {
    id: 'customer-success-lead',
    title: 'Customer Success Lead',
    type: 'Full Time',
    department: 'Support',
    location: 'New York / Remote',
    remote: true,
    about:
      "You'll be the first senior voice our partners talk to after they sign — helping them get set up, staying close to accounts at risk, and feeding what you hear back to the product team.",
    bullets: [
      'Own onboarding for new mid-market accounts',
      'Build playbooks for the rest of the support team',
      'Flag churn risk early and lead save conversations',
      'Share recurring customer feedback with product',
    ],
    salary: '$207,264',
    salaryNote: 'Standard company base, same for every full-time employee regardless of location.',
  },
]

export const PERKS = [
  {
    Icon: ClockIcon,
    title: 'Flexible Working Hours',
    text: 'Our families and lives outside of our jobs are very important to us; our schedules are flexible to reflect and support that.',
  },
  {
    Icon: GlobeIcon,
    title: 'Remote First',
    text: 'Most of our team are based outside of New York. We do ask that your workday overlaps with Eastern Time for at least four hours.',
  },
  {
    Icon: CoinsIcon,
    title: 'Compensation',
    text: 'Everyone at Bris makes $207,264 USD, regardless of location. (Some sales positions have a lower base salary and contain a commission component.)',
  },
  {
    Icon: HeartIcon,
    title: 'Premium Healthcare',
    text: 'We offer the best medical PPO, dental, and vision plans we can find and cover 100% of premiums for employees and dependents.',
  },
]


/////News

export const CARD1 = {
  category: 'Portfolio',
  title: 'Our Portfolio Co. Closes $40M Series B',
  body: "One of our portfolio companies just closed a $40M Series B led by a top-tier growth fund, with participation from three of our earliest co-investors. The round values the company at nearly 4x its Series A mark — a reflection of eighteen months of disciplined execution rather than a market re-rating.",
  bodyExtra: 'We backed the founders at pre-seed and have stayed close to the business through every stage since. This raise gives them the runway to double down on enterprise distribution and build out the team ahead of a planned international launch next year.',
}

export const CARD2 = {
  category: 'Insights',
  title: 'What We Look For in a Seed-Stage Founder',
  desc: "Conviction at the earliest stage rarely comes from a polished deck. It comes from how founders think under pressure, how fast they learn, and whether the market actually wants what they're building ...",
  body: "Conviction at the earliest stage rarely comes from a polished deck. It comes from how founders think under pressure, how fast they learn, and whether the market actually wants what they're building.",
  bodyExtra: "Over a hundred seed investments in, the pattern holds: the founders who win are relentlessly specific about the problem, brutally honest about what isn't working, and quick to change their mind when the evidence says to.",
}

export const SUB_ARTICLES = [
  {
    category: 'Market Insights',
    title: 'How We Think About Market Timing',
    body: 'Timing is the variable founders can least control and most obsess over. We look at adoption curves, not calendar years, when we underwrite a market.',
    bodyExtra: "The best entries we've backed rode a shift that was already underway, not one they were betting would arrive.",
  },
  {
    category: 'Founder Resources',
    title: "A Founder's Guide to Term Sheets",
    body: 'A term sheet is a negotiation, not a formality. Understanding which terms are standard and which are worth pushing back on can save a founder real ownership and control down the line.',
    bodyExtra: "We've put together the clauses we see founders misread most often, from liquidation preference stacking to pro-rata rights.",
  },
]

export const CARD3 = {
  category: 'Market',
  title: 'Why Late-Stage Valuations Are Resetting',
  body: 'Late-stage valuations are coming back down to earth as growth investors re-price risk against a higher cost of capital. Multiples that felt routine in 2021 now require real proof of durable, efficient growth.',
  bodyExtra: 'For founders, that means the metrics that matter have shifted from growth-at-any-cost to net revenue retention, payback period, and a credible path to profitability.',
}

export const VIDEO = {
  title: 'Inside the Round: A Conversation With Our Managing Partner',
  embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
}

export const TAGS = ['Fundraising', 'Portfolio', 'Market Insights', 'Exits', 'Talent', 'Regulation', 'Press', 'Podcast']

export const BLOG_POSTS = [
  {
    id: 1,
    category: 'Operations',
    date: '02 Jul 2025',
    readTime: '6 min read',
    title: 'The Playbook Behind Our Portfolio Reviews',
    excerpt: 'How we run quarterly check-ins that catch problems early, instead of after the board deck is already finalized.',
    image: heroImg2,
    author: 'Grace Adeyemi',
    role: 'Principal, Portfolio Ops',
    body: [
      "A quarterly review is only useful if it surfaces problems before they show up in the numbers. We built ours around a short, structured set of questions rather than a slide template, so founders spend their prep time thinking instead of formatting.",
      'The format stays consistent: what changed since last quarter, what nearly broke, and what the team needs from us specifically. That last part matters — a review that ends without a concrete ask from either side usually meant nothing got said.',
      "We keep the loop tight between reviews too. A monthly async note beats a perfect quarterly deck, because it means the review is a checkpoint, not the first time we're hearing about a problem.",
    ],
  },
  {
    id: 2,
    category: 'Security',
    date: '25 Jun 2025',
    readTime: '7 min read',
    title: 'Securing the Data Room During Diligence',
    excerpt: 'Most diligence leaks trace back to access controls, not a flaw in whatever tool is hosting the data room.',
    image: heroImg4,
    author: 'Daniel Okoro',
    role: 'Platform & Security Lead',
    body: [
      'A data room opened for diligence is, for a few weeks, the most sensitive collection of documents a company has ever assembled in one place. Most leaks trace back to who had access and for how long, not a flaw in the platform hosting it.',
      'Expiring, role-based access beats a single shared link every time. Give each counterparty their own credentials, scope what they can see to their stage of diligence, and revoke access the moment a round closes or falls through.',
      'Treat the access log as part of the deal record. Knowing exactly who viewed what, and when, has saved more than one founder an awkward conversation after a process leaked to a competitor.',
    ],
  },
  {
    id: 3,
    category: 'Strategy',
    date: '10 Jun 2025',
    readTime: '5 min read',
    title: 'Choosing the Right Cap Table Tool',
    excerpt: 'The right tool fits how your team already works, not the one with the flashiest feature list.',
    image: heroImg5,
    author: 'Amara Chukwu',
    role: 'Product Strategist',
    body: [
      'Every cap table tool promises to remove the spreadsheet headaches of fundraising. Before switching, get specific about the actual failure mode you are trying to fix, and what "fixed" looks like in practice.',
      'The migration cost rarely shows up on the pricing page. Factor in the time to reconcile historical grants, the learning curve for whoever runs payroll and equity, and the cost of switching again if the tool does not scale with headcount.',
      'The safest long-term bet is usually the option your finance and legal counsel already know how to use, rather than the newest platform with the best onboarding demo.',
    ],
  },
  {
    id: 4,
    category: 'Infrastructure',
    date: '25 Jun 2025',
    readTime: '6 min read',
    title: 'Building Infrastructure That Scales With You',
    excerpt: 'The right hosting choice depends less on price and more on how much control your stage actually needs.',
    image: heroImg6,
    author: 'Tobenna Eze',
    role: 'Infrastructure Advisor',
    body: [
      'Shared hosting, a single cloud VM, and a fully managed platform all solve the same basic problem in very different ways. The right choice depends less on price and more on how much control and scale your current stage actually needs.',
      'Look past the advertised uptime number and read the SLA itself. Understand what counts as downtime, how credits are calculated, and how quickly support actually responds when something breaks at 2am before a demo.',
      'Budget for the traffic you will have after a good launch, not the traffic you have today. A setup that is perfect for your current load can become your biggest bottleneck the moment something goes well.',
    ],
  },
  {
    id: 5,
    category: 'Culture',
    date: '25 Jun 2025',
    readTime: '8 min read',
    title: 'What a Founder-First Culture Actually Looks Like',
    excerpt: 'It shows up in how fast a fund answers a hard question, not in the language on its website.',
    image: heroImg1,
    author: 'Ifeoma Bello',
    role: 'Engineering Manager, Portfolio',
    body: [
      '"Founder-first" is one of the most overused phrases in venture, and one of the easiest to say without meaning. The real test is how a fund behaves when a founder brings bad news early, or asks a question they are afraid sounds naive.',
      'The clearest signal we look for in ourselves is response time on hard questions, not easy ones. Any partner can turn around a warm intro quickly. Fewer will give a straight, fast answer when a founder asks whether the next round is at risk.',
      'Culture compounds the same way a product does. Every unhurried, honest conversation with a founder in a hard quarter makes the next one easier, for us and for them.',
    ],
  },
  {
    id: 6,
    category: 'Operations',
    date: '10 Jun 2025',
    readTime: '7 min read',
    title: 'Getting Ops Ready Before Your Series A',
    excerpt: 'The operational gaps that felt fine at ten people become the first thing diligence finds at fifty.',
    image: heroImg3,
    author: 'Daniel Okoro',
    role: 'Platform & Security Lead',
    body: [
      'The operational shortcuts that felt harmless at ten people are usually the first thing a Series A diligence process finds at fifty. Contracts in someone\'s inbox, access nobody has audited in a year, a finance stack held together by one spreadsheet.',
      'Real-time visibility into spend, access, and infrastructure turns that slow drift into something you can actually see. Once a small gap is visible, it is cheap to fix. Once diligence finds it, it is a delay on your term sheet.',
      'You do not need to fix everything before you raise. Prioritize the gaps that carry real legal or security risk, and be ready to speak plainly about the rest — investors trust founders who already know where the bodies are buried.',
    ],
  },
]


//////// Insights 

export const FEATURED = {
  kicker: 'White Paper',
  date: 'August 2026',
  title: 'Investing with Conviction: Our 2026 Market Outlook',
  url: '#',
}

export const VIDEOS = [
  { title: 'Our Managing Partner on Bloomberg: Finding Value in Early-Stage Markets', meta: 'August 2026', img: heroImg1 },
  { title: 'Bris Annual LP Meeting — Highlights', meta: 'June 2026', img: heroImg2 },
  { title: 'Inside the Round: A Conversation With Our Managing Partner', meta: 'May 2026', img: heroImg3 },
  { title: 'On CNBC: The Case for Seed Investing in a Slower Market', meta: 'April 2026', img: heroImg4 },
  { title: 'Bris at Africa Tech Summit 2026', meta: 'March 2026', img: heroImg5 },
  { title: 'Portfolio Spotlight: Building Infrastructure That Scales', meta: 'February 2026', img: heroImg6 },
  { title: 'On the Venture Roundtable: Underwriting Conviction', meta: 'January 2026', img: heroImg7 },
  { title: '2025 Year in Review', meta: 'December 2025', img: heroImg1 },
]

export const CATEGORIES = ['All Categories', 'Media Coverage', 'Podcast', 'Press Release', 'Thought Leadership', 'White Paper']

export const NEWS_ITEMS = [
  {
    cat: 'White Paper',
    title: 'Investing with Conviction: Our 2026 Market Outlook',
    source: 'Bris',
    date: 'August 2026',
    excerpt: 'Where we see durable growth in a higher-cost-of-capital environment, and the underwriting discipline that matters most going into next year.',
  },
  {
    cat: 'Podcast',
    title: 'Bris on The Venture Lens: Finding Signal in Seed Rounds',
    source: 'The Venture Lens',
    date: 'August 2026',
    excerpt: 'A conversation on separating genuine early traction from a well-produced deck, and why conviction rarely comes from the numbers alone.',
  },
  {
    cat: 'Media Coverage',
    title: 'Bris closes $120M Fund III to back early-stage founders',
    source: 'TechCrunch',
    date: 'August 2026',
    excerpt: 'The new fund extends the firm’s thesis of writing concentrated, high-conviction first checks across fintech and infrastructure.',
  },
  {
    cat: 'Press Release',
    title: 'Bris announces two new partners joining the investment team',
    source: 'Bris',
    date: 'July 2026',
    excerpt: 'Two operators-turned-investors join the partnership, deepening the firm’s bench across enterprise software and payments.',
  },
  {
    cat: 'Thought Leadership',
    title: 'What We Look For in a Seed-Stage Founder',
    source: 'Bris',
    date: 'July 2026',
    excerpt: 'Conviction at the earliest stage rarely comes from a polished deck — it comes from how founders think under pressure.',
  },
  {
    cat: 'Media Coverage',
    title: 'The funds still writing first checks in a slower market',
    source: 'Fortune Term Sheet',
    date: 'July 2026',
    excerpt: 'A look at the early-stage investors, Bris among them, still underwriting new companies while later-stage capital stays cautious.',
  },
  {
    cat: 'Podcast',
    title: 'Underwriting Conviction: A Conversation With Our Managing Partner',
    source: 'Bris',
    date: 'June 2026',
    excerpt: 'On staged capital, downside discipline, and why the firm protects the downside so conviction can run on the upside.',
  },
  {
    cat: 'White Paper',
    title: 'Why Late-Stage Valuations Are Resetting',
    source: 'Bris',
    date: 'June 2026',
    excerpt: 'Growth investors are re-pricing risk against a higher cost of capital, and the metrics that matter have shifted accordingly.',
  },
  {
    cat: 'Press Release',
    title: 'Bris portfolio company closes $40M Series B',
    source: 'Bris',
    date: 'June 2026',
    excerpt: 'A company backed at pre-seed raises a growth round at nearly 4x its Series A mark, led by a top-tier growth fund.',
  },
  {
    cat: 'Thought Leadership',
    title: 'How We Think About Market Timing',
    source: 'Bris',
    date: 'May 2026',
    excerpt: 'Timing is the variable founders can least control and most obsess over — we look at adoption curves, not calendar years.',
  },
  {
    cat: 'Media Coverage',
    title: 'Bris named to the Emerging Manager 30 list',
    source: 'PitchBook',
    date: 'May 2026',
    excerpt: 'An annual ranking of the emerging fund managers delivering the strongest early returns for their limited partners.',
  },
  {
    cat: 'Podcast',
    title: "A Founder's Guide to Term Sheets",
    source: 'Bris',
    date: 'May 2026',
    excerpt: 'Which terms are standard, which are worth pushing back on, and the clauses founders misread most often.',
  },
  {
    cat: 'White Paper',
    title: 'Securing the Data Room During Diligence',
    source: 'Bris',
    date: 'April 2026',
    excerpt: 'Most diligence leaks trace back to access controls, not a flaw in whatever tool is hosting the data room.',
  },
  {
    cat: 'Press Release',
    title: 'Bris opens a new office in Lagos',
    source: 'Bris',
    date: 'April 2026',
    excerpt: 'The new office puts the investment team closer to founders building across West Africa’s fastest-growing sectors.',
  },
  {
    cat: 'Thought Leadership',
    title: 'Choosing the Right Cap Table Tool',
    source: 'Bris',
    date: 'March 2026',
    excerpt: 'The right tool fits how your team already works, not the one with the flashiest feature list.',
  },
  {
    cat: 'Media Coverage',
    title: 'Inside the fund betting early on African fintech',
    source: 'Bloomberg',
    date: 'March 2026',
    excerpt: 'A profile of the firm’s thesis-driven approach to underwriting payments and infrastructure founders at pre-seed.',
  },
  {
    cat: 'Podcast',
    title: 'Building Infrastructure That Scales With You',
    source: 'Bris',
    date: 'February 2026',
    excerpt: 'Why the right hosting and infrastructure choice depends less on price and more on what a company’s stage actually needs.',
  },
  {
    cat: 'White Paper',
    title: 'What a Founder-First Culture Actually Looks Like',
    source: 'Bris',
    date: 'February 2026',
    excerpt: 'It shows up in how fast a fund answers a hard question, not in the language on its website.',
  },
]


//////// AboutUs (Home timeline) 

export const NODES = [
  { key: 'n1', type: 'plant', left: '8.49%', top: '72.5%' },
  { key: 'n2', type: 'solid', left: '25.47%', top: '37.5%', year: 2020, label: 'Founded' },
  { key: 'n3', type: 'light', left: '49.06%', top: '77.5%', year: 2021, label: '15 startups invested', size: 'lg' },
  { key: 'n4', type: 'light', left: '71.7%', top: '40%', year: 2022, label: 'Raised $50M', size: 'md' },
  { key: 'n5', type: 'light', left: '91.51%', top: '72.5%', year: 2024, label: '300% Growth', size: 'sm' },
]


//////// OperatorsAccordion 

export const ITEMS = [
  { title: 'Guidance Grounded In Real-World Experience' },
  { title: 'A Partner Beyond Just Capital' },
  { title: 'Resilient and Relentless Facing Diverse Challenges' },
  { title: 'A Foundation Built on Lasting Trust' },
]

//////// PortfolioCarousel 

export const CARDS = [
  {
    id: 'steel-river',
    img: heroImg1,
    logo: SteelRiverLogo,
    logoText: 'STEEL',
    logoSub: 'RIVER',
    name: 'Steel River',
    desc: 'An industrial services platform executing a disciplined buy-and-build strategy in niche verticals. Its foundational acquisition, CraneTech, specializes in the inspection, repair, and manufacturing of industrial overhead cranes.',
  },
  {
    id: 'union-software',
    img: heroImg4,
    logo: UnionSoftwareLogo,
    logoText: 'Union',
    logoSub: 'SOFTWARE',
    name: 'Union Software Group',
    desc: 'A long-term hold company that acquires and grows high-quality vertical market businesses. Its cornerstone acquisition, BusPlanner, is the leading provider of transportation and logistics software.',
  },
  {
    id: 'vertex-materials',
    img: heroImg7,
    logo: VertexMaterialsLogo,
    logoText: 'Vertex',
    logoSub: 'MATERIALS',
    name: 'Vertex Materials',
    desc: 'A specialty distributor supplying engineered materials to manufacturers across the industrial Midwest. Built on decades-old supplier relationships and a reputation for reliability.',
  },
  {
    id: 'lattice-pay',
    img: heroImg2,
    logo: LatticePayLogo,
    logoText: 'Lattice',
    logoSub: 'PAY',
    name: 'Lattice Pay',
    desc: 'A payments infrastructure platform giving African fintechs a single API for card issuing, transfers, and settlement. We backed the founding team at pre-seed and led its Series A.',
  },
  {
    id: 'northgate-logistics',
    img: heroImg3,
    logo: NorthgateLogisticsLogo,
    logoText: 'Northgate',
    logoSub: 'LOGISTICS',
    name: 'Northgate Logistics',
    desc: 'A freight visibility and dispatch platform for mid-market carriers, replacing spreadsheets and phone calls with real-time tracking and automated load matching.',
  },
  {
    id: 'meridian-health',
    img: heroImg5,
    logo: MeridianHealthLogo,
    logoText: 'Meridian',
    logoSub: 'HEALTH',
    name: 'Meridian Health',
    desc: 'A remote patient monitoring platform helping health systems manage chronic care between visits, reducing readmissions through daily vitals tracking and clinician alerts.',
  },
  {
    id: 'harbor-analytics',
    img: heroImg6,
    logo: HarborAnalyticsLogo,
    logoText: 'Harbor',
    logoSub: 'ANALYTICS',
    name: 'Harbor Analytics',
    desc: 'A data infrastructure company helping mid-market enterprises consolidate fragmented systems into a single governed source of truth for reporting and forecasting.',
  },
]


//////// TimelineSection 

export const MILESTONES = [
  {
    year: 2014,
    title: 'The second round of investment secured, expanding the founding team.',
    tag: 'Investments: 2',
  },
  { year: 2015, title: 'First product launch in the Omani market, reaching 10,000 users.', tag: 'Product Launch' },
  {
    year: 2016,
    title: 'Series A funding closed. Partnership with regional distributors formed.',
    tag: 'Series A · $4.2M',
  },
  { year: 2017, title: 'Expanded operations to three new markets across the Gulf.', tag: 'Expansion · 3 markets' },
  {
    year: 2018,
    title: 'Reached 100,000 active users. Infrastructure scaled to match demand.',
    tag: 'Milestone · 100K users',
  },
  { year: 2019, title: 'Series B funding round. New engineering hub opened in Muscat.', tag: 'Series B · $18M' },
  {
    year: 2020,
    title: 'Pivoted to hybrid model during global disruption. Revenue grew 38%.',
    tag: 'Resilience · +38% revenue',
  },
]


//////// TrustedBy 

export const LOGOS = [
  { name: 'Logoipsum', icon: LogoTargetIcon },
  { name: 'Logoipsum', icon: LogoCompassIcon },
  { name: 'Logoipsum', icon: LogoBoltIcon },
  { name: 'Logoipsum', icon: LogoBadgeCheckIcon },
  { name: 'Logoipsum', icon: LogoLoopArrowIcon },
]
