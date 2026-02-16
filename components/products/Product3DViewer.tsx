"use client";

import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Scene Component (3D Canvas)
function Scene({ scale, color }: { scale: number; color: string }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [3, 2, 5] }} style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <mesh scale={[scale, 1, scale]}>
          <boxGeometry args={[3, 0.2, 3]} />
          <meshStandardMaterial color={color} />
        </mesh>

        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
}

// UI Component (Slider and Controls)
function UI({ setColor }: { setColor: (color: string) => void }) {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: dir === "left" ? -120 : 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-[#111] p-6 rounded-2xl text-white">
      <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] axiforma font-bold mb-6">Select Profiles</h2>

      {/* SLIDER + BUTTONS */}
      <div className="flex items-center justify-between mb-6">
        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-3 overflow-x-auto no-scrollbar"
          style={{ maxWidth: "280px" }}
        >
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`min-w-[56px] h-14 border ${active === i ? "border-orange-500" : "border-gray-600"
                } flex items-center justify-center cursor-pointer`}
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* BUTTON GROUP (RIGHT SIDE) */}
        <div className="flex gap-2 ml-3">
          <button
            onClick={() => scroll("left")}
            className="px-3 py-1 bg-gray-800 rounded text-[14px] sm:text-[15px] inter-font font-[400] hover:bg-gray-700 transition"
          >
            ◀
          </button>

          <button
            onClick={() => scroll("right")}
            className="px-3 py-1 bg-gray-800 rounded text-[14px] sm:text-[15px] inter-font font-[400] hover:bg-gray-700 transition"
          >
            ▶
          </button>
        </div>
      </div>

      <hr className="border-gray-700 mb-6" />

      {/* FRONT + SELECT */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] inter-font font-[400]">Front</h3>

        <select className="bg-black border border-gray-600 px-2 rounded w-[150px] h-[40px] text-[14px] sm:text-[15px] inter-font font-[400] text-white">
          <option>veneered</option>
        </select>
      </div>

      {/* COLORS */}
      <div className="flex gap-4">
        <div
          onClick={() => setColor("#c19a6b")}
          className="w-12 h-12 rounded-full border-2 border-orange-500 cursor-pointer"
          style={{ background: "#c19a6b" }}
        ></div>

        <div
          onClick={() => setColor("#5a3e2b")}
          className="w-12 h-12 rounded-full cursor-pointer"
          style={{ background: "#5a3e2b" }}
        ></div>

        <div
          onClick={() => setColor("#e6d3b3")}
          className="w-12 h-12 rounded-full cursor-pointer"
          style={{ background: "#e6d3b3" }}
        ></div>
      </div>
    </div>
  );
}

// Main Component
export default function Product3DViewer() {
  const [scale, setScale] = useState(1);
  const [color, setColor] = useState("#c19a6b");

  return (
    <section className="w-full bg-[#3D3D3D] px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[48px] sm:py-[64px] lg:py-[80px]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[35px] axiforma font-bold mb-3 text-white">
            Product Profiles
          </h2>
          <p className="text-[14px] sm:text-[15px] inter-font font-[400] text-gray-300 leading-relaxed max-w-md">
            A linear grooved acoustic panel is one of the most commonly used
            multi-groove panels. Suitable for auditoriums, lecture halls,
            conference rooms, and public buildings.
          </p>
          <div className="mt-4 text-[14px] sm:text-[15px] inter-font font-[400] text-gray-400">
            📏 30 x 30 cm
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT SIDE - 3D View */}
          <div className="w-full h-[400px] sm:h-[450px] lg:h-[500px] bg-transparent relative">
            <Scene scale={scale} color={color} />

            {/* ZOOM BUTTONS */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={() => setScale((prev) => Math.max(prev - 0.2, 0.2))}
                className="w-10 h-10 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition text-[18px] sm:text-[20px] inter-font font-bold"
              >
                -
              </button>

              <button
                onClick={() => setScale((prev) => Math.min(prev + 0.2, 2))}
                className="w-10 h-10 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition text-[18px] sm:text-[20px] inter-font font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - UI Controls */}
          <div className="w-full">
            <UI setColor={setColor} />
          </div>
        </div>
      </div>
    </section>
  );
}
