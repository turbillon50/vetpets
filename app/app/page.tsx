"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { MASCOTAS, CITAS, VACUNAS } from "@/lib/demo-data"
import { IconCalendar, IconPaw, IconBuildingCastle, IconBell, IconChevronRight, IconClock } from "@tabler/icons-react"

const ri = { initial:{opacity:0,y:10}, animate:{opacity:1,y:0}, transition:{duration:0.35,ease:[0.22,1,.36,1]} }
const c  = { animate:{ transition:{ staggerChildren:0.06 } } }

export default function AppDashboard() {
  const proxCita = CITAS[0]
  const vacuna   = VACUNAS[0]
  return (
    <motion.div initial="initial" animate="animate" variants={c} style={{ display:"flex", flexDirection:"column", gap:18 }}>
      <motion.div variants={ri}>
        <h1 style={{ fontSize:22, fontWeight:800, color:"var(--color-text)", letterSpacing:"-0.5px" }}>Hola, Sofía 👋</h1>
        <p style={{ fontSize:13, color:"var(--color-text-muted)", marginTop:3 }}>Todo al día con tus mascotas</p>
      </motion.div>

      {/* Alerta vacuna */}
      <motion.div variants={ri} style={{
        padding:"13px 14px", borderRadius:12,
        background:"rgba(245,158,11,0.07)", border:"1px solid rgba(245,158,11,0.2)",
        display:"flex", alignItems:"center", gap:10,
      }}>
        <IconBell size={16} stroke={2} style={{ color:"var(--amber)", flexShrink:0 }} />
        <div style={{ flex:1 }}>
          <div style={{ fontSize:13, fontWeight:600, color:"var(--color-text)" }}>Vacuna próxima — Thor</div>
          <div style={{ fontSize:11, color:"var(--color-text-muted)", marginTop:1 }}>
            {vacuna.nombre} vence el {new Date(vacuna.proxima).toLocaleDateString("es-MX",{day:"numeric",month:"long"})}
          </div>
        </div>
        <IconChevronRight size={14} stroke={2} style={{ color:"var(--amber)" }} />
      </motion.div>

      {/* Mascotas */}
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
          <h2 style={{ fontSize:14, fontWeight:700, color:"var(--color-text)" }}>Mis mascotas</h2>
          <Link href="/app/mascotas" style={{ fontSize:11, fontWeight:600, color:"var(--red)", textDecoration:"none", display:"flex", alignItems:"center", gap:2 }}>
            Ver todas <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
          {MASCOTAS.map(m => (
            <motion.div key={m.id} variants={ri} whileHover={{ y:-2 }}>
              <Link href="/app/mascotas" style={{
                display:"block", padding:"14px", borderRadius:14, textDecoration:"none",
                background:"var(--color-surface)", border:"1px solid var(--color-border)",
                boxShadow:"var(--shadow-xs)",
              }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{m.foto}</div>
                <div style={{ fontSize:14, fontWeight:700, color:"var(--color-text)" }}>{m.nombre}</div>
                <div style={{ fontSize:11, color:"var(--color-text-muted)", marginTop:1 }}>{m.raza}</div>
                <div style={{ fontSize:10, color:"var(--color-text-muted)" }}>{m.edad} · {m.peso}</div>
                <div style={{
                  display:"inline-flex", alignItems:"center", gap:4, marginTop:8,
                  padding:"2px 8px", borderRadius:99, fontSize:9, fontWeight:600,
                  background:"rgba(5,150,105,0.09)", color:"#059669",
                }}>
                  <div style={{ width:5,height:5,borderRadius:"50%",background:"#059669" }} />
                  {m.status}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Próxima cita */}
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
          <h2 style={{ fontSize:14, fontWeight:700, color:"var(--color-text)" }}>Próxima cita</h2>
          <Link href="/app/citas" style={{ fontSize:11, fontWeight:600, color:"var(--red)", textDecoration:"none", display:"flex", alignItems:"center", gap:2 }}>
            Ver agenda <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <motion.div variants={ri} style={{
          padding:"15px 14px", borderRadius:14,
          background:"var(--color-surface)", border:"1px solid var(--red-border)",
          boxShadow:"var(--shadow-xs)",
        }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ width:40,height:40,borderRadius:12,background:"var(--red-light)",display:"flex",alignItems:"center",justifyContent:"center" }}>
                <IconCalendar size={19} stroke={1.5} style={{ color:"var(--red)" }} />
              </div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:"var(--color-text)" }}>{proxCita.tipo}</div>
                <div style={{ fontSize:11, color:"var(--color-text-muted)" }}>{proxCita.mascota} · {proxCita.veterinario}</div>
              </div>
            </div>
            <div style={{ textAlign:"right" }}>
              <div style={{ fontSize:13, fontWeight:700, color:"var(--color-text)" }}>
                {new Date(proxCita.fecha).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}
              </div>
              <div style={{ fontSize:11, color:"var(--amber)", display:"flex", alignItems:"center", gap:2, justifyContent:"flex-end", marginTop:1 }}>
                <IconClock size={10} stroke={2} />{proxCita.hora}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Acciones rápidas */}
      <div>
        <h2 style={{ fontSize:14, fontWeight:700, color:"var(--color-text)", marginBottom:10 }}>Acciones rápidas</h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
          {[
            { href:"/app/citas",  Icon:IconCalendar,        label:"Agendar cita",    color:"var(--red)",   bg:"var(--red-light)" },
            { href:"/app/hotel",  Icon:IconBuildingCastle,  label:"Reservar hotel",  color:"#059669",      bg:"rgba(5,150,105,0.09)" },
            { href:"/app/cursos", Icon:IconPaw,             label:"Ver cursos",      color:"#7c3aed",      bg:"rgba(124,58,237,0.09)" },
          ].map(a => (
            <Link key={a.href} href={a.href} style={{
              display:"flex", flexDirection:"column", alignItems:"center", gap:8,
              padding:"14px 8px", borderRadius:14, textDecoration:"none",
              background:"var(--color-surface)", border:"1px solid var(--color-border)",
              boxShadow:"var(--shadow-xs)",
            }}>
              <div style={{ width:40,height:40,borderRadius:12,background:a.bg,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <a.Icon size={20} stroke={1.5} style={{ color:a.color }} />
              </div>
              <span style={{ fontSize:10, color:"var(--color-text-muted)", fontWeight:500, textAlign:"center", lineHeight:1.3 }}>{a.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
