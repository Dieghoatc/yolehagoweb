import { useEffect, useState } from "react";
import { TursoDB } from "@/app/service/tursoDB";
import { InterfaceTasks } from "@/app/interfaces/task.interface";


export function useGetTask() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<InterfaceTasks[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTasks() {
      const tursoDB = TursoDB();

      try {
        const result = await tursoDB.execute("SELECT * FROM tasks");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedTasks: InterfaceTasks[] = result.rows.map((row: any) => ({
          task_id: row.task_id,
          title: row.title,
          category: row.category,
          date: row.date,
          timeSlot: row.time_slot,
          location: row.location,
          description: row.description,
          price: row.price,
          status: row.status,
          userId: row.user_id,
        }));

        setData(formattedTasks);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
        setError("Error al obtener las tareas");
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return {
    loading,
    data,
    error,
  };
}