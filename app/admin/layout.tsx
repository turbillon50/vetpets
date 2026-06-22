"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconLayoutDashboard, IconCalendar, IconPaw,
  IconBuildingCastle, IconDog, IconPackage
} from "@tabler/icons-react"

const NAV = [
  { href:"/admin",            label:"Dashboard", Icon:IconLayoutDashboard },
  { href:"/admin/citas",      label:"Agenda",    Icon:IconCalendar },
  { href:"/admin/pacientes",  label:"Pacientes", Icon:IconPaw },
  { href:"/admin/hotel",      label:"Hotel",     Icon:IconBuildingCastle },
  { href:"/admin/instituto",  label:"K9",        Icon:IconDog },
  { href:"/admin/inventario", label:"Inventario",Icon:IconPackage },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <div style={{ minHeight:"100vh", background:"var(--color-bg)" }}>

      {/* Sidebar — solo desktop 1024px+ */}
      <aside style={{
        position:"fixed", left:0, top:0, height:"100%", width:220,
        background:"var(--color-surface)", borderRight:"1px solid var(--color-border)",
        flexDirection:"column", padding:"20px 10px",
        display:"none",
      }} className="admin-sidebar">
        <style>{`@media(min-width:1024px){.admin-sidebar{display:flex!important}}`}</style>
        <div style={{ display:"flex", alignItems:"center", gap:8, padding:"0 8px", marginBottom:28 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width:32,height:32,borderRadius:10 }} />
          <div>
            <div style={{ fontSize:12, fontWeight:700, color:"var(--color-text)" }}>Panel Admin</div>
            <div style={{ fontSize:10, color:"var(--red)", fontWeight:600 }}>Dr. Alberto Mendoza</div>
          </div>
        </div>
        <nav style={{ display:"flex", flexDirection:"column", gap:2 }}>
          {NAV.map(({ href, label, Icon }) => {
            const active = path === href
            return (
              <Link key={href} href={href} style={{
                display:"flex", alignItems:"center", gap:9,
                padding:"9px 12px", borderRadius:10, textDecoration:"none",
                fontSize:13, fontWeight:500, transition:"all 0.15s",
                ...(active
                  ? { background:"var(--red-light)", color:"var(--red)", border:`1px solid var(--red-border)` }
                  : { color:"var(--color-text-muted)", border:"1px solid transparent" }),
              }}>
                <Icon size={17} stroke={active ? 2 : 1.5} />{label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Header mobile + tablet */}
      <header style={{
        position:"sticky", top:0, zIndex:40,
        background:"rgba(255,255,255,0.97)", backdropFilter:"blur(16px)",
        borderBottom:"1px solid var(--color-border)",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"0 16px", height:54,
      }} className="admin-header">
        <style>{`@media(min-width:1024px){.admin-header{display:none!important}}`}</style>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <img src="/images/app-icon.png" alt="logo" style={{ width:28,height:28,borderRadius:8 }} />
          <span style={{ fontSize:13, fontWeight:700, color:"var(--color-text)" }}>Admin</span>
        </div>
        <div style={{ fontSize:11, color:"var(--red)", fontWeight:600 }}>Dr. Mendoza</div>
      </header>

      {/* Contenido */}
      <main style={{
        padding:"20px 16px 88px",
        maxWidth:900,
      }} className="admin-main">
        <style>{`@media(min-width:1024px){.admin-main{margin-left:220px;padding:28px 28px 40px}}`}</style>
        {children}
      </main>

      {/* Bottom nav mobile */}
      <nav style={{
        position:"fixed", bottom:0, left:0, right:0, zIndex:40,
        display:"grid", gridTemplateColumns:"repeat(6,1fr)", height:62,
        background:"rgba(255,255,255,0.97)", backdropFilter:"blur(20px)",
        borderTop:"1px solid var(--color-border)",
      }} className="admin-bottom-nav">
        <style>{`@media(min-width:1024px){.admin-bottom-nav{display:none!important}}`}</style>
        {NAV.map(({ href, label, Icon }) => {
          const active = path === href
          return (
            <Link key={href} href={href} style={{
              display:"flex", flexDirection:"column", alignItems:"center",
              justifyContent:"center", gap:2, textDecoration:"none",
            }}>
              <Icon size={19} stroke={active ? 2 : 1.5}
                style={{ color: active ? "var(--red)" : "var(--color-text-muted)" }} />
              <span style={{ fontSize:8, fontWeight: active ? 700 : 400,
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
