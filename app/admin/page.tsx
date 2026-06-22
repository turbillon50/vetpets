"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { KPIS, CITAS, HOSPEDADOS, INVENTARIO } from "@/lib/demo-data"
import { Calendar, PawPrint, Hotel, GraduationCap, TrendingUp, AlertCircle, ChevronRight } from "lucide-react"

export default function AdminDashboard() {
  const stockBajo = INVENTARIO.filter(i => i.stock < i.minimo)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Panel de Control</h1>
        <p className="text-[#A3A3A3] text-sm mt-1">Vet & Pets Care · {new Date().toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"})}</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Citas hoy", val: KPIS.citas_hoy, icon: <Calendar size={20} />, color: "#B91C1C", sub: "confirmadas" },
          { label: "Pacientes/mes", val: KPIS.pacientes_mes, icon: <PawPrint size={20} />, color: "#D97706", sub: "este mes" },
          { label: "Hospedados", val: KPIS.hospedados_activos, icon: <Hotel size={20} />, color: "#059669", sub: "activos ahora" },
          { label: "Alumnos K9", val: KPIS.alumnos_activos, icon: <GraduationCap size={20} />, color: "#7C3AED", sub: "en curso" },
        ].map((k) => (
          <motion.div key={k.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-xl p-5" style={{ background: "#141414", border: `1px solid ${k.color}25` }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${k.color}18`, color: k.color }}>
                {k.icon}
              </div>
            </div>
            <div className="text-3xl font-black text-white">{k.val}</div>
            <div className="text-xs text-[#A3A3A3] mt-0.5">{k.label}</div>
            <div className="text-[10px] text-[#525252]">{k.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Ingresos */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(185,28,28,0.2)" }}>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-red-400" />
            <span className="text-sm font-bold text-white">Ingresos</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#A3A3A3]">Esta semana</span>
              <span className="font-black text-white">${KPIS.ingresos_semana.toLocaleString()} <span className="text-xs text-[#A3A3A3]">MXN</span></span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#A3A3A3]">Este mes</span>
              <span className="font-black text-gold-gradient text-xl">${KPIS.ingresos_mes.toLocaleString()} <span className="text-xs text-[#A3A3A3]">MXN</span></span>
            </div>
            <div className="w-full rounded-full h-2 mt-2" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="h-2 rounded-full" style={{ width: "68%", background: "linear-gradient(90deg,#B91C1C,#D97706)" }} />
            </div>
            <div className="text-[10px] text-[#A3A3A3]">68% de la meta mensual</div>
          </div>
        </div>

        {/* Alertas stock */}
        <div className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(239,68,68,0.15)" }}>
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle size={16} className="text-red-400" />
            <span className="text-sm font-bold text-white">Stock bajo ({stockBajo.length})</span>
          </div>
          {stockBajo.map(item => (
            <div key={item.id} className="flex items-center justify-between py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div>
                <div className="text-sm text-white">{item.nombre}</div>
                <div className="text-xs text-[#A3A3A3]">{item.categoria}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-[#EF4444]">{item.stock} restantes</div>
                <div className="text-[10px] text-[#525252]">Mínimo: {item.minimo}</div>
              </div>
            </div>
          ))}
          <Link href="/admin/inventario" className="flex items-center gap-1 text-xs font-semibold text-red-400 mt-3 hover:text-red-300">
            Ver inventario <ChevronRight size={12} />
          </Link>
        </div>
      </div>

      {/* Citas de hoy */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white">Citas de hoy</h2>
          <Link href="/admin/citas" className="text-xs text-red-400 flex items-center gap-1">Ver todas <ChevronRight size={12} /></Link>
        </div>
        <div className="space-y-2">
          {CITAS.slice(0,4).map(c => (
            <div key={c.id} className="rounded-xl px-4 py-3 flex items-center justify-between"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-3">
                <div className="text-sm font-bold text-[#D97706] w-12 shrink-0">{c.hora}</div>
                <div>
                  <div className="text-sm font-semibold text-white">{c.mascota} · {c.propietario}</div>
                  <div className="text-xs text-[#A3A3A3]">{c.tipo}</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0"
                style={c.status === "confirmada" ? { background: "rgba(5,150,105,0.12)", color: "#34D399" } : { background: "rgba(217,119,6,0.12)", color: "#FCD34D" }}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hospedados activos */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white">Hotel — Hospedados activos</h2>
          <Link href="/admin/hotel" className="text-xs text-red-400 flex items-center gap-1">Ver todos <ChevronRight size={12} /></Link>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {HOSPEDADOS.filter(h=>h.status==="hospedado").map(h => (
            <div key={h.id} className="rounded-xl p-4" style={{ background: "#141414", border: "1px solid rgba(5,150,105,0.15)" }}>
              <div className="font-bold text-white">{h.mascota}</div>
              <div className="text-xs text-[#A3A3A3]">{h.raza} · {h.propietario}</div>
              <div className="text-xs text-[#D97706] mt-2">{h.habitacion}</div>
              <div className="text-xs text-[#525252]">Salida: {new Date(h.salida).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
