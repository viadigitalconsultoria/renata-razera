const ComparisonSection = () => {
  return (
    <section id="diferenca" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          Entenda a diferença
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground text-center mb-6">
          Psicologia × Psicanálise
        </h2>
        <p className="text-center text-muted-foreground font-sans max-w-2xl mx-auto mb-16 leading-relaxed">
          Embora muitas vezes confundidas, psicologia e psicanálise possuem origens, métodos e 
          objetivos distintos. Compreender essas diferenças é essencial para escolher o caminho 
          terapêutico mais adequado.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background p-8 md:p-10 rounded-sm border border-border">
            <h3 className="text-2xl font-serif text-foreground mb-6">Psicologia</h3>
            <ul className="space-y-5 font-sans text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="text-primary font-serif text-lg leading-none mt-0.5">—</span>
                <span>Ciência ampla que estuda o comportamento humano e os processos mentais</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-serif text-lg leading-none mt-0.5">—</span>
                <span>Utiliza diversas abordagens terapêuticas (TCC, humanista, comportamental, entre outras)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-serif text-lg leading-none mt-0.5">—</span>
                <span>Foco frequente nos sintomas e em estratégias para modificá-los</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-serif text-lg leading-none mt-0.5">—</span>
                <span>O profissional é o psicólogo, com graduação em Psicologia e registro no CRP</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-sm">
            <h3 className="text-2xl font-serif mb-6">Psicanálise</h3>
            <ul className="space-y-5 font-sans text-sm leading-relaxed opacity-90">
              <li className="flex gap-3">
                <span className="font-serif text-lg leading-none mt-0.5 opacity-70">—</span>
                <span>Método específico criado por Sigmund Freud, voltado ao estudo do inconsciente</span>
              </li>
              <li className="flex gap-3">
                <span className="font-serif text-lg leading-none mt-0.5 opacity-70">—</span>
                <span>Trabalha com a associação livre, a escuta flutuante e a interpretação dos sonhos</span>
              </li>
              <li className="flex gap-3">
                <span className="font-serif text-lg leading-none mt-0.5 opacity-70">—</span>
                <span>Busca as causas profundas do sofrimento, não apenas os sintomas aparentes</span>
              </li>
              <li className="flex gap-3">
                <span className="font-serif text-lg leading-none mt-0.5 opacity-70">—</span>
                <span>O profissional é o psicanalista, com formação específica em psicanálise clínica</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
