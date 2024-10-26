"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const MultiSelectAccordion = AccordionPrimitive.Root

const MultiSelectAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
MultiSelectAccordionItem.displayName = "MultiSelectAccordionItem"

const MultiSelectAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
MultiSelectAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const MultiSelectAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
MultiSelectAccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
  MultiSelectAccordion,
  MultiSelectAccordionItem,
  MultiSelectAccordionTrigger,
  MultiSelectAccordionContent,
}

export function MultiSelectAccordionDemo() {
  return (
    <MultiSelectAccordion type="multiple" className="w-full">
      <MultiSelectAccordionItem value="item-1">
        <MultiSelectAccordionTrigger>What is this component?</MultiSelectAccordionTrigger>
        <MultiSelectAccordionContent>
          {"This is a multi-selection component built off of the shadcn <Accordion /> component."}
        </MultiSelectAccordionContent>
      </MultiSelectAccordionItem>
      <MultiSelectAccordionItem value="item-2">
        <MultiSelectAccordionTrigger>When would I use it?</MultiSelectAccordionTrigger>
        <MultiSelectAccordionContent>
          When you want to expand multiple of the accordion items at the same time.
        </MultiSelectAccordionContent>
      </MultiSelectAccordionItem>
      <MultiSelectAccordionItem value="item-3">
        <MultiSelectAccordionTrigger>Can I customize this further?</MultiSelectAccordionTrigger>
        <MultiSelectAccordionContent>
          Absolutely!
        </MultiSelectAccordionContent>
      </MultiSelectAccordionItem>
    </MultiSelectAccordion>
  )
}