import CaseStudy from '../CaseStudy'
import integrationImage from '@assets/generated_images/System_integration_illustration_4de923b6.png'

export default function CaseStudyExample() {
  return (
    <div className="p-8 bg-background">
      <CaseStudy
        companyName="TechCorp Brasil"
        industry="Tecnologia"
        quote="A Automa revolucionou nossos processos. Economizamos 120 horas mensais em tarefas manuais."
        metrics={[
          { value: "70%", label: "Redução de Tempo" },
          { value: "R$ 180k", label: "Economia Anual" },
        ]}
        imageSrc={integrationImage}
      />
    </div>
  )
}
