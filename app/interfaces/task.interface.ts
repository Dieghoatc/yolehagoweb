export interface InterfaceTasks {
    task_id: number;
    title: string;
    category: string;
    date: string;
    timeSlot: string;
    location: string;
    description: string;
    price: string;
    status: 'pending' | 'completed' | 'inprogress' | 'canceled';
    userId: string;
  }