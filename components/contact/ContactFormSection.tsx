"use client";

import { useState } from "react";
import { api } from "@/lib/api/client";

const SUBJECTS = ["General Inquiry", "Help & Support", "Become Partner", "Other"] as const;

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState<(typeof SUBJECTS)[number]>("General Inquiry");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await api.post<{ ok: boolean; message?: string }>("/api/contact", {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        subject,
        message: message.trim(),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("General Inquiry");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err && typeof err === "object" && "message" in err
          ? String((err as { message: string }).message)
          : "Failed to send message. Please try again."
      );
    }
  }

  return (
    <section className="px-[16px] sm:px-[40px] lg:px-[100px] py-[30px] sm:py-[40px] lg:py-[50px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">

        {/* ================= Left Illustration ================= */}
        <div className="flex justify-center">
          <img
            src="/assets/contacts/8690678_3969584 1.svg"
            alt="Contact Illustration"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full"
          />
        </div>

        {/* ================= Right Form ================= */}
        <div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#111] mb-2 poppins-font">
            Contact Us
          </h2>

          <p className="text-gray-500 mb-8 sm:mb-10 poppins-font font-[500] text-[16px] sm:text-[18px] lg:text-[20px]">
            Any question or remarks? Just write us a message!
          </p>

          {status === "success" && (
            <p className="mb-6 p-4 rounded bg-green-100 text-green-800 text-sm">
              Thank you for your message. We&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mb-6 p-4 rounded bg-red-100 text-red-800 text-sm">{errorMsg}</p>
          )}

          <form className="space-y-8" onSubmit={handleSubmit}>

            {/* Full Name */}
            <div>
              <label className="block text-[13px] font-[500] poppins-font text-gray-500 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-[13px] font-[500] poppins-font">
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                />
              </div>

              <div>
                <label className="block text-[13px] font-[500] poppins-font text-gray-500 mb-2">
                  Business Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 012 3456 789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <p className="text-[15px] font-[600] poppins-font text-gray-600 mb-3">
                Select Subject?
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-[13px] font-[400] poppins-font text-gray-600">
                {SUBJECTS.map((s) => (
                  <label key={s} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="subject"
                      checked={subject === s}
                      onChange={() => setSubject(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[13px] font-[500] poppins-font text-gray-500 mb-0">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 resize-none"
              />
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-orange-500 text-white px-8 py-3 rounded shadow hover:bg-orange-600 transition disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
