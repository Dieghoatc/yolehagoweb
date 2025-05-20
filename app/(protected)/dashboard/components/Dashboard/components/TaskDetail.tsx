interface TaskDetailProps {
  children: React.ReactNode;
}

export function TaskDetail({ children }: TaskDetailProps) {
  return (
    <div>
      {children}
    </div>
  );
}