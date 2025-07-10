import { useContext, useState } from "react";
import axios from "axios";
import { AuthErrors, AuthFormData } from "@/types/auth.type";
import { LoadingContext } from "@/contexts/loading-context";
import { useRouter } from "next/navigation";

export function useRegisterForm() {
  const { loading, setLoading } = useContext(LoadingContext);

  const [authForm, setAuthForm] = useState<AuthFormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleSubmitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    // Registro usando API con axios
    const newErrors = <AuthErrors>{};
    if (!authForm.name || authForm.name.length < 2)
      newErrors.name = "Nombre requerido";
    if (!authForm.email || !authForm.email.includes("@"))
      newErrors.email = "Email inválido";
    if (!authForm.password || authForm.password.length < 6)
      newErrors.password = "Contraseña mín 6 caracteres";
    if (!authForm.role) newErrors.role = "Rol requerido";

    if (Object.keys(newErrors).length === 0) {
      axios
        .post("/api/auth/register", {
          email: authForm.email,
          password: authForm.password,
          name: authForm.name,
          role: authForm.role,
        })
        .then((res) => {
          // res.data.user esperado
          setAuthForm({});
          setErrors({});
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
          router.push("/vehicles");
        })
        .catch((err) => {
          setErrors({
            auth:
              err.response?.data?.error ||
              err.message ||
              "Error al registrar usuario",
          });
        });
    }

    setTimeout(() => setLoading(false), 500);
  };

  return {
    authForm,
    errors,
    loading,
    handleSubmitForm,
    setAuthForm,
  };
}
