"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { MASCOTAS, EXPEDIENTE, VACUNAS } from "@/lib/demo-data"
import { Syringe, FileText, ChevronDown, ChevronUp } from "lucide-react"

export default function MascotasPage() {
  const [selected, setSelected] = useState(MASCOTAS[0].id)
  const [tab, setTab] = useState<"expediente"|"vacunas">("expediente")
  const mascota = MASCOTAS.find(m => m.id === selected)!
  const exp = EXPEDIENTE.filter(e => e.mascota_id === selected)
  const vac = VACUNAS.filter(v => v.mascota_id === selected)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-white">Mis Mascotas</h1>

      {/* Selector */}
      <div className="flex gap-3">
        {MASCOTAS.map(m => (
          <button key={m.id} onClick={() => setSelected(m.id)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all"
            style={selected === m.id
              ? { background: "rgba(185,28,28,0.15)", border: "1px solid rgba(185,28,28,0.4)", color: "#F5F5F5" }
              : { background: "#141414", border: "1px solid rgba(255,255,255,0.06)", color: "#A3A3A3" }}>
            <span className="text-2xl">{m.foto}</span>
            <div className="text-left">
              <div className="font-bold text-sm">{m.nombre}</div>
              <div className="text-xs text-[#A3A3A3]">{m.raza}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Perfil */}
      <div className="rounded-2xl p-6" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-start gap-4 mb-6">
          <div className="text-5xl">{mascota.foto}</div>
          <div className="flex-1">
            <h2 className="text-xl font-black text-white">{mascota.nombre}</h2>
            <p className="text-[#A3A3A3] text-sm">{mascota.raza} · {mascota.especie}</p>
            <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(5,150,105,0.12)", color: "#34D399" }}>
              ● {mascota.status}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Edad", val: mascota.edad },
            { label: "Peso", val: mascota.peso },
            { label: "Color", val: mascota.color },
            { label: "Microchip", val: mascota.chip.slice(-6) + "..." },
          ].map(d => (
            <div key={d.label} className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-[10px] text-[#525252] uppercase tracking-wider mb-1">{d.label}</div>
              <div className="text-sm font-semibold text-white">{d.val}</div>
            </div>
          ))}
        </div>
        {mascota.alergias !== "Ninguna conocida" && (
          <div className="mt-4 p-3 rounded-lg" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
            <span className="text-xs text-red-400 font-semibold">⚠ Alergia: </span>
            <span className="text-xs text-[#A3A3A3]">{mascota.alergias}</span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {(["expediente", "vacunas"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all"
            style={tab === t
              ? { background: "rgba(185,28,28,0.15)", color: "#EF4444", border: "1px solid rgba(185,28,28,0.3)" }
              : { color: "#A3A3A3", border: "1px solid transparent" }}>
            {t === "expediente" ? <FileText size={16} /> : <Syringe size={16} />}
            {t === "expediente" ? "Expediente" : "Vacunas"}
          </button>
        ))}
      </div>

      {tab === "expediente" && (
        <div className="space-y-3">
          {exp.map(e => (
            <motion.div key={e.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs px-2 py-0.5 rounded font-semibold mr-2"
                    style={{ background: e.tipo === "Cirugía" ? "rgba(239,68,68,0.15)" : "rgba(185,28,28,0.12)", color: e.tipo === "Cirugía" ? "#EF4444" : "#F87171" }}>
                    {e.tipo}
                  </span>
                  <span className="text-xs text-[#525252]">{e.veterinario}</span>
                </div>
                <div className="text-xs text-[#A3A3A3]">{new Date(e.fecha).toLocaleDateString("es-MX", { day:"numeric", month:"short", year:"2-digit" })}</div>
              </div>
              <div className="text-sm font-semibold text-white mb-1">{e.diagnostico}</div>
              <div className="text-xs text-[#A3A3A3]">Tratamiento: {e.tratamiento}</div>
              <div className="flex justify-between items-center mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-xs text-[#A3A3A3] italic">{e.notas}</div>
                <div className="text-sm font-bold text-gold-gradient">${e.costo.toLocaleString()} MXN</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {tab === "vacunas" && (
        <div className="space-y-3">
          {vac.map(v => (
            <motion.div key={v.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="rounded-xl p-4 flex items-center justify-between"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(5,150,105,0.12)" }}>
                  <Syringe size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{v.nombre}</div>
                  <div className="text-xs text-[#A3A3A3]">Aplicada: {new Date(v.fecha).toLocaleDateString("es-MX", { day:"numeric", month:"short", year:"2-digit" })}</div>
                  <div className="text-xs text-[#525252]">Lote: {v.lote}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#A3A3A3] mb-1">Próxima</div>
                <div className="text-sm font-bold text-[#D97706]">{new Date(v.proxima).toLocaleDateString("es-MX", { day:"numeric", month:"short", year:"2-digit" })}</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
