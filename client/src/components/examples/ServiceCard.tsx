import ServiceCard from '../ServiceCard'
import { Workflow } from 'lucide-react'

export default function ServiceCardExample() {
  return (
    <div className="p-8 bg-background">
      <ServiceCard
        icon={Workflow}
        title="Automação de Processos"
        description="Implemente RPA para automatizar tarefas repetitivas e libere sua equipe para atividades estratégicas."
        color="blue"
      />
    </div>
  )
}
