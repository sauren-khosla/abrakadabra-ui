"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ValidatedInputProps extends React.ComponentProps<typeof Input> {
  validate: (value: string) => { valid: boolean; message: string }
}

export const ValidatedInput: React.FC<ValidatedInputProps> = ({
  validate,
  className,
  ...props
}) => {
  const [value, setValue] = useState("")
  const [validation, setValidation] = useState<{ valid: boolean; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setValue(val)
    const result = validate(val)
    setValidation(result)
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <Input
          value={value}
          onChange={handleChange}
          {...props}
          className={cn(className, validation ? "pr-10" : "")}
        />
        {validation && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2">
            {validation.valid ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </span>
        )}
      </div>
      {validation && (
        <p className={cn("mt-1 text-xs", validation.valid ? "text-green-500" : "text-red-500")}>
          {validation.message}
        </p>
      )}
    </div>
  )
}

ValidatedInput.displayName = "ValidatedInput"

export default function ValidatedInputDemo() {
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value) {
      return { valid: false, message: "Email is required." }
    }
    if (!emailRegex.test(value)) {
      return { valid: false, message: "Please enter a valid email address." }
    }
    return { valid: true, message: "Email looks good!" }
  }

  return (
    <div className="flex justify-center items-center w-full">
      <ValidatedInput type="email" placeholder="Enter your email" validate={validateEmail} />
    </div>
  )
}