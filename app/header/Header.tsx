import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 h-16 max-w-[1024px] mx-auto border-1 rounded-b-xl border-gray-300">        
      <div>
        <span>Logo</span>
      </div>
      <div className="flex gap-4">
        <span>Categorias</span>
        <span>Servicios</span>
        <span>Oportunidades</span>

        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
