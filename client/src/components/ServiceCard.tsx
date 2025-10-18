import { Card } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "blue" | "cyan" | "purple";
}

export default function ServiceCard({ icon: Icon, title, description, color }: ServiceCardProps) {
  const colorClasses = {
    blue: "border-l-primary bg-primary/5",
    cyan: "border-l-cyan bg-cyan/5",
    purple: "border-l-chart-3 bg-chart-3/5",
  };

  const iconColorClasses = {
    blue: "text-primary",
    cyan: "text-cyan",
    purple: "text-chart-3",
  };

  return (
    <Card className={`p-6 border-l-4 ${colorClasses[color]} hover-elevate cursor-pointer transition-all duration-300`} data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`w-14 h-14 rounded-lg bg-background flex items-center justify-center mb-4 ${iconColorClasses[color]}`}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <button className={`inline-flex items-center gap-1 text-sm font-medium ${iconColorClasses[color]} hover:gap-2 transition-all`} data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        Saiba mais
        <ArrowRight className="w-4 h-4" />
      </button>
    </Card>
  );
}
