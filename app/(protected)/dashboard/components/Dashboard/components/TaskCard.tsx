import { InterfaceTasks } from "@/app/interfaces/task.interface";
import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge, Button } from "@radix-ui/themes";
//import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from "lucide-react";
// import { Button } from '@/components/ui/button';

interface TaskCardProps {
  task: InterfaceTasks;
}

export function TaskCard({ task }: TaskCardProps) {
  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
    }).format(Number(task.price));
  }, [task.price]);

  return (
    <Card className="flex flex-col hover:shadow-md transition-shadow duration-200 mb-2">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge
            style={{
              backgroundColor: `var(--color-category-${task.category})`,
            }}
            className="text-white mb-2"
          >
            {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
          </Badge>
          <Badge
            style={{ backgroundColor: `var(--color-status-${task.status})` }}
            className="text-white"
          >
            {task.status.charAt(0).toUpperCase() +
              task.status.replace("-", " ").slice(1)}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg line-clamp-2">{task.title}</h3>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{new Date(task.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{task.timeSlot}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="line-clamp-1">{task.location}</span>
          </div>
        </div>
        <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
          {task.description}
        </p>
      </CardContent>
      <CardFooter className="pt-2 border-t">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold">{formattedPrice}</div>
          <Button size="1">View Details</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
