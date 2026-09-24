// Wraps app.html (the page body, as published to claude.ai) into a standalone
// index.html you can open directly in a browser.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const body = readFileSync(join(here, 'app.html'), 'utf8');
const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}[hidden]{display:none!important}</style>
</head>
<body>
${body}
</body>
</html>
`;
writeFileSync(join(here, 'index.html'), html);
console.log('wrote prototype/index.html');
