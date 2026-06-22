"use client"
import { motion } from "framer-motion"
import { CURSOS } from "@/lib/demo-data"
import { GraduationCap, ChevronRight, Users } from "lucide-react"

const nivelColor: Record<string,string> = {
  "Inicial": "#34D399",
  "Básico": "#60A5FA",
  "Avanzado": "#A78BFA",
  "Protección": "#EF4444",
  "Especialización": "#D97706",
}

export default function CursosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Instituto K9</h1>
        <p className="text-[#A3A3A3] text-sm mt-1">Centro de Adiestramiento Country Club · Apan, Hidalgo</p>
      </div>

      <div className="space-y-4">
        {CURSOS.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="rounded-2xl p-5" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mr-2"
                  style={{ background: `${nivelColor[c.nivel]}15`, color: nivelColor[c.nivel] }}>
                  {c.nivel}
                </span>
                <h3 className="text-base font-black text-white mt-2">{c.nombre}</h3>
                <p className="text-xs text-[#D97706]">{c.subtitulo}</p>
              </div>
              <div className="text-right ml-4 shrink-0">
                <div className="text-2xl font-black text-gold-gradient">${c.precio.toLocaleString()}</div>
                <div className="text-[10px] text-[#A3A3A3]">MXN</div>
              </div>
            </div>
            <p className="text-xs text-[#A3A3A3] leading-relaxed mb-4">{c.descripcion}</p>
            <div className="space-y-1.5 mb-4">
              {c.ejercicios.slice(0,3).map(e => (
                <div key={e} className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: nivelColor[c.nivel] }} />{e}
                </div>
              ))}
              {c.ejercicios.length > 3 && <div className="text-xs text-[#525252]">+{c.ejercicios.length-3} más...</div>}
            </div>
            <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-3">
                <div className="text-[10px] text-[#A3A3A3]">{c.duracion}</div>
                <div className="text-[10px] text-[#A3A3A3]">·</div>
                <div className="text-[10px] text-[#A3A3A3]">{c.sesiones}</div>
                <div className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(5,150,105,0.1)", color: "#34D399" }}>
                  <Users size={10} />{c.alumnos_activos} activos
                </div>
              </div>
              <button className="flex items-center gap-1 text-xs font-semibold text-[#D97706] hover:text-yellow-300 transition-colors">
                Inscribir <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
