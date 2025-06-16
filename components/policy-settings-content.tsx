"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Settings, AlertTriangle, Plus, Edit, Trash2 } from "lucide-react"

const alertRules = [
  {
    id: 1,
    trigger: "PII Data Detected",
    action: "Block Upload",
    severity: "Critical",
    status: "Active",
    lastTriggered: "2024-01-15 14:30",
  },
  {
    id: 2,
    trigger: "Financial Data Upload",
    action: "Require Approval",
    severity: "High",
    status: "Active",
    lastTriggered: "2024-01-15 12:15",
  },
  {
    id: 3,
    trigger: "Unusual Upload Pattern",
    action: "Send Alert",
    severity: "Medium",
    status: "Active",
    lastTriggered: "2024-01-14 16:45",
  },
  {
    id: 4,
    trigger: "Rate Limit Exceeded",
    action: "Temporary Block",
    severity: "Low",
    status: "Inactive",
    lastTriggered: "2024-01-13 09:20",
  },
]

const getSeverityVariant = (severity: string) => {
  switch (severity) {
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

const getStatusVariant = (status: string) => {
  return status === "Active" ? "default" : "secondary"
}

export function PolicySettingsContent() {
  const [autoBlock, setAutoBlock] = useState(true)
  const [humanReview, setHumanReview] = useState(false)
  const [autoAlerts, setAutoAlerts] = useState(true)
  const [lowThreshold, setLowThreshold] = useState([25])
  const [mediumThreshold, setMediumThreshold] = useState([50])
  const [highThreshold, setHighThreshold] = useState([75])
  const [criticalThreshold, setCriticalThreshold] = useState([90])

  return (
    <div className="space-y-6">
      {/* Policy Controls */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Policy Controls
          </CardTitle>
          <CardDescription>Configure automated policy enforcement and response actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Automated Actions</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-block" className="text-sm font-medium">
                      Auto-block Risky Uploads
                    </Label>
                    <p className="text-xs text-gray-500">Automatically block uploads that exceed risk thresholds</p>
                  </div>
                  <Switch id="auto-block" checked={autoBlock} onCheckedChange={setAutoBlock} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="human-review" className="text-sm font-medium">
                      Enable Human Review
                    </Label>
                    <p className="text-xs text-gray-500">Require human approval for flagged content</p>
                  </div>
                  <Switch id="human-review" checked={humanReview} onCheckedChange={setHumanReview} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-alerts" className="text-sm font-medium">
                      Auto-send Alerts
                    </Label>
                    <p className="text-xs text-gray-500">Automatically notify administrators of violations</p>
                  </div>
                  <Switch id="auto-alerts" checked={autoAlerts} onCheckedChange={setAutoAlerts} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Risk Thresholds</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Low Risk</Label>
                    <span className="text-sm font-medium">{lowThreshold[0]}%</span>
                  </div>
                  <Slider value={lowThreshold} onValueChange={setLowThreshold} max={100} step={5} className="w-full" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Medium Risk</Label>
                    <span className="text-sm font-medium">{mediumThreshold[0]}%</span>
                  </div>
                  <Slider
                    value={mediumThreshold}
                    onValueChange={setMediumThreshold}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">High Risk</Label>
                    <span className="text-sm font-medium">{highThreshold[0]}%</span>
                  </div>
                  <Slider
                    value={highThreshold}
                    onValueChange={setHighThreshold}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm">Critical Risk</Label>
                    <span className="text-sm font-medium">{criticalThreshold[0]}%</span>
                  </div>
                  <Slider
                    value={criticalThreshold}
                    onValueChange={setCriticalThreshold}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Button className="bg-blue-600 hover:bg-blue-700">Save Policy Settings</Button>
          </div>
        </CardContent>
      </Card>

      {/* Alert Rules */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Alert Rules
            </div>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-1" />
              Add Rule
            </Button>
          </CardTitle>
          <CardDescription>Configure triggers and actions for compliance alerts</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trigger</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Triggered</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alertRules.map((rule) => (
                <TableRow key={rule.id}>
                  <TableCell className="font-medium">{rule.trigger}</TableCell>
                  <TableCell>{rule.action}</TableCell>
                  <TableCell>
                    <Badge variant={getSeverityVariant(rule.severity)}>{rule.severity}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(rule.status)}>{rule.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{rule.lastTriggered}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* New Rule Form */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Create New Alert Rule
          </CardTitle>
          <CardDescription>Define custom triggers and automated responses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="rule-name">Rule Name</Label>
              <Input id="rule-name" placeholder="Enter rule name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="trigger-type">Trigger Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select trigger" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pii">PII Data Detected</SelectItem>
                  <SelectItem value="financial">Financial Data</SelectItem>
                  <SelectItem value="pattern">Unusual Pattern</SelectItem>
                  <SelectItem value="volume">High Volume Upload</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="action-type">Action</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="block">Block Upload</SelectItem>
                  <SelectItem value="alert">Send Alert</SelectItem>
                  <SelectItem value="review">Require Review</SelectItem>
                  <SelectItem value="log">Log Only</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="severity">Severity</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700">Create Rule</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
