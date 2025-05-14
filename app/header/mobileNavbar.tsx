import { useState } from "react";
import { XIcon, AlignRightIcon } from 'lucide-react';

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Yolehago</h1>

      <button
        className="text-2xl text-gray-700 lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <XIcon /> : <AlignRightIcon />}
      </button>

      <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Servicios</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4 lg:hidden z-50">
          <a href="#" className="text-gray-700 font-medium">
            Inicio
          </a>
          <a href="#" className="text-gray-700 font-medium">
            Servicios
          </a>
          <a href="#" className="text-gray-700 font-medium">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
