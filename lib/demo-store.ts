import { create } from "zustand"
import { persist } from "zustand/middleware"

export type DemoMode = "publico" | "cliente" | "admin"

interface DemoStore {
  mode: DemoMode
  setMode: (mode: DemoMode) => void
}

export const useDemoStore = create<DemoStore>()(
  persist(
    (set) => ({
      mode: "publico",
      setMode: (mode) => set({ mode }),
    }),
    { name: "vp-demo" }
  )
)
