import IconAccordion from "../../components/ui/icon-accordion";
import { Clock, DollarSign, RefreshCw, ShoppingBag, Headphones, Globe } from 'lucide-react';

const ServiceFAQ = () => {
  const accordionItems = [
    { title: "How long does a Shopify store take to build", description: "Most stores are delivered in 2–4 weeks depending on complexity.", icon: Clock, iconBg: 'bg-sky-100', iconColor: 'text-sky-600', content: "A basic Shopify store takes 1–2 weeks. A full custom theme with multiple integrations typically takes 3–4 weeks. I'll give you a clear timeline during our discovery call." },
    { title: "How much does it cost", description: "Pricing depends on scope — I offer fixed-price packages and hourly rates.", icon: DollarSign, iconBg: 'bg-green-100', iconColor: 'text-green-600', content: "Basic store setups start from $500. Custom theme builds range from $1,500–$5,000+. Dropshipping setups and React storefronts are priced on scope. Contact me for a free quote." },
    { title: "Do you offer post-launch support", description: "Yes — I offer ongoing maintenance and support packages.", icon: Headphones, iconBg: 'bg-purple-100', iconColor: 'text-purple-600', content: "I offer 30-day post-launch support on all projects, plus optional monthly retainer packages for ongoing updates, speed monitoring, and app management." },
    { title: "Can you redesign my existing Shopify store", description: "Absolutely — redesigns and theme migrations are a specialty.", icon: RefreshCw, iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', content: "I can redesign your existing store without losing your products, orders, or SEO history. I work on a development theme until you approve the final result." },
    { title: "Do you work with non-Shopify platforms", description: "My focus is Shopify, but I also build React storefronts.", icon: Globe, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', content: "I specialize in Shopify and headless React commerce. If you're on WooCommerce or another platform and want to migrate to Shopify, I can handle that too." },
    { title: "What information do I need to provide", description: "Just your brand assets, products, and goals — I handle the rest.", icon: ShoppingBag, iconBg: 'bg-red-100', iconColor: 'text-red-600', content: "You'll need your logo, brand colors, product images, and copy. I'll send a detailed onboarding questionnaire after we agree on scope so nothing is missed." },
  ];

  return (
    <section className="bg-soft-blue py-12 md:py-16">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">Frequently Asked Questions</h2>
      </div>
      <IconAccordion accordionItems={accordionItems} />
    </section>
  );
};

export default ServiceFAQ;
