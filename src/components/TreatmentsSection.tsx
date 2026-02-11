import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Dumbbell, Spline, Stethoscope, BicepsFlexed, AlignVerticalSpaceAround, HeartHandshake, Gauge, Crosshair } from "lucide-react";

const icons = [Dumbbell, Spline, Stethoscope, BicepsFlexed, AlignVerticalSpaceAround, HeartHandshake, Gauge, Crosshair];

const TreatmentsSection = () => {
  const { t } = useI18n();

  const treatments = [
    t("treat_1"), t("treat_2"), t("treat_3"), t("treat_4"),
    t("treat_5"), t("treat_6"), t("treat_7"), t("treat_8"),
  ];

  return (
    <section id="treatments" className="py-20 md:py-28" aria-label="Treatments">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-12"
        >
          {t("treatments_title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {treatments.map((name, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-warm rounded-2xl p-5 md:p-6 text-center flex flex-col items-center gap-3 border border-transparent hover:border-accent hover:bg-card hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer"
              >
                <Icon className="text-secondary group-hover:text-accent group-hover:scale-110 transition-all" size={28} />
                <span className="font-semibold text-primary text-xs md:text-base leading-tight">{name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
