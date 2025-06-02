import { useContext, useState } from "react"
import { AUTH_MODES, AuthMode } from "@/constants/auth-mode"
import axios from "axios";
import { AuthErrors, AuthFormData } from "@/types/auth";
import { UserAuthContext } from "@/contexts/user-auth-context";
import { LoadingContext } from "@/contexts/loading-context";

export function useAuthForm() {
  const { setCurrentUser, users, setUsers } = useContext(UserAuthContext);
  const {loading, setLoading} = useContext(LoadingContext);

  const [authForm, setAuthForm] = useState<AuthFormData>({})
  const [authMode, setAuthMode] = useState<AuthMode>(AUTH_MODES.LOGIN);
  const [errors, setErrors] = useState<Record<string, string>>({});
  

  function toggleMode() {
    setAuthMode((mode) => (mode === AUTH_MODES.LOGIN ? AUTH_MODES.REGISTER : AUTH_MODES.LOGIN));
    setAuthForm({});
    setErrors({});
  }

  // Función gigante para manejar autenticación (HORRIBLE)
  const handleAuth = (e : React.SyntheticEvent) => {
    e.preventDefault()
    setLoading(true)

    if (authMode === AUTH_MODES.LOGIN) {
      axios
      .post("/api/auth/login", {
        email: authForm.email,
        password: authForm.password,
      })
      .then((res) => {
        // res.data.user esperado
        setCurrentUser(res.data.user)
        setAuthForm({})
        setErrors({})
        if (res.data.token) {
        localStorage.setItem("token", res.data.token)
        }
      })
      .catch((err) => {
        setErrors({ auth: err.response?.data?.error || err.message || "Credenciales inválidas o usuario inactivo" })
      })
    } else {
      // Registro usando API con axios
      const newErrors = <AuthErrors>{}
      if (!authForm.name || authForm.name.length < 2) newErrors.name = "Nombre requerido"
      if (!authForm.email || !authForm.email.includes("@")) newErrors.email = "Email inválido"
      if (!authForm.password || authForm.password.length < 6) newErrors.password = "Contraseña mín 6 caracteres"
      if (!authForm.role) newErrors.role = "Rol requerido"

      if (Object.keys(newErrors).length === 0) {
        axios
          .post("/api/auth/register", {
             email: authForm.email, 
             password: authForm.password, 
             name: authForm.name, 
             role : authForm.role
          })
          .then((res) => {
            // res.data.user esperado
            setUsers([...users, res.data.user])
            setCurrentUser(res.data.user)
            setAuthForm({})
            setErrors({})
            if (res.data.token) {
              localStorage.setItem("token", res.data.token)
            }
          })
          .catch((err) => {
        setErrors({ auth: err.response?.data?.error || err.message || "Error al registrar usuario" })
          })
      } else {
        setErrors(newErrors)
      }
      
    }

    setTimeout(() => setLoading(false), 500)
  }

  return {
    authMode,
    authForm,
    errors,
    loading,
    toggleMode,
    handleAuth,
    setAuthForm
  }
}
