"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CLINICA_INFO, CURSOS } from "@/lib/demo-data"
import {
  IconHeartbeat, IconDog, IconBuildingCastle, IconPhone,
  IconMapPin, IconChevronRight, IconStar, IconCertificate,
  IconShieldCheck, IconArrowRight
} from "@tabler/icons-react"

const riseIn = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
const container = { animate: { transition: { staggerChildren: 0.09 } } }

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, width: "100%", zIndex: 40,
        background: "rgba(8,6,16,0.88)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(20px)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/images/app-icon.png" alt="logo" style={{ width: 36, height: 36, borderRadius: 10 }} />
            <div>
              <div style={{ fontWeight: 700, color: "var(--txt)", fontSize: 14, lineHeight: 1.2 }}>Vet & Pets Care</div>
              <div style={{ fontSize: 10, color: "var(--txt3)", letterSpacing: ".05em" }}>Apan, Hidalgo</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <a href="#servicios" style={{ fontSize: 13, color: "var(--txt2)", textDecoration: "none" }}>Servicios</a>
            <a href="#k9" style={{ fontSize: 13, color: "var(--txt2)", textDecoration: "none" }}>Instituto K9</a>
            <a href="#hotel" style={{ fontSize: 13, color: "var(--txt2)", textDecoration: "none" }}>Hotel</a>
            <Link href="/sign-in" style={{
              fontSize: 13, fontWeight: 600, color: "var(--txt)",
              padding: "8px 18px", borderRadius: 99,
              background: "linear-gradient(135deg, var(--red-2), var(--red))",
              textDecoration: "none",
              boxShadow: "0 0 0 0 var(--red-glow)",
              animation: "glowPulse 2.5s ease-in-out infinite",
            }}>
              Entrar
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        {/* Imagen hero de Higgsfield */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Image src="/images/hero-clinica.jpg" alt="Clínica Vet & Pets Care" fill
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
            priority />
          {/* Overlay gradiente obsidiana */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(8,6,16,0.92) 0%, rgba(8,6,16,0.75) 50%, rgba(8,6,16,0.4) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(8,6,16,0.9) 0%, transparent 60%)",
          }} />
        </div>

        <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "100px 20px 60px", width: "100%" }}>
          <motion.div initial="initial" animate="animate" variants={container}
            style={{ maxWidth: 600 }}>

            {/* Badge */}
            <motion.div variants={riseIn} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(155,28,28,0.18)",
              border: "1px solid rgba(185,28,28,0.3)",
              borderRadius: 99, padding: "6px 14px", marginBottom: 24,
            }}>
              <IconCertificate size={13} stroke={2} style={{ color: "var(--red-2)" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#f87171", letterSpacing: ".06em" }}>
                20 AÑOS DE EXPERIENCIA
              </span>
              <div style={{ display: "flex", gap: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} size={9} stroke={2} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                ))}
              </div>
            </motion.div>

            <motion.h1 variants={riseIn} style={{
              fontSize: "clamp(36px,6vw,72px)", fontWeight: 800,
              color: "var(--txt)", lineHeight: 1.05,
              letterSpacing: "-2px", marginBottom: 16,
            }}>
              Clínica Veterinaria<br />
              <span style={{
                background: "linear-gradient(135deg, var(--red-2), #f87171)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Vet & Pets Care
              </span>
            </motion.h1>

            <motion.p variants={riseIn} style={{
              fontSize: 18, color: "var(--txt2)", lineHeight: 1.6,
              marginBottom: 10, maxWidth: 520,
            }}>
              Servicio Médico Veterinario en pequeñas y grandes especies.
            </motion.p>
            <motion.p variants={riseIn} style={{
              fontSize: 15, color: "var(--txt3)", marginBottom: 36,
            }}>
              Estética Canina · Hotel Campestre · Instituto K9 Country Club
            </motion.p>

            <motion.div variants={riseIn} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/sign-in" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, var(--red-2), var(--red))",
                color: "var(--txt)", fontWeight: 700, fontSize: 15,
                padding: "14px 28px", borderRadius: 14, textDecoration: "none",
                boxShadow: "0 4px 24px var(--red-glow)",
              }}>
                <IconHeartbeat size={18} stroke={2} /> Agenda tu cita
              </Link>
              <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border)",
                color: "var(--txt2)", fontWeight: 600, fontSize: 15,
                padding: "14px 28px", borderRadius: 14, textDecoration: "none",
              }}>
                <IconPhone size={18} stroke={2} /> {CLINICA_INFO.telefono}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={riseIn} style={{
              display: "flex", gap: 24, marginTop: 48, flexWrap: "wrap",
            }}>
              {[
                { v: "20+", l: "Años" }, { v: "500+", l: "Pacientes" },
                { v: "3", l: "Servicios" }, { v: "100%", l: "Dedicación" },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px" }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: "var(--txt3)", letterSpacing: ".08em", textTransform: "uppercase" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" style={{ padding: "100px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={container}>
          <motion.div variants={riseIn} style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{
              display: "inline-block", fontSize: 10, fontWeight: 700,
              color: "var(--red-2)", letterSpacing: ".14em", textTransform: "uppercase",
              marginBottom: 12,
            }}>Nuestros Servicios</div>
            <h2 style={{
              fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--txt)",
              letterSpacing: "-1.5px", lineHeight: 1.1,
            }}>
              Todo para tu mascota<br />
              <span style={{ color: "var(--txt2)", fontWeight: 400 }}>en un solo lugar</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {[
              {
                Icon: IconHeartbeat, label: "Clínica Veterinaria",
                desc: "Medicina veterinaria para pequeñas y grandes especies. Consultas, cirugías, vacunación, hospitalización.",
                items: ["Consultas generales y especialidades", "Vacunación y desparasitación", "Cirugías y hospitalizaciones", "Expediente clínico digital"],
                color: "var(--red-2)", href: "/app",
              },
              {
                Icon: IconDog, label: "Instituto K9",
                desc: "Centro de adiestramiento canino con amor y respeto. Instalaciones campestres en Apan, Hidalgo.",
                items: ["Estimulación temprana", "Obediencia básica y avanzada", "Protección N1, N2 y Especialización", "Detección de aromas"],
                color: "var(--silver)", href: "#k9",
              },
              {
                Icon: IconBuildingCastle, label: "Hotel Campestre",
                desc: "Tu perro merece vacaciones. Instalaciones premium con supervisión veterinaria.",
                items: ["Suites y cabañas campestres", "Supervisión veterinaria diaria", "Ejercicio y socialización", "Reporte diario por WhatsApp"],
                color: "var(--green)", href: "#hotel",
              },
            ].map(({ Icon, label, desc, items, color, href }, i) => (
              <motion.div key={label} variants={riseIn}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 20, padding: 28,
                  transition: "all 0.3s cubic-bezier(.22,1,.36,1)",
                  cursor: "pointer",
                }}
                whileHover={{ y: -4, borderColor: color }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 14, display: "flex",
                  alignItems: "center", justifyContent: "center", marginBottom: 20,
                  background: `${color}18`,
                  border: `1px solid ${color}30`,
                }}>
                  <Icon size={24} stroke={1.5} style={{ color }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--txt)", marginBottom: 10 }}>{label}</h3>
                <p style={{ fontSize: 13, color: "var(--txt2)", lineHeight: 1.6, marginBottom: 20 }}>{desc}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 24, display: "flex", flexDirection: "column", gap: 8 }}>
                  {items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "var(--txt3)" }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={href} style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontSize: 12, fontWeight: 600, color,
                  textDecoration: "none",
                }}>
                  Ver más <IconChevronRight size={14} stroke={2} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── INSTITUTO K9 ── */}
      <section id="k9" style={{
        padding: "100px 20px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={container}>

            {/* Hero K9 */}
            <div style={{ borderRadius: 24, overflow: "hidden", marginBottom: 64, position: "relative", height: 400 }}>
              <Image src="/images/hero-k9.jpg" alt="Instituto K9 Country Club" fill
                style={{ objectFit: "cover", objectPosition: "center 40%" }} />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, rgba(8,6,16,0.85), transparent 60%)",
              }} />
              <div style={{ position: "absolute", left: 40, top: "50%", transform: "translateY(-50%)" }}>
                <div style={{ fontSize: 11, color: "var(--silver)", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 12 }}>
                  Instituto K9 · Country Club
                </div>
                <h2 style={{
                  fontSize: "clamp(24px,4vw,44px)", fontWeight: 800, color: "var(--txt)",
                  letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 12,
                }}>
                  Formación canina<br />con amor y respeto
                </h2>
                <div style={{ fontSize: 14, color: "var(--txt3)" }}>
                  Instalaciones campestres · Apan, Hidalgo
                </div>
              </div>
            </div>

            {/* Cursos */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
              {CURSOS.map((c, i) => (
                <motion.div key={c.id} variants={riseIn}
                  style={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: 16, padding: 24,
                    transition: "all 0.25s ease",
                  }}
                  whileHover={{ borderColor: "var(--silver)", y: -2 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{
                        display: "inline-block", fontSize: 9, fontWeight: 700,
                        letterSpacing: ".1em", textTransform: "uppercase",
                        padding: "3px 8px", borderRadius: 4, marginBottom: 8,
                        background: "rgba(200,205,216,0.1)", color: "var(--silver)",
                      }}>{c.nivel}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--txt)", lineHeight: 1.2 }}>{c.nombre}</h3>
                      <p style={{ fontSize: 11, color: "var(--txt3)", marginTop: 2 }}>{c.subtitulo}</p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 12 }}>
                      <div style={{ fontSize: 22, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px" }}>
                        ${c.precio.toLocaleString()}
                      </div>
                      <div style={{ fontSize: 9, color: "var(--txt3)", textTransform: "uppercase" }}>MXN</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 12, color: "var(--txt2)", lineHeight: 1.6, marginBottom: 16 }}>{c.descripcion}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 10, color: "var(--txt3)" }}>{c.duracion} · {c.sesiones}</div>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: 4,
                      fontSize: 10, fontWeight: 600,
                      background: "var(--green-dim)", color: "var(--green)",
                      padding: "3px 8px", borderRadius: 99,
                    }}>
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)" }} />
                      {c.alumnos_activos} alumnos
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOTEL ── */}
      <section id="hotel" style={{ padding: "100px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={container}>
          <motion.div variants={riseIn} style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--green)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }}>
              Hotel Campestre
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--txt)", letterSpacing: "-1.5px" }}>
              Tu perro,{" "}
              <span style={{ color: "var(--txt3)", fontWeight: 400 }}>en las mejores manos</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
            <motion.div variants={riseIn}>
              <p style={{ fontSize: 15, color: "var(--txt2)", lineHeight: 1.7, marginBottom: 32 }}>
                Instalaciones campestres en Apan, Hidalgo. Mientras tú estás de viaje, tu mejor amigo disfruta de espacio, ejercicio, cuidado veterinario y mucho amor.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
                {[
                  { e: "🏡", t: "Suites y Cabañas", d: "Espacios amplios" },
                  { e: "🩺", t: "Vet en sitio", d: "Supervisión médica" },
                  { e: "📱", t: "Reportes diarios", d: "Fotos por WhatsApp" },
                  { e: "🌿", t: "Áreas verdes", d: "Juego al aire libre" },
                ].map(f => (
                  <div key={f.t} style={{
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: 14, padding: 16,
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{f.e}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--txt)", marginBottom: 2 }}>{f.t}</div>
                    <div style={{ fontSize: 11, color: "var(--txt3)" }}>{f.d}</div>
                  </div>
                ))}
              </div>
              <Link href="/app/hotel" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--green-dim)", border: "1px solid rgba(16,217,164,0.2)",
                color: "var(--green)", fontWeight: 700, fontSize: 14,
                padding: "12px 24px", borderRadius: 12, textDecoration: "none",
              }}>
                Reservar hotel <IconArrowRight size={16} stroke={2} />
              </Link>
            </motion.div>

            <motion.div variants={riseIn} style={{
              background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: 20, padding: 28,
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--txt)", marginBottom: 24 }}>Tarifas Hotel Campestre</h3>
              {[
                { t: "Suite Bosque", d: "Perros grandes", p: 380 },
                { t: "Cabaña Campo — Mediano", d: "Perros medianos", p: 320 },
                { t: "Cabaña Campo — Pequeño", d: "Perros pequeños", p: 280 },
              ].map((h, i) => (
                <div key={h.t} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "16px 0",
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--txt)" }}>{h.t}</div>
                    <div style={{ fontSize: 11, color: "var(--txt3)" }}>{h.d}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "var(--txt)", letterSpacing: "-1px" }}>${h.p}</div>
                    <div style={{ fontSize: 9, color: "var(--txt3)", textTransform: "uppercase" }}>MXN / día</div>
                  </div>
                </div>
              ))}
              <div style={{
                marginTop: 20, padding: 14, borderRadius: 12,
                background: "var(--green-dim)",
                border: "1px solid rgba(16,217,164,0.15)",
              }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                  <IconShieldCheck size={14} stroke={2} style={{ color: "var(--green)" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--green)" }}>Incluye en todos los planes</span>
                </div>
                <div style={{ fontSize: 11, color: "var(--txt3)", lineHeight: 1.6 }}>
                  Alimentación · Ejercicio · Supervisión veterinaria · Reporte diario
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "32px 20px", textAlign: "center",
        borderTop: "1px solid var(--border)",
        background: "var(--void)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width: 24, height: 24, borderRadius: 6 }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--txt2)" }}>Vet & Pets Care</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--txt3)" }}>
            <IconMapPin size={12} stroke={2} /> {CLINICA_INFO.ubicacion}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "var(--txt3)" }}>
            <IconPhone size={12} stroke={2} /> {CLINICA_INFO.telefono}
          </div>
        </div>
        <div style={{ fontSize: 10, color: "var(--txt3)", marginTop: 12 }}>© 2026 · vetpets.store</div>
      </footer>

    </div>
  )
}
