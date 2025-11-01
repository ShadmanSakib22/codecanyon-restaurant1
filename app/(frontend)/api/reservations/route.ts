import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const payloadRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/reservations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization if required by Payload
          // Authorization: `Bearer ${process.env.PAYLOAD_API_KEY}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!payloadRes.ok) {
      const err = await payloadRes.text();
      return NextResponse.json({ error: err }, { status: 400 });
    }

    const data = await payloadRes.json();
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
