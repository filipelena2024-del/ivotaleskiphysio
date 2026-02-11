import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, NotebookPen } from "lucide-react";

const stepIcons = [MessageCircle, ClipboardCheck, NotebookPen];

const ProcessSection = () => {
  const { t } = useI18n();

  const steps = [
    { num: "01", title: t("process_1_title"), text: t("process_1_text") },
    { num: "02", title: t("process_2_title"), text: t("process_2_text") },
    { num: "03", title: t("process_3_title"), text: t("process_3_text") },
  ];

  return (
    <section id="process" className="py-20 md:py-28" aria-label="Process">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-16"
        >
          {t("process_title")}
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-secondary/15" />

          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 bg-background px-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={28} />
                </div>
                <span className="text-sm font-bold text-secondary/50 uppercase tracking-widest">{s.num}</span>
                <h3 className="text-xl font-heading mt-1 mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
