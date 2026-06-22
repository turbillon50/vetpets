"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { HABITACIONES_HOTEL, HOSPEDADOS, MASCOTAS } from "@/lib/demo-data"
import { Hotel, Check, X } from "lucide-react"

export default function HotelPage() {
  const [showModal, setShowModal] = useState(false)
  const [saved, setSaved] = useState(false)
  const misHospedajes = HOSPEDADOS.filter(h => ["hospedado","reservada"].includes(h.status)).slice(0,1)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-white">Hotel Campestre</h1>
        <button onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-xl text-sm font-bold text-white shine-hover"
          style={{ background: "linear-gradient(135deg,#059669,#047857)" }}>
          + Reservar
        </button>
      </div>

      {misHospedajes.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-[#A3A3A3] uppercase tracking-wider mb-3">Reserva activa</h2>
          {misHospedajes.map(h => (
            <div key={h.id} className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(5,150,105,0.25)" }}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-bold text-white text-lg">{h.mascota}</div>
                  <div className="text-sm text-[#A3A3A3]">{h.raza} · {h.habitacion}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full font-semibold"
                  style={{ background: "rgba(5,150,105,0.15)", color: "#34D399" }}>{h.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="text-[10px] text-[#525252] uppercase mb-1">Check-in</div>
                  <div className="text-sm font-semibold text-white">{new Date(h.entrada).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</div>
                </div>
                <div className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <div className="text-[10px] text-[#525252] uppercase mb-1">Check-out</div>
                  <div className="text-sm font-semibold text-white">{new Date(h.salida).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-[#A3A3A3]">📝 {h.notas}</div>
            </div>
          ))}
        </div>
      )}

      <div>
        <h2 className="text-sm font-bold text-[#A3A3A3] uppercase tracking-wider mb-3">Habitaciones disponibles</h2>
        <div className="space-y-3">
          {HABITACIONES_HOTEL.map(h => (
            <div key={h.id} className="rounded-xl p-4 flex items-center justify-between"
              style={{ background: "#141414", border: `1px solid ${h.disponible ? "rgba(5,150,105,0.2)" : "rgba(255,255,255,0.05)"}` }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: h.disponible ? "rgba(5,150,105,0.12)" : "rgba(255,255,255,0.04)" }}>
                  <Hotel size={18} style={{ color: h.disponible ? "#34D399" : "#525252" }} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{h.nombre}</div>
                  <div className="text-xs text-[#A3A3A3]">{h.tipo} · {h.capacidad}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-black text-gold-gradient">${h.precio}</div>
                <div className="text-[10px] text-[#A3A3A3]">MXN/día</div>
                <div className="text-[10px] mt-0.5" style={{ color: h.disponible ? "#34D399" : "#EF4444" }}>
                  {h.disponible ? "● Disponible" : "● Ocupada"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-2xl p-6 space-y-4"
            style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-white">Reservar Hotel</h2>
              <button onClick={() => setShowModal(false)} className="text-[#525252]"><X size={20} /></button>
            </div>
            {["Mascota","Habitación","Check-in","Check-out","Notas especiales"].map(f => (
              <div key={f}>
                <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider font-semibold">{f}</label>
                {f === "Mascota" ? (
                  <select className="w-full px-3 py-2.5 rounded-xl text-sm text-white bg-[#1C1C1C] border border-white/10 outline-none">
                    {MASCOTAS.map(m => <option key={m.id}>{m.nombre}</option>)}
                  </select>
                ) : f === "Habitación" ? (
                  <select className="w-full px-3 py-2.5 rounded-xl text-sm text-white bg-[#1C1C1C] border border-white/10 outline-none">
                    {HABITACIONES_HOTEL.filter(h=>h.disponible).map(h => <option key={h.id}>{h.nombre} — ${h.precio}/día</option>)}
                  </select>
                ) : f === "Notas especiales" ? (
                  <textarea rows={2} className="w-full px-3 py-2.5 rounded-xl text-sm text-white bg-[#1C1C1C] border border-white/10 outline-none resize-none" placeholder="Dieta especial, medicamentos, etc." />
                ) : (
                  <input type="date" className="w-full px-3 py-2.5 rounded-xl text-sm text-white bg-[#1C1C1C] border border-white/10 outline-none" />
                )}
              </div>
            ))}
            <button onClick={() => { setSaved(true); setTimeout(() => { setShowModal(false); setSaved(false) }, 1500) }}
              className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 shine-hover"
              style={{ background: "linear-gradient(135deg,#059669,#047857)" }}>
              {saved ? <><Check size={16} /> ¡Reserva confirmada!</> : "Confirmar reserva"}
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
