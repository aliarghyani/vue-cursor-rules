import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const ROOT = ".cursor/rules";
const MAX_LINES = 1000;

function walk(dir){
  return readdirSync(dir).flatMap(f=>{
    const p = join(dir,f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const files = walk(ROOT).filter(p=>p.endsWith(".mdc"));
let ok = true;

for (const f of files){
  const txt = readFileSync(f,"utf8");
  const lines = txt.split(/\r?\n/).length;
  if (lines > MAX_LINES){
    console.error(`✖ ${f} has ${lines} lines (>${MAX_LINES})`);
    ok = false;
  }
}
if (!ok) process.exit(1);
console.log(`✓ ${files.length} rule files checked.`);