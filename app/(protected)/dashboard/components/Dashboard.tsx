"use client";

import { TaskCard } from "./TaskCard";
import { Button } from "@radix-ui/themes";

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

interface DashboardProps {
  tasks: Task[];
}

export function Dashboard({ tasks }: DashboardProps) {
  console.log(tasks);
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tareas</h1>
        <Button>
          <a href="/create-task">Crear nueva tarea</a>
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            price={task.price}
          />
        ))}
      </div>
    </div>
  );
}
