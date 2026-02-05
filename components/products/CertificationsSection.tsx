import Image from "next/image";

const certifications = [
  {
    img: "/assets/product/78fb9a2cf4635c9ef21e29a1c44b080f14d40e03.png",
    title: "GECA CERTIFIED",
  },
  {
    img: "/assets/product/cd6966f493887871fec3a09e21137d75a1dd88be.png",
    title: "FSC® CERTIFIED",
  },
  {
    img: "/assets/product/e025a5376dc9cc3b76128ff8e7e7c06cb8836889.png",
    title: "SUPPLY NATION CERTIFIED",
  },
  {
    img: "/assets/product/b75172de0f598e4ec24a902b49611492cdbe8db4.png",
    title: "SUPPLY NATION CERTIFIED",
  },
];

export default function CertificationsSection() {
  return (
    <section className="w-full bg-white px-[100px] py-[80px]">
      
      {/* Header */}
      <div className="max-w-2xl mb-10">
        <h2 className="text-[34px] font-bold axiforma mb-3">Certifications</h2>
        <p className="text-[15px] inter-font font-[400] text-gray-600">
          Our inspired solutions have helped shape modern acoustic design.
          Alluring spaces, internationally recognised for their architectural
          elegance and exceptional sound management live here.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-4 gap-8">
        {certifications.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Card */}
            <div className="w-[300px] h-[300px] border border-gray-200 rounded-xl flex items-center justify-center bg-white">
              <Image
                src={item.img}
                alt={item.title}
                width={260}
                height={260}
                className="object-cover"
              />
            </div>

            {/* Label */}
            <p className="text-[18px] inter-font font-[400] text-gray-500 mt-4 tracking-wide text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
