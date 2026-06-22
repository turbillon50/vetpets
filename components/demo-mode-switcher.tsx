"use client"
import { useDemoStore, type DemoMode } from "@/lib/demo-store"
import { useRouter, usePathname } from "next/navigation"
import { IconEye, IconUser, IconShield } from "@tabler/icons-react"

const MODES: { id: DemoMode; label: string; Icon: React.ComponentType<{ size: number; stroke: number }>; route: string }[] = [
  { id: "publico", label: "Público", Icon: IconEye,    route: "/" },
  { id: "cliente", label: "Cliente", Icon: IconUser,   route: "/app" },
  { id: "admin",   label: "Admin",   Icon: IconShield, route: "/admin" },
]

export default function DemoModeSwitcher() {
  const { mode, setMode } = useDemoStore()
  const router = useRouter()
  const path = usePathname()
  if (path?.includes("/sign-")) return null

  return (
    <div style={{
      position: "fixed",
      // Sube 72px sobre el bottom nav + safe-area iPhone
      bottom: "calc(62px + env(safe-area-inset-bottom, 0px) + 10px)",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      gap: 3,
      background: "rgba(17,24,39,0.92)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 99,
      padding: "5px 8px",
      backdropFilter: "blur(16px)",
      boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
      whiteSpace: "nowrap",
    }}>
      <span style={{
        fontSize: 9, color: "rgba(255,255,255,0.35)",
        padding: "0 4px 0 2px", fontWeight: 700,
        letterSpacing: ".08em", textTransform: "uppercase",
        userSelect: "none",
      }}>
        DEMO
      </span>
      {MODES.map(({ id, label, Icon, route }) => (
        <button key={id}
          onClick={() => { setMode(id); router.push(route) }}
          style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "6px 12px", borderRadius: 99, border: "none",
            fontSize: 11, fontWeight: 600, cursor: "pointer",
            transition: "all 0.18s ease", fontFamily: "inherit",
            ...(mode === id
              ? { background: "#dc2626", color: "#fff", boxShadow: "0 0 14px rgba(220,38,38,0.45)" }
              : { background: "transparent", color: "rgba(255,255,255,0.45)" }),
          }}>
          <Icon size={13} stroke={2} />
          {label}
        </button>
      ))}
    </div>
  )
}
