# DAYCER × CUSHION · Tokenomics Studio

투자 브리핑용 인터랙티브 토크노믹스 대시보드 (정적 사이트, GitHub Pages).

- 배포 주소: https://psymaxkr.github.io/cushion/
- 사이트 파일: 저장소 루트 `index.html` (React·Recharts·Lucide·Tailwind를 미리 빌드해 한 파일에 포함, 외부 CDN 없음)
- 원본: `source/src/original.html` / 편집용 소스: `source/src/app.jsx`, `source/src/style.css`

## 수정 후 재배포
```
cd source && npm install && npm run build   # 루트 index.html 재생성
git add -A && git commit -m "update" && git push
```
push 후 1~2분 내 같은 주소에 반영됩니다.
