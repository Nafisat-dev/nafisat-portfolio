import { AccordionComponent } from "../../components/ui/icon-accordion";
import { useFadeInOnScroll } from "../../hooks/useFadeInOnScroll";

const ServiceList = () => {
  const headingRef = useFadeInOnScroll<HTMLDivElement>();
  const accordionRef = useFadeInOnScroll<HTMLDivElement>();

  return (
    <section className="py-24 px-4 bg-soft-blue">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="text-center mb-14 fade-up">
          <span className="label-small mb-3 block">Full Service Menu</span>
          <h2 className="font-heading font-bold text-navy text-[clamp(28px,3.2vw,44px)]">
            Everything You Need to Sell Online
          </h2>
          <p className="text-slate text-lg mt-4 max-w-2xl mx-auto">
            From a brand new Shopify store to a fully automated dropshipping empire — 
            click any category to see exactly what's included.
          </p>
        </div>
        <div ref={accordionRef} className="fade-up">
          <AccordionComponent />
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
