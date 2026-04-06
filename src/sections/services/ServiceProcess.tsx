import AnimatedFeatureCarousel from "../../components/ui/animated-feature-carousel";

const ServiceProcess = () => {
  const steps = [
    { id: "1", name: "Step 1", title: "Discovery Call", description: "We discuss your goals, brand, target audience, and technical requirements. I ask the right questions so I can build the right store." },
    { id: "2", name: "Step 2", title: "Design & Wireframe", description: "I map out the store structure, page layouts, and design direction — all approved by you before a single line of code is written." },
    { id: "3", name: "Step 3", title: "Development", description: "I build out the full store: theme, pages, apps, integrations, mobile optimization, and performance tuning." },
    { id: "4", name: "Step 4", title: "Launch & Handoff", description: "Final QA, store testing across devices, DNS setup, and a full walkthrough so you're confident managing your store." },
  ];

  const images = {
    alt: "Process screenshot",
    step1img1: "/service image/flowchart-workflow-process.png",
    step1img2: "/service image/flowchart-workflow-process.png",
    step2img1: "/service image/how-to-create-landing-page.png",
    step2img2: "/service image/how-to-create-landing-page.png",
    step3img: "/service image/ui-ux.png",
    step4img: "/service image/website.jpg",
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <AnimatedFeatureCarousel steps={steps} images={images} />
    </section>
  );
};

export default ServiceProcess;
