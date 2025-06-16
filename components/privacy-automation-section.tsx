"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Settings, User, Clock } from "lucide-react"

const automatedTasks = [
  {
    id: 1,
    task: "GDPR Data Mapping",
    type: "Data Mapping",
    status: "Completed",
    assignee: "System",
    lastRun: "2024-01-15 14:30",
    nextRun: "2024-01-16 14:30",
  },
  {
    id: 2,
    task: "Risk Assessment - HR Data",
    type: "Risk Assessment",
    status: "In Progress",
    assignee: "Sarah Chen",
    lastRun: "2024-01-15 10:00",
    nextRun: "2024-01-17 10:00",
  },
  {
    id: 3,
    task: "Incident Response - Data Breach",
    type: "Incident Response",
    status: "Pending",
    assignee: "Mike Johnson",
    lastRun: "2024-01-14 16:45",
    nextRun: "2024-01-15 16:45",
  },
  {
    id: 4,
    task: "Cookie Consent Audit",
    type: "Data Mapping",
    status: "Completed",
    assignee: "System",
    lastRun: "2024-01-15 09:15",
    nextRun: "2024-01-22 09:15",
  },
]

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Completed":
      return "default"
    case "In Progress":
      return "secondary"
    case "Pending":
      return "destructive"
    default:
      return "outline"
  }
}

export function PrivacyAutomationSection() {
  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Privacy Automation
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-1" />
              Configure
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-1" />
              New Task
            </Button>
          </div>
        </CardTitle>
        <CardDescription>Automated privacy compliance workflows and tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-sm font-medium text-blue-900">Data Mapping</h4>
              <p className="text-xs text-blue-700">Automated data flow mapping</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="text-sm font-medium text-orange-900">Risk Assessment</h4>
              <p className="text-xs text-orange-700">AI-powered risk evaluation</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="text-sm font-medium text-purple-900">Incident Response</h4>
              <p className="text-xs text-purple-700">Automated breach response</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-700">Active Tasks</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Next Run</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {automatedTasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.task}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{task.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(task.status)}>{task.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{task.assignee}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-sm">{task.nextRun}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
