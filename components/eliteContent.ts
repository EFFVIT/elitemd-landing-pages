// Procedure-first copy configs for the Elite MD hair pages.
// Layer 2 (procedure-named) framing per Joe 2026-07-22: the PAGE sells the
// procedure the searcher wants; the CTA still books a consultation (you cannot
// sell surgery on a form). Compliance guardrails enforced across all copy:
//   - No guarantees / "permanent results", no "scarless / painless / no
//     incision / no downtime / unlimited grafts / cloning / hair multiplication"
//   - No "regenerative"; PRP is NOT named on-page (FM#3 account-level risk) —
//     non-surgical options stay generic and consult-gated
//   - No invented credentials — only the verified bio (Penn State, Chief
//     Resident). No "board-certified" claim.
//   - Service reality confirmed: Elite MD performs surgical FUE transplants.
// See §6 (7 failure modes) + effvit-hair-compliance-audit banned list.

export type EliteContent = {
  formHost: string
  heroFormId: string
  bottomFormId: string
  navCta: string
  hero: { formTitle: string; h1: string; sub1: string; sub2: string; trust1: string; trust2: string }
  stepsHeading: string
  stepsSub: string
  steps: string[] // exactly 3
  band: { line: string; h2: string; sub: string; ctaLabel: string; ctaSub: string }
  why: { heading: string; sub: string; pills: string[]; cta1: string; cta2: string } // 6 pills
  bio: { h2: string; sub: string; ctaLabel: string }
  financing: { h2: string; ctaLabel: string }
  confidence: { title: string; bullets: string[] }[] // 3 columns
  faq: { q: string; a: string }[]
}

const HOST = 'api.localbusinessrockstar.com'
const HERO_FORM = 'qDWzCCuQWp38DWAJaWp8'
const BOTTOM_FORM = 'ZWG5LdbKU2zDZLajYaXv'

// Shared bio (factual, verified) + confidence columns reused where identical.
const BIO_SUB = 'Physician-led surgical hair restoration in Danville.'

// ─── /c/hair-transplant — general transplant / candidacy ──────────────────────
export const hairTransplant: EliteContent = {
  formHost: HOST, heroFormId: HERO_FORM, bottomFormId: BOTTOM_FORM,
  navCta: 'Book Your Consultation',
  hero: {
    formTitle: 'Book Your Hair Transplant Consultation',
    h1: 'Restore a Fuller, Natural Hairline',
    sub1: 'Advanced FUE hair transplant surgery, physician-performed in Danville.',
    sub2: 'Book a consultation with Dr. Bansal to see if you are a candidate.',
    trust1: 'Physician-performed surgery.',
    trust2: 'Individualized to your goals.',
  },
  stepsHeading: 'Your Path to a Fuller Hairline',
  stepsSub: 'Three simple steps, starting with a consultation.',
  steps: ['Book your consultation', 'Review your options with Dr. Bansal', 'Move forward with your treatment plan'],
  band: {
    line: 'Straight answers about whether a hair transplant is right for you.',
    h2: 'See If You Are a Candidate',
    sub: 'A consultation is the first step toward restoring your hairline.',
    ctaLabel: 'Book Your Consultation',
    ctaSub: 'Fast. Private. No obligation.',
  },
  why: {
    heading: 'Why Patients Choose Elite MD',
    sub: 'Physician-performed hair restoration, start to finish.',
    pills: [
      'Physician-performed FUE hair transplant surgery',
      'Individualized graft planning for a natural hairline',
      'Advanced follicular unit extraction technique',
      'Care from consultation through recovery',
      'Flexible financing — as low as $188/mo',
      'Every procedure planned around your goals',
    ],
    cta1: 'Book Your Consultation',
    cta2: 'See If You Are a Candidate',
  },
  bio: { h2: 'Dr. Vivek Bansal — Hair Restoration at Elite MD', sub: BIO_SUB, ctaLabel: 'Book Your Consultation' },
  financing: { h2: 'Advanced Hair Restoration, Made Affordable', ctaLabel: 'BOOK YOUR HAIR TRANSPLANT CONSULTATION' },
  confidence: [
    { title: 'The Procedure', bullets: [
      'Physician-performed FUE hair transplant surgery',
      'Individualized hairline and graft planning',
      'Advanced follicular unit extraction technique',
      'Options reviewed for your specific goals',
    ]},
    { title: 'Safety Standards', bullets: [
      'Procedures performed by a licensed physician',
      'Clean, professional environment with medical-grade protocols',
      'Clear discussion of the procedure, recovery, and what to expect',
    ]},
    { title: 'Patient-First Philosophy', bullets: [
      'Honest candidacy assessments — a transplant is recommended only when it is right for you',
      'Treatment plans built around your goals',
      'Direct communication with your doctor at every step',
      'Care that continues through recovery',
    ]},
  ],
  faq: [
    { q: 'Am I a candidate for a hair transplant?', a: 'Candidacy depends on factors such as the pattern and stage of hair loss, donor hair availability, and your goals. A consultation with Dr. Bansal is the best way to find out.' },
    { q: 'What is FUE hair transplant surgery?', a: 'Follicular unit extraction (FUE) is a technique in which individual follicular units are harvested and placed to help restore a fuller, natural-looking hairline. Dr. Bansal reviews the approach in detail during your consultation.' },
    { q: 'What does recovery involve?', a: 'Recovery varies by individual and by the extent of the procedure. Dr. Bansal and the team review what to expect and provide guidance at every stage.' },
  ],
}

