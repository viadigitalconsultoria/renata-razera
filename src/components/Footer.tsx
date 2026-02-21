const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border text-center">
      <p className="text-xs font-sans text-muted-foreground tracking-wide">
        © {new Date().getFullYear()} Renata Razera — Psicanálise Clínica
      </p>
    </footer>
  );
};

export default Footer;
