"use client"

import { useDemoStore, type DemoMode } from "@/lib/demo-store"
import { useRouter, usePathname } from "next/navigation"
import { Eye, User, Shield } from "lucide-react"

const MODES: { id: DemoMode; label: string; icon: React.ReactNode; route: string }[] = [
  { id: "publico", label: "Público", icon: <Eye size={14} />, route: "/" },
  { id: "cliente", label: "Cliente", icon: <User size={14} />, route: "/app" },
  { id: "admin", label: "Admin", icon: <Shield size={14} />, route: "/admin" },
]

export default function DemoModeSwitcher() {
  const { mode, setMode } = useDemoStore()
  const router = useRouter()
  const pathname = usePathname()

  // Ocultar en sign-in/sign-up
  if (pathname?.includes("/sign-")) return null

  function handleMode(m: DemoMode, route: string) {
    setMode(m)
    router.push(route)
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 rounded-full px-2 py-1.5 shadow-2xl"
        style={{ background: "rgba(10,10,10,0.92)", border: "1px solid rgba(185,28,28,0.4)", backdropFilter: "blur(20px)" }}>
        <span className="text-[10px] text-[#A3A3A3] px-2 font-medium tracking-widest uppercase select-none">Demo</span>
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => handleMode(m.id, m.route)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
            style={mode === m.id
              ? { background: "linear-gradient(135deg,#B91C1C,#7F1D1D)", color: "#F5F5F5", boxShadow: "0 0 12px rgba(185,28,28,0.5)" }
              : { color: "#A3A3A3" }
            }
          >
            {m.icon}
            <span>{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
