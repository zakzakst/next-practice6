import { NextResponse } from "next/server";
import { logger, appLogger } from "@/lib/logger";

export const runtime = "nodejs";

// export async function GET() {
//   logger.debug("debug log");
//   logger.info("info log");
//   logger.warn("warn log");
//   logger.error("error log");
//   return NextResponse.json({ ok: true });
// }

export async function GET() {
  const userId = "user-123";
  appLogger.info("API called", { userId });
  try {
    throw new Error("something failed");
  } catch (err) {
    appLogger.debug("LOGGER_ENV=productionだと出力されない");
    appLogger.error("Unexpected error", err);
  }
  return NextResponse.json({ ok: true });
}
