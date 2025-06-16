"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, MessageCircle, Eye, AlertTriangle } from "lucide-react"

const documents = [
  {
    id: 1,
    fileName: "financial_report_q4.pdf",
    riskLevel: "Critical",
    uploadedTo: "ChatGPT",
    user: "john.doe@company.com",
    date: "2024-01-15",
    confidentiality: "Confidential",
    riskType: "Financial Data",
  },
  {
    id: 2,
    fileName: "customer_database.xlsx",
    riskLevel: "High",
    uploadedTo: "Claude",
    user: "sarah.chen@company.com",
    date: "2024-01-14",
    confidentiality: "Restricted",
    riskType: "PII",
  },
  {
    id: 3,
    fileName: "meeting_notes.docx",
    riskLevel: "Medium",
    uploadedTo: "Bard",
    user: "mike.johnson@company.com",
    date: "2024-01-14",
    confidentiality: "Internal",
    riskType: "Business Strategy",
  },
  {
    id: 4,
    fileName: "employee_handbook.pdf",
    riskLevel: "Low",
    uploadedTo: "Copilot",
    user: "lisa.wang@company.com",
    date: "2024-01-13",
    confidentiality: "Public",
    riskType: "HR Policy",
  },
  {
    id: 5,
    fileName: "source_code.py",
    riskLevel: "High",
    uploadedTo: "ChatGPT",
    user: "alex.smith@company.com",
    date: "2024-01-13",
    confidentiality: "Confidential",
    riskType: "IP/Code",
  },
]

const getRiskVariant = (risk: string) => {
  switch (risk) {
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

const getRiskIcon = (risk: string) => {
  if (risk === "Critical" || risk === "High") {
    return <AlertTriangle className="h-3 w-3" />
  }
  return null
}

export function SmartDocumentSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [confidentialityFilter, setConfidentialityFilter] = useState("all")
  const [riskFilter, setRiskFilter] = useState("all")
  const [toolFilter, setToolFilter] = useState("all")

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.user.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesConfidentiality = confidentialityFilter === "all" || doc.confidentiality === confidentialityFilter
    const matchesRisk = riskFilter === "all" || doc.riskLevel === riskFilter
    const matchesTool = toolFilter === "all" || doc.uploadedTo === toolFilter

    return matchesSearch && matchesConfidentiality && matchesRisk && matchesTool
  })

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Smart Document Search & Flagging
        </CardTitle>
        <CardDescription>Search and analyze flagged documents with AI-powered insights</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search and Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search documents, users, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={confidentialityFilter} onValueChange={setConfidentialityFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Confidentiality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Public">Public</SelectItem>
                <SelectItem value="Internal">Internal</SelectItem>
                <SelectItem value="Confidential">Confidential</SelectItem>
                <SelectItem value="Restricted">Restricted</SelectItem>
              </SelectContent>
            </Select>
            <Select value={riskFilter} onValueChange={setRiskFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Risk" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Risk</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select value={toolFilter} onValueChange={setToolFilter}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Tool" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tools</SelectItem>
                <SelectItem value="ChatGPT">ChatGPT</SelectItem>
                <SelectItem value="Claude">Claude</SelectItem>
                <SelectItem value="Bard">Bard</SelectItem>
                <SelectItem value="Copilot">Copilot</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{filteredDocuments.length} documents found</span>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Advanced Filters
          </Button>
        </div>

        {/* Documents Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File Name</TableHead>
              <TableHead>Risk Level</TableHead>
              <TableHead>Uploaded To</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{doc.fileName}</span>
                    <Badge variant="outline" className="text-xs">
                      {doc.confidentiality}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-500">{doc.riskType}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={getRiskVariant(doc.riskLevel)} className="flex items-center gap-1 w-fit">
                    {getRiskIcon(doc.riskLevel)}
                    {doc.riskLevel}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{doc.uploadedTo}</Badge>
                </TableCell>
                <TableCell className="font-mono text-sm">{doc.user}</TableCell>
                <TableCell>{doc.date}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
