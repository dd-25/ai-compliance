"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Save, Settings, Shield, Upload, AlertTriangle } from "lucide-react"

export function SettingsContent() {
  const [settings, setSettings] = useState({
    uploadLimit: "100",
    criticalThreshold: "90",
    highThreshold: "70",
    mediumThreshold: "40",
    chatgptEnabled: true,
    bardEnabled: true,
    copilotEnabled: false,
    autoBlocking: true,
    warningOnly: false,
  })

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSave = () => {
    // Save settings logic here
    console.log("Settings saved:", settings)
  }

  return (
    <div className="space-y-6">
      {/* Upload Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Upload Configuration
          </CardTitle>
          <CardDescription>Configure upload limits and file processing settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="upload-limit">Daily Upload Limit (MB)</Label>
              <Input
                id="upload-limit"
                type="number"
                value={settings.uploadLimit}
                onChange={(e) => handleSettingChange("uploadLimit", e.target.value)}
                placeholder="Enter upload limit"
              />
              <p className="text-sm text-muted-foreground">Maximum file size allowed per day per user</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Level Thresholds */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Risk Level Thresholds
          </CardTitle>
          <CardDescription>Configure risk scoring thresholds for compliance detection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="critical-threshold">Critical Threshold (%)</Label>
              <Input
                id="critical-threshold"
                type="number"
                min="0"
                max="100"
                value={settings.criticalThreshold}
                onChange={(e) => handleSettingChange("criticalThreshold", e.target.value)}
              />
              <Badge variant="destructive" className="text-xs">
                Critical Risk
              </Badge>
            </div>
            <div className="space-y-2">
              <Label htmlFor="high-threshold">High Threshold (%)</Label>
              <Input
                id="high-threshold"
                type="number"
                min="0"
                max="100"
                value={settings.highThreshold}
                onChange={(e) => handleSettingChange("highThreshold", e.target.value)}
              />
              <Badge variant="destructive" className="text-xs">
                High Risk
              </Badge>
            </div>
            <div className="space-y-2">
              <Label htmlFor="medium-threshold">Medium Threshold (%)</Label>
              <Input
                id="medium-threshold"
                type="number"
                min="0"
                max="100"
                value={settings.mediumThreshold}
                onChange={(e) => handleSettingChange("mediumThreshold", e.target.value)}
              />
              <Badge variant="default" className="text-xs">
                Medium Risk
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Tool Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            AI Tool Integrations
          </CardTitle>
          <CardDescription>Enable or disable specific AI tool integrations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">ChatGPT Integration</Label>
                <p className="text-sm text-muted-foreground">Monitor and control ChatGPT usage and uploads</p>
              </div>
              <Switch
                checked={settings.chatgptEnabled}
                onCheckedChange={(checked) => handleSettingChange("chatgptEnabled", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Google Bard Integration</Label>
                <p className="text-sm text-muted-foreground">Monitor and control Bard usage and uploads</p>
              </div>
              <Switch
                checked={settings.bardEnabled}
                onCheckedChange={(checked) => handleSettingChange("bardEnabled", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">GitHub Copilot Integration</Label>
                <p className="text-sm text-muted-foreground">Monitor and control Copilot usage and code uploads</p>
              </div>
              <Switch
                checked={settings.copilotEnabled}
                onCheckedChange={(checked) => handleSettingChange("copilotEnabled", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Compliance Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Compliance Actions
          </CardTitle>
          <CardDescription>Configure how the system responds to compliance violations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Auto-blocking</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically block uploads that exceed critical risk thresholds
                </p>
              </div>
              <Switch
                checked={settings.autoBlocking}
                onCheckedChange={(checked) => handleSettingChange("autoBlocking", checked)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Warning-only Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Show warnings but allow all uploads (overrides auto-blocking)
                </p>
              </div>
              <Switch
                checked={settings.warningOnly}
                onCheckedChange={(checked) => handleSettingChange("warningOnly", checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Settings
        </Button>
      </div>
    </div>
  )
}
