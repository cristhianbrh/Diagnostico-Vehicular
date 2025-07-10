import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Car } from "lucide-react";
import FormInput from "@/components/ui/form-input";
import AuthErrorAlert from "../auth/auth-error-alert";
import { useLoginForm } from "@/hooks/useLoginForm";
import AuthRoleSelect from "../auth/auth-role-select";
import { parseUserRole } from "@/lib/utils";

export default function FormRegister() {
  const { authForm, errors, loading, handleSubmitForm, setAuthForm } =
    useLoginForm();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-6 w-6" />
          Sistema de Diagnóstico Automotriz
        </CardTitle>
        <CardDescription>Registra una nueva cuenta</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <FormInput
            id="name"
            label="Nombre Completo"
            value={authForm.name || ""}
            onChange={(e) => setAuthForm({ ...authForm, name: e })}
            error={errors.name}
          />

          <FormInput
            id="email"
            label="Email"
            type="email"
            value={authForm.email || ""}
            onChange={(e) => setAuthForm({ ...authForm, email: e })}
            error={errors.email}
          />

          <FormInput
            id="password"
            label="Contraseña"
            type="password"
            value={authForm.password || ""}
            onChange={(e) => setAuthForm({ ...authForm, password: e })}
            error={errors.password}
          />

          <AuthRoleSelect
            value={authForm.role || ""}
            onChange={(e) =>
              setAuthForm({ ...authForm, role: parseUserRole(e) })
            }
            error={errors.role}
          />

          {errors.auth && <AuthErrorAlert message={errors.auth} />}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Procesando..." : "Iniciar Sesión"}
          </Button>
          <a href="/register">
            <p className="w-full text-center hover:underline mt-3">
              ¿Ya tienes cuenta? Inicia sesión
            </p>
          </a>
        </form>
      </CardContent>
    </Card>
  );
}
