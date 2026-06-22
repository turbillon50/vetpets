"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { IconEye, IconEyeOff, IconArrowRight, IconPhone } from "@tabler/icons-react"
import { CLINICA_INFO } from "@/lib/demo-data"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 700))
    if (email.toLowerCase().includes("admin") || email.toLowerCase().includes("beto")) {
      router.push("/admin")
    } else {
      router.push("/app")
    }
  }

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 12,
    background: "var(--surface)", border: "1px solid var(--border)",
    color: "var(--txt)", fontSize: 14, outline: "none",
    fontFamily: "inherit",
  }

  return (
    <div style={{
      minHeight: "100vh", background: "var(--void)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      position: "relative", overflow: "hidden",
    }}>
      {/* Glow bg */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(155,28,28,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: "100%", maxWidth: 400, position: "relative" }}>

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <img src="/images/app-icon.png" alt="logo"
            style={{ width: 64, height: 64, borderRadius: 18, margin: "0 auto 16px", display: "block" }} />
          <h1 style={{ fontSize: 24, fontWeight: 800, color: "var(--txt)", letterSpacing: "-0.5px" }}>Bienvenido</h1>
          <p style={{ fontSize: 13, color: "var(--txt3)", marginTop: 4 }}>{CLINICA_INFO.nombre}</p>
        </div>

        <div style={{
          background: "var(--card)", border: "1px solid var(--border)",
          borderRadius: 20, padding: 28,
        }}>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label style={{ display: "block", fontSize: 10, fontWeight: 600, color: "var(--txt3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>
                Correo electrónico
              </label>
              <input value={email} onChange={e => setEmail(e.target.value)}
                type="email" placeholder="tu@correo.com" required
                style={inputStyle} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 10, fontWeight: 600, color: "var(--txt3)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>
                Contraseña
              </label>
              <div style={{ position: "relative" }}>
                <input value={pass} onChange={e => setPass(e.target.value)}
                  type={showPass ? "text" : "password"} placeholder="••••••••" required
                  style={{ ...inputStyle, paddingRight: 46 }} />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  style={{
                    position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", color: "var(--txt3)", padding: 0,
                  }}>
                  {showPass ? <IconEyeOff size={16} stroke={2} /> : <IconEye size={16} stroke={2} />}
                </button>
              </div>
            </div>

            <motion.button type="submit" disabled={loading}
              whileTap={{ scale: 0.97 }}
              style={{
                width: "100%", padding: "14px", borderRadius: 14, border: "none",
                background: loading ? "var(--red)" : "linear-gradient(135deg, var(--red-2), var(--red))",
                color: "var(--txt)", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "inherit",
                boxShadow: "0 0 0 0 var(--red-glow)",
                animation: "glowPulse 2.5s ease-in-out infinite",
              }}>
              {loading ? (
                <svg width={18} height={18} viewBox="0 0 24 24" style={{ animation: "ringRot 1.2s linear infinite" }}>
                  <circle cx={12} cy={12} r={9} stroke="rgba(255,255,255,0.3)" strokeWidth={2.5} fill="none" />
                  <circle cx={12} cy={12} r={9} stroke="white" strokeWidth={2.5} fill="none"
                    strokeLinecap="round" strokeDasharray="42 15" />
                </svg>
              ) : (
                <><span>Iniciar sesión</span><IconArrowRight size={16} stroke={2} /></>
              )}
            </motion.button>
          </form>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p style={{ fontSize: 12, color: "var(--txt3)" }}>¿Sin cuenta aún?{" "}
              <button onClick={() => router.push("/app")} style={{
                background: "none", border: "none", color: "var(--red-2)", fontWeight: 600,
                cursor: "pointer", fontSize: 12, fontFamily: "inherit",
              }}>
                Crear cuenta
              </button>
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontSize: 12, color: "var(--txt3)", textDecoration: "none",
            }}>
            <IconPhone size={13} stroke={2} /> ¿Problemas? Contáctanos
          </a>
        </div>
        <div style={{ textAlign: "center", marginTop: 8, fontSize: 10, color: "var(--txt3)" }}>
          Demo: email con &quot;admin&quot; → panel admin
        </div>
      </motion.div>
    </div>
  )
}
