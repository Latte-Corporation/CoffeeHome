import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full h-full">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-transform hover:scale-110 text-primary w-fit m-auto">
            404
          </h1>
          <p className="text-secondary">
            Looks like you&apos;ve ventured into the unknown digital coffee
            world.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#EDE0D4]/90 hover:text-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Return to website
        </Link>
      </div>
    </div>
  );
}
