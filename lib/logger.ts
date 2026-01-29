import "server-only";

import log4js from "log4js";
import path from "path";

const logPath = path.join(process.cwd(), "logs/app.log");
// NOTE: 通常はNODE_ENVを利用する。Next.jsで制御されているため、挙動確認の目的でLOGGER_ENVを利用している
const isProd = process.env.LOGGER_ENV === "production";
const level = isProd ? "info" : "debug";

console.log(level);

log4js.configure({
  appenders: {
    console: { type: "stdout" },
    file: {
      type: "file",
      filename: logPath,
      maxLogSize: 10485760, // 10MB
      backups: 3,
      compress: true,
    },
  },
  categories: {
    default: { appenders: ["console"], level },
    app: { appenders: ["console", "file"], level },
  },
});

export const logger = log4js.getLogger();
export const appLogger = log4js.getLogger("app");
