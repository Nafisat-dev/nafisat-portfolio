import CircularGallery from "../../components/ui/circular-gallery";

const ServiceTechStack = () => {
  const galleryData = [
    { common: "Shopify", binomial: "Core Platform", photo: { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&auto=format&fit=crop&q=80", text: "Shopify dashboard", by: "Unsplash" } },
    { common: "React", binomial: "Frontend Library", photo: { url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop&q=80", text: "React code", by: "Unsplash" } },
    { common: "Tailwind CSS", binomial: "Styling Framework", photo: { url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&auto=format&fit=crop&q=80", text: "CSS styling", by: "Unsplash" } },
    { common: "Klaviyo", binomial: "Email Marketing", photo: { url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&auto=format&fit=crop&q=80", text: "Email marketing", by: "Unsplash" } },
    { common: "DSers / AutoDS", binomial: "Dropshipping Automation", photo: { url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&auto=format&fit=crop&q=80", text: "Automation tools", by: "Unsplash" } },
    { common: "Recharge", binomial: "Subscriptions", photo: { url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&auto=format&fit=crop&q=80", text: "Subscription management", by: "Unsplash" } },
    { common: "Figma", binomial: "Design Tool", photo: { url: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&auto=format&fit=crop&q=80", text: "UI design", by: "Unsplash" } },
    { common: "Node.js", binomial: "Backend Runtime", photo: { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80", text: "Server code", by: "Unsplash" } },
  ];

  return (
    <section className="bg-navy py-12 md:py-16 text-white">
      <CircularGallery galleryData={galleryData} className="bg-navy" />
    </section>
  );
};

export default ServiceTechStack;
