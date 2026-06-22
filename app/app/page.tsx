"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { MASCOTAS, CITAS, VACUNAS, KPIS } from "@/lib/demo-data"
import { Calendar, PawPrint, Hotel, Bell, ChevronRight, AlertCircle } from "lucide-react"

export default function AppDashboard() {
  const proximaCita = CITAS[0]
  const vacunaProxima = VACUNAS.filter(v => v.mascota_id === "m1")[0]

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-black text-white">Hola, Sofía 👋</h1>
        <p className="text-[#A3A3A3] text-sm mt-1">Todo al día con tus mascotas</p>
      </motion.div>

      {/* Alert vacuna */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="rounded-xl p-4 flex items-start gap-3"
        style={{ background: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.25)" }}>
        <Bell size={18} className="text-yellow-400 mt-0.5 shrink-0" />
        <div>
          <div className="text-sm font-semibold text-white">Vacuna próxima — Thor</div>
          <div className="text-xs text-[#A3A3A3] mt-0.5">{vacunaProxima.nombre} vence el {new Date(vacunaProxima.proxima).toLocaleDateString("es-MX", { day:"numeric", month:"long" })}</div>
        </div>
        <Link href="/app/mascotas" className="ml-auto text-[#D97706] hover:text-yellow-300">
          <ChevronRight size={16} />
        </Link>
      </motion.div>

      {/* Mis mascotas */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white">Mis mascotas</h2>
          <Link href="/app/mascotas" className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1">Ver todas <ChevronRight size={12} /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {MASCOTAS.map((m) => (
            <Link key={m.id} href="/app/mascotas"
              className="rounded-xl p-4 flex items-start gap-3 hover:border-red-700 transition-all"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-3xl">{m.foto}</div>
              <div>
                <div className="font-bold text-white text-sm">{m.nombre}</div>
                <div className="text-xs text-[#A3A3A3]">{m.raza}</div>
                <div className="text-xs text-[#A3A3A3]">{m.edad} · {m.peso}</div>
                <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{ background: "rgba(5,150,105,0.12)", color: "#34D399" }}>
                  <div className="w-1 h-1 rounded-full bg-emerald-400" /> {m.status}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Próxima cita */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white">Próxima cita</h2>
          <Link href="/app/citas" className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1">Ver agenda <ChevronRight size={12} /></Link>
        </div>
        <div className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(185,28,28,0.2)" }}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(185,28,28,0.15)" }}>
                <Calendar size={20} className="text-red-400" />
              </div>
              <div>
                <div className="font-bold text-white">{proximaCita.tipo}</div>
                <div className="text-xs text-[#A3A3A3]">{proximaCita.mascota} · {proximaCita.veterinario}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-white">{new Date(proximaCita.fecha).toLocaleDateString("es-MX", { day:"numeric", month:"short" })}</div>
              <div className="text-xs text-[#D97706]">{proximaCita.hora}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div>
        <h2 className="text-base font-bold text-white mb-4">Acciones rápidas</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { href: "/app/citas", icon: <Calendar size={22} />, label: "Agendar cita", color: "#B91C1C" },
            { href: "/app/hotel", icon: <Hotel size={22} />, label: "Reservar hotel", color: "#059669" },
            { href: "/app/cursos", icon: <PawPrint size={22} />, label: "Ver cursos", color: "#D97706" },
          ].map(a => (
            <Link key={a.href} href={a.href}
              className="rounded-xl p-4 flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform"
              style={{ background: "#141414", border: `1px solid rgba(255,255,255,0.06)` }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${a.color}22`, color: a.color }}>
                {a.icon}
              </div>
              <span className="text-xs text-[#A3A3A3] font-medium leading-tight">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
