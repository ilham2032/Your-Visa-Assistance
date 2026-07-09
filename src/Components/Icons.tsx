import React from 'react'

type IconProps = { size?: number; className?: string }

const defaults = { size: 22, className: '' }

export const IconVisa: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
)

export const IconTravel: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M2 16l20-6-8 8-2-6-6-2 8-8-6 2-2 6-8 8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
  </svg>
)

export const IconSupport: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
)

export const IconGlobe: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" stroke="currentColor" strokeWidth="1.75"/>
  </svg>
)

export const IconDocument: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
)

export const IconFast: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
  </svg>
)

export const IconChat: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
  </svg>
)

export const IconLocation: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75"/>
  </svg>
)

export const IconEmail: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
  </svg>
)

export const IconClock: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
  </svg>
)

export const IconTarget: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.75"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
)

export const IconShield: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 10-4.5-.26-8-4.75-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconCheck: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75"/>
    <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const IconPhone: React.FC<IconProps> = ({ size = defaults.size, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
  </svg>
)
