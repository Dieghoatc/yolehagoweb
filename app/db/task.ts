export interface InterfaceTasks {
    id: string;
    title: string;
    description: string;
    price: number;
    date: string;
    timeSlot: "morning" | "afternoon" | "evening" | "night" | "midday" | "anytime";
    location: string;
    status: "pending" | "completed" | "cancelled";
    category: "tech" | "health" | "beauty" | "fitness" | "education" | "other"; 
}

export const tasks: InterfaceTasks[] = [
    {
        id: "1",
        title: "Esta es una tarea de ejemplo",
        description: "Contruccion de aplicacion para la hackaton de midudev con clerk",
        price: 100,
        date: "2025-05-20",
        timeSlot: "morning",
        location: "bogotá",
        status: "pending",
        category: "tech"
    },
    {
        id: "2",
        title: "Esta es una tarea de ejemplo",
        description: "Contruccion de aplicacion para la hackaton de midudev con clerk",
        price: 100,
        date: "2025-05-20",
        timeSlot: "morning",
        location: "bogotá",
        status: "pending",
        category: "tech"
    }
]