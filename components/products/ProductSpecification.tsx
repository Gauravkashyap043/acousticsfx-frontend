export default function ProductSpecification() {
  return (
    <section className="w-full bg-[#faf7f2] px-[100px] py-[100px] text-[#1c1c1c]">
      
      {/* Heading */}
      <h2 className="text-[32px] inter-font font-medium mb-4">
        Product Specification
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-[16px] poppins-font font-[400] leading-relaxed text-gray-600 mb-10">
        High-end, high-efficiency acoustic lining system with a range of design
        and performance options. When fitted in plank form, this product creates
        an exquisite grooved look with perfect jointing. Linearlux may be used as
        a decorative lining or anywhere acoustic control is required because it
        has exceptional acoustics of its own.
      </p>

      {/* Specifications Grid */}
      <div className="grid grid-cols-2 gap-x-20 gap-y-10">

        {/* Row 1 */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-[20px] inter-font font-medium mb-2">Product</p>
          <p className="text-[20px] inter-font font-medium text-gray-600">
            A well-rounded product with great sound. That's Perfo.
          </p>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <p className="text-[20px] inter-font font-medium mb-2">Category</p>
          <p className="text-[20px] inter-font font-medium text-gray-600">
            Available as panels.
          </p>
        </div>

        {/* Row 2 */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-[20px] inter-font font-medium mb-2">Fire Rating</p>
          <p className="text-[20px] inter-font font-medium text-gray-600">
            A2, B1 or B2.
          </p>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <p className="text-[20px] inter-font font-medium mb-2">Sound absorption</p>
          <p className="text-[20px] inter-font font-medium text-gray-600">
            25%, 30%, 35%, 45%, 50%, 65%, 70%, 75%, 80%, 85% or 95%
          </p>
        </div>

        {/* Row 3 */}
        <div className="border-t border-gray-300 pt-6">
          <p className="text-[20px] inter-font font-medium mb-2">Substrate</p>
          <p className="text-[20px] inter-font font-medium text-gray-600">
            Ceiling wall, partition wall and doubling
          </p>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <p className="text-[20px] inter-font font-medium mb-2">Standard Panel Size</p>
          <p className="text-[20px] inter-font font-medium text-gray-600">
            25%, 30%, 35%, 45%, 50%, 65%, 70%, 75%, 80%, 85% or 95%
          </p>
        </div>

      </div>
    </section>
  );
}
