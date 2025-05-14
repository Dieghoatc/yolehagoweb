interface TaskDetailProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function TaskDetail({ children, onClick }: TaskDetailProps) {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  );
}