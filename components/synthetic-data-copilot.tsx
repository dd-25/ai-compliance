"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Bot, Database, Send, Sparkles, Copy, Download } from "lucide-react"

const exampleQueries = [
  "Generate 1000 synthetic customer records with PII anonymization",
  "Create test data for financial transactions with GDPR compliance",
  "Generate synthetic employee data for HR system testing",
  "Create anonymized healthcare records for ML model training",
]

const copilotResponses = [
  {
    query: "Generate synthetic customer data",
    response:
      "I've generated 500 synthetic customer records with the following features:\n\n• Names: Realistic but fictional names\n• Emails: Valid format with synthetic domains\n• Addresses: Real geographic locations, fictional street addresses\n• Phone numbers: Valid format, non-functional numbers\n• Purchase history: Realistic patterns based on demographics\n\nAll data is GDPR compliant with no real PII exposed. Would you like me to export this as CSV or JSON?",
    timestamp: "2024-01-15 14:30:22",
  },
  {
    query: "How do I ensure HIPAA compliance in synthetic data?",
    response:
      "For HIPAA-compliant synthetic data generation:\n\n1. **Safe Harbor Method**: Remove all 18 HIPAA identifiers\n2. **Statistical Disclosure Control**: Ensure no individual can be re-identified\n3. **Differential Privacy**: Add mathematical noise to prevent inference\n4. **Expert Determination**: Have qualified statistician verify de-identification\n\nI can help generate synthetic healthcare data using these methods. What type of medical data do you need?",
    timestamp: "2024-01-15 14:25:18",
  },
]

export function SyntheticDataCopilot() {
  const [volumeSlider, setVolumeSlider] = useState([1000])
  const [sensitivitySlider, setSensitivitySlider] = useState([50])
  const [query, setQuery] = useState("")
  const [responses, setResponses] = useState(copilotResponses)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSendQuery = async () => {
    if (!query.trim()) return

    setIsGenerating(true)

    // Simulate API call
    setTimeout(() => {
      const newResponse = {
        query: query,
        response:
          "I understand you want to generate synthetic data. Let me help you create compliant, realistic test data that maintains statistical properties while protecting privacy. What specific data fields do you need?",
        timestamp: new Date().toLocaleString(),
      }
      setResponses([newResponse, ...responses])
      setQuery("")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          Synthetic Data & SAS Copilot Assistant
        </CardTitle>
        <CardDescription>AI-powered synthetic data generation and compliance assistance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Synthetic Data Generator */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-4 w-4" />
              <h4 className="text-sm font-medium text-gray-700">Synthetic Data Generator</h4>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="volume-slider">Data Volume: {volumeSlider[0].toLocaleString()} records</Label>
                <Slider
                  id="volume-slider"
                  min={100}
                  max={10000}
                  step={100}
                  value={volumeSlider}
                  onValueChange={setVolumeSlider}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sensitivity-slider">Sensitivity Level: {sensitivitySlider[0]}%</Label>
                <Slider
                  id="sensitivity-slider"
                  min={0}
                  max={100}
                  step={10}
                  value={sensitivitySlider}
                  onValueChange={setSensitivitySlider}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Public</span>
                  <span>Internal</span>
                  <span>Confidential</span>
                  <span>Restricted</span>
                </div>
              </div>

              <div className="grid gap-2 md:grid-cols-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Sparkles className="h-4 w-4 mr-1" />
                  Generate Data
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-1" />
                  Export CSV
                </Button>
              </div>

              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="default" className="bg-green-600">
                    COMPLIANT
                  </Badge>
                  <span className="text-sm font-medium text-green-900">Ready for Generation</span>
                </div>
                <p className="text-xs text-green-700">Configuration meets GDPR, HIPAA, and CCPA requirements</p>
              </div>
            </div>
          </div>

          {/* Copilot Assistant */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-4 w-4" />
              <h4 className="text-sm font-medium text-gray-700">Copilot Assistant</h4>
            </div>

            {/* Example Use Cases */}
            <div className="space-y-2">
              <Label className="text-xs font-medium text-gray-600">Example Queries:</Label>
              <div className="space-y-1">
                {exampleQueries.map((example, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="h-auto p-2 text-left justify-start text-xs text-gray-600 hover:text-gray-900"
                    onClick={() => setQuery(example)}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Query Input */}
            <div className="space-y-2">
              <Label htmlFor="copilot-query">Ask the Copilot:</Label>
              <div className="flex gap-2">
                <Textarea
                  id="copilot-query"
                  placeholder="How can I generate GDPR-compliant synthetic customer data?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[80px] resize-none"
                />
                <Button onClick={handleSendQuery} disabled={isGenerating || !query.trim()} className="self-end">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Response Output */}
            <div className="space-y-2">
              <Label className="text-xs font-medium text-gray-600">Copilot Responses:</Label>
              <ScrollArea className="h-64 border border-gray-200 rounded-lg">
                <div className="p-3 space-y-4">
                  {isGenerating && (
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4 text-blue-600 animate-pulse" />
                        <span className="text-sm text-blue-900">Copilot is thinking...</span>
                      </div>
                    </div>
                  )}

                  {responses.map((response, index) => (
                    <div key={index} className="space-y-2">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-gray-600">You asked:</span>
                          <span className="text-xs text-gray-500">{response.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-900">{response.query}</p>
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Bot className="h-4 w-4 text-blue-600" />
                            <span className="text-xs font-medium text-blue-900">Copilot Response:</span>
                          </div>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <Copy className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="text-sm text-blue-900 whitespace-pre-line">{response.response}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
