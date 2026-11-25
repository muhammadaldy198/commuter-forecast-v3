// commuter-forecast-v3 — rebuild #3 (26 Nov 2026), written fresh from zero.
// Forecast register throughout: a time (11:12), a temperature (11°C), and
// a direct "you" to the commuter. One mechanism only: the eclipse ends the
// heatwave so the commuter can cross the spice market in cool shade — then
// the shade itself charges one shadow each as payment. One line, 1–140
// characters, written to /output/entry.txt.
// v3 note: new city name Zelith, forecast register kept, single-turn shade toll.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Eclipse at 11:12 ends the heatwave, Zelith cools to 11°C as you cross the spice market — the shade bills you one shadow each.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644);

console.log(`wrote ${outFile} (${LINE.length} characters)`);
console.log(LINE);
