"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Link, Shield, User, Clock, Search } from "lucide-react"

interface AuditLogEntry {
  id: string
  hash: string
  timestamp: string
  user: string
  action: string
  tool: string
  details: string
  verified: boolean
}

const auditLogs: AuditLogEntry[] = [
  {
    id: "1",
    hash: "0x1a2b3c4d5e6f7890abcdef1234567890",
    timestamp: "2024-01-15 14:32:15",
    user: "john.doe@company.com",
    action: "Document Upload",
    tool: "ChatGPT",
    details: "Uploaded financial_report_q4.pdf - Flagged as Critical",
    verified: true,
  },
  {
    id: "2",
    hash: "0x2b3c4d5e6f7890abcdef1234567890ab",
    timestamp: "2024-01-15 14:28:42",
    user: "sarah.chen@company.com",
    action: "Policy Violation",
    tool: "Claude",
    details: "PII data detected in customer_database.xlsx",
    verified: true,
  },
  {
    id: "3",
    hash: "0x3c4d5e6f7890abcdef1234567890abcd",
    timestamp: "2024-01-15 14:25:18",
    user: "mike.johnson@company.com",
    action: "Access Blocked",
    tool: "Bard",
    details: "User blocked due to repeated policy violations",
    verified: true,
  },
  {
    id: "4",
    hash: "0x4d5e6f7890abcdef1234567890abcdef",
    timestamp: "2024-01-15 14:22:33",
    user: "lisa.wang@company.com",
    action: "Settings Change",
    tool: "System",
    details: "Updated risk threshold from 70% to 80%",
    verified: true,
  },
  {
    id: "5",
    hash: "0x5e6f7890abcdef1234567890abcdef12",
    timestamp: "2024-01-15 14:18:07",
    user: "alex.smith@company.com",
    action: "Document Download",
    tool: "Copilot",
    details: "Downloaded compliance report for Q4 2024",
    verified: true,
  },
  {
    id: "6",
    hash: "0x6f7890abcdef1234567890abcdef1234",
    timestamp: "2024-01-15 14:15:22",
    user: "admin@company.com",
    action: "User Permission",
    tool: "System",
    details: "Granted admin access to sarah.chen@company.com",
    verified: true,
  },
]

export function BlockchainAuditLog() {
  const [userFilter, setUserFilter] = useState("all")
  const [actionFilter, setActionFilter] = useState("all")
  const [toolFilter, setToolFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredLogs = auditLogs.filter((log) => {
    const matchesUser = userFilter === "all" || log.user === userFilter
    const matchesAction = actionFilter === "all" || log.action === actionFilter
    const matchesTool = toolFilter === "all" || log.tool === toolFilter
    const matchesSearch =
      searchQuery === "" ||
      log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.hash.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesUser && matchesAction && matchesTool && matchesSearch
  })

  const uniqueUsers = [...new Set(auditLogs.map((log) => log.user))]
  const uniqueActions = [...new Set(auditLogs.map((log) => log.action))]
  const uniqueTools = [...new Set(auditLogs.map((log) => log.tool))]

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link className="h-5 w-5" />
          Blockchain Audit Log
        </CardTitle>
        <CardDescription>Immutable audit trail of all compliance-related activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search logs, users, or hash IDs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={userFilter} onValueChange={setUserFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by user" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Users</SelectItem>
                  {uniqueUsers.map((user) => (
                    <SelectItem key={user} value={user}>
                      {user}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={actionFilter} onValueChange={setActionFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  {uniqueActions.map((action) => (
                    <SelectItem key={action} value={action}>
                      {action}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={toolFilter} onValueChange={setToolFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter by tool" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tools</SelectItem>
                  {uniqueTools.map((tool) => (
                    <SelectItem key={tool} value={tool}>
                      {tool}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{filteredLogs.length} log entries found</span>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-green-600">All entries verified</span>
            </div>
          </div>

          {/* Audit Log Entries */}
          <ScrollArea className="h-96 border border-gray-200 rounded-lg">
            <div className="p-4 space-y-3">
              {filteredLogs.map((log) => (
                <div key={log.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={log.verified ? "default" : "destructive"} className="text-xs">
                        {log.verified ? "VERIFIED" : "PENDING"}
                      </Badge>
                      <Badge variant="outline" className="text-xs font-mono">
                        {log.tool}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {log.timestamp}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{log.action}</span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <User className="h-3 w-3" />
                        {log.user}
                      </div>
                    </div>

                    <p className="text-sm text-gray-700">{log.details}</p>

                    <div className="pt-2 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Link className="h-3 w-3 text-gray-400" />
                        <span className="text-xs font-mono text-gray-500">Hash: {log.hash}</span>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          Verify
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}
