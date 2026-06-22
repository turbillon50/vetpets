"use client"
import { useDemoStore, type DemoMode } from "@/lib/demo-store"
import { useRouter, usePathname } from "next/navigation"
import { IconEye, IconUser, IconShield } from "@tabler/icons-react"

const MODES: { id: DemoMode; label: string; Icon: React.ComponentType<{size:number,stroke:number}>; route: string }[] = [
  { id: "publico",  label: "Público",  Icon: IconEye,    route: "/" },
  { id: "cliente",  label: "Cliente",  Icon: IconUser,   route: "/app" },
  { id: "admin",    label: "Admin",    Icon: IconShield, route: "/admin" },
]

export default function DemoModeSwitcher() {
  const { mode, setMode } = useDemoStore()
  const router = useRouter()
  const pathname = usePathname()

  if (pathname?.includes("/sign-")) return null

  function handleMode(m: DemoMode, route: string) {
    setMode(m)
    router.push(route)
  }

  return (
    <div style={{
      position: "fixed", bottom: 24, left: "50%", transform: "translateX(-50%)",
      zIndex: 999, display: "flex", alignItems: "center", gap: 4,
      background: "rgba(8,6,16,0.95)",
      border: "1px solid rgba(185,28,28,0.35)",
      borderRadius: 99, padding: "6px 8px",
      backdropFilter: "blur(20px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(185,28,28,0.1)",
    }}>
      <span style={{
        fontSize: 9, color: "var(--txt3)", padding: "0 8px",
        fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase",
        userSelect: "none",
      }}>Demo</span>
      {MODES.map(({ id, label, Icon, route }) => (
        <button key={id} onClick={() => handleMode(id, route)}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "7px 14px", borderRadius: 99, border: "none",
            fontSize: 12, fontWeight: 600, cursor: "pointer",
            transition: "all 0.2s cubic-bezier(.22,1,.36,1)",
            ...(mode === id
              ? {
                  background: "linear-gradient(135deg, var(--red-2), var(--red))",
                  color: "var(--txt)",
                  boxShadow: "0 0 16px var(--red-glow)",
                }
              : {
                  background: "transparent",
                  color: "var(--txt3)",
                }),
          }}>
          <Icon size={13} stroke={2} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
