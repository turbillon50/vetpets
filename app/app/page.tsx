"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  IconBell, IconCalendar, IconBuildingCastle, IconDog,
  IconChevronRight, IconClock, IconStethoscope, IconVaccine,
} from "@tabler/icons-react"
import { MASCOTAS, CITAS, KPIS } from "@/lib/demo-data"

// ── Ripple helper ──────────────────────────────────────────
function ripple(e: React.MouseEvent) {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  const x = e.clientX - rect.left, y = e.clientY - rect.top
  const r = document.createElement("span")
  r.style.cssText = `position:absolute;width:8px;height:8px;border-radius:50%;
    background:rgba(220,38,38,0.35);left:${x-4}px;top:${y-4}px;
    pointer-events:none;animation:ripple .55s ease-out forwards;`
  el.appendChild(r)
  setTimeout(() => r.remove(), 600)
}

// ── Avatar mascota — inicial de color, sin emojis ─────────
function PetAvatar({ nombre, color, size = 52 }: { nombre:string; color:string; size?:number }) {
  return (
    <div style={{
      width:size, height:size, borderRadius:"50%",
      background:`${color}18`,
      border:`1.5px solid ${color}35`,
      display:"flex", alignItems:"center", justifyContent:"center",
      flexShrink:0,
    }}>
      <span style={{ fontSize:size*.38, fontWeight:800, color, lineHeight:1 }}>
        {nombre[0]}
      </span>
    </div>
  )
}

const rise = (delay=0) => ({
  initial:{ opacity:0, y:14 },
  animate:{ opacity:1, y:0 },
  transition:{ duration:.45, delay, ease:[.22,1,.36,1] as any },
})

