"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

export type PasswordStrength = "none" | "weak" | "medium" | "strong" | "very_strong"

type PasswordStrengthInputProps = React.ComponentProps<typeof Input>;

export const PasswordStrengthInput: React.FC<PasswordStrengthInputProps> = ({
  ...props
}) => {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [strength, setStrength] = useState<PasswordStrength>("weak")

  const toggleShowPassword = () => setShowPassword((prev) => !prev)


  const evaluateStrength = (pwd: string) => {
    let strengthScore: PasswordStrength = "none";

    if (pwd.length === 0) {
      strengthScore = "none";
    } else if (pwd.length < 6) {
      strengthScore = "weak";
    } else {
      // Initial score based on length
      let score = 0;
      if (pwd.length >= 8) score++;
      if (pwd.length >= 12) score++;

      // Additional checks for complexity
      if (/[A-Z]/.test(pwd)) score++; // Uppercase
      if (/[a-z]/.test(pwd)) score++; // Lowercase
      if (/\d/.test(pwd)) score++;    // Digit
      if (/[@$!%*?&]/.test(pwd)) score++; // Special character

      // Determine strength based on score
      if (score <= 2) {
        strengthScore = "weak";
      } else if (score <= 4) {
        strengthScore = "medium";
      } else if (score === 5) {
        strengthScore = "strong";
      } else {
        strengthScore = "very_strong";
      }
    }

    setStrength(strengthScore);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    evaluateStrength(value)
  }

  const strengthColor = {
    none: "bg-gray-300",
    weak: "bg-red-500",
    medium: "bg-orange-400",
    strong: "bg-green-500",
    very_strong: "bg-teal-700",
  }

  const strengthText = {
    none: "None",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    very_strong: "Very Strong",
  }

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          {...props}
          className="pr-10"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleShowPassword}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </Button>
      </div>
        <div className="mt-2 text-xs">
          <div className="flex items-center space-x-2">
            <span
              className={cn(
                "h-2 w-2 rounded-full",
                strengthColor[strength]
              )}
            ></span>
            <span className="">{`Password strength: ${strengthText[strength]}`}</span>
          </div>
          {strength === "none" && (
            <p className="mt-1 text-gray-500">Please begin typing your password.</p>
          )}
          {strength === "weak" && (
            <p className="mt-1 text-red-500">
              Consider adding uppercase letters and numbers.
            </p>
          )}
          {strength === "medium" && (
            <p className="mt-1 text-orange-400">
              Adding more complexity can make it stronger.
            </p>
          )}
          {strength === "strong" && (
            <p className="mt-1 text-green-500">
              Your password is strong.
            </p>
          )}
          {strength === "very_strong" && (
            <p className="mt-1 text-teal-700">
              Your password is very strong. Nice job!
            </p>
          )}
        </div>
    </div>
  )
}

PasswordStrengthInput.displayName = "PasswordStrengthInput"

export default function PasswordStrengthInputDemo() {
  return (
    <div className="flex justify-center items-center h-screen">
      <PasswordStrengthInput />
    </div>
  )
}