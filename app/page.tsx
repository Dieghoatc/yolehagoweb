"use client";

import Image from "next/image";
import { Button } from "@radix-ui/themes";
import { useState } from "react";
import {
  Wrench,
  SprayCanIcon as Spray,
  Scissors,
  Truck,
  Heart,
  ShoppingBag,
  Smartphone,
  Camera,
  Compass,
  ChevronRight,
  Star,
  Apple,
  Play,
} from "lucide-react";

import { Header } from "./components/Header";
import { HeaderMobile } from "./components/HeaderMobile";
import { Footer } from "./components/Footer";

import ImageMobile from "@/app/assets/image_hero.png";
import Link from "next/link";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header setMobileMenuOpen={setMobileMenuOpen} />
      {mobileMenuOpen && <HeaderMobile setMobileMenuOpen={setMobileMenuOpen} />}

      <main className="flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-emerald-50">
          <div className="flex justify-center items-center px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Encuentra trabajadores para tus tareas diarias
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Conectamos a personas que necesitan ayuda con profesionales
                    calificados para todo tipo de trabajos casuales.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 h-12 px-6" asChild>
                    <Link href="/create-task">
                      Publica tu tarea
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-12 px-6" asChild>
                    <Link href="/dashboard">
                      Gana dinero como trabajador
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="">
                  <Image
                    src={ImageMobile.src}
                    alt="Yolehago App Preview"
                    width={780}
                    height={1368}
                    className="object-cover rounded-xl shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Por qué elegir Yolehago?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra aplicación facilita la conexión entre personas que
                  necesitan ayuda y trabajadores calificados.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-emerald-100">
                  <Smartphone className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Fácil Comunicación</h3>
                <p className="text-center text-muted-foreground">
                  Chatea directamente con los trabajadores a través de nuestra
                  aplicación móvil.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-emerald-100">
                  <Star className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Trabajadores Verificados</h3>
                <p className="text-center text-muted-foreground">
                  Todos los trabajadores son evaluados y calificados por otros
                  usuarios.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-emerald-100">
                  <ShoppingBag className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold">Múltiples Categorías</h3>
                <p className="text-center text-muted-foreground">
                  Encuentra ayuda para cualquier tipo de trabajo casual que
                  necesites.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="categories"
          className="py-12 md:py-24 lg:py-32 bg-slate-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Categorías de Servicios
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encuentra trabajadores para todo tipo de tareas y servicios.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
              <CategoryCard
                icon={<Wrench className="h-8 w-8" />}
                title="Reparación y Mantenimiento"
              />
              <CategoryCard
                icon={<Spray className="h-8 w-8" />}
                title="Limpieza y Aseo"
              />
              <CategoryCard
                icon={<Scissors className="h-8 w-8" />}
                title="Jardinería y Exterior"
              />
              <CategoryCard
                icon={<Truck className="h-8 w-8" />}
                title="Mudanzas y Transporte"
              />
              <CategoryCard
                icon={<Heart className="h-8 w-8" />}
                title="Cuidado Personal y Familiar"
              />
              <CategoryCard
                icon={<ShoppingBag className="h-8 w-8" />}
                title="Compras y Recados"
              />
              <CategoryCard
                icon={<Smartphone className="h-8 w-8" />}
                title="Tecnología y Soporte"
              />
              <CategoryCard
                icon={<Camera className="h-8 w-8" />}
                title="Creatividad y Eventos"
              />
              <CategoryCard
                icon={<Compass className="h-8 w-8" />}
                title="Turismo y Otros"
              />
              <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="p-3 rounded-full bg-slate-100">
                  <ChevronRight className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="mt-4 text-base font-medium">Ver Todas</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Cómo Funciona?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sigue estos sencillos pasos para encontrar ayuda o ofrecer tus
                  servicios.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-emerald-500">
                  Para Usuarios
                </h3>
                <div className="space-y-6">
                  <StepItem
                    number="1"
                    title="Descarga la App"
                    description="Descarga Yolehago desde App Store o Google Play."
                  />
                  <StepItem
                    number="2"
                    title="Crea tu Perfil"
                    description="Regístrate y completa tu información personal."
                  />
                  <StepItem
                    number="3"
                    title="Publica tu Tarea"
                    description="Describe el trabajo que necesitas y establece un presupuesto."
                  />
                  <StepItem
                    number="4"
                    title="Selecciona un Trabajador"
                    description="Revisa perfiles, calificaciones y elige al mejor candidato."
                  />
                  <StepItem
                    number="5"
                    title="Comunícate y Paga"
                    description="Coordina detalles y realiza el pago cuando estés satisfecho."
                  />
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-emerald-500">
                  Para Trabajadores
                </h3>
                <div className="space-y-6">
                  <StepItem
                    number="1"
                    title="Descarga la App"
                    description="Descarga Yolehago desde App Store o Google Play."
                  />
                  <StepItem
                    number="2"
                    title="Crea tu Perfil Profesional"
                    description="Destaca tus habilidades y experiencia."
                  />
                  <StepItem
                    number="3"
                    title="Selecciona tus Categorías"
                    description="Elige las áreas en las que ofreces tus servicios."
                  />
                  <StepItem
                    number="4"
                    title="Aplica a Trabajos"
                    description="Busca trabajos disponibles y envía propuestas."
                  />
                  <StepItem
                    number="5"
                    title="Realiza el Trabajo y Cobra"
                    description="Completa el trabajo y recibe tu pago a través de la app."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="py-12 md:py-24 lg:py-32 bg-emerald-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lo que Dicen Nuestros Usuarios
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Miles de personas ya confían en Yolehago para sus trabajos
                  casuales.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <TestimonialCard
                name="María González"
                role="Usuario"
                content="Encontré un electricista en menos de una hora. La app es súper fácil de usar y los trabajadores son muy profesionales."
              />
              <TestimonialCard
                name="Carlos Rodríguez"
                role="Trabajador"
                content="Gracias a Yolehago puedo ofrecer mis servicios de jardinería y tener un ingreso extra. La comunicación con los clientes es muy fluida."
              />
              <TestimonialCard
                name="Laura Martínez"
                role="Usuario"
                content="He contratado servicios de limpieza y mudanza. La calidad de los trabajadores es excelente y los precios muy competitivos."
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-900 text-white">
          <div className="flex justify-center items-center px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 ">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Descarga Nuestra App
                  </h2>
                  <p className="max-w-[600px] text-emerald-100 md:text-xl">
                    Disponible para iOS y Android. Descarga ahora y comienza a
                    encontrar trabajadores o ofrecer tus servicios.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-emerald-900 hover:bg-emerald-100 h-12 px-6">
                    <Apple className="mr-2 h-5 w-5" />
                    App Store
                  </Button>
                  <Button className="bg-white text-emerald-900 hover:bg-emerald-100 h-12 px-6">
                    <Play className="mr-2 h-5 w-5" />
                    Google Play
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="">
                  <Image
                    src={ImageMobile.src}
                    alt="Yolehago App Preview"
                    width={350}
                    height={700}
                    className="object-cover rounded-xl shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function CategoryCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="p-3 rounded-full bg-emerald-100 text-emerald-500">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-medium text-center">{title}</h3>
    </div>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-500 font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  content,
}: {
  name: string;
  role: string;
  content: string;
}) {
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-emerald-500 text-emerald-500"
            />
          ))}
        </div>
      </div>
      <p className="flex-1 text-muted-foreground mb-4">&quot;{content}&quot;</p>
      <div className="flex items-center gap-4 mt-auto pt-4 border-t">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
