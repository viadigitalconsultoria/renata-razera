const ForWhomSection = () => {
  const audiences = [
    {
      title: "Ansiedade e angústia",
      description:
        "Para quem sente uma inquietação constante, medos difusos ou uma sensação de aperto no peito que não encontra explicação clara.",
    },
    {
      title: "Relacionamentos difíceis",
      description:
        "Para quem percebe padrões que se repetem nos vínculos afetivos — escolhas que machucam, dependência emocional ou dificuldade de intimidade.",
    },
    {
      title: "Luto e perdas",
      description:
        "Para quem atravessa momentos de perda — de pessoas, relações, fases da vida — e precisa de um espaço para elaborar a dor.",
    },
    {
      title: "Autoconhecimento",
      description:
        "Para quem deseja compreender a si mesmo com mais profundidade, entender suas motivações e ganhar mais liberdade nas próprias escolhas.",
    },
    {
      title: "Crises e transições",
      description:
        "Para quem enfrenta mudanças significativas — na carreira, na família, na identidade — e busca orientação interna nesse processo.",
    },
    {
      title: "Sofrimento sem nome",
      description:
        "Para quem sente que algo não está bem, mas não consegue identificar exatamente o quê. A psicanálise acolhe também o que ainda não tem palavras.",
    },
  ];

  return (
    <section id="pra-quem" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          Será que é pra mim?
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground text-center mb-16 leading-tight">
          Pra quem é a Psicanálise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border p-7 rounded-sm group hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-serif text-primary mb-3 group-hover:text-foreground transition-colors duration-200">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
