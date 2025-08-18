'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function Profile() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin');
    },
  });

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="flex items-center space-x-4">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name ?? 'User avatar'}
            width={100}
            height={100}
            className="rounded-full"
          />
        )}
        <div>
          <h2 className="text-2xl">{session?.user?.name}</h2>
          <p className="text-gray-500">{session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
}
