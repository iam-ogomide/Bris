// Shared SVG icon components used across pages/components.

export const ArrowUpRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17L17 7M17 7H9M17 7V15" />
  </svg>
)

export const ArrowLeftIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

export const ArrowRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const ArrowNextIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const ArrowRightBoldIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const ChevronIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 6 15 12 9 18" />
  </svg>
)

export const ChevronDownIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const NavChevronDownIcon = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-3 w-3 shrink-0 transition-transform duration-200 ${className}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const ChevronUpIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export const TimelineChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

export const TimelineChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

export const CarouselChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
    <path d="M15 5 8 12l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const CarouselChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
    <path d="M9 5 16 12l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const PlusIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const PlusMinusIcon = ({ open }) => (
  <span className="relative block h-6 w-6 shrink-0">
    <span className="absolute top-1/2 left-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-brand-950" />
    <span
      className={`absolute top-1/2 left-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-brand-950 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        open ? 'rotate-90' : 'rotate-0'
      }`}
    />
  </span>
)

export const PlayIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
  </svg>
)

export const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className}>
    <line x1="6" y1="6" x2="18" y2="18" />
    <line x1="6" y1="18" x2="18" y2="6" />
  </svg>
)

export const XSocialIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.24 3H21l-6.5 7.43L22 21h-6.15l-4.82-6.3L5.6 21H3l7-8.02L2.5 3h6.3l4.36 5.77L18.24 3zm-1.08 16.17h1.53L7.9 4.74H6.26l10.9 14.43z" />
  </svg>
)

export const CalendarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="16" y1="3" x2="16" y2="7" />
  </svg>
)

export const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.9 2H22l-7.6 8.7L23.3 22H16.6l-5.2-6.8L5.4 22H2.3l8.1-9.3L1 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
  </svg>
)

export const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
  </svg>
)

export const LinkedInSocialIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
)

export const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 0 1-1.38-.9 3.73 3.73 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.24a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.89a4.29 4.29 0 1 1 0-8.58 4.29 4.29 0 0 1 0 8.58zm7.02-11.14a1.54 1.54 0 1 1-3.08 0 1.54 1.54 0 0 1 3.08 0z" />
  </svg>
)

export const YoutubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.5v-7l6.3 3.5-6.3 3.5z" />
  </svg>
)

export const LinkIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1" />
    <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1" />
  </svg>
)

export const CheckIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const MailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M3 6l9 7 9-7M3 6v12h18V6M3 6h18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PhoneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path
      d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.5 21 3 13.5 3 4.2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
)

export const CheckCircleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <polyline
      points="7.5,12.3 10.3,15 16.5,8.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 22s7-7.4 7-13a7 7 0 10-14 0c0 5.6 7 13 7 13z" fill="currentColor" />
    <circle cx="12" cy="9" r="2.4" fill="white" />
  </svg>
)

export const CheckmarkGlyph = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <polyline
      points="4,13 9,18 20,6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ClockIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const GlobeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <path d="M4 12h16" strokeLinecap="round" />
    <path d="M4 12a8 8 0 0 1 16 0" strokeLinecap="round" />
    <path d="M8 12v6" strokeLinecap="round" />
    <path d="M16 12v6" strokeLinecap="round" />
  </svg>
)

export const CoinsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <circle cx="8" cy="12" r="4" />
    <circle cx="16" cy="12" r="4" />
  </svg>
)

export const HeartIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
    <rect x="4" y="8" width="16" height="11" rx="2" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
    <path d="M12 12v4M10 14h4" strokeLinecap="round" />
  </svg>
)

export const PlantIcon = ({ className = 'h-[52%] w-[52%]' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21V11" stroke="#9fd6ab" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 12c0-3.5 2.5-6 6-6-0.5 3.5-2.8 6-6 6Z" fill="#7fc98d" />
    <path d="M12 15c0-3.2-2.3-5.6-5.5-5.8C6.8 12.6 9 15 12 15Z" fill="#5fae72" />
  </svg>
)

export const ChatBubbleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

export const BrandMarkIcon = ({ color = '#0a1f1e', className = 'h-full w-full' }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="2" width="9" height="9" rx="2" fill={color} />
    <rect x="13" y="2" width="9" height="9" rx="2" fill={color} fillOpacity="0.5" />
    <rect x="2" y="13" width="9" height="9" rx="2" fill={color} fillOpacity="0.5" />
    <rect x="13" y="13" width="9" height="9" rx="2" fill={color} />
  </svg>
)

/* ---- Core-values icons (Home / About) ---- */

export const ConvictionIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21s-7-4.4-9.5-9C.7 8.3 2.6 4 6.6 4c2 0 3.6 1.1 4.4 2.6C11.8 5.1 13.4 4 15.4 4c4 0 5.9 4.3 4.1 8-2.5 4.6-9.5 9-9.5 9Z" />
  </svg>
)

export const InsightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v18h18" />
    <path d="M7 15l4-4 3 3 5-6" />
  </svg>
)

export const AlignmentIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const LongtermIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
)

/* ---- Portfolio carousel brand marks ---- */

export const SteelRiverLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M12 8v8M8 10v4M16 10v4" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export const UnionSoftwareLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="#fff" strokeWidth="1.4" />
    <path d="M8 12h8M8 8h5M8 16h8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export const VertexMaterialsLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 17 12 3l8 14" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M8 17h8" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export const LatticePayLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="#fff" strokeWidth="1.4" />
    <path d="M3 10h18" stroke="#fff" strokeWidth="1.4" />
  </svg>
)

export const NorthgateLogisticsLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 7h11v9H3z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M14 10h4l3 3v3h-7z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="7" cy="18" r="1.6" stroke="#fff" strokeWidth="1.4" />
    <circle cx="17" cy="18" r="1.6" stroke="#fff" strokeWidth="1.4" />
  </svg>
)

export const MeridianHealthLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 12h4l2-5 4 10 2-5h6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const HarborAnalyticsLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 20V10M10 20V4M16 20v-7M20 20v-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

/* ---- TrustedBy marquee logo marks ---- */

export const LogoTargetIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export const LogoCompassIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const LogoBoltIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export const LogoBadgeCheckIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M8 20h8M9 10l3 3 3-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const LogoLoopArrowIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 12a8 8 0 1 1 3 6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 17v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
