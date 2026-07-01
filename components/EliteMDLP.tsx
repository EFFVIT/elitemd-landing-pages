'use client'
import { Suspense, useState } from 'react'
import GhlForm from './GhlForm'
import GclidCapture from './GclidCapture'

const DARK      = '#111111'
const DARK_CARD = '#1c1c1c'
const GOLD      = '#B8954B'
const WHITE     = '#ffffff'
const PANEL     = '#faf5ee'
const GRAY      = '#f5f5f5'

const LOGO_URL     = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Layer-1-1024x215.png'
const BIO_PHOTO    = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Rectangle-24.png'
const HERO_PHOTO   = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Rectangle-24-1-1.png'
const REVIEWS_LOGO = 'https://start.elitemdspa.com/wp-content/uploads/2026/03/Group-8-2.png'
const PHONE_DISPLAY = '(925) 886-3926'
const PHONE_HREF    = 'tel:+19258863926'
const ADDRESS       = '4185 Blackhawk Plaza Circle, Danville, CA 94506'

// ─── Inline SVG Icons ────────────────────────────────────────────────────────

function IconCalendar() {
  return (
    <svg width="90" height="102" viewBox="0 0 106 119" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="12" width="102" height="105" rx="8" stroke={GOLD} strokeWidth="4" fill="none"/>
      <rect x="2" y="12" width="102" height="28" rx="4" fill={GOLD} fillOpacity="0.15"/>
      <line x1="30" y1="2" x2="30" y2="26" stroke={GOLD} strokeWidth="5" strokeLinecap="round"/>
      <line x1="76" y1="2" x2="76" y2="26" stroke={GOLD} strokeWidth="5" strokeLinecap="round"/>
      <line x1="2" y1="40" x2="104" y2="40" stroke={GOLD} strokeWidth="3"/>
      <rect x="16" y="54" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="44" y="54" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="72" y="54" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="16" y="78" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="44" y="78" width="18" height="14" rx="3" fill={GOLD}/>
      <rect x="72" y="78" width="18" height="14" rx="3" fill={GOLD} fillOpacity="0.4"/>
    </svg>
  )
}

function IconPerson() {
  return (
    <svg width="90" height="95" viewBox="0 0 133 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="66.5" cy="36" r="30" stroke={GOLD} strokeWidth="4" fill="none"/>
      <circle cx="66.5" cy="36" r="18" fill={GOLD} fillOpacity="0.2"/>
      <path d="M6 139c0-33.137 27.013-60 60.5-60s60.5 26.863 60.5 60" stroke={GOLD} strokeWidth="4" strokeLinecap="round" fill="none"/>
      <circle cx="66.5" cy="36" r="10" fill={GOLD}/>
    </svg>
  )
}

function IconPersonStar() {
  return (
    <svg width="90" height="95" viewBox="0 0 133 139" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="54" cy="38" r="28" stroke={GOLD} strokeWidth="4" fill="none"/>
      <circle cx="54" cy="38" r="14" fill={GOLD} fillOpacity="0.2"/>
      <path d="M4 139c0-31.48 22.536-57.5 50-57.5s50 26.02 50 57.5" stroke={GOLD} strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M98 60l4 12h13l-10.5 7.5 4 12L98 84l-10.5 7.5 4-12L81 72h13z" fill={GOLD}/>
    </svg>
  )
}

