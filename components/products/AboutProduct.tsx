"use client";
import { useState } from "react";

const tabs = [
  "Advantages",
  "Key Features",
  "Application Areas",
  "Characteristics",
  "Maintenance",
];

const advantages = [
  [
    "Best possible combination of acoustics and aesthetic",
    "Seamless jointing with tongue and groove design.",
  ],
  [
    "Wide variety of surface finishes available.",
    "Natural timber veneers, painted finishes, raw MDF, laminates etc.",
  ],
  [
    "Range of acoustic performance options.",
    "Various groove profiles for maximum design flexibility.",
  ],
  [
    "Easy to handle, transport, store and install.",
    "Short acquisition lead times.",
  ],
  [
    "Durable, long lasting, demountable, reusable.",
    "Enables designers to produce rich, warm spaces.",
  ],
  [
    "It’s Helmholtz Resonator concept enhances acoustical properties.",
    "Improved acoustics with FX fleece",
  ],
];

export default function AboutProduct() {
  const [activeTab, setActiveTab] = useState("Advantages");

  return (
    <section className="w-full bg-[#faf7f2] px-[100px] py-[80px]">
      
      {/* Header */}
      <div className="max-w-2xl mb-8">
        <h2 className="text-[34px] axiforma font-bold mb-3">About the product</h2>
        <p className="text-[15px] inter-font font-[400] text-gray-600">
          Our inspired solutions have helped shape modern acoustic design.
          Alluring spaces, internationally recognised for their architectural
          elegance and exceptional sound management live here.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border border-[#f0b07a] rounded-md overflow-hidden w-fit mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-[16px] axiforma font-[400] border-r last:border-r-0 border-[#f0b07a]
              ${
                activeTab === tab
                  ? "bg-[#f09a4a] text-white"
                  : "bg-white text-gray-700 hover:bg-[#fff1e5]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Advantages" && (
        <div className="bg-[#f1f1f1] rounded-lg p-6">
          <div className="grid grid-cols-2 gap-4">
            {advantages.map((row, index) => (
              <div
                key={index}
                className="col-span-2 grid grid-cols-2 gap-4"
              >
                <div className="bg-white rounded-md px-4 py-3 text-[20px] inter-font font-[400] text-gray-700">
                  {row[0]}
                </div>
                <div className="bg-white rounded-md px-4 py-3 text-[20px] inter-font font-[400] text-gray-700">
                  {row[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
