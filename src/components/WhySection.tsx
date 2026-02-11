import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Target, SearchCheck, Zap } from "lucide-react";

const WhySection = () => {
  const { t } = useI18n();

  const pillars = [
    { icon: Target, title: t("why_1_title"), text: t("why_1_text") },
    { icon: SearchCheck, title: t("why_2_title"), text: t("why_2_text") },
    { icon: Zap, title: t("why_3_title"), text: t("why_3_text") },
  ];

  return (
    <section className="py-20 md:py-28 bg-section-alt" aria-label="Why choose us">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-14"
        >
          {t("why_title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center px-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <p.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-heading mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
