import Features from "../../components/ui/features";
import { ShoppingBag, Zap, Settings, Globe } from 'lucide-react';

const ServiceCapabilities = () => {
  const features = [
    {
      id: 1,
      icon: ShoppingBag,
      title: 'Custom Shopify Themes',
      description: 'Pixel-perfect themes built from scratch or customized from existing ones. Fast, accessible, and brand-aligned.',
      image: '/shopify project/shape-curv.com.png',
    },
    {
      id: 2,
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Strategic UX improvements, A/B testing, and checkout flow refinement that turn visitors into paying customers.',
      image: '/service image/ui-ux.png',
    },
    {
      id: 3,
      icon: Settings,
      title: 'App & Integration Setup',
      description: 'Seamless integration of Shopify apps, email platforms, CRMs, and third-party tools into your store ecosystem.',
      image: '/service image/Integrations.png',
    },
    {
      id: 4,
      icon: Globe,
      title: 'Headless Commerce',
      description: 'Decoupled React frontends powered by Shopify Storefront API for blazing-fast, fully custom storefronts.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section className="bg-soft-blue py-12 md:py-16">
      <Features
        label="Built for Results"
        heading="Every Service, Expertly Delivered"
        features={features}
        progressGradientLight="bg-gradient-to-r from-sky-400 to-sky-500"
      />
    </section>
  );
};

export default ServiceCapabilities;
