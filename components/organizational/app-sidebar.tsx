import { ChevronRight, Split, Sun } from "lucide-react";

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
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

const items = [
  {
    title: "component variants",
    url: "/component-variants",
    icon: Split,
    subItems: [
      { title: "accordions", url: "/component-variants/accordions" },
      { title: "alerts", url: "/component-variants/alerts" },
      { title: "avatars", url: "/component-variants/avatars" },
      { title: "badges", url: "/component-variants/badges" },
      { title: "buttons", url: "/component-variants/buttons" },
      { title: "commands", url: "/component-variants/commands" },
      { title: "inputs", url: "/component-variants/inputs" },
      { title: "menubars", url: "/component-variants/menubars" },
      { title: "progress bars", url: "/component-variants/progress-bars" },
      { title: "sliders", url: "/component-variants/sliders" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between">
            <span>abrakadabra-ui</span>
            <button>
              <Sun size={14} />
            </button>
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
                          <item.icon size={24} />
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
  );
}