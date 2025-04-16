import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="mb-6">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
