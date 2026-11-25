import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deleted the file, pushed to main, and emailed your boss — but in my defense, I did all three very efficiently.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry);
