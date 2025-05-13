import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import carpenter from "../../assets/jobservices/carpinteria.png";
import locksmith from "../../assets/jobservices/lock.png";
import plumber from "../../assets/jobservices/plomeria.png";

const usersRequestList = [
  {
    id: 1,
    nombre: "Carlos",
    mensaje: "Solicito un carpintero para arreglos caseros",
    image: carpenter,
  },
  {
    id: 2,
    nombre: "Alejandra",
    mensaje:
      "Busco un cerrajero para cambio de guardas de mi casa. Mi gato se ha quedado encerrado",
    image: locksmith,
  },
  {
    id: 3,
    nombre: "Juan Pablo",
    mensaje:
      "Busco experto en plomería para arreglo de tuberías de agua en mi negocio.",
    image: plumber,
  },
];

export function HeroBoxes() {
  
  const boxRef1 = useRef(null)
  const boxRef2 = useRef(null)
  const boxRef3 = useRef(null)

  useLayoutEffect(() => {
    gsap.to(boxRef1.current, {
      duration: 3,
      x: 0,
      y: 200,
      rotation: 360,
      scale: 1,
      ease: "power2.out"
    });
    gsap.to(boxRef2.current, {
      duration: 3,
      x: 100,
      y: 200,
      rotation: 360,
      scale: 1,
      ease: "power2.out"
    });
    gsap.to(boxRef3.current, {
      duration: 3,
      x: 200,
      y: 200,
      rotation: 360,
      scale: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <section className="flex flex-col gap-6 items-center py-10 min-h-screen">
      <div ref={boxRef1} className="box w-80 bg-white border-t-4 border-blue-300 shadow-lg rounded-xl p-4 hover:scale-[1.02] transition-transform duration-200">
        <div className="flex align-center justify-center items-center gap-4">
          <Image
            src={carpenter.src}
            alt="servicio carpinteria"
            width={68} // Ancho de la imagen
            height={68} // Alto de la imagen
            className="rounded-sm object-cover"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-lg mb-1">Carlo</h3>
            <blockquote className="text-gray-600 text-sm italic">
              "Solicito un carpintero para arreglos caseros"
            </blockquote>
          </div>
        </div>
      </div>
      <div ref={boxRef2} className="box w-80 bg-white border-t-4 border-blue-300 shadow-lg rounded-xl p-4 hover:scale-[1.02] transition-transform duration-200">
        <div className="flex align-center justify-center items-center gap-4">
          <Image
            src={locksmith.src}
            alt="servicio carpinteria"
            width={68} // Ancho de la imagen
            height={68} // Alto de la imagen
            className="rounded-sm object-cover"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-lg mb-1">Alejandra</h3>
            <blockquote className="text-gray-600 text-sm italic">
              "Busco un cerrajero para cambio de guardas de mi casa. Mi gato se ha quedado encerrado"
            </blockquote>
          </div>
        </div>
      </div>
      <div ref={boxRef3} className="box w-80 bg-white border-t-4 border-blue-300 shadow-lg rounded-xl p-4 hover:scale-[1.02] transition-transform duration-200">
        <div className="flex align-center justify-center items-center gap-4">
          <Image
            src={plumber.src}
            alt="servicio carpinteria"
            width={68} // Ancho de la imagen
            height={68} // Alto de la imagen
            className="rounded-sm object-cover"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-lg mb-1">Juan Pablo</h3>
            <blockquote className="text-gray-600 text-sm italic">
              "Busco experto en plomería para arreglo de tuberías de agua en mi negocio."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
