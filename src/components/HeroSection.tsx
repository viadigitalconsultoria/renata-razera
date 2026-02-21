import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Psicanálise Clínica
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-foreground leading-tight mb-6">
          Renata Razera
        </h1>
        <div className="w-16 h-px bg-primary mx-auto mb-6" />
        <p className="text-lg md:text-xl font-sans font-light text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Um espaço de escuta e acolhimento para quem busca compreender a si mesmo através da psicanálise.
        </p>
        <a
          href="#sobre"
          className="inline-block mt-10 px-8 py-3 border border-primary text-primary font-sans text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Saiba mais
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
