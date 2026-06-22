"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Eye, EyeOff, ArrowRight, Phone } from "lucide-react"
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
    await new Promise(r => setTimeout(r, 600))
    if (email.toLowerCase().includes("admin") || email.toLowerCase().includes("beto")) {
      router.push("/admin")
    } else {
      router.push("/app")
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(185,28,28,0.08) 0%, transparent 70%)" }} />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-white text-3xl mx-auto mb-4 shadow-2xl"
            style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)", boxShadow: "0 0 40px rgba(185,28,28,0.35)" }}>
            V
          </div>
          <h1 className="text-2xl font-black text-white mb-1">Bienvenido</h1>
          <p className="text-[#A3A3A3] text-sm">{CLINICA_INFO.nombre}</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.07)" }}>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-[#A3A3A3] mb-2 uppercase tracking-wider">Correo electrónico</label>
              <input value={email} onChange={e => setEmail(e.target.value)}
                type="email" placeholder="tu@correo.com" required
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#525252] outline-none transition-all focus:ring-1 focus:ring-red-600"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#A3A3A3] mb-2 uppercase tracking-wider">Contraseña</label>
              <div className="relative">
                <input value={pass} onChange={e => setPass(e.target.value)}
                  type={showPass ? "text" : "password"} placeholder="••••••••" required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#525252] outline-none transition-all focus:ring-1 focus:ring-red-600 pr-12"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }} />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#525252] hover:text-[#A3A3A3]">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all shine-hover disabled:opacity-60"
              style={{ background: loading ? "#7F1D1D" : "linear-gradient(135deg,#B91C1C,#7F1D1D)", boxShadow: "0 0 20px rgba(185,28,28,0.25)" }}>
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <><span>Iniciar sesión</span><ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <span className="px-3 text-xs text-[#525252]">o</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          <p className="text-center text-xs text-[#A3A3A3] mb-4">¿Aún no tienes cuenta?</p>
          <button onClick={() => router.push("/app")} className="w-full py-3 rounded-xl text-sm font-semibold text-[#A3A3A3] hover:text-white transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            Crear cuenta nueva
          </button>
        </div>

        <div className="text-center mt-6">
          <a href={`https://wa.me/${CLINICA_INFO.whatsapp}`} className="inline-flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-[#D97706] transition-colors">
            <Phone size={14} /> ¿Problemas para entrar? Llámanos
          </a>
        </div>

        <div className="text-center mt-4 text-[10px] text-[#525252]">
          Demo: usa cualquier email. Con &quot;admin&quot; → panel admin.
        </div>
      </motion.div>
    </div>
  )
}
