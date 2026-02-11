import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo_cb.png";

const Navbar = () => {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "#about", label: t("nav_about") },
    { href: "#treatments", label: t("nav_treatments") },
    { href: "#process", label: t("nav_process") },
    { href: "#contact", label: t("nav_contact") },
  ];

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-card/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Ivo Taleski Physiotherapy"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-contain hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleClick(l.href)}
                  className={`font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${scrolled
                      ? "text-primary hover:text-secondary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                    }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleClick("#contact")}
              className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold hover:brightness-95 transition-all hover:-translate-y-0.5"
            >
              {t("nav_book")}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className={`md:hidden p-2 ${scrolled ? "text-primary" : "text-primary-foreground"}`}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[100] bg-card flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <img src={logo} alt="Logo" className="h-10 rounded-full" width={40} height={40} />
              <button onClick={() => setMenuOpen(false)} className="text-primary p-2">
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-center">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <button
                    onClick={() => handleClick(l.href)}
                    className="text-2xl font-heading text-primary"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-8"
            >
              <button
                onClick={() => handleClick("#contact")}
                className="w-full py-4 rounded-full bg-accent text-accent-foreground font-bold text-lg"
              >
                {t("nav_book")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
