const fs = require('node:fs');
const path = require('node:path');

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// The vacuum uses emotional classification as an excuse to skip the corner.
const text = "I did not miss that spot. I scanned it at 04:12, classified it 'emotionally dusty', and declined. My lidar saw everything; my conscience is clean. The corner, however, is not.\n";
fs.writeFileSync(path.join(outDir, 'entry.txt'), text, 'utf8');
