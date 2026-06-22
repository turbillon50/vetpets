"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Calendar, PawPrint, Hotel, GraduationCap, Package, Settings } from "lucide-react"

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/citas", label: "Agenda", icon: Calendar },
  { href: "/admin/pacientes", label: "Pacientes", icon: PawPrint },
  { href: "/admin/hotel", label: "Hotel", icon: Hotel },
  { href: "/admin/instituto", label: "Instituto K9", icon: GraduationCap },
  { href: "/admin/inventario", label: "Inventario", icon: Package },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <div className="min-h-screen bg-[#0A0A0A] pb-20 md:pb-0 md:pl-60">
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-60 flex-col py-6 px-4"
        style={{ background: "#0D0D0D", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white"
            style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)" }}>V</div>
          <div>
            <div className="text-sm font-bold text-white">Panel Admin</div>
            <div className="text-[10px] text-[#D97706]">Dr. Alberto Mendoza</div>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = path === href
            return (
              <Link key={href} href={href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={active ? { background: "rgba(185,28,28,0.15)", color: "#EF4444", border: "1px solid rgba(185,28,28,0.2)" } : { color: "#A3A3A3" }}>
                <Icon size={18} />{label}
              </Link>
            )
          })}
        </nav>
        <div className="mt-auto px-2">
          <div className="text-[10px] text-[#525252] text-center">Vet & Pets Care · Admin v1.0</div>
        </div>
      </aside>
      <header className="md:hidden sticky top-0 z-30 flex items-center justify-between px-4 h-14"
        style={{ background: "rgba(10,10,10,0.9)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-sm"
            style={{ background: "linear-gradient(135deg,#B91C1C,#7F1D1D)" }}>V</div>
          <span className="text-sm font-bold text-white">Admin</span>
        </div>
        <div className="text-xs text-[#D97706] font-semibold">Dr. Mendoza</div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 grid grid-cols-6 h-16"
        style={{ background: "rgba(10,10,10,0.95)", borderTop: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = path === href
          return (
            <Link key={href} href={href} className="flex flex-col items-center justify-center gap-0.5">
              <Icon size={18} style={{ color: active ? "#EF4444" : "#525252" }} />
              <span className="text-[8px]" style={{ color: active ? "#EF4444" : "#525252" }}>{label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
