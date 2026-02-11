import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors p-2"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors p-2"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>
        <div className="text-center">
          <p className="font-medium">&copy; {new Date().getFullYear()} Ivo Taleski Physiotherapy.</p>
          <p className="text-sm mt-2 opacity-80">
            Изработено од{" "}
            <a
              href="https://fsdigital.mk"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-secondary-foreground/50 hover:border-secondary-foreground transition-colors"
            >
              fsdigital.mk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
