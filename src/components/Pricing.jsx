// File: src/components/Pricing.jsx
const pricing = [
    {
      plan: 'Basic',
      price: '$29/mo',
      features: [
        'Access to consultation resources',
        'Email support',
        'Basic analytics dashboard'
      ]
    },
    {
      plan: 'Pro',
      price: '$59/mo',
      features: [
        'All features in Basic',
        'Priority customer support',
        'Advanced performance reports',
        'Landing page optimization tools'
      ]
    },
    {
      plan: 'Enterprise',
      price: '$99/mo',
      features: [
        'All Pro features included',
        'Dedicated account manager',
        'Custom strategy planning',
        'Full marketing campaign management'
      ]
    }
  ];
  
  export default function Pricing() {
    return (
      <section className="py-20 px-6 bg-blue-50" id="pricing">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">
          Our Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricing.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-blue-100 shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-center flex item-center justify-between flex-col"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-1">{p.plan}</h3>
              <p className="text-4xl font-bold text-gray-900 mb-4">{p.price}</p>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base mb-6">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-center justify-center gap-2">
                    <span className="text-green-600 font-bold">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300">
                Choose {p.plan}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }