import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* TOP FOOTER */}
      <div className="px-[100px] py-16">
        <div className="grid grid-cols-4 gap-[90px]">
          
          {/* LOGO + ABOUT */}
          <div>
            <Image
              src="/assets/home/Group 34.svg"
              alt="FX Acoustic Inc"
              width={210}
              height={50}
              className="mb-4"
            />
            <p className="text-[18px] inter-font font-[500] text-gray-700 leading-relaxed mb-6">
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
          <div>
            <h4 className="font-semibold inter-font text-[24px] mb-4">Our Services</h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700">
              <li>Acoustic Solution</li>
              <li>Sound Proofing</li>
              <li>Floor Solution</li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold inter-font text-[24px] mb-4">Resources</h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700">
              <li>Case Study</li>
              <li>Careers</li>
              <li>FX Acoustic In News</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold inter-font text-[24px] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-[18px] inter-font font-[500] text-gray-700">
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
      <div className="bg-[#1f5e67] text-white px-[100px] py-4">
        <div className="flex items-center justify-between text-[15px] axiforma font-[500]">
          <span>© Copyright 2025 FX Acoustic Solution — All Rights Reserved.</span>
          <div className="flex gap-8 text-[15px] axiforma font-[500]">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
