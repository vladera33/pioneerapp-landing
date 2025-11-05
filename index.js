export default function PioneerAppLanding() {
  return (
    <>
      {/* 1. Hero Section (Главный экран) */}
      <header className="py-20 text-center bg-gray-900 text-white">
        <h1 className="text-5xl font-extrabold mb-2">PioneerApp</h1>
        <p className="text-xl mb-4">The Financial Autopilot for Global Freelancers</p>
        <p className="text-lg font-light mb-8 italic text-blue-400">Work. Create. Grow.</p>
        <div className="space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Start Free Trial
          </button>
          <button className="bg-transparent border border-gray-400 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            See Pricing
          </button>
        </div>
      </header>

      {/* 2. Features Section (Ключевые функции LRP) */}
      <section id="features" className="py-24 bg-gray-950 text-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Smart Tax Splitter */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-orange-400">Smart Tax Splitter</h2>
            <p className="text-gray-400 mb-6">Automatically allocates every incoming payment into Revenue, Taxes, and Savings. Gain instant clarity on your available funds with our intelligent dashboard.</p>
          </div>
          
          {/* WebRTC P2P Security */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">WebRTC P2P Security</h2>
            <p className="text-gray-400 mb-6">Exchange sensitive documents securely and directly with clients using end-to-end encryption. Your files never touch PioneerApp servers.</p>
          </div>
          
          {/* Dashboard Overview */}
          <div className="md:col-span-2"> 
            <h2 className="text-3xl font-semibold mb-4">Dashboard Overview</h2>
            <p className="text-gray-400 mb-6">Monitor total income, reserved taxes, and track multi-currency balances in real-time. Get an immediate overview of your financial health and tax liability status.</p>
          </div>

        </div>
      </section>

      {/* 3. Pricing Section (Монетизация) */}
      <section id="pricing" className="py-24 bg-gray-800 text-white text-center">
          <h2 className="text-4xl font-extrabold mb-10">Simple, Transparent Pricing</h2>
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8">

              {/* План 1: Pro */}
              <div className="p-6 bg-gray-700 rounded-xl shadow-xl border border-gray-600">
                  <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
                  <p className="text-4xl font-extrabold text-green-400 mb-4">$19<span className="text-lg font-normal text-gray-400">/month</span></p>
                  <ul className="text-left space-y-2 mb-6 text-gray-300">
                      <li>✅ Smart Tax Splitter Access</li>
                      <li>✅ Unlimited WebRTC File Transfers</li>
                      <li>✅ Up to 5 Bank/Account Integrations</li>
                  </ul>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg w-full">
                      Start Pro Trial
                  </button>
              </div>

              {/* План 2: Premium (Фокус) */}
              <div className="p-8 bg-blue-600 rounded-xl shadow-2xl transform scale-105 border-4 border-yellow-400">
                  <h3 className="text-2xl font-bold mb-2">Premium (Recommended)</h3>
                  <p className="text-4xl font-extrabold text-white mb-4">$39<span className="text-lg font-normal">/month</span></p>
                  <ul className="text-left space-y-2 mb-6">
                      <li>✅ All Pro Features</li>
                      <li>✅ Multi-Jurisdictional Tax Prep</li>
                      <li>✅ Priority Support</li>
                      <li>✅ Dedicated Account Manager</li>
                  </ul>
                  <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg w-full">
                      Start Premium Trial
                  </button>
              </div>

              {/* План 3: Годовой */}
              <div className="p-6 bg-gray-700 rounded-xl shadow-xl border border-gray-600">
                  <h3 className="text-2xl font-bold mb-2">Annual Save 20%</h3>
                  <p className="text-4xl font-extrabold text-green-400 mb-4">$319<span className="text-lg font-normal text-gray-400">/year</span></p>
                  <ul className="text-left space-y-2 mb-6 text-gray-300">
                      <li>✅ All Premium Features</li>
                      <li>✅ Best for established freelancers</li>
                      <li>✅ 12 Months for the price of 10</li>
                      <li></li>
                  </ul>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg w-full">
                      Go Annual
                  </button>
              </div>

          </div>
      </section>

      {/* 4. Call to Action (Финальный призыв) */}
      <section id="cta" className="py-16 bg-gray-900 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Financial Autopilot?</h2>
          <p className="text-xl mb-6">Start managing your global income the smart way. Join our Free Trial today.</p>
          <a href="#" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-10 rounded-lg transition duration-300">
              Sign Up Now &rarr;
          </a>
          <p className="text-sm mt-3 text-gray-400">We accept all major credit and debit cards.</p>
      </section>
    </>
  );
}
