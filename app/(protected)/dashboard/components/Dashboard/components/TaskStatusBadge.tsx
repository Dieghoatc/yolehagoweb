import { cn } from "@/lib/utils";

type TaskStatus = "pending" | "completed" | "inprogress" | "canceled";

type TaskStatusBadgeProps = {
  status: TaskStatus;
};

const statusConfig: Record<TaskStatus, { label: string; className: string }> = {
  pending: {
    label: "Pending",
    className: "bg-status-pending text-status-pending-text",
  },
  completed: {
    label: "Completed",
    className: "bg-status-completed text-status-completed-text",
  },
  inprogress: {
    label: "Progress",
    className: "bg-status-inprogress text-status-inprogress-text",
  },
  canceled: {
    label: "Cancel",
    className: "bg-status-canceled text-status-canceled-text",
  },
};

export default function TaskStatusBadge({ status }: TaskStatusBadgeProps) {
  const config = statusConfig[status] ?? {
    label: "Unknown",
    className: "bg-gray-300 text-gray-800",
  };

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-medium inline-block",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}