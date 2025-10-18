import CaseStudy from "./CaseStudy";
import integrationImage from "@assets/generated_images/System_integration_illustration_4de923b6.png";
import teamImage from "@assets/generated_images/Professional_team_collaboration_photo_263233f7.png";

export default function Cases() {
  const cases = [
    {
      companyName: "TechCorp Brasil",
      industry: "Tecnologia",
      quote: "A Automa mudou tudo aqui. A gente economiza 120 horas por mês em trabalho manual e cresceu sem precisar contratar mais gente.",
      metrics: [
        { value: "70%", label: "Menos tempo perdido" },
        { value: "R$ 180k", label: "Economia por ano" },
      ],
      imageSrc: integrationImage,
    },
    {
      companyName: "Logística Plus",
      industry: "Logística",
      quote: "Conectaram nossos 5 sistemas numa plataforma só. Agora a gente vê tudo em tempo real, sem dor de cabeça.",
      metrics: [
        { value: "98%", label: "Precisão total" },
        { value: "5 min", label: "Resposta rápida" },
      ],
      imageSrc: teamImage,
      reverse: true,
    },
  ];

  return (
    <section id="cases" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-semibold mb-4 border border-cyan/20">
            Quem já usa
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Resultados de verdade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como outras empresas estão ganhando tempo e dinheiro
          </p>
        </div>

        <div className="space-y-24">
          {cases.map((caseStudy, index) => (
            <CaseStudy key={index} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
