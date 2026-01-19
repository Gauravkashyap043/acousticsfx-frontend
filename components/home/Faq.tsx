"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What kind of clients do you work with?",
      a: "Read on how we make awesome projects from scratch, through several series of testing and refining to make our awesome masterclass.",
    },
    { q: "What services do you offer?", a: "Answer content here." },
    { q: "How do you price your projects?", a: "Answer content here." },
    { q: "What is your typical project timeline?", a: "Answer content here." },
    { q: "Can we collaborate remotely?", a: "Answer content here." },
    {
      q: "Do you accept one-off architect tasks or only full projects?",
      a: "Answer content here.",
    },
    {
      q: "How many concepts or revisions are included?",
      a: "Answer content here.",
    },
  ];

  return (
    <section className="px-[200px] py-[100px] bg-white">
      <div className="flex gap-20 items-start">
        
        {/* LEFT CONTENT */}
        <div className="w-1/2">
          <p className="text-sm mb-3">FAQs</p>

          <h2 className="text-4xl font-bold mb-4">
            Wondering How We Work?
          </h2>

          <p className="text-sm text-gray-600 mb-6 max-w-md">
            Answers to common questions about our process, services,
            and how we work.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 text-sm mb-10">
            Contact Us
          </button>

          {/* IMAGE PLACEHOLDER (tum yahan image lagaoge) */}
          <div
            className="bg-gray-100 flex items-center justify-center"
            style={{
              width: "551.55px",
              height: "443.52px",
            }}
          >
            {/* IMAGE WILL COME HERE */}
          </div>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="w-1/2">
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? -1 : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium">
                    {index + 1}. {item.q}
                  </span>
                  <span className="text-xl">
                    {openIndex === index ? "—" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-sm text-gray-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
