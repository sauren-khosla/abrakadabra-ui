// CommandMenuWithRecent.tsx

"use client"

import React, { useState, useEffect } from "react"
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
  // Start of Selection
import { CheckIcon, TrashIcon } from "lucide-react"

type CommandMenuWithRecentProps = Record<string, never>

export function CommandMenuWithRecent({}: CommandMenuWithRecentProps) {
  const [open, setOpen] = useState(false)
  const [recentCommands, setRecentCommands] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("recentCommands")
    if (stored) {
      setRecentCommands(JSON.parse(stored))
    }
  }, [])

  const addRecentCommand = (command: string) => {
    const updated = [command, ...recentCommands.filter((c) => c !== command)].slice(0, 5)
    setRecentCommands(updated)
    localStorage.setItem("recentCommands", JSON.stringify(updated))
  }

  const clearRecentCommands = () => {
    setRecentCommands([])
    localStorage.removeItem("recentCommands")
  }

  const handleSelect = (command: string) => {
    alert(`Command "${command}" selected!`)
    addRecentCommand(command)
    setOpen(false)
  }

  return (
    <div className="">
      <Button onClick={() => setOpen(true)}>Open Command Menu</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            {recentCommands.length > 0 && (
              <>
                <CommandGroup heading="Recent">
                  {recentCommands.map((command, index) => (
                    <CommandItem key={index} onSelect={() => handleSelect(command)}>
                      {command}
                      <CommandShortcut>
                        <CheckIcon className="h-4 w-4" />
                      </CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            )}
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => handleSelect("Profile")}>
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("Settings")}>
                Settings
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("Logout")}>
                Logout
                <CommandShortcut>⌘L</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            {recentCommands.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={clearRecentCommands} className="flex items-center">
                    <TrashIcon className="mr-2 h-4 w-4 text-red-500" />
                    Clear Recent
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default function CommandMenuWithRecentDemo() {
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <CommandMenuWithRecent />
      <span className="text-center text-xs text-gray-600 w-2/3">Select an item in the command menu then re-open the command menu to see or clear your recent selections.</span>
    </div>
  )
}