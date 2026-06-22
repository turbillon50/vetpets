"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
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
    <div style={{ minHeight:"100dvh", background:"var(--bg)" }}>

      {/* HEADER glassmorphism */}
      <header style={{
        position:"sticky", top:0, zIndex:40, height:56,
        background:"rgba(10,8,20,0.88)",
        backdropFilter:"blur(20px)",
        borderBottom:"1px solid var(--border)",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 20px",
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <img src="/icons/icon-192.png" alt="logo"
            style={{ width:30, height:30, borderRadius:9, objectFit:"cover",
              border:"1px solid var(--border)" }} />
          <span style={{ fontSize:14, fontWeight:700, color:"var(--txt)",
            letterSpacing:"-.3px" }}>
            Vet &amp; Pets
          </span>
        </div>
        {/* Avatar usuario */}
        <div style={{
          width:34, height:34, borderRadius:"50%",
          background:"var(--red)", border:"2px solid rgba(220,38,38,0.3)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:11, fontWeight:800, color:"#fff", letterSpacing:"-.5px",
          boxShadow:"0 0 14px rgba(220,38,38,0.35)",
        }}>
          SR
        </div>
      </header>

      {/* CONTENIDO — padding bottom = nav + safe-area */}
      <main style={{
        paddingBottom:"calc(68px + env(safe-area-inset-bottom, 0px) + 8px)",
        background:"var(--bg)",
      }}>
        {children}
      </main>

      {/* BOTTOM NAV — glassmorphism con safe-area */}
      <nav style={{
        position:"fixed", bottom:0, left:0, right:0, zIndex:50,
        display:"grid", gridTemplateColumns:"repeat(5,1fr)",
        height:"calc(60px + env(safe-area-inset-bottom, 0px))",
        paddingBottom:"env(safe-area-inset-bottom, 0px)",
        background:"rgba(10,8,20,0.92)",
        backdropFilter:"blur(24px)",
        borderTop:"1px solid var(--border)",
      }}>
        {NAV.map(({ href, label, Icon }) => {
          const active = path === href
          return (
            <Link key={href} href={href} style={{
              display:"flex", flexDirection:"column", alignItems:"center",
              justifyContent:"center", gap:3, textDecoration:"none",
              paddingTop:6, position:"relative",
            }}>
              {active && (
                <motion.div
                  layoutId="nav-pill"
                  style={{
                    position:"absolute", top:8, width:32, height:3,
                    borderRadius:2, background:"var(--red)",
                    boxShadow:"0 0 10px var(--red-glow)",
                  }}
                />
              )}
              <Icon size={22} stroke={active ? 2.2 : 1.4}
                color={active ? "#dc2626" : "#4a4465"} />
              <span style={{
                fontSize:9, fontWeight:active ? 700 : 500,
                color:active ? "#dc2626" : "#4a4465",
                letterSpacing:active ? ".04em" : 0,
              }}>
                {label}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
