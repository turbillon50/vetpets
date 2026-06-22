"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { KPIS, CITAS, HOSPEDADOS, INVENTARIO } from "@/lib/demo-data"
import { IconCalendar, IconPaw, IconBuildingCastle, IconDog, IconTrendingUp, IconAlertTriangle, IconChevronRight, IconClock } from "@tabler/icons-react"

const ri = { initial:{opacity:0,y:10}, animate:{opacity:1,y:0}, transition:{duration:0.35,ease:[0.22,1,.36,1]} }
const c  = { animate:{ transition:{ staggerChildren:0.05 } } }

export default function AdminDashboard() {
  const stockBajo = INVENTARIO.filter(i => i.stock < i.minimo)
  return (
    <motion.div initial="initial" animate="animate" variants={c} style={{ display:"flex", flexDirection:"column", gap:20 }}>
      <motion.div variants={ri}>
        <h1 style={{ fontSize:22, fontWeight:800, color:"var(--color-text)", letterSpacing:"-0.5px" }}>Panel de Control</h1>
        <p style={{ fontSize:12, color:"var(--color-text-muted)", marginTop:3 }}>
          {new Date().toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"})}
        </p>
      </motion.div>

      {/* KPIs — scroll horizontal en mobile */}
      <motion.div variants={ri} style={{ display:"flex", gap:12, overflowX:"auto", WebkitOverflowScrolling:"touch", paddingBottom:4 }}>
        {[
          { label:"Citas hoy",     val:KPIS.citas_hoy,         Icon:IconCalendar,       color:"var(--red)",    bg:"var(--red-light)" },
          { label:"Pacientes/mes", val:KPIS.pacientes_mes,      Icon:IconPaw,            color:"#7c3aed",       bg:"rgba(124,58,237,0.08)" },
          { label:"Hospedados",    val:KPIS.hospedados_activos, Icon:IconBuildingCastle, color:"#059669",       bg:"rgba(5,150,105,0.08)" },
          { label:"Alumnos K9",    val:KPIS.alumnos_activos,    Icon:IconDog,            color:"var(--amber)",  bg:"var(--amber-light)" },
        ].map(({ label,val,Icon,color,bg }) => (
          <div key={label} style={{
            minWidth:140, flexShrink:0, borderRadius:14, padding:"16px 16px",
            background:"var(--color-surface)", border:"1px solid var(--color-border)",
            boxShadow:"var(--shadow-xs)",
          }}>
            <div style={{ width:36,height:36,borderRadius:10,background:bg,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:12 }}>
              <Icon size={19} stroke={1.5} style={{ color }} />
            </div>
            <div style={{ fontSize:28, fontWeight:800, color:"var(--color-text)", letterSpacing:"-1px", lineHeight:1 }}>{val}</div>
            <div style={{ fontSize:11, color:"var(--color-text-muted)", marginTop:3 }}>{label}</div>
          </div>
        ))}
        <div style={{ minWidth:4, flexShrink:0 }} />
      </motion.div>

      {/* Ingresos */}
      <motion.div variants={ri} style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)", borderRadius:16, padding:"18px 18px", boxShadow:"var(--shadow-xs)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:16 }}>
          <IconTrendingUp size={15} stroke={2} style={{ color:"var(--red)" }} />
          <span style={{ fontSize:13, fontWeight:700, color:"var(--color-text)" }}>Ingresos</span>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
          <span style={{ fontSize:12, color:"var(--color-text-muted)" }}>Esta semana</span>
          <span style={{ fontSize:15, fontWeight:700, color:"var(--color-text)" }}>${KPIS.ingresos_semana.toLocaleString()} MXN</span>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", marginBottom:12 }}>
          <span style={{ fontSize:12, color:"var(--color-text-muted)" }}>Este mes</span>
          <span style={{ fontSize:22, fontWeight:800, color:"var(--color-text)", letterSpacing:"-1px" }}>${KPIS.ingresos_mes.toLocaleString()} MXN</span>
        </div>
        <div style={{ height:6, background:"var(--color-bg-2)", borderRadius:99, overflow:"hidden" }}>
          <div style={{ height:"100%", width:"68%", background:"var(--red)", borderRadius:99 }} />
        </div>
        <div style={{ fontSize:10, color:"var(--color-text-muted)", marginTop:5 }}>68% de la meta mensual</div>
      </motion.div>

      {/* Stock bajo */}
      {stockBajo.length > 0 && (
        <motion.div variants={ri} style={{ background:"#fef2f2", border:"1px solid #fecaca", borderRadius:16, padding:"16px 18px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:14 }}>
            <IconAlertTriangle size={15} stroke={2} style={{ color:"var(--red)" }} />
            <span style={{ fontSize:13, fontWeight:700, color:"var(--color-text)" }}>Stock bajo</span>
          </div>
          {stockBajo.map((item,i) => (
            <div key={item.id} style={{
              display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"10px 0", borderBottom: i < stockBajo.length-1 ? "1px solid #fecaca" : "none",
            }}>
              <div>
                <div style={{ fontSize:13, fontWeight:500, color:"var(--color-text)" }}>{item.nombre}</div>
                <div style={{ fontSize:10, color:"var(--color-text-muted)" }}>{item.categoria}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:14, fontWeight:700, color:"var(--red)" }}>{item.stock} uds.</div>
                <div style={{ fontSize:9, color:"var(--color-text-muted)" }}>mín {item.minimo}</div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Citas hoy */}
      <motion.div variants={ri}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
          <h2 style={{ fontSize:14, fontWeight:700, color:"var(--color-text)" }}>Citas de hoy</h2>
          <Link href="/admin/citas" style={{ display:"flex", alignItems:"center", gap:2, fontSize:11, fontWeight:600, color:"var(--red)", textDecoration:"none" }}>
            Ver todas <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          {CITAS.slice(0,4).map(c => (
            <div key={c.id} style={{
              display:"flex", alignItems:"center", justifyContent:"space-between",
              padding:"13px 14px", borderRadius:12,
              background:"var(--color-surface)", border:"1px solid var(--color-border)",
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                <div style={{ fontSize:12, fontWeight:700, color:"var(--amber)", width:42, flexShrink:0 }}>{c.hora}</div>
                <div>
                  <div style={{ fontSize:13, fontWeight:600, color:"var(--color-text)" }}>{c.mascota} · {c.propietario}</div>
                  <div style={{ fontSize:11, color:"var(--color-text-muted)" }}>{c.tipo}</div>
                </div>
              </div>
              <span style={{
                fontSize:9, fontWeight:700, padding:"3px 9px", borderRadius:99,
                letterSpacing:".05em", textTransform:"uppercase",
                ...(c.status==="confirmada"
                  ? { background:"rgba(5,150,105,0.1)", color:"#059669" }
                  : { background:"rgba(245,158,11,0.1)", color:"var(--amber)" }),
              }}>{c.status}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hospedados */}
      <motion.div variants={ri} style={{ paddingBottom:4 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
          <h2 style={{ fontSize:14, fontWeight:700, color:"var(--color-text)" }}>Hotel — activos</h2>
          <Link href="/admin/hotel" style={{ display:"flex", alignItems:"center", gap:2, fontSize:11, fontWeight:600, color:"var(--red)", textDecoration:"none" }}>
            Ver todos <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <div style={{ display:"flex", gap:10, overflowX:"auto", WebkitOverflowScrolling:"touch" }}>
          {HOSPEDADOS.filter(h=>h.status==="hospedado").map(h => (
            <div key={h.id} style={{
              minWidth:180, flexShrink:0, padding:"14px 14px", borderRadius:12,
              background:"var(--color-surface)", border:"1px solid rgba(5,150,105,0.2)",
            }}>
              <div style={{ fontSize:14, fontWeight:700, color:"var(--color-text)" }}>{h.mascota}</div>
              <div style={{ fontSize:11, color:"var(--color-text-muted)", marginTop:1 }}>{h.raza} · {h.propietario}</div>
              <div style={{ fontSize:11, color:"#059669", marginTop:8, fontWeight:600 }}>{h.habitacion}</div>
              <div style={{ fontSize:10, color:"var(--color-text-muted)" }}>Sale {new Date(h.salida).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}</div>
            </div>
          ))}
          <div style={{ minWidth:4, flexShrink:0 }} />
        </div>
      </motion.div>
    </motion.div>
  )
}
