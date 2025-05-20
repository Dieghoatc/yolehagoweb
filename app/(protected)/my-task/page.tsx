"use client";
import { useState } from "react";
import { Search, Filter, Eye, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "../components/navbar";
import { useGetTask } from "../hooks/useGetTask";
import { useDashboardStore } from "../store/dashboard.store";

const categoryNames: Record<string, string> = {
  other: "Otra categoría",
  repair: "Reparación",
  home: "Hogar",
  installation: "Instalación",
};

const statusConfig: Record<
  string,
  {
    label: string;
    variant:
      | "default"
      | "outline"
      | "secondary"
      | "destructive"
      | null
      | undefined;
  }
> = {
  pending: { label: "Pendiente", variant: "outline" },
  "in-progress": { label: "En progreso", variant: "secondary" },
  completed: { label: "Completada", variant: "destructive" },
};

export default function TaskList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const { userIdStore } = useDashboardStore();

  const { data, loading } = useGetTask();
  const tasks = data?.filter((task) => task.userId === userIdStore);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || task.category === categoryFilter;
    const matchesStatus =
      statusFilter === "all" || task.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Navbar />
      <div className="w-full space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar tareas..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="repair">Reparación</SelectItem>
                <SelectItem value="home">Hogar</SelectItem>
                <SelectItem value="installation">Instalación</SelectItem>
                <SelectItem value="other">Otra categoría</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="pending">Pendiente</SelectItem>
                <SelectItem value="in-progress">En progreso</SelectItem>
                <SelectItem value="completed">Completada</SelectItem>
                <SelectItem value="cancelled">Cancelada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Mostrando {filteredTasks.length} de {tasks.length} tareas
        </div>
        {filteredTasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map((task) => (
              <Card key={task.task_id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg line-clamp-1">
                        {task.title}
                      </h3>
                      <Badge variant={statusConfig[task.status].variant}>
                        {statusConfig[task.status].label}
                      </Badge>
                    </div>

                    <Badge variant="outline" className="mb-3">
                      {categoryNames[task.category] || task.category}
                    </Badge>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {task.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{task.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {formatDate(task.date)} • {task.timeSlot}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="p-4 bg-muted/30">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-lg">
                          {Number(task.price).toLocaleString("es-CO", {
                            style: "currency",
                            currency: "COP",
                          })}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground">
              No se encontraron tareas con los filtros seleccionados
            </p>
          </div>
        )}
      </div>
    </>
  );
}
