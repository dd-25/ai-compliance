"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Globe, Cookie, FileText, MessageSquare } from "lucide-react"

const consentData = [
  { name: "Accepted", value: 1247, color: "#10b981" },
  { name: "Rejected", value: 423, color: "#ef4444" },
  { name: "Pending", value: 156, color: "#f59e0b" },
]

const countryData = [
  { country: "United States", accepted: 456, rejected: 123, pending: 45 },
  { country: "Germany", accepted: 234, rejected: 89, pending: 34 },
  { country: "United Kingdom", accepted: 189, rejected: 67, pending: 23 },
  { country: "France", accepted: 167, rejected: 78, pending: 29 },
  { country: "Canada", accepted: 134, rejected: 45, pending: 18 },
]

export function ConsentManagementPanel() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cookie className="h-5 w-5" />
          Consent Management
        </CardTitle>
        <CardDescription>Monitor and manage user consent across regions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Consent Chart */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-700">Consent Requests Overview</h4>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <ChartContainer
                config={{
                  accepted: { label: "Accepted", color: "#10b981" },
                  rejected: { label: "Rejected", color: "#ef4444" },
                  pending: { label: "Pending", color: "#f59e0b" },
                }}
                className="h-48"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={consentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {consentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div className="space-y-2">
              {consentData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-600">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Country Summary */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Country-wise Summary
          </h4>
          <div className="space-y-2">
            {countryData.map((country) => (
              <div
                key={country.country}
                className="flex items-center justify-between p-2 border border-gray-200 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-900">{country.country}</span>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-green-600">{country.accepted} accepted</span>
                  <span className="text-red-600">{country.rejected} rejected</span>
                  <span className="text-yellow-600">{country.pending} pending</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle Controls */}
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700">Consent Controls</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cookie className="h-4 w-4 text-gray-400" />
                <Label htmlFor="cookie-banner" className="text-sm">
                  Cookie Banner
                </Label>
              </div>
              <Switch id="cookie-banner" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-gray-400" />
                <Label htmlFor="form-popups" className="text-sm">
                  Form Popups
                </Label>
              </div>
              <Switch id="form-popups" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-400" />
                <Label htmlFor="privacy-notices" className="text-sm">
                  Privacy Notices
                </Label>
              </div>
              <Switch id="privacy-notices" defaultChecked />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
