import type { SubProductCertification } from "@/lib/products-api";

export default function CertificationsSection({
  certifications: apiCerts,
  sectionTitle,
  sectionDescription,
}: {
  certifications?: SubProductCertification[] | null;
  sectionTitle?: string | null;
  sectionDescription?: string | null;
}) {
  const list =
    apiCerts?.filter((c) => c.name?.trim() && c.image?.trim()) ?? [];

  if (list.length === 0) {
    return null;
  }

  const title = (sectionTitle?.trim() || "Certifications").trim();
  const description = sectionDescription?.trim() ?? "";

  return (
    <section className="w-full bg-white px-[24px] sm:px-[40px] md:px-[60px] lg:px-[100px] py-[48px] sm:py-[64px] lg:py-[80px]">
      <div className="max-w-2xl mb-8 sm:mb-10">
        <h2 className="text-[28px] sm:text-[30px] lg:text-[34px] font-bold axiforma mb-3">
          {title}
        </h2>
        {description ? (
          <p className="text-[14px] sm:text-[15px] inter-font font-[400] text-gray-600">
            {description}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {list.map((item, index) => (
          <div key={`${item.image}-${index}`} className="flex flex-col items-center">
            <div className="w-[260px] sm:w-[280px] lg:w-[300px] h-[260px] sm:h-[280px] lg:h-[300px] border border-gray-200 rounded-xl flex items-center justify-center bg-white p-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- CMS URLs may be any host */}
              <img
                src={item.image}
                alt={item.name}
                width={260}
                height={260}
                className="object-contain max-h-full w-auto max-w-full"
              />
            </div>
            <p className="text-[16px] sm:text-[18px] inter-font font-[400] text-gray-500 mt-4 tracking-wide text-center">
              {item.name.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
