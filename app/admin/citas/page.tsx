"use client"
import { CITAS } from "@/lib/demo-data"
import { IconCalendar, IconClock, IconPhone } from "@tabler/icons-react"

export default function CitasAdmin() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-white">Agenda de Citas</h1>
      <div className="space-y-3">
        {CITAS.map(c => (
          <div key={c.id} className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(185,28,28,0.12)" }}>
                  <IconCalendar size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="font-bold text-white">{c.mascota}</div>
                  <div className="text-sm text-[#A3A3A3]">{c.propietario} · {c.tipo}</div>
                  <div className="text-sm text-[#525252]">Vet: {c.veterinario}</div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-xs text-[#A3A3A3]"><IconCalendar size={11} />{new Date(c.fecha).toLocaleDateString("es-MX",{weekday:"short",day:"numeric",month:"short"})}</div>
                    <div className="flex items-center gap-1 text-xs text-[#D97706]"><IconClock size={11} />{c.hora}</div>
                    <div className="flex items-center gap-1 text-xs text-[#A3A3A3]"><IconPhone size={11} />{c.tel}</div>
                  </div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full font-semibold shrink-0"
                style={c.status === "confirmada" ? { background: "rgba(5,150,105,0.12)", color: "#34D399" } : { background: "rgba(217,119,6,0.12)", color: "#FCD34D" }}>
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
