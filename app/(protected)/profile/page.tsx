import { Navbar } from "@/app/(protected)/components/navbar";


export default function Perfil() {
    return (
      <>
      <Navbar />
      <div className="pt-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Mi Perfil</h1>
        <p className="text-gray-600">Informacion del perfil.</p>
      </div>
      </>
    );
  };;
  