// ============================================================
// DEMO DATA — Vet & Pets Care
// ============================================================

export const CLINICA_INFO = {
  nombre: "Vet & Pets Care",
  slogan: "Servicio Médico Veterinario en pequeñas y grandes especies",
  subslogan: "Estética Canina y Hotel Campestre",
  anios: 20,
  telefono: "775 131 2309",
  whatsapp: "527751312309",
  ubicacion: "Apan, Hidalgo",
  horario: "Lun–Sáb 9:00–19:00 · Dom 9:00–14:00",
  redes: {
    fb_clinica: "clinica veterinaria vet&pets care",
    fb_instituto: "vet&pets care country club",
    ig: "@vetpetscare",
  },
}

// ─── MASCOTAS — SIN emojis, con color de avatar ─────────────
export const MASCOTAS = [
  {
    id: "m1",
    nombre: "Thor",
    especie: "Perro",
    raza: "Pastor Alemán",
    edad: "3 años",
    peso: "32 kg",
    color: "Negro y café",
    chip: "985112345678901",
    propietario: "Sofía Ramírez",
    avatar_color: "#dc2626",   // rojo — perro
    proxima_vacuna: "2026-07-15",
    proxima_cita: "2026-06-28",
    status: "Sano",
    alergias: "Ninguna conocida",
  },
  {
    id: "m2",
    nombre: "Luna",
    especie: "Gato",
    raza: "Persa",
    edad: "2 años",
    peso: "4.2 kg",
    color: "Blanca",
    chip: "985198765432100",
    propietario: "Sofía Ramírez",
    avatar_color: "#7c3aed",   // morado — gato
    proxima_vacuna: "2026-08-01",
    proxima_cita: null,
    status: "Sano",
    alergias: "Pienso con salmón",
  },
]

export const EXPEDIENTE = [
  { id:"e1", mascota_id:"m1", fecha:"2026-06-01", tipo:"Consulta general",   veterinario:"Dr. Alberto Mendoza", diagnostico:"Paciente en buen estado general", tratamiento:"Desparasitación interna", costo:450,  notas:"Peso estable, pelaje brillante" },
  { id:"e2", mascota_id:"m1", fecha:"2026-04-10", tipo:"Vacunación",         veterinario:"Dr. Alberto Mendoza", diagnostico:"Refuerzo anual",                  tratamiento:"Octavalente + Rabia",     costo:680,  notas:"Sin reacciones adversas" },
  { id:"e3", mascota_id:"m1", fecha:"2026-02-15", tipo:"Cirugía",            veterinario:"Dra. Mariana Torres", diagnostico:"Extracción de cuerpo extraño",    tratamiento:"Cirugía abdominal",       costo:4500, notas:"Recuperación excelente, 7 días hospitalizado" },
  { id:"e4", mascota_id:"m2", fecha:"2026-05-20", tipo:"Consulta general",   veterinario:"Dr. Alberto Mendoza", diagnostico:"Dermatitis leve",                 tratamiento:"Shampoo medicado + antibiótico 10 días", costo:380, notas:"Revisión en 2 semanas" },
]

export const VACUNAS = [
  { id:"v1", mascota_id:"m1", nombre:"Octavalente",   fecha:"2026-04-10", proxima:"2027-04-10", veterinario:"Dr. Mendoza", lote:"OCV-2026-447" },
  { id:"v2", mascota_id:"m1", nombre:"Rabia",          fecha:"2026-04-10", proxima:"2027-04-10", veterinario:"Dr. Mendoza", lote:"RAB-2026-112" },
  { id:"v3", mascota_id:"m1", nombre:"Bordetella",     fecha:"2025-10-05", proxima:"2026-10-05", veterinario:"Dr. Mendoza", lote:"BOR-2025-089" },
  { id:"v4", mascota_id:"m2", nombre:"Triple felina",  fecha:"2026-05-01", proxima:"2027-05-01", veterinario:"Dr. Mendoza", lote:"TRF-2026-320" },
  { id:"v5", mascota_id:"m2", nombre:"Rabia felina",   fecha:"2026-05-01", proxima:"2027-05-01", veterinario:"Dr. Mendoza", lote:"RAB-2026-113" },
]

