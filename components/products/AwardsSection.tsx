import Image from "next/image";

export default function AwardsSection() {
  return (
    <section className="w-full bg-[#1F6775]">
      <div className="px-[200px] py-[100px]">

        <div className="flex items-center justify-between">

          {/* Left Vertical Text */}
          <div className="flex items-center">
            <span className="rotate-[-90deg] text-white/60 tracking-widest text-sm">
              Awards
            </span>
          </div>

          {/* Awards Items */}
          <div className="flex items-center gap-16">

            {/* Award 1 */}
            <div className="flex items-center gap-4">
              <Image
                src="/award1.png" // orange image tu khud lagayega
                alt="Award"
                width={48}
                height={48}
              />
              <div className="text-white">
                <p className="font-medium">German Design Award</p>
                <p className="text-sm text-white/70">2021</p>
              </div>
            </div>

            {/* Award 2 */}
            <div className="flex items-center gap-4">
              <Image
                src="/award2.png"
                alt="Award"
                width={48}
                height={48}
              />
              <div className="text-white">
                <p className="font-medium">Gold A’ Design Award</p>
                <p className="text-sm text-white/70">2021</p>
              </div>
            </div>

            {/* Award 3 */}
            <div className="flex items-center gap-4">
              <Image
                src="/award3.png"
                alt="Award"
                width={48}
                height={48}
              />
              <div className="text-white">
                <p className="font-medium">IF Design Award</p>
                <p className="text-sm text-white/70">2020</p>
              </div>
            </div>

            {/* Award 4 */}
            <div className="flex items-center gap-4">
              <Image
                src="/award4.png"
                alt="Award"
                width={48}
                height={48}
              />
              <div className="text-white">
                <p className="font-medium">Good Design Award</p>
                <p className="text-sm text-white/70">2019</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
