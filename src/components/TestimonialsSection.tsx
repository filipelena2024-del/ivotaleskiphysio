import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const TestimonialsSection = () => {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    { text: t("testi_1_text"), name: t("testi_1_name") },
    { text: t("testi_2_text"), name: t("testi_2_name") },
    { text: t("testi_3_text"), name: t("testi_3_name") },
  ];

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), [testimonials.length]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), [testimonials.length]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 md:py-28 bg-section-alt" aria-label="Testimonials">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-12"
        >
          {t("testimonials_title")}
        </motion.h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border/50 text-center"
          >
            <Quote className="text-accent mx-auto mb-4" size={32} />
            <p className="text-foreground/80 italic text-lg md:text-xl leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>
            <p className="font-semibold text-primary text-lg">{testimonials[current].name}</p>
            <div className="flex gap-0.5 mt-2 justify-center">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-gold text-gold" />
              ))}
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-accent w-6" : "bg-border hover:bg-secondary/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
