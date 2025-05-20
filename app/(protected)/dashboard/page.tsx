import { auth } from "@clerk/nextjs/server";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Navbar } from "../components/navbar";

export default async function ProtectedPage() {
  const { userId } = await auth();


  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  return (
    <div>
      <Navbar />
      <Dashboard userId={userId} />
    </div>
  );
}
