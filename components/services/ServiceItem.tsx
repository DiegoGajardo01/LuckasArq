import type { ReactNode } from "react"

interface ServiceItemProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceItem({ icon, title, description }: ServiceItemProps) {
  return (
    <div className="bg-white rounded-lg p-3 pt-25 text-center shadow-md transition-transform duration-300 hover:-translate-y-2.5 overflow-visible">
      <div className="mx-auto mb-6 flex items-center justify-center -mt-16">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-[#333333]">{title}</h3>
      <p className="text-sm text-[#666666]">{description}</p>
    </div>
  )
}
