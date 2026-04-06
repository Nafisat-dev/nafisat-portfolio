'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AccordionItem {
  title: string;
  subtitle?: string;
  description?: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  services?: string[];
  content?: string;
}

interface AccordionProps {
  accordionItems: AccordionItem[];
  className?: string;
}

export function Accordion({ accordionItems, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            className="border border-[#CDE3F0] rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm"
          >
            <div
              className="flex items-center justify-between p-5 cursor-pointer hover:bg-soft-blue/50 transition-colors duration-200"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBg}`}
                >
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-navy text-base">
                    {item.title}
                  </h3>
                  {(item.subtitle || item.description) && (
                    <p className="text-sm text-slate mt-0.5">
                      {item.subtitle || item.description}
                    </p>
                  )}
                </div>
              </div>
              <motion.div
                animate={{ rotate: openItems.includes(index) ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 rounded-full border border-[#CDE3F0] flex items-center justify-center flex-shrink-0 ml-4"
              >
                <Plus className="w-4 h-4 text-slate" />
              </motion.div>
            </div>

            <AnimatePresence>
              {openItems.includes(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0 border-t border-[#CDE3F0]">
                    {item.services ? (
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.services.map((service, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate"
                          >
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mt-4 text-sm text-slate leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

// Named export for Nafisat's specific service list data as requested
import {
  ShoppingBag, Package, Code, TrendingUp,
  Mail, Plug, Zap, Paintbrush, Wrench
} from 'lucide-react';

export function AccordionComponent() {
  const accordionItems = [
    {
      title: 'Shopify Store Development',
      subtitle: 'End-to-end store builds and customizations',
      icon: ShoppingBag,
      iconBg: 'bg-blue-100',
      iconColor: 'text-sky',
      services: [
        'Custom Shopify store setup from scratch',
        'Shopify theme customization (Dawn, Impulse, Debut)',
        'Custom Shopify theme development with Liquid',
        'Shopify store redesign & migration',
        'Shopify 2.0 upgrade & section conversion',
        'Multi-currency & multi-language setup',
        'Shopify Plus development',
      ],
    },
    {
      title: 'Dropshipping',
      subtitle: 'Fully automated dropshipping operations',
      icon: Package,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      services: [
        'Full dropshipping store setup (DSers, AutoDS, Zendrop)',
        'Winning product research & niche selection',
        'Supplier sourcing & integration',
        'Order fulfillment automation',
        'Print-on-Demand setup (Printify, Printful)',
      ],
    },
    {
      title: 'Headless & React Commerce',
      subtitle: 'Custom React frontends powered by Shopify',
      icon: Code,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      services: [
        'Headless Shopify with React / Next.js',
        'Shopify Storefront API integration',
        'Custom React product pages & collections',
        'Hydrogen / Oxygen store development',
      ],
    },
    {
      title: 'Conversion & Growth',
      subtitle: 'Turn more visitors into paying customers',
      icon: TrendingUp,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
      services: [
        'Conversion rate optimization (CRO) audit',
        'Checkout flow optimization',
        'Upsell & cross-sell setup (ReConvert, Zipify)',
        'Landing page design for campaigns',
        'A/B testing setup',
      ],
    },
    {
      title: 'Marketing & Retention',
      subtitle: 'Automated flows that bring customers back',
      icon: Mail,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-500',
      services: [
        'Klaviyo email flow setup (welcome, abandoned cart, post-purchase)',
        'SMS marketing integration (Postscript, Attentive)',
        'Loyalty & rewards setup (Smile.io, LoyaltyLion)',
        'Subscription setup (Recharge, Bold Subscriptions)',
      ],
    },
    {
      title: 'Apps & Integrations',
      subtitle: 'Connect your store to any tool or platform',
      icon: Plug,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      services: [
        'Shopify app installation & configuration',
        'CRM integration (HubSpot, Klaviyo)',
        'Inventory & ERP sync (Stocky, Cin7)',
        'Review app setup (Judge.me, Okendo, Stamped)',
        'Live chat & helpdesk (Gorgias, Tidio)',
      ],
    },
    {
      title: 'Performance & SEO',
      subtitle: 'Faster stores that rank and convert',
      icon: Zap,
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky',
      services: [
        'Shopify speed optimization (Core Web Vitals)',
        'On-page SEO setup & schema markup',
        'Image compression & lazy loading',
        'Shopify sitemap & redirect management',
        'Google Analytics 4 & Meta Pixel setup',
      ],
    },
    {
      title: 'Design',
      subtitle: 'Beautiful storefronts that reflect your brand',
      icon: Paintbrush,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-500',
      services: [
        'Store UI/UX audit & redesign',
        'Product page design optimization',
        'Homepage & collection page design',
        'Mobile responsiveness fixes',
        'Brand identity integration into store',
      ],
    },
    {
      title: 'Maintenance & Support',
      subtitle: 'Ongoing care so your store never skips a beat',
      icon: Wrench,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-500',
      services: [
        'Monthly Shopify store maintenance retainer',
        'Bug fixes & troubleshooting',
        'Post-launch support packages',
        'Store health check & audit report',
        'Theme update & compatibility fixes',
      ],
    },
  ];

  return <Accordion accordionItems={accordionItems} />;
}

// For backward compatibility with ServiceFAQ
export default Accordion;
