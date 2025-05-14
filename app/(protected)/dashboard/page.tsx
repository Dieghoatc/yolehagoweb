import { Dashboard } from "./components/Dashboard";

export default function DashboardPage() {
  const exampleTasks = [
    {
      id: "1",
      title: "Reunión con equipo de desarrollo",
      description:
        "Discutir avances del sprint actual y planificar siguiente iteración",
      price: "80000",
      createdAt: new Date("2025-05-14"),
    },
    {
      id: "2",
      title: "Revisión de código",
      description: "Revisar cambios en el módulo de autenticación",
      price: "100000",
      createdAt: new Date("2025-05-13"),
    },
    {
      id: "3",
      title: "Actualizar documentación",
      description: "Actualizar documentación de la API y guías de uso",
      price: "120000",
      createdAt: new Date("2025-05-12"),
    },
  ];

  return <Dashboard tasks={exampleTasks} />;
}
