import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-background to-section-alt">
      <div className="container flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl w-full bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-8">
            {t("visit_title")}
          </h2>

          <div className="space-y-5 mb-10">
            <div className="flex items-center justify-center gap-3 text-lg text-primary">
              <MapPin className="text-accent flex-shrink-0" size={24} />
              <span>{t("address")}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Phone className="text-accent flex-shrink-0" size={24} />
              <a href="tel:076424752" className="text-primary font-semibold hover:text-secondary transition-colors">
                076 424 752
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-lg">
              <Mail className="text-accent flex-shrink-0" size={24} />
              <a href="mailto:info@ivotaleskiphysio.mk" className="text-primary font-semibold hover:text-secondary transition-colors">
                info@ivotaleskiphysio.mk
              </a>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-primary rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-heading text-primary-foreground mb-3">
              {t("final_cta_title")}
            </h3>
            <p className="text-primary-foreground/80 mb-6">{t("final_cta_text")}</p>
            <a
              href="tel:076424752"
              className="inline-flex px-8 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-lg hover:brightness-95 hover:-translate-y-0.5 transition-all"
            >
              {t("final_cta_btn")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
