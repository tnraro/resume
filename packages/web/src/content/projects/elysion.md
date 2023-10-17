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
  - 페이지는 Vercel에, DB는 개인 서버에 있어서 둘 간의 거리를 줄일 필요가 있었다. 페이지를 Vercel에서 개인 서버로 옮기면서 CI/CD도 다시 구축할 필요가 생겼다. 처음에는 Drone CI를 사용했으나, 러너를 굳이 개인 서버에 둘 필요가 없어서 GitHub Actions와 rsync를 사용했다.
- 테스트 속도 개선
  - GitHub-hosted runner에서 jest가 생각보다 느렸다. jest, swc/jest(5배), bun:test(100배), vitest(2배)를 각각 벤치마크했다. 다만 bun은 jest 기능을 온전히 지원하지 않았기 때문에 drop-in replacement가 가능한 swc/jest로 변경하였다. 테스트 시간 2452 ms -> **542 ms**
- 웹폰트 로드 속도 개선
  - next/font/local은 dynamic subset을 지원하지 않아서 2.2 MB나 되는 Pretendard Variable 폰트를 그대로 쓰고 있었다. 최적화가 안된다면 굳이 Next.js의 도움을 받을 필요가 없어서, Pretendard에서 제공하는 dynamic subset(css)을 그대로 썼다. 페이지마다 달랐지만 평균적으로 25 kB 정도의 서브셋을 5~6개 정도 로드했다. 웹폰트 크기 2.2 MB -> **150 kB(각 25 kB)**
