"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { subscribeNewsletter } from "@/lib/newsletter-api";
import { submitContactForm } from "@/lib/contact-api";

export default function ConnectWithExperts() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSending, setContactSending] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);
    setContactSuccess(false);
    setContactSending(true);
    try {
      await submitContactForm({
        name: contactName,
        email: contactEmail,
        phone: contactPhone || undefined,
        subject: "General Inquiry",
        message: contactCompany
          ? `[Company: ${contactCompany}] ${contactMessage}`
          : contactMessage,
      });
      setContactSuccess(true);
      setContactName("");
      setContactEmail("");
      setContactCompany("");
      setContactPhone("");
      setContactMessage("");
    } catch (err) {
      setContactError(err instanceof Error ? err.message : "Failed to send");
    } finally {
      setContactSending(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSending(true);
    try {
      await subscribeNewsletter(email);
      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative bg-[#1f2528] py-10 text-white overflow-hidden">

      {/* ================= TOP AREA ================= */}
      <div className="relative flex min-h-[300px] flex-col lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="pl-6 sm:pl-10 lg:pl-[100px] pr-6 lg:pr-12 flex flex-col justify-center max-w-[720px] z-10 text-left">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[45px] inter-font font-[600] mb-4 text-left">
            Connect with experts
          </h2>

          <div className="flex flex-wrap justify-start gap-4 text-[14px] inter-font font-[400] text-white/70 mb-4">
            <span>🔒 IP Awards</span>
            <span>👨‍💼 Experienced Experts</span>
            <span>📈 Success Rate</span>
          </div>

          <p className="text-[14px] inter-font font-[400] text-white/80 mb-8 leading-relaxed text-left">
            Reach Out to Our Expert Team for Tailored Solutions, Consultations,
            and Unparalleled Support. Your IP Success Starts with a Conversation
            at Roax.
          </p>

          <button
            type="button"
            onClick={() => {
              nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
              setTimeout(() => nameInputRef.current?.focus(), 400);
            }}
            className="bg-white text-black px-6 py-3 w-fit text-sm font-medium cursor-pointer"
          >
            Get in touch →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative lg:absolute right-0 top-1/2 lg:-translate-y-1/2 mt-10 lg:mt-0">
          <div className="relative w-full lg:w-[600px] h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden">
            <Image
              src="/assets/about/glassimg.jpg"
              alt="Expert"
              fill
              className="object-cover"
              priority
            />

            {/* LEFT FADE */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(31,37,40,1), rgba(31,37,40,0.9), rgba(31,37,40,0.75), rgba(31,37,40,0.55), rgba(31,37,40,0.35), rgba(31,37,40,0.15), rgba(31,37,40,0))",
              }}
            />
          </div>
        </div>

        {/* FORM CARD — DESKTOP ONLY (UNCHANGED) */}
        <div className="absolute right-[200px] top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <form
            onSubmit={handleContactSubmit}
            className="bg-white/40 backdrop-blur-[0px] text-black rounded-2xl p-8 w-[550px] shadow-xl"
          >
            <p className="text-xs mb-6 text-gray-800">
              Fill out this form and our team will get back to you.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <input
                ref={nameInputRef}
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Your Name*"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
              />
              <input
                type="email"
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Your Email Address*"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
              />
              <input
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Company name"
                value={contactCompany}
                onChange={(e) => setContactCompany(e.target.value)}
              />
              <input
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Your Phone number*"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                required
              />
              <textarea
                className="col-span-2 bg-transparent border-b border-black/60 outline-none resize-none pb-2 placeholder:text-gray-800"
                placeholder="Your message*"
                rows={2}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
              />
            </div>

            {contactSuccess && (
              <p className="mt-4 text-green-700 text-sm font-medium">Message sent successfully!</p>
            )}
            {contactError && (
              <p className="mt-4 text-red-600 text-sm font-medium">{contactError}</p>
            )}

            <button
              type="submit"
              disabled={contactSending}
              className="mt-6 bg-[#1f2528] text-white px-8 py-3 text-sm font-medium cursor-pointer hover:bg-black transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {contactSending ? "Sending…" : "Submit →"}
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM SUBSCRIBE ================= */}
      <div className="px-6 sm:px-10 lg:px-[100px] py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="text-left">
          <h3 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold mb-2 inter-font text-left">
            Subscribe to our Latest News
          </h3>
          <p className="text-[14px] inter-font font-[400] text-white/70 max-w-md leading-relaxed text-left">
            Join our mailing list and get the latest Roax news, insights,
            updates, and exclusive articles delivered to your inbox.
          </p>
          {success && (
            <p className="mt-2 text-green-400 text-sm font-medium">Thanks for subscribing!</p>
          )}
          {error && (
            <p className="mt-2 text-red-300 text-sm font-medium">{error}</p>
          )}
        </div>

        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="px-5 py-3 bg-white text-black text-[14px] w-full md:w-[280px] outline-none inter-font font-[400] border border-white/40 placeholder:text-[#EA8E39]"
          />

          <button
            type="submit"
            disabled={sending}
            className="bg-white text-[#097F98] px-6 py-3 text-[14px] inter-font font-bold whitespace-nowrap cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {sending ? "Subscribing…" : "Subscribe Now →"}
          </button>
        </form>
      </div>
    </section>
  );
}
