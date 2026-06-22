"use client"
import Link from "next/link"
import {
  IconBell, IconCalendar, IconBuilding, IconSchool,
  IconChevronRight, IconClock
} from "@tabler/icons-react"
import { MASCOTAS, CITAS } from "@/lib/demo-data"

// Avatar circular con inicial — SIN emojis
function PetAvatar({ nombre, color, size = 56 }: { nombre: string; color: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: color + "18",
      border: `2px solid ${color}30`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <span style={{
        fontSize: size * 0.38, fontWeight: 800,
        color: color, lineHeight: 1, fontFamily: "inherit",
      }}>
        {nombre[0].toUpperCase()}
      </span>
    </div>
  )
}

export default function AppHome() {
  const proxCita = CITAS[0]

  return (
    <div style={{
      background: "#ffffff", minHeight: "100%",
      paddingBottom: 20,
    }}>

      {/* ── HEADER ── */}
      <div style={{ padding: "20px 20px 0" }}>
        <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 2 }}>
          Hola, Sofía
        </p>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: "#111827", lineHeight: 1.2 }}>
          Todo al día con tus mascotas
        </h1>
      </div>

      {/* ── ALERTA VACUNA ── */}
      <div style={{ padding: "16px 20px 0" }}>
        <div style={{
          background: "#fef3c7", border: "1px solid #fde68a",
          borderRadius: 14, padding: "14px 16px",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "#d97706", flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <IconBell size={18} stroke={2} color="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#92400e", margin: 0 }}>
              Vacuna próxima — Thor
            </p>
            <p style={{ fontSize: 12, color: "#b45309", margin: "2px 0 0" }}>
              Octavalente vence el 15 de julio
            </p>
          </div>
          <IconChevronRight size={16} stroke={2} color="#b45309" />
        </div>
      </div>

      {/* ── MIS MASCOTAS ── */}
      <div style={{ padding: "24px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: "#111827" }}>Mis mascotas</h2>
          <Link href="/app/mascotas" style={{
            fontSize: 13, fontWeight: 600, color: "#dc2626", textDecoration: "none",
            display: "flex", alignItems: "center", gap: 2,
          }}>
            Ver todas <IconChevronRight size={14} stroke={2.5} />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {MASCOTAS.map(m => (
            <Link key={m.id} href="/app/mascotas" style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff", border: "1px solid #e5e7eb",
                borderRadius: 16, padding: "16px 14px",
                boxShadow: "0 1px 3px rgba(0,0,0,.06)",
                transition: "box-shadow .15s",
              }}>
                {/* Avatar con inicial — NO emoji */}
                <PetAvatar nombre={m.nombre} color={m.avatar_color} size={52} />

                <p style={{ fontSize: 16, fontWeight: 700, color: "#111827", margin: "12px 0 2px" }}>
                  {m.nombre}
                </p>
                <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{m.raza}</p>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: "2px 0 10px" }}>
                  {m.edad} · {m.peso}
                </p>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  background: "#d1fae5", color: "#065f46",
                  borderRadius: 99, padding: "3px 10px", fontSize: 11, fontWeight: 600,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#059669", display: "inline-block" }} />
                  {m.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── PRÓXIMA CITA ── */}
      <div style={{ padding: "24px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700, color: "#111827" }}>Próxima cita</h2>
          <Link href="/app/citas" style={{
            fontSize: 13, fontWeight: 600, color: "#dc2626", textDecoration: "none",
            display: "flex", alignItems: "center", gap: 2,
          }}>
            Ver agenda <IconChevronRight size={14} stroke={2.5} />
          </Link>
        </div>

        <div style={{
          background: "#fff", border: "1px solid #e5e7eb",
          borderRadius: 16, padding: "16px",
          boxShadow: "0 1px 3px rgba(0,0,0,.06)",
          display: "flex", alignItems: "center", gap: 14,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12, flexShrink: 0,
            background: "#fee2e2",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <IconCalendar size={22} stroke={1.8} color="#dc2626" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: "#111827", margin: 0 }}>
              {proxCita.tipo}
            </p>
            <p style={{ fontSize: 12, color: "#6b7280", margin: "3px 0 0" }}>
              {proxCita.mascota} · {proxCita.veterinario}
            </p>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: 0 }}>
              28 jun
            </p>
            <p style={{
              fontSize: 12, fontWeight: 600, color: "#d97706", margin: "2px 0 0",
              display: "flex", alignItems: "center", gap: 3,
            }}>
              <IconClock size={12} stroke={2} /> {proxCita.hora}
            </p>
          </div>
        </div>
      </div>

      {/* ── ACCIONES RÁPIDAS ── */}
      <div style={{ padding: "24px 20px 0" }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: "#111827", marginBottom: 14 }}>
          Acciones rápidas
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            { label: "Agendar cita",    icon: <IconCalendar  size={24} stroke={1.8} color="#dc2626" />, bg: "#fee2e2", href: "/app/citas"   },
            { label: "Reservar hotel",  icon: <IconBuilding  size={24} stroke={1.8} color="#059669" />, bg: "#d1fae5", href: "/app/hotel"   },
            { label: "Ver cursos",      icon: <IconSchool    size={24} stroke={1.8} color="#7c3aed" />, bg: "#ede9fe", href: "/app/cursos"  },
          ].map(({ label, icon, bg, href }) => (
            <Link key={label} href={href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "#fff", border: "1px solid #e5e7eb",
                borderRadius: 14, padding: "14px 10px",
                boxShadow: "0 1px 3px rgba(0,0,0,.05)",
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 8, textAlign: "center",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {icon}
                </div>
                <span style={{ fontSize: 11, color: "#374151", fontWeight: 600, lineHeight: 1.3 }}>
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
