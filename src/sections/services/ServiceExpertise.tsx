import RadialOrbitalTimeline from "../../components/ui/radial-orbital-timeline";
import { ShoppingBag, Zap, Code, Globe, RefreshCw, BarChart } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: 'completed' | 'in-progress' | 'blocked';
  energy: number;
}

const ServiceExpertise = () => {
  const timelineData: TimelineItem[] = [
    { id: 1, title: "Shopify Liquid", date: "Core Skill", content: "Deep expertise in Liquid templating for custom section and theme development.", category: "Development", icon: ShoppingBag, relatedIds: [2, 3], status: "completed", energy: 95 },
    { id: 2, title: "React & Next.js", date: "Core Skill", content: "Building headless storefronts with Shopify Storefront API and modern React patterns.", category: "Development", icon: Code, relatedIds: [1, 4], status: "completed", energy: 88 },
    { id: 3, title: "Conversion Rate Opt.", date: "Specialty", content: "UX audits, heatmap analysis, and strategic A/B testing to lift store revenue.", category: "Strategy", icon: BarChart, relatedIds: [1, 5], status: "completed", energy: 82 },
    { id: 4, title: "Headless Commerce", date: "Advanced", content: "Decoupled architecture using Shopify as a backend with custom React frontends.", category: "Development", icon: Globe, relatedIds: [2], status: "in-progress", energy: 75 },
    { id: 5, title: "Automation & Apps", date: "Specialty", content: "DSers, AutoDS, Klaviyo, Recharge — integrating the Shopify app ecosystem.", category: "Integrations", icon: Zap, relatedIds: [3, 6], status: "completed", energy: 90 },
    { id: 6, title: "Performance & SEO", date: "Ongoing", content: "Core Web Vitals optimization, lazy loading, and Shopify SEO best practices.", category: "Optimization", icon: RefreshCw, relatedIds: [5], status: "in-progress", energy: 78 },
  ];

  return (
    <section className="bg-navy py-12 md:py-16" id="skills-expertise">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-white mb-4">Skills & Expertise</h2>
      <p className="label-small text-center text-sky mb-12">Orbital View</p>
      <RadialOrbitalTimeline timelineData={timelineData} className="bg-navy" />
    </section>
  );
};

export default ServiceExpertise;