export default function AppHome() {
  return (
    <div style={{ background:"var(--bg)", minHeight:"100%" }}>

      {/* ── GREETING ─────────────────────────────────────── */}
      <motion.div {...rise(0)} style={{ padding:"22px 20px 0" }}>
        <p style={{ fontSize:12, color:"var(--txt3)", letterSpacing:".06em",
          textTransform:"uppercase", marginBottom:4 }}>
          Bienvenida
        </p>
        <h1 style={{ fontSize:26, fontWeight:800, color:"var(--txt)",
          letterSpacing:"-.5px", lineHeight:1.2 }}>
          Sofía Ramírez
        </h1>
        <p style={{ fontSize:13, color:"var(--txt2)", marginTop:4 }}>
          Todo al día con tus mascotas
        </p>
      </motion.div>

      {/* ── ALERTA VACUNA — glass card ───────────────────── */}
      <motion.div {...rise(.07)} style={{ padding:"18px 20px 0" }}>
        <div style={{
          background:"rgba(251,191,36,0.08)",
          border:"1px solid rgba(251,191,36,0.2)",
          borderRadius:"var(--r-lg)", padding:"14px 16px",
          display:"flex", alignItems:"center", gap:12,
          backdropFilter:"blur(8px)",
          position:"relative", overflow:"hidden",
        }}>
          <div style={{
            width:38, height:38, borderRadius:11, flexShrink:0,
            background:"rgba(251,191,36,0.15)",
            border:"1px solid rgba(251,191,36,0.3)",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <IconBell size={18} stroke={2} color="#fbbf24" />
          </div>
          <div style={{ flex:1 }}>
            <p style={{ fontSize:13, fontWeight:700, color:"#fbbf24", margin:0 }}>
              Vacuna próxima — Thor
            </p>
            <p style={{ fontSize:11, color:"rgba(251,191,36,.6)", margin:"3px 0 0" }}>
              Octavalente vence el 15 de julio
            </p>
          </div>
          <IconChevronRight size={15} stroke={2} color="rgba(251,191,36,.5)" />
        </div>
      </motion.div>

      {/* ── MIS MASCOTAS ─────────────────────────────────── */}
      <motion.div {...rise(.12)} style={{ padding:"26px 20px 0" }}>
        <div style={{ display:"flex", alignItems:"center",
          justifyContent:"space-between", marginBottom:14 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:"var(--txt)",
            letterSpacing:"-.2px" }}>
            Mis mascotas
          </h2>
          <Link href="/app/mascotas" style={{
            fontSize:12, fontWeight:600, color:"var(--red)",
            textDecoration:"none", display:"flex", alignItems:"center", gap:2,
          }}>
            Ver todas <IconChevronRight size={13} stroke={2.5} />
          </Link>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
          {MASCOTAS.map((m, i) => (
            <motion.div key={m.id}
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:.15 + i*.08, duration:.4, ease:[.22,1,.36,1] }}
              whileHover={{ y:-3, transition:{ duration:.2 } }}
              onClick={ripple}
              style={{
                background:"var(--card)",
                border:"1px solid var(--border)",
                borderRadius:"var(--r-lg)", padding:"16px 14px",
                cursor:"pointer", position:"relative", overflow:"hidden",
              }}>
              <PetAvatar nombre={m.nombre} color={m.avatar_color} size={48} />
              <p style={{ fontSize:15, fontWeight:700, color:"var(--txt)",
                margin:"12px 0 2px", letterSpacing:"-.2px" }}>
                {m.nombre}
              </p>
              <p style={{ fontSize:11, color:"var(--txt2)", margin:0 }}>
                {m.raza}
              </p>
              <p style={{ fontSize:11, color:"var(--txt3)", margin:"2px 0 12px" }}>
                {m.edad} · {m.peso}
              </p>
              <span style={{
                display:"inline-flex", alignItems:"center", gap:5,
                background:"var(--green-dim)", color:"var(--green)",
                border:"1px solid rgba(16,217,164,0.2)",
                borderRadius:99, padding:"3px 10px", fontSize:10, fontWeight:700,
              }}>
                <span style={{ width:5, height:5, borderRadius:"50%",
                  background:"var(--green)", display:"inline-block" }} />
                {m.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── PRÓXIMA CITA ─────────────────────────────────── */}
      <motion.div {...rise(.18)} style={{ padding:"26px 20px 0" }}>
        <div style={{ display:"flex", alignItems:"center",
          justifyContent:"space-between", marginBottom:14 }}>
          <h2 style={{ fontSize:16, fontWeight:700, color:"var(--txt)",
            letterSpacing:"-.2px" }}>
            Próxima cita
          </h2>
          <Link href="/app/citas" style={{
            fontSize:12, fontWeight:600, color:"var(--red)",
            textDecoration:"none", display:"flex", alignItems:"center", gap:2,
          }}>
            Ver agenda <IconChevronRight size={13} stroke={2.5} />
          </Link>
        </div>

        <motion.div
          whileHover={{ y:-2, transition:{ duration:.2 } }}
          style={{
            background:"var(--card)", border:"1px solid var(--border)",
            borderRadius:"var(--r-lg)", padding:"16px",
            display:"flex", alignItems:"center", gap:14,
            position:"relative", overflow:"hidden",
          }}>
          {/* Borde izquierdo rojo */}
          <div style={{ position:"absolute", left:0, top:12, bottom:12,
            width:3, borderRadius:99, background:"var(--red)",
            boxShadow:"0 0 10px var(--red-glow)" }} />
          <div style={{
            width:44, height:44, borderRadius:12, flexShrink:0,
            background:"var(--red-dim)", border:"1px solid rgba(220,38,38,.2)",
            display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <IconCalendar size={22} stroke={1.8} color="#dc2626" />
          </div>
          <div style={{ flex:1, paddingLeft:4 }}>
            <p style={{ fontSize:14, fontWeight:700, color:"var(--txt)", margin:0 }}>
              {CITAS[0].tipo}
            </p>
            <p style={{ fontSize:11, color:"var(--txt2)", margin:"3px 0 0" }}>
              {CITAS[0].mascota} · {CITAS[0].veterinario}
            </p>
          </div>
          <div style={{ textAlign:"right", flexShrink:0 }}>
            <p style={{ fontSize:13, fontWeight:700, color:"var(--txt)", margin:0 }}>
              28 jun
            </p>
            <p style={{ fontSize:11, fontWeight:600, color:"var(--amber)",
              margin:"3px 0 0", display:"flex", alignItems:"center",
              gap:3, justifyContent:"flex-end" }}>
              <IconClock size={11} stroke={2} /> {CITAS[0].hora}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ── ACCIONES RÁPIDAS ─────────────────────────────── */}
      <motion.div {...rise(.22)} style={{ padding:"26px 20px 0" }}>
        <h2 style={{ fontSize:16, fontWeight:700, color:"var(--txt)",
          letterSpacing:"-.2px", marginBottom:14 }}>
          Acciones rápidas
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10 }}>
          {[
            { label:"Agendar\ncita",   icon:<IconCalendar      size={24} stroke={1.8} color="#dc2626" />, bg:"var(--red-dim)",  border:"rgba(220,38,38,.2)",  href:"/app/citas"   },
            { label:"Reservar\nhotel", icon:<IconBuildingCastle size={24} stroke={1.8} color="#10d9a4" />, bg:"var(--green-dim)",border:"rgba(16,217,164,.2)", href:"/app/hotel"   },
            { label:"Cursos\nK9",      icon:<IconDog            size={24} stroke={1.8} color="#a78bfa" />, bg:"rgba(167,139,250,.1)", border:"rgba(167,139,250,.2)", href:"/app/cursos" },
          ].map(({ label, icon, bg, border, href }) => (
            <Link key={label} href={href} style={{ textDecoration:"none" }}>
              <motion.div
                whileHover={{ y:-2, transition:{ duration:.18 } }}
                whileTap={{ scale:.95 }}
                style={{
                  background:"var(--card)", border:`1px solid ${border}`,
                  borderRadius:"var(--r-md)", padding:"14px 10px",
                  display:"flex", flexDirection:"column",
                  alignItems:"center", gap:8, textAlign:"center",
                  cursor:"pointer",
                }}>
                <div style={{
                  width:44, height:44, borderRadius:12, background:bg,
                  border:`1px solid ${border}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  {icon}
                </div>
                <span style={{
                  fontSize:10.5, color:"var(--txt2)", fontWeight:600,
                  lineHeight:1.35, whiteSpace:"pre-line",
                }}>
                  {label}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── STATS RÁPIDAS ────────────────────────────────── */}
      <motion.div {...rise(.26)} style={{ padding:"26px 20px 28px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
          {[
            { label:"Consultas este mes", value:KPIS.pacientes_mes, icon:<IconStethoscope size={16} stroke={1.8} color="#dc2626" />, color:"var(--red)" },
            { label:"Vacunas al día",     value:5,                   icon:<IconVaccine     size={16} stroke={1.8} color="#10d9a4" />, color:"var(--green)" },
          ].map(({ label, value, icon, color }, i) => (
            <motion.div key={label}
              initial={{ opacity:0, scale:.95 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ delay:.3 + i*.08, duration:.4 }}
              style={{
                background:"var(--surface)", border:"1px solid var(--border)",
                borderRadius:"var(--r-md)", padding:"14px 16px",
              }}>
              <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:10 }}>
                <div style={{ width:28, height:28, borderRadius:8,
                  background:`${color}15`,
                  display:"flex", alignItems:"center", justifyContent:"center" }}>
                  {icon}
                </div>
                <span style={{ fontSize:10, color:"var(--txt3)",
                  textTransform:"uppercase", letterSpacing:".08em" }}>
                  {label}
                </span>
              </div>
              <motion.span
                initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:.4 + i*.08 }}
                style={{ fontSize:30, fontWeight:800, color:"var(--txt)",
                  letterSpacing:"-1.5px", fontFeatureSettings:"'tnum'" }}>
                {value}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
