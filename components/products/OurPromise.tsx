export default function OurPromise() {
  return (
    <section className="w-full bg-white">
      <div className="px-[50px] py-[100px]">

        {/* Heading */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-orange-500 mb-4">Our Promis</p>

          <h2 className="text-4xl font-medium text-orange-500 leading-snug mb-6">
            We Serve Quality and <br /> Premium
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Businesses on FXAcoustic Solution that make over $50,000 per month
            qualify for account management services. AccountManagers at Whop
            are 100% free for businesses.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-4 gap-16">

          {/* Item 1 */}
          <div>
            <div className="w-12 h-12 mb-6 text-orange-500">
              📈
            </div>
            <h4 className="text-sm font-medium mb-3">Growth</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              At FX Acoustic, Account Managers focus on boosting your growth,
              contributing millions in revenue for sellers annually through
              strategic planning and growth hacks.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="w-12 h-12 mb-6 text-orange-500">
              🎧
            </div>
            <h4 className="text-sm font-medium mb-3">
              Dedicated support contact
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Account Managers are available 24/7 via call, email, or text to
              assist with any business or personal emergencies you might face.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="w-12 h-12 mb-6 text-orange-500">
              👁️
            </div>
            <h4 className="text-sm font-medium mb-3">Exposure</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Our Account Managers will leverage the power of Whop’s vast
              network to enhance your exposure on social media platforms.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <div className="w-12 h-12 mb-6 text-orange-500">
              🕒
            </div>
            <h4 className="text-sm font-medium mb-3">
              Services & reporting
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Account Managers will provide regular reports (weekly to yearly)
              to highlight insights and track your business progress.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
