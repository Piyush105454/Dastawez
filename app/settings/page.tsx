"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SettingsPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/settings");
    },
  });

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
          <p>
            <strong>Name:</strong> {session.user?.name}
          </p>
          <p>
            <strong>Email:</strong> {session.user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
