"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { CITAS, MASCOTAS } from "@/lib/demo-data"
import { IconCalendar, IconClock, IconCircleCheck, IconPlus, IconX } from "@tabler/icons-react"

export default function CitasPage() {
  const [showModal, setShowModal] = useState(false)
  const [saved, setSaved] = useState(false)
  const misCitas = CITAS.slice(0, 3)

  function agendar() {
    setSaved(true)
    setTimeout(() => { setShowModal(false); setSaved(false) }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-white">Mis Citas</h1>
        <button onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white shine-hover"
          style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)" }}>
          <IconPlus size={16} /> Nueva cita
        </button>
      </div>

      <div className="space-y-3">
        {misCitas.map((c) => (
          <motion.div key={c.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(185,28,28,0.12)" }}>
                  <IconCalendar size={20} className="text-red-400" />
                </div>
                <div>
                  <div className="font-bold text-white">{c.tipo}</div>
                  <div className="text-xs text-[#A3A3A3] mt-0.5">{c.mascota} · {c.veterinario}</div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1 text-xs text-[#A3A3A3]">
                      <IconCalendar size={12} />
                      {new Date(c.fecha).toLocaleDateString("es-MX", { weekday:"short", day:"numeric", month:"short" })}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#D97706]">
                      <IconClock size={12} />{c.hora}
                    </div>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <span className="text-[10px] px-2 py-1 rounded-full font-semibold"
                  style={c.status === "confirmada"
                    ? { background: "rgba(5,150,105,0.12)", color: "#34D399" }
                    : { background: "rgba(217,119,6,0.12)", color: "#FCD34D" }}>
                  {c.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal nueva cita */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-2xl p-6 space-y-4"
            style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-white">Nueva cita</h2>
              <button onClick={() => setShowModal(false)} className="text-[#525252] hover:text-white">
                <IconX size={20} />
              </button>
            </div>
            {["mascota", "tipo", "fecha", "hora"].map(f => (
              <div key={f}>
                <label className="block text-xs text-[#A3A3A3] mb-1.5 uppercase tracking-wider font-semibold capitalize">{f}</label>
                {f === "mascota" ? (
                  <select className="w-full px-3 py-2.5 rounded-xl text-sm text-white bg-[#1C1C1C] border border-white/10 outline-none">
                    {MASCOTAS.map(m => <option key={m.id}>{m.nombre} ({m.raza})</option>)}
                  </select>
                ) : f === "tipo" ? (
                  <select className="w-full px-3 py-2.5 rounded-xl text-sm text-white bg-[#1C1C1C] border border-white/10 outline-none">
                    {["Consulta general","Vacunación","Desparasitación","Revisión","Cirugía menor"].map(o => <option key={o}>{o}</option>)}
                  </select>
                ) : (
                  <input type={f === "fecha" ? "date" : "time"}
                    className="w-full px-3 py-2.5 rounded-xl text-sm text-white bg-[#1C1C1C] border border-white/10 outline-none" />
                )}
              </div>
            ))}
            <button onClick={agendar}
              className="w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 shine-hover"
              style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)" }}>
              {saved ? <><IconCircleCheck size={16} /> ¡Cita agendada!</> : "Agendar cita"}
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
