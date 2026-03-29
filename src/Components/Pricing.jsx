import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    btnLabel: "Get Started Free",
    btnClass: "btn btn-primary w-full",
    popular: false,
  },
  {
    name: "Pro",
    tagline: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    btnLabel: "Start Pro Trial",
    btnClass:
      "btn btn-outline w-full border-white/60 text-white hover:bg-white/10 hover:border-white hover:text-white",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    btnLabel: "Contact Sales",
    btnClass: "btn btn-primary w-full",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-base-100 py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-base-content/50 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col flex-1 min-w-[260px] max-w-[300px] rounded-2xl p-8 gap-6 transition-all duration-300
            ${
              plan.popular
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-purple-500/30 scale-105"
                : "bg-base-100 border border-base-200 shadow-md hover:shadow-xl"
            }`}
          >
            {plan.popular && (
              <div className="badge badge-warning absolute -top-3.5 left-1/2 -translate-x-1/2 font-bold text-xs px-4 py-3 shadow whitespace-nowrap">
                MOST POPULAR
              </div>
            )}

            <div>
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p
                className={`text-xs mt-1 ${
                  plan.popular ? "text-white/70" : "text-base-content/50"
                }`}
              >
                {plan.tagline}
              </p>
            </div>

            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold leading-none">
                {plan.price}
              </span>
              <span
                className={`text-sm mb-1.5 ${
                  plan.popular ? "text-white/70" : "text-base-content/50"
                }`}
              >
                {plan.period}
              </span>
            </div>

            <ul className="flex flex-col gap-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm">
                  <Check
                    className={`w-4 h-4 ${
                      plan.popular ? "text-white" : "text-primary"
                    }`}
                  />
                  <span
                    className={
                      plan.popular ? "text-white/90" : "text-base-content/75"
                    }
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-3xl py-2.5 font-semibold transition-all duration-300
              ${
                plan.popular
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
              }`}
            >
              {plan.btnLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
