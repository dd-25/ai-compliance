"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, XCircle, Play } from "lucide-react"

const assessments = [
  {
    id: 1,
    model: "GPT-4 Integration",
    framework: "EU AI Act",
    date: "2024-01-15",
    status: "Compliant",
    riskLevel: "Low",
  },
  {
    id: 2,
    model: "Claude-3 Analysis",
    framework: "ISO 42001",
    date: "2024-01-14",
    status: "Under Review",
    riskLevel: "Medium",
  },
  {
    id: 3,
    model: "Bard Content Gen",
    framework: "NIST RMF",
    date: "2024-01-13",
    status: "Non-Compliant",
    riskLevel: "High",
  },
  {
    id: 4,
    model: "Copilot Code Review",
    framework: "EU AI Act",
    date: "2024-01-12",
    status: "Compliant",
    riskLevel: "Low",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Compliant":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "Under Review":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "Non-Compliant":
      return <XCircle className="h-4 w-4 text-red-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Compliant":
      return "default"
    case "Under Review":
      return "secondary"
    case "Non-Compliant":
      return "destructive"
    default:
      return "outline"
  }
}

export function AIGovernancePanel() {
  const [selectedFramework, setSelectedFramework] = useState("all")

  const filteredAssessments = assessments.filter(
    (assessment) => selectedFramework === "all" || assessment.framework === selectedFramework,
  )

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          AI Governance Panel
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Play className="h-4 w-4 mr-1" />
            Run New Assessment
          </Button>
        </CardTitle>
        <CardDescription>Monitor AI model compliance across regulatory frameworks</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Framework:</label>
          <Select value={selectedFramework} onValueChange={setSelectedFramework}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Frameworks</SelectItem>
              <SelectItem value="EU AI Act">EU AI Act</SelectItem>
              <SelectItem value="ISO 42001">ISO 42001</SelectItem>
              <SelectItem value="NIST RMF">NIST RMF</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Recent Assessments</h4>
          {filteredAssessments.map((assessment) => (
            <div
              key={assessment.id}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                {getStatusIcon(assessment.status)}
                <div>
                  <p className="text-sm font-medium text-gray-900">{assessment.model}</p>
                  <p className="text-xs text-gray-500">
                    {assessment.framework} • {assessment.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getStatusVariant(assessment.status)}>{assessment.status}</Badge>
                <Badge variant="outline" className="text-xs">
                  {assessment.riskLevel}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
