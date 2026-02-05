import Image from "next/image";

const substrates = [
  {
    img: "/assets/product/be727e491579451f7402ace93e95d1be77964513.png",
    size: "12, 16, 18MM",
    title: "MOISTURE RESISTANT MDF",
  },
  {
    img: "/assets/product/cb3db68b01c0ee9f5082a409ec7d9dd922c3287b.png",
    size: "12, 18MM",
    title: "FR CHARCORE MDF",
  },
  {
    img: "/assets/product/fe2b1cab933b63e7e424c0e4d1c73f0e151fc1a2.png",
    size: "12, 16, 18MM",
    title: "BLACK CORE MDF",
  },
  {
    img: "/assets/product/fe2b1cab933b63e7e424c0e4d1c73f0e151fc1a2.png",
    size: "12, 16, 18MM",
    title: "BLACK CORE MDF",
  },
];

export default function SubstratesSection() {
  return (
    <section className="w-full bg-white pl-[100px] py-[80px]">
      
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-[38px] font-bold axiforma mb-3">Substrates</h2>
        <p className="text-[15px] inter-font font-[400] text-gray-600">
          Our inspired solutions have helped shape modern acoustic design.
          Alluring spaces, internationally recognised for their architectural
          elegance and exceptional sound management live here.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-10 overflow-hidden">
        {substrates.map((item, index) => (
          <div key={index} className="min-w-[350px]">
            
            {/* Image */}
            <div className="h-[350px] rounded-xl overflow-hidden mb-4 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <p className="text-[20px] inter-font font-[400] text-gray-400 mb-1">
              {item.size}
            </p>
            <p className="text-[20px] inter-font font-[400] tracking-wide">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-8 mt-8 text-xl">
        <button className="hover:text-gray-500 transition">‹</button>
        <button className="hover:text-gray-500 transition">›</button>
      </div>

    </section>
  );
}
