import { ChevronRight, Split, Sun } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

const items = [
  {
    title: "Variants",
    url: "/variants",
    icon: Split,
    subItems: [
      { title: "Accordions", url: "/variants/accordions" },
      { title: "Alerts", url: "/variants/alerts" },
      { title: "Avatars", url: "/variants/avatars" },
      { title: "Badges", url: "/variants/badges" },
      { title: "Buttons", url: "/variants/buttons" },
      { title: "Commands", url: "/variants/commands" },
      { title: "Inputs", url: "/variants/inputs" },
      { title: "Menubars", url: "/variants/menubars" },
      { title: "Progress Bars", url: "/variants/progress-bars" },
      { title: "Sliders", url: "/variants/sliders" },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            <span>abrakadabra-ui</span>
            <button><Sun size={14}/></button>
          </SidebarGroupLabel>
          <SidebarGroupContent>
          <SidebarMenu className="text-xs">
            {items.map((item) => (
                <Collapsible 
                  defaultOpen 
                  className="group/collapsible" 
                  key={item.title}
                  title={item.title}
                >
                  <SidebarMenuItem key={item.title}>
                    <CollapsibleTrigger asChild className="">
                      <SidebarMenuButton asChild>
                        <div className="cursor-pointer select-none">
                          <item.icon size={24}/>
                          <span className="text-sm">{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span className="text-sm">{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
