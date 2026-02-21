const HowItWorksSection = () => {
  const items = [
    {
      number: "01",
      title: "A Escuta",
      description:
        "A psicanálise é, antes de tudo, um espaço de fala e escuta. O analista oferece uma escuta atenta e sem julgamentos, permitindo que o paciente explore livremente seus pensamentos e sentimentos.",
    },
    {
      number: "02",
      title: "O Inconsciente",
      description:
        "Grande parte do nosso sofrimento tem raízes em conteúdos inconscientes — desejos, conflitos e memórias que não acessamos facilmente. A psicanálise trabalha para trazer esses conteúdos à consciência.",
    },
    {
      number: "03",
      title: "A Frequência",
      description:
        "As sessões acontecem regularmente, geralmente uma ou mais vezes por semana. Essa constância é fundamental para que o processo analítico se desenvolva com profundidade.",
    },
    {
      number: "04",
      title: "A Transformação",
      description:
        "Ao longo do processo, o paciente passa a se conhecer melhor, a compreender seus padrões e a encontrar novas formas de lidar com seu sofrimento, ganhando mais liberdade e autonomia.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          Para quem busca terapia
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground text-center mb-16">
          Como funciona a Psicanálise?
        </h2>

        <div className="space-y-12">
          {items.map((item) => (
            <div key={item.number} className="flex gap-6 md:gap-10 items-start group">
              <span className="text-3xl md:text-4xl font-serif font-light text-border group-hover:text-primary transition-colors duration-300 shrink-0">
                {item.number}
              </span>
              <div className="border-t border-border pt-6 flex-1">
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
