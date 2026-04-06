export interface Project {
  id: number;
  title: string;
  category: 'Shopify' | 'Dropshipping' | 'React' | 'WordPress' | 'Graphic Design';
  images: string[];
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  // --- SHOPIFY (4 projects) ---
  {
    id: 1,
    title: 'Shape Curve Store',
    category: 'Shopify',
    images: [
      '/shopify project/shape-curv.com.png',
      '/shopify project/shape-curve-products.png',
      '/shopify project/shape-curve-checkouts.png',
    ],
    overview: 'Luxury shapewear brand with high-end e-commerce experience.',
    problem: 'Client needed a premium, conversion-optimized Shopify store that reflected their luxury brand and supported advanced features like product filtering and quick view.',
    solution: 'Built a custom Shopify theme with a focus on performance, UX, and brand alignment. Implemented advanced product filtering, quick view modals, and a seamless checkout experience.',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    link: 'https://shape-curve.com/',
  },
  {
    id: 2,
    title: 'Vertevia Health One product Store',
    category: 'Shopify',
    images: [
      '/shopify project/verteviahealth-1.png',
      '/shopify project/verteviahealth-products.png',
      '/shopify project/verteviahealth-checkouts.png',
    ],
    overview: 'Luxury store for a health product line.',
    problem: 'Client needed a high-converting Shopify store for their health product line with subscription options and a membership portal.',
    solution: 'Built a custom Shopify theme with integrated Recharge subscription functionality and a password-protected membership portal for exclusive content and offers.',
    techStack: ['Shopify', 'Recharge', 'React', 'Node.js'],
    link: 'https://verteviahealth.com/',
  },
  {
    id: 3,
    title: 'WearWDNC Clothing Store',
    category: 'Shopify',
    images: [
      '/shopify project/wearwdnc-1.png',
      '/shopify project/wearwdnc-products.png',
      '/shopify project/wearwdnc-checkouts.png',
    ],
    overview: 'Streetwear brand with AR try-on features.',
    problem: 'Client wanted to differentiate their streetwear brand with cutting-edge AR virtual try-on and shade matching features, but had no in-house technical expertise.',
    solution: 'Built a custom Shopify store integrated with a third-party AR try-on solution, allowing customers to virtually try on clothing items and see how they fit and look in real-time.',
    techStack: ['Shopify', 'AR Integration', 'React', 'Three.js'],
    link: 'http://wearwdnc.com/',
  },
  {
    id: 4,
    title: 'Ahbyazharhubail MakeUp Fragrance Store',
    category: 'Shopify',
    images: [
      '/store/ahbyazharhubail.png',
      '/store/ahbyazharhubail-products.png',
      '/store/ahbyazharhubail-checkout.png',
    ],
    overview: 'Makeup and fragrance store with personalized product recommendations.',
    problem: 'Customers struggled to find products that suited their skin tone and preferences.',
    solution: 'Created AI-powered recommendation engine based on customer data and product attributes.',
    techStack: ['Shopify', 'Python', 'Machine Learning', 'JavaScript'],
    link: 'https://ahbyazharhubail.com/',
  },
  // --- DROPSHIPPING (3 projects) ---
  {
    id: 5,
    title: 'CaratiJewelry Dropshipping Store',
    category: 'Dropshipping',
    images: [
      '/store/caratijewelry-pages.png',
      '/store/caratijewelry.png',
      '/store/caratijewelry-checkouts.png',
    ],
    overview: 'Jewelry dropshipping store targeting US market.',
    problem: 'Client had no supplier pipeline and wanted a fully automated dropshipping solution.',
    solution: 'Built a DSers-powered Shopify store with automated order routing, inventory syncing, and branded tracking emails.',
    techStack: ['Shopify', 'DSers', 'AutoDS', 'Oberlo'],
    link: 'https://caratijewelry.com/',
  },
  {
    id: 6,
    title: 'Fossilsg Luxury Watches & Jewelry Store',
    category: 'Dropshipping',
    images: [
      '/store/fossilsg.png',
      '/store/fossilsg-collections.png',
      '/store/fossilsg-checkouts.png',
    ],
    overview: 'Luxury watch and jewelry dropshipping store.',
    problem: 'Client wanted a high-end dropshipping store with automated fulfillment and branded tracking, but had no supplier relationships or technical expertise.',
    solution: 'Built a Shopify store integrated with DSers for automated dropshipping fulfillment, inventory syncing, and branded tracking emails to create a seamless customer experience.',
    techStack: ['Shopify', 'Zendrop', 'Klaviyo', 'DSers'],
    link: 'https://fossilsg.com/',
  },
  {
    id: 7,
    title: 'Cyntino Beauty and comestic Store',
    category: 'Dropshipping',
    images: [
      '/store/cyntinostore.png',
      '/store/cyntinostore-products.png',
      '/store/cyntinostore-checkouts.png',
    ],
    overview: 'Beauty and cosmetic store with a focus on natural and organic products.',
    problem: 'Client wanted a dropshipping store focused on natural beauty products, but had no supplier relationships or technical expertise to set up the store and automate fulfillment.',
    solution: 'Built a Shopify store integrated with Printify for dropshipping fulfillment, Canva API for product design, and Klaviyo for email marketing automation to create a seamless customer experience.',
    techStack: ['Shopify', 'Printify', 'Canva API', 'Klaviyo'],
    link: 'https://cyntinostore.com/',
  },
  // --- REACT (2 projects) ---
  {
    id: 8,
    title: 'Custom Saas NFT Website',
    category: 'React',
    images: [
      '/service image/react-projects.png',
      '/service image/aiwave-ai-saas.png',
      '/service image/react-project.png',
    ],
    overview: 'Custom SaaS website for an NFT project with React frontend and Node.js backend.',
    problem: 'Client needed a modern, scalable platform to showcase their NFT collection and facilitate transactions.',
    solution: 'Built a React frontend with a Node.js backend, integrating with the Ethereum blockchain for NFT transactions and a custom CMS for content management.',
    techStack: ['React', 'Next.js', 'API', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 9,
    title: 'Dyno Fulfill Delivery Service',
    category: 'React',
    images: [
      '/store/dynofulfill.png',
      '/store/dynofulfill-services.png',
      '/store/dynofulfill-about.png',
    ],
    overview: 'Delivery service website with custom bundle builder.',
    problem: 'Client needed a custom bundle builder for their delivery service that allowed customers to create personalized meal bundles based on dietary preferences and delivery schedules.',
    solution: 'Built a React application with a dynamic bundle builder interface that integrated with the client’s backend to manage inventory and delivery logistics.',
    techStack: ['React', 'Custom Coding', 'GraphQL', 'Tailwind CSS'],
    link: 'https://dynofulfill.com/',
  },
  // --- WORDPRESS (3 projects) ---
  {
    id: 10,
    title: 'Aberdeen Research Agency Website Design',
    category: 'WordPress',
    images: [
      '/service image/aberdeen.png',
      '/service image/aberdeen-contact.png',
      '/service image/aberdeen-solutions.png',
    ],
    overview: 'Corporate website for a market research agency.',
    problem: 'Client had an outdated website that did not reflect their expertise or convert visitors into leads.',
    solution: 'Redesigned and developed a modern WordPress site with a custom theme, integrated contact form, and clear service offerings to establish credibility and drive inquiries.',
    techStack: ['WordPress', 'Elementor', 'PHP'],
    link: '#',
  },
  {
    id: 11,
    title: 'Lawyer Thomas Website with Case Studies',
    category: 'WordPress',
    images: [
      '/service image/banner.png',
      '/service image/8c4fc7245288159.69aa1851bf7ff.png',
      '/service image/lawyer-website.png',
    ],
    overview: 'Lawyer Thomas website with case study section and contact portal.',
    problem: 'Outdated website was losing potential clients to competitors.',
    solution: 'Redesigned and developed a modern WordPress site with a custom case study section, integrated contact form, and SEO optimization.',
    techStack: ['WordPress', 'ACF', 'Yoast SEO', 'WPForms'],
    link: 'https://robertlawyer.vercel.app/',
  },
  {
    id: 12,
    title: 'RealEstate Website For Property Listings',
    category: 'WordPress',
    images: [
      '/service image/wordpress-website.png',
      '/service image/6f46e0245288163.69aa1858112cb.jpg',
      '/service image/wordpress-website-2.png',
    ],
    overview: 'Real estate website for property listings with ad monetization setup.',
    problem: 'Client needed a real estate listing site with ad monetization but had no technical expertise.',
    solution: 'Built a custom WordPress site with a real estate theme, integrated Google AdSense for monetization, and set up IDX listing functionality.',
    techStack: ['WordPress', 'Custom Theme', 'PHP', 'Google AdSense'],
    link: '#',
  },
  // --- GRAPHIC DESIGN (3 projects) ---
  {
    id: 13,
    title: 'Socal Ads Post Design',
    category: 'Graphic Design',
    images: [
      '/service image/hydro-boost.png',
      '/service image/hydro-boost-social-media.png',
      '/service image/design.png',
    ],
    overview: 'Social media ad design for a skincare product.',
    problem: 'Client needed eye-catching social media ads to promote their new skincare product line.',
    solution: 'Designed a series of vibrant and engaging social media ad creatives optimized for Facebook and Instagram, using bold visuals and clear messaging to drive clicks and conversions.',
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Canva Pro'],
    link: '#',
  },
  {
    id: 14,
    title: 'Luxury Premium Logo Design + Branding',
    category: 'Graphic Design',
    images: [
      '/service image/PREMIUM-BRAND.png',
      '/service image/Instagram-Logo-design+branding.png',
      '/service image/Mascot-Logo-design.png',
    ],
    overview: 'Logo and branding for a high-end Brand.',
    problem: 'Client needed a premium logo and brand identity for their luxury product line to stand out in a crowded market.',
    solution: 'Created a sophisticated logo and brand identity system that included a custom typeface, color palette, and brand guidelines to ensure consistency across all touchpoints.',
    techStack: ['Figma', 'PowerPoint', 'Adobe InDesign', 'Illustrator'],
    link: '#',
  },
  {
    id: 15,
    title: 'Novo Cream Social Media Branding',
    category: 'Graphic Design',
    images: [
      '/service image/instagram2.png',
      '/service image/Instagram.png',
      '/service image/Instagram1.png',
    ],
    overview: 'Social media branding for a new skincare line.',
    problem: 'New skincare brand needed a cohesive social media presence that reflected their natural and luxurious aesthetic.',
    solution: 'Designed a full suite of Instagram templates, highlight icons, and a cohesive visual identity for their social channels.',
    techStack: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva Pro'],
    link: '#',
  },
];

export const categories = ['All', 'Shopify', 'Dropshipping', 'React', 'WordPress', 'Graphic Design'] as const;
export type Category = typeof categories[number];