function IconCheckBadge() {
  return (
    <svg width="36" height="36" viewBox="0 0 85.554 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.777 0L52.2 9.423H65.6v13.4l9.423 9.423-9.423 9.423V55.2H52.2L42.777 64.623 33.354 55.2H19.954V41.8L10.531 32.377l9.423-9.423V9.554h13.4z" fill={GOLD}/>
      <path d="M28 33l9 9 18-18" stroke={WHITE} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconCapabilities() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="106" viewBox="0 0 157 138" fill="none">
      <g clipPath="url(#cap-clip)">
        <path d="M103.703 11.6079H80.2005C81.5097 13.8846 82.0419 16.514 81.7918 19.0739H103.703C109.616 19.0739 114.465 23.9425 114.465 29.88V38.5538C115.668 38.4095 116.908 38.34 118.18 38.34C119.452 38.34 120.66 38.4095 121.895 38.5538V29.88C121.895 19.8221 113.72 11.6079 103.698 11.6079H103.703ZM44.2329 104.128V89.9123H36.7978V104.128C36.7978 114.186 44.9727 122.4 54.9891 122.4H71.2006C71.5199 119.84 72.0841 117.355 72.8664 114.934H54.9891C49.0761 114.934 44.2276 110.098 44.2276 104.128H44.2329Z" fill="#B8954B"/>
        <path d="M134.758 95.4972L134.077 95.23L133.444 95.5934C123.992 101.039 112.368 101.039 102.916 95.5934L102.282 95.23L101.596 95.4972C88.0826 100.761 79.3489 113.534 79.3489 128.017V133.233C79.3489 135.868 81.4778 138.006 84.1016 138.006H152.247C154.871 138.006 157 135.868 157 133.233V128.017C157 113.534 148.272 100.761 134.758 95.4972Z" fill="#B8954B"/>
        <path d="M118.174 46.8589C106.066 46.8589 96.215 56.7511 96.215 68.904C96.215 81.0569 106.066 90.9492 118.174 90.9492C130.282 90.9492 140.134 81.0623 140.134 68.904C140.134 56.7458 130.282 46.8589 118.174 46.8589Z" fill="#B8954B"/>
        <path d="M77.6138 32.4024L70.2266 31.3228C69.3005 29.0782 69.0504 28.4743 68.1243 26.2244L72.5897 20.2174C73.7819 18.6141 73.6222 16.3749 72.2118 14.9586L66.1498 8.8715C64.7447 7.45527 62.5147 7.29494 60.9181 8.49206L54.9359 12.9759C52.6952 12.0407 52.0992 11.7948 49.8585 10.8649L48.7834 3.44706C48.496 1.46433 46.8089 0 44.8184 0H36.2443C34.2538 0 32.5613 1.46433 32.2792 3.44706L31.2041 10.8649C28.9635 11.7948 28.3674 12.0407 26.1267 12.9759L20.1446 8.49206C18.5479 7.29494 16.3232 7.45527 14.9128 8.8715L8.85084 14.9586C7.44045 16.3749 7.28078 18.6088 8.47296 20.2121L12.9383 26.219C12.0122 28.469 11.7621 29.0729 10.836 31.3175L3.44879 32.397C1.47957 32.6803 0.0159607 34.3797 0.0159607 36.3785V44.9881C0.0159607 46.9922 1.47957 48.6864 3.44879 48.975L10.836 50.0492C11.7621 52.2991 12.0122 52.903 12.9383 55.153L8.47296 61.1599C7.28611 62.7632 7.44577 65.0025 8.85084 66.4187L14.9128 72.5058C16.3232 73.9221 18.5479 74.0824 20.1446 72.8906L26.1267 68.4068C28.3674 69.3367 28.9635 69.5879 31.2041 70.5178L32.2792 77.9356C32.5666 79.913 34.2538 81.3827 36.2443 81.3827H44.8184C46.8089 81.3827 48.5013 79.913 48.7834 77.9356L49.8585 70.5178C52.0992 69.5879 52.6952 69.3367 54.9359 68.4068L60.9181 72.8906C62.5147 74.0877 64.7447 73.9221 66.1498 72.5058L72.2118 66.4187C73.6222 65.0078 73.7819 62.7632 72.5897 61.1599L68.1137 55.1369C69.0398 52.8977 69.2846 52.2938 70.2106 50.0545L77.6192 48.975C79.5884 48.6864 81.052 46.9922 81.052 44.9881V36.3785C81.052 34.3797 79.5884 32.6803 77.6192 32.397L77.6138 32.4024ZM56.9849 35.3791L39.0171 53.4214C38.1869 54.2551 37.0958 54.672 36.0048 54.672C34.9137 54.672 33.8227 54.2551 32.9924 53.4214L24.0617 44.4591C22.3959 42.7863 22.3959 40.0768 24.0617 38.4093C25.7276 36.7366 28.4206 36.7419 30.0865 38.4093L36.0048 44.3468L50.9602 29.3294C52.626 27.6566 55.3191 27.6566 56.9849 29.3294C58.6508 30.9968 58.6508 33.7064 56.9849 35.3791Z" fill="black"/>
      </g>
      <defs><clipPath id="cap-clip"><rect width="157" height="138" fill="white"/></clipPath></defs>
    </svg>
  )
}

