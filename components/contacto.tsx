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

interface FormData {
  name: string
  email: string
  phone: string
  city: string
  topic: string
  message: string
}

export default function ContactForm() {
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
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa una dirección de email válida.",
        variant: "destructive",
      })
      return
    }

    // Message length validation (max 1000 characters)
    if (formData.message.length > 1000) {
      toast({
        title: "Error",
        description: "El mensaje debe tener menos de 1000 caracteres.",
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
          title: "¡Éxito!",
          description: "Tu mensaje ha sido enviado correctamente.",
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
        throw new Error("Failed to send message")
      }
    } catch {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">Contáctame</CardTitle>
          <CardDescription className="text-muted-foreground">
            Ponte en contacto conmigo para diseño arquitectónico, diseño de interiores, trámites municipales, o cualquier otra
            consulta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nombre y Apellido
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ingresa tu nombre"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu dirección de email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Ingresa tu número de teléfono"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-medium">
                Ciudad
              </Label>
              <Input
                id="city"
                type="text"
                placeholder="Ingresa tu ciudad"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="topic" className="text-sm font-medium">
                Tema
              </Label>
              <select 
                value={formData.topic} 
                onChange={(e) => handleInputChange("topic", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              >
                <option value="">Selecciona un tema</option>
                <option value="architectural-design">Diseño Arquitectónico</option>
                <option value="interior-design">Diseño de Interiores</option>
                <option value="municipal-procedures">Trámites Municipales</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </Label>
              <Textarea
                id="message"
                placeholder="Ingresa tu mensaje (máximo 1000 caracteres)"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full min-h-[120px] resize-none"
                maxLength={1000}
                required
              />
              <div className="text-right text-sm text-muted-foreground">{formData.message.length}/1000 caracteres</div>
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
                  Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
