"use client"

import React, { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface ProcessStep {
  id: string
  title: string
  description: string
}

interface ProcessAccordionProps {
  steps: ProcessStep[]
}

export function ProcessAccordion({ steps }: ProcessAccordionProps) {
  const [activeStep, setActiveStep] = useState<string | undefined>(undefined)

  return (
    <div className="w-full max-w-2xl mx-auto py-4 px-1">
      <h2 className="text-xl font-medium mb-6">How It Works</h2>
      <div className="mb-4">
        <div className="flex items-stretch justify-between space-x-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center justify-between flex-grow text-center w-1/4">
              <div
                className={cn(
                  "flex items-center justify-center h-8 w-8 rounded-full text-white",
                  activeStep === step.id ? "bg-black" : "bg-gray-400"
                )}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-xs flex items-end">{step.title}</span>
            </div>
          ))}
        </div>
        {/* Progress Bar */}
        <div className="mt-4 h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-black rounded-full transition-all"
            style={{
              width: `${
                activeStep
                  ? ((steps.findIndex((s) => s.id === activeStep) + 1) /
                      steps.length) *
                    100
                  : 0
              }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        onValueChange={(value) => {
          setActiveStep(value)
        }}
      >
        {steps.map((step) => (
          <AccordionItem key={step.id} value={step.id}>
            <AccordionTrigger className="font-normal">{step.title}</AccordionTrigger>
            <AccordionContent>
              <p>{step.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const steps = [
  {
    id: "step1",
    title: "Sign Up",
    description:
      "Create an account by providing your email and setting a password.",
  },
  {
    id: "step2",
    title: "Verify Email",
    description:
      "Check your inbox for a verification link and click to activate your account.",
  },
  {
    id: "step3",
    title: "Setup Profile",
    description:
      "Fill out your profile information to personalize your experience.",
  },
  {
    id: "step4",
    title: "Start Using",
    description: "Begin using the platform and explore its features.",
  },
]

export default function ProcessAccordionDemo() {
  return <ProcessAccordion steps={steps} />
}