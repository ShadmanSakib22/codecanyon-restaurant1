// (frontend)/api/reservations
import { getPayload } from "payload";
import config from "@/payload/payload.config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const payload = await getPayload({ config });

    const result = await payload.create({
      collection: "reservations",
      data: body,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.error("Reservation creation error:", err);

    // Payload validation errors
    if (err instanceof Error && err.message.includes("validation")) {
      return NextResponse.json(
        { error: "Validation failed", details: err.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
