import { motion } from 'motion/react';
import { Check, Zap, Rocket, Building2, Star } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for enthusiasts exploring the AI world.',
    features: [
      'Basic directory access',
      'Save up to 5 tools',
      'Weekly newsletter',
      'Community access'
    ],
    icon: Zap,
    color: 'text-blue-400',
    btnClass: 'glass'
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'Everything you need for serious productivity.',
    features: [
      'Early access to new tools',
      'Unlimited saved tools',
      'Advanced filtering tools',
      'API access (1k req/mo)',
      'Member-only discounts',
      'Priority support'
    ],
    icon: Rocket,
    popular: true,
    color: 'text-purple-400',
    btnClass: 'bg-blue-600 shadow-xl shadow-blue-600/30'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Bespoke solutions for large teams and companies.',
    features: [
      'Bulk licensing for teams',
      'Custom API integrations',
      'Unlimited API access',
      'Dedicated account manager',
      'SLA & compliance support',
      'Personalized tool research'
    ],
    icon: Building2,
    color: 'text-emerald-400',
    btnClass: 'glass'
  }
];

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Choose the plan that fits your needs. Scale your productivity with our premium 
          curated data and tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`relative glass p-10 rounded-3xl border ${
              plan.popular ? 'border-blue-500/50 ring-1 ring-blue-500/50' : 'border-white/10'
            } flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-10 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-blue-600/20">
                <Star size={12} fill="currentColor" /> Most Popular
              </div>
            )}
            
            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 ${plan.color}`}>
              <plan.icon size={28} />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl md:text-5xl font-black">{plan.price}</span>
              {plan.price !== 'Custom' && <span className="text-gray-500 font-medium">/mo</span>}
            </div>
            
            <p className="text-gray-400 text-sm mb-10 leading-relaxed">
              {plan.description}
            </p>
            
            <ul className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-blue-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.btnClass}`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      {/* Comparisons */}
      <div className="glass p-12 rounded-3xl border border-white/5 text-center">
        <h3 className="text-2xl font-bold mb-4">Trust by 50,000+ professionals</h3>
        <p className="text-gray-500 text-sm mb-12">See why businesses from startups to Fortune 500 companies use NexusAI.</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
          {['GOOGLE', 'MICROSOFT', 'OPENAI', 'NOTION', 'ANTHROPIC'].map(logo => (
            <span key={logo} className="text-2xl font-black font-display tracking-widest">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
