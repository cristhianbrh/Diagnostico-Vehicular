"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useVehicleCreateForm } from "@/hooks/useVehicleCreateForm";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";

export default function FormVehiclesCreate() {
  const {
    handleSubmitForm,
    vehicleForm,
    setVehicleForm,
    errors,
    users,
    loading,
  } = useVehicleCreateForm();

  return (
    <form onSubmit={handleSubmitForm} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="marca">Marca *</Label>
          <Input
            id="marca"
            value={vehicleForm.marca || ""}
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, marca: e.target.value })
            }
            className={errors.marca ? "border-red-500" : ""}
          />
          {errors.marca && (
            <p className="text-red-500 text-sm">{errors.marca}</p>
          )}
        </div>

        <div>
          <Label htmlFor="modelo">Modelo *</Label>
          <Input
            id="modelo"
            value={vehicleForm.modelo || ""}
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, modelo: e.target.value })
            }
            className={errors.modelo ? "border-red-500" : ""}
          />
          {errors.modelo && (
            <p className="text-red-500 text-sm">{errors.modelo}</p>
          )}
        </div>

        <div>
          <Label htmlFor="year">Año *</Label>
          <Input
            id="year"
            type="number"
            value={vehicleForm.year || ""}
            onChange={(e) =>
              setVehicleForm({
                ...vehicleForm,
                year: Number.parseInt(e.target.value),
              })
            }
            className={errors.year ? "border-red-500" : ""}
          />
          {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
        </div>

        <div>
          <Label htmlFor="motor">Motor *</Label>
          <Input
            id="motor"
            value={vehicleForm.motor || ""}
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, motor: e.target.value })
            }
            className={errors.motor ? "border-red-500" : ""}
          />
          {errors.motor && (
            <p className="text-red-500 text-sm">{errors.motor}</p>
          )}
        </div>

        <div>
          <Label htmlFor="vin">VIN *</Label>
          <Input
            id="vin"
            value={vehicleForm.vin || ""}
            onChange={(e) =>
              setVehicleForm({
                ...vehicleForm,
                vin: e.target.value.toUpperCase(),
              })
            }
            maxLength={17}
            className={errors.vin ? "border-red-500" : ""}
          />
          {errors.vin && <p className="text-red-500 text-sm">{errors.vin}</p>}
        </div>

        <div>
          <Label htmlFor="patente">Patente *</Label>
          <Input
            id="patente"
            value={vehicleForm.patente || ""}
            onChange={(e) =>
              setVehicleForm({
                ...vehicleForm,
                patente: e.target.value.toUpperCase(),
              })
            }
            className={errors.patente ? "border-red-500" : ""}
          />
          {errors.patente && (
            <p className="text-red-500 text-sm">{errors.patente}</p>
          )}
        </div>

        <div>
          <Label htmlFor="km">Kilometraje *</Label>
          <Input
            id="km"
            type="number"
            value={vehicleForm.km || ""}
            onChange={(e) =>
              setVehicleForm({
                ...vehicleForm,
                km: Number.parseInt(e.target.value),
              })
            }
            className={errors.km ? "border-red-500" : ""}
          />
          {errors.km && <p className="text-red-500 text-sm">{errors.km}</p>}
        </div>

        <div>
          <Label htmlFor="fechaAdq">Fecha Adquisición</Label>
          <Input
            id="fechaAdq"
            type="date"
            value={vehicleForm.fechaAdq || ""}
            onChange={(e) =>
              setVehicleForm({ ...vehicleForm, fechaAdq: e.target.value })
            }
          />
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="userId">Propietario *</Label>
          <Select
            value={vehicleForm.userId?.toString() || ""}
            onValueChange={(value) =>
              setVehicleForm({
                ...vehicleForm,
                userId: Number.parseInt(value),
              })
            }
          >
            <SelectTrigger className={errors.userId ? "border-red-500" : ""}>
              <SelectValue placeholder="Seleccionar usuario" />
            </SelectTrigger>
            <SelectContent>
              {users
                .filter((u) => u.active)
                .map((user) => (
                  <SelectItem key={user.id} value={user.id.toString()}>
                    {user.name} ({user.role})
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          {errors.userId && (
            <p className="text-red-500 text-sm">{errors.userId}</p>
          )}
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" disabled={loading}>
          Agregar
        </Button>
        <Button type="button" variant="outline">
          Cancelar
        </Button>
      </div>
    </form>
  );
}
