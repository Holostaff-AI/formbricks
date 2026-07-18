// TODO(holostaff): wire identify() into your sign-in completion path, and clearIdentity() into
//   your sign-out path. Examples:
//
//     import { holostaff } from '@holostaff/sdk'
//     holostaff.identify(user.id)
//     holostaff.clearIdentity()
import { LoginPage, metadata } from "@/modules/auth/login/page";
import { HolostaffStageMark } from '../../../holostaff-stage-mark'

export { metadata };

// ── Holostaff instrumentation ──────────────────────────────────
// Added by the Holostaff deploy agent (Formbricks · deploy v1).
// Marks the visitor entering the "mutual commit" journey stage when
// this entry page mounts — powers stage-aware copilot monitoring.
// Safe to relocate; keep one call per entry page. https://docs.holostaff.ai
export default function HolostaffPage(props: any) {
  return (
    <>
      <HolostaffStageMark stage="mutual_commit" /> {/* entry page for "Sign Up & Account Creation" */}
      <LoginPage {...props} />
    </>
  )
}
