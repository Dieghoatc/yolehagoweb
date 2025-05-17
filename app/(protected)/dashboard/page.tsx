"use client";

import { useState } from "react";
import { TaskCard } from "./components/TaskCard";
import { Button } from "@radix-ui/themes";
import { TaskDetail } from "./components/TaskDetail";

import { InterfaceTasks } from "@/app/db/task";

export default function Dashboard() {
  const [selectedTask, setSelectedTask] = useState<InterfaceTasks | null>(null);

  const data = localStorage.getItem("tasks")
  const tasksDatabase = data ? JSON.parse(data) : [];

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
          {data ? (
            tasksDatabase.map((task: InterfaceTasks) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                price={task.price.toString()}
                onClick={() => setSelectedTask(task)}
              />
            ))
          ) : (
            <>
              <p>No hay tareas</p>
            </>
          )}
        </div>
        <div className="col-span-2 p-10">
          <TaskDetail>
            <span className="text-xl font-bold text-blue-600">
              Detalles de la tarea
            </span>
            {selectedTask && (
              <div className="flex flex-col gap-4 p-10">
                <h2 className="text-2xl font-bold mx-auto">
                  {selectedTask.title}
                </h2>
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
