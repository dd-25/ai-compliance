"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Download, FileText, Calendar, BarChart3, AlertTriangle } from "lucide-react"

const reports = [
  {
    title: "GDPR Compliance Report - January 2024",
    createdDate: "2024-01-15",
    format: "PDF",
    regulation: "GDPR",
    violations: 3,
    size: "2.4 MB",
  },
  {
    title: "HIPAA Audit Summary - Q4 2024",
    createdDate: "2024-01-10",
    format: "CSV",
    regulation: "HIPAA",
    violations: 1,
    size: "1.8 MB",
  },
  {
    title: "EU AI Act Compliance Assessment",
    createdDate: "2024-01-08",
    format: "PDF",
    regulation: "EU AI Act",
    violations: 0,
    size: "3.2 MB",
  },
  {
    title: "CCPA Data Processing Report",
    createdDate: "2024-01-05",
    format: "PDF",
    regulation: "CCPA",
    violations: 2,
    size: "1.9 MB",
  },
  {
    title: "SOX IT Controls Assessment",
    createdDate: "2024-01-03",
    format: "CSV",
    regulation: "SOX",
    violations: 0,
    size: "0.8 MB",
  },
]

const violationData = [
  { regulation: "GDPR", violations: 8, resolved: 5, pending: 3 },
  { regulation: "HIPAA", violations: 3, resolved: 2, pending: 1 },
  { regulation: "EU AI Act", violations: 2, resolved: 2, pending: 0 },
  { regulation: "CCPA", violations: 5, resolved: 3, pending: 2 },
  { regulation: "SOX", violations: 1, resolved: 1, pending: 0 },
]

const riskScoreData = [
  { category: "Data Processing", score: 85, trend: "improving" },
  { category: "AI Governance", score: 92, trend: "stable" },
  { category: "Privacy Controls", score: 78, trend: "declining" },
  { category: "Access Management", score: 88, trend: "improving" },
]

export function ComplianceReportsContent() {
  const [selectedMonth, setSelectedMonth] = useState("january")
  const [selectedRegulation, setSelectedRegulation] = useState("all")

  const filteredReports = reports.filter((report) => {
    const regulationMatch = selectedRegulation === "all" || report.regulation === selectedRegulation
    return regulationMatch
  })

  return (
    <div className="space-y-6">
      {/* Report Generator */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Compliance Reports Generator
          </CardTitle>
          <CardDescription>Generate and download compliance reports for various regulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              GDPR Report
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              HIPAA Report
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              EU AI Act
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              CCPA Report
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
              <Download className="h-4 w-4" />
              SOX Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Violations Summary */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle>Violations by Regulation</CardTitle>
            <CardDescription>Current status of compliance violations</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                violations: { label: "Total Violations", color: "#ef4444" },
                resolved: { label: "Resolved", color: "#10b981" },
                pending: { label: "Pending", color: "#f59e0b" },
              }}
              className="h-64"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={violationData}>
                  <XAxis dataKey="regulation" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="resolved" stackId="a" fill="var(--color-resolved)" />
                  <Bar dataKey="pending" stackId="a" fill="var(--color-pending)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle>Risk Score by Category</CardTitle>
            <CardDescription>Current compliance risk assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskScoreData.map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{item.score}%</span>
                      <Badge
                        variant={
                          item.trend === "improving"
                            ? "default"
                            : item.trend === "declining"
                              ? "destructive"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {item.trend}
                      </Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        item.score >= 90 ? "bg-green-500" : item.score >= 80 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Table */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Generated Reports
            <div className="flex gap-2">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="january">January 2024</SelectItem>
                  <SelectItem value="december">December 2023</SelectItem>
                  <SelectItem value="november">November 2023</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedRegulation} onValueChange={setSelectedRegulation}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regulations</SelectItem>
                  <SelectItem value="GDPR">GDPR</SelectItem>
                  <SelectItem value="HIPAA">HIPAA</SelectItem>
                  <SelectItem value="EU AI Act">EU AI Act</SelectItem>
                  <SelectItem value="CCPA">CCPA</SelectItem>
                  <SelectItem value="SOX">SOX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardTitle>
          <CardDescription>
            {filteredReports.length} report{filteredReports.length !== 1 ? "s" : ""} available for download
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report Title</TableHead>
                <TableHead>Regulation</TableHead>
                <TableHead>Created Date</TableHead>
                <TableHead>Format</TableHead>
                <TableHead>Violations</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{report.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{report.regulation}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span className="text-sm">{report.createdDate}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{report.format}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {report.violations > 0 && <AlertTriangle className="h-3 w-3 text-orange-500" />}
                      <Badge variant={report.violations > 0 ? "destructive" : "default"}>{report.violations}</Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{report.size}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
