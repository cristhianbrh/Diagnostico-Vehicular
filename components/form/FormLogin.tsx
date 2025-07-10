"use client";
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

export default function FormLogin() {
  const { authForm, errors, loading, handleSubmitForm, setAuthForm } =
    useLoginForm();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-6 w-6" />
          Sistema de Diagnóstico Automotriz
        </CardTitle>
        <CardDescription>"Inicia sesión para continuar"</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitForm} className="space-y-4">
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

          {errors.auth && <AuthErrorAlert message={errors.auth} />}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Procesando..." : "Iniciar Sesión"}
          </Button>

          <a href="/register">
            <p className="w-full text-center hover:underline mt-3">
              ¿No tienes cuenta? Regístrate
            </p>
          </a>
        </form>
      </CardContent>
    </Card>
  );
}
