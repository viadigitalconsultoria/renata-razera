const BenefitsSection = () => {
  const benefits = [
    {
      title: "Autoconhecimento profundo",
      description:
        "Compreender os padrões inconscientes que influenciam suas decisões, relações e emoções.",
    },
    {
      title: "Alívio do sofrimento",
      description:
        "Elaborar conflitos internos que geram ansiedade, tristeza, angústia e outros sintomas.",
    },
    {
      title: "Relações mais saudáveis",
      description:
        "Entender como você se posiciona nos vínculos e encontrar formas mais autênticas de se relacionar.",
    },
    {
      title: "Mais liberdade",
      description:
        "Libertar-se de repetições e condicionamentos que limitam sua vida e suas escolhas.",
    },
    {
      title: "Resiliência emocional",
      description:
        "Desenvolver recursos internos para lidar com as adversidades e transições da vida.",
    },
    {
      title: "Autonomia psíquica",
      description:
        "Conquistar maior independência emocional e capacidade de tomar decisões alinhadas consigo mesmo.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          O que você pode ganhar
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground text-center mb-16 leading-tight">
          Benefícios da Psicanálise
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
              <div>
                <h3 className="text-lg font-serif text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
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

export default BenefitsSection;
