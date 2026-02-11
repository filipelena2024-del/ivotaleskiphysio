import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { lang, toggleLang } = useI18n();

  return (
    <button
      onClick={toggleLang}
      className="fixed bottom-6 right-6 z-50 bg-card border border-border shadow-lg rounded-full px-4 py-2.5 flex items-center gap-2 font-semibold text-primary hover:-translate-y-0.5 transition-transform"
      aria-label="Switch Language"
    >
      <Globe size={18} />
      <span className="text-sm">{lang.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;
