"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import axios from 'axios'

import {
  Calendar,
  Car,
  User,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Clock,
  Trash2,
  Edit,
  Plus,
  Eye,
  Upload,
  FileText,
  Search,
  Download,
  HelpCircle,
  MessageSquare,
  Filter,
  BarChart3,
  AlertCircle,
  ExternalLink,
  Printer,
  Mail,
  Phone,
  Shield,
  UserPlus,
  LogOut,
  Gauge,
} from "lucide-react"
import AuthLayout from "@/components/auth/auth-layout"
import AuthForm from "@/components/auth/auth-form"
import { UserAuthContext } from "@/contexts/user-auth-context"
import { User as PrismaUser } from "@/generated/prisma"
import { LoadingContext } from "@/contexts/loading-context"
import { MainNavBar } from "@/components/navbar/main-nav-bar"
import { APP_VIEWS, AppViews } from "@/constants/app-views"
import { AppViewContext } from "@/contexts/app-view-context"

export default function Component() {
  // Estados horriblemente organizados y con nombres confusos
  const [currentView, setCurrentView] = useState<AppViews>(APP_VIEWS.VEHICLES) // vehicles, scanner, dtc, symptoms, solutions, users, reports, help
  const [vehicleData, setVehicleData] = useState([])
  const [vehicleForm, setVehicleForm] = useState({})
  const [vehicleMode, setVehicleMode] = useState("list") // list, add, edit, view
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const [users, setUsers] = useState<PrismaUser[]>([])
  const [diagnostics, setDiagnostics] = useState([])
  const [scannerData, setScannerData] = useState([])
  const [dtcDatabase, setDtcDatabase] = useState([])
  const [symptoms, setSymptoms] = useState([])
  const [solutions, setSolutions] = useState([])
  const [currentUser, setCurrentUser] = useState<PrismaUser | null>(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({ severity: "all", category: "all" })
  const [reportData, setReportData] = useState(null)
  const [helpSearchTerm, setHelpSearchTerm] = useState("")
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [manualDtc, setManualDtc] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [vehicleSelectSymtoms, setVehicleSelectSymtoms] = useState<number>(-1)
  const [diagnosticSelectSolutions, setDiagnosticSelectSolutions] = useState<number>(-1)
  const fileInputRef = useRef(null)
  useEffect(() => {
    console.log("Current view changed:", currentView)
  }, [currentView])
  useEffect(() => {
    setDiagnosticSelectSolutions(-1)
  }, [vehicleSelectSymtoms])
  // Datos hardcodeados gigantes mezclados con lógica (HORRIBLE)

  const getAllDiagnostics = async () => {
      try {
      const res = await axios.get("/api/diagnostic/getAll");
      setDiagnostics(res.data.diagnostics || []);
      } catch (error) {
      setErrors({ dtc: "Error al obtener base de datos de diagnostico" });
      }
    };
  useEffect(() => {
    // Mock users con estructura inconsistente
    // const mockUsers = [
    //   {
    //     id: 1,
    //     name: "Juan Pérez",
    //     role: "tecnico",
    //     email: "juan@taller.com",
    //     password: "123456",
    //     active: true,
    //     createdAt: "2023-01-15",
    //   },
    //   {
    //     id: 2,
    //     name: "María García",
    //     role: "cliente",
    //     email: "maria@email.com",
    //     password: "123456",
    //     active: true,
    //     createdAt: "2023-02-20",
    //   },
    //   {
    //     id: 3,
    //     name: "Carlos López",
    //     role: "admin",
    //     email: "carlos@admin.com",
    //     password: "admin123",
    //     active: true,
    //     createdAt: "2023-01-01",
    //   },
    //   {
    //     id: 4,
    //     name: "Ana Martínez",
    //     role: "tecnico",
    //     email: "ana@taller.com",
    //     password: "123456",
    //     active: true,
    //     createdAt: "2023-03-10",
    //   },
    //   {
    //     id: 5,
    //     name: "Pedro Rodríguez",
    //     role: "cliente",
    //     email: "pedro@email.com",
    //     password: "123456",
    //     active: false,
    //     createdAt: "2023-04-05",
    //   },
    // ]
    // setUsers(mockUsers)

    // Datos de vehículos hardcodeados
    // const mockVehicles = [
      // {
      //   id: 1,
      //   marca: "Toyota",
      //   modelo: "Corolla",
      //   year: 2018,
      //   motor: "1.8L",
      //   vin: "1HGBH41JXMN109186",
      //   patente: "ABC123",
      //   km: 85000,
      //   fechaAdq: "2018-03-15",
      //   userId: 2,
      //   lastDiag: "2024-01-15",
      // },
      // {
      //   id: 2,
      //   marca: "Ford",
      //   modelo: "Fiesta",
      //   year: 2020,
      //   motor: "1.6L Turbo",
      //   vin: "3FADP4EJ8KM123456",
      //   patente: "XYZ789",
      //   km: 45000,
      //   fechaAdq: "2020-07-22",
      //   userId: 2,
      //   lastDiag: "2024-01-20",
      // },
      // {
      //   id: 3,
      //   marca: "Chevrolet",
      //   modelo: "Cruze",
      //   year: 2019,
      //   motor: "1.4L Turbo",
      //   vin: "1G1BC5SM5K7123456",
      //   patente: "DEF456",
      //   km: 62000,
      //   fechaAdq: "2019-05-10",
      //   userId: 4,
      //   lastDiag: "2024-01-18",
      // },
    // ]
    const getAllUsers = async () => {
      try {
        const res = await axios.get("/api/users/getUsers");
        console.log(res)
        setUsers(res.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrors({ vehicle: error.response?.data?.error || error.message || "Error al obtener los usuarios" });
        } else if (error instanceof Error) {
          setErrors({ vehicle: error.message });
        } else {
          setErrors({ vehicle: "Error al obtener usuarios" });
        }
      }
    }
    getAllUsers();

    const getAllVehicle = async () => {
      try {
        const res = await axios.get("/api/vehicle/getAll");
        setVehicleData(res.data.vehicles);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setErrors({ vehicle: error.response?.data?.error || error.message || "Error al obtener vehículos" });
        } else if (error instanceof Error) {
          setErrors({ vehicle: error.message });
        } else {
          setErrors({ vehicle: "Error al obtener vehículos" });
        }
      }
    }
    getAllVehicle();

    // Base de datos DTC hardcodeada (estructura horrible)
    // Obtener base de datos DTC desde la API de diagnostics
    
    getAllDiagnostics();
    
    const getAllDtc = async () => {
      try {
        const res = await axios.get("/api/dtc/getAll");
        console.log("res.data.dtcs")
        console.log(res.data.dtcs)
        setDtcDatabase(res.data.dtcs || []);
      } catch (error) {
        setErrors({ dtc: "Error al obtener base de datos DTC" });
      }
    };
    getAllDtc();

    // Diagnósticos hardcodeados con más datos
    const mockDiagnostics = [
      {
        id: 1,
        vehicleId: 1,
        fecha: "2024-01-15",
        dtc: ["P0301", "P0171"],
        desc: "Falla en cilindro 1 y mezcla pobre",
        tecnico: "Juan Pérez",
        estado: "resuelto",
        detalles: "Se reemplazó bujía y se limpió inyector",
        scannerFile: "scan_001.json",
        symptoms: ["Ralentí irregular", "Pérdida de potencia"],
        cost: 150000,
        duration: 2.5,
      },
      {
        id: 2,
        vehicleId: 1,
        fecha: "2023-12-10",
        dtc: ["P0420"],
        desc: "Eficiencia del catalizador por debajo del umbral",
        tecnico: "Ana Martínez",
        estado: "pendiente",
        detalles: "Requiere reemplazo de catalizador",
        scannerFile: "scan_002.csv",
        symptoms: ["Humo negro", "Mayor consumo"],
        cost: 800000,
        duration: 4,
      },
      {
        id: 3,
        vehicleId: 2,
        fecha: "2024-01-20",
        dtc: [],
        desc: "Mantenimiento preventivo",
        tecnico: "Juan Pérez",
        estado: "resuelto",
        detalles: "Cambio de aceite y filtros",
        scannerFile: null,
        symptoms: [],
        cost: 80000,
        duration: 1,
      },
      {
        id: 4,
        vehicleId: 3,
        fecha: "2024-01-18",
        dtc: ["P0128", "P0442"],
        desc: "Problemas de temperatura y emisiones",
        tecnico: "Ana Martínez",
        estado: "grave",
        detalles: "Termostato defectuoso y fuga EVAP",
        scannerFile: "scan_003.json",
        symptoms: ["Sobrecalentamiento", "Olor a combustible"],
        cost: 250000,
        duration: 3,
      },
    ]
    setDiagnostics(mockDiagnostics)

    // Obtener síntomas predefinidos desde la API
    const getAllSymptoms = async () => {
      try {
      const res = await axios.get("/api/symptoms/getAll");
      setSymptoms(res.data.symptoms || []);
      } catch (error) {
      setErrors({ symptoms: "Error al obtener síntomas" });
      }
    };
    getAllSymptoms();

    // Datos de escáner simulados
    // const mockScannerData = [
    //   {
    //     id: 1,
    //     fileName: "scan_001.json",
    //     uploadDate: "2024-01-15",
    //     vehicleVin: "1HGBH41JXMN109186",
    //     scannerType: "OBD2 Pro",
    //     dtcCodes: ["P0301", "P0171"],
    //     status: "processed",
    //     rawData: { rpm: 800, coolantTemp: 85, fuelTrim: -5.2, o2Sensor: 0.45 },
    //   },
    //   {
    //     id: 2,
    //     fileName: "scan_002.csv",
    //     uploadDate: "2023-12-10",
    //     vehicleVin: "1HGBH41JXMN109186",
    //     scannerType: "AutoScan X1",
    //     dtcCodes: ["P0420"],
    //     status: "processed",
    //     rawData: { rpm: 750, coolantTemp: 90, fuelTrim: 2.1, o2Sensor: 0.52 },
    //   },
    // ]
    // setScannerData(mockScannerData)
    getAllScannerFiles()
    getUserCurrent();
    // Usuario actual simulado (horrible hardcodeo)
    // setCurrentUser(mockUsers[0]) // Juan Pérez como usuario por defecto
  }, [])

  // Obtiene el usuario actual si existe el token en localStorage
  const getUserCurrent = async () => {
    const token = localStorage.getItem("token")
    if (!token) return
    try {
      const res = await axios.get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      })
      setCurrentUser(res.data.user)
    } catch (error) {
      setCurrentUser(null)
      localStorage.removeItem("token")
    }
  }
  const getAllScannerFiles = async () => {
    try {
      const res = await axios.get("/api/scanner/getAll");
      // res.data.scannerFiles debe ser un array con la estructura indicada
      setScannerData(
        res.data.scannerFiles.map((file) => {
          let dtcCodes: string[] = [];
          // Si rawData tiene 'dtc_codes' o 'codes', úsalo
          if (file.rawData?.dtc_codes) {
        dtcCodes = file.rawData.dtc_codes;
          } else if (file.rawData?.codes) {
        dtcCodes = file.rawData.codes;
          } else if (file.rawData?.content && typeof file.rawData.content === "string") {
        // Extraer DTCs de un CSV en 'content'
        const lines = file.rawData.content.split("\n").filter(Boolean);
        if (lines.length > 1) {
          const headers = lines[0].split(",");
          // Encuentra los índices de las columnas que contienen "dtc"
          const dtcIndexes = headers
            .map((h, idx) => (h.toLowerCase().includes("dtc") ? idx : -1))
            .filter((idx) => idx !== -1);
          // Extrae los códigos de cada fila
          for (let i = 1; i < lines.length; i++) {
            const cols = lines[i].split(",");
            dtcIndexes.forEach((idx) => {
          const code = cols[idx]?.trim();
          if (code && /^P[0-9A-F]{4}$/i.test(code)) {
            dtcCodes.push(code.toUpperCase());
          }
            });
          }
        }
          }
          return {
        ...file,
        uploadDate: typeof file.uploadDate === "string" ? file.uploadDate.split("T")[0] : file.uploadDate,
        dtcCodes,
          };
        })
      );
    } catch (error) {
      setErrors({ scanner: "Error al obtener archivos del escáner" });
    }
  }

  // Función para subir archivos del escáner y guardarlos en la base de datos
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setLoading(true)

    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = async (event) => {
        try {
          let parsedData = null
          let dtcCodes = []
          let vehicleVin = ""

          if (file.name.endsWith(".json")) {
            parsedData = JSON.parse(event.target.result)
            dtcCodes = parsedData.dtc_codes || parsedData.codes || []
            vehicleVin = parsedData.vin || ""
          } else if (file.name.endsWith(".csv")) {
            const lines = event.target.result.split("\n")
            const headers = lines[0].split(",")
            const dtcIndex = headers.findIndex(
              (h) => h.toLowerCase().includes("dtc") || h.toLowerCase().includes("code"),
            )
            const vinIndex = headers.findIndex(
              (h) => h.toLowerCase().includes("vin")
            )
            if (dtcIndex !== -1) {
              dtcCodes = lines
          .slice(1)
          .map((line) => line.split(",")[dtcIndex])
          .filter((code) => code && code.trim())
            }
            if (vinIndex !== -1) {
              const vinValue = lines[1]?.split(",")[vinIndex]
              vehicleVin = vinValue ? vinValue.trim() : ""
            }
          } else if (file.name.endsWith(".txt")) {
            const lines = event.target.result.split("\n")
            dtcCodes = lines
              .filter((line) => /^P[0-9A-F]{4}$/i.test(line.trim()))
              .map((line) => line.trim().toUpperCase())
            // Opcional: buscar VIN en el txt si hay una línea tipo VIN:XXXXXXXXXXXXXXX
            const vinLine = lines.find((line) => /^VIN[:\s]/i.test(line.trim()))
            if (vinLine) {
              const match = vinLine.match(/VIN[:\s]*([A-HJ-NPR-Z0-9]{17})/i)
              if (match) vehicleVin = match[1].toUpperCase()
            }
          }

          const newScanData = {
            fileName: file.name,
            uploadDate: new Date().toISOString().split("T")[0],
            vehicleVin: vehicleVin || parsedData?.vin || "",
            scannerType: parsedData?.scanner_type || "Desconocido",
            dtcCodes: dtcCodes,
            status: "processed",
            rawData: parsedData || { content: event.target.result },
          }

          // Guardar en la base de datos
          const scannerUpload = await axios.post("/api/scanner/upload", newScanData)

          setScannerData((prev) => [...prev, { id: Date.now(), ...newScanData }])
          setUploadedFiles((prev) => [...prev, file.name])

          // Auto-asociar con vehículo si encuentra VIN
          if (newScanData.vehicleVin) {
            const vehicle = vehicleData.find((v) => v.vin === newScanData.vehicleVin)
            if (vehicle && dtcCodes.length > 0) {
              try {
                const res = await axios.post("/api/diagnostic/create", {
                  vehicleId: vehicle.id,
                  fecha: new Date().toISOString(),
                  dtc: dtcCodes,
                  desc: `Diagnóstico automático desde ${file.name}`,
                  tecnico: currentUser?.name || "Sistema",
                  estado: "pendiente",
                  detalles: `Datos importados automáticamente desde escáner`,
                  // symptoms: [],
                  scannerFileId: scannerUpload.data.id,
                  cost: 0,
                  duration: 0,
                });
                console.log(res.data.diagnostic)
                setDiagnostics((prev) => [...prev, res.data.diagnostic]);
              } catch (error) {
                setErrors({ diagnostic: "Error al crear diagnóstico automáticamente" });
              }
            }
          }
        } catch (error) {
          setErrors({ upload: `Error procesando ${file.name}: ${error.message}` })
        }
      }
      reader.readAsText(file)
    })

    setTimeout(() => setLoading(false), 1000)
  }

  // Función para agregar DTC manual (horrible)
  const addManualDtc = () => {
    if (!manualDtc || !manualDtc.match(/^P[0-9A-F]{4}$/i)) {
      setErrors({ manualDtc: "Código DTC inválido (formato: P0XXX)" })
      return
    }

    const newScanData = {
      id: Math.max(...scannerData.map((s) => s.id), 0) + 1,
      fileName: "manual_entry",
      uploadDate: new Date().toISOString().split("T")[0],
      vehicleVin: "",
      scannerType: "Entrada Manual",
      dtcCodes: [manualDtc.toUpperCase()],
      status: "processed",
      rawData: { manual: true },
    }

    setScannerData((prev) => [...prev, newScanData])
    setManualDtc("")
    setErrors({})
  }

  // Función horrible para generar reporte
  const generateReport = (vehicleId) => {
    setLoading(true)
    const vehicle = vehicleData.find((v) => v.id === vehicleId)
    const vehicleDiags = diagnostics.filter((d) => d.vehicleId === vehicleId)

    const reportData = {
      vehicle: vehicle,
      diagnostics: vehicleDiags,
      totalCost: vehicleDiags.reduce((sum, d) => sum + (d.cost || 0), 0),
      totalTime: vehicleDiags.reduce((sum, d) => sum + (d.duration || 0), 0),
      dtcFrequency: {},
      recommendations: [],
    }

    // Análisis de frecuencia DTC (lógica horrible)
    vehicleDiags.forEach((diag) => {
      if (diag.dtc) {
        diag.dtc.forEach((code) => {
          reportData.dtcFrequency[code] = (reportData.dtcFrequency[code] || 0) + 1
        })
      }
    })

    // Recomendaciones basadas en DTC (lógica hardcodeada horrible)
    Object.keys(reportData.dtcFrequency).forEach((code) => {
      const dtcInfo = dtcDatabase.find((d) => d.code === code)
      if (dtcInfo) {
        reportData.recommendations.push({
          code: code,
          frequency: reportData.dtcFrequency[code],
          severity: dtcInfo.severity,
          solutions: dtcInfo.solutions,
        })
      }
    })

    setReportData(reportData)
    setTimeout(() => setLoading(false), 1000)
  }

  // Función para buscar en ayuda (horrible)
  const searchHelp = (term) => {
    const helpData = [
      {
        id: 1,
        title: "¿Cómo interpretar códigos P0301?",
        content: "El código P0301 indica falla de encendido en cilindro 1...",
        category: "DTC",
      },
      {
        id: 2,
        title: "Subir archivos de escáner",
        content: "Para subir archivos del escáner OBD2...",
        category: "Scanner",
      },
      {
        id: 3,
        title: "Registrar síntomas",
        content: "Los síntomas ayudan a complementar el diagnóstico...",
        category: "Symptoms",
      },
      {
        id: 4,
        title: "Generar reportes",
        content: "Los reportes se pueden exportar en formato PDF...",
        category: "Reports",
      },
      {
        id: 5,
        title: "Gestión de usuarios",
        content: "Los administradores pueden crear y gestionar usuarios...",
        category: "Users",
      },
    ]

    return helpData.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.content.toLowerCase().includes(term.toLowerCase()),
    )
  }

  // Función gigante para obtener estadísticas (HORRIBLE)
  const getVehicleStats = (vehicleId) => {
    const diags = diagnostics
      .filter((d) => d.vehicleId === vehicleId)
      .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    const totalDiags = diags.length
    const pendientes = diags.filter((d) => d.estado === "pendiente").length
    const resueltos = diags.filter((d) => d.estado === "resuelto").length
    const graves = diags.filter((d) => d.estado === "grave").length

    const allDtc = []
    diags.forEach((d) => {
      if (d.dtc && d.dtc.length > 0) {
        d.dtc.forEach((code) => allDtc.push(code))
      }
    })
    const dtcCount = {}
    allDtc.forEach((code) => {
      dtcCount[code] = (dtcCount[code] || 0) + 1
    })
    const topDtc = Object.entries(dtcCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)

    return { totalDiags, pendientes, resueltos, graves, topDtc }
  }

  // Función para obtener estado del vehículo (lógica compleja innecesaria)
  const getVehicleStatus = (vehicle) => {
    console.log("Vehicle")
    console.log(vehicle)
    const diags = diagnostics
    .filter((d) => d.vehicleId === vehicle.id)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

    console.log("diags")
    console.log(diags)
    if (diags.length === 0) return { status: "sin-diagnosticos", color: "gray", icon: Clock }

    const lastDiag = diags[0]
    if (lastDiag.estado === "grave") return { status: "grave", color: "red", icon: AlertTriangle }
    if (lastDiag.estado === "pendiente") return { status: "pendiente", color: "yellow", icon: Clock }
    if (lastDiag.estado === "resuelto") return { status: "ok", color: "green", icon: CheckCircle }

    return { status: "desconocido", color: "gray", icon: Clock }
  }

  // Función para obtener nombre de usuario (ineficiente)
  const getUserName = (userId) => {
    const user = users.find((u) => u.id === userId)
    return user ? user.name : "Usuario desconocido"
  }

  // Si no hay usuario logueado, mostrar login (horrible)
  if (!currentUser) {
    return (
      <LoadingContext.Provider value={{loading, setLoading}}>
        <UserAuthContext.Provider value={{currentUser, setCurrentUser, users, setUsers}}>
          <AuthLayout>
            <AuthForm/>
          </AuthLayout>
        </UserAuthContext.Provider>
      </LoadingContext.Provider>
    )
  }

  // Renderizado condicional gigante y horrible
  return (
    <div className="min-h-screen bg-background">
      <AppViewContext.Provider value={{ currentView, setCurrentView }}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <UserAuthContext.Provider value={{ currentUser, setCurrentUser, users, setUsers }}>
            <MainNavBar/>
          </UserAuthContext.Provider>
        </LoadingContext.Provider>
      </AppViewContext.Provider>

      <div className="container mx-auto p-4">
        {/* RF01 - Gestión de Vehículos (código anterior) */}
        {currentView === APP_VIEWS.VEHICLES && (
          <div className="space-y-6">
            {vehicleMode === "list" && (
              <>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Gestión de Vehículos</h2>
                  <Button
                    onClick={() => {
                      setVehicleMode("add")
                      setVehicleForm({})
                      setErrors({})
                    }}
                    className="flex items-center gap-2"
                  >
                    <Plus className="h-4 w-4" />
                    Agregar Vehículo
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Vehículos Registrados</CardTitle>
                    <CardDescription>Lista de todos los vehículos en el sistema</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Estado</th>
                            <th className="text-left p-2">Marca</th>
                            <th className="text-left p-2">Modelo</th>
                            <th className="text-left p-2">year</th>
                            <th className="text-left p-2">Patente</th>
                            <th className="text-left p-2">Propietario</th>
                            <th className="text-left p-2">Último Diagnóstico</th>
                            <th className="text-left p-2">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vehicleData && vehicleData.map((vehicle) => {
                            const status = getVehicleStatus(vehicle)
                            const StatusIcon = status.icon
                            return (
                              <tr key={vehicle.id} className="border-b hover:bg-muted/50">
                                <td className="p-2">
                                  <StatusIcon className={`h-5 w-5 text-${status.color}-500`} />
                                </td>
                                <td className="p-2 font-medium">{vehicle.marca}</td>
                                <td className="p-2">{vehicle.modelo}</td>
                                <td className="p-2">{vehicle.year}</td>
                                <td className="p-2 font-mono">{vehicle.patente}</td>
                                <td className="p-2">{getUserName(vehicle.userId)}</td>
                                <td className="p-2">{vehicle.lastDiag || "Sin diagnósticos"}</td>
                                <td className="p-2">
                                  <div className="flex gap-1">
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => {
                                        setSelectedVehicle(vehicle)
                                        setVehicleMode("view")
                                      }}
                                    >
                                      <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => {
                                        setSelectedVehicle(vehicle)
                                        setVehicleForm(vehicle)
                                        setVehicleMode("edit")
                                        setErrors({})
                                      }}
                                    >
                                      <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={async () => {
                                      try {
                                        await axios.delete(`/api/vehicle/removeById`, {
                                          params: { id: vehicle.id }
                                        });
                                          setVehicleData(vehicleData.filter((v) => v.id !== vehicle.id));
                                        if (selectedVehicle && selectedVehicle.id === vehicle.id) {
                                          setVehicleMode("list");
                                          setSelectedVehicle(null);
                                        }
                                        } catch (error) {
                                          setErrors({ vehicle: "Error al eliminar vehículo" });
                                        }
                                      }}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Formulario de vehículo (código duplicado horrible) */}
            {(vehicleMode === "add" || vehicleMode === "edit") && (
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setVehicleMode("list")
                      setVehicleForm({})
                      setErrors({})
                    }}
                  >
                    ← Volver
                  </Button>
                  <h2 className="text-2xl font-bold">
                    {vehicleMode === "add" ? "Agregar Nuevo Vehículo" : "Editar Vehículo"}
                  </h2>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Información del Vehículo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault()
                        setLoading(true)

                        const newErrors = {}
                        if (!vehicleForm.marca || vehicleForm.marca.length < 2) newErrors.marca = "Marca requerida"
                        if (!vehicleForm.modelo) newErrors.modelo = "Modelo requerido"
                        if (
                          !vehicleForm.year ||
                          vehicleForm.year < 1900 ||
                          vehicleForm.year > new Date().getFullYear() + 1
                        ) {
                          newErrors.year = "year inválido"
                        }
                        if (!vehicleForm.motor) newErrors.motor = "Tipo de motor requerido"
                        if (!vehicleForm.vin || vehicleForm.vin.length !== 17)
                          newErrors.vin = "VIN debe tener 17 caracteres"
                        if (!vehicleForm.patente) newErrors.patente = "Patente requerida"
                        if (!vehicleForm.km || vehicleForm.km < 0) newErrors.km = "Kilometraje inválido"
                        if (!vehicleForm.userId) newErrors.userId = "Usuario requerido"

                        setErrors(newErrors)

                        if (Object.keys(newErrors).length === 0) {
                          if (vehicleMode === "add") {
                            try {
                              const res = await axios.post("/api/vehicle/create", vehicleForm)
                              setVehicleData([...vehicleData, res.data])
                            } catch (error) {
                              if (axios.isAxiosError(error)) {
                                setErrors({ api: error.response?.data?.error || error.message || "Error al crear vehículo" })
                              } else if (error instanceof Error) {
                                setErrors({ api: error.message })
                              } else {
                                setErrors({ api: "Error al crear vehículo" })
                              }
                              setLoading(false)
                              return
                            }
                          } else {
                            try {
                              const res = await axios.put("/api/vehicle/updateById", {
                                ...vehicleForm,
                                id: selectedVehicle.id,
                              });
                              setVehicleData(
                                vehicleData.map((v) =>
                                  v.id === selectedVehicle.id ? res.data : v
                                )
                              );
                              } catch (error) {
                              if (axios.isAxiosError(error)) {
                                 setErrors({ api: error.response?.data?.error || error.message || "Error al actualizar vehículo" });
                              } else if (error instanceof Error) {
                                setErrors({ api: error.message });
                              } else {
                                setErrors({ api: "Error al actualizar vehículo" });
                              }
                              setLoading(false);
                              return;
                            }
                          }
                          
                          setVehicleForm({})
                          setVehicleMode("list")
                          setSelectedVehicle(null)
                        }

                        setTimeout(() => setLoading(false), 500)
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="marca">Marca *</Label>
                          <Input
                            id="marca"
                            value={vehicleForm.marca || ""}
                            onChange={(e) => setVehicleForm({ ...vehicleForm, marca: e.target.value })}
                            className={errors.marca ? "border-red-500" : ""}
                          />
                          {errors.marca && <p className="text-red-500 text-sm">{errors.marca}</p>}
                        </div>

                        <div>
                          <Label htmlFor="modelo">Modelo *</Label>
                          <Input
                            id="modelo"
                            value={vehicleForm.modelo || ""}
                            onChange={(e) => setVehicleForm({ ...vehicleForm, modelo: e.target.value })}
                            className={errors.modelo ? "border-red-500" : ""}
                          />
                          {errors.modelo && <p className="text-red-500 text-sm">{errors.modelo}</p>}
                        </div>

                        <div>
                          <Label htmlFor="year">Año *</Label>
                          <Input
                            id="year"
                            type="number"
                            value={vehicleForm.year || ""}
                            onChange={(e) => setVehicleForm({ ...vehicleForm, year: Number.parseInt(e.target.value) })}
                            className={errors.year ? "border-red-500" : ""}
                          />
                          {errors.year && <p className="text-red-500 text-sm">{errors.year}</p>}
                        </div>

                        <div>
                          <Label htmlFor="motor">Motor *</Label>
                          <Input
                            id="motor"
                            value={vehicleForm.motor || ""}
                            onChange={(e) => setVehicleForm({ ...vehicleForm, motor: e.target.value })}
                            className={errors.motor ? "border-red-500" : ""}
                          />
                          {errors.motor && <p className="text-red-500 text-sm">{errors.motor}</p>}
                        </div>

                        <div>
                          <Label htmlFor="vin">VIN *</Label>
                          <Input
                            id="vin"
                            value={vehicleForm.vin || ""}
                            onChange={(e) => setVehicleForm({ ...vehicleForm, vin: e.target.value.toUpperCase() })}
                            maxLength="17"
                            className={errors.vin ? "border-red-500" : ""}
                          />
                          {errors.vin && <p className="text-red-500 text-sm">{errors.vin}</p>}
                        </div>

                        <div>
                          <Label htmlFor="patente">Patente *</Label>
                          <Input
                            id="patente"
                            value={vehicleForm.patente || ""}
                            onChange={(e) => setVehicleForm({ ...vehicleForm, patente: e.target.value.toUpperCase() })}
                            className={errors.patente ? "border-red-500" : ""}
                          />
                          {errors.patente && <p className="text-red-500 text-sm">{errors.patente}</p>}
                        </div>

                        <div>
                          <Label htmlFor="km">Kilometraje *</Label>
                          <Input
                            id="km"
                            type="number"
                            value={vehicleForm.km || ""}
                            onChange={(e) => setVehicleForm({ ...vehicleForm, km: Number.parseInt(e.target.value) })}
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
                            onChange={(e) => setVehicleForm({ ...vehicleForm, fechaAdq: e.target.value })}
                          />
                        </div>

                        <div className="md:col-span-2">
                          <Label htmlFor="userId">Propietario *</Label>
                          <Select
                            value={vehicleForm.userId?.toString() || ""}
                            onValueChange={(value) =>
                              setVehicleForm({ ...vehicleForm, userId: Number.parseInt(value) })
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
                          {errors.userId && <p className="text-red-500 text-sm">{errors.userId}</p>}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button type="submit" disabled={loading}>
                          {loading ? "Guardando..." : vehicleMode === "add" ? "Agregar" : "Guardar"}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setVehicleMode("list")
                            setVehicleForm({})
                            setErrors({})
                          }}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Vista individual del vehículo (código horrible duplicado) */}
            {vehicleMode === "view" && selectedVehicle && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <Button variant="outline" onClick={() => setVehicleMode("list")}>
                    ← Volver
                  </Button>
                  <h2 className="text-2xl font-bold">Detalles del Vehículo</h2>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-6 w-6" />
                      {selectedVehicle.marca} {selectedVehicle.modelo} ({selectedVehicle.year})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">VIN</Label>
                        <p className="font-mono text-sm">{selectedVehicle.vin}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Patente</Label>
                        <p className="font-mono">{selectedVehicle.patente}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Motor</Label>
                        <p>{selectedVehicle.motor}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Kilometraje</Label>
                        <p>{selectedVehicle.km?.toLocaleString()} km</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Propietario</Label>
                        <p>{getUserName(selectedVehicle.userId)}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Fecha Adquisición</Label>
                        <p>{selectedVehicle.fechaAdq || "No especificada"}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Estadísticas del vehículo */}
                {(() => {
                  const stats = getVehicleStats(selectedVehicle.id)
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <Wrench className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="text-sm text-muted-foreground">Total Diagnósticos</p>
                              <p className="text-2xl font-bold">{stats.totalDiags}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <div>
                              <p className="text-sm text-muted-foreground">Resueltos</p>
                              <p className="text-2xl font-bold">{stats.resueltos}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-yellow-500" />
                            <div>
                              <p className="text-sm text-muted-foreground">Pendientes</p>
                              <p className="text-2xl font-bold">{stats.pendientes}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                            <div>
                              <p className="text-sm text-muted-foreground">Graves</p>
                              <p className="text-2xl font-bold">{stats.graves}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )
                })()}

                {/* Historial de diagnósticos */}
                <Card>
                  <CardHeader>
                    <CardTitle>Historial de Diagnósticos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(() => {
                      const vehicleDiags = diagnostics
                        .filter((d) => d.vehicleId === selectedVehicle.id)
                        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))

                      if (vehicleDiags.length === 0) {
                        return <p className="text-muted-foreground text-center py-8">No hay diagnósticos</p>
                      }

                      return (
                        <div className="space-y-4">
                          {vehicleDiags.map((diag) => (
                            <Card key={diag.id} className="border-l-4 border-l-blue-500">
                              <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span className="font-medium">
                                      {new Date(diag.fecha).toLocaleDateString("es-CL", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                      })}
                                      {" "}
                                      {new Date(diag.fecha).toLocaleTimeString("es-CL", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                                    </span>
                                    <Badge
                                      variant={
                                        diag.estado === "resuelto"
                                          ? "default"
                                          : diag.estado === "pendiente"
                                            ? "secondary"
                                            : diag.estado === "grave"
                                              ? "destructive"
                                              : "outline"
                                      }
                                    >
                                      {diag.estado}
                                    </Badge>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <User className="h-4 w-4" />
                                    {diag.tecnico}
                                  </div>
                                </div>
                                <p className="mb-2">{diag.desc}</p>
                                {diag.dtc && diag.dtc.length > 0 && (
                                  <div className="mb-2">
                                    <Label className="text-sm font-medium">Códigos DTC:</Label>
                                    <div className="flex gap-1 mt-1">
                                      {diag.dtc.map((code) => (
                                        <Badge key={code} variant="outline" className="font-mono text-xs">
                                          {code}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}
                               <div className="mb-5">
                                 {diag.dtcs.map((diag_dtc) => (
                                        <Badge key={"history_" + diag.id + diag_dtc.dtcCode} variant="outline" className="font-mono text-xs">
                                            {diag_dtc.dtcCode}
                                          </Badge>
                                        ))}
                                  </div>
                                 <div className="flex flex-col gap-5">
                                 
                                  {diag.detalles && (
                                    <div>
                                      <Label className="text-sm font-medium">Detalles:</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{diag.detalles}</p>
                                    </div>
                                  )}
                                  {diag.aditionalSymptom && (
                                    <div>
                                      <Label className="text-sm font-medium">Síntomas Adicionales:</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{diag.aditionalSymptom}</p>
                                    </div>
                                  )}
                                  {diag.symptoms && diag.symptoms.length > 0 && (
                                    <div className="mb-2">
                                      <Label className="text-sm font-medium">Síntomas Asociados:</Label>
                                      <div className="flex flex-wrap gap-2 mt-1">
                                        {diag.symptoms.map((sym_dia) => {
                                          const currentSympt = symptoms.find((synn) => synn.id === sym_dia.symptomId)
                                          if (!currentSympt) return null
                                          return (
                                            <Badge
                                              key={`symptom_${diag.id}_${currentSympt.id}`}
                                              variant="outline"
                                              className="text-xs px-2 py-1 flex flex-col items-start min-w-[120px]"
                                            >
                                              <span className="font-medium">{currentSympt.name}</span>
                                              <span className="text-xs text-muted-foreground">{currentSympt.description}</span>
                                            </Badge>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  )}
                                  {diag.noteTecnicSym && (
                                    <div>
                                      <Label className="text-sm font-medium">Notas del Técnico:</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{diag.noteTecnicSym}</p>
                                    </div>
                                  )}
                                  {diag.solutionText && (
                                    <div>
                                      <Label className="text-sm font-medium">Detalles de la solucion:</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{diag.solutionText}</p>
                                    </div>
                                  )}

                               </div>
                              
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      )
                    })()}
                  </CardContent>
                </Card>

                {/* Sección para que el mecánico marque un diagnóstico como resuelto */}
                {currentView === APP_VIEWS.VEHICLES && vehicleMode === "view" && selectedVehicle && (
                  <Card className="my-6">
                    <CardHeader>
                      <CardTitle>Resolver Problema del Vehículo</CardTitle>
                      <CardDescription>
                        Selecciona un diagnóstico pendiente para marcarlo como resuelto y agregar detalles de la solución.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {diagnostics.filter((d) => d.vehicleId === selectedVehicle.id && d.estado !== "resuelto").length === 0 ? (
                        <p className="text-muted-foreground">No hay diagnósticos pendientes o graves para este vehículo.</p>
                      ) : (
                        diagnostics.filter((d) => d.vehicleId === selectedVehicle.id && d.estado !== "resuelto").map((diag) => (
                          <form
                            key={diag.id}
                            className="mb-4 border rounded p-4"
                            onSubmit={async (e) => {
                              e.preventDefault();
                              setLoading(true);
                              const formData = new FormData(e.target as HTMLFormElement);
                              const detalles = formData.get("detalles") as string;
                              try {
                                // Llama a la API para actualizar el diagnóstico
                                const res = await axios.put("/api/diagnostic/solutionDiagnostic", {
                                  id: diag.id,
                                  solutionText: detalles || diag.detalles,
                                });
                                // Actualiza el estado localmente con la respuesta de la API
                                setDiagnostics((prev) =>
                                  prev.map((d) =>
                                    d.id === diag.id
                                      ? { ...d, ...res.data.diagnostic }
                                      : d
                                  )
                                );
                                setErrors({});
                              } catch (error) {
                                setErrors({ solve: "Error al marcar como resuelto" });
                              }
                              setLoading(false);
                            }}
                          >
                            <div className="mb-2">
                              <span className="font-semibold">DTC:</span> {diag.dtc?.join(", ")}
                            </div>
                            <div className="mb-2">
                              <span className="font-semibold">Descripción:</span> {diag.desc}
                            </div>
                            <div className="mb-2">
                              <Label htmlFor={`detalles-${diag.id}`}>Detalles de la solución</Label>
                              <Input
                                id={`detalles-${diag.id}`}
                                name="detalles"
                                defaultValue={diag.detalles || ""}
                                placeholder="Describe la solución aplicada"
                                className="mt-1"
                              />
                            </div>
                            <Button type="submit" disabled={loading} className="mt-2">
                              Marcar como resuelto
                            </Button>
                            {errors.solve && <p className="text-red-500 text-sm mt-2">{errors.solve}</p>}
                          </form>
                        ))
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        )}

        {/* RF02 - Recepción de datos del escáner */}
        {currentView === APP_VIEWS.SCANNER && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Datos del Escáner Automotriz</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Subir archivos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Subir Archivos del Escáner
                  </CardTitle>
                  <CardDescription>Soporta archivos JSON, CSV y TXT de escáneres OBD2</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept=".json,.csv,.txt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button onClick={() => fileInputRef.current?.click()} className="w-full" disabled={loading}>
                      <Upload className="h-4 w-4 mr-2" />
                      {loading ? "Procesando..." : "Seleccionar Archivos"}
                    </Button>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div>
                      <Label className="text-sm font-medium">Archivos subidos:</Label>
                      <div className="mt-2 space-y-1">
                        {uploadedFiles.map((fileName, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <FileText className="h-4 w-4 text-green-500" />
                            {fileName}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {errors.upload && (
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>{errors.upload}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              {/* Entrada manual de DTC */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="h-5 w-5" />
                    Entrada Manual de Códigos DTC
                  </CardTitle>
                  <CardDescription>Ingresa códigos DTC manualmente si no tienes archivo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="manualDtc">Código DTC (ej: P0301)</Label>
                    <Input
                      id="manualDtc"
                      value={manualDtc}
                      onChange={(e) => setManualDtc(e.target.value.toUpperCase())}
                      placeholder="P0XXX"
                      maxLength="5"
                      className={errors.manualDtc ? "border-red-500" : ""}
                    />
                    {errors.manualDtc && <p className="text-red-500 text-sm">{errors.manualDtc}</p>}
                  </div>

                  <Button onClick={addManualDtc} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Código DTC
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Lista de datos del escáner */}
            <Card>
              <CardHeader>
                <CardTitle>Datos Importados del Escáner</CardTitle>
                <CardDescription>
                  {scannerData.length} archivo{scannerData.length !== 1 ? "s" : ""} procesado
                  {scannerData.length !== 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {scannerData.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    No hay datos del escáner. Sube un archivo o ingresa códigos manualmente.
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Archivo</th>
                          <th className="text-left p-2">Fecha</th>
                          <th className="text-left p-2">Escáner</th>
                          <th className="text-left p-2">VIN</th>
                          <th className="text-left p-2">Códigos DTC</th>
                          <th className="text-left p-2">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scannerData.map((scan) => (
                          <tr key={scan.id} className="border-b hover:bg-muted/50">
                            <td className="p-2">
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                {scan.fileName}
                              </div>
                            </td>
                            <td className="p-2">{scan.uploadDate}</td>
                            <td className="p-2">{scan.scannerType}</td>
                            <td className="p-2 font-mono text-sm">{scan.vehicleVin || "No especificado"}</td>
                            <td className="p-2">
                              <div className="flex gap-1 flex-wrap">
                                {scan.dtcCodes.map((code) => (
                                  <Badge key={code} variant="outline" className="font-mono text-xs">
                                    {code}
                                  </Badge>
                                ))}
                              </div>
                            </td>
                            <td className="p-2">
                              <Badge variant={scan.status === "processed" ? "default" : "secondary"}>
                                {scan.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* RF03 - Interpretación avanzada de códigos DTC */}
        {currentView === APP_VIEWS.DTC && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Interpretación de Códigos DTC</h2>
              <div className="flex gap-2">
                <Input
                  placeholder="Buscar código DTC..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
                <Button variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Filtros */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filtros de Búsqueda
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Select
                    value={filters.severity || "all"}
                    onValueChange={(value) => setFilters({ ...filters, severity: value })}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filtrar por gravedad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las gravedades</SelectItem>
                      <SelectItem value="leve">Leve</SelectItem>
                      <SelectItem value="moderada">Moderada</SelectItem>
                      <SelectItem value="grave">Grave</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={filters.category || "all"}
                    onValueChange={(value) => setFilters({ ...filters, category: value })}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filtrar por categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las categorías</SelectItem>
                      <SelectItem value="Motor">Motor</SelectItem>
                      <SelectItem value="Combustible">Combustible</SelectItem>
                      <SelectItem value="Emisiones">Emisiones</SelectItem>
                      <SelectItem value="Refrigeración">Refrigeración</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    onClick={() => {
                      setFilters({ severity: "all", category: "all" })
                      setSearchTerm("")
                    }}
                  >
                    Limpiar Filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Base de datos DTC */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dtcDatabase
                .filter((dtc) => {
                  const matchesSearch =
                    !searchTerm ||
                    dtc.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    dtc.description.toLowerCase().includes(searchTerm.toLowerCase())
                  const matchesSeverity =
                    !filters.severity || filters.severity === "all" || dtc.severity === filters.severity
                  const matchesCategory =
                    !filters.category || filters.category === "all" || dtc.category === filters.category
                  return matchesSearch && matchesSeverity && matchesCategory
                })
                .map((dtc) => (
                  <Card key={dtc.code} className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="font-mono text-lg">{dtc.code}</span>
                        <Badge
                          variant={
                            dtc.severity === "grave"
                              ? "destructive"
                              : dtc.severity === "moderada"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {dtc.severity}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{dtc.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium">Categoría:</Label>
                        <p className="text-sm">{dtc.category}</p>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Causas Frecuentes:</Label>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          {dtc.causes.map((cause, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-xs mt-1">•</span>
                              {cause.text}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <Label className="text-sm font-medium">Soluciones Sugeridas:</Label>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          {dtc.solutions.map((solution, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 mt-1 text-green-500" />
                              {solution.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* RF04 - Registro de síntomas adicionales */}
        {currentView === APP_VIEWS.SYMPTOMS && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Registro de Síntomas</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Formulario de síntomas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    Registrar Nuevos Síntomas
                  </CardTitle>
                  <CardDescription>
                    Complementa el diagnóstico con observaciones adicionales
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setLoading(true);
                      setErrors({});
                      setSuccessMsg("");
                      // Obtener valores del formulario
                      const form = e.target as HTMLFormElement;
                      // Diagnóstico seleccionado
                      const diagnosticSelect = form.querySelector(
                        '[name="diagnosticSelect"]'
                      ) as HTMLSelectElement;
                      const diagnosticId = diagnosticSelect?.value
                        ? Number(diagnosticSelect.value)
                        : null;
                      // Síntomas seleccionados
                      const selectedSymptomIds = selectedSymptoms;
                      // Síntomas adicionales
                      const aditionalSymptom =
                        (
                          form.querySelector(
                            "#customSymptoms"
                          ) as HTMLTextAreaElement
                        )?.value || "";
                      // Notas del técnico
                      const noteTecnic =
                        (
                          form.querySelector(
                            "#techNotes"
                          ) as HTMLTextAreaElement
                        )?.value || "";

                      if (!diagnosticId) {
                        setErrors({ submit: "Selecciona un diagnóstico" });
                        setLoading(false);
                        return;
                      }
                      try {
                        await axios.post("/api/symptoms/upload", {
                          diagnosticId,
                          symptoms: selectedSymptomIds,
                          aditionalSymptom,
                          noteTecnic,
                        });
                        setSuccessMsg("Síntomas registrados correctamente");
                        getAllDiagnostics();
                        setSelectedSymptoms([]);
                        form.reset();
                      } catch (error) {
                        setErrors({ submit: "Error al registrar síntomas" });
                      }
                      setLoading(false);
                    }}
                  >
                    <div>
                      <Label htmlFor="vehicleSelect">Vehículo</Label>
                      <Select
                        value={
                          vehicleSelectSymtoms !== -1
                            ? vehicleSelectSymtoms.toString()
                            : ""
                        }
                        onValueChange={(value) =>
                          setVehicleSelectSymtoms(Number(value))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar vehículo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-1">
                            Todos los vehículos
                          </SelectItem>
                          {vehicleData.map((vehicle) => (
                            <SelectItem
                              key={vehicle.id}
                              value={vehicle.id.toString()}
                            >
                              {vehicle.marca} {vehicle.modelo} -{" "}
                              {vehicle.patente}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="diagnosticSelect">Diagnóstico</Label>
                      <select
                        name="diagnosticSelect"
                        id="diagnosticSelect"
                        className="w-full border rounded px-2 py-2 mt-1"
                        required
                        value={diagnosticSelectSolutions.toString()}
                        onChange={(e) =>setDiagnosticSelectSolutions(Number(e.target.value))} // avoid react warning
                      >
                        <option value="-1">Seleccionar diagnóstico</option>
                        {diagnostics
                          .filter(
                            (dt) =>
                             (vehicleSelectSymtoms !== -1 &&
                                dt.vehicleId === vehicleSelectSymtoms) &&
                              dt.estado !== "resuelto"
                          )
                          .map((diag_dg) => (
                            <option
                              key={diag_dg.id}
                              value={diag_dg.id.toString()}
                            >
                              {diag_dg.desc} - {new Date(diag_dg.fecha).toLocaleDateString("es-CL", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                      })}
                                      {" "}
                                      {new Date(diag_dg.fecha).toLocaleTimeString("es-CL", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div>
                      <Label className="text-sm font-medium">
                        Síntomas Predefinidos
                      </Label>
                      <div className="mt-2 space-y-2 max-h-64 overflow-y-auto">
                        {symptoms.map((symptom) => (
                          <div
                            key={symptom.id}
                            className="flex items-start space-x-2"
                          >
                            <Checkbox
                              id={`symptom-${symptom.id}`}
                              checked={selectedSymptoms.includes(symptom.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedSymptoms([
                                    ...selectedSymptoms,
                                    symptom.id,
                                  ]);
                                } else {
                                  setSelectedSymptoms(
                                    selectedSymptoms.filter(
                                      (id) => id !== symptom.id
                                    )
                                  );
                                }
                              }}
                            />
                            <div className="grid gap-1.5 leading-none">
                              <label
                                htmlFor={`symptom-${symptom.id}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {symptom.name}
                              </label>
                              <p className="text-xs text-muted-foreground">
                                {symptom.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="customSymptoms">
                        Síntomas Adicionales
                      </Label>
                      <Textarea
                        id="customSymptoms"
                        placeholder="Describe otros síntomas observados..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="techNotes">Notas del Técnico</Label>
                      <Textarea
                        id="techNotes"
                        placeholder="Observaciones técnicas adicionales..."
                        rows={3}
                      />
                    </div>

                    <Button className="w-full" type="submit" disabled={loading}>
                      <Plus className="h-4 w-4 mr-2" />
                      {loading ? "Registrando..." : "Registrar Síntomas"}
                    </Button>
                    {errors.submit && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.submit}
                      </p>
                    )}
                    {successMsg && (
                      <p className="text-green-600 text-sm mt-2">
                        {successMsg}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              {/* Síntomas por categoría */}
              <Card>
                <CardHeader>
                  <CardTitle>Síntomas por Categoría</CardTitle>
                  <CardDescription>
                    Catálogo de síntomas organizados por sistema
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="Motor" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="Motor">Motor</TabsTrigger>
                      <TabsTrigger value="Combustible">Combustible</TabsTrigger>
                      <TabsTrigger value="Eléctrico">Eléctrico</TabsTrigger>
                      <TabsTrigger value="Otros">Otros</TabsTrigger>
                    </TabsList>

                    {["Motor", "Combustible", "Eléctrico", "Otros"].map(
                      (category) => (
                        <TabsContent
                          key={category}
                          value={category}
                          className="space-y-2"
                        >
                          {symptoms
                            .filter(
                              (s) =>
                                s.category === category ||
                                (category === "Otros" &&
                                  ![
                                    "Motor",
                                    "Combustible",
                                    "Eléctrico",
                                  ].includes(s.category))
                            )
                            .map((symptom) => (
                              <Card key={symptom.id} className="p-3">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium text-sm">
                                      {symptom.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-1">
                                      {symptom.description}
                                    </p>
                                  </div>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => {
                                      if (
                                        !selectedSymptoms.includes(symptom.id)
                                      ) {
                                        setSelectedSymptoms([
                                          ...selectedSymptoms,
                                          symptom.id,
                                        ]);
                                      }
                                    }}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </Card>
                            ))}
                        </TabsContent>
                      )
                    )}
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* RF05 - Recomendaciones de solución */}
        {currentView === APP_VIEWS.SOLUTIONS && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Recomendaciones de Solución</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Generador de recomendaciones */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Generar Recomendaciones
                  </CardTitle>
                  <CardDescription>Basado en códigos DTC y síntomas detectados</CardDescription>
                </CardHeader>
                <div className="px-5">
                      <Label htmlFor="vehicleSelect">Vehículo</Label>
                      <Select
                        value={
                          vehicleSelectSymtoms !== -1
                            ? vehicleSelectSymtoms.toString()
                            : ""
                        }
                        onValueChange={(value) =>
                          setVehicleSelectSymtoms(Number(value))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar vehículo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="-1">
                            Todos los vehículos
                          </SelectItem>
                          {vehicleData.map((vehicle) => (
                            <SelectItem
                              key={vehicle.id}
                              value={vehicle.id.toString()}
                            >
                              {vehicle.marca} {vehicle.modelo} -{" "}
                              {vehicle.patente}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="px-5 mt-4">
                      <Label htmlFor="diagnosticSelect">Diagnóstico</Label>
                      <select
                        name="diagnosticSelect"
                        id="diagnosticSelect"
                        className="w-full border rounded px-2 py-2 mt-1"
                        required
                        value={diagnosticSelectSolutions.toString()}
                        onChange={(e) =>setDiagnosticSelectSolutions(Number(e.target.value))} // avoid react warning
                      >
                        <option value="-1">Seleccionar diagnóstico</option>
                        {diagnostics
                          .filter(
                            (dt) =>
                              (vehicleSelectSymtoms !== -1 &&
                                dt.vehicleId === vehicleSelectSymtoms) &&
                              dt.estado !== "resuelto"
                          )
                          .map((diag_dg) => (
                            <option
                              key={diag_dg.id}
                              value={diag_dg.id.toString()}
                            >
                              {diag_dg.desc} - {new Date(diag_dg.fecha).toLocaleDateString("es-CL", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                      })}
                                      {" "}
                                      {new Date(diag_dg.fecha).toLocaleTimeString("es-CL", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                            </option>
                          ))}
                      </select>
                    </div>
                <CardContent className="space-y-4 mt-5">
                  <div>
                    <Label>Códigos DTC Detectados</Label>
                    <div className="mt-2 flex gap-2 flex-wrap">
                        {(() => {
                          const selectedDiagnostic = diagnostics.findLast(
                            (d_find) => d_find.id === diagnosticSelectSolutions
                          );
                          console.log(selectedDiagnostic);
                          if (selectedDiagnostic && Array.isArray(selectedDiagnostic.dtcs)) {
                            return selectedDiagnostic.dtcs.map((diagn_current: string, idx: number) => (
                              <Badge key={diagn_current.dtcCode + idx} variant="outline" className="font-mono">
                                {diagn_current.dtcCode}
                              </Badge>
                            ));
                          }
                          return null;
                        })()}
                    </div>
                  </div>

                  <div>
                    <Label>Síntomas Reportados</Label>
                    <div className="mt-2 space-y-2">
                       {(() => {
                        const selectedDiagnostic = diagnostics.findLast(
                          (d_find) => d_find.id === diagnosticSelectSolutions
                        );

                        if (selectedDiagnostic && Array.isArray(selectedDiagnostic.symptoms)) {
                          return selectedDiagnostic.symptoms.map((diagn_current, idx) => {
                            const symptom = symptoms.findLast(
                              (sy_find) => sy_find.id === diagn_current.symptomId
                            );

                            return (
                              <div key={diagn_current.symptomId + "-" + idx} className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-orange-500" />
                                <span className="text-sm">{symptom?.name ?? "Síntoma no encontrado"}</span>
                              </div>
                            );
                          });
                        }

                        return null;
                      })()}
                     
                    </div>
                  </div>

                  {/* Recomendaciones generadas (hardcodeadas horriblemente) */}
                  <div className="border-t pt-4">
                    <Label className="text-base font-semibold">Recomendaciones Priorizadas</Label>
                    <div className="mt-3 space-y-3">
                      {(() => {
                        const selectedDiagnostic = diagnostics.findLast(
                          (d_find) => d_find.id === diagnosticSelectSolutions
                        );

                        if (selectedDiagnostic && Array.isArray(selectedDiagnostic.dtcs)) {
                          return selectedDiagnostic.dtcs.flatMap((diagn_current, idx) => {
                            const dtcInfo = dtcDatabase.find(
                              (dtc_find) => dtc_find.code === diagn_current.dtcCode
                            );

                            if (!dtcInfo || !Array.isArray(dtcInfo.solutions)) return [];

                            return dtcInfo.solutions.map((dcInfoSolution, solIdx) => (
                              <Card
                                key={`${dtcInfo.code}-${dcInfoSolution.id}-${idx}-${solIdx}`}
                                className={`border-l-4 ${
                                  dtcInfo.severity === "grave"
                                    ? "border-l-red-500"
                                    : dtcInfo.severity === "media"
                                    ? "border-l-yellow-500"
                                    : "border-l-green-500"
                                }`}
                              >
                                <CardContent className="p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <h4 className="font-medium">
                                      <strong>{dtcInfo.code}</strong> - {dcInfoSolution.text}
                                    </h4>
                                    <Badge
                                      variant={
                                        dtcInfo.priority === "Alta"
                                          ? "destructive"
                                          : dtcInfo.priority === "Media"
                                          ? "secondary"
                                          : "outline"
                                      }
                                    >
                                      {dtcInfo.severity}
                                    </Badge>
                                  </div>
                                </CardContent>
                              </Card>
                            ));
                          });
                        }
                    
                        {/* <p className="text-sm text-muted-foreground mb-3">{rec.description}</p> */}
                                    {/* <div className="flex gap-4 text-xs">
                                      <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {rec.time}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <span className="text-green-600">$</span>
                                        {rec.cost}
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Gauge className="h-3 w-3" />
                                        {rec.difficulty}
                                      </div>
                                    </div> */}
                        return null;
                      })()}
                     
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enlaces y recursos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Recursos Técnicos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Manual de Servicio Toyota", url: "#", type: "PDF" },
                    { title: "Diagrama de Cableado", url: "#", type: "PDF" },
                    { title: "Video: Cambio de Bujías", url: "#", type: "Video" },
                    { title: "Especificaciones Técnicas", url: "#", type: "Web" },
                    { title: "Foro de Técnicos", url: "#", type: "Foro" },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <p className="text-sm font-medium">{resource.title}</p>
                        <p className="text-xs text-muted-foreground">{resource.type}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* RF06 - Gestión de usuarios */}
        {currentView === APP_VIEWS.USERS && currentUser?.role === "admin" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
              {/* <Button className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Nuevo Usuario
              </Button> */}
            </div>

            {/* Estadísticas de usuarios */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Total Usuarios</p>
                      <p className="text-2xl font-bold">{users.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Administradores</p>
                      <p className="text-2xl font-bold">{users.filter((u) => u.role === "admin").length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Técnicos</p>
                      <p className="text-2xl font-bold">{users.filter((u) => u.role === "tecnico").length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Clientes</p>
                      <p className="text-2xl font-bold">{users.filter((u) => u.role === "cliente").length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lista de usuarios */}
            <Card>
              <CardHeader>
                <CardTitle>Lista de Usuarios</CardTitle>
                <CardDescription>Gestiona usuarios y sus permisos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Estado</th>
                        <th className="text-left p-2">Nombre</th>
                        <th className="text-left p-2">Email</th>
                        <th className="text-left p-2">Rol</th>
                        <th className="text-left p-2">Fecha Registro</th>
                        <th className="text-left p-2">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-muted/50">
                          <td className="p-2">
                            <Badge variant={user.active ? "default" : "secondary"}>
                              {user.active ? "Activo" : "Inactivo"}
                            </Badge>
                          </td>
                          <td className="p-2 font-medium">{user.name}</td>
                          <td className="p-2">{user.email}</td>
                          <td className="p-2">
                            <Badge variant="outline">{user.role}</Badge>
                          </td>
                          <td className="p-2">{user.createdAt}</td>
                          <td className="p-2">
                            <div className="flex gap-1">
                              {/* <Button size="sm" variant="outline">
                                <Edit className="h-4 w-4" />
                              </Button> */}
                            {currentUser.id !== user.id &&  <Button
                                size="sm"
                                variant={user.active ? "secondary" : "default"}
                                onClick={async () => {
                                  try {
                                    const res = await axios.put("/api/users/updateUser", {
                                      id: user.id,
                                      active: !user.active,
                                    });
                                    setUsers(users.map((u) => (u.id === user.id ? res.data.user : u)));
                                  } catch (error) {
                                    setErrors({ user: "Error al actualizar usuario" });
                                  }
                                }}
                              >
                                {user.active ? "Desactivar" : "Activar"}
                              </Button>}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* RF07 - Historial y reportes */}
        {currentView === APP_VIEWS.REPORTS && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Historial y Reportes</h2>
              <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              if (!reportData) return
              // Crear un contenido HTML simple para exportar
              const win = window.open("", "_blank")
              if (!win) return
              win.document.write(`
                <html>
            <head>
              <title>Reporte Técnico</title>
              <style>
                body { font-family: Arial, sans-serif; padding: 24px; }
                h1, h2, h3 { margin-bottom: 8px; }
                .badge { display: inline-block; background: #e5e7eb; border-radius: 4px; padding: 2px 8px; margin-right: 4px; font-size: 12px; }
                .section { margin-bottom: 24px; }
                ul { margin: 0; padding-left: 18px; }
              </style>
            </head>
            <body>
              <h1>Reporte Técnico</h1>
              <h2>${reportData.vehicle?.marca} ${reportData.vehicle?.modelo} - ${reportData.vehicle?.patente || ""}</h2>
              <div class="section">
                <strong>Diagnósticos:</strong> ${reportData.diagnostics.length}<br/>
                <strong>Costo Total:</strong> $${reportData.totalCost.toLocaleString()}<br/>
                <strong>Tiempo Total:</strong> ${reportData.totalTime}h
              </div>
              <div class="section">
                <strong>Códigos DTC Frecuentes:</strong><br/>
                ${Object.entries(reportData.dtcFrequency).map(([code, count]) =>
                  `<span class="badge">${code} (${count}x)</span>`
                ).join(" ")}
              </div>
              <div class="section">
                <strong>Recomendaciones:</strong>
                <ul>
                  ${reportData.recommendations.map(rec =>
              `<li>
                <span class="badge">${rec.code}</span>
                <span class="badge">${rec.severity}</span>
                <ul>
                  ${rec.solutions.map(sol => `<li>${typeof sol === "string" ? sol : sol.text}</li>`).join("")}
                </ul>
              </li>`
                  ).join("")}
                </ul>
              </div>
            </body>
                </html>
              `)
              win.document.close()
              win.print()
            }}
            disabled={!reportData}
          >
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              if (!reportData) return
              // Imprimir la sección del reporte
              const printContent = document.getElementById("report-print-section")
              if (printContent) {
                const printWindow = window.open("", "_blank")
                if (!printWindow) return
                printWindow.document.write(`
            <html>
              <head>
                <title>Imprimir Reporte</title>
                <style>
                  body { font-family: Arial, sans-serif; padding: 24px; }
                  h1, h2, h3 { margin-bottom: 8px; }
                  .badge { display: inline-block; background: #e5e7eb; border-radius: 4px; padding: 2px 8px; margin-right: 4px; font-size: 12px; }
                  .section { margin-bottom: 24px; }
                  ul { margin: 0; padding-left: 18px; }
                </style>
              </head>
              <body>
                ${printContent.innerHTML}
              </body>
            </html>
                `)
                printWindow.document.close()
                printWindow.print()
              }
            }}
            disabled={!reportData}
          >
            <Printer className="h-4 w-4 mr-2" />
            Imprimir
          </Button>
              </div>
            </div>

            {/* Filtros de reporte */}
            <Card>
              <CardHeader>
          <CardTitle>Filtros de Reporte</CardTitle>
              </CardHeader>
              <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label>Vehículo</Label>
              <Select>
                <SelectTrigger>
            <SelectValue placeholder="Todos los vehículos" />
                </SelectTrigger>
                <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {vehicleData.map((vehicle) => (
              <SelectItem key={vehicle.id} value={vehicle.id.toString()}>
                {vehicle.marca} {vehicle.modelo} - {vehicle.patente}
              </SelectItem>
            ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Fecha Desde</Label>
              <Input type="date" />
            </div>

            <div>
              <Label>Fecha Hasta</Label>
              <Input type="date" />
            </div>

            <div>
              <Label>Estado</Label>
              <Select>
                <SelectTrigger>
            <SelectValue placeholder="Todos los estados" />
                </SelectTrigger>
                <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="resuelto">Resuelto</SelectItem>
            <SelectItem value="pendiente">Pendiente</SelectItem>
            <SelectItem value="grave">Grave</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button>Aplicar Filtros</Button>
            <Button variant="outline">Limpiar</Button>
            <Button variant="outline" onClick={() => generateReport(vehicleData[0]?.id)} disabled={loading}>
              {loading ? "Generando..." : "Generar Reporte"}
            </Button>
          </div>
              </CardContent>
            </Card>

            {/* Tabla de diagnósticos */}
            <Card>
              <CardHeader>
          <CardTitle>Historial de Diagnósticos</CardTitle>
          <CardDescription>
            {diagnostics.length} diagnóstico{diagnostics.length !== 1 ? "s" : ""} registrado
            {diagnostics.length !== 1 ? "s" : ""}
          </CardDescription>
              </CardHeader>
              <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
            <th className="text-left p-2">Fecha</th>
            <th className="text-left p-2">Vehículo</th>
            <th className="text-left p-2">Códigos DTC</th>
            <th className="text-left p-2">Descripción</th>
            <th className="text-left p-2">Técnico</th>
            <th className="text-left p-2">Estado</th>
            <th className="text-left p-2">Costo</th>
            <th className="text-left p-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {diagnostics
            .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
            .map((diag) => {
              const vehicle = vehicleData.find((v) => v.id === diag.vehicleId)
              return (
                <tr key={diag.id} className="border-b hover:bg-muted/50">
                  <td className="p-2">{diag.fecha}</td>
                  <td className="p-2">
              {vehicle
                ? `${vehicle.marca} ${vehicle.modelo} - ${vehicle.patente}`
                : "Vehículo no encontrado"}
                  </td>
                  <td className="p-2">
              <div className="flex gap-1 flex-wrap">
                {diag.dtc?.map((code) => (
                  <Badge key={code} variant="outline" className="font-mono text-xs">
                    {code}
                  </Badge>
                ))}
              </div>
                  </td>
                  <td className="p-2 max-w-xs truncate">{diag.desc}</td>
                  <td className="p-2">{diag.tecnico}</td>
                  <td className="p-2">
              <Badge
                variant={
                  diag.estado === "resuelto"
                    ? "default"
                    : diag.estado === "pendiente"
                ? "secondary"
                : diag.estado === "grave"
                  ? "destructive"
                  : "outline"
                }
              >
                {diag.estado}
              </Badge>
                  </td>
                  <td className="p-2">${diag.cost?.toLocaleString() || "0"}</td>
                  <td className="p-2">
              <div className="flex gap-1">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
                  </td>
                </tr>
              )
            })}
              </tbody>
            </table>
          </div>
              </CardContent>
            </Card>

            {/* Reporte generado */}
            {reportData && (
              <Card>
          <CardHeader>
            <CardTitle>Reporte Generado</CardTitle>
            <CardDescription>
              Reporte técnico para {reportData.vehicle?.marca} {reportData.vehicle?.modelo}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4" id="report-print-section">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">{reportData.diagnostics.length}</p>
                <p className="text-sm text-muted-foreground">Diagnósticos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">${reportData.totalCost.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Costo Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">{reportData.totalTime}h</p>
                <p className="text-sm text-muted-foreground">Tiempo Total</p>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold">Códigos DTC Frecuentes</Label>
              <div className="mt-2 flex gap-2 flex-wrap">
                {Object.entries(reportData.dtcFrequency).map(([code, count]) => (
            <Badge key={code} variant="outline">
              {code} ({count}x)
            </Badge>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold">Recomendaciones</Label>
              <div className="mt-2 space-y-2">
                {reportData.recommendations.map((rec, index) => (
            <div key={index} className="p-3 border rounded">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm">{rec.code}</span>
                <Badge
                  variant={
              rec.severity === "grave"
                ? "destructive"
                : rec.severity === "moderada"
                  ? "secondary"
                  : "outline"
                  }
                >
                  {rec.severity}
                </Badge>
              </div>
              <ul className="text-sm space-y-1">
                {rec.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 mt-1 text-green-500" />
              {typeof solution === "string" ? solution : solution.text}
                  </li>
                ))}
              </ul>
            </div>
                ))}
              </div>
            </div>
          </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* RF08 - Sistema de soporte / ayuda */}
        {currentView === APP_VIEWS.HELP && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Sistema de Ayuda</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Búsqueda de ayuda */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Búsqueda de Ayuda
                  </CardTitle>
                  <CardDescription>Busca por código DTC, síntoma o palabra clave</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Buscar ayuda..."
                      value={helpSearchTerm}
                      onChange={(e) => setHelpSearchTerm(e.target.value)}
                    />
                    <Button>
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Resultados de búsqueda */}
                  <div className="space-y-3">
                    {searchHelp(helpSearchTerm).map((item) => (
                      <Card key={item.id} className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                            <Badge variant="outline" className="mt-2">
                              {item.category}
                            </Badge>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Accesos rápidos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Accesos Rápidos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Preguntas Frecuentes", icon: HelpCircle, desc: "Respuestas a consultas comunes" },
                    { title: "Manual de Usuario", icon: FileText, desc: "Guía completa del sistema" },
                    { title: "Códigos DTC", icon: AlertTriangle, desc: "Base de datos de códigos" },
                    { title: "Contactar Soporte", icon: MessageSquare, desc: "Habla con un técnico" },
                    { title: "Tutoriales", icon: ExternalLink, desc: "Videos explicativos" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border rounded hover:bg-muted/50 cursor-pointer"
                    >
                      <item.icon className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Preguntas frecuentes */}
            <Card>
              <CardHeader>
                <CardTitle>Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      q: "¿Cómo interpretar el código P0301?",
                      a: "El código P0301 indica una falla de encendido en el cilindro 1. Las causas más comunes son bujía defectuosa, bobina de encendido dañada o inyector obstruido.",
                    },
                    {
                      q: "¿Qué formatos de archivo soporta el escáner?",
                      a: "El sistema soporta archivos JSON, CSV y TXT generados por escáneres OBD2. Los archivos deben contener códigos DTC válidos.",
                    },
                    {
                      q: "¿Cómo generar un reporte técnico?",
                      a: "Ve a la sección de Reportes, selecciona los filtros deseados y haz clic en 'Generar Reporte'. Puedes exportar en PDF o imprimir directamente.",
                    },
                    {
                      q: "¿Quién puede acceder al sistema?",
                      a: "El sistema tiene tres roles: Administradores (acceso completo), Técnicos (diagnósticos y reportes) y Clientes (solo sus vehículos).",
                    },
                  ].map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                      <h4 className="font-medium mb-2">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card>
              <CardHeader>
                <CardTitle>Contactar Soporte Técnico</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">soporte@autodiag.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-sm text-muted-foreground">+56 2 1234 5678</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

      </div>
    </div>
  )
}
