"use client"
import { ArrowLeft, Calendar, Check, MapPin, User } from "lucide-react"
import { Button, Separator, Badge } from "@radix-ui/themes"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) return;

    const { title, description, price, category, location, date, timeSlot } = task;

    if (!title || !category || !date || !timeSlot || !location || !description || !price) {
      alert("Todos los campos son obligatorios.");
      return;
    }

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
    }
  };

  if (!task) {
    return <div>Task not found</div>;
  }

  const { title, description, price, category, location, date, timeSlot } = task;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="bg-muted/30">
        <CardTitle className="text-xl flex items-center gap-2">
          <span className="text-primary">Previsualización de tarea</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <Badge variant="outline" className="mt-2">
            {category === "other" ? "Otra categoría" : category}
          </Badge>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <User className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">{userName}</p>
              <p className="text-sm text-muted-foreground">ID: {userId}</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <p>{location}</p>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p>
                {new Date(date).toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm text-muted-foreground">{timeSlot}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-2">Descripción</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Precio</h3>
          <p className="text-2xl font-bold">{Number(price).toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 pt-2 pb-4">
        <Button variant="outline" onClick={() => router.push("/create-task")} className="w-full">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver atrás
        </Button>
        <Button onClick={handleSubmit} className="w-full">
          <Check className="mr-2 h-4 w-4" />
          Guardar tarea
        </Button>
      </CardFooter>
    </Card>
  );
}