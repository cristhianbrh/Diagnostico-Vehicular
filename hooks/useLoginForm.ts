import { useContext, useState } from "react";
import axios from "axios";
import { AuthFormData } from "@/types/auth.type";
import { LoadingContext } from "@/contexts/loading-context";
import { useRouter } from "next/navigation";

export function useLoginForm() {
  const { loading, setLoading } = useContext(LoadingContext);

  const [authForm, setAuthForm] = useState<AuthFormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleSubmitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post("/api/auth/login", {
        email: authForm.email,
        password: authForm.password,
      })
      .then((res) => {
        setAuthForm({});
        setErrors({});
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        router.push("/home");
      })
      .catch((err) => {
        setErrors({
          auth:
            err.response?.data?.error ||
            err.message ||
            "Credenciales inválidas o usuario inactivo",
        });
      });

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
