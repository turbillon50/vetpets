"use client"
import { INVENTARIO } from "@/lib/demo-data"
import { Package, AlertCircle } from "lucide-react"

export default function InventarioAdmin() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-black text-white">Inventario / Farmacia</h1>
      <div className="space-y-2">
        {INVENTARIO.map(item => {
          const bajo = item.stock < item.minimo
          return (
            <div key={item.id} className="rounded-xl px-4 py-3 flex items-center justify-between"
              style={{ background: "#141414", border: bajo ? "1px solid rgba(239,68,68,0.2)" : "1px solid rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: bajo ? "rgba(239,68,68,0.1)" : "rgba(185,28,28,0.08)" }}>
                  {bajo ? <AlertCircle size={16} className="text-red-400" /> : <Package size={16} className="text-[#A3A3A3]" />}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.nombre}</div>
                  <div className="text-xs text-[#525252]">{item.categoria}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold" style={{ color: bajo ? "#EF4444" : "#F5F5F5" }}>{item.stock} {item.unidad}s</div>
                <div className="text-[10px] text-[#525252]">Mín: {item.minimo} · Venta: ${item.precio_venta}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
