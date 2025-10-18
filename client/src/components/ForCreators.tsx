import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import creator1 from "@assets/stock_images/professional_content_d86ca423.jpg";
import creator2 from "@assets/stock_images/2e7b3b8c0eed05bdd18fda65573a0373.jpg";
import creator3 from "@assets/stock_images/professional_content_f828c84c.jpg";
import creator4 from "@assets/stock_images/young_entrepreneur_d_df196ddb.jpg";
import creator5 from "@assets/stock_images/young_entrepreneur_d_54804ae5.jpg";

export default function ForCreators() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const creatorImages = [creator1, creator2, creator3, creator4, creator5];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % creatorImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [creatorImages.length]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: "Produtos Próprios",
      description: "Transforme suas ideias em produtos digitais reais",
    },
    {
      icon: Rocket,
      title: "Automação da Rotina",
      description: "Libere tempo pra criar mais conteúdo",
    },
    {
      icon: Users,
      title: "Profissionalização",
      description: "Leve seus projetos pro próximo nível",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-primary/5 via-background to-cyan/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(58,134,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,245,0.06),transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              Para Criadores
            </span>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              Criadores que querem
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">ir além</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Trabalhamos em parceria com criadores que desejam lançar produtos próprios, automatizar a rotina e profissionalizar seus projetos.
            </p>
            
            <div className="inline-block p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-cyan/20 mb-8">
              <p className="text-xl font-semibold text-foreground">
                <span className="text-cyan">"</span>
                A gente cuida da parte técnica pra você focar no que importa.
                <span className="text-cyan">"</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 hover-elevate transition-all" data-testid={`card-creator-feature-${index}`}>
                  <div className="flex md:flex-col items-start md:items-center md:text-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Button
              size="lg"
              onClick={() => scrollToSection("cases")}
              className="bg-primary hover:bg-primary text-primary-foreground group transition-all hover:shadow-lg hover:shadow-primary/50"
              data-testid="button-creators-cta"
            >
              Ver como funciona
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            {creatorImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Criador ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {creatorImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-cyan w-8'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  data-testid={`carousel-dot-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
