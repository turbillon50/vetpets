"use client"
import { HOSPEDADOS, HABITACIONES_HOTEL } from "@/lib/demo-data"
import { Hotel } from "lucide-react"

export default function HotelAdmin() {
  const activos = HOSPEDADOS.filter(h => h.status !== "completado")
  const disponibles = HABITACIONES_HOTEL.filter(h => h.disponible).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-white">Hotel Campestre</h1>
        <div className="text-right">
          <div className="text-2xl font-black text-gold-gradient">{activos.length}</div>
          <div className="text-xs text-[#A3A3A3]">hospedados</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Ocupadas", val: HABITACIONES_HOTEL.filter(h=>!h.disponible).length, color: "#B91C1C" },
          { label: "Disponibles", val: disponibles, color: "#059669" },
          { label: "Total cuartos", val: HABITACIONES_HOTEL.length, color: "#D97706" },
        ].map(k => (
          <div key={k.label} className="rounded-xl p-4 text-center" style={{ background: "#141414", border: `1px solid ${k.color}25` }}>
            <div className="text-2xl font-black" style={{ color: k.color }}>{k.val}</div>
            <div className="text-xs text-[#A3A3A3] mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {activos.map(h => (
          <div key={h.id} className="rounded-xl p-4" style={{ background: "#141414", border: h.status==="hospedado" ? "1px solid rgba(5,150,105,0.2)" : "1px solid rgba(217,119,6,0.2)" }}>
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-white">{h.mascota} <span className="text-[#A3A3A3] font-normal text-sm">— {h.raza}</span></div>
                <div className="text-xs text-[#A3A3A3]">{h.propietario}</div>
                <div className="text-xs text-[#D97706] mt-1">{h.habitacion}</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                  style={h.status==="hospedado" ? { background:"rgba(5,150,105,0.12)", color:"#34D399" } : { background:"rgba(217,119,6,0.12)", color:"#FCD34D" }}>
                  {h.status}
                </span>
                <div className="text-xs font-bold text-gold-gradient mt-1">${(h.costo_dia).toLocaleString()}/día</div>
              </div>
            </div>
            <div className="flex gap-4 mt-3 text-xs text-[#525252]">
              <span>Entrada: {new Date(h.entrada).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</span>
              <span>Salida: {new Date(h.salida).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</span>
            </div>
            {h.notas && <div className="mt-2 text-xs text-[#A3A3A3]">📝 {h.notas}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
