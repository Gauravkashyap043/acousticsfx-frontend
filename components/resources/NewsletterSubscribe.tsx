"use client";

import Image from "next/image";
import { useState } from "react";
import { api, ApiClientError } from "@/lib/api/client";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("loading");
    setMessage("");
    try {
      await api.post<{ ok: boolean; message?: string }>("/api/newsletter", { email: trimmed });
      setStatus("success");
      setMessage("Thanks for subscribing.");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof ApiClientError ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F7F7F7] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-16 gap-10">

          {/* Left Content */}
          <div className="max-w-xl text-left">
            <p className="text-[12px] tracking-widest text-gray-500 uppercase mb-4 text-left">
              Subscribe our newsletter
            </p>

            <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] leading-snug font-semibold text-gray-900 mb-8 text-left">
              Get stories in your <br className="hidden sm:block" /> inbox twice a month.
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full sm:w-[260px] h-[44px] px-4 text-sm border border-gray-300 rounded-md outline-none focus:border-gray-500"
                required
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="h-[44px] px-6 bg-[#1E6F73] text-white text-sm rounded-md hover:opacity-90 transition disabled:opacity-70"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
            {message && (
              <p className={`mt-2 text-sm ${status === "error" ? "text-red-600" : "text-gray-600"}`}>
                {message}
              </p>
            )}
          </div>

          {/* Right Illustration */}
          <div className="hidden md:block">
            <Image
              src="/assets/product/newsletter-img.png (1).svg"
              alt="Newsletter Illustration"
              width={320}
              height={260}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
