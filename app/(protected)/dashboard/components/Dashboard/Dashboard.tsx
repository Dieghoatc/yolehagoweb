"use client";

import { TaskDetail } from "./components/TaskDetail";
import { TaskCard } from "./components/TaskCard";

import { useGetTask } from "../../../hooks/useGetTask";
import { InterfaceTasks } from "@/app/interfaces/task.interface";
import { useState } from "react";

import {
  Calendar,
  Clock,
  MapPin,
  FileText,
  User,
  Tag,
  DollarSign,
  Info,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, Badge, Separator } from "@radix-ui/themes";
import { useDashboardStore } from "../../../store/dashboard.store";
import { useEffect } from "react";

interface DashboardProps {
  userId: string;
}

export function Dashboard({ userId }: DashboardProps) {
  const { data } = useGetTask();
  const [selectedTask, setSelectedTask] = useState<InterfaceTasks | null>(null);
  const { setUserIdStore } = useDashboardStore();

  useEffect(() => {
    setUserIdStore(userId);
  }, [userId, setUserIdStore]);

  return (
    <div className="py-8 h-screen mx-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Tareas</h1>
        <Button>
          <a href="/create-task">Crear nueva tarea</a>
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 h-screen overflow-y-auto p-4">
          {data?.map((task) => (
            <div key={task.task_id} onClick={() => setSelectedTask(task)}>
              <TaskCard task={task} />
            </div>
          ))}
        </div>
        <div className="col-span-3 p-10">
          {selectedTask && (
            <TaskDetail>
              <div className="mx-auto px-4 py-8 max-w-4xl">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedTask(null)}
                  className="mb-6"
                >
                  &larr; Back to Tasks
                </Button>

                <Card className="shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            style={{
                              backgroundColor: `var(--color-category-${selectedTask.category})`,
                            }}
                            className="text-white"
                          >
                            {selectedTask.category.charAt(0).toUpperCase() +
                              selectedTask.category.slice(1)}
                          </Badge>
                          <Badge
                            style={{
                              backgroundColor: `var(--color-status-${selectedTask.status})`,
                            }}
                            className="text-white"
                          >
                            {selectedTask.status.charAt(0).toUpperCase() +
                              selectedTask.status.replace("-", " ").slice(1)}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-bold">
                          {selectedTask.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          Task ID: {selectedTask.task_id}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">
                          ${selectedTask.price}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-start gap-2">
                        <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">Date</div>
                          <div>
                            {new Date(selectedTask.date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">Time</div>
                          <div>{selectedTask.timeSlot}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">Location</div>
                          <div>{selectedTask.location}</div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-medium">Description</h3>
                      </div>
                      <div className="pl-7 text-gray-700 whitespace-pre-wrap">
                        {selectedTask.description}
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">Price</div>
                          <div>${selectedTask.price}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Tag className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-medium">Category</div>
                          <div>
                            {selectedTask.category.charAt(0).toUpperCase() +
                              selectedTask.category.slice(1)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-medium">Assigned User</h3>
                      </div>
                      <div className="pl-7">
                        <div className="flex items-center gap-3">
                          {/* <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={task.user.avatar}
                              alt={task.user.name}
                            />
                            <AvatarFallback>
                              {getInitials(task.user.name)}
                            </AvatarFallback>
                          </Avatar> */}
                          <div>
                            <div className="font-medium">username</div>
                            <div className="text-sm text-muted-foreground">
                              email
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-sm">
                          User ID: {selectedTask.userId}
                        </div>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between border-t pt-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Info className="h-4 w-4 mr-1" />
                      Last updated: Today at 10:30 AM
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">Edit Task</Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        <Check className="h-4 w-4 mr-1" /> Mark Complete
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TaskDetail>
          )}
        </div>
      </div>
    </div>
  );
}
