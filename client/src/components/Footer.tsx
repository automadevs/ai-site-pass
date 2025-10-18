import { Linkedin, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-cyan rounded-md shadow-lg shadow-primary/30" />
              <span className="text-xl font-display font-bold text-foreground">
                Automa
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A gente cuida da automação, você foca no que importa.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-muted flex items-center justify-center hover-elevate text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Automação RPA
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Integração de Sistemas
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Workflows Inteligentes
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#cases" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contato@automa.com.br</li>
              <li>(11) 98765-4321</li>
              <li>
                Av. Paulista, 1000<br />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Automa. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
