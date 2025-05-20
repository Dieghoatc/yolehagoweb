"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@radix-ui/themes";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, X, Home, ListTodo, ListCheck, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    {
      name: "Inicio",
      path: "/dashboard",
      icon: <Home className="h-4 w-4 mr-2" />,
    },
    {
      name: "Ver tareas",
      path: "/dashboard",
      icon: <ListTodo className="h-4 w-4 mr-2" />,
    },
    {
      name: "Mis tareas",
      path: "/my-task",
      icon: <ListCheck className="h-4 w-4 mr-2" />,
      highlighted: true,
    },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Yolehago</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.path
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  item.highlighted &&
                    (pathname === item.path
                      ? "bg-blue-100 text-blue-800"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100")
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <Link href="/profile" className="ml-4 flex items-center gap-2">
              <div>
                <SignedOut>
                  <SignInButton />
                  <SignUpButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
              <div>
                <Button variant="ghost" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Perfil de Usuario</span>
                </Button>
              </div>
            </Link>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "px-3 py-2 rounded-md text-base font-medium flex items-center",
                pathname === item.path
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                item.highlighted &&
                  (pathname === item.path
                    ? "bg-blue-100 text-blue-800"
                    : "bg-blue-50 text-blue-700 hover:bg-blue-100")
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          <Link
            href="/perfil"
            className="px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-4 w-4 mr-2" />
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
}