export const CITAS = [
  { id:"c1", mascota:"Thor",  propietario:"Sofía Ramírez",   fecha:"2026-06-28", hora:"10:30", tipo:"Consulta general",      veterinario:"Dr. Mendoza",  status:"confirmada", tel:"5544332211" },
  { id:"c2", mascota:"Coco",  propietario:"Mateo Jiménez",   fecha:"2026-06-23", hora:"11:00", tipo:"Vacunación",            veterinario:"Dra. Torres",  status:"confirmada", tel:"5511223344" },
  { id:"c3", mascota:"Bella", propietario:"Camila Herrera",  fecha:"2026-06-23", hora:"12:30", tipo:"Cirugía menor",         veterinario:"Dr. Mendoza",  status:"confirmada", tel:"5599887766" },
  { id:"c4", mascota:"Max",   propietario:"Diego Soto",      fecha:"2026-06-24", hora:"09:00", tipo:"Revisión post-op",      veterinario:"Dra. Torres",  status:"pendiente",  tel:"5566778899" },
  { id:"c5", mascota:"Nala",  propietario:"Valentina Cruz",  fecha:"2026-06-25", hora:"16:00", tipo:"Desparasitación",       veterinario:"Dr. Mendoza",  status:"confirmada", tel:"5533445566" },
  { id:"c6", mascota:"Rocky", propietario:"Luis Morales",    fecha:"2026-06-26", hora:"10:00", tipo:"Consulta general",      veterinario:"Dr. Mendoza",  status:"pendiente",  tel:"5522334455" },
]

export const HOSPEDADOS = [
  { id:"h1", mascota:"Duke",  raza:"Golden Retriever", propietario:"Andrea Vargas",  entrada:"2026-06-20", salida:"2026-06-27", habitacion:"Suite Bosque 1",  status:"hospedado",  notas:"Dieta especial sin pollo",     costo_dia:380 },
  { id:"h2", mascota:"Milo",  raza:"Beagle",           propietario:"Carlos Peña",    entrada:"2026-06-21", salida:"2026-06-25", habitacion:"Cabaña Campo 3",  status:"hospedado",  notas:"Muy juguetón",                 costo_dia:280 },
  { id:"h3", mascota:"Lola",  raza:"Labrador",         propietario:"Fernanda Ríos",  entrada:"2026-06-19", salida:"2026-06-24", habitacion:"Suite Bosque 2",  status:"hospedado",  notas:"Le gusta correr",              costo_dia:380 },
  { id:"h4", mascota:"Simba", raza:"Husky Siberiano",  propietario:"Rodrigo Vega",   entrada:"2026-06-22", salida:"2026-06-29", habitacion:"Cabaña Campo 1",  status:"reservada",  notas:"Necesita mucho ejercicio",     costo_dia:320 },
  { id:"h5", mascota:"Daisy", raza:"Poodle",           propietario:"Melissa Luna",   entrada:"2026-06-15", salida:"2026-06-22", habitacion:"Cabaña Campo 2",  status:"completado", notas:"Excelente comportamiento",     costo_dia:280 },
]

export const HABITACIONES_HOTEL = [
  { id:"hab1", nombre:"Suite Bosque 1",  tipo:"Suite Premium",    precio:380, capacidad:"Perro grande",       disponible:false },
  { id:"hab2", nombre:"Suite Bosque 2",  tipo:"Suite Premium",    precio:380, capacidad:"Perro grande",       disponible:false },
  { id:"hab3", nombre:"Suite Bosque 3",  tipo:"Suite Premium",    precio:380, capacidad:"Perro grande",       disponible:true  },
  { id:"hab4", nombre:"Cabaña Campo 1",  tipo:"Cabaña Estándar",  precio:320, capacidad:"Perro mediano",      disponible:false },
  { id:"hab5", nombre:"Cabaña Campo 2",  tipo:"Cabaña Estándar",  precio:280, capacidad:"Perro pequeño/med",  disponible:true  },
  { id:"hab6", nombre:"Cabaña Campo 3",  tipo:"Cabaña Estándar",  precio:280, capacidad:"Perro pequeño/med",  disponible:false },
]

export const CURSOS = [
  { id:"cur1", nombre:"Estimulación Temprana",     subtitulo:"Exclusivo para cachorros",       nivel:"Inicial",        duracion:"4 semanas", sesiones:"2/semana", precio:2800, alumnos_activos:8,  disponible:true },
  { id:"cur2", nombre:"Obediencia Básica",          subtitulo:"Refuerzos positivos",            nivel:"Básico",         duracion:"6 semanas", sesiones:"2/semana", precio:3500, alumnos_activos:12, disponible:true },
  { id:"cur3", nombre:"Obediencia Avanzada",        subtitulo:"Sin collar ni correa",           nivel:"Avanzado",       duracion:"6 semanas", sesiones:"2/semana", precio:4200, alumnos_activos:7,  disponible:true },
  { id:"cur4", nombre:"Protección Nivel 1",         subtitulo:"Introducción a la protección",   nivel:"Protección",     duracion:"8 semanas", sesiones:"2/semana", precio:5500, alumnos_activos:5,  disponible:true },
  { id:"cur5", nombre:"Protección Nivel 2",         subtitulo:"Ataque a distancia",             nivel:"Protección",     duracion:"8 semanas", sesiones:"2/semana", precio:5500, alumnos_activos:3,  disponible:true },
  { id:"cur6", nombre:"Protección Especialización", subtitulo:"Residencial · Industrial · Aromas", nivel:"Especialización", duracion:"12 semanas",sesiones:"3/semana", precio:9800, alumnos_activos:2, disponible:true },
]

