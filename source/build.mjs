// Rebuilds ../index.html from src/app.jsx + src/style.css (self-contained, no CDN).
import {execSync} from 'node:child_process';
import fs from 'node:fs';
const sh=c=>execSync(c,{stdio:'inherit',cwd:import.meta.dirname});
sh('npx tailwindcss -c tailwind.config.js -i src/style.css -o build/style.css --minify');
sh(`npx esbuild src/app.jsx --bundle --minify --format=iife --jsx=transform --define:process.env.NODE_ENV='"production"' --outfile=build/app.js`);
const css=fs.readFileSync(import.meta.dirname+'/build/style.css','utf8');
const js=fs.readFileSync(import.meta.dirname+'/build/app.js','utf8').replaceAll('</script','<\\/script');
const out=import.meta.dirname+'/../index.html';
let h=fs.readFileSync(out,'utf8');
h=h.slice(0,h.indexOf('<style>')+7)+css+h.slice(h.indexOf('</style>'));
const a=h.indexOf('<script>',h.indexOf('</style>'))+8; // 번들 안의 '<script>' 문자열과 혼동하지 않도록 </style> 뒤 첫 태그 사용
h=h.slice(0,a)+js+h.slice(h.lastIndexOf('</script></body>'));
fs.writeFileSync(out,h); console.log('index.html rebuilt');
