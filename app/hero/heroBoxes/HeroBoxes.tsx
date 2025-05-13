"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import carpenter from "../../assets/jobservices/carpinteria.png";
import locksmith from "../../assets/jobservices/lock.png";
import plumber from "../../assets/jobservices/plomeria.png";

import { useWindowSize } from "../hooks/useWindowSize";
import { useIsMobile } from "../hooks/isMobileSize";

export function HeroBoxes() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  const { width } = useWindowSize();
  const isMobile = useIsMobile();

  console.log(isMobile);

  let xPosition = 0;
  let yPosition = 0;

  useLayoutEffect(() => {
    if (isMobile) {
      xPosition = 0;
      yPosition = 0;
    } else if (!isMobile && width < 1400) {
      xPosition = 80;
      yPosition = 50;
    } else if (!isMobile && width > 1400) {
      xPosition = 100;
      yPosition = 200;
    }

    gsap.to(boxRef1.current, {
      duration: 2,
      x: 0,
      y: yPosition,
      rotation: 360,
      scale: 1,
      ease: "power2.out",
    });
    gsap.to(boxRef2.current, {
      duration: 2,
      x: xPosition,
      y: yPosition,
      rotation: 360,
      scale: 1,
      ease: "power2.out",
    });
    gsap.to(boxRef3.current, {
      duration: 2,
      x: xPosition * 2,
      y: yPosition,
      rotation: 360,
      scale: 1,
      ease: "power2.out",
    });
  }, [width]);

  return (
    <section className="flex flex-col justify-center items-center lg:justify-start gap-6 py-6">
      <div
        ref={boxRef1}
        className="box w-80 bg-white border-t-4 border-blue-300 shadow-lg rounded-xl p-4 hover:scale-[1.02] transition-transform duration-200"
      >
        <div className="flex align-center justify-center items-center gap-4">
          <Image
            src={carpenter.src}
            alt="servicio carpinteria"
            width={68}
            height={68}
            className="rounded-sm object-cover"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-lg mb-1">Carlo</h3>
            <blockquote className="text-gray-600 text-sm italic">
              &quot;Solicito un carpintero para arreglos caseros&quot;
            </blockquote>
          </div>
        </div>
      </div>
      <div
        ref={boxRef2}
        className="box w-80 bg-white border-t-4 border-blue-300 shadow-lg rounded-xl p-4 hover:scale-[1.02] transition-transform duration-200"
      >
        <div className="flex align-center justify-center items-center gap-4">
          <Image
            src={locksmith.src}
            alt="servicio carpinteria"
            width={68}
            height={68}
            className="rounded-sm object-cover"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-lg mb-1">
              Alejandra
            </h3>
            <blockquote className="text-gray-600 text-sm italic">
              &quot;Busco un cerrajero para cambio de guardas de mi casa. Mi
              gato se ha quedado encerrado&quot;
            </blockquote>
          </div>
        </div>
      </div>
      <div
        ref={boxRef3}
        className="box w-80 bg-white border-t-4 border-blue-300 shadow-lg rounded-xl p-4 hover:scale-[1.02] transition-transform duration-200"
      >
        <div className="flex align-center justify-center items-center gap-4">
          <Image
            src={plumber.src}
            alt="servicio carpinteria"
            width={68}
            height={68}
            className="rounded-sm object-cover"
          />
          <div>
            <h3 className="text-blue-700 font-semibold text-lg mb-1">
              Juan Pablo
            </h3>
            <blockquote className="text-gray-600 text-sm italic">
              &quot;Busco experto en plomería para arreglo de tuberías de agua
              en mi negocio.&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
