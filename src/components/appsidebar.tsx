import { useSidebar } from "./ui/sidebar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader
} from "./ui/sidebar"

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

import {
  LayoutDashboard,
  Wallet,
  PlusCircle,
  User,
  Settings,
  LogOut,
  Landmark
} from "lucide-react"

function AppSidebar() {
  const { state } = useSidebar() // collapsed / expanded

  const navigation = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/" },
    { name: "Expenses", icon: Wallet, href: "/expenses" },
    { name: "Add Expense", icon: PlusCircle, href: "/add-expense" },
    { name: "Profile", icon: User, href: "/profile" },
  ]

  const settings = [
    { name: "Settings", icon: Settings, href: "/settings" },
    { name: "Logout", icon: LogOut, href: "/logout" },
  ]

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className={`px-4 py-3 ${(state==="collapsed")?"justify-center":""} flex flex-row items-center gap-2 font-bold text-lg`}>
        <Landmark className="h-5 w-5 shrink-0" />
        {state !== "collapsed" && "Expense Tracker"}
      </SidebarHeader>

      <SidebarContent>

        <SidebarGroup>
          {state !== "collapsed" && <SidebarGroupLabel>Menu</SidebarGroupLabel>}

          <SidebarGroupContent>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-row ${(state==="collapsed")?"justify-center":""} items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition`}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {state !== "collapsed" && item.name}
              </a>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          {state !== "collapsed" && <SidebarGroupLabel>Settings</SidebarGroupLabel>}

          <SidebarGroupContent>
            {settings.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex flex-row ${(state==="collapsed")?"justify-center":""} items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition`}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {state !== "collapsed" && item.name}
              </a>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter className="flex flex-row items-center gap-3 px-2 py-3">
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        {state !== "collapsed" && (
          <div className="grid text-sm leading-tight">
            <span className="font-medium">Lokesh</span>
            <span className="text-xs text-muted-foreground">lokesh@example.com</span>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
