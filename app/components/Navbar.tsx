import Link from "next/link";

interface NavbarProps {
  device: "mobile" | "desktop";
}

export function Navbar({ device }: NavbarProps) {
  return (
    <nav className={device === "mobile" ? "flex flex-col gap-6" : "hidden md:flex gap-6"}>
      <Link
        href="#features"
        className="text-sm font-medium hover:text-emerald-500 transition-colors"
      >
        Características
      </Link>
      <Link
        href="#categories"
        className="text-sm font-medium hover:text-emerald-500 transition-colors"
      >
        Categorías
      </Link>
      <Link
        href="#how-it-works"
        className="text-sm font-medium hover:text-emerald-500 transition-colors"
      >
        Cómo Funciona
      </Link>
      <Link
        href="#testimonials"
        className="text-sm font-medium hover:text-emerald-500 transition-colors"
      >
        Testimonios
      </Link>
    </nav>
  );
}
