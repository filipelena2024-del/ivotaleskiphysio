const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container text-center">
        <p className="font-medium">&copy; 2026 Ivo Taleski Physiotherapy.</p>
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
    </footer>
  );
};

export default Footer;
