import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, role } = body;

    // Server-side validation
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!["adopter", "creator", "both"].includes(role)) {
      return NextResponse.json(
        { success: false, message: "Invalid role." },
        { status: 400 }
      );
    }

    // Graceful fallback when Supabase is not configured
    if (!isSupabaseConfigured()) {
      console.log("[waitlist] Supabase not configured. Would have saved:", {
        email,
        role,
      });
      return NextResponse.json({
        success: true,
        message: "You're in! We'll notify you when Bibimb.ai launches.",
      });
    }

    // Insert into Supabase
    const { error } = await supabase!.from("waitlist").insert({
      email: email.toLowerCase().trim(),
      role,
    });

    if (error) {
      // Handle duplicate email (Postgres unique constraint violation)
      if (error.code === "23505") {
        return NextResponse.json(
          { success: true, message: "You're already on the list! 🎉" },
          { status: 409 }
        );
      }
      console.error("[waitlist] Supabase error:", error);
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You're in! We'll notify you when Bibimb.ai launches. 🎉",
    });
  } catch (error) {
    console.error("[waitlist] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
