"use client";

import { TaskCard } from "./TaskCard";
import { Button } from "@radix-ui/themes";
import { TaskDetail } from "./TaskDetail";
import { useState } from "react";

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  price: string;
}

interface DashboardProps {
  tasks: Task[];
}

export function Dashboard({ tasks }: DashboardProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tareas</h1>
        <Button>
          <a href="/create-task">Crear nueva tarea</a>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              price={task.price}
              onClick={() => setSelectedTask(task)}
            />
          ))}
        </div>
        <div className="col-span-2 p-10">
          <TaskDetail onClick={() => setSelectedTask(null)}>
            <span className="text-xl font-bold text-blue-600">Detalles de la tarea</span>
            {selectedTask && (
              <div className="flex flex-col gap-4 p-10">
                <h2 className="text-2xl font-bold mx-auto">{selectedTask.title}</h2>
                <p className="">{selectedTask.description}</p>
                <p className="">{selectedTask.price}</p>
              </div>
            )}
          </TaskDetail>
        </div>
      </div>
    </div>
  );
}
