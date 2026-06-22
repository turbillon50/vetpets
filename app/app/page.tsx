"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { MASCOTAS, CITAS, VACUNAS } from "@/lib/demo-data"
import { IconCalendar, IconPaw, IconBuildingCastle, IconBell, IconChevronRight, IconClock } from "@tabler/icons-react"

const ri = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: [0.22,1,.36,1] } }
const cont = { animate: { transition: { staggerChildren: 0.07 } } }

export default function AppDashboard() {
  const proxCita = CITAS[0]
  const vacuna = VACUNAS[0]

  return (
    <motion.div initial="initial" animate="animate" variants={cont} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <motion.div variants={ri}>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: "var(--txt)", letterSpacing: "-0.5px" }}>Hola, Sofía 👋</h1>
        <p style={{ fontSize: 13, color: "var(--txt3)", marginTop: 3 }}>Todo al día con tus mascotas</p>
      </motion.div>

      {/* Alerta vacuna */}
      <motion.div variants={ri} style={{
        padding: "14px 16px", borderRadius: 14,
        background: "var(--amber-dim)", border: "1px solid rgba(245,158,11,0.2)",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <IconBell size={16} stroke={2} style={{ color: "var(--amber)", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--txt)" }}>Vacuna próxima — Thor</div>
          <div style={{ fontSize: 11, color: "var(--txt3)", marginTop: 2 }}>
            {vacuna.nombre} vence el {new Date(vacuna.proxima).toLocaleDateString("es-MX",{day:"numeric",month:"long"})}
          </div>
        </div>
        <IconChevronRight size={14} stroke={2} style={{ color: "var(--amber)" }} />
      </motion.div>

      {/* Mascotas */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)", letterSpacing: ".02em" }}>Mis mascotas</h2>
          <Link href="/app/mascotas" style={{ display:"flex", alignItems:"center", gap:2, fontSize:11, color:"#f87171", textDecoration:"none", fontWeight:600 }}>
            Ver todas <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {MASCOTAS.map((m) => (
            <motion.div key={m.id} variants={ri} whileHover={{ y: -2 }}>
              <Link href="/app/mascotas" style={{
                display: "block", padding: 16, borderRadius: 16, textDecoration: "none",
                background: "var(--card)", border: "1px solid var(--border)",
                transition: "border-color 0.2s",
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{m.foto}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}>{m.nombre}</div>
                <div style={{ fontSize: 11, color: "var(--txt3)", marginTop: 2 }}>{m.raza}</div>
                <div style={{ fontSize: 10, color: "var(--txt3)" }}>{m.edad} · {m.peso}</div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 4, marginTop: 8,
                  padding: "3px 8px", borderRadius: 99, fontSize: 9, fontWeight: 600,
                  background: "var(--green-dim)", color: "var(--green)",
                }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)" }} />
                  {m.status}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Próxima cita */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}>Próxima cita</h2>
          <Link href="/app/citas" style={{ display:"flex", alignItems:"center", gap:2, fontSize:11, color:"#f87171", textDecoration:"none", fontWeight:600 }}>
            Ver agenda <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <motion.div variants={ri} style={{
          padding: 18, borderRadius: 16,
          background: "var(--card)", border: "1px solid rgba(185,28,28,0.2)",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: "rgba(185,28,28,0.12)", display: "flex",
                alignItems: "center", justifyContent: "center",
              }}>
                <IconCalendar size={20} stroke={1.5} style={{ color: "#f87171" }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}>{proxCita.tipo}</div>
                <div style={{ fontSize: 11, color: "var(--txt3)", marginTop: 2 }}>{proxCita.mascota} · {proxCita.veterinario}</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--txt)" }}>
                {new Date(proxCita.fecha).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}
              </div>
              <div style={{ fontSize: 11, color: "var(--amber)", display: "flex", alignItems: "center", gap: 3, justifyContent: "flex-end", marginTop: 2 }}>
                <IconClock size={11} stroke={2} />{proxCita.hora}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Acciones */}
      <div>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)", marginBottom: 12 }}>Acciones rápidas</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            { href: "/app/citas",  icon: <IconCalendar size={22} stroke={1.5} />, label: "Agendar cita",    color: "var(--red-2)" },
            { href: "/app/hotel",  icon: <IconBuildingCastle size={22} stroke={1.5} />, label: "Reservar hotel", color: "var(--green)" },
            { href: "/app/cursos", icon: <IconPaw size={22} stroke={1.5} />, label: "Ver cursos",     color: "var(--silver)" },
          ].map(a => (
            <Link key={a.href} href={a.href} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              padding: "16px 8px", borderRadius: 14, textDecoration: "none",
              background: "var(--card)", border: "1px solid var(--border)",
              transition: "all 0.2s ease",
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: `${a.color}18`, color: a.color,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{a.icon}</div>
              <span style={{ fontSize: 10, color: "var(--txt2)", fontWeight: 500, textAlign: "center", lineHeight: 1.3 }}>{a.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
