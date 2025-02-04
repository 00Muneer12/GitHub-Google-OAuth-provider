"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../../components/ui/card"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold">Sign in</h2>
        <CardContent className="mt-4 flex flex-col space-y-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>
          <Button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800"
          >
            <FaGithub className="text-xl text-white" />
            Continue with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
