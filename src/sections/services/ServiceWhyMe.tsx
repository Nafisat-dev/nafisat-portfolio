import AboutUsSection from "../../components/ui/about-us-section";
import { Zap, ShoppingBag, BarChart2, Headphones, RefreshCw, Globe, Award, Users, Calendar, TrendingUp } from 'lucide-react';

const ServiceWhyMe = () => {
  const services = [
    { icon: <Zap />, title: "Fast Delivery", description: "Most projects delivered in 2–4 weeks with daily progress updates and a clear timeline from day one." },
    { icon: <ShoppingBag />, title: "Shopify Certified", description: "Deep expertise in Shopify's ecosystem — from Liquid to the Storefront API and everything in between." },
    { icon: <BarChart2 />, title: "Revenue-Focused", description: "Every design and development decision is made with conversion and revenue growth as the north star." },
    { icon: <Headphones />, title: "Clear Communication", description: "You'll always know what's happening. No ghosting, no confusion — just clear updates throughout the project." },
    { icon: <RefreshCw />, title: "Post-Launch Support", description: "30-day support included with every project. I don't disappear after launch." },
    { icon: <Globe />, title: "Global Clients", description: "I've worked with clients across Nigeria, the UK, the US, and Canada — timezone-flexible and async-friendly." },
  ];

  const stats = [
    { icon: <Award />, value: 50, label: "Stores Launched", suffix: "+" },
    { icon: <Users />, value: 40, label: "Happy Clients", suffix: "+" },
    { icon: <Calendar />, value: 3, label: "Years Experience", suffix: "+" },
    { icon: <TrendingUp />, value: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <section className="bg-soft-blue py-12 md:py-16">
      <AboutUsSection
        heading="Why Work With Me"
        description="I don't just build stores — I build stores that sell. Every project is a partnership focused on your growth."
        imageSrc="/images/nafisat-adepoju.jpg"
        services={services}
        stats={stats}
        ctaText="Start Your Project"
        ctaLink="/#contact"
      />
    </section>
  );
};

export default ServiceWhyMe;
