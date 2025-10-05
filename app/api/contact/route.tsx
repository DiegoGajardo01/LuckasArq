import { type NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, city, topic, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !topic || !message) {
      return NextResponse.json({ error: "All required fields must be provided" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json({ error: "Invalid phone format" }, { status: 400 })
    }

    // Sanitize input data
    const sanitizedData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      city: city?.trim() || null,
      topic: topic.trim(),
      message: message.trim(),
      created_at: new Date().toISOString()
    }

    // Insert data into Supabase
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([sanitizedData])
      .select()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to save contact form" }, { status: 500 })
    }

    return NextResponse.json({ 
      message: "Contact form submitted successfully", 
      id: data?.[0]?.id 
    }, { status: 200 })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
