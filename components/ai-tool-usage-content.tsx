"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Bot, TrendingUp, Users, AlertTriangle } from "lucide-react"

const usageData = [
  { month: "Jan", ChatGPT: 1200, Claude: 800, Bard: 600, Copilot: 400 },
  { month: "Feb", ChatGPT: 1400, Claude: 900, Bard: 700, Copilot: 500 },
  { month: "Mar", ChatGPT: 1600, Claude: 1100, Bard: 800, Copilot: 600 },
  { month: "Apr", ChatGPT: 1800, Claude: 1200, Bard: 900, Copilot: 700 },
  { month: "May", ChatGPT: 2000, Claude: 1400, Bard: 1000, Copilot: 800 },
  { month: "Jun", ChatGPT: 2200, Claude: 1500, Bard: 1100, Copilot: 900 },
]

const departmentData = [
  { department: "Engineering", usage: 3200, risk: "Medium" },
  { department: "Marketing", usage: 2800, risk: "Low" },
  { department: "Sales", usage: 2400, risk: "High" },
  { department: "HR", usage: 1800, risk: "Critical" },
  { department: "Finance", usage: 1600, risk: "High" },
  { department: "Legal", usage: 800, risk: "Low" },
]

const toolsData = [
  { tool: "ChatGPT", frequency: 2200, riskLevel: "Medium", users: 145 },
  { tool: "Claude", frequency: 1500, riskLevel: "Low", users: 89 },
  { tool: "Bard", frequency: 1100, riskLevel: "Medium", users: 67 },
  { tool: "Copilot", frequency: 900, riskLevel: "High", users: 234 },
  { tool: "Gemini", frequency: 600, riskLevel: "Low", users: 34 },
  { tool: "Perplexity", frequency: 400, riskLevel: "Medium", users: 23 },
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

export function AIToolUsageContent() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Usage</CardTitle>
            <Bot className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">6,600</div>
            <p className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +18% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">592</div>
            <p className="text-xs text-gray-500">Across 6 departments</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">High Risk Usage</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,800</div>
            <p className="text-xs text-orange-600">Requires monitoring</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Tools Integrated</CardTitle>
            <Bot className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">6</div>
            <p className="text-xs text-gray-500">AI platforms connected</p>
          </CardContent>
        </Card>
      </div>

      {/* Usage Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle>Usage Trends by Tool</CardTitle>
            <CardDescription>Monthly AI tool usage across the organization</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                ChatGPT: { label: "ChatGPT", color: "#10b981" },
                Claude: { label: "Claude", color: "#3b82f6" },
                Bard: { label: "Bard", color: "#f59e0b" },
                Copilot: { label: "Copilot", color: "#8b5cf6" },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="ChatGPT" stroke="var(--color-ChatGPT)" strokeWidth={2} />
                  <Line type="monotone" dataKey="Claude" stroke="var(--color-Claude)" strokeWidth={2} />
                  <Line type="monotone" dataKey="Bard" stroke="var(--color-Bard)" strokeWidth={2} />
                  <Line type="monotone" dataKey="Copilot" stroke="var(--color-Copilot)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle>Usage by Department</CardTitle>
            <CardDescription>AI tool usage distribution across departments</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                usage: { label: "Usage", color: "#3b82f6" },
              }}
              className="h-80"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentData} layout="horizontal">
                  <XAxis type="number" />
                  <YAxis dataKey="department" type="category" width={80} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="usage" fill="var(--color-usage)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tools Usage Table */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            AI Tools Usage Analytics
            <div className="flex gap-2">
              <Select defaultValue="30">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Teams</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardTitle>
          <CardDescription>Detailed breakdown of AI tool usage, frequency, and risk levels</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tool</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Active Users</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {toolsData.map((tool) => (
                <TableRow key={tool.tool}>
                  <TableCell className="font-medium">{tool.tool}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold">{tool.frequency.toLocaleString()}</span>
                      <span className="text-xs text-gray-500">prompts</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3 text-gray-400" />
                      <span>{tool.users}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getRiskVariant(tool.riskLevel)}>{tool.riskLevel}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-xs">+12%</span>
                    </div>
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
