//import { format } from "date-fns"
//import { es } from "date-fns/locale"

//Creada el {format(createdAt, 'd MMMM yyyy', { locale: es })}
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface TaskCardProps {
  title: string;
  description: string;
  price: number;
  //createdAt: Date
}

export function TaskCard({ title, description, price }: TaskCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-gray-200 mb-4"></div>
            <span>{`$ ${price}`}</span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
