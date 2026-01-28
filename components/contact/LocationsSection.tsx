"use client";

export default function LocationsSection() {
  return (
    <section className="px-[50px] py-[100px] bg-white">
      {/* ================= Heading ================= */}
      <div className="mb-14">
        <h2 className="text-3xl font-semibold text-[#111] mb-2">
          A Space That Inspires
        </h2>
        <p className="text-gray-500">
          You wish to visit our place and sit with us on a coffee.
        </p>
      </div>

      {/* ================= Cards ================= */}
      <div className="grid grid-cols-3 gap-8">
        {/* Card 1 – Highlighted */}
        <LocationCard
          title="Corporate Office"
          highlight
          items={[
            {
              label: "Location",
              value:
                "3688, Sector 46-C, Chandigarh-160047. INDIA.",
            },
            {
              label: "Email",
              value: "sales@acousticsfx.com",
            },
            {
              label: "Phone",
              value: "+91 9967 034 958",
            },
          ]}
        />

        {/* Card 2 */}
        <LocationCard
          title="Factory"
          items={[
            {
              label: "Location",
              value:
                "347-350B, HSIIDC Industrial Estate, Saha, Haryana-133104. INDIA.",
            },
            {
              label: "Email",
              value: "sales@acousticsfx.com",
            },
            {
              label: "Phone",
              value:
                "+91 8599 999 347, +91 9996 119 099",
            },
          ]}
        />

        {/* Card 3 */}
        <LocationCard
          title="Mumbai Office"
          items={[
            {
              label: "Location",
              value:
                "Plot-5, A301 Indusagar, Sector-7, Dr. B.A. Road, Charkop, Kandivali (West), Mumbai-400 067, Maharashtra, INDIA.",
            },
            {
              label: "Contact",
              value: "Mr. Sunil Sawant",
            },
            {
              label: "Phone",
              value: "+91 9967 034 958",
            },
          ]}
        />
      </div>
    </section>
  );
}

/* ================= Reusable Card ================= */
function LocationCard({
  title,
  items,
  highlight = false,
}: {
  title: string;
  items: { label: string; value: string }[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`
        p-8 rounded-lg
        bg-gray-50
        border
        ${highlight
          ? "border-orange-400"
          : "border-gray-200"
        }
        relative
        overflow-hidden
      `}
    >
      {/* subtle diagonal pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.03)_50%,rgba(0,0,0,0.03)_75%,transparent_75%,transparent)] bg-[length:24px_24px] pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-[#111] mb-4">
          {title}
        </h3>

        <div className="space-y-3 text-sm text-gray-600">
          {items.map((item, idx) => (
            <p key={idx}>
              <span className="font-medium text-gray-700">
                {item.label}:
              </span>{" "}
              {item.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
