import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { MobileNavbar } from "./mobileNavbar";

export function Header() {
  return (
    <header>        
      <MobileNavbar />
    </header>
  );
}
