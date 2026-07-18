import { SurveysPage, metadata } from "@/modules/survey/list/page";
import { HolostaffStageMark } from '../../../../holostaff-stage-mark'

export { metadata };

// ── Holostaff instrumentation ──────────────────────────────────
// Added by the Holostaff deploy agent (Formbricks · deploy v1).
// Marks the visitor entering the "adoption" journey stage when
// this entry page mounts — powers stage-aware copilot monitoring.
// Safe to relocate; keep one call per entry page. https://docs.holostaff.ai
export default function HolostaffPage(props: any) {
  return (
    <>
      <HolostaffStageMark stage="adoption" /> {/* entry page for "Create and Publish a Survey" */}
      <SurveysPage {...props} />
    </>
  )
}
