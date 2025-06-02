import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Car } from "lucide-react"
import AuthRoleSelect from "./auth-role-select"
import AuthErrorAlert from "./auth-error-alert"
import FormInput from "@/components/ui/form-input"
import { AUTH_MODES } from "@/constants/auth-mode"
import { useAuthForm } from "@/hooks/use-auth-form"

export default function AuthForm() {

  const {
    authForm,
    authMode,
    errors,
    loading,
    toggleMode,
    handleAuth: onSubmit,
    setAuthForm
  } = useAuthForm();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-6 w-6" />
          Sistema de Diagnóstico Automotriz
        </CardTitle>
        <CardDescription>
          {authMode === AUTH_MODES.LOGIN ? "Inicia sesión para continuar" : "Registra una nueva cuenta"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          {authMode === AUTH_MODES.REGISTER && (
            <FormInput
              id="name"
              label="Nombre Completo"
              value={authForm.name || ""}
              onChange={(e) => setAuthForm({...authForm, name: e})}
              error={errors.name}
            />
          )}

          <FormInput
            id="email"
            label="Email"
            type="email"
            value={authForm.email || ""}
            onChange={(e) => setAuthForm({...authForm, email: e})}
            error={errors.email}
          />

          <FormInput
            id="password"
            label="Contraseña"
            type="password"
            value={authForm.password || ""}
            onChange={(e) => setAuthForm({...authForm, password: e})}
            error={errors.password}
          />

          {authMode === AUTH_MODES.REGISTER && (
            <AuthRoleSelect
              value={authForm.role || ""}
              onChange={(e) => setAuthForm({...authForm, role: e})}
              error={errors.role}
            />
          )}

          {errors.auth && <AuthErrorAlert message={errors.auth} />}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Procesando..." : authMode === AUTH_MODES.LOGIN ? "Iniciar Sesión" : "Registrarse"}
          </Button>

          <Button
            type="button"
            variant="link"
            className="w-full"
            onClick={toggleMode}
          >
            {authMode === AUTH_MODES.LOGIN ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}