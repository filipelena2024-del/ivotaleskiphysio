import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { GraduationCap, Award, Hand, Clock } from "lucide-react";
import { User } from "lucide-react";

const credIcons = [GraduationCap, Hand, Clock];

const AboutSection = () => {
  const { t } = useI18n();

  const credentials = [t("cred_1"), t("cred_3"), t("cred_4")];

  return (
    <section id="about" className="py-20 md:py-28 bg-warm">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-12"
        >
          {t("about_title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] rounded-2xl bg-muted border-2 border-dashed border-border overflow-hidden flex items-center justify-center"
          >
            <div className="text-center text-muted-foreground/60">
              <User className="mx-auto mb-3" size={64} strokeWidth={1} />
              <p className="text-sm font-medium">Photo of Ivo</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("about_bio")}
            </p>

            <ul className="space-y-4">
              {credentials.map((cred, i) => {
                const Icon = credIcons[i];
                return (
                  <li key={i} className="flex items-center gap-3 text-primary font-medium">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Icon size={16} className="text-accent" />
                    </span>
                    {cred}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
