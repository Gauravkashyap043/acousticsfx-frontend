import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/animations";

const STATS = [
  { to: 321, suffix: "+", label: "Acoustic Products", delay: 0 },
  { to: 13, suffix: "K+", label: "Sq. Ft. Delivered", delay: 0.06 },
  { to: 25, suffix: "+", label: "Industry Awards", delay: 0.12 },
  { to: 15, suffix: "+", label: "Years Experience", delay: 0.18 },
] as const;

export default function StatsSection() {
  return (
    <section className="bg-[#1F6775] text-white px-4 sm:px-[40px] lg:px-[200px] py-4 sm:py-10">
      <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-2.5 sm:gap-x-6 sm:gap-y-4 lg:gap-6 items-start lg:items-center">
        {/* Intro — full width on mobile, first column on desktop */}
        <FadeIn
          direction="up"
          className="col-span-2 lg:col-span-1 w-full pb-1 lg:pb-0"
        >
          <h3 className="font-bold poppins-font text-base sm:text-[26px] lg:text-[30px] leading-snug">
            This is Our result
          </h3>
          <p className="text-xs sm:text-[16px] lg:text-[17px] text-white/80 poppins-font font-normal mt-1 sm:mt-2 leading-snug max-w-md">
            How capable we are at work shines through in every endeavor.
          </p>
        </FadeIn>

        {STATS.map((s) => (
          <StaggerItem key={s.label}>
            <div className="min-w-0">
              <p className="font-bold poppins-font text-[1.625rem] sm:text-[50px] lg:text-[60px] leading-none tracking-tight">
                <Counter
                  to={s.to}
                  suffix={s.suffix}
                  duration={1.5}
                  delay={s.delay}
                />
              </p>
              <p className="text-[11px] sm:text-[16px] lg:text-[17px] text-white/80 poppins-font font-normal mt-0.5 sm:mt-1 leading-tight">
                {s.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
