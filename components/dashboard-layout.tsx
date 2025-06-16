"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { DashboardContent } from "@/components/dashboard-content"
import { AlertsContent } from "@/components/alerts-content"
import { DocumentLogsContent } from "@/components/document-logs-content"
import { AIToolUsageContent } from "@/components/ai-tool-usage-content"
import { PrivacyAutomationContent } from "@/components/privacy-automation-content"
import { ComplianceReportsContent } from "@/components/compliance-reports-content"
import { PolicySettingsContent } from "@/components/policy-settings-content"
import { IntegrationsContent } from "@/components/integrations-content"
import { AdminSettingsContent } from "@/components/admin-settings-content"

export function DashboardLayout() {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardContent />
      case "alerts":
        return <AlertsContent />
      case "document-logs":
        return <DocumentLogsContent />
      case "ai-tool-usage":
        return <AIToolUsageContent />
      case "privacy-automation":
        return <PrivacyAutomationContent />
      case "compliance-reports":
        return <ComplianceReportsContent />
      case "policy-settings":
        return <PolicySettingsContent />
      case "integrations":
        return <IntegrationsContent />
      case "admin-settings":
        return <AdminSettingsContent />
      default:
        return <DashboardContent />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <SidebarInset>
        <TopNavigation activeSection={activeSection} />
        <main className="flex-1 p-6 bg-gray-50/50">{renderContent()}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
