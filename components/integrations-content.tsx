"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Plug, CheckCircle, AlertCircle, Clock, RefreshCw, Settings } from "lucide-react"

const integrations = [
  {
    name: "AWS SageMaker",
    description: "Machine learning model monitoring and governance",
    status: "Connected",
    lastSync: "2024-01-15 14:30",
    models: 12,
    icon: "🔶",
  },
  {
    name: "Azure ML",
    description: "Microsoft Azure machine learning platform integration",
    status: "Connected",
    lastSync: "2024-01-15 14:25",
    models: 8,
    icon: "🔷",
  },
  {
    name: "Google Vertex AI",
    description: "Google Cloud AI and ML services integration",
    status: "Pending",
    lastSync: "2024-01-14 16:20",
    models: 0,
    icon: "🟡",
  },
  {
    name: "Microsoft Defender",
    description: "Security and threat protection integration",
    status: "Connected",
    lastSync: "2024-01-15 14:35",
    models: 0,
    icon: "🛡️",
  },
  {
    name: "Salesforce",
    description: "CRM data and AI model integration",
    status: "Error",
    lastSync: "2024-01-13 10:15",
    models: 3,
    icon: "☁️",
  },
  {
    name: "Databricks",
    description: "Unified analytics platform for big data and ML",
    status: "Connected",
    lastSync: "2024-01-15 13:45",
    models: 15,
    icon: "🧱",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Connected":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "Pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "Error":
      return <AlertCircle className="h-4 w-4 text-red-500" />
    default:
      return <Clock className="h-4 w-4 text-gray-400" />
  }
}

const getStatusVariant = (status: string) => {
  switch (status) {
    case "Connected":
      return "default"
    case "Pending":
      return "secondary"
    case "Error":
      return "destructive"
    default:
      return "outline"
  }
}

export function IntegrationsContent() {
      return (
        <div className="space-y-6">
            {/* Integration Overview */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card className="bg-white border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Integrations</CardTitle>
                        <Plug className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">6</div>
                        <p className="text-xs text-gray-500">Platforms connected</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Active Connections</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">4</div>
                        <p className="text-xs text-green-600">Healthy connections</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Models Monitored</CardTitle>
                        <Settings className="h-4 w-4 text-purple-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">38</div>
                        <p className="text-xs text-gray-500">AI models tracked</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Sync Status</CardTitle>
                        <RefreshCw className="h-4 w-4 text-blue-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-gray-900">98%</div>
                        <p className="text-xs text-blue-600">Last sync: 2 min ago</p>
                    </CardContent>
                </Card>
            </div>

            {/* Integrations Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {integrations.map((integration) => (
                    <Card key={integration.name} className="bg-white border-gray-200">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{integration.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-semibold">{integration.name}</h3>
                                        <p className="text-sm text-gray-500">{integration.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {getStatusIcon(integration.status)}
                                    <Badge variant={getStatusVariant(integration.status)}>{integration.status}</Badge>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Last Sync:</span>
                                    <span className="font-medium">{integration.lastSync}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Models:</span>
                                    <span className="font-medium">{integration.models}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                                <div className="flex items-center gap-2">
                                    <Switch defaultChecked={integration.status === "Connected"} />
                                    <Label className="text-sm">Auto-sync enabled</Label>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="flex-1">
                                    <RefreshCw className="h-3 w-3 mr-1" />
                                    Sync Now
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}