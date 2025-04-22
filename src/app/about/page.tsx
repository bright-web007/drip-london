import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p className="mb-4">Information about our project.</p>
      <Link href="/" className="text-primary-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
