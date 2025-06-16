"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AIGovernancePanel } from "@/components/ai-governance-panel"
import { PrivacyAutomationSection } from "@/components/privacy-automation-section"
import { ConsentManagementPanel } from "@/components/consent-management-panel"
import { DSRAutomationPanel } from "@/components/dsr-automation-panel"
import { SmartDocumentSearch } from "@/components/smart-document-search"
import { RealTimeMonitoring } from "@/components/real-time-monitoring"
import { BlockchainAuditLog } from "@/components/blockchain-audit-log"
import { SyntheticDataCopilot } from "@/components/synthetic-data-copilot"
import { FileText, AlertTriangle, Shield, Bot, TrendingUp, Globe } from "lucide-react"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Uploads</CardTitle>
            <FileText className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24,847</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Flagged Docs</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">347</div>
            <p className="text-xs text-red-600">+23 since yesterday</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Critical Alerts</CardTitle>
            <Shield className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12</div>
            <p className="text-xs text-red-600">Requires immediate attention</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">AI Tools in Use</CardTitle>
            <Bot className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">8</div>
            <p className="text-xs text-gray-500">Across 12 departments</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Compliance Score</CardTitle>
            <Globe className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">US</span>
                <span className="text-sm font-medium">94%</span>
              </div>
              <Progress value={94} className="h-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">EU</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AIGovernancePanel />
        <PrivacyAutomationSection />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ConsentManagementPanel />
        <DSRAutomationPanel />
      </div>

      <SmartDocumentSearch />

      <div className="grid gap-6 lg:grid-cols-2">
        <RealTimeMonitoring />
        <BlockchainAuditLog />
      </div>

      <SyntheticDataCopilot />
    </div>
  )
}
