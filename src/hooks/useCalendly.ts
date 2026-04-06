import { useEffect } from 'react';

const useCalendly = () => {
  useEffect(() => {
    // Load Calendly widget CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly widget JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up the added elements when the component unmounts
      link.remove();
      script.remove();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const handleCalendlyClick = () => {
    const calendlyWindow = typeof globalThis !== 'undefined' ? (globalThis as unknown as Window & { Calendly?: { initPopupWidget: (config: { url: string }) => void } }) : undefined;
    if (calendlyWindow?.Calendly) {
      calendlyWindow.Calendly.initPopupWidget({
        url: 'https://calendly.com/oladepoelija2017/30min?background_color=ECF3FD&text_color=3D4164&primary_color=5AA8D6',
      });
    } else {
      console.warn('Calendly widget not loaded yet.');
      // Fallback or user notification could be added here
    }
  };

  return { handleCalendlyClick };
};

export default useCalendly;
