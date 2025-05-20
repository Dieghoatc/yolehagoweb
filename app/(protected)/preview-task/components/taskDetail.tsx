"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TursoDB } from "@/app/service/tursoDB";

interface TaskDetailProps {
  userName: string;
  userId: string;
}

interface Task {
  title: string;
  description: string;
  price: string;
  category: string;
  location: string;
  date: string;
  timeSlot: string;
}

export function TaskDetail({ userName, userId }: TaskDetailProps) {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedTask = localStorage.getItem("task");
    if (storedTask) {
      try {
        setTask(JSON.parse(storedTask));
      } catch (error) {
        console.error("Error al parsear la tarea:", error);
      }
    }
  }, []);

  const handleSubmit = async () => {
    if (!task) return;

    const { title, description, price, category, location, date, timeSlot } = task;

    // Validación básica
    if (!title || !category || !date || !timeSlot || !location || !description || !price) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    setLoading(true);
    try {
      const tursoDB = TursoDB();

      await tursoDB.execute({
        sql: `
          INSERT INTO tasks (title, category, date, time_slot, location, description, price, status, user_id)
          VALUES (:title, :category, :date, :time_slot, :location, :description, :price, :status, :user_id)
        `,
        args: {
          title,
          category,
          date,
          time_slot: timeSlot,
          location,
          description,
          price,
          status: "pending",
          user_id: userId,
        },
      });

      localStorage.removeItem("task");
      router.push("/dashboard");

    } catch (error) {
      console.error("Error al guardar la tarea:", error);
      alert("Ocurrió un error al guardar la tarea.");
    } finally {
      setLoading(false);
    }
  };

  if (!task) {
    return <div>Task not found</div>;
  }

  const { title, description, price, category, location, date, timeSlot } = task;

  return (
    <div className="p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <span><strong>User:</strong> {userName}</span>
        <span><strong>ID:</strong> {userId}</span>
        <span><strong>Descripción:</strong> {description}</span>
        <span><strong>Precio:</strong> {price}</span>
        <span><strong>Categoría:</strong> {category}</span>
        <span><strong>Lugar:</strong> {location}</span>
        <span><strong>Fecha:</strong> {date}</span>
        <span><strong>Franja Horaria:</strong> {timeSlot}</span>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`mt-4 px-4 py-2 rounded-md text-white ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
      >
        {loading ? "Publicando..." : "Publicar tarea"}
      </button>
    </div>
  );
}