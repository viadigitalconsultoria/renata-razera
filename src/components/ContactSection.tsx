const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-sans tracking-[0.3em] uppercase opacity-70 mb-4">
          Agende sua sessão
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
          Vamos conversar?
        </h2>
        <p className="font-sans opacity-80 leading-relaxed mb-10 max-w-xl mx-auto">
          O primeiro passo é o mais importante. Entre em contato para agendar uma 
          entrevista inicial e começar sua jornada de autoconhecimento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary font-sans text-sm tracking-widest uppercase hover:opacity-90 transition-opacity duration-300"
          >
            WhatsApp
          </a>
          <a
            href="mailto:contato@renatarazera.com"
            className="inline-block px-8 py-3 border border-primary-foreground/40 font-sans text-sm tracking-widest uppercase hover:bg-primary-foreground/10 transition-all duration-300"
          >
            E-mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
