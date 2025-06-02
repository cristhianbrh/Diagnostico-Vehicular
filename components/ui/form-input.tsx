import React from "react"
import { Label } from "./label"
import { Input } from "./input"

type Props = {
  id: string
  label: string
  type?: string
  value: string
  error?: string
  onChange: (value: string) => void
}

export default function FormInput({ id, label, type = "text", value, error, onChange }: Props) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={error ? "border-red-500" : ""}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
