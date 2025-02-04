"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between px-6 py-4 shadow-md">
      <Link href="/" className="text-xl font-bold">
        MyApp
      </Link>
      <div>
        {session ? (
          <div className="flex items-center gap-4">
            <p>{session.user?.name}</p>
            <Button onClick={() => signOut()} className="bg-red-500">
              Sign Out
            </Button>
          </div>
        ) : (
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