// ─── /c/fue — FUE technique-forward ───────────────────────────────────────────
export const fue: EliteContent = {
  ...hairTransplant,
  hero: {
    formTitle: 'Book Your FUE Consultation',
    h1: 'FUE Hair Transplant Surgery',
    sub1: 'Follicular unit extraction, physician-performed at Elite MD in Danville.',
    sub2: 'Book a consultation with Dr. Bansal to see if FUE is right for you.',
    trust1: 'Physician-performed FUE.',
    trust2: 'Individualized to your goals.',
  },
  stepsHeading: 'Your Path to FUE Hair Restoration',
  band: { ...hairTransplant.band, h2: 'See If FUE Is Right for You' },
  why: {
    ...hairTransplant.why,
    sub: 'Advanced follicular unit extraction, physician-performed.',
    pills: [
      'Advanced follicular unit extraction (FUE) technique',
      'Physician-performed hair transplant surgery',
      'Individualized graft planning for a natural hairline',
      'Care from consultation through recovery',
      'Flexible financing — as low as $188/mo',
      'Every procedure planned around your goals',
    ],
  },
  financing: { h2: 'Advanced Hair Restoration, Made Affordable', ctaLabel: 'BOOK YOUR FUE CONSULTATION' },
  faq: [
    { q: 'What is FUE?', a: 'Follicular unit extraction (FUE) is a hair transplant technique in which individual follicular units are harvested and placed to help restore a fuller, natural-looking hairline. Dr. Bansal reviews the approach during your consultation.' },
    { q: 'How many grafts will I need?', a: 'Graft counts are planned individually based on the area being treated, your donor hair, and your goals. Dr. Bansal reviews a personalized plan during your consultation.' },
    { q: 'What does FUE recovery involve?', a: 'Recovery varies by individual and by the extent of the procedure. Dr. Bansal and the team review what to expect and provide guidance at every stage.' },
  ],
}

