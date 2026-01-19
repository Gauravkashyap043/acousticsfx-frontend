export default function StatsSection() {
    return (
      <section className="bg-teal-800 text-white px-[200px] py-10">
        <div className="grid grid-cols-5 gap-6 items-center">
          {/* Left Text */}
          <div>
            <h3 className="font-semibold">This is Our result</h3>
            <p className="text-sm text-white/80 mt-2">
              How capable we are at work shines through in every endeavor.
            </p>
          </div>
  
          {/* Stats */}
          <div>
            <p className="text-3xl font-bold">321+</p>
            <p className="text-sm text-white/80">Acoustic Products</p>
          </div>
  
          <div>
            <p className="text-3xl font-bold">13K+</p>
            <p className="text-sm text-white/80">Sq. Ft. Delivered</p>
          </div>
  
          <div>
            <p className="text-3xl font-bold">25+</p>
            <p className="text-sm text-white/80">Industry Awards</p>
          </div>
  
          <div>
            <p className="text-3xl font-bold">15+</p>
            <p className="text-sm text-white/80">Years Experience</p>
          </div>
        </div>
      </section>
    );
  }
  