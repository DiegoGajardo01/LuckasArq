"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  topic: string
  message: string
}

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    topic: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Prevent page scroll to top
    e.stopPropagation()

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.topic || !formData.message) {
      toast({
        title: t.contact.messages.error,
        description: t.contact.messages.errorRequired,
        variant: "destructive",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t.contact.messages.error,
        description: t.contact.messages.errorEmail,
        variant: "destructive",
      })
      return
    }

    // Message length validation (max 1000 characters, min 10)
    if (formData.message.length > 1000) {
      toast({
        title: t.contact.messages.error,
        description: t.contact.messages.errorMessageLength,
        variant: "destructive",
      })
      return
    }
    if (formData.message.length < 10) {
      toast({
        title: t.contact.messages.error,
        description: "El mensaje debe tener al menos 10 caracteres.",
        variant: "destructive",
      })
      return
    }

    // Validate name length
    if (formData.name.length < 2 || formData.name.length > 255) {
      toast({
        title: t.contact.messages.error,
        description: "El nombre debe tener entre 2 y 255 caracteres.",
        variant: "destructive",
      })
      return
    }

    // Validate topic is from allowed values
    const allowedTopics = [
      'architectural-design',
      'interior-design',
      'housing-regularization',
      '3d-surveys',
      'electrical-projects',
      'other'
    ]
    if (!allowedTopics.includes(formData.topic)) {
      toast({
        title: t.contact.messages.error,
        description: "Por favor selecciona un tema válido.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Add delay to show "Enviando..." message
    await new Promise(resolve => setTimeout(resolve, 500))

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: t.contact.messages.success,
          description: t.contact.messages.successDescription,
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          topic: "",
          message: "",
        })
      } else {
        // Try to get error message from response
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData.error || t.contact.messages.errorSend
        
        // Handle rate limiting
        if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After')
          toast({
            title: t.contact.messages.error,
            description: retryAfter 
              ? `Demasiadas solicitudes. Intenta de nuevo en ${retryAfter} segundos.`
              : "Demasiadas solicitudes. Por favor espera antes de intentar de nuevo.",
            variant: "destructive",
          })
        } else {
          toast({
            title: t.contact.messages.error,
            description: errorMessage,
            variant: "destructive",
          })
        }
      }
    } catch {
      // Network errors or other issues
      toast({
        title: t.contact.messages.error,
        description: t.contact.messages.errorSend,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4">
      <Card className="shadow-lg">
        <CardHeader className="text-center px-4 sm:px-6">
          <CardTitle className="text-2xl sm:text-3xl font-bold text-foreground">{t.contact.title}</CardTitle>
          <CardDescription className="text-sm sm:text-base text-muted-foreground mt-2">
            {t.contact.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 sm:px-6 pb-6">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                {t.contact.form.name}
              </Label>
              <Input
                id="name"
                type="text"
                placeholder={t.contact.form.namePlaceholder}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                {t.contact.form.email}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t.contact.form.emailPlaceholder}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                {t.contact.form.phone}
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t.contact.form.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium">
                {t.contact.form.city}
              </Label>
              <Input
                id="city"
                type="text"
                placeholder={t.contact.form.cityPlaceholder}
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic" className="text-sm font-medium">
                {t.contact.form.topic}
              </Label>
              <select 
                value={formData.topic} 
                onChange={(e) => handleInputChange("topic", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">{t.contact.form.topicPlaceholder}</option>
                <option value="architectural-design">{t.contact.form.topics.architecturalDesign}</option>
                <option value="interior-design">{t.contact.form.topics.interiorDesign}</option>
                <option value="housing-regularization">{t.contact.form.topics.housingRegularization}</option>
                <option value="3d-surveys">{t.contact.form.topics.surveys3d}</option>
                <option value="electrical-projects">{t.contact.form.topics.electricalProjects}</option>
                <option value="other">{t.contact.form.topics.other}</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                {t.contact.form.message}
              </Label>
              <Textarea
                id="message"
                placeholder={t.contact.form.messagePlaceholder}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full min-h-[120px] resize-none"
                maxLength={1000}
                required
              />
              <div className="text-right text-sm text-muted-foreground">{formData.message.length}/1000 {t.contact.form.characters}</div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              style={{ 
                backgroundColor: 'hsl(0, 0%, 9%)', 
                color: 'hsl(0, 0%, 98%)',
                border: 'none'
              }}
              disabled={isLoading} 
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.contact.form.sending}
                </>
              ) : (
                t.contact.form.send
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
