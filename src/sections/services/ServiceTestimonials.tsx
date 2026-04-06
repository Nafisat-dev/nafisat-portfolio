import CircularTestimonials from "../../components/ui/circular-testimonials";

const ServiceTestimonials = () => {
  const testimonials = [
    { quote: "Nafisat built our Shopify store from scratch in under 3 weeks. The design is stunning and our conversion rate jumped 40% in the first month.", name: "James Okafor", designation: "Founder, StyleHaus Lagos", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" },
    { quote: "She set up our full dropshipping operation with AutoDS and DSers. Everything is automated and running smoothly — we barely have to touch it.", name: "Rachel Kim", designation: "E-commerce Entrepreneur", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80" },
    { quote: "The headless storefront she built is the fastest Shopify store I've ever seen. Our Google PageSpeed score went from 34 to 91.", name: "Marcus Thompson", designation: "CTO, NexaCommerce", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80" },
  ];

  const colors = { name: "#3D4164", designation: "#6B6F8B", testimony: "#3D4164", arrowBackground: "#3D4164", arrowForeground: "#ECF3FD", arrowHoverBackground: "#5AA8D6" };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">What Clients Say</h2>
      </div>
      <CircularTestimonials testimonials={testimonials} colors={colors} />
    </section>
  );
};

export default ServiceTestimonials;
