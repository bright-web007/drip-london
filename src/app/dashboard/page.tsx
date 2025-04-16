'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  const router = useRouter();
  const username = localStorage.getItem('username');

  if (!username) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('username');
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <h4 className="text-2xl font-bold mb-4">This is a protected route</h4>
      <p className="mb-6">Welcome, {username}!</p>

      <Button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mb-4"
      >
        Log Out
      </Button>

      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Back to Home
      </Link>
    </main>
  );
}
