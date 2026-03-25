import type { SubProductSpec } from "@/lib/products-api";

interface ProductSpecificationProps {
  sectionTitle?: string | null;
  specDescription?: string | null;
  specs?: SubProductSpec[] | null;
}

export default function ProductSpecification({
  sectionTitle,
  specDescription,
  specs,
}: ProductSpecificationProps = {}) {
  const title = (sectionTitle?.trim() || "Product Specification").trim();
  const description = specDescription?.trim() ?? "";
  const specList = specs?.filter((s) => s.label?.trim() || s.value?.trim()) ?? [];

  if (!description && specList.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#faf7f2] px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[60px] sm:py-[80px] lg:py-[100px] text-[#1c1c1c]">
      <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] inter-font font-medium mb-4">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-[14px] sm:text-[15px] lg:text-[16px] poppins-font font-[400] leading-relaxed text-gray-600 mb-8 sm:mb-10">
          {description}
        </p>
      ) : null}
      {specList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 lg:gap-y-10">
          {specList.map((item, i) => (
            <div key={i} className="border-t border-gray-300 pt-6">
              <p className="text-[18px] sm:text-[19px] lg:text-[20px] inter-font font-medium mb-2">
                {item.label}
              </p>
              <p className="text-[18px] sm:text-[19px] lg:text-[20px] inter-font font-medium text-gray-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
