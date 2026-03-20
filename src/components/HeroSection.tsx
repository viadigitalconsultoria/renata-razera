const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 18px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-handwriting text-primary leading-tight mb-4">
          Renata Razera
        </h1>
        <p className="text-sm md:text-base font-sans tracking-[0.35em] uppercase text-muted-foreground mb-8">
          Psicanalista
        </p>
        <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />
        <p className="text-lg md:text-xl font-sans font-light text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Um espaço de escuta e acolhimento para quem busca compreender a si mesmo através da psicanálise.
        </p>
        <a
          href="#pra-quem"
          className="inline-block mt-10 px-8 py-3 border border-primary text-primary font-sans text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-[0.97]"
        >
          Saiba mais
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
