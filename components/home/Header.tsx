"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [openProducts, setOpenProducts] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="px-[200px] py-4 flex items-center">

        {/* LEFT : LOGO */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/home/Group 34.svg"
            alt="FX Acoustic Inc"
            width={210}
            height={50}
            priority
          />
        </div>

        {/* CENTER : NAV */}
        <nav className="flex-1 flex justify-center">
          <ul className="hidden md:flex items-center gap-[55px] text-sm font-medium text-gray-800">

            <li>
              <Link href="/about" className="hover:text-orange-500 transition">
                About
              </Link>
            </li>

            {/* OUR PRODUCTS */}
            <li
              className="relative"
              onMouseEnter={() => setOpenProducts(true)}
              onMouseLeave={() => setOpenProducts(false)}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1 transition
                  ${pathname?.startsWith("/products")
                    ? "text-orange-500"
                    : "hover:text-orange-500"
                  }`}
              >
                Our Products
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openProducts ? "rotate-180" : ""}`}
                />
              </Link>

              {openProducts && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[28px] bg-white border shadow-xl w-[320px] p-5 z-40">
                  <h3 className="text-[24px] font-[400] mb-4">Our Products</h3>

                  {[
                    { name: "Acoustic Solutions", link: "/products/acoustic-solutions" },
                    { name: "Flooring Solutions", link: "/products/flooring-solutions" },
                    { name: "Noise Solution", link: "/products/noise-solutions" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="group flex items-center justify-between px-4 py-3 border-b hover:bg-[#FFF5EB] transition"
                    >
                      <span className="font-medium">{item.name}</span>

                      <div className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500 group-hover:bg-orange-500 transition">
                        <Image
                          src="/home/SVG (1).svg"
                          alt="arrow"
                          width={16}
                          height={16}
                          className="
                            transition-all duration-300
                            [filter:invert(56%)_sepia(88%)_saturate(2171%)_hue-rotate(7deg)]
                            group-hover:rotate-45
                            group-hover:brightness-0
                            group-hover:invert
                          "
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {/* RESOURCES */}
            <li
              className="relative"
              onMouseEnter={() => setOpenResources(true)}
              onMouseLeave={() => setOpenResources(false)}
            >
              <Link
                href="/resources"
                className={`flex items-center gap-1 transition
                  ${pathname?.startsWith("/resources")
                    ? "text-blue-600"
                    : "hover:text-blue-500"
                  }`}
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform ${openResources ? "rotate-180" : ""}`}
                />
              </Link>

              {openResources && (
                <div className="absolute left-1/2 -translate-x-1/2 top-[88px] bg-white border shadow-lg w-[280px] p-6 z-40">
                  <h3 className="text-[24px] font-[400] mb-4">Resources</h3>

                  {[
                    { name: "Blogs & Articles", link: "/resources?tab=blogs" },
                    { name: "Quasmo In News", link: "/resources?tab=news" },
                    { name: "Events", link: "/resources?tab=events" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="group flex items-center justify-between px-3 py-3 hover:bg-[#eae9ff] transition"
                    >
                      <span className="font-medium">{item.name}</span>

                      <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#316CE6] group-hover:bg-[#316CE6] transition">
                        <Image
                          src="/home/SVG (1).svg"
                          alt="arrow"
                          width={16}
                          height={16}
                          className="
                            transition-all duration-300
                            [filter:invert(35%)_sepia(89%)_saturate(2034%)_hue-rotate(206deg)]
                            group-hover:rotate-45
                            group-hover:brightness-0
                            group-hover:invert
                          "
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link href="/contactus" className="hover:text-orange-500 transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT : CTA */}
        <div className="flex-shrink-0">
          <Link
            href="/get-quote"
            className="bg-[#EA8E39] text-white px-4 py-3 text-sm font-[400] hover:bg-orange-600 transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
