"use client"

import { PrivacyAutomationSection } from "@/components/privacy-automation-section"
import { ConsentManagementPanel } from "@/components/consent-management-panel"
import { DSRAutomationPanel } from "@/components/dsr-automation-panel"

export function PrivacyAutomationContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <PrivacyAutomationSection />
        <ConsentManagementPanel />
      </div>
      <DSRAutomationPanel />
    </div>
  )
}
