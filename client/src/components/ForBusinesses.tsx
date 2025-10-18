import { Button } from "@/components/ui/button";
import { BarChart3, Link2, Code, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ForBusinesses() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: BarChart3,
      text: "Dashboards e relatórios automatizados",
    },
    {
      icon: Link2,
      text: "Integração entre ferramentas (CRM, WhatsApp, e-mail, planilhas)",
    },
    {
      icon: Code,
      text: "Desenvolvimento de landing pages e sistemas sob medida",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card hover-elevate transition-all cursor-pointer border border-card-border" data-testid={`card-business-service-${index}`}>
                  <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground font-medium leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-semibold mb-6 border border-cyan/20">
              Para Empresas
            </span>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Tecnologia que
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">impulsiona negócios</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ajudamos marcas e negócios a implementar automações, melhorar a performance digital e criar sistemas personalizados — de sites a plataformas completas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-cyan hover:bg-cyan text-cyan-foreground group transition-all hover:shadow-lg hover:shadow-cyan/50"
                data-testid="button-business-contact"
              >
                Falar com especialista
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("cases")}
                className="group border-primary/30 hover:border-primary/50"
                data-testid="button-business-cases"
              >
                Ver projetos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
