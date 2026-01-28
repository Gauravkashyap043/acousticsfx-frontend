export default function StatsSection() {
    return (
      <section className="bg-[#1F6775] text-white px-[200px] py-10">
        <div className="grid grid-cols-5 gap-6 items-center">
          {/* Left Text */}
          <div>
            <h3 className="font-bold poppins-font text-[30px]">This is Our result</h3>
            <p className="text-[17px] text-white/80 poppins-font font-[400 mt-2">
              How capable we are at work shines through in every endeavor.
            </p>
          </div>
  
          {/* Stats */}
          <div>
            <p className="text-3xl font-[700] poppins-font text-[60px]">321+</p>
            <p className="text-[17px] text-white/80 poppins-font font-[400">Acoustic Products</p>
          </div>
  
          <div>
            <p className="text-3xl font-[700] poppins-font text-[60px]">13K+</p>
            <p className="text-[17px] text-white/80 poppins-font font-[400">Sq. Ft. Delivered</p>
          </div>
  
          <div>
            <p className="text-3xl font-[700] poppins-font text-[60px]">25+</p>
            <p className="text-[17px] text-white/80 poppins-font font-[400">Industry Awards</p>
          </div>
  
          <div>
            <p className="text-3xl font-[700] poppins-font text-[60px]">15+</p>
            <p className="text-[17px] text-white/80 poppins-font font-[400">Years Experience</p>
          </div>
        </div>
      </section>
    );
  }
  