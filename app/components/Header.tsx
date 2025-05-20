import { Button } from "@radix-ui/themes";

import { Wrench, Menu } from "lucide-react";
import { Navbar } from "./Navbar";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

interface HeaderProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Wrench className="h-5 w-5 text-emerald-500" />
            <span>Yolehago</span>
          </div>
          <Navbar device="desktop" />
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-2">
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Descargar App
              </Button>
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="1"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
