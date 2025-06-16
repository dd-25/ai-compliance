"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, X, Eye, Check, Clock } from "lucide-react"
import { RealTimeMonitoring } from "@/components/real-time-monitoring"

const alerts = [
  {
    id: 1,
    severity: "Critical",
    description: "Sensitive financial data detected in ChatGPT upload",
    timestamp: "2024-01-15 14:30:22",
    acknowledged: false,
  },
  {
    id: 2,
    severity: "High",
    description: "PII data found in Copilot integration",
    timestamp: "2024-01-15 12:15:10",
    acknowledged: false,
  },
  {
    id: 3,
    severity: "Medium",
    description: "Unusual upload pattern detected",
    timestamp: "2024-01-15 09:45:33",
    acknowledged: true,
  },
  {
    id: 4,
    severity: "High",
    description: "GDPR compliance violation in document processing",
    timestamp: "2024-01-14 16:20:15",
    acknowledged: true,
  },
  {
    id: 5,
    severity: "Low",
    description: "Rate limit exceeded for AI tool usage",
    timestamp: "2024-01-14 11:30:45",
    acknowledged: true,
  },
]

const getSeverityVariant = (severity: string) => {
  switch (severity) {
    case "Critical":
      return "destructive"
    case "High":
      return "destructive"
    case "Medium":
      return "default"
    case "Low":
      return "secondary"
    default:
      return "default"
  }
}

export function AlertsContent() {
  const [dismissedAlerts, setDismissedAlerts] = useState<number[]>([])
  const [alertList, setAlertList] = useState(alerts)

  const dismissAlert = (id: number) => {
    setDismissedAlerts([...dismissedAlerts, id])
  }

  const acknowledgeAlert = (id: number) => {
    setAlertList(alertList.map((alert) => (alert.id === id ? { ...alert, acknowledged: true } : alert)))
  }

  const activeAlerts = alertList.filter((alert) => !alert.acknowledged && !dismissedAlerts.includes(alert.id))

  return (
    <div className="space-y-6">
      {/* Active Alert Banners */}
      {activeAlerts.map((alert) => (
        <Alert key={alert.id} className="border-l-4 border-l-red-500">
          <AlertTriangle className="h-4 w-4" />
          <div className="flex items-center justify-between w-full">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={getSeverityVariant(alert.severity)}>{alert.severity}</Badge>
                <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
              </div>
              <AlertDescription className="text-base">{alert.description}</AlertDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={() => dismissAlert(alert.id)} className="ml-4">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Alert>
      ))}

      {/* Alert Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Timeline</CardTitle>
          <CardDescription>Historical view of all compliance alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alertList.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  <div
                    className={`w-3 h-3 rounded-full mt-2 ${
                      alert.severity === "Critical"
                        ? "bg-red-500"
                        : alert.severity === "High"
                          ? "bg-orange-500"
                          : alert.severity === "Medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={getSeverityVariant(alert.severity)}>{alert.severity}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {alert.timestamp}
                    </div>
                    {alert.acknowledged && (
                      <Badge variant="outline" className="text-green-600">
                        <Check className="h-3 w-3 mr-1" />
                        Acknowledged
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-900 mb-3">{alert.description}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    {!alert.acknowledged && (
                      <Button variant="outline" size="sm" onClick={() => acknowledgeAlert(alert.id)}>
                        <Check className="h-4 w-4 mr-1" />
                        Acknowledge
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-Time Monitoring */}
      <RealTimeMonitoring />
    </div>
  )
}
