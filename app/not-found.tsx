import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="text-[80px] sm:text-[120px] font-bold text-[#1F6775]/10 leading-none select-none">
        404
      </h1>
      <h2 className="text-[24px] sm:text-[32px] font-semibold text-gray-900 -mt-4 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="bg-[#1F6775] text-white px-6 py-3 text-sm font-medium hover:bg-[#184f5a] transition"
        >
          Go Home
        </Link>
        <Link
          href="/products"
          className="border border-gray-300 text-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition"
        >
          Browse Products
        </Link>
        <Link
          href="/contactus"
          className="border border-gray-300 text-gray-700 px-6 py-3 text-sm font-medium hover:bg-gray-50 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
