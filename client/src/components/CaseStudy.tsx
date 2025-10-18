import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyProps {
  companyName: string;
  industry: string;
  quote: string;
  metrics: Metric[];
  imageSrc: string;
  reverse?: boolean;
}

export default function CaseStudy({ companyName, industry, quote, metrics, imageSrc, reverse }: CaseStudyProps) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={imageSrc}
          alt={`Case ${companyName}`}
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
      
      <div className={`space-y-6 ${reverse ? 'lg:order-1' : ''}`}>
        <div>
          <Badge className="mb-3" data-testid={`badge-industry-${companyName.toLowerCase().replace(/\s+/g, '-')}`}>{industry}</Badge>
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">
            {companyName}
          </h3>
          <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
            "{quote}"
          </blockquote>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-4" data-testid={`card-metric-${index}`}>
              <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
