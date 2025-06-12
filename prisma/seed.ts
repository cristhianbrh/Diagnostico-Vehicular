import { Diagnostic, DiagnosticDtc, DiagnosticSymptom, PrismaClient, ScannerFile, User, Vehicle } from "@/generated/prisma";
import { InputJsonValue } from "@/generated/prisma/runtime/library";

const prisma = new PrismaClient();
// npx prisma db seed

const mockDtcDatabase = [
  {
    code: "P0301",
    description: "Falla de encendido en cilindro 1",
    category: "Motor",
    severity: "grave",
    causes: [
      "Bujía defectuosa",
      "Bobina de encendido",
      "Inyector obstruido",
      "Compresión baja",
    ],
    solutions: [
      "Reemplazar bujía",
      "Verificar bobina",
      "Limpiar inyector",
      "Prueba de compresión",
    ],
  },
  {
    code: "P0171",
    description: "Mezcla pobre en banco 1",
    category: "Combustible",
    severity: "moderada",
    causes: [
      "Filtro de aire sucio",
      "Sensor MAF defectuoso",
      "Fuga de vacío",
      "Bomba de combustible",
    ],
    solutions: [
      "Cambiar filtro aire",
      "Limpiar sensor MAF",
      "Revisar mangueras",
      "Verificar presión combustible",
    ],
  },
  {
    code: "P0420",
    description: "Eficiencia del catalizador por debajo del umbral",
    category: "Emisiones",
    severity: "moderada",
    causes: [
      "Catalizador deteriorado",
      "Sensor O2 defectuoso",
      "Fuga en escape",
    ],
    solutions: [
      "Reemplazar catalizador",
      "Cambiar sensor O2",
      "Reparar fuga escape",
    ],
  },
  {
    code: "P0128",
    description: "Termostato del refrigerante",
    category: "Refrigeración",
    severity: "leve",
    causes: ["Termostato pegado abierto", "Sensor de temperatura defectuoso"],
    solutions: ["Reemplazar termostato", "Verificar sensor temperatura"],
  },
  {
    code: "P0442",
    description: "Fuga pequeña en sistema EVAP",
    category: "Emisiones",
    severity: "leve",
    causes: [
      "Tapa de combustible suelta",
      "Manguera EVAP agrietada",
      "Válvula purga defectuosa",
    ],
    solutions: [
      "Apretar tapa combustible",
      "Revisar mangueras EVAP",
      "Reemplazar válvula purga",
    ],
  },
];

const mockSymptoms = [
  {
    category: "Motor",
    name: "Ralentí irregular",
    description: "El motor no mantiene RPM estables en ralentí",
  },
  {
    category: "Motor",
    name: "Pérdida de potencia",
    description: "El vehículo no acelera como antes",
  },
  {
    category: "Motor",
    name: "Ruido metálico",
    description: "Sonidos extraños del motor",
  },
  {
    category: "Motor",
    name: "Sobrecalentamiento",
    description: "Temperatura del motor muy alta",
  },
  {
    category: "Combustible",
    name: "Mayor consumo",
    description: "Gasta más combustible de lo normal",
  },
  {
    category: "Combustible",
    name: "Olor a combustible",
    description: "Se percibe olor a gasolina",
  },
  {
    category: "Escape",
    name: "Humo negro",
    description: "Emisión de humo oscuro por el escape",
  },
  {
    category: "Escape",
    name: "Humo blanco",
    description: "Emisión de humo blanco por el escape",
  },
  {
    category: "Eléctrico",
    name: "Luces intermitentes",
    description: "Luces que parpadean sin razón",
  },
  {
    category: "Eléctrico",
    name: "Batería se descarga",
    description: "La batería no mantiene carga",
  },
  {
    category: "Transmisión",
    name: "Cambios bruscos",
    description: "La transmisión cambia de forma abrupta",
  },
  {
    category: "Frenos",
    name: "Ruido al frenar",
    description: "Chirridos o ruidos al aplicar frenos",
  },
  {
    category: "Suspensión",
    name: "Vibraciones",
    description: "Vibraciones excesivas al conducir",
  },
];

const mockUsers = <User[]>[
  {
    name: "Juan",
    role: "admin",
    email: "juan@gmail.com",
    password: "$2b$10$3Znm93OCjo78BZmv3H7by.WmJZMrdmiVBqu/fiUpinLeMvu0YAn4u",
    active: true,
  },
  {
    name: "Pepe",
    role: "tecnico",
    email: "pepe@gmail.com",
    password: "$2b$10$WsRbjFx3SEGLgvCXgUSAle8mNclHXnuIqpQgc1CCDWq7RaF9irlJq",
    active: true
  },
]

