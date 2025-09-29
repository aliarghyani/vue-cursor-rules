import { readdirSync, readFileSync, statSync } from "fs";
import { join, extname } from "path";

const ROOT = ".cursor/rules";
const MAX_WARN_BYTES = 4096;
const MAX_ERROR_BYTES = 8192;

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function isAsciiOnly(buf) {
  for (const b of buf) {
    // Allow: tab (9), LF (10), CR (13), and printable ASCII 32..126
    if (b !== 9 && b !== 10 && b !== 13 && (b < 32 || b > 126)) return false;
  }
  return true;
}

const files = walk(ROOT).filter((p) => extname(p) === ".mdc");
let ok = true;
let total = 0;

for (const f of files) {
  const buf = readFileSync(f);
  const size = buf.byteLength;
  total += size;

  if (!isAsciiOnly(buf)) {
    console.warn(`[encoding] ${f} contains non-ASCII characters`);
  }

  if (size > MAX_ERROR_BYTES) {
    console.error(`[size] ${f} is ${size} bytes (> ${MAX_ERROR_BYTES})`);
    ok = false;
  } else if (size > MAX_WARN_BYTES) {
    console.warn(`[warn] ${f} is ${size} bytes (> ${MAX_WARN_BYTES})`);
  }
}

console.log(`[ok] ${files.length} rule files scanned. Total: ${total} bytes`);
if (!ok) process.exit(1);
