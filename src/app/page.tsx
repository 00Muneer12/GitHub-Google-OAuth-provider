"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();  // Using the useSession hook to access session data
  const router = useRouter();

  useEffect(() => {
    // Perform redirect after session status has been resolved
    if (status === "loading") return;  // Wait for session to load
    if (!session) {
      router.push("/auth");  // Redirect to authentication page if no session
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;  // Show loading message while session is loading

  return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>  {/* Display the user's name from the session */}
    </div>
  );
}
