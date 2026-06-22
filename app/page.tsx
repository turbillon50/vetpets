"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { CLINICA_INFO, CURSOS } from "@/lib/demo-data"
import {
  IconHeartbeat, IconDog, IconBuildingCastle, IconPhone,
  IconMapPin, IconChevronRight, IconStar, IconCertificate,
  IconShieldCheck, IconArrowRight, IconMenu2, IconX
} from "@tabler/icons-react"

const ri = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── NAV — fixed, limpio, mobile-safe ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 56,
        background: "rgba(8,6,16,0.96)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(20px)",
        display: "flex", alignItems: "center",
        padding: "0 16px",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/images/app-icon.png" alt="logo"
            style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0 }} />
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontWeight: 700, color: "var(--txt)", fontSize: 13 }}>Vet & Pets Care</div>
            <div style={{ fontSize: 9, color: "var(--txt3)", letterSpacing: ".04em" }}>Apan, Hidalgo</div>
          </div>
        </div>

        {/* Desktop links */}
        <div style={{
          display: "none",
          gap: 28, alignItems: "center",
        }} className="desktop-nav">
          <style>{`@media(min-width:640px){.desktop-nav{display:flex!important}}.mobile-menu-btn{display:flex}.@media(min-width:640px){.mobile-menu-btn{display:none!important}}`}</style>
          {["#clinica","#k9","#hotel"].map((href, i) => (
            <a key={href} href={href} style={{ fontSize: 13, color: "var(--txt2)", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}>
              {["Clínica","Instituto K9","Hotel"][i]}
            </a>
          ))}
          <Link href="/sign-in" style={{
            fontSize: 13, fontWeight: 600, color: "var(--txt)",
            padding: "8px 18px", borderRadius: 99,
            background: "var(--red-2)",
            textDecoration: "none",
          }}>Entrar</Link>
        </div>

        {/* Mobile: solo botón entrar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/sign-in" style={{
            fontSize: 12, fontWeight: 700, color: "var(--txt)",
            padding: "7px 16px", borderRadius: 99,
            background: "var(--red-2)",
            textDecoration: "none", whiteSpace: "nowrap",
          }}>Entrar</Link>
        </div>
      </nav>

      {/* ── HERO — imagen llena, texto sobre gradiente ── */}
      <section id="hero" style={{ position: "relative", height: "100svh", minHeight: 600 }}>
        <Image src="/images/hero-clinica.jpg" alt="Clínica Vet & Pets Care" fill
          style={{ objectFit: "cover", objectPosition: "center 25%" }} priority />
        {/* Gradiente de abajo hacia arriba — texto legible */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(8,6,16,1) 0%, rgba(8,6,16,0.6) 50%, rgba(8,6,16,0.15) 100%)",
        }} />

        {/* Contenido en la parte baja */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: "0 20px 80px",
          maxWidth: 560,
        }}>
          <motion.div {...ri} transition={{ duration: 0.5, delay: 0.1 }} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "rgba(155,28,28,0.85)",
            border: "1px solid rgba(185,28,28,0.5)",
            borderRadius: 99, padding: "5px 12px", marginBottom: 16,
          }}>
            <IconCertificate size={12} stroke={2} style={{ color: "#fca5a5" }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: "#fca5a5", letterSpacing: ".08em" }}>
              20 AÑOS DE EXPERIENCIA
            </span>
            <div style={{ display: "flex", gap: 1 }}>
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} size={8} stroke={2} style={{ color: "#fbbf24" }} />
              ))}
            </div>
          </motion.div>

          <motion.h1 {...ri} transition={{ duration: 0.55, delay: 0.15 }} style={{
            fontSize: "clamp(30px,8vw,52px)", fontWeight: 800,
            color: "var(--txt)", lineHeight: 1.05, letterSpacing: "-1.5px",
            marginBottom: 10,
          }}>
            Clínica Veterinaria<br />
            <span style={{
              background: "linear-gradient(135deg, #f87171, var(--red-2))",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Vet & Pets Care</span>
          </motion.h1>

          <motion.p {...ri} transition={{ duration: 0.5, delay: 0.2 }} style={{
            fontSize: 15, color: "rgba(240,244,255,0.75)", lineHeight: 1.55, marginBottom: 24,
          }}>
            Servicio Médico Veterinario en pequeñas y grandes especies.<br />
            <span style={{ color: "rgba(168,180,208,0.6)", fontSize: 13 }}>
              Estética Canina · Hotel Campestre · Instituto K9 Country Club
            </span>
          </motion.p>

          <motion.div {...ri} transition={{ duration: 0.5, delay: 0.25 }}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/sign-in" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--red-2)", color: "var(--txt)",
              fontWeight: 700, fontSize: 14, padding: "13px 24px",
              borderRadius: 14, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(185,28,28,0.5)",
            }}>
              <IconHeartbeat size={17} stroke={2} /> Agenda tu cita
            </Link>
            <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(240,244,255,0.08)", border: "1px solid rgba(240,244,255,0.12)",
              color: "var(--txt2)", fontWeight: 600, fontSize: 14,
              padding: "13px 20px", borderRadius: 14, textDecoration: "none",
            }}>
              <IconPhone size={17} stroke={2} /> {CLINICA_INFO.telefono}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 3 SERVICIOS — cards con foto ── */}
      <section id="servicios" style={{ padding: "64px 16px" }}>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once: true }} transition={{ duration:0.5 }}
          style={{ textAlign:"center", marginBottom: 36 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "var(--red-2)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 8 }}>
            Nuestros Servicios
          </div>
          <h2 style={{ fontSize: "clamp(22px,5vw,36px)", fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px", lineHeight: 1.1 }}>
            Todo para tu mascota
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 560, margin: "0 auto" }}>
          {[
            {
              id: "clinica", img: "/images/hero-clinica.jpg", label: "Clínica Veterinaria",
              tag: "Medicina especializada", color: "var(--red-2)",
              desc: "Consultas, cirugías, vacunación y hospitalización para pequeñas y grandes especies.",
              href: "/app",
            },
            {
              id: "k9", img: "/images/hero-k9.jpg", label: "Instituto K9 Country Club",
              tag: "Adiestramiento", color: "var(--silver)",
              desc: "Desde estimulación temprana hasta protección especializada. Instalaciones campestres.",
              href: "#k9",
            },
            {
              id: "hotel", img: "/images/hero-clinica.jpg", label: "Hotel Campestre",
              tag: "Hospedaje premium", color: "var(--green)",
              desc: "Tu perro disfruta vacaciones con supervisión veterinaria diaria en Apan, Hidalgo.",
              href: "#hotel",
            },
          ].map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true }} transition={{ duration:0.45, delay: i*0.08 }}>
              <Link href={s.href} style={{
                display: "block", borderRadius: 20, overflow: "hidden",
                textDecoration: "none", position: "relative",
                border: "1px solid var(--border)",
              }}>
                {/* Imagen */}
                <div style={{ position: "relative", height: 200 }}>
                  <Image src={s.img} alt={s.label} fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(8,6,16,0.95) 0%, rgba(8,6,16,0.3) 60%, transparent 100%)",
                  }} />
                  {/* Tag sobre imagen */}
                  <div style={{
                    position: "absolute", top: 14, left: 14,
                    background: "rgba(8,6,16,0.75)", backdropFilter: "blur(8px)",
                    border: `1px solid ${s.color}40`,
                    borderRadius: 99, padding: "4px 10px",
                    fontSize: 9, fontWeight: 700, color: s.color,
                    letterSpacing: ".1em", textTransform: "uppercase",
                  }}>
                    {s.tag}
                  </div>
                </div>

                {/* Texto bajo imagen */}
                <div style={{
                  background: "var(--card)", padding: "18px 20px",
                  display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
                }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--txt)", marginBottom: 6 }}>{s.label}</div>
                    <div style={{ fontSize: 12, color: "var(--txt3)", lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                  <div style={{
                    width: 32, height: 32, borderRadius: 99, flexShrink: 0,
                    background: `${s.color}15`, display: "flex",
                    alignItems: "center", justifyContent: "center",
                  }}>
                    <IconChevronRight size={16} stroke={2} style={{ color: s.color }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INSTITUTO K9 ── */}
      <section id="k9" style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "64px 16px",
      }}>
        {/* Hero foto K9 */}
        <div style={{
          position: "relative", height: 260, borderRadius: 20,
          overflow: "hidden", marginBottom: 32,
          maxWidth: 560, margin: "0 auto 32px",
        }}>
          <Image src="/images/hero-k9.jpg" alt="Instituto K9" fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(8,6,16,0.9) 0%, rgba(8,6,16,0.2) 100%)",
          }} />
          <div style={{ position: "absolute", bottom: 24, left: 24 }}>
            <div style={{ fontSize: 10, color: "var(--silver)", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
              Instituto K9 · Country Club
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "var(--txt)", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
              Formación canina<br />con amor y respeto
            </h2>
          </div>
        </div>

        {/* Cursos — scroll horizontal en mobile */}
        <div style={{
          display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          maxWidth: 560, margin: "0 auto",
        }}>
          {CURSOS.map((c) => (
            <div key={c.id} style={{
              minWidth: 240, flexShrink: 0,
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 16, padding: "18px 16px",
              scrollSnapAlign: "start",
            }}>
              <div style={{
                fontSize: 9, fontWeight: 700, letterSpacing: ".1em",
                textTransform: "uppercase", color: "var(--silver)",
                background: "rgba(200,205,216,0.08)", border: "1px solid rgba(200,205,216,0.12)",
                display: "inline-block", padding: "3px 8px", borderRadius: 4, marginBottom: 8,
              }}>{c.nivel}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--txt)", marginBottom: 3 }}>{c.nombre}</div>
              <div style={{ fontSize: 11, color: "var(--txt3)", marginBottom: 12 }}>{c.subtitulo}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--txt3)" }}>{c.duracion}</div>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 4, marginTop: 4,
                    fontSize: 9, fontWeight: 600,
                    background: "var(--green-dim)", color: "var(--green)",
                    padding: "3px 8px", borderRadius: 99,
                  }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--green)" }} />
                    {c.alumnos_activos} alumnos
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px" }}>
                    ${c.precio.toLocaleString()}
                  </div>
                  <div style={{ fontSize: 9, color: "var(--txt3)", textTransform: "uppercase" }}>MXN</div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer para último card */}
          <div style={{ minWidth: 16, flexShrink: 0 }} />
        </div>

        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/sign-in" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 13, fontWeight: 600, color: "var(--silver)",
            textDecoration: "none",
            background: "rgba(200,205,216,0.08)", border: "1px solid rgba(200,205,216,0.15)",
            padding: "10px 20px", borderRadius: 99,
          }}>
            Ver todos los cursos <IconChevronRight size={14} stroke={2} />
          </Link>
        </div>
      </section>

      {/* ── HOTEL ── */}
      <section id="hotel" style={{ padding: "64px 16px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "var(--green)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 8 }}>
            Hotel Campestre
          </div>
          <h2 style={{ fontSize: "clamp(22px,5vw,36px)", fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px", marginBottom: 24 }}>
            Tu perro, en las mejores manos
          </h2>

          {/* Tarifas — limpias */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 28 }}>
            {[
              { t: "Suite Bosque", d: "Perros grandes", p: 380 },
              { t: "Cabaña Campo — Mediano", d: "Perros medianos", p: 320 },
              { t: "Cabaña Campo — Pequeño", d: "Perros pequeños", p: 280 },
            ].map((h, i) => (
              <div key={h.t} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--txt)" }}>{h.t}</div>
                  <div style={{ fontSize: 11, color: "var(--txt3)", marginTop: 2 }}>{h.d}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px" }}>${h.p}</div>
                  <div style={{ fontSize: 9, color: "var(--txt3)", textTransform: "uppercase" }}>MXN / día</div>
                </div>
              </div>
            ))}
          </div>

          {/* Incluye */}
          <div style={{
            padding: "14px 16px", borderRadius: 14,
            background: "var(--green-dim)", border: "1px solid rgba(16,217,164,0.18)",
            marginBottom: 24,
          }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
              <IconShieldCheck size={13} stroke={2} style={{ color: "var(--green)" }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--green)" }}>Incluye en todos los planes</span>
            </div>
            <div style={{ fontSize: 11, color: "rgba(16,217,164,0.65)", lineHeight: 1.6 }}>
              Alimentación · Ejercicio diario · Supervisión veterinaria · Reporte por WhatsApp
            </div>
          </div>

          <Link href="/app/hotel" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: "var(--green-dim)", border: "1px solid rgba(16,217,164,0.2)",
            color: "var(--green)", fontWeight: 700, fontSize: 14,
            padding: "14px", borderRadius: 14, textDecoration: "none",
          }}>
            Reservar hotel <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
      </section>

      {/* ── STATS + CTA FINAL ── */}
      <section style={{
        padding: "48px 16px 100px",
        background: "var(--void)",
        borderTop: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          {/* Stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0, marginBottom: 40 }}>
            {[
              { v: "20+", l: "Años" }, { v: "500+", l: "Pacientes" },
              { v: "3", l: "Servicios" }, { v: "⭐⭐⭐⭐⭐", l: "Reseñas" },
            ].map((s, i) => (
              <div key={s.l} style={{
                textAlign: "center", padding: "16px 8px",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}>
                <div style={{ fontSize: i === 3 ? 14 : 24, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontSize: 9, color: "var(--txt3)", marginTop: 4, letterSpacing: ".06em", textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/sign-in" style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: "linear-gradient(135deg, var(--red-2), var(--red))",
            color: "var(--txt)", fontWeight: 700, fontSize: 15,
            padding: "16px", borderRadius: 16, textDecoration: "none",
            boxShadow: "0 4px 24px rgba(185,28,28,0.35)",
            marginBottom: 12,
          }}>
            <IconHeartbeat size={18} stroke={2} /> Crear mi cuenta gratis
          </Link>
          <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            color: "var(--txt3)", fontWeight: 600, fontSize: 13,
            padding: "12px", borderRadius: 14, textDecoration: "none",
            border: "1px solid var(--border)",
          }}>
            <IconPhone size={15} stroke={2} /> Llamar / WhatsApp · {CLINICA_INFO.telefono}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "20px 16px", textAlign: "center",
        borderTop: "1px solid var(--border)",
        background: "var(--void)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 4 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width: 22, height: 22, borderRadius: 6 }} />
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--txt3)" }}>Vet & Pets Care · vetpets.store</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--txt3)" }}>
          <IconMapPin size={10} stroke={2} style={{ verticalAlign: "middle" }} /> {CLINICA_INFO.ubicacion} · © 2026
        </div>
      </footer>

    </div>
  )
}
