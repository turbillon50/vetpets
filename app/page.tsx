"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CLINICA_INFO, CURSOS } from "@/lib/demo-data"
import {
  IconHeartbeat, IconDog, IconBuildingCastle, IconPhone,
  IconChevronRight, IconStar, IconCertificate,
  IconShieldCheck, IconArrowRight, IconMapPin
} from "@tabler/icons-react"

const ri = { initial:{opacity:0,y:14}, animate:{opacity:1,y:0}, transition:{duration:0.45,ease:[0.22,1,0.36,1]} }
const c  = { animate:{ transition:{ staggerChildren:0.07 } } }

export default function Home() {
  return (
    <div style={{ background:"var(--color-bg)", minHeight:"100vh", overflowX:"hidden" }}>

      {/* NAV — limpio, 56px fijo */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100, height:56,
        background:"rgba(255,255,255,0.95)", backdropFilter:"blur(16px)",
        borderBottom:"1px solid var(--color-border)",
        display:"flex", alignItems:"center", padding:"0 16px",
        justifyContent:"space-between",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width:32,height:32,borderRadius:8 }} />
          <div>
            <div style={{ fontWeight:700, color:"var(--color-text)", fontSize:13, lineHeight:1.2 }}>Vet & Pets Care</div>
            <div style={{ fontSize:9, color:"var(--color-text-muted)" }}>Apan, Hidalgo</div>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} style={{
            fontSize:12, color:"var(--color-text-muted)", textDecoration:"none",
            padding:"7px 12px", borderRadius:99,
            border:"1px solid var(--color-border)",
          }}>
            <IconPhone size={14} stroke={2} />
          </a>
          <Link href="/sign-in" style={{
            fontSize:13, fontWeight:700, color:"#fff",
            padding:"8px 18px", borderRadius:99, background:"var(--red)",
            textDecoration:"none", whiteSpace:"nowrap",
          }}>Entrar</Link>
        </div>
      </nav>

      {/* HERO — imagen llena, texto en bottom con gradiente */}
      <section style={{ position:"relative", height:"100svh", minHeight:580, paddingTop:56 }}>
        <div style={{ position:"absolute", inset:0, top:56 }}>
          <Image src="/images/hero-clinica.jpg" alt="Clínica veterinaria premium" fill
            style={{ objectFit:"cover", objectPosition:"center 25%" }} priority />
          <div style={{
            position:"absolute", inset:0,
            background:"linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 45%, rgba(15,23,42,0.1) 100%)",
          }} />
        </div>

        <motion.div initial="initial" animate="animate" variants={c}
          style={{
            position:"absolute", bottom:0, left:0, right:0,
            padding:"0 20px 90px", maxWidth:600,
          }}>
          <motion.div variants={ri} style={{
            display:"inline-flex", alignItems:"center", gap:6,
            background:"rgba(220,38,38,0.85)", borderRadius:99,
            padding:"5px 12px", marginBottom:14,
          }}>
            <IconCertificate size={11} stroke={2} style={{ color:"#fecaca" }} />
            <span style={{ fontSize:10, fontWeight:700, color:"#fecaca", letterSpacing:".08em" }}>20 AÑOS DE EXPERIENCIA</span>
            {[...Array(5)].map((_,i) => <IconStar key={i} size={8} stroke={2} style={{ color:"#fbbf24" }} />)}
          </motion.div>

          <motion.h1 variants={ri} style={{
            fontSize:"clamp(28px,7vw,52px)", fontWeight:800,
            color:"#fff", lineHeight:1.05, letterSpacing:"-1.5px", marginBottom:10,
          }}>
            Clínica Veterinaria<br />
            <span style={{ color:"#f87171" }}>Vet & Pets Care</span>
          </motion.h1>

          <motion.p variants={ri} style={{ fontSize:14, color:"rgba(241,245,249,0.7)", lineHeight:1.55, marginBottom:22 }}>
            Medicina veterinaria en pequeñas y grandes especies.<br />
            <span style={{ color:"rgba(241,245,249,0.45)", fontSize:12 }}>Estética · Hotel Campestre · Instituto K9</span>
          </motion.p>

          <motion.div variants={ri} style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            <Link href="/sign-in" style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"var(--red)", color:"#fff", fontWeight:700, fontSize:14,
              padding:"13px 22px", borderRadius:14, textDecoration:"none",
              boxShadow:"0 4px 20px rgba(220,38,38,0.45)",
            }}>
              <IconHeartbeat size={16} stroke={2} /> Agenda tu cita
            </Link>
            <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.2)",
              color:"rgba(255,255,255,0.85)", fontWeight:600, fontSize:14,
              padding:"13px 18px", borderRadius:14, textDecoration:"none",
            }}>
              <IconPhone size={16} stroke={2} /> {CLINICA_INFO.telefono}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS — blanco, limpio */}
      <section style={{
        background:"var(--color-surface)", borderBottom:"1px solid var(--color-border)",
        padding:"24px 20px",
      }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", maxWidth:560, margin:"0 auto" }}>
          {[
            { v:"20+", l:"Años" }, { v:"500+", l:"Pacientes" },
            { v:"3", l:"Servicios" }, { v:"⭐ 5.0", l:"Calificación" },
          ].map((s,i) => (
            <div key={s.l} style={{
              textAlign:"center", padding:"12px 4px",
              borderRight: i < 3 ? "1px solid var(--color-border)" : "none",
            }}>
              <div style={{ fontSize:i===3?13:22, fontWeight:800, color:"var(--color-text)", letterSpacing:"-0.5px" }}>{s.v}</div>
              <div style={{ fontSize:9, color:"var(--color-text-muted)", marginTop:2, textTransform:"uppercase", letterSpacing:".06em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS — 3 cards foto real */}
      <section style={{ padding:"48px 16px", maxWidth:600, margin:"0 auto" }}>
        <div style={{ marginBottom:28 }}>
          <div style={{ fontSize:10, fontWeight:700, color:"var(--red)", letterSpacing:".12em", textTransform:"uppercase", marginBottom:6 }}>Servicios</div>
          <h2 style={{ fontSize:24, fontWeight:800, color:"var(--color-text)", letterSpacing:"-0.5px" }}>Todo para tu mascota</h2>
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          {[
            { img:"/images/hero-clinica.jpg", tag:"Clínica", label:"Medicina Veterinaria",
              desc:"Consultas, cirugías, vacunación y hospitalización para pequeñas y grandes especies.",
              color:"var(--red)", href:"/app" },
            { img:"/images/hero-k9.jpg", tag:"Instituto K9", label:"Centro de Adiestramiento",
              desc:"Desde estimulación temprana hasta protección especializada en instalaciones campestres.",
              color:"#334155", href:"#k9" },
            { img:"/images/hero-clinica.jpg", tag:"Hotel", label:"Hotel Campestre",
              desc:"Supervisión veterinaria, ejercicio y reporte diario por WhatsApp.",
              color:"var(--green)", href:"#hotel" },
          ].map((s,i) => (
            <motion.div key={s.label} initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}}
              viewport={{once:true}} transition={{delay:i*0.07,duration:0.4}}>
              <Link href={s.href} style={{
                display:"block", borderRadius:16, overflow:"hidden",
                textDecoration:"none", background:"var(--color-surface)",
                boxShadow:"var(--shadow-sm)", border:"1px solid var(--color-border)",
              }}>
                <div style={{ position:"relative", height:180 }}>
                  <Image src={s.img} alt={s.label} fill style={{ objectFit:"cover", objectPosition:"center 25%" }} />
                  <div style={{
                    position:"absolute", inset:0,
                    background:"linear-gradient(to top, rgba(15,23,42,0.7) 0%, transparent 60%)",
                  }} />
                  <div style={{
                    position:"absolute", top:12, left:12, background:"rgba(15,23,42,0.7)",
                    backdropFilter:"blur(8px)", borderRadius:99, padding:"3px 10px",
                    fontSize:9, fontWeight:700, color:"#fff", letterSpacing:".1em", textTransform:"uppercase",
                  }}>{s.tag}</div>
                </div>
                <div style={{ padding:"14px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12 }}>
                  <div>
                    <div style={{ fontSize:15, fontWeight:700, color:"var(--color-text)", marginBottom:3 }}>{s.label}</div>
                    <div style={{ fontSize:12, color:"var(--color-text-muted)", lineHeight:1.5 }}>{s.desc}</div>
                  </div>
                  <div style={{
                    width:32, height:32, borderRadius:99, flexShrink:0,
                    background:"var(--color-bg)", display:"flex", alignItems:"center", justifyContent:"center",
                    border:"1px solid var(--color-border)",
                  }}>
                    <IconChevronRight size={16} stroke={2} style={{ color:"var(--color-text-muted)" }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* K9 — foto + cursos scroll horizontal */}
      <section id="k9" style={{ background:"var(--color-surface)", borderTop:"1px solid var(--color-border)", borderBottom:"1px solid var(--color-border)", padding:"48px 0" }}>
        <div style={{ padding:"0 16px", maxWidth:600, margin:"0 auto 24px" }}>
          <div style={{ position:"relative", height:220, borderRadius:16, overflow:"hidden", marginBottom:20 }}>
            <Image src="/images/hero-k9.jpg" alt="Instituto K9" fill style={{ objectFit:"cover", objectPosition:"center 40%" }} />
            <div style={{
              position:"absolute", inset:0,
              background:"linear-gradient(to right, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.2) 100%)",
            }} />
            <div style={{ position:"absolute", bottom:20, left:20 }}>
              <div style={{ fontSize:9, color:"rgba(241,245,249,0.6)", fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", marginBottom:4 }}>Instituto K9 · Country Club</div>
              <h2 style={{ fontSize:22, fontWeight:800, color:"#fff", letterSpacing:"-0.5px", lineHeight:1.15 }}>
                Formación canina<br />con amor y respeto
              </h2>
            </div>
          </div>
        </div>

        {/* Cursos — scroll horizontal */}
        <div style={{
          display:"flex", gap:12, overflowX:"auto", padding:"4px 16px 16px",
          scrollSnapType:"x mandatory", WebkitOverflowScrolling:"touch",
        }}>
          {CURSOS.map(c => (
            <div key={c.id} style={{
              minWidth:220, flexShrink:0, scrollSnapAlign:"start",
              background:"var(--color-bg)", border:"1px solid var(--color-border)",
              borderRadius:14, padding:"16px 14px",
            }}>
              <div style={{
                display:"inline-block", fontSize:9, fontWeight:700,
                color:"var(--color-text-muted)", background:"var(--color-bg-2)",
                border:"1px solid var(--color-border)", borderRadius:4,
                padding:"2px 7px", letterSpacing:".08em", textTransform:"uppercase",
                marginBottom:8,
              }}>{c.nivel}</div>
              <div style={{ fontSize:14, fontWeight:700, color:"var(--color-text)", marginBottom:2 }}>{c.nombre}</div>
              <div style={{ fontSize:11, color:"var(--color-text-muted)", marginBottom:12 }}>{c.subtitulo}</div>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end" }}>
                <div>
                  <div style={{ fontSize:10, color:"var(--color-text-muted)" }}>{c.duracion}</div>
                  <div style={{
                    display:"inline-flex", alignItems:"center", gap:4, marginTop:4,
                    fontSize:9, fontWeight:600, color:"#059669",
                    background:"rgba(5,150,105,0.08)", padding:"2px 8px", borderRadius:99,
                  }}>
                    <div style={{ width:5,height:5,borderRadius:"50%",background:"#059669" }} />
                    {c.alumnos_activos} alumnos
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontSize:20, fontWeight:800, color:"var(--color-text)", letterSpacing:"-1px" }}>
                    ${c.precio.toLocaleString()}
                  </div>
                  <div style={{ fontSize:9, color:"var(--color-text-muted)", textTransform:"uppercase" }}>MXN</div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ minWidth:16, flexShrink:0 }} />
        </div>

        <div style={{ textAlign:"center", padding:"0 16px" }}>
          <Link href="/sign-in" style={{
            display:"inline-flex", alignItems:"center", gap:6,
            fontSize:13, fontWeight:600, color:"var(--color-text-muted)",
            textDecoration:"none", border:"1px solid var(--color-border)",
            padding:"10px 20px", borderRadius:99, background:"var(--color-bg)",
          }}>Ver todos los cursos <IconChevronRight size={14} stroke={2} /></Link>
        </div>
      </section>

      {/* HOTEL */}
      <section id="hotel" style={{ padding:"48px 16px", maxWidth:600, margin:"0 auto" }}>
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:10, fontWeight:700, color:"#059669", letterSpacing:".12em", textTransform:"uppercase", marginBottom:6 }}>Hotel Campestre</div>
          <h2 style={{ fontSize:24, fontWeight:800, color:"var(--color-text)", letterSpacing:"-0.5px" }}>Tu perro, en las mejores manos</h2>
        </div>

        <div style={{ background:"var(--color-surface)", border:"1px solid var(--color-border)", borderRadius:16, overflow:"hidden", marginBottom:16 }}>
          {[
            { t:"Suite Bosque", d:"Perros grandes", p:380 },
            { t:"Cabaña Campo — Mediano", d:"Perros medianos", p:320 },
            { t:"Cabaña Campo — Pequeño", d:"Perros pequeños", p:280 },
          ].map((h,i) => (
            <div key={h.t} style={{
              display:"flex", justifyContent:"space-between", alignItems:"center",
              padding:"16px 18px",
              borderBottom: i < 2 ? "1px solid var(--color-border)" : "none",
            }}>
              <div>
                <div style={{ fontSize:14, fontWeight:600, color:"var(--color-text)" }}>{h.t}</div>
                <div style={{ fontSize:11, color:"var(--color-text-muted)" }}>{h.d}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:20, fontWeight:800, color:"var(--color-text)", letterSpacing:"-1px" }}>${h.p}</div>
                <div style={{ fontSize:9, color:"var(--color-text-muted)", textTransform:"uppercase" }}>MXN/día</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding:"12px 16px", borderRadius:12, marginBottom:20,
          background:"rgba(5,150,105,0.06)", border:"1px solid rgba(5,150,105,0.15)",
          display:"flex", gap:8, alignItems:"flex-start",
        }}>
          <IconShieldCheck size={14} stroke={2} style={{ color:"#059669", marginTop:1, flexShrink:0 }} />
          <div style={{ fontSize:11, color:"#065f46", lineHeight:1.6 }}>
            <span style={{ fontWeight:700 }}>Incluye: </span>
            Alimentación · Ejercicio · Supervisión veterinaria · Reporte diario por WhatsApp
          </div>
        </div>

        <Link href="/app/hotel" style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:8,
          color:"#059669", fontWeight:700, fontSize:14,
          padding:"14px", borderRadius:14, textDecoration:"none",
          background:"rgba(5,150,105,0.08)", border:"1px solid rgba(5,150,105,0.2)",
        }}>
          Reservar hotel <IconArrowRight size={16} stroke={2} />
        </Link>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding:"40px 16px 100px", background:"var(--color-surface)",
        borderTop:"1px solid var(--color-border)",
      }}>
        <div style={{ maxWidth:560, margin:"0 auto" }}>
          <Link href="/sign-in" style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            background:"var(--red)", color:"#fff", fontWeight:700, fontSize:15,
            padding:"16px", borderRadius:16, textDecoration:"none", marginBottom:10,
            boxShadow:"0 4px 20px rgba(220,38,38,0.25)",
          }}>
            <IconHeartbeat size={18} stroke={2} /> Crear mi cuenta gratis
          </Link>
          <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:8,
            color:"var(--color-text-muted)", fontWeight:600, fontSize:13,
            padding:"13px", borderRadius:14, textDecoration:"none",
            border:"1px solid var(--color-border)",
          }}>
            <IconPhone size={15} stroke={2} /> {CLINICA_INFO.telefono}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:"20px 16px", textAlign:"center", borderTop:"1px solid var(--color-border)", background:"var(--color-bg)" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginBottom:3 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width:20,height:20,borderRadius:5 }} />
          <span style={{ fontSize:12, fontWeight:600, color:"var(--color-text-muted)" }}>Vet & Pets Care · vetpets.store</span>
        </div>
        <div style={{ fontSize:10, color:"var(--color-text-muted)" }}>
          <IconMapPin size={9} stroke={2} style={{ verticalAlign:"middle" }} /> {CLINICA_INFO.ubicacion} · © 2026
        </div>
      </footer>
    </div>
  )
}
