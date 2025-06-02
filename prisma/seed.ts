import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();
// npx prisma db seed

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

async function main() {
  for (const symptom of mockSymptoms) {
    await prisma.symptom.create({ data: symptom });
  }
  console.log("✔ Síntomas insertados correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
