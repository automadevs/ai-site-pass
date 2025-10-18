import { CheckCircle2, TrendingUp, Shield, Clock, Users, Sparkles } from "lucide-react";
import integrationImage from "@assets/generated_images/System_integration_illustration_4de923b6.png";

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Produtividade nas alturas",
      description: "Menos tempo perdido com trabalho manual, mais tempo pra crescer",
    },
    {
      icon: Shield,
      title: "Zero erro",
      description: "Automação não erra. Seus processos rodam redondinho",
    },
    {
      icon: Clock,
      title: "Tempo é dinheiro",
      description: "Seu time focando no que realmente gera valor, não em tarefas repetitivas",
    },
    {
      icon: Users,
      title: "Cresce sem dor",
      description: "Sua operação escala sem você precisar contratar mais gente",
    },
    {
      icon: Sparkles,
      title: "Sempre atual",
      description: "A gente mantém tudo rodando e sempre melhorando",
    },
  ];

  return (
    <section id="beneficios" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-semibold mb-4 border border-cyan/20">
              Por que escolher a Automa?
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              A gente simplifica,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">você cresce</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Não é só sobre tecnologia. É sobre dar mais tempo pro seu time focar no que realmente move o negócio pra frente.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4" data-testid={`benefit-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange/10 rounded-3xl blur-3xl" />
            <img
              src={integrationImage}
              alt="Benefícios da automação"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
