---
title: Elysion
begin: 2022-11-18
end: 2023-02-02
stack:
  - Next.js
  - EdgeDB
---

이벤트용 미니 게임 모음

- 웹 페이지와 DB간 레이턴시 개선
  - 문제: 페이지와 DB 간 물리적 거리가 멂
  - 시도: 페이지와 DB를 개인 서버로 옮김
  - 발생한 문제: CI/CD를 다시 구축할 필요 발생(기존엔 Vercel을 이용함)
  - 해결: GitHub Actions에서 rsync로 개인 서버에 배포
- 테스트 속도 개선
  - 문제: GitHub-hosted runner에서 jest가 예상보다 느림
  - 시도: jest, vitest, swc/jest, bun:test를 각각 벤치마크
  - 결과: jest (기준), vitest (2배), swc/jest (5배), bun:test (100배)
  - 결론: 당시 bun은 jest 기능을 온전히 지원하지 않음. 따라서 swc/jest를 선택
  - 테스트 시간 2452 ms -> **542 ms**
- 웹폰트 로드 속도 개선
  - 문제: dynamic subset을 지원하지 않는 next/font/local
  - 해결: 폰트가 제공하는 dynamic subset(css)을 직접 임포트
  - 결과: 페이지 당 평균 약 25 kB의 서브셋을 5~6개 로드
  - 웹폰트 크기 2.2 MB -> **150 kB(각 25 kB)**