function IconSafety() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="92" viewBox="0 0 160 122" fill="none">
      <g clipPath="url(#saf-clip)">
        <path d="M156.089 36.9647L147.626 35.7428C146.572 33.1668 146.323 32.4921 145.226 29.9209L150.361 23.0847C151.707 21.2258 151.538 18.697 149.9 17.0929L142.995 10.1293C141.353 8.52523 138.83 8.35539 137.018 9.70942L130.156 14.8142C127.591 13.7574 126.913 13.4649 124.348 12.4081L123.129 3.92529C122.79 1.68901 120.898 0 118.625 0H108.816C106.543 0 104.608 1.68901 104.269 3.92529L103.05 12.4081C100.481 13.4649 99.8076 13.7574 97.2425 14.8142L90.4227 9.70942C88.573 8.36011 86.0456 8.52995 84.4454 10.1293L77.4985 17.0929C76.8254 17.7676 76.4018 18.5696 76.2371 19.4566V19.4991C77.3337 20.1737 78.3409 21.0182 79.2258 21.9901C82.1297 25.2407 83.5182 29.5434 83.0569 34.1859C82.3839 40.8522 81.3296 45.1125 80.3224 49.2501C79.9835 50.5994 79.6494 51.9487 79.3105 53.383H96.273C95.3881 51.2316 94.9269 48.9104 94.9269 46.4194C94.9269 36.04 103.347 27.5997 113.701 27.5997C124.056 27.5997 132.476 36.04 132.476 46.4194C132.476 56.7987 124.056 65.239 113.701 65.239C113.071 65.239 112.398 65.1966 111.762 65.1541C112.016 66.2534 112.144 67.4328 112.144 68.6123C112.144 71.8205 111.174 74.8164 109.451 77.2602C110.713 79.9164 111.221 82.9123 110.84 85.8704C110.501 88.319 109.574 90.5977 108.228 92.4943C108.27 92.5792 108.312 92.7066 108.355 92.7915C108.524 92.834 108.651 92.834 108.816 92.834H118.625C120.898 92.834 122.79 91.1874 123.129 88.9087L124.348 80.4684C126.913 79.4116 127.591 79.1191 130.156 78.0623L137.018 83.167C138.83 84.5163 141.353 84.3465 142.995 82.7471L149.9 75.7835C151.542 74.1794 151.712 71.6082 150.361 69.7918L145.226 62.9131C146.28 60.3796 146.572 59.6625 147.626 57.1337L156.089 55.8693C158.362 55.5721 160.005 53.633 160.005 51.3543V41.5222C160.005 39.2434 158.362 37.3044 156.089 36.9647Z" fill="black"/>
        <path d="M95.7694 76.2319H96.9695C101.154 76.2319 104.58 72.802 104.58 68.6031C104.58 64.4041 101.158 60.9742 96.9695 60.9742H72.8484C71.4128 60.9742 70.4339 59.8136 70.6551 58.3888C72.2742 47.901 74.4298 44.3106 75.5029 33.4217C76.5336 22.9339 61.6655 21.1316 59.5146 30.8127C55.4952 48.8964 40.566 61.0592 35.6288 64.6542C34.6263 65.3855 34.0332 66.5461 34.0332 67.7869V111.14C34.0332 112.692 34.9651 114.093 36.3912 114.706C41.6814 116.966 47.7435 121.991 65.5579 121.991H93.3643C97.5485 121.991 100.975 118.561 100.975 114.362C100.975 110.163 97.5485 106.733 93.3643 106.733H94.2821C98.1462 106.733 101.601 103.973 102.109 100.128C102.721 95.4856 99.0875 91.4801 94.5692 91.4801H95.4823C99.3464 91.4801 102.806 88.7154 103.309 84.8751C103.921 80.228 100.288 76.2225 95.7694 76.2225V76.2319Z" fill="#B8954B"/>
        <path d="M22.568 65.6919H3.8641C1.73202 65.6919 0 67.4281 0 69.5653V109.837C0 111.979 1.73202 113.711 3.8641 113.711H22.5633C24.7001 113.711 26.4274 111.974 26.4274 109.837V69.5653C26.4274 67.4281 24.6954 65.6919 22.5633 65.6919H22.568ZM13.2161 106.044C10.5992 106.044 8.47654 103.912 8.47654 101.288C8.47654 98.6652 10.5992 96.5375 13.2161 96.5375C15.8329 96.5375 17.9556 98.6652 17.9556 101.288C17.9556 103.912 15.8329 106.044 13.2161 106.044Z" fill="#B8954B"/>
      </g>
      <defs><clipPath id="saf-clip"><rect width="160" height="122" fill="white"/></clipPath></defs>
    </svg>
  )
}

