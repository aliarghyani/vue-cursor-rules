import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";

const ROOT = ".cursor/rules";
function walk(dir){
  return readdirSync(dir).flatMap(f=>{
    const p = join(dir,f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const files = walk(ROOT).filter(p=>p.endsWith(".mdc"));

let totalChars = 0;
for (const f of files){
  const txt = readFileSync(f,"utf8");
  totalChars += txt.length;
}
console.log(`Approx total chars across rules: ${totalChars}`);
console.log("Rule of thumb: keep rulesets compact; prefer agent-select rules.");