"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThemeExample() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Ejemplo de Sistema de Colores</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Título Principal</CardTitle>
            <CardDescription className="text-muted-foreground">
              Descripción con color muted
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">Texto normal con color foreground</p>
            <Button className="mt-4">Botón Primario</Button>
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle className="text-secondary-foreground">Card Secundario</CardTitle>
            <CardDescription className="text-muted-foreground">
              Card con fondo secundario
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="mt-4">Botón Outline</Button>
          </CardContent>
        </Card>

        <Card className="bg-accent">
          <CardHeader>
            <CardTitle className="text-accent-foreground">Card Accent</CardTitle>
            <CardDescription className="text-muted-foreground">
              Card con fondo accent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" className="mt-4">Botón Destructive</Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Botones de Ejemplo</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    </div>
  )
}
