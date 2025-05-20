
import { Wrench } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-6 md:py-12 border-t">
      <div className="flex justify-center items-center px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Wrench className="h-5 w-5 text-emerald-500" />
              <span>Yolehago</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando personas con trabajadores calificados para todo tipo de
              tareas.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Carreras
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Prensa
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Ayuda & Soporte
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-emerald-500"
                >
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">admin@yolehago.com</li>
              <li className="text-muted-foreground">xxxxxx</li>
              <li className="text-muted-foreground">
                Bogotá D.C - Colombia
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Dieghoatc.com.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-emerald-500"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-emerald-500"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-emerald-500"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
