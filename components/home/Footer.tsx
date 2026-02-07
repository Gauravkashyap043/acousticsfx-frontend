import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
              Its your premier destination for luxury and modern interior design
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
                <div
                  key={icon}
                  className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-sm cursor-pointer hover:bg-orange-600 transition"
                >
                  {icon[0].toUpperCase()}
                </div>
              ))}
            </div>
          </div>

          {/* OUR SERVICES */}
          <div className="text-left">
            <h4 className="font-semibold inter-font text-[24px] mb-4 text-left">
              Our Services
            </h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700 text-left">
              <li>Acoustic Solution</li>
              <li>Sound Proofing</li>
              <li>Floor Solution</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div className="text-left">
            <h4 className="font-semibold inter-font text-[24px] mb-4 text-left">
              Resources
            </h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700 text-left">
              <li>Case Study</li>
              <li>Careers</li>
              <li>FX Acoustic In News</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-left">
            <h4 className="font-semibold inter-font text-[24px] mb-4 text-left">
              Contact Us
            </h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700 text-left">
              <li>email@gmail.com</li>
              <li>
                Design Avenue Cityville, <br />
                CA 90210 United States
              </li>
              <li>
                Design Avenue Cityville, <br />
                CA 90210 United States
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#1f5e67] text-white px-6 sm:px-10 lg:px-[100px] py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[15px] axiforma font-[500] text-left">
          <span className="text-left">
            © Copyright 2025 FX Acoustic Solution — All Rights Reserved.
          </span>

          <div className="flex gap-6 sm:gap-8 text-[15px] axiforma font-[500] text-left">
            <Link href="/privacy-policy" className="hover:underline text-left">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline text-left">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
