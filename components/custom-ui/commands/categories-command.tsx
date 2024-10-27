"use client"

import React, { useState, useMemo } from "react"
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
import {
  CalendarIcon,
  Mail,
  Smile,
  Cog,
  CircleUser,
  RocketIcon,
  StarIcon,
  TrashIcon,
  ChevronDownIcon, 
  ChevronRightIcon
} from "lucide-react"

export interface CommandItem {
  label: string
  shortcut?: string
  icon?: React.ReactNode
  onSelect: () => void
  disabled?: boolean
}

export interface CommandCategory {
  title: string
  items: CommandItem[]
}

interface CommandMenuWithCategoriesProps {
  categories: CommandCategory[]
}

export function CommandMenuWithCategories({
  categories,
}: CommandMenuWithCategoriesProps) {
  const [open, setOpen] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<{
    [key: string]: boolean
  }>({})
  const [searchQuery, setSearchQuery] = useState("")

  const matchedCategories = useMemo(() => {
    if (!searchQuery.trim()) return {}

    const matches: { [key: string]: boolean } = {}
    categories.forEach((category) => {
      const hasMatch = category.items.some((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
      if (hasMatch) {
        matches[category.title] = true
      }
    })
    return matches
  }, [searchQuery, categories])

  const combinedExpandedCategories = useMemo(() => {
    return {
      ...expandedCategories,
      ...matchedCategories,
    }
  }, [expandedCategories, matchedCategories])

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const handleInputChange = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Command Menu</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput
            placeholder="Type a command or search..."
            value={searchQuery}
            onValueChange={handleInputChange}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {categories.map((category) => {
              // Filter items based on search query
              const filteredItems = category.items.filter((item) =>
                item.label.toLowerCase().includes(searchQuery.toLowerCase())
              )

              // If searching and no items match in this category, skip rendering
              if (searchQuery.trim() && filteredItems.length === 0) {
                return null
              }

              return (
                <div key={category.title}>
                  <CommandGroup heading={category.title}>
                    <CommandItem
                      onSelect={() => toggleCategory(category.title)}
                      className="flex items-center justify-between cursor-pointer"
                      aria-expanded={combinedExpandedCategories[category.title] || false}
                      aria-controls={`command-group-${category.title}`}
                    >
                      <span>{category.title}</span>
                      {combinedExpandedCategories[category.title] ? (
                        <ChevronDownIcon className="h-4 w-4" />
                      ) : (
                        <ChevronRightIcon className="h-4 w-4" />
                      )}
                    </CommandItem>
                    {combinedExpandedCategories[category.title] &&
                      filteredItems.map((item) => (
                        <CommandItem
                          key={item.label}
                          onSelect={item.onSelect}
                          disabled={item.disabled}
                          className="pl-6"
                        >
                          {item.icon && (
                            <span className="mr-2">{item.icon}</span>
                          )}
                          <span>{item.label}</span>
                          {item.shortcut && (
                            <CommandShortcut>{item.shortcut}</CommandShortcut>
                          )}
                        </CommandItem>
                      ))}
                  </CommandGroup>
                  <CommandSeparator />
                </div>
              )
            })}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}

export default function CommandMenuWithCategoriesDemo() {
  const categories = [
    {
      title: "Suggestions",
      items: [
        {
          label: "Calendar",
          shortcut: "⌘P",
          icon: <CalendarIcon className="h-4 w-4" />,
          onSelect: () => alert("Calendar selected!"),
        },
        {
          label: "Search Emoji",
          shortcut: "⌘E",
          icon: <Smile className="h-4 w-4" />,
          onSelect: () => alert("Search Emoji selected!"),
        },
        {
          label: "Launch",
          shortcut: "⌘L",
          icon: <RocketIcon className="h-4 w-4 text-red-500" />,
          onSelect: () => alert("Launch selected!"),
          disabled: true,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          label: "Profile",
          shortcut: "⌘P",
          icon: <CircleUser className="h-4 w-4" />,
          onSelect: () => alert("Profile selected!"),
        },
        {
          label: "Mail",
          shortcut: "⌘B",
          icon: <Mail className="h-4 w-4" />,
          onSelect: () => alert("Mail selected!"),
        },
        {
          label: "Settings",
          shortcut: "⌘S",
          icon: <Cog className="h-4 w-4" />,
          onSelect: () => alert("Settings selected!"),
        },
      ],
    },
    {
      title: "Actions",
      items: [
        {
          label: "Favorites",
          shortcut: "⌘F",
          icon: <StarIcon className="h-4 w-4 text-yellow-500" />,
          onSelect: () => alert("Favorites selected!"),
        },
        {
          label: "Delete",
          shortcut: "⌘D",
          icon: <TrashIcon className="h-4 w-4 text-red-500" />,
          onSelect: () => alert("Delete selected!"),
        },
      ],
    },
  ]

  return (
    <div className="flex items-center justify-center">
      <CommandMenuWithCategories categories={categories} />
    </div>
  )
}