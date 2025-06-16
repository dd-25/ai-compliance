"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
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

export function AppRouter() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <TopNavigation />
          <main className="flex-1 p-6 bg-gray-50/50">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardContent />} />
              <Route path="/alerts" element={<AlertsContent />} />
              <Route path="/document-logs" element={<DocumentLogsContent />} />
              <Route path="/ai-tool-usage" element={<AIToolUsageContent />} />
              <Route path="/privacy-automation" element={<PrivacyAutomationContent />} />
              <Route path="/compliance-reports" element={<ComplianceReportsContent />} />
              <Route path="/policy-settings" element={<PolicySettingsContent />} />
              <Route path="/integrations" element={<IntegrationsContent />} />
              <Route path="/admin-settings" element={<AdminSettingsContent />} />
            </Routes>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </Router>
  )
}
