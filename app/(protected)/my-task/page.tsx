import { Navbar } from "@/app/(protected)/components/navbar";

export default function MisTareas() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Mis Tareas</h1>
        <p className="text-gray-600">Aqui se mostraran mis tareas</p>
      </div>
    </>
  );
}
