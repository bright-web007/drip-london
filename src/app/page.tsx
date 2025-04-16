'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleAboutClick = () => {
    router.push('/about');
  };

  const handleDashboardClick = () => {
    router.push('/dashboard');
    localStorage.setItem('username', 'John Doe');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-4">Welcome to our application!</p>
      <div className="space-x-4">
        <Button onClick={handleAboutClick} className="text-primary-500 hover:underline text-white">
          About
        </Button>
        <Button
          onClick={handleDashboardClick}
          className="text-primary-500 hover:underline text-white"
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
}
