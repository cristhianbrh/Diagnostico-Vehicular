import type { NextApiRequest, NextApiResponse } from "next";

type Vehicle = {
  id?: number;
  marca: string;
  modelo: string;
  año: number;
  motor: string;
  vin: string;
  patente: string;
  km: number;
  userId: number;
  lastDiag?: any;
};

type ErrorResponse = {
  error: string;
  fields?: Partial<Record<keyof Vehicle, string>>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Vehicle | ErrorResponse>
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { marca, modelo, año, motor, vin, patente, km, userId } = req.body;

  const errors: Partial<Record<keyof Vehicle, string>> = {};

  if (!marca || marca.length < 2) errors.marca = "Marca requerida";
  if (!modelo) errors.modelo = "Modelo requerido";
  if (!año || año < 1900 || año > new Date().getFullYear() + 1)
    errors.año = "Año inválido";
  if (!motor) errors.motor = "Tipo de motor requerido";
  if (!vin || vin.length !== 17) errors.vin = "VIN debe tener 17 caracteres";
  if (!patente) errors.patente = "Patente requerida";
  if (km === undefined || km < 0) errors.km = "Kilometraje inválido";
  if (!userId) errors.userId = "Usuario requerido";

  if (Object.keys(errors).length > 0) {
    res.status(400).json({ error: "Datos inválidos", fields: errors });
    return;
  }

  // Aquí deberías guardar el vehículo en la base de datos.
  // Por ahora, solo devolvemos el objeto recibido con un id simulado.

  const newVehicle: Vehicle = {
    id: Math.floor(Math.random() * 1000000),
    marca,
    modelo,
    año,
    motor,
    vin,
    patente,
    km,
    userId,
    lastDiag: null,
  };

  res.status(201).json(newVehicle);
}
