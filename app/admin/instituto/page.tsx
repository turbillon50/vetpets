"use client"
import { ALUMNOS } from "@/lib/demo-data"
import { GraduationCap } from "lucide-react"

export default function InstitutoAdmin() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-white">Instituto K9</h1>
        <div className="text-right">
          <div className="text-2xl font-black text-gold-gradient">{ALUMNOS.length}</div>
          <div className="text-xs text-[#A3A3A3]">alumnos activos</div>
        </div>
      </div>
      <div className="space-y-3">
        {ALUMNOS.map(a => (
          <div key={a.id} className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(217,119,6,0.15)" }}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(217,119,6,0.12)" }}>
                  <GraduationCap size={18} className="text-yellow-400" />
                </div>
                <div>
                  <div className="font-bold text-white">{a.mascota} <span className="text-[#A3A3A3] font-normal text-sm">— {a.raza}</span></div>
                  <div className="text-xs text-[#A3A3A3]">Propietario: {a.propietario}</div>
                  <div className="text-xs text-[#D97706] font-semibold mt-1">{a.curso}</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0"
                style={a.status==="completando" ? { background:"rgba(217,119,6,0.15)", color:"#FCD34D" } : { background:"rgba(5,150,105,0.12)", color:"#34D399" }}>
                {a.status}
              </span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-[#A3A3A3] mb-1.5">
                <span>Progreso</span>
                <span>Semana {a.semana} de {a.total_semanas}</span>
              </div>
              <div className="w-full rounded-full h-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-1.5 rounded-full transition-all" style={{ width: `${(a.semana/a.total_semanas)*100}%`, background: "linear-gradient(90deg,#B91C1C,#D97706)" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
