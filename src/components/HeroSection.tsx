import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <header
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-xs md:text-base font-semibold text-primary-foreground/80 border-b-2 border-accent pb-1 mb-6"
          >
            {t("hero_badge")}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading leading-[1.1] mb-6 text-primary-foreground"
          >
            {t("hero_title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-xl text-primary-foreground/75 font-medium mb-8 max-w-lg"
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-flex px-6 py-3 md:px-8 md:py-4 rounded-full bg-accent text-accent-foreground font-bold text-sm md:text-lg hover:brightness-95 hover:-translate-y-0.5 transition-all shadow-lg shadow-accent/30 whitespace-nowrap"
            >
              {t("hero_cta")}
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
