import Image from "next/image";

const products = [
  {
    img: "/assets/product/df77e972b0378fa3118e391343c2d897dc4f0674.jpg",
    title: "Slat",
    desc: "Acoustic wall panels made of wood slats reverberation and spreading sound waves better than plain surfaces and can create warm acoustic spaces.",
  },
  {
    img: "/assets/product/9b7e85e82987d46515b9ced83f9173e3859916bc.jpg",
    title: "Slat",
    desc: "Acoustic wall panels made of wood slats reverberation and spreading sound waves better than plain surfaces and can create warm acoustic spaces.",
  },
  {
    img: "/assets/product/5a3611e63e5e59fe36b4503b6deca73408c7e27a (1).png",
    title: "Slat",
    desc: "Acoustic wall panels made of wood slats reverberation and spreading sound waves better than plain surfaces and can create warm acoustic spaces.",
  },
  {
    img: "/assets/product/9b7e85e82987d46515b9ced83f9173e3859916bc.jpg",
    title: "Slat",
    desc: "Acoustic wall panels made of wood slats reverberation and spreading sound waves better than plain surfaces and can create warm acoustic spaces.",
  },
];

export default function RelatedProducts() {
  return (
    <section className="w-full bg-[#faf7f2] pl-[100px] pr-0 py-[90px]">

      
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div className="max-w-3xl">
          <p className="text-[16px] font-bold worksans-font text-gray-400 mb-2">Relevant Products</p>
          <h2 className="text-[34px] font-bold axiforma leading-snug mb-4">
            We Cut Through Noise to create architects <br />
            that are thoughtful, timeless & impactful.
          </h2>
          <p className="text-[14px] inter-font font-[400] text-gray-600">
            Our inspired solutions have helped shape modern acoustic design.
            Alluring spaces, internationally recognised for their architectural
            elegance and exceptional sound management live here.
          </p>
        </div>

        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition">
          VIEW ALL PRODUCTS →
        </button>
      </div>

      {/* Products */}
      <div className="flex gap-8 overflow-hidden">
        {products.map((item, index) => (
          <div
            key={index}
            className="w-[400px] h-[550px] bg-white rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="h-[320px] relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-[30px] manrope font-bold mb-3">{item.title}</h3>
              <p className="text-[16px] manrope font-[400] text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-8 text-xl">
        <button className="hover:text-gray-500 transition">→</button>
      </div>

    </section>
  );
}  