'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-6">Please try again or contact support if the problem persists.</p>
      <p>{error?.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
