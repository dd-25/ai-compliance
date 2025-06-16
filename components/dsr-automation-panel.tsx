"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, CheckCircle, Send, Zap } from "lucide-react"

const dsrRequests = [
  {
    id: "DSR-2024-001",
    userId: "user_12345",
    type: "Access",
    status: "Pending Verification",
    responseDue: "2024-01-18",
    priority: "High",
  },
  {
    id: "DSR-2024-002",
    userId: "user_67890",
    type: "Delete",
    status: "In Progress",
    responseDue: "2024-01-17",
    priority: "Critical",
  },
  {
    id: "DSR-2024-003",
    userId: "user_11111",
    type: "Rectification",
    status: "Completed",
    responseDue: "2024-01-16",
    priority: "Medium",
  },
  {
    id: "DSR-2024-004",
    userId: "user_22222",
    type: "Access",
    status: "Auto-Fulfilled",
    responseDue: "2024-01-15",
    priority: "Low",
  },
  {
    id: "DSR-2024-005",
    userId: "user_33333",
    type: "Portability",
    status: "Pending Verification",
    responseDue: "2024-01-19",
    priority: "Medium",
  },
]

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Completed":
    case "Auto-Fulfilled":
      return "default"
    case "In Progress":
      return "secondary"
    case "Pending Verification":
      return "destructive"
    default:
      return "outline"
  }
}

const getPriorityVariant = (priority: string) => {
  switch (priority) {
    case "Critical":
      return "destructive"
    case "High":
      return "destructive"
    case "Medium":
      return "secondary"
    case "Low":
      return "outline"
    default:
      return "outline"
  }
}

export function DSRAutomationPanel() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Data Subject Request Automation
        </CardTitle>
        <CardDescription>Automated processing of data subject rights requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
              <div className="text-2xl font-bold text-blue-900">23</div>
              <div className="text-xs text-blue-700">Total Requests</div>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
              <div className="text-2xl font-bold text-yellow-900">8</div>
              <div className="text-xs text-yellow-700">Pending</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-2xl font-bold text-green-900">12</div>
              <div className="text-xs text-green-700">Auto-Fulfilled</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-900">96%</div>
              <div className="text-xs text-purple-700">On-Time Rate</div>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>User ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dsrRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell className="font-mono text-sm">{request.userId}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{request.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(request.status)}>{request.status}</Badge>
                  </TableCell>
                  <TableCell>{request.responseDue}</TableCell>
                  <TableCell>
                    <Badge variant={getPriorityVariant(request.priority)}>{request.priority}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm">
                        <CheckCircle className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Send className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Zap className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
