import { IntroPage, metadata } from "@/modules/setup/(fresh-instance)/intro/page";
import { HolostaffStageMark } from '../../../holostaff-stage-mark'

export { metadata };

// ── Holostaff instrumentation ──────────────────────────────────
// Added by the Holostaff deploy agent (Formbricks · deploy v1).
// Marks the visitor entering the "onboarding" journey stage when
// this entry page mounts — powers stage-aware copilot monitoring.
// Safe to relocate; keep one call per entry page. https://docs.holostaff.ai
export default function HolostaffPage(props: any) {
  return (
    <>
      <HolostaffStageMark stage="onboarding" /> {/* entry page for "First-Run Setup (Self-Hosted)" */}
      <IntroPage {...props} />
    </>
  )
}
