"use client"

import { useLocation } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Bell, Search, Settings, User, HelpCircle } from "lucide-react"

const sectionTitles: Record<string, { title: string; description: string }> = {
  "/dashboard": { title: "Dashboard", description: "AI compliance monitoring overview" },
  "/alerts": { title: "Alerts", description: "Real-time compliance alerts and notifications" },
  "/document-logs": { title: "Document Logs", description: "Document upload and processing history" },
  "/ai-tool-usage": { title: "AI Tool Usage", description: "Analytics and monitoring of AI tool usage" },
  "/privacy-automation": { title: "Privacy Automation", description: "Automated privacy compliance workflows" },
  "/compliance-reports": { title: "Compliance Reports", description: "Generate and manage compliance reports" },
  "/policy-settings": { title: "Policy Settings", description: "Configure compliance policies and rules" },
  "/integrations": { title: "Integrations", description: "Manage platform integrations and connections" },
  "/admin-settings": { title: "Admin Settings", description: "System administration and user management" },
}

export function TopNavigation() {
  const location = useLocation()
  const currentSection = sectionTitles[location.pathname] || sectionTitles["/dashboard"]

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">{currentSection.title}</h1>
            <p className="text-sm text-gray-500">{currentSection.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search..." className="w-64 pl-10 bg-gray-50 border-gray-200 focus:bg-white" />
          </div>

          <Button variant="ghost" size="sm">
            <HelpCircle className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center bg-red-500">
              5
            </Badge>
          </Button>

          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Sarah Chen</p>
              <p className="text-xs text-gray-500">Compliance Officer</p>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-blue-100 text-blue-700">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  )
}
