// lib/payloadClient.ts
import payload, { Payload } from "payload";
import config from "@/payload/payload.config";

// Caching mechanism to ensure Payload is initialized only once
let cached = (global as any).payload;

if (!cached) {
  cached = (global as any).payload = {
    client: null as Payload | null,
    promise: null as Promise<Payload> | null,
  };
}

export async function getPayloadClient(): Promise<Payload> {
  // 1. If we already have the client, return it immediately.
  if (cached.client) {
    return cached.client;
  }

  // 2. If there's no promise, start the initialization.
  if (!cached.promise) {
    console.log("Payload init started...");
    cached.promise = payload.init({ config });
  }

  try {
    // 3. Wait for the initialization to complete.
    const client = await cached.promise;
    cached.client = client;
    return client;
  } catch (e) {
    // 4. If initialization fails, reset the promise to allow a retry on the next request.
    cached.promise = null;
    console.error("Payload initialization failed:", e);
    throw e;
  }
}
