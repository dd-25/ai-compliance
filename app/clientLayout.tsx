"use client"

import type React from "react"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { DashboardContent } from "@/components/dashboard-content"
import { AlertsContent } from "@/components/alerts-content"
import { ReportsContent } from "@/components/reports-content"
import { SettingsContent } from "@/components/settings-content"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, User } from "lucide-react"
import "./globals.css"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />
      case "alerts":
        return <AlertsContent />
      case "reports":
        return <ReportsContent />
      case "settings":
        return <SettingsContent />
      default:
        return <DashboardContent />
    }
  }

  const getSectionTitle = () => {
    switch (activeSection) {
      case "dashboard":
        return "Dashboard"
      case "alerts":
        return "Policy Alerts"
      case "reports":
        return "Compliance Reports"
      case "settings":
        return "Settings"
      default:
        return "Dashboard"
    }
  }

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <SidebarInset>
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="flex h-16 items-center justify-between px-6">
                <div>
                  <h1 className="text-2xl font-bold">{getSectionTitle()}</h1>
                  <p className="text-sm text-muted-foreground">AI compliance monitoring and management</p>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="relative">
                    <Bell className="h-4 w-4" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                      3
                    </Badge>
                  </Button>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-medium">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">Compliance Admin</p>
                    </div>
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6">{renderContent()}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
