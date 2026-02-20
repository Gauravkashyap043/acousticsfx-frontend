"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchContent, type ContentMap } from "@/lib/content-api";
import { fetchFooterLinks, type FooterLink } from "@/lib/footer-api";
import SocialIcons from "@/components/shared/SocialIcons";

const CONTENT_KEYS = [
  "footer.about",
  "footer.copyright",
  "footer.contactEmail",
  "footer.contactAddress1",
  "footer.contactAddress2",
];

const DEFAULTS: Record<string, string> = {
  "footer.about": "Premium acoustic solutions blending cutting-edge sound control with elegant design",
  "footer.copyright": `© Copyright ${new Date().getFullYear()} FX Acoustics Inc. — All Rights Reserved.`,
  "footer.contactEmail": "info@fxacoustics.com",
  "footer.contactAddress1": "",
  "footer.contactAddress2": "",
};

const FALLBACK_SERVICES: FooterLink[] = [
  { _id: "1", section: "services", label: "Acoustic Solution", href: "/products/acoustic" },
  { _id: "2", section: "services", label: "Sound Proofing", href: "/products" },
  { _id: "3", section: "services", label: "Floor Solution", href: "/products" },
];

const FALLBACK_RESOURCES: FooterLink[] = [
  { _id: "1", section: "resources", label: "Case Study", href: "/resources/casestudy" },
  { _id: "2", section: "resources", label: "Careers", href: "/contactus" },
  { _id: "3", section: "resources", label: "FX Acoustic In News", href: "/resources?tab=blogs" },
  { _id: "4", section: "resources", label: "Blogs", href: "/resources?tab=blogs" },
];

function val(c: ContentMap, key: string) {
  return c[key]?.value ?? DEFAULTS[key] ?? "";
}

export default function Footer() {
  const [content, setContent] = useState<ContentMap>({});
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [resources, setResources] = useState(FALLBACK_RESOURCES);

  useEffect(() => {
    fetchContent(CONTENT_KEYS).then(setContent).catch(console.error);
    fetchFooterLinks()
      .then(({ services: s, resources: r }) => {
        if (s.length > 0) setServices(s);
        if (r.length > 0) setResources(r);
      })
      .catch(console.error);
  }, []);

  return (
    <footer className="w-full bg-white">

      {/* TOP FOOTER */}
      <div className="px-6 sm:px-10 lg:px-[100px] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[90px]">

          {/* LOGO + ABOUT */}
          <div className="text-left">
            <Image
              src="/assets/home/Group 34.svg"
              alt="FX Acoustic Inc"
              width={210}
              height={50}
              className="mb-4"
            />
            <p className="text-[18px] inter-font font-[500] text-gray-700 leading-relaxed mb-6 text-left">
              {val(content, "footer.about")}
            </p>
            <SocialIcons direction="horizontal" variant="filled" />
          </div>

          {/* OUR SERVICES */}
          <div className="text-left">
            <h4 className="font-semibold inter-font text-[24px] mb-4 text-left">Our Services</h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700 text-left">
              {services.map((s) =>
                s.href ? (
                  <li key={s._id}><Link href={s.href} className="hover:underline text-gray-700">{s.label}</Link></li>
                ) : (
                  <li key={s._id}>{s.label}</li>
                )
              )}
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="text-left">
            <h4 className="font-semibold inter-font text-[24px] mb-4 text-left">Resources</h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700 text-left">
              {resources.map((r) =>
                r.href ? (
                  <li key={r._id}><Link href={r.href} className="hover:underline text-gray-700">{r.label}</Link></li>
                ) : (
                  <li key={r._id}>{r.label}</li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-left">
            <h4 className="font-semibold inter-font text-[24px] mb-4 text-left">Contact Us</h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700 text-left">
              <li>
                <a href={`mailto:${val(content, "footer.contactEmail")}`} className="hover:underline text-gray-700">
                  {val(content, "footer.contactEmail")}
                </a>
              </li>
              <li>{val(content, "footer.contactAddress1")}</li>
              <li>{val(content, "footer.contactAddress2")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#1f5e67] text-white px-6 sm:px-10 lg:px-[100px] py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[15px] axiforma font-[500] text-left">
          <span className="text-left">{val(content, "footer.copyright")}</span>
          <div className="flex gap-6 sm:gap-8 text-[15px] axiforma font-[500] text-left">
            <Link href="/contactus" className="hover:underline text-left cursor-pointer">Privacy Policy</Link>
            <Link href="/contactus" className="hover:underline text-left cursor-pointer">Terms & Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
