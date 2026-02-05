"use client";

import Image from "next/image";

export default function ConnectWithExperts() {
  return (
    <section className="relative bg-[#1f2528] py-10 text-white overflow-hidden">
      {/* ================= TOP AREA ================= */}
      <div className="relative flex min-h-[300px]">
        {/* LEFT DARK CONTENT */}
        <div className="pl-6 md:pl-[100px] pr-12 flex flex-col justify-center max-w-[720px] z-10">
          <h2 className="text-[45px] inter-font font-[600] mb-4">Connect with experts</h2>

          <div className="flex items-center gap-4 text-[14px] inter-font font-[400] text-white/70 mb-4">
            <span>🔒 IP Awards</span>
            <span>👨‍💼 Experienced Experts</span>
            <span>📈 Success Rate</span>
          </div>

          <p className="text-[14px] inter-font font-[400] text-white/80 mb-8 leading-relaxed">
            Reach Out to Our Expert Team for Tailored Solutions, Consultations,
            and Unparalleled Support. Your IP Success Starts with a Conversation
            at Roax.
          </p>

          <button className="bg-white text-black px-6 py-3 w-fit text-sm font-medium">
            Get in touch →
          </button>
        </div>

        {/* RIGHT IMAGE (FIXED SIZE) */}
        {/* RIGHT IMAGE (FIXED SIZE - FLUSH RIGHT) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
          <div className="relative w-[600px] h-[300px] overflow-hidden">
            <Image
              src="/assets/about/glassimg.jpg"
              alt="Expert"
              fill
              className="object-cover"
              priority
            />

            {/* ULTRA STRONG LEFT FADE (FORM MASK) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(31,37,40,1), rgba(31,37,40,0.9), rgba(31,37,40,0.75), rgba(31,37,40,0.55), rgba(31,37,40,0.35), rgba(31,37,40,0.15), rgba(31,37,40,0))",
              }}
            />
          </div>
        </div>


        {/* ================= FORM CARD (SHIFTED LEFT) ================= */}
        <div className="absolute right-[200px] top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="bg-white/40 backdrop-blur-[0px] text-black rounded-2xl p-8 w-[550px] shadow-xl">
            <p className="text-xs mb-6 text-gray-800">
              Fill out this form and our team will get back to you.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
              <input
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Your Name*"
              />
              <input
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Your Email Address*"
              />
              <input
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Company name"
              />
              <input
                className="bg-transparent border-b border-black/60 outline-none pb-2 placeholder:text-gray-800"
                placeholder="Your Phone number*"
              />
              <textarea
                className="col-span-2 bg-transparent border-b border-black/60 outline-none resize-none pb-2 placeholder:text-gray-800"
                placeholder="Your message*"
                rows={2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SUBSCRIBE ================= */}
      <div className="px-6 md:px-[100px] py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="text-[36px] font-semibold mb-2 inter-font">
            Subscribe to our Latest News
          </h3>
          <p className="text-[14px] inter-font font-[400] text-white/70 max-w-md leading-relaxed">
            Join our mailing list and get the latest Roax news, insights,
            updates, and exclusive articles delivered to your inbox.
          </p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
         <input
  className="px-5 py-3 bg-white text-black text-[14px] w-full md:w-[280px] outline-none inter-font font-[400] border border-white/40 placeholder:text-[#EA8E39]"
  placeholder="Email Address"
/>

          <button className="bg-white text-[#097F98] px-6 py-3 text-[14px] inter-font font-bold whitespace-nowrap">
            Subscribe Now →
          </button>
        </div>
      </div>
    </section>
  );
}