const mockVehicles: Vehicle[] = [
  {
    id: 1,
    marca: "Mercedes",
    modelo: "SLK",
    year: 2021,
    motor: "gasolina",
    vin: "WS123456789456878",
    patente: "123456789",
    km: 100,
    userId: 1,
    lastDiag: new Date(),
    fechaAdq: new Date(),
  },
  {
    id: 2,
    marca: "BMW",
    modelo: "X6",
    year: 2021,
    motor: "gasolina",
    vin: "WS123456789654321",
    patente: "123456789",
    km: 100,
    userId: 1,
    lastDiag: new Date(),
    fechaAdq: new Date(),
  },
]

const mockScannerFiles: ScannerFile[] = [
  {
    id: 1,
    fileName: "scan_001.json",
    uploadDate: new Date(),
    vehicleVin: "WS123456789456878",
    scannerType: "OBD2 Pro",
    status: "processed",
    rawData: { rpm: 800, coolantTemp: 85, fuelTrim: -5.2, o2Sensor: 0.45 },
  },
  {
    id: 2,
    fileName: "scan_002.csv",
    uploadDate: new Date(),
    vehicleVin: "WS123456789654321",
    scannerType: "AutoScan X1",
    status: "processed",
    rawData: { rpm: 750, coolantTemp: 90, fuelTrim: 2.1, o2Sensor: 0.52 },
  },
]

const mockDiagnostics: Diagnostic[] = [
  {
    id: 1,
    vehicleId: 1,
    fecha: new Date(),
    desc: "Test diagnostic 1",
    tecnico: "Test tecnico 01",
    estado: "resuelto",
    detalles: "Test detalles",
    cost: 50,
    duration: 6,
    scannerFileId: 1,
    aditionalSymptom: "Test aditional symptom",
    noteTecnicSym: "Test note tecnic sym",
    solutionText: "Test solution text"
  },
  {
    id: 2,
    vehicleId: 1,
    fecha: new Date(),
    desc: "Test diagnostic 2",
    tecnico: "Test tecnico 02",
    estado: "resuelto",
    detalles: "Test detalles",
    cost: 100,
    duration: 10,
    scannerFileId: 1,
    aditionalSymptom: "Test aditional symptom",
    noteTecnicSym: "Test note tecnic sym",
    solutionText: "Test solution text"
  },
]

const mockDiagnosticDtc: DiagnosticDtc[] = [
  {
    diagnosticId: 1,
    dtcCode: "P0128",
  },
  {
    diagnosticId: 1,
    dtcCode: "P0171",
  },
  {
    diagnosticId: 2,
    dtcCode: "P0420",
  },
]

const mockDiagnosticSymptoms: DiagnosticSymptom[] = [
  {
    diagnosticId: 1,
    symptomId: 1,
  },
  {
    diagnosticId: 1,
    symptomId: 2,
  },
  {
    diagnosticId: 2,
    symptomId: 3,
  },
]
async function main() {

  for (const user of mockUsers) {
    await prisma.user.create({ data: user });
  }

  for (const vehicle of mockVehicles) {
    await prisma.vehicle.create({ data: vehicle });
  }

  for (const symptom of mockSymptoms) {
    await prisma.symptom.create({ data: symptom });
  }

  for (const dtc of mockDtcDatabase) {
    await prisma.dtc.create({
      data: {
        code: dtc.code,
        description: dtc.description,
        category: dtc.category,
        severity: dtc.severity,
        causes: {
          create: dtc.causes.map((text) => ({ text })),
        },
        solutions: {
          create: dtc.solutions.map((text) => ({ text })),
        },
      },
    });
  }

  for (const scannerFile of mockScannerFiles) {
    await prisma.scannerFile.create({ data: {
      id: scannerFile.id,
      fileName: scannerFile.fileName,
      uploadDate: scannerFile.uploadDate,
      vehicleVin: scannerFile.vehicleVin,
      scannerType: scannerFile.scannerType,
      status: scannerFile.status,
      rawData: scannerFile.rawData as InputJsonValue,
      
    }});
  }

  for (const diagnostic of mockDiagnostics) {
    await prisma.diagnostic.create({ data: diagnostic });
  }

  for (const diagnosticDtc of mockDiagnosticDtc) {
    await prisma.diagnosticDtc.create({ data: diagnosticDtc });
  }

  for (const diagnosticSymptom of mockDiagnosticSymptoms) {
    await prisma.diagnosticSymptom.create({ data: diagnosticSymptom });
  }

  console.log("✔ Todo insertado correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
