"use client"
import { useRouter } from "next/navigation"
import { MASCOTAS, CLINICA_INFO } from "@/lib/demo-data"
import { LogOut, Phone, MapPin, PawPrint } from "lucide-react"

export default function PerfilPage() {
  const router = useRouter()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-white">Mi Perfil</h1>
      <div className="rounded-2xl p-6 text-center" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="w-20 h-20 rounded-full bg-red-700 flex items-center justify-center text-3xl font-black text-white mx-auto mb-4">SR</div>
        <h2 className="text-xl font-black text-white">Sofía Ramírez</h2>
        <p className="text-[#A3A3A3] text-sm">sofia.ramirez@email.com</p>
        <p className="text-[#525252] text-xs mt-1">Apan, Hidalgo · Cliente desde 2024</p>
      </div>
      <div className="rounded-xl p-5" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
        <h3 className="font-bold text-white mb-4 flex items-center gap-2"><PawPrint size={16} className="text-red-400" /> Mis mascotas</h3>
        {MASCOTAS.map(m => (
          <div key={m.id} className="flex items-center gap-3 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-2xl">{m.foto}</span>
            <div>
              <div className="font-semibold text-sm text-white">{m.nombre}</div>
              <div className="text-xs text-[#A3A3A3]">{m.raza} · {m.edad}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-5 space-y-3" style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
        <h3 className="font-bold text-white mb-2">Contacto clínica</h3>
        <div className="flex items-center gap-2 text-sm text-[#A3A3A3]"><Phone size={14} className="text-red-400" />{CLINICA_INFO.telefono}</div>
        <div className="flex items-center gap-2 text-sm text-[#A3A3A3]"><MapPin size={14} className="text-red-400" />{CLINICA_INFO.ubicacion}</div>
      </div>
      <button onClick={() => router.push("/")} className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-[#EF4444] hover:bg-red-900/20 transition-colors" style={{ border: "1px solid rgba(239,68,68,0.2)" }}>
        <LogOut size={16} /> Cerrar sesión
      </button>
    </div>
  )
}
