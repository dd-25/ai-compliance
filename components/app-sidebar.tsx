"use client"

import { useLocation, useNavigate } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, AlertTriangle, FileText, Bot, Shield, BarChart3, Plug, UserCog, Zap } from "lucide-react"

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard", badge: null },
  { title: "Alerts", icon: AlertTriangle, path: "/alerts", badge: "12" },
  { title: "Document Logs", icon: FileText, path: "/document-logs", badge: null },
  { title: "AI Tool Usage", icon: Bot, path: "/ai-tool-usage", badge: null },
  { title: "Privacy Automation", icon: Zap, path: "/privacy-automation", badge: "3" },
  { title: "Compliance Reports", icon: BarChart3, path: "/compliance-reports", badge: null },
  { title: "Policy Settings", icon: Shield, path: "/policy-settings", badge: null },
  { title: "Integrations", icon: Plug, path: "/integrations", badge: null },
  { title: "Admin Settings", icon: UserCog, path: "/admin-settings", badge: null },
]

export function AppSidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">ComplianceAI</h2>
            <p className="text-xs text-gray-500">Enterprise Platform</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full justify-start rounded-lg px-3 py-2.5 text-sm font-medium transition-all cursor-pointer ${
                        isActive
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant="destructive"
                          className="ml-auto h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 bg-white p-4">
        <div className="text-xs text-gray-500">
          <p>Version 2.1.0</p>
          <p>© 2024 ComplianceAI</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
