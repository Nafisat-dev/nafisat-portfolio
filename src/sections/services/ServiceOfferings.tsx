import GradientCardShowcase from "../../components/ui/gradient-card-showcase";

const ServiceOfferings = () => {
  const cards = [
    {
      title: 'Shopify Development',
      desc: 'Custom Shopify themes, app integrations, speed optimization, and full store builds from scratch — designed to convert.',
      gradientFrom: '#5AA8D6',
      gradientTo: '#3D4164',
    },
    {
      title: 'Dropshipping Stores',
      desc: 'Fully automated dropshipping setups with DSers, AutoDS, and supplier integrations. Launch your store with zero inventory headaches.',
      gradientFrom: '#3D4164',
      gradientTo: '#5AA8D6',
    },
    {
      title: 'React Storefronts',
      desc: 'Headless commerce with React and Shopify Storefront API. Maximum performance, full design flexibility, no Liquid limitations.',
      gradientFrom: '#5AA8D6',
      gradientTo: '#88b4c8',
    },
  ];

  return (
    <section className="bg-navy py-12 md:py-16">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">What I Build</h2>
      </div>
      <GradientCardShowcase cards={cards} />
    </section>
  );
};

export default ServiceOfferings;
