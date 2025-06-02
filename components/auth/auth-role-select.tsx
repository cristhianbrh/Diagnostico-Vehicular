import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface Props {
  value: string
  error?: string
  onChange: (value: string) => void
}

export default function AuthRoleSelect({ value, onChange, error }: Props) {
  return (
    <div>
      <Label htmlFor="role">Rol</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={error ? "border-red-500" : ""}>
          <SelectValue placeholder="Seleccionar rol" />
        </SelectTrigger>
        {
            // TODO: Hacer un llamado a la base de datos acerca de los roles disponibles
        }
        <SelectContent>
          <SelectItem value="cliente">Cliente</SelectItem>
          <SelectItem value="tecnico">Técnico</SelectItem>
          <SelectItem value="admin">Administrador</SelectItem>
        </SelectContent>
      </Select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}