function IconPhilosophy() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="103" viewBox="0 0 136 127" fill="none">
      <g clipPath="url(#phi-clip)">
        <path d="M25.6301 33.6526C34.8807 33.6526 42.3723 26.1162 42.3723 16.8263C42.3723 7.53636 34.8807 0 25.6301 0C16.3796 0 8.89777 7.53144 8.89777 16.8263C8.89777 26.1211 16.3894 33.6526 25.6301 33.6526Z" fill="#B8954B"/>
        <path d="M35.1306 74.541L36.6691 61.5518C37.4971 54.8331 40.873 48.9814 45.758 44.9866C42.4899 40.8342 37.4237 38.2285 31.8625 38.2285H19.3978C10.4265 38.2285 2.84182 44.9866 1.7541 54.0007L0.0294135 68.5365C-0.195971 70.4231 1.00935 72.2013 2.84672 72.6101C10.0541 74.1617 17.678 74.9547 25.6351 74.9547C28.8639 74.9547 32.0585 74.8365 35.1355 74.541H35.1306Z" fill="#B8954B"/>
        <path d="M110.375 33.6526C119.62 33.6526 127.112 26.1162 127.112 16.8263C127.112 7.53636 119.62 0 110.375 0C101.129 0 93.6424 7.53144 93.6424 16.8263C93.6424 26.1211 101.134 33.6526 110.375 33.6526Z" fill="#B8954B"/>
        <path d="M134.246 54.0056C133.197 44.9866 125.578 38.2334 116.602 38.2334H104.138C98.5813 38.2334 93.515 40.8342 90.2812 44.9915C95.1613 48.9912 98.5421 54.838 99.3309 61.5567L100.869 74.5458C103.946 74.8414 107.141 74.9596 110.37 74.9596C118.327 74.9596 125.951 74.1666 133.158 72.615C135 72.2012 136.201 70.4279 135.976 68.5414L134.246 54.0105V54.0056Z" fill="#B8954B"/>
        <path d="M93.6081 77.0286L91.8638 62.4731C90.8055 53.4886 83.211 46.7305 74.2152 46.7305H61.7848C52.789 46.7305 45.2239 53.4886 44.1362 62.4731L42.3919 77.0286C42.1665 78.9152 43.3816 80.7032 45.2288 81.0973C52.4068 82.6341 60.0552 83.4567 68.0024 83.4567C75.9497 83.4567 83.5981 82.6341 90.7712 81.0973C92.6184 80.7032 93.8335 78.9152 93.6081 77.0286Z" fill="#B8954B"/>
        <path d="M68.0024 42.1394C77.2481 42.1394 84.7446 34.6031 84.7446 25.3082C84.7446 16.0134 77.2481 8.48193 68.0024 8.48193C58.7568 8.48193 51.2701 16.0134 51.2701 25.3082C51.2701 34.6031 58.7617 42.1394 68.0024 42.1394Z" fill="#B8954B"/>
        <path d="M83.8038 102.214L74.5337 101.455L70.952 92.8253C69.8594 90.195 66.1503 90.195 65.0626 92.8253L61.481 101.455L52.2108 102.214C49.3837 102.445 48.2372 105.992 50.3881 107.849L57.4436 113.942L55.2976 123.04C54.641 125.813 57.6445 128.005 60.065 126.522L68.0073 121.656L75.9546 126.522C78.375 128.005 81.3736 125.813 80.722 123.04L78.5759 113.942L85.6314 107.849C87.7824 105.992 86.6359 102.445 83.8087 102.214H83.8038Z" fill="black"/>
        <path d="M126.176 93.7118L116.906 92.9532L113.324 84.3233C112.232 81.693 108.523 81.693 107.435 84.3233L103.853 92.9532L94.5831 93.7118C91.756 93.9433 90.6095 97.4898 92.7604 99.3468L99.816 105.44L97.6699 114.538C97.0133 117.311 100.017 119.503 102.437 118.02L110.38 113.154L118.327 118.02C120.747 119.503 123.746 117.311 123.094 114.538L120.948 105.44L128.009 99.3468C130.16 97.4898 129.013 93.9433 126.186 93.7167L126.176 93.7118Z" fill="black"/>
        <path d="M41.4365 93.7118L32.1663 92.9532L28.5847 84.3233C27.492 81.693 23.783 81.693 22.6953 84.3233L19.1136 92.9532L9.84343 93.7118C7.01633 93.9433 5.8698 97.4898 8.02076 99.3419L15.0763 105.435L12.9302 114.533C12.2737 117.306 15.2772 119.498 17.6976 118.015L25.64 113.149L33.5872 118.015C36.0076 119.498 39.0062 117.306 38.3546 114.533L36.2085 105.435L43.2689 99.3419C45.4199 97.4849 44.2734 93.9384 41.4463 93.7118H41.4365Z" fill="black"/>
      </g>
      <defs><clipPath id="phi-clip"><rect width="136" height="127" fill="white"/></clipPath></defs>
    </svg>
  )
}

function StarFilled() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={GOLD} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2.9 8.9H23l-7.4 5.4 2.9 8.9L12 20l-6.5 5.2 2.9-8.9L1 11l8.1-.1z"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 12.08a19.79 19.79 0 01-3.07-8.67A2 2 0 012.41 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.17a16 16 0 006 6l1.04-.04a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z"/>
    </svg>
  )
}

function AddressIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={WHITE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

// ─── CTA Button ──────────────────────────────────────────────────────────────

function GoldBtn({ label, href = '#form', style }: { label: string; href?: string; style?: React.CSSProperties }) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-block',
        background: GOLD,
        color: WHITE,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '14px 28px',
        borderRadius: 4,
        textDecoration: 'none',
        ...style,
      }}
    >
      {label}
    </a>
  )
}

// ─── Five Stars ───────────────────────────────────────────────────────────────

