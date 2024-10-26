"use client"

import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { GlobeIcon, LightningBoltIcon, GroupIcon, LockClosedIcon } from "@radix-ui/react-icons"

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesAccordionProps {
  features: Feature[]
}

export function FeaturesAccordion({ features }: FeaturesAccordionProps) {
  return (
    <div className="w-full max-w-2xl mx-auto py-4 px-1">
      <h2 className="text-xl font-medium mb-4">Product Features</h2>
      <Accordion type="single" collapsible>
        {features.map((feature) => (
          <AccordionItem key={feature.id} value={feature.id}>
            <AccordionTrigger className="flex items-center space-x-3 font-normal">
              <div className="text-blue-500">{feature.icon}</div>
              <span>{feature.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p>{feature.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

const features = [
  {
    id: "feature1",
    icon: <GlobeIcon className="h-6 w-6" />,
    title: "Global Reach",
    description: "Expand your business worldwide with our global network.",
  },
  {
    id: "feature2",
    icon: <LockClosedIcon className="h-6 w-6" />,
    title: "Security",
    description: "Top-notch security features to protect your data and privacy.",
  },
  {
    id: "feature3",
    icon: <LightningBoltIcon className="h-6 w-6" />,
    title: "Performance",
    description: "Optimized for speed and efficiency to enhance user experience.",
  },
  {
    id: "feature4",
    icon: <GroupIcon className="h-6 w-6" />,
    title: "User-Friendly",
    description: "Intuitive design ensures ease of use for all users.",
  },
]

export default function FeaturesAccordionDemo() {
  return <FeaturesAccordion features={features} />
}