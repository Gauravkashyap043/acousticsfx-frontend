"use client";

export default function ContactFormSection() {
  return (
    <section className="px-[200px] py-[100px] bg-white">
      <div className="grid grid-cols-2 gap-24 items-center">
        {/* ================= Left Illustration ================= */}
        <div className="flex justify-center">
          <img
            src="/contact-illustration.png" // apni illustration yahan lagana
            alt="Contact Illustration"
            className="max-w-md w-full"
          />
        </div>

        {/* ================= Right Form ================= */}
        <div>
          <h2 className="text-3xl font-semibold text-[#111] mb-2">
            Contact Us
          </h2>

          <p className="text-gray-500 mb-10">
            Any question or remarks? Just write us a message!
          </p>

          <form className="space-y-8">
            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-2">
                  Business Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 012 3456 789"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <p className="text-sm text-gray-600 mb-3">
                Select Subject?
              </p>

              <div className="flex gap-6 text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" defaultChecked />
                  General Inquiry
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" />
                  Help & Support
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" />
                  Become Partner
                </label>

                <label className="flex items-center gap-2">
                  <input type="radio" name="subject" />
                  Other
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Write your message..."
                className="w-full border-b border-gray-300 focus:outline-none focus:border-orange-500 py-2 resize-none"
              />
            </div>

            {/* Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded shadow hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
