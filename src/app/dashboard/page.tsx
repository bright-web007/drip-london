'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Access localStorage safely in useEffect (client-side only)
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
    setLoading(false);
    // Redirect if no username is found
    if (!storedUsername) {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    router.push('/');
  };

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (!username) {
    return null; // Will redirect in useEffect
  }

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
