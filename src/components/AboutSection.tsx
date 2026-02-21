const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          Sobre
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground text-center mb-16">
          Renata Razera
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
            <p>
              Renata Razera é psicanalista clínica com formação em Psicanálise e ampla experiência no 
              atendimento de adultos. Sua prática é fundamentada na escuta atenta e no compromisso ético 
              com cada paciente que busca compreender seus processos internos.
            </p>
            <p>
              Com uma abordagem acolhedora e rigorosa, Renata oferece um espaço seguro para que seus 
              pacientes possam explorar questões emocionais, conflitos inconscientes e padrões de 
              comportamento que impactam suas vidas.
            </p>
          </div>

          <div className="bg-card p-8 rounded-sm border border-border">
            <h3 className="text-xl font-serif text-foreground mb-6">Formação & Trajetória</h3>
            <ul className="space-y-4 font-sans text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Formação em Psicanálise Clínica</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Experiência em atendimento clínico individual</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Atendimento presencial e online</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Supervisão clínica continuada</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Participação em congressos e grupos de estudo em psicanálise</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
