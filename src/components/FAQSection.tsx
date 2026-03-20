import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Qual a diferença entre psicanálise e psicoterapia?",
      answer:
        "A psicoterapia é um termo amplo que engloba diversas abordagens. A psicanálise é um método específico, criado por Freud, que trabalha com o inconsciente, a associação livre e a transferência para investigar as causas profundas do sofrimento.",
    },
    {
      question: "Com que frequência são as sessões?",
      answer:
        "O ideal é que as sessões aconteçam de uma a duas vezes por semana. A regularidade é fundamental para o processo analítico, pois permite aprofundar os temas que surgem e manter a continuidade do trabalho.",
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer:
        "Não existe um prazo fixo. A duração depende de cada pessoa e de seus objetivos. Algumas questões podem ser trabalhadas em meses, enquanto processos mais profundos podem levar mais tempo. O ritmo é sempre respeitado.",
    },
    {
      question: "As sessões podem ser online?",
      answer:
        "Sim. O atendimento online é uma modalidade reconhecida e eficaz. Ele permite manter a regularidade do tratamento com flexibilidade geográfica, mantendo a mesma qualidade da escuta e do vínculo analítico.",
    },
    {
      question: "Preciso ter um problema grave para procurar psicanálise?",
      answer:
        "Não. A psicanálise não é apenas para situações de crise. Ela é para qualquer pessoa que deseje se conhecer melhor, compreender seus padrões e viver com mais liberdade e consciência.",
    },
    {
      question: "Como é a primeira sessão?",
      answer:
        "A primeira sessão é uma entrevista inicial, um espaço para que você conte o que te traz à análise. É também o momento de conhecer o setting analítico e esclarecer dúvidas sobre o processo. Não há julgamento — apenas escuta.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4 text-center">
          Dúvidas comuns
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground text-center mb-16 leading-tight">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border bg-card rounded-sm px-6"
            >
              <AccordionTrigger className="text-left font-serif text-base text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
