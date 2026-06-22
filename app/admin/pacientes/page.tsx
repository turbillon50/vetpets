"use client"
import { PACIENTES_ADMIN } from "@/lib/demo-data"
import { Search, PawPrint } from "lucide-react"

const statusColor: Record<string,{bg:string,color:string}> = {
  "activo": { bg: "rgba(5,150,105,0.12)", color: "#34D399" },
  "en tratamiento": { bg: "rgba(217,119,6,0.12)", color: "#FCD34D" },
  "post-operatorio": { bg: "rgba(239,68,68,0.12)", color: "#EF4444" },
}

export default function PacientesAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-white">Pacientes</h1>
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}>
          <Search size={14} className="text-[#525252]" />
          <input placeholder="Buscar paciente..." className="bg-transparent text-sm text-white outline-none placeholder-[#525252] w-32" />
        </div>
      </div>
      <div className="space-y-2">
        {PACIENTES_ADMIN.map(p => (
          <div key={p.id} className="rounded-xl px-4 py-3 flex items-center justify-between hover:border-red-900 transition-colors"
            style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(185,28,28,0.1)" }}>
                <PawPrint size={16} className="text-red-400" />
              </div>
              <div>
                <div className="font-bold text-sm text-white">{p.nombre} <span className="text-[#525252] font-normal">— {p.raza}</span></div>
                <div className="text-xs text-[#A3A3A3]">{p.propietario} · {p.tel}</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                style={statusColor[p.status] ?? { bg: "rgba(255,255,255,0.08)", color: "#A3A3A3" }}>
                {p.status}
              </span>
              <div className="text-[10px] text-[#525252] mt-1">Última visita: {new Date(p.ultima_visita).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
