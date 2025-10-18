import ServiceCard from "./ServiceCard";
import { Workflow, Network, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Workflow,
      title: "Automação de Processos",
      description: "A gente automatiza aquelas tarefas chatas que ninguém gosta de fazer. Seu time fica livre pra focar no que realmente importa.",
      color: "blue" as const,
    },
    {
      icon: Network,
      title: "Integração de Sistemas",
      description: "Conectamos seus sistemas pra conversar entre si. Seus dados fluem sozinhos, sem você precisar copiar e colar nada.",
      color: "cyan" as const,
    },
    {
      icon: Zap,
      title: "Workflows Inteligentes",
      description: "Criamos fluxos que funcionam no piloto automático. Aprovações, notificações, tudo rola sem você mover um dedo.",
      color: "purple" as const,
    },
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            O que a gente faz
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Automação personalizada para o seu negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Do mais simples ao mais complexo, a gente resolve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
