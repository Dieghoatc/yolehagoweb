import { Button } from "@radix-ui/themes";
import { Wrench, X } from "lucide-react";
import { Navbar } from "./Navbar";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

interface HeaderMobileProps {
  setMobileMenuOpen: (open: boolean) => void;
}

export function HeaderMobile({ setMobileMenuOpen }: HeaderMobileProps) {
  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Wrench className="h-5 w-5 text-emerald-500" />
            <span>Yolehago</span>
          </div>
          <Button
            variant="ghost"
            size="1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar menú</span>
          </Button>
        </div>
        <Navbar device="mobile" />
        <div className="flex flex-col gap-4 mt-4 pt-4 border-t">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
            Descargar App
          </Button>
        </div>
      </div>
    </div>
  );
}
