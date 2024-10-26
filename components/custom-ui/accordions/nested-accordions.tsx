// NestedAccordion.tsx

"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

const NestedAccordion = AccordionPrimitive.Root

const NestedAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
NestedAccordionItem.displayName = "NestedAccordionItem"

const NestedAccordionTrigger = React.forwardRef<
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
NestedAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const NestedAccordionContent = React.forwardRef<
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
NestedAccordionContent.displayName = AccordionPrimitive.Content.displayName

export {
  NestedAccordion,
  NestedAccordionItem,
  NestedAccordionTrigger,
  NestedAccordionContent,
}

export function NestedAccordionDemo() {
  return (
    <NestedAccordion type="single" collapsible className="w-full">
      <NestedAccordionItem value="parent-1">
        <NestedAccordionTrigger>Main Question 1</NestedAccordionTrigger>
        <NestedAccordionContent>
          <p>Answer to main question 1.</p>
          <NestedAccordion type="single" collapsible className="mt-2">
            <NestedAccordionItem value="child-1">
              <NestedAccordionTrigger>Sub Question 1.1</NestedAccordionTrigger>
              <NestedAccordionContent>Answer to sub question 1.1.</NestedAccordionContent>
            </NestedAccordionItem>
            <NestedAccordionItem value="child-2">
              <NestedAccordionTrigger>Sub Question 1.2</NestedAccordionTrigger>
              <NestedAccordionContent>Answer to sub question 1.2.</NestedAccordionContent>
            </NestedAccordionItem>
          </NestedAccordion>
        </NestedAccordionContent>
      </NestedAccordionItem>
      <NestedAccordionItem value="parent-2">
        <NestedAccordionTrigger>Main Question 2</NestedAccordionTrigger>
        <NestedAccordionContent>
          Answer to main question 2.
        </NestedAccordionContent>
      </NestedAccordionItem>
    </NestedAccordion>
  )
}