// ─── /c/hair-restoration — broad (surgical + non-surgical, consult-gated) ─────
export const hairRestoration: EliteContent = {
  ...hairTransplant,
  hero: {
    formTitle: 'Book Your Hair Restoration Consultation',
    h1: 'Advanced Hair Restoration in Danville',
    sub1: 'Surgical and non-surgical hair restoration, physician-led at Elite MD.',
    sub2: 'Book a consultation with Dr. Bansal to find the right option for you.',
    trust1: 'Physician-led care.',
    trust2: 'Individualized to your goals.',
  },
  stepsHeading: 'Your Path to Hair Restoration',
  band: { ...hairTransplant.band, h2: 'Find the Right Option for You', sub: 'A consultation is the first step toward restoring your hairline.' },
  why: {
    ...hairTransplant.why,
    sub: 'Physician-led hair restoration, surgical and non-surgical.',
    pills: [
      'Physician-performed FUE hair transplant surgery',
      'Non-surgical options reviewed for your goals',
      'Individualized hairline and graft planning',
      'Care from consultation through recovery',
      'Flexible financing — as low as $188/mo',
      'A plan built around your goals',
    ],
  },
  financing: { h2: 'Advanced Hair Restoration, Made Affordable', ctaLabel: 'BOOK YOUR HAIR RESTORATION CONSULTATION' },
  confidence: [
    { title: 'Your Options', bullets: [
      'Physician-performed FUE hair transplant surgery',
      'Non-surgical, in-office options reviewed during your consultation',
      'Individualized hairline and graft planning',
      'Options matched to your specific goals',
    ]},
    hairTransplant.confidence[1],
    hairTransplant.confidence[2],
  ],
  faq: [
    { q: 'What hair restoration options does Elite MD offer?', a: 'Elite MD offers surgical hair restoration, including FUE hair transplant surgery, alongside non-surgical, in-office options. Dr. Bansal reviews what is appropriate for you during your consultation.' },
    { q: 'How do I know which option is right for me?', a: 'The right option depends on the pattern and stage of hair loss, your donor hair, and your goals. A consultation with Dr. Bansal is the best way to find out.' },
    { q: 'What does recovery involve?', a: 'Recovery varies by option and by individual. Dr. Bansal and the team review what to expect and provide guidance at every stage.' },
  ],
}

// ─── /c/evaluation — softer, research-intent entry ────────────────────────────
export const evaluation: EliteContent = {
  ...hairTransplant,
  hero: {
    formTitle: 'Book Your Hair Consultation',
    h1: 'Get a Clear Plan for Hair Restoration',
    sub1: 'Start with a physician-led hair restoration consultation at Elite MD.',
    sub2: 'Meet Dr. Bansal, understand your options, and decide what is right for you.',
    trust1: 'Physician-led consultation.',
    trust2: 'No pressure, just answers.',
  },
  stepsHeading: 'Your Next Steps Are Simple',
  stepsSub: 'It starts with a consultation.',
  steps: ['Book your consultation', 'Meet Dr. Bansal and review your options', 'Decide on the plan that is right for you'],
  band: { ...hairTransplant.band, line: 'No pressure. Straight answers about your options.', h2: 'Start With a Consultation', sub: 'A consultation is the first step toward restoring your hairline.' },
  why: {
    ...hairTransplant.why,
    heading: 'Why Patients Choose Elite MD',
    sub: 'Physician-led hair restoration, from evaluation to treatment.',
    pills: [
      'Physician-led hair restoration consultation',
      'Surgical FUE hair transplant options',
      'Individualized options matched to your goals',
      'Care from consultation through recovery',
      'Flexible financing — as low as $188/mo',
      'A plan built around your goals',
    ],
  },
  financing: { h2: 'Advanced Hair Restoration, Made Affordable', ctaLabel: 'BOOK YOUR CONSULTATION' },
  faq: [
    { q: 'What happens at a hair restoration consultation?', a: 'Dr. Bansal reviews the pattern and stage of hair loss, your donor hair, and your goals, then walks through the options that may be appropriate for you.' },
    { q: 'Am I a candidate for a hair transplant?', a: 'Candidacy depends on several factors, including the pattern and stage of hair loss and donor hair availability. A consultation is the best way to find out.' },
    { q: 'Is there any obligation?', a: 'No. A consultation is an opportunity to get clear answers and understand your options. You decide what, if anything, to move forward with.' },
  ],
}
