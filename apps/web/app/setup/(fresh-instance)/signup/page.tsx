// TODO(holostaff): wire identify() into your sign-in completion path, and clearIdentity() into
//   your sign-out path. Examples:
//
//     import { holostaff } from '@holostaff/sdk'
//     holostaff.identify(user.id)
//     holostaff.clearIdentity()
import { SignupPage, metadata } from "@/modules/setup/(fresh-instance)/signup/page";

export { metadata };
export default SignupPage;
