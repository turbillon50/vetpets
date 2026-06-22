"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, MapPin, Clock, Star, ChevronRight, Stethoscope, GraduationCap, Hotel, Shield, Heart, Award } from "lucide-react"
import { CLINICA_INFO, CURSOS } from "@/lib/demo-data"

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
const stagger = { show: { transition: { staggerChildren: 0.1 } } }

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full z-40" style={{ background: "rgba(10,10,10,0.85)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-lg" style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)" }}>
              V
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">Vet & Pets Care</div>
              <div className="text-[10px] text-[#A3A3A3]">Apan, Hidalgo</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#servicios" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Servicios</a>
            <a href="#cursos" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Instituto K9</a>
            <a href="#hotel" className="text-sm text-[#A3A3A3] hover:text-white transition-colors">Hotel</a>
            <Link href="/sign-in" className="text-sm px-4 py-2 rounded-lg font-semibold transition-all" style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)", color: "white" }}>
              Portal Cliente
            </Link>
          </div>
          <Link href="/sign-in" className="md:hidden text-sm px-3 py-1.5 rounded-lg font-semibold text-white" style={{ background: "#B91C1C" }}>
            Entrar
          </Link>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        {/* BG gradient */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(185,28,28,0.12) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ background: "rgba(217,119,6,0.12)", border: "1px solid rgba(217,119,6,0.3)", color: "#FCD34D" }}>
            <Award size={14} />
            {CLINICA_INFO.anios} Años de Experiencia · ⭐⭐⭐⭐⭐
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            Clínica Veterinaria
            <br />
            <span className="text-gold-gradient">Vet & Pets Care</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-[#A3A3A3] mb-4 max-w-2xl mx-auto">
            {CLINICA_INFO.slogan}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-[#D97706] font-semibold mb-10">
            {CLINICA_INFO.subslogan}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/sign-in"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all shine-hover"
              style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)", boxShadow: "0 0 30px rgba(185,28,28,0.3)" }}>
              <Heart size={18} /> Agenda tu Cita
            </Link>
            <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-all"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#F5F5F5" }}>
              <Phone size={18} /> {CLINICA_INFO.telefono}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial="hidden" animate="show" variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { val: "20+", label: "Años de experiencia" },
              { val: "3", label: "Servicios especializados" },
              { val: "500+", label: "Pacientes activos" },
              { val: "100%", label: "Amor y respeto" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-black text-red-gradient mb-1">{s.val}</div>
                <div className="text-xs text-[#A3A3A3]">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-24 max-w-6xl mx-auto px-4">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
              style={{ background: "rgba(185,28,28,0.1)", border: "1px solid rgba(185,28,28,0.2)", color: "#EF4444" }}>
              Nuestros Servicios
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white">Todo para tu mascota<br /><span className="text-gold-gradient">en un solo lugar</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Clínica */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 group hover:border-red-700 transition-all duration-300 shine-hover"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg,rgba(185,28,28,0.3),rgba(127,29,29,0.2))", border: "1px solid rgba(185,28,28,0.3)" }}>
                <Stethoscope size={28} className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Clínica Veterinaria</h3>
              <p className="text-[#A3A3A3] text-sm mb-6 leading-relaxed">Medicina veterinaria para pequeñas y grandes especies. Consultas, cirugías, vacunación, hospitalización y más.</p>
              <ul className="space-y-2 mb-6">
                {["Consultas generales y especialidades", "Vacunación y desparasitación", "Cirugías y procedimientos", "Hospitalización 24h", "Expediente clínico digital"].map(s => (
                  <li key={s} className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />{s}
                  </li>
                ))}
              </ul>
              <Link href="/sign-in" className="flex items-center gap-1 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors">
                Ver expediente <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Instituto */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 group hover:border-yellow-700 transition-all duration-300 shine-hover"
              style={{ border: "1px solid rgba(217,119,6,0.2)", background: "rgba(217,119,6,0.04)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg,rgba(217,119,6,0.3),rgba(180,83,9,0.2))", border: "1px solid rgba(217,119,6,0.4)" }}>
                <GraduationCap size={28} className="text-yellow-400" />
              </div>
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold mb-4 uppercase tracking-widest"
                style={{ background: "rgba(217,119,6,0.2)", color: "#FCD34D" }}>
                Instituto K9 · Country Club
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Centro de Adiestramiento</h3>
              <p className="text-[#A3A3A3] text-sm mb-6 leading-relaxed">Formación canina con amor y respeto. Desde estimulación temprana hasta especialización en protección.</p>
              <ul className="space-y-2 mb-6">
                {["Estimulación temprana", "Obediencia básica y avanzada", "Protección N1, N2 y Especialización", "Detección de aromas", "Instalaciones campestres"].map(s => (
                  <li key={s} className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />{s}
                  </li>
                ))}
              </ul>
              <a href="#cursos" className="flex items-center gap-1 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors">
                Ver cursos <ChevronRight size={16} />
              </a>
            </motion.div>

            {/* Hotel */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 group hover:border-emerald-700 transition-all duration-300 shine-hover"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg,rgba(5,150,105,0.3),rgba(4,120,87,0.2))", border: "1px solid rgba(5,150,105,0.3)" }}>
                <Hotel size={28} className="text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hotel Campestre</h3>
              <p className="text-[#A3A3A3] text-sm mb-6 leading-relaxed">Tu perro merece unas vacaciones también. Instalaciones campestres con espacio, cuidado y cariño en Apan, Hidalgo.</p>
              <ul className="space-y-2 mb-6">
                {["Suites premium y cabañas", "Supervisión veterinaria", "Ejercicio y juego diario", "Alimentación personalizada", "Reportes diarios a WhatsApp"].map(s => (
                  <li key={s} className="flex items-center gap-2 text-xs text-[#A3A3A3]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />{s}
                  </li>
                ))}
              </ul>
              <a href="#hotel" className="flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                Ver disponibilidad <ChevronRight size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── CURSOS K9 ── */}
      <section id="cursos" className="py-24" style={{ background: "rgba(217,119,6,0.03)", borderTop: "1px solid rgba(217,119,6,0.1)", borderBottom: "1px solid rgba(217,119,6,0.1)" }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
                style={{ background: "rgba(217,119,6,0.1)", border: "1px solid rgba(217,119,6,0.25)", color: "#D97706" }}>
                Instituto K9 · Country Club
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Formación Canina<br /><span className="text-gold-gradient">con Amor y Respeto</span></h2>
              <p className="text-[#A3A3A3] max-w-2xl mx-auto">Instalaciones campestres en Apan, Hidalgo. Cursos diseñados para cada etapa de vida de tu perro.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {CURSOS.map((curso, i) => (
                <motion.div key={curso.id} variants={fadeUp}
                  className="rounded-2xl p-6 flex flex-col shine-hover"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(217,119,6,0.15)" }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest mb-1 text-[#D97706]">{curso.nivel}</div>
                      <h3 className="text-base font-bold text-white">{curso.nombre}</h3>
                      <p className="text-xs text-[#A3A3A3] mt-0.5">{curso.subtitulo}</p>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <div className="text-xl font-black text-gold-gradient">${curso.precio.toLocaleString()}</div>
                      <div className="text-[10px] text-[#A3A3A3]">MXN</div>
                    </div>
                  </div>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed mb-4">{curso.descripcion}</p>
                  <div className="mt-auto">
                    <div className="text-[10px] text-[#A3A3A3] mb-2 font-semibold uppercase tracking-wider">Requisito:</div>
                    <div className="text-xs text-[#D97706]">{curso.requisitos}</div>
                    <div className="flex items-center gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="text-[10px] text-[#A3A3A3]">{curso.duracion} · {curso.sesiones}</div>
                      <div className="ml-auto flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(5,150,105,0.15)", color: "#34D399" }}>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {curso.alumnos_activos} alumnos
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOTEL ── */}
      <section id="hotel" className="py-24 max-w-6xl mx-auto px-4">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest"
                style={{ background: "rgba(5,150,105,0.1)", border: "1px solid rgba(5,150,105,0.25)", color: "#34D399" }}>
                Hotel Campestre
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Tu perro, <span className="text-gold-gradient">en las mejores manos</span></h2>
              <p className="text-[#A3A3A3] leading-relaxed mb-8">Instalaciones campestres en Apan, Hidalgo. Mientras tú estás de viaje, tu mejor amigo disfruta de espacio, ejercicio, cuidado veterinario y mucho amor.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "🏡", title: "Suites y Cabañas", desc: "Espacios amplios y confortables" },
                  { icon: "🩺", title: "Vet en sitio", desc: "Supervisión médica incluida" },
                  { icon: "📱", title: "Reportes diarios", desc: "Fotos y videos por WhatsApp" },
                  { icon: "🌿", title: "Áreas verdes", desc: "Ejercicio y juego al aire libre" },
                ].map(f => (
                  <div key={f.title} className="glass-card rounded-xl p-4">
                    <div className="text-2xl mb-2">{f.icon}</div>
                    <div className="text-sm font-semibold text-white mb-1">{f.title}</div>
                    <div className="text-xs text-[#A3A3A3]">{f.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/sign-in" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0A0A0A] transition-all shine-hover"
                style={{ background: "linear-gradient(135deg,#D97706,#FCD34D)" }}>
                Reservar Hotel <ChevronRight size={18} />
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Tarifas Hotel Campestre</h3>
              {[
                { tipo: "Suite Bosque", desc: "Perros grandes · Espacio premium", precio: 380 },
                { tipo: "Cabaña Campo (mediano)", desc: "Perros medianos · Área propia", precio: 320 },
                { tipo: "Cabaña Campo (pequeño)", desc: "Perros pequeños · Acogedor", precio: 280 },
              ].map(h => (
                <div key={h.tipo} className="flex items-center justify-between py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div>
                    <div className="text-sm font-semibold text-white">{h.tipo}</div>
                    <div className="text-xs text-[#A3A3A3]">{h.desc}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-gold-gradient">${h.precio}</div>
                    <div className="text-[10px] text-[#A3A3A3]">MXN/día</div>
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)" }}>
                <div className="text-xs text-emerald-400 font-semibold mb-1">✓ Incluye en todos los planes:</div>
                <div className="text-xs text-[#A3A3A3]">Alimentación · Ejercicio · Supervisión veterinaria · Reporte diario por WhatsApp</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24" style={{ background: "linear-gradient(135deg,rgba(185,28,28,0.08),rgba(217,119,6,0.06))", borderTop: "1px solid rgba(185,28,28,0.15)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-white mb-6">
              ¿Listo para dar lo mejor<br /><span className="text-gold-gradient">a tu mascota?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#A3A3A3] mb-10 text-lg">
              Agenda tu cita, reserva el hotel o inscribe a tu perro en el instituto.<br />Llevamos 20 años cuidando a las mascotas de las familias de Hidalgo.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-in" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white shine-hover"
                style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)", boxShadow: "0 0 30px rgba(185,28,28,0.3)" }}>
                <Heart size={18} /> Crear mi cuenta
              </Link>
              <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#F5F5F5" }}>
                <Phone size={18} /> WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="text-sm text-[#A3A3A3]">{CLINICA_INFO.nombre} · {CLINICA_INFO.ubicacion} · {CLINICA_INFO.horario}</div>
        <div className="text-xs text-[#525252] mt-2">© 2026 Todos los derechos reservados</div>
      </footer>
    </div>
  )
}
