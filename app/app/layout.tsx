"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconHome, IconPaw, IconCalendar, IconBuildingCastle, IconDog } from "@tabler/icons-react"

const NAV = [
  { href:"/app",          label:"Inicio",   Icon:IconHome },
  { href:"/app/mascotas", label:"Mascotas", Icon:IconPaw },
  { href:"/app/citas",    label:"Citas",    Icon:IconCalendar },
  { href:"/app/hotel",    label:"Hotel",    Icon:IconBuildingCastle },
  { href:"/app/cursos",   label:"K9",       Icon:IconDog },
]

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <div style={{ minHeight:"100vh", background:"var(--color-bg)" }}>
      {/* Header */}
      <header style={{
        position:"sticky", top:0, zIndex:40, height:54,
        background:"rgba(255,255,255,0.97)", backdropFilter:"blur(16px)",
        borderBottom:"1px solid var(--color-border)",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 16px",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width:28,height:28,borderRadius:8 }} />
          <span style={{ fontSize:13, fontWeight:700, color:"var(--color-text)" }}>Vet & Pets</span>
        </div>
        <div style={{
          width:32, height:32, borderRadius:"50%",
          background:"var(--red)", display:"flex", alignItems:"center",
          justifyContent:"center", fontSize:11, fontWeight:700, color:"#fff",
        }}>SR</div>
      </header>

      <main style={{ padding:"16px 16px 80px", maxWidth:600, margin:"0 auto" }}>
        {children}
      </main>

      {/* Bottom nav */}
      <nav style={{
        position:"fixed", bottom:0, left:0, right:0, zIndex:40,
        display:"grid", gridTemplateColumns:"repeat(5,1fr)", height:62,
        background:"rgba(255,255,255,0.97)", backdropFilter:"blur(20px)",
        borderTop:"1px solid var(--color-border)",
      }}>
        {NAV.map(({ href, label, Icon }) => {
          const active = path === href
          return (
            <Link key={href} href={href} style={{
              display:"flex", flexDirection:"column", alignItems:"center",
              justifyContent:"center", gap:2, textDecoration:"none",
            }}>
              <Icon size={20} stroke={active ? 2 : 1.5}
                style={{ color: active ? "var(--red)" : "var(--color-text-muted)" }} />
              <span style={{ fontSize:9, fontWeight: active ? 700 : 400,
                color: active ? "var(--red)" : "var(--color-text-muted)" }}>
                {label}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
