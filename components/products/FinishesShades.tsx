import Image from "next/image";

const finishes = [
  {
    img: "/assets/product/7ba706d599360a584932e331ab227b8039dcdef9.jpg",
    code: "31559",
    name: "Natural Teak",
    desc: "The natural look for your surface. Our versatile real wood options.",
  },
  {
    img: "/assets/product/ffa5f9142dfc37dbb26510ea828ddd1945cf7775.jpg",
    code: "31608",
    name: "Douglas Pine",
    desc: "The serene texture you can rely on. Choose the ideal individuality.",
  },
  {
    img: "/assets/product/b0b48f3ccdf79379c602a496f1ec063421025d21.jpg",
    code: "31458",
    name: "Sonoma Oak Light",
    desc: "Continuous pressure laminate is extremely resistant to scratches.",
  },
  {
    img: "/assets/product/7ba706d599360a584932e331ab227b8039dcdef9.jpg",
    code: "31458",
    name: "Walnut Dark",
    desc: "Rich, deep tones for premium architectural interiors.",
  },
];

export default function FinishesShades() {
  return (
    <section className="w-full bg-[#faf7f2] pl-[100px] py-[80px]">
      
      <div className="flex gap-20">
        
        {/* Left Content */}
        <div className="max-w-xs">
          <h2 className="text-[34px] inter-font font-medium mb-4">
            Finishes & Shades
          </h2>
          <p className="text-[16px] inter-font font-[500] text-gray-600 mb-8">
            Our inspired solutions have helped shape modern acoustic design.
            Alluring spaces, internationally recognised for their architectural
            elegance and exceptional sound management live here.
          </p>

          {/* Arrows */}
          <div className="flex gap-6 text-xl">
            <button className="hover:text-gray-500">‹</button>
            <button className="hover:text-gray-500">›</button>
          </div>
        </div>

        {/* Slider */}
        <div className="flex gap-8 overflow-hidden">
          {finishes.map((item, index) => (
            <div key={index} className="min-w-[200px]">
              
              {/* Slide Image */}
              <div className="w-[200px] h-[200px] rounded-lg overflow-hidden mb-4 relative bg-white">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-[24px] inter-font font-[400] text-gray-400 mb-1">
                {item.code}
              </p>
              <p className="text-[24px] inter-font font-[400] mb-1">
                {item.name}
              </p>
              <p className="text-[15px] inter-font font-[500] text-gray-500 leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
