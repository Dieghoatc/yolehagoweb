import { auth, currentUser } from "@clerk/nextjs/server";
import { TaskDetail } from "./components/taskDetail";

export default async function PreviewTask() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user?.fullName) {
    return <div>Sign in to view this page</div>;
  }
  return (
    <div>
      <h1>Preview Task</h1>
      <TaskDetail userName={user.fullName} userId={userId} />
    </div>
  );
}
