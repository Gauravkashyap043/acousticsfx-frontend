import Image from "next/image";

export default function ConnectWithExperts() {
  return (
    <section className="relative bg-[#1f2528] text-white overflow-hidden">
      
      {/* TOP AREA */}
      <div className="relative flex min-h-[420px]">
        
        {/* LEFT CONTENT */}
        <div className="pl-6 md:pl-[200px] pr-10 flex flex-col justify-center max-w-xl z-10">
          <h2 className="text-3xl font-semibold mb-4">
            Connect with experts
          </h2>

          <p className="text-sm text-white/80 mb-6">
            Reach Out to Our Expert Team for Tailored Solutions,
            Consultations, and Unparalleled Support. Your IP
            Success Starts with a Conversation at Roax.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/70 mb-6">
            <span>🔒 IP Awards</span>
            <span>👨‍💼 Experienced Experts</span>
            <span>📈 Success Rate</span>
          </div>

          <button className="bg-white text-black px-6 py-3 w-fit text-sm">
            Get in touch →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="absolute right-0 top-0 h-full w-[55%]">
          <Image
            src="/connect.jpg" // 👈 tum apni image lagana
            alt="Expert"
            fill
            className="object-cover"
            priority
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* FORM CARD */}
        <div className="absolute right-[60px] top-1/2 -translate-y-1/2 bg-white/90 text-black rounded-xl p-6 w-[420px] z-20 hidden lg:block">
          <p className="text-xs mb-4 text-gray-600">
            Fill out this form and our team will get back to you.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <input className="border-b outline-none" placeholder="Your Name*" />
            <input className="border-b outline-none" placeholder="Your Email Address*" />
            <input className="border-b outline-none" placeholder="Company name" />
            <input className="border-b outline-none" placeholder="Your Phone number*" />
            <textarea
              className="col-span-2 border-b outline-none resize-none"
              placeholder="Your message*"
            />
          </div>
        </div>
      </div>

      {/* BOTTOM SUBSCRIBE SECTION */}
      <div className="px-6 md:px-[200px] py-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Subscribe to our Latest News
          </h3>
          <p className="text-sm text-white/70 max-w-md">
            Join our mailing list and get the latest Roax news,
            insights, updates, and exclusive articles delivered
            to your inbox.
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <input
            className="px-4 py-3 text-black text-sm w-full md:w-[260px]"
            placeholder="Email Address"
          />
          <button className="bg-white text-black px-5 py-3 text-sm whitespace-nowrap">
            Subscribe Now →
          </button>
        </div>
      </div>
    </section>
  );
}
