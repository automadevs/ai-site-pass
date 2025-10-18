import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/Automation_hero_illustration_1ca156f3.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(58,134,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,245,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-semibold border border-cyan/20">
                <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                Automação que funciona de verdade
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
              A gente cuida da
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">automação.</span>
              <br />
              Você foca no que importa.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Chega de perder tempo com tarefas repetitivas. A gente conecta seus sistemas, automatiza seus processos e libera seu time pra crescer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-cyan hover:bg-cyan text-cyan-foreground group transition-all hover:shadow-lg hover:shadow-cyan/50"
                data-testid="button-cta-hero"
              >
                Bora conversar!
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("cases")}
                className="group border-primary/30 hover:border-primary/50 transition-all"
                data-testid="button-cases-hero"
              >
                <Play className="mr-2 w-4 h-4" />
                Ver como funciona
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Processos Automatizados</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação dos Clientes</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">70%</div>
                <div className="text-sm text-muted-foreground">Redução de Tempo</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Automação de processos empresariais"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
