"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertTriangle, CheckCircle, Shield, User, Clock } from "lucide-react"

interface MonitoringEvent {
  id: string
  type: "flagged" | "suspicious" | "blocked" | "warning"
  message: string
  user: string
  tool: string
  timestamp: string
  severity: "low" | "medium" | "high" | "critical"
}

const initialEvents: MonitoringEvent[] = [
  {
    id: "1",
    type: "flagged",
    message: "Sensitive financial data detected in upload",
    user: "john.doe@company.com",
    tool: "ChatGPT",
    timestamp: "2024-01-15 14:32:15",
    severity: "critical",
  },
  {
    id: "2",
    type: "suspicious",
    message: "Unusual upload pattern detected",
    user: "sarah.chen@company.com",
    tool: "Claude",
    timestamp: "2024-01-15 14:28:42",
    severity: "medium",
  },
  {
    id: "3",
    type: "blocked",
    message: "PII data upload blocked automatically",
    user: "mike.johnson@company.com",
    tool: "Bard",
    timestamp: "2024-01-15 14:25:18",
    severity: "high",
  },
  {
    id: "4",
    type: "warning",
    message: "Rate limit approaching for user",
    user: "lisa.wang@company.com",
    tool: "Copilot",
    timestamp: "2024-01-15 14:22:33",
    severity: "low",
  },
]

const getEventIcon = (type: string) => {
  switch (type) {
    case "flagged":
      return <AlertTriangle className="h-4 w-4 text-orange-500" />
    case "suspicious":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    case "blocked":
      return <Shield className="h-4 w-4 text-red-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-blue-500" />
    default:
      return <CheckCircle className="h-4 w-4 text-green-500" />
  }
}

const getSeverityVariant = (severity: string) => {
  switch (severity) {
    case "critical":
      return "destructive"
    case "high":
      return "destructive"
    case "medium":
      return "secondary"
    case "low":
      return "outline"
    default:
      return "outline"
  }
}

export function RealTimeMonitoring() {
  const [events, setEvents] = useState<MonitoringEvent[]>(initialEvents)
  const [acknowledgedEvents, setAcknowledgedEvents] = useState<string[]>([])

  // Simulate real-time events
  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent: MonitoringEvent = {
        id: Date.now().toString(),
        type: ["flagged", "suspicious", "blocked", "warning"][Math.floor(Math.random() * 4)] as any,
        message: [
          "New document flagged for review",
          "Suspicious activity detected",
          "Upload blocked due to policy violation",
          "User approaching usage limits",
        ][Math.floor(Math.random() * 4)],
        user: ["john.doe@company.com", "sarah.chen@company.com", "mike.johnson@company.com"][
          Math.floor(Math.random() * 3)
        ],
        tool: ["ChatGPT", "Claude", "Bard", "Copilot"][Math.floor(Math.random() * 4)],
        timestamp: new Date().toLocaleString(),
        severity: ["low", "medium", "high", "critical"][Math.floor(Math.random() * 4)] as any,
      }
      setEvents((prev) => [newEvent, ...prev.slice(0, 19)]) // Keep only 20 events
    }, 10000) // Add new event every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const acknowledgeEvent = (eventId: string) => {
    setAcknowledgedEvents((prev) => [...prev, eventId])
  }

  const blockUser = (user: string) => {
    console.log(`Blocking user: ${user}`)
    // Implement user blocking logic
  }

  const notifyAdmin = (eventId: string) => {
    console.log(`Notifying admin about event: ${eventId}`)
    // Implement admin notification logic
  }

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Real-Time Compliance Monitoring
        </CardTitle>
        <CardDescription>Live feed of compliance events and suspicious activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Status Summary */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="p-3 bg-red-50 rounded-lg border border-red-200 text-center">
              <div className="text-2xl font-bold text-red-900">
                {events.filter((e) => e.severity === "critical").length}
              </div>
              <div className="text-xs text-red-700">Critical Events</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200 text-center">
              <div className="text-2xl font-bold text-orange-900">
                {events.filter((e) => e.severity === "high").length}
              </div>
              <div className="text-xs text-orange-700">High Priority</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
              <div className="text-2xl font-bold text-yellow-900">
                {events.filter((e) => e.severity === "medium").length}
              </div>
              <div className="text-xs text-yellow-700">Medium Priority</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-900">{acknowledgedEvents.length}</div>
              <div className="text-xs text-green-700">Acknowledged</div>
            </div>
          </div>

          {/* Live Events Feed */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-700">Live Events Feed</h4>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs text-gray-500">Live</span>
              </div>
            </div>
            <ScrollArea className="h-96 border border-gray-200 rounded-lg">
              <div className="p-4 space-y-3">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`p-3 border rounded-lg ${
                      acknowledgedEvents.includes(event.id)
                        ? "bg-gray-50 border-gray-200 opacity-60"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1">
                        {getEventIcon(event.type)}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant={getSeverityVariant(event.severity)} className="text-xs">
                              {event.severity.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {event.tool}
                            </Badge>
                          </div>
                          <p className="text-sm font-medium text-gray-900 mb-1">{event.message}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {event.user}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {event.timestamp}
                            </div>
                          </div>
                        </div>
                      </div>
                      {!acknowledgedEvents.includes(event.id) && (
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm" onClick={() => acknowledgeEvent(event.id)}>
                            Acknowledge
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => blockUser(event.user)}>
                            Block User
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => notifyAdmin(event.id)}>
                            Notify Admin
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
