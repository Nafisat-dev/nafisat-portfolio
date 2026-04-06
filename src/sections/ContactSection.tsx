import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, MapPin, Clock, Send, Calendar, Briefcase } from 'lucide-react';
import { toast } from 'sonner';
import { useFadeInOnScroll } from '@/hooks/useFadeInOnScroll';
import useCalendly from '@/hooks/useCalendly';

interface ContactSectionProps {
  className?: string;
}

const stats = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: 40, suffix: '%', label: 'Avg. Conversion Boost' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={counterRef} className="counter-value">
      {count}
      {suffix}
    </span>
  );
};

const ContactSection = ({ className = '' }: ContactSectionProps) => {
  const statsRef = useFadeInOnScroll<HTMLDivElement>();
  const headlineRef = useFadeInOnScroll<HTMLDivElement>();
  const primaryCardRef = useFadeInOnScroll<HTMLDivElement>();
  const formRef = useFadeInOnScroll<HTMLFormElement>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { handleCalendlyClick } = useCalendly();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you within 1-2 business days.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className={`relative bg-white py-24 ${className}`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-soft-blue/30 via-white to-white" />

      <div className="relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Stats */}
            <div ref={statsRef} className="fade-up grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`glass-card p-6 text-center transition-all duration-300 delay-${index * 100}`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-slate text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Primary Glass Card */}
              <div ref={primaryCardRef} className="fade-up">
                <div className="glass-card p-3 md:p-4 mb-6">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src="/service image/late-night-focus.png"
                      alt="Contact"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="glass-card p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-sky" />
                      </div>
                      <div>
                        <p className="text-xs text-slate">Email</p>
                        <a href="mailto:Oladepoelija2017@gmail.com" className="text-navy hover:text-sky transition-colors">
                          Oladepoelija2017@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-sky" />
                      </div>
                      <div>
                        <p className="text-xs text-slate">Location</p>
                        <p className="text-navy">Lagos, Nigeria</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-sky" />
                      </div>
                      <div>
                        <p className="text-xs text-slate">Availability</p>
                        <p className="text-navy">Booking 2-3 weeks ahead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Headline + Form */}
              <div ref={headlineRef} className="fade-up">
                <span className="label-small mb-4 block">Contact</span>
                <h2 className="font-heading font-bold text-navy mb-6 portfolio-heading">
                  Let's Build Together
                </h2>
                <p className="text-slate text-lg mb-8 leading-relaxed">
                  Tell me what you're building. I'll reply within 24hours.
                </p>

                {/* Calendly CTA */}
                <button
                  onClick={handleCalendlyClick}
                  className="btn-primary flex items-center gap-2 group w-full justify-center mb-4"
                  type="button"
                >
                  <Calendar size={18} />
                  Book a Free Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Upwork CTA - Beautiful Badge */}
                <a
                  href="https://www.upwork.com/freelancers/~01421fc94abe3876b7?companyReference=1881676791054417330&mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mb-8 block overflow-hidden rounded-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#14A800] via-[#0D7C00] to-[#14A800] opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="relative px-6 py-3 flex items-center justify-center gap-2 text-white font-medium text-sm hover:scale-105 transition-transform duration-300">
                    <Briefcase size={16} className="group-hover:rotate-12 transition-transform" />
                    Hire Me on Upwork
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Contact Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="fade-up glass-card p-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input min-h-[120px] resize-none"
                        placeholder="Tell me about your project..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