export const ALUMNOS = [
  { id:"al1", mascota:"Rex",   raza:"Rottweiler",  propietario:"Héctor Guerrero", curso:"Obediencia Básica",   semana:3, total_semanas:6, status:"activo",      inicio:"2026-06-02" },
  { id:"al2", mascota:"Kira",  raza:"Malinois",    propietario:"Paola Mendez",    curso:"Protección Nivel 2",  semana:5, total_semanas:8, status:"activo",      inicio:"2026-05-12" },
  { id:"al3", mascota:"Bruno", raza:"Doberman",    propietario:"Jorge Castillo",  curso:"Obediencia Avanzada", semana:2, total_semanas:6, status:"activo",      inicio:"2026-06-09" },
  { id:"al4", mascota:"Niko",  raza:"Husky",       propietario:"Daniela Flores",  curso:"Estimulación Temprana",semana:4,total_semanas:4, status:"completando", inicio:"2026-05-26" },
  { id:"al5", mascota:"Tona",  raza:"Labrador",    propietario:"Ernesto López",   curso:"Obediencia Básica",   semana:1, total_semanas:6, status:"activo",      inicio:"2026-06-16" },
]

export const PACIENTES_ADMIN = [
  { id:"p1", nombre:"Thor",  especie:"Perro",  raza:"Pastor Alemán",   propietario:"Sofía Ramírez",   tel:"5544332211", ultima_visita:"2026-06-01", status:"activo" },
  { id:"p2", nombre:"Luna",  especie:"Gato",   raza:"Persa",           propietario:"Sofía Ramírez",   tel:"5544332211", ultima_visita:"2026-05-20", status:"activo" },
  { id:"p3", nombre:"Coco",  especie:"Perro",  raza:"Chihuahua",       propietario:"Mateo Jiménez",   tel:"5511223344", ultima_visita:"2026-06-10", status:"activo" },
  { id:"p4", nombre:"Bella", especie:"Perro",  raza:"Shih Tzu",        propietario:"Camila Herrera",  tel:"5599887766", ultima_visita:"2026-05-28", status:"en tratamiento" },
  { id:"p5", nombre:"Max",   especie:"Perro",  raza:"Bulldog Francés", propietario:"Diego Soto",      tel:"5566778899", ultima_visita:"2026-06-18", status:"post-operatorio" },
  { id:"p6", nombre:"Nala",  especie:"Perro",  raza:"Boxer",           propietario:"Valentina Cruz",  tel:"5533445566", ultima_visita:"2026-06-05", status:"activo" },
  { id:"p7", nombre:"Rocky", especie:"Perro",  raza:"Pitbull",         propietario:"Luis Morales",    tel:"5522334455", ultima_visita:"2026-05-15", status:"activo" },
  { id:"p8", nombre:"Mochi", especie:"Conejo", raza:"Holland Lop",     propietario:"Ana Gómez",       tel:"5577889900", ultima_visita:"2026-06-12", status:"activo" },
]

export const INVENTARIO = [
  { id:"i1", nombre:"Octavalente (canina)",    categoria:"Vacunas",          stock:24,  minimo:10, precio_compra:85,  precio_venta:180, unidad:"dosis" },
  { id:"i2", nombre:"Rabia (canina/felina)",   categoria:"Vacunas",          stock:18,  minimo:10, precio_compra:65,  precio_venta:140, unidad:"dosis" },
  { id:"i3", nombre:"Triple felina",           categoria:"Vacunas",          stock:12,  minimo:8,  precio_compra:90,  precio_venta:190, unidad:"dosis" },
  { id:"i4", nombre:"Amoxicilina 250mg",       categoria:"Antibióticos",     stock:3,   minimo:10, precio_compra:45,  precio_venta:95,  unidad:"caja"  },
  { id:"i5", nombre:"Ivermectina 1%",          categoria:"Antiparasitarios", stock:8,   minimo:5,  precio_compra:120, precio_venta:260, unidad:"frasco"},
  { id:"i6", nombre:"Shampoo medicado Douxo",  categoria:"Dermatología",     stock:6,   minimo:4,  precio_compra:180, precio_venta:380, unidad:"frasco"},
  { id:"i7", nombre:"Elizabethan collar L",    categoria:"Materiales",       stock:5,   minimo:3,  precio_compra:60,  precio_venta:120, unidad:"pieza" },
  { id:"i8", nombre:"Jeringa 10ml",            categoria:"Materiales",       stock:150, minimo:50, precio_compra:4,   precio_venta:8,   unidad:"pieza" },
]

export const KPIS = {
  citas_hoy: 6,
  pacientes_mes: 47,
  hospedados_activos: 3,
  alumnos_activos: 27,
  ingresos_mes: 68400,
  ingresos_semana: 14200,
  alertas_stock: 2,
  cirugias_semana: 1,
}
