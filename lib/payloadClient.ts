// lib/payloadClient.ts
import payload from "payload";
import config from "@/payload/payload.config";

let initialized = false;

export async function getPayloadClient() {
  if (!initialized) {
    await payload.init({ config });
    initialized = true;
  }
  return payload;
}
