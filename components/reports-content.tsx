"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, FileText, Calendar } from "lucide-react"

const reports = [
  {
    title: "GDPR Compliance Report - December 2024",
    createdDate: "2024-01-01",
    format: "PDF",
    regulation: "GDPR",
    violations: 3,
  },
  {
    title: "HIPAA Audit Report - Q4 2024",
    createdDate: "2023-12-28",
    format: "CSV",
    regulation: "HIPAA",
    violations: 1,
  },
  {
    title: "US AI Act Compliance Summary",
    createdDate: "2023-12-25",
    format: "PDF",
    regulation: "US AI Act",
    violations: 0,
  },
  {
    title: "GDPR Data Processing Report",
    createdDate: "2023-12-20",
    format: "PDF",
    regulation: "GDPR",
    violations: 5,
  },
  {
    title: "HIPAA Security Assessment",
    createdDate: "2023-12-15",
    format: "CSV",
    regulation: "HIPAA",
    violations: 2,
  },
]

const violationSummary = {
  GDPR: 8,
  HIPAA: 3,
  "US AI Act": 0,
}

export function ReportsContent() {
  const [selectedMonth, setSelectedMonth] = useState("all")
  const [selectedRegulation, setSelectedRegulation] = useState("all")

  const filteredReports = reports.filter((report) => {
    const monthMatch = selectedMonth === "all" || report.createdDate.includes(`2024-${selectedMonth.padStart(2, "0")}`)
    const regulationMatch = selectedRegulation === "all" || report.regulation === selectedRegulation
    return monthMatch && regulationMatch
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Report Filters</CardTitle>
          <CardDescription>Filter reports by month and regulation type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Month</label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger>
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Months</SelectItem>
                  <SelectItem value="1">January</SelectItem>
                  <SelectItem value="2">February</SelectItem>
                  <SelectItem value="3">March</SelectItem>
                  <SelectItem value="4">April</SelectItem>
                  <SelectItem value="5">May</SelectItem>
                  <SelectItem value="6">June</SelectItem>
                  <SelectItem value="7">July</SelectItem>
                  <SelectItem value="8">August</SelectItem>
                  <SelectItem value="9">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Regulation Type</label>
              <Select value={selectedRegulation} onValueChange={setSelectedRegulation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select regulation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regulations</SelectItem>
                  <SelectItem value="GDPR">GDPR</SelectItem>
                  <SelectItem value="HIPAA">HIPAA</SelectItem>
                  <SelectItem value="US AI Act">US AI Act</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Violation Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(violationSummary).map(([regulation, count]) => (
          <Card key={regulation}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{regulation} Violations</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{count}</div>
              <p className="text-xs text-muted-foreground">{count === 0 ? "No violations" : "Requires attention"}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Reports</CardTitle>
          <CardDescription>
            {filteredReports.length} report{filteredReports.length !== 1 ? "s" : ""} found
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
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map((report, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{report.title}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{report.regulation}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {report.createdDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{report.format}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={report.violations > 0 ? "destructive" : "secondary"}>{report.violations}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
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
