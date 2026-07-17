// TODO(holostaff): wire identify() into your sign-in completion path, and clearIdentity() into
//   your sign-out path. Examples:
//
//     import { holostaff } from '@holostaff/sdk'
//     holostaff.identify(user.id)
//     holostaff.clearIdentity()
import { LoginPage, metadata } from "@/modules/auth/login/page";

export { metadata };
export default LoginPage;
