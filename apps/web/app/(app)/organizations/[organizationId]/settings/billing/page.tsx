import { PricingPage } from "@/modules/ee/billing/page";
import { HolostaffStageMark } from '../../../../../holostaff-stage-mark'

const Page = (props: Readonly<{ params: Promise<{ organizationId: string }> }>) => {
  return PricingPage(props);
};

// ── Holostaff instrumentation ──────────────────────────────────
// Added by the Holostaff deploy agent (Formbricks · deploy v1).
// Marks the visitor entering the "expansion" journey stage when
// this entry page mounts — powers stage-aware copilot monitoring.
// Safe to relocate; keep one call per entry page. https://docs.holostaff.ai
export default function HolostaffPage(props: any) {
  return (
    <>
      <HolostaffStageMark stage="expansion" /> {/* entry page for "Upgrade Billing Plan" */}
      <Page {...props} />
    </>
  )
}
