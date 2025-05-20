
import { XIcon } from "lucide-react";
import Link from "next/link";

export function HeaderTask() {
  return (
    <header>
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center w-full md:w-[1024px] mx-auto">
        <h1 className="text-xl font-bold text-emerald-600">Yolehago</h1>
        <button className="text-2xl text-gray-700" aria-label="Toggle Menu">
          <Link href="/">
            <XIcon />
          </Link>
        </button>
      </nav>
    </header>
  );
}
