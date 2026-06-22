"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { KPIS, CITAS, HOSPEDADOS, INVENTARIO } from "@/lib/demo-data"
import { IconCalendar, IconPaw, IconBuildingCastle, IconDog, IconTrendingUp, IconAlertTriangle, IconChevronRight, IconClock } from "@tabler/icons-react"

const ri = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: [0.22,1,.36,1] } }
const cont = { animate: { transition: { staggerChildren: 0.06 } } }

const card = (children: React.ReactNode, extra?: React.CSSProperties) => (
  <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 22, ...extra }}>
    {children}
  </div>
)

export default function AdminDashboard() {
  const stockBajo = INVENTARIO.filter(i => i.stock < i.minimo)

  return (
    <motion.div initial="initial" animate="animate" variants={cont} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <motion.div variants={ri}>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: "var(--txt)", letterSpacing: "-0.5px" }}>Panel de Control</h1>
        <p style={{ fontSize: 13, color: "var(--txt3)", marginTop: 4 }}>
          Vet & Pets Care · {new Date().toLocaleDateString("es-MX",{weekday:"long",day:"numeric",month:"long"})}
        </p>
      </motion.div>

      {/* KPIs */}
      <motion.div variants={ri} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {[
          { label: "Citas hoy",    val: KPIS.citas_hoy,          Icon: IconCalendar,      color: "var(--red-2)",  sub: "confirmadas" },
          { label: "Pacientes/mes",val: KPIS.pacientes_mes,       Icon: IconPaw,           color: "var(--silver)", sub: "este mes" },
          { label: "Hospedados",   val: KPIS.hospedados_activos,  Icon: IconBuildingCastle,color: "var(--green)",  sub: "activos ahora" },
          { label: "Alumnos K9",   val: KPIS.alumnos_activos,     Icon: IconDog,           color: "var(--amber)",  sub: "en curso" },
        ].map(({ label, val, Icon, color, sub }) => (
          <div key={label} style={{
            background: "var(--card)", borderRadius: 18, padding: "20px 20px",
            border: `1px solid ${color}20`,
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: 11, display: "flex",
              alignItems: "center", justifyContent: "center", marginBottom: 16,
              background: `${color}15`, color,
            }}>
              <Icon size={20} stroke={1.5} />
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1.5px", lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: 12, color: "var(--txt2)", marginTop: 4 }}>{label}</div>
            <div style={{ fontSize: 10, color: "var(--txt3)" }}>{sub}</div>
          </div>
        ))}
      </motion.div>

      {/* Ingresos + Stock */}
      <motion.div variants={ri} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "var(--card)", border: "1px solid rgba(185,28,28,0.15)", borderRadius: 18, padding: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <IconTrendingUp size={16} stroke={2} style={{ color: "var(--red-2)" }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}>Ingresos</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "var(--txt3)" }}>Esta semana</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: "var(--txt)", letterSpacing: "-0.5px" }}>
                ${KPIS.ingresos_semana.toLocaleString()} <span style={{ fontSize: 10, color: "var(--txt3)" }}>MXN</span>
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "var(--txt3)" }}>Este mes</span>
              <span style={{ fontSize: 24, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px" }}>
                ${KPIS.ingresos_mes.toLocaleString()} <span style={{ fontSize: 10, color: "var(--txt3)" }}>MXN</span>
              </span>
            </div>
            <div>
              <div style={{ height: 6, background: "var(--surface)", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ height: "100%", width: "68%", background: "linear-gradient(90deg, var(--red-2), var(--silver))", borderRadius: 99 }} />
              </div>
              <div style={{ fontSize: 10, color: "var(--txt3)", marginTop: 6 }}>68% de la meta mensual</div>
            </div>
          </div>
        </div>

        <div style={{ background: "var(--card)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 18, padding: 22 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <IconAlertTriangle size={16} stroke={2} style={{ color: "#f87171" }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}>Stock bajo ({stockBajo.length})</span>
          </div>
          {stockBajo.map((item, i) => (
            <div key={item.id} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "10px 0", borderBottom: i < stockBajo.length-1 ? "1px solid var(--border)" : "none",
            }}>
              <div>
                <div style={{ fontSize: 13, color: "var(--txt)", fontWeight: 500 }}>{item.nombre}</div>
                <div style={{ fontSize: 10, color: "var(--txt3)" }}>{item.categoria}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#f87171" }}>{item.stock}</div>
                <div style={{ fontSize: 9, color: "var(--txt3)" }}>mín {item.minimo}</div>
              </div>
            </div>
          ))}
          <Link href="/admin/inventario" style={{
            display: "inline-flex", alignItems: "center", gap: 3, marginTop: 14,
            fontSize: 11, fontWeight: 600, color: "#f87171", textDecoration: "none",
          }}>
            Ver inventario <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
      </motion.div>

      {/* Citas hoy */}
      <motion.div variants={ri}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--txt)" }}>Citas de hoy</h2>
          <Link href="/admin/citas" style={{ display:"flex", alignItems:"center", gap:2, fontSize:11, color:"#f87171", textDecoration:"none", fontWeight:600 }}>
            Ver todas <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {CITAS.slice(0,4).map(c => (
            <div key={c.id} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "14px 18px", borderRadius: 14,
              background: "var(--card)", border: "1px solid var(--border)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--amber)", width: 44 }}>{c.hora}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--txt)" }}>{c.mascota} · {c.propietario}</div>
                  <div style={{ fontSize: 11, color: "var(--txt3)" }}>{c.tipo}</div>
                </div>
              </div>
              <span style={{
                fontSize: 9, fontWeight: 700, padding: "4px 10px", borderRadius: 99,
                letterSpacing: ".06em", textTransform: "uppercase",
                ...(c.status === "confirmada"
                  ? { background: "var(--green-dim)", color: "var(--green)" }
                  : { background: "var(--amber-dim)", color: "var(--amber)" }),
              }}>
                {c.status}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hospedados */}
      <motion.div variants={ri}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: "var(--txt)" }}>Hotel — Hospedados activos</h2>
          <Link href="/admin/hotel" style={{ display:"flex", alignItems:"center", gap:2, fontSize:11, color:"#f87171", textDecoration:"none", fontWeight:600 }}>
            Ver todos <IconChevronRight size={12} stroke={2} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {HOSPEDADOS.filter(h=>h.status==="hospedado").map(h => (
            <div key={h.id} style={{
              padding: 16, borderRadius: 14,
              background: "var(--card)", border: "1px solid rgba(16,217,164,0.15)",
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--txt)" }}>{h.mascota}</div>
              <div style={{ fontSize: 11, color: "var(--txt3)", marginTop: 2 }}>{h.raza} · {h.propietario}</div>
              <div style={{ fontSize: 11, color: "var(--green)", marginTop: 8, fontWeight: 600 }}>{h.habitacion}</div>
              <div style={{ fontSize: 10, color: "var(--txt3)", marginTop: 2 }}>
                Sale: {new Date(h.salida).toLocaleDateString("es-MX",{day:"numeric",month:"short"})}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