function FiveStars() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3,4,5].map(i => <StarFilled key={i} />)}
    </div>
  )
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #e0e0e0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 16, color: DARK, lineHeight: 1.4 }}>{q}</span>
        <span style={{ flexShrink: 0, color: GOLD }}><ChevronIcon open={open} /></span>
      </button>
      {open && (
        <div style={{ paddingBottom: 20, fontSize: 15, lineHeight: 1.8, color: '#555', fontFamily: "'Poppins', sans-serif" }}>
          {a}
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EliteMDLP({ heroFormId, bottomFormId }: { heroFormId: string; bottomFormId: string }) {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: DARK, background: WHITE }}>
      <Suspense fallback={null}>
        <GclidCapture />
      </Suspense>

      {/* ── 1. HEADER ──────────────────────────────────────────────────────── */}
      <header
        className="emd-nav"
        style={{
          background: DARK,
          padding: '0 48px',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img
          src={LOGO_URL}
          alt="Elite MD Plastic Surgery"
          className="emd-nav-logo"
          style={{ height: 46, width: 'auto' }}
        />
        <div className="emd-nav-btns" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <GoldBtn
            label="Request Your Consultation"
            href="#form"
            style={{ fontSize: 13, padding: '11px 20px', color: DARK, letterSpacing: '0.04em' }}
          />
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.2)' }} />
          <a
            href={PHONE_HREF}
            style={{
              color: WHITE,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
              fontFamily: "'Roboto', sans-serif",
              whiteSpace: 'nowrap',
              letterSpacing: '0.02em',
            }}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* ── 2. HERO ────────────────────────────────────────────────────────── */}
      <section
        className="emd-hero"
        style={{ position: 'relative', overflow: 'hidden', minHeight: 780, background: DARK }}
      >
        {/* Layer 1: room background photo */}
        <img
          src="/hero-bg-room.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />

        {/* Layer 2: Dr. Bansal portrait — left ~55% */}
        <img
          src="/hero-dr-bansal.png"
          alt="Dr. Vivek Bansal"
          className="emd-hero-doctor"
          style={{
            position: 'absolute', left: 0, top: 0, zIndex: 1,
            width: '55%', height: '100%',
            objectFit: 'cover', objectPosition: 'top center',
          }}
        />

        {/* Layer 3: dark gradient on top of both images — fades bottom ~35%-89% */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.85) 89%)',
        }} />

        {/* Layer 4: content */}
        <div
          className="emd-hero-content"
          style={{
            position: 'relative', zIndex: 3,
            maxWidth: 1600, margin: '0 auto', padding: '0 48px',
            minHeight: 780, display: 'flex', flexDirection: 'column',
          }}
        >
          {/* Form card — upper right */}
          <div id="form" className="emd-hero-form" style={{ alignSelf: 'flex-end', marginTop: 60, marginRight: 16, width: 520 }}>
            <div style={{ background: WHITE, borderRadius: 10, boxShadow: '0 8px 32px rgba(0,0,0,0.22)', overflow: 'hidden' }}>
              <p style={{
                textAlign: 'center',
                padding: '28px 24px 8px',
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontSize: 22,
                color: DARK,
                margin: 0,
                lineHeight: 1.35,
              }}>
                Request Your Hair Consultation
              </p>
              <div style={{ padding: '0 16px 16px' }}>
                <GhlForm formId={heroFormId} height={443} formName="Banner Form - Hair Loss" />
              </div>
            </div>
          </div>

          {/* Bottom row — headline left, stars right */}
          <div
            className="emd-hero-bottom"
            style={{ display: 'flex', alignItems: 'flex-end', marginTop: 'auto', paddingBottom: 48, gap: 32 }}
          >
            <div className="emd-hero-left" style={{ flex: '0 0 53%' }}>
              <h1
                className="emd-hero-h1"
                style={{
                  fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                  fontWeight: 400,
                  fontSize: 40,
                  color: WHITE,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  margin: '0 0 20px',
                }}
              >
                A Clear Medical Path for Hair Thinning &amp; Hair Loss
              </h1>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 20, color: WHITE, margin: '0 0 8px' }}>
                General information reviewed during educational visits
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
                Request educational information to better understand hair loss topics.
              </p>
            </div>

            <div className="emd-hero-right" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 16, paddingLeft: 16 }}>
              <img src={REVIEWS_LOGO} alt="Google Reviews" style={{ height: 38, width: 'auto', flexShrink: 0 }} />
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 16, color: WHITE, margin: 0, lineHeight: 1.4 }}>
                Patient-focused care.<br />No pressure educational discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STEPS SECTION ───────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 400,
                fontSize: 40,
                color: DARK,
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Your Next Steps Are Simple
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 22, color: DARK, margin: 0 }}>
              It&apos;s simpler than you think, and it starts with learning more.
            </p>
          </div>

          {/* Gold step cards — 295×314px per Figma */}
          <div className="emd-steps-grid" style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {[
              { img: '/steps-icon-1.svg', w: 106, h: 119, title: 'Schedule a Physician-led educational visit' },
              { img: '/steps-icon-2.svg', w: 124, h: 125, title: 'Understand Your Hair Loss Pattern' },
              { img: '/steps-icon-3.svg', w: 133, h: 139, title: 'Review Non-Surgical Care Options' },
            ].map((step, i) => (
              <div
                key={i}
                className="emd-step-card"
                style={{
                  background: GOLD,
                  border: '7px solid #a38544',
                  borderRadius: 31,
                  width: 295,
                  height: 314,
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '36px 24px 32px',
                  boxSizing: 'border-box',
                }}
              >
                <img
                  src={step.img}
                  alt=""
                  width={step.w}
                  height={step.h}
                  style={{ display: 'block', maxWidth: '100%', objectFit: 'contain' }}
                />
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: 21,
                  color: WHITE,
                  textAlign: 'center',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  {step.title}
                </p>
              </div>
            ))}
          </div>

          {/* Below cards — plain white, no gray card */}
          <div className="emd-nosales" style={{ textAlign: 'center', marginTop: 52 }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 18, color: DARK, marginBottom: 40 }}>
              No pressure. No sales pitch. Just answers.
            </p>
            <h2
              className="emd-h2-lg"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 400,
                fontSize: 40,
                color: DARK,
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Straight Answers. No Obligation.
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 22, color: DARK, marginBottom: 36 }}>
              Educational discussion designed to help you make informed decisions.
            </p>
            <a
              href="#form"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: DARK,
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 400,
                fontSize: 18,
                textTransform: 'uppercase',
                padding: '15px 22px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              Learn About Hair Loss
            </a>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 16, color: DARK, marginTop: 16 }}>
              Fast. Private. No obligation.
            </p>
          </div>

        </div>
      </section>

      {/* ── 4. WHY PATIENTS CHOOSE OUR TEAM ───────────────────────────────── */}
      <section style={{ background: DARK, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Heading */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 400,
                fontSize: 40,
                color: WHITE,
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Why Patients Choose Our Team
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 22, color: WHITE, margin: 0 }}>
              Real care. Real support. Real patient-first focus.
            </p>
          </div>

          {/* Gold pill rows — two columns, 3 rows each */}
          <div
            className="emd-why-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 40px', marginBottom: 52 }}
          >
            {[
              'Information explaining how hair loss patterns may vary',
              'Educational discussions informed by medical knowledge',
              'Conservative, Non-Surgical Focus',
              'Support at Every Stage',
              'Clear explanations & general educational discussion',
              'Educational discussions informed by clinical experience',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: GOLD,
                  borderRadius: 69,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0,
                  overflow: 'hidden',
                  minHeight: 76,
                }}
              >
                <div style={{ flexShrink: 0, padding: '0 12px 0 16px', display: 'flex', alignItems: 'center' }}>
                  <img src="/why-check.svg" alt="" width={54} height={53} style={{ display: 'block' }} />
                </div>
                <span style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: DARK,
                  lineHeight: 1.3,
                  paddingRight: 20,
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs — gold fill + border-only outline */}
          <div className="emd-btn-row" style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            <a
              href="#form"
              style={{
                display: 'inline-block',
                background: GOLD,
                color: DARK,
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 400,
                fontSize: 18,
                textTransform: 'uppercase',
                padding: '15px 22px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              Request Educational Information
            </a>
            <a
              href="#form"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: WHITE,
                border: '2px solid rgba(232,241,250,0.8)',
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 400,
                fontSize: 18,
                textTransform: 'uppercase',
                padding: '13px 22px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              Learn About Hair Loss
            </a>
          </div>

        </div>
      </section>

      {/* ── 5. DOCTOR BIO ──────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '80px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            className="emd-bio-grid"
            style={{ display: 'grid', gridTemplateColumns: '45fr 55fr', gap: 64, alignItems: 'start' }}
          >
            {/* Photo — portrait proportions, 5px radius per Figma */}
            <div>
              <img
                src={BIO_PHOTO}
                alt="Dr. Vivek Bansal"
                style={{
                  width: '100%',
                  aspectRatio: '625 / 752',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: 5,
                  display: 'block',
                }}
              />
            </div>

            {/* Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h2
                className="emd-h2-xl"
                style={{
                  fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                  fontWeight: 400,
                  fontSize: 40,
                  color: DARK,
                  textTransform: 'uppercase',
                  lineHeight: 1.13,
                  margin: 0,
                }}
              >
                Dr. Vivek Bansal: Specialist in Hair Loss Evaluation &amp; Treatment Planning
              </h2>

              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: 22,
                color: DARK,
                lineHeight: 1.35,
                margin: 0,
              }}>
                Verified patient experiences from real consultations and care.
              </p>

              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, lineHeight: 1.65, color: DARK, margin: 0 }}>
                Dr. Vivek Bansal completed his medical training at the prestigious Penn State College of Medicine, where he was the second physician accepted into the highly selective five-year integrated training program at Penn State Milton S. Hershey Medical Center. During his training, he served as Chief Resident and developed extensive clinical experience caring for patients with a wide range of medical and aesthetic concerns.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, lineHeight: 1.65, color: DARK, margin: 0 }}>
                Today, Dr. Bansal works with individuals experiencing hair loss and alopecia, helping them better understand the causes of hair thinning and explore medically guided options for supporting scalp health and hair growth. His approach focuses on education, individualized evaluation, and responsible treatment planning so patients can make informed decisions about addressing their hair loss concerns.
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, lineHeight: 1.65, color: DARK, margin: 0 }}>
                Dr. Bansal is also involved in physician education and advanced clinical training, contributing to the ongoing development of best practices in patient care.
              </p>

              <div style={{ marginTop: 8 }}>
                <a
                  href="#form"
                  style={{
                    display: 'inline-block',
                    background: GOLD,
                    color: DARK,
                    fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                    fontWeight: 400,
                    fontSize: 18,
                    textTransform: 'uppercase',
                    padding: '15px 22px',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                  }}
                >
                  Request Your Evaluation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. REVIEWS ─────────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, padding: '72px 48px 80px' }} className="emd-pad">
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 400,
                fontSize: 40,
                color: DARK,
                textTransform: 'uppercase',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              Real Patients. Real Experiences.
            </h2>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 22, color: DARK, margin: 0, lineHeight: 1.4 }}>
              Verified patient experiences shared after their visit.
            </p>
          </div>

          <div className="emd-reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}>
            {[
              {
                text: 'The staff and experience have been outstanding during my hair restoration. I\'m currently 6 months in and pleased with the progress so far. The process was comfortable, and I was happy with how everything healed.',
                name: 'C.S.',
              },
              {
                text: 'In September of 2023 I came in for a hair consultation due to severe hair loss. Dr. Bansal was kind and helped me feel hopeful about my options. I decided to move forward with treatment the following month, and it was a very positive decision for me. If you\'re looking for support with hair loss, I recommend scheduling a consultation.',
                name: 'F.',
              },
              {
                text: 'I had a wonderful experience with Dr. Bansal and his team. Everyone was extremely professional. One year after treatment, I\'m very satisfied with the outcome. After many years of dealing with hair loss, I\'m happy with the improvement I\'ve seen. Thank you for the excellent care.',
                name: 'N.',
              },
            ].map((review, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  paddingTop: 28,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Gold quote mark — hangs above card */}
                <img
                  src="/review-quote.svg"
                  alt=""
                  width={67}
                  height={48}
                  style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'block' }}
                />
                {/* Card */}
                <div
                  style={{
                    flex: 1,
                    background: '#edeeee',
                    borderRadius: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '44px 24px 20px',
                    gap: 16,
                  }}
                >
                  {/* 5 stars */}
                  <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
                    {[0,1,2,3,4].map(s => (
                      <img key={s} src="/review-star.svg" alt="" width={27} height={25} style={{ display: 'block' }} />
                    ))}
                  </div>
                  {/* Review text */}
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: 16, color: DARK, lineHeight: 1.65, textAlign: 'center', margin: 0, flex: 1 }}>
                    &quot;{review.text}&quot;
                  </p>
                  {/* White name box — floating rounded rect with border */}
                  <div
                    style={{
                      width: '100%',
                      background: WHITE,
                      borderRadius: 10,
                      border: '1px solid #c8c8c8',
                      padding: '16px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500, fontSize: 22, color: GOLD, textAlign: 'center' }}>
                      {review.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FINANCING ───────────────────────────────────────────────────── */}
      <section style={{ background: DARK }} className="emd-fin-outer">
        <div
          className="emd-fin-section financing-grid"
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          {/* Left */}
          <div
            className="emd-fin-left"
            style={{ padding: '72px 56px', display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center' }}
          >
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 32,
                color: WHITE,
                lineHeight: 1.3,
              }}
            >
              Getting Help for Hair Loss Can Be More Affordable Than You Think
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, margin: 0 }}>
              Flexible monthly plans built for real patients.
            </p>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, marginBottom: 4 }}>As low as</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 18, textDecoration: 'line-through', marginBottom: 4 }}>$7,000</p>
              <p
                className="emd-price-big"
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 900,
                  fontSize: 72,
                  color: GOLD,
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                $188/mo
              </p>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: 8, padding: '16px 20px', background: 'rgba(255,255,255,0.04)' }}>
              <p style={{ color: WHITE, fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Fast, simple payment plans</p>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, lineHeight: 1.6, margin: 0 }}>
                The above payment was calculated at 21.90% APR over 60 months. This purchase would have a total cost of $11,453. A down payment in the amount of monthly payment amount is due at the time of purchase. Payment amount rounded up to nearest whole number. 0% APR and other promotional rates subject to eligibility. Payment options through Cherry Technologies, Inc. are issued by the following lending partners: withcherry.com/lending-partners. See withcherry.com/terms for details.
              </p>
            </div>
            <div>
              <GoldBtn label="REQUEST YOUR HAIR RESTORATION CONSULTATION" href="#form" style={{ fontSize: 12 }} />
            </div>
          </div>

          {/* Right - Doctor photo */}
          <div
            className="emd-fin-photo"
            style={{ overflow: 'hidden' }}
          >
            <img
              src={HERO_PHOTO}
              alt="Dr. Vivek Bansal"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── 8. WHAT GIVES PATIENTS CONFIDENCE ─────────────────────────────── */}
      <section style={{ background: WHITE, padding: '72px 48px' }} className="emd-pad">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 36,
                color: DARK,
                marginBottom: 12,
              }}
            >
              What Gives Patients Confidence
            </h2>
            <p style={{ fontSize: 16, color: '#555', margin: 0 }}>
              Real capabilities. Real safety. Real patient-first care.
            </p>
          </div>

          <div className="emd-confidence-grid three-col">
            {[
              {
                icon: <IconCapabilities />,
                title: 'Capabilities',
                bullets: [
                  'Comprehensive information regarding hair loss patterns',
                  'Educational discussions based on individual questions',
                  'Topics that may include non-surgical educational considerations',
                  'Educational discussion of factors that influence hair loss',
                ],
              },
              {
                icon: <IconSafety />,
                title: 'Safety Standards',
                bullets: [
                  'Evidence-based approaches reviewed by licensed medical providers',
                  'Clean, professional clinical environment with medical-grade protocols',
                  'Clear explanations of commonly discussed topics and considerations',
                ],
              },
              {
                icon: <IconPhilosophy />,
                title: 'Patient-First Philosophy',
                bullets: [
                  'Honest assessments - we provide recommendations only when appropriate',
                  'Personalized plans developed around your unique needs and goals',
                  'Direct communication with your doctor at every step of your care journey',
                  'Focus on long-term hair health',
                ],
              },
            ].map((col, i) => (
              <div
                key={i}
                style={{
                  background: GRAY,
                  borderRadius: 12,
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {col.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                    fontWeight: 700,
                    fontSize: 20,
                    color: DARK,
                    textAlign: 'center',
                  }}
                >
                  {col.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.bullets.map((b, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <img src="/icon-bullet.png" alt="" style={{ width: 20, height: 20, flexShrink: 0, marginTop: 2, objectFit: 'contain' }} />
                      <span style={{ fontSize: 14, lineHeight: 1.65, color: '#444' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ─────────────────────────────────────────────────────────── */}
      <section style={{ background: GRAY, padding: '72px 48px' }} className="emd-faq-outer">
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2
              className="emd-h2-xl"
              style={{
                fontFamily: 'copperplate, "Copperplate Gothic Light", "Copperplate Gothic", serif',
                fontWeight: 700,
                fontSize: 36,
                color: DARK,
              }}
            >
              Common Questions
            </h2>
          </div>

          <div style={{ background: WHITE, borderRadius: 12, padding: '8px 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <FaqItem
              q="What topics are commonly discussed when learning about hair loss?"
              a="Educational discussions often include general information about hair growth cycles, common causes of hair thinning, and factors that may influence hair loss. These conversations are intended to help individuals better understand the topic and ask informed questions."
            />
            <FaqItem
              q="How long does it take to review educational information about hair loss?"
              a="Reviewing educational materials can vary depending on the individual and the topics being explored. Many people take time to read through information at their own pace and revisit sections as needed."
            />
            <FaqItem
              q="Will the information be tailored to my questions?"
              a="Educational information is designed to address common questions and concerns related to hair loss. While the content is informational in nature, individuals are encouraged to focus on the topics most relevant to their interests and understanding."
            />
          </div>
        </div>
      </section>

      {/* ── 10. MAP + BOTTOM FORM ──────────────────────────────────────────── */}
      <section id="form" style={{ background: DARK, padding: '72px 48px 0' }} className="emd-map-outer">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="emd-map-form map-form-grid">
            {/* Map */}
            <div
              className="emd-map-col"
              style={{ minHeight: 400, borderRadius: 12, overflow: 'hidden', background: '#333', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: 16, left: 16, zIndex: 2, background: WHITE, padding: '6px 14px', borderRadius: 4, fontSize: 11, fontFamily: "'Roboto', sans-serif", fontWeight: 700, letterSpacing: '0.07em', color: DARK, textTransform: 'uppercase' }}>
                Visit Our Practice
              </div>
              <img
                src="/footer-map.png"
                alt={ADDRESS}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.style.display = 'flex'
                    parent.style.alignItems = 'center'
                    parent.style.justifyContent = 'center'
                    parent.innerHTML = `<p style="color:#aaa;font-size:14px;text-align:center;padding:24px">${ADDRESS}</p>`
                  }
                }}
              />
            </div>

            {/* Form */}
            <div className="emd-form-col" style={{ paddingBottom: 40, display: 'flex', flexDirection: 'column' }}>
              <GhlForm formId={bottomFormId} height={443} formName="Footer Form - Hair Loss" />
              <p style={{ textAlign: 'center', color: WHITE, fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 14, margin: '20px 0 0', letterSpacing: '0.01em' }}>
                Your information is private and never shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FOOTER BAR ─────────────────────────────────────────────────── */}
      <footer style={{ background: DARK, padding: '40px 48px' }}>
        <div
          className="emd-contact-row"
          style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}
        >
          <a
            href={PHONE_HREF}
            style={{ display: 'flex', alignItems: 'center', gap: 12, color: WHITE, textDecoration: 'none', fontWeight: 600, fontSize: 16, fontFamily: "'Roboto', sans-serif" }}
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <span style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: WHITE, fontFamily: "'Roboto', sans-serif" }}>
            <AddressIcon />
            <span>
              <span style={{ display: 'block', fontWeight: 700, fontSize: 15 }}>Danville, CA 94506</span>
              <span style={{ display: 'block', fontSize: 14, opacity: 0.8 }}>4185 Blackhawk Plaza Circle</span>
            </span>
          </span>
        </div>
      </footer>

      {/* ── 12. COPYRIGHT ──────────────────────────────────────────────────── */}
      <div
        className="emd-footer-bar"
        style={{ background: '#0a0a0a', padding: '16px 48px 24px', textAlign: 'center' }}
      >
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', margin: 0, fontFamily: "'Roboto', sans-serif", letterSpacing: '0.04em' }}>
          &copy; 2026 Elite MD Plastic Surgery Danville
          {' '}&bull;{' '}
          <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 500 }}>PRIVACY POLICY</a>
          {' '}&bull;{' '}
          <a href="/hipaa-policy" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: 500 }}>HIPAA POLICY</a>
        </p>
      </div>
    </div>
  )
}
