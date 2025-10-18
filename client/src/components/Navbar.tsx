import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-cyan rounded-md shadow-lg shadow-primary/30" />
            <span className="text-xl md:text-2xl font-display font-bold text-foreground">
              Automa
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-cases"
            >
              Cases
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-beneficios"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-contato"
            >
              Contato
            </button>
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-cyan hover:bg-cyan text-cyan-foreground transition-all hover:shadow-lg hover:shadow-cyan/50"
              data-testid="button-cta-nav"
            >
              Fale com a gente
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-servicos-mobile"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("cases")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-cases-mobile"
            >
              Cases
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-beneficios-mobile"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-contato-mobile"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="w-full bg-cyan hover:bg-cyan text-cyan-foreground transition-all"
              data-testid="button-cta-mobile"
            >
              Fale com a gente
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
