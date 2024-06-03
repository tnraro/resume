---
title: polypong
github: https://github.com/tnraro/polypong
website: https://polypong.tnraro.com/
stack:
  - bun
  - ElysiaJS
  - Matter.js (물리 엔진)
begin: 2024-05-25
end: 2024-05-31
priority: 1
---

여러 명이 동시에 즐길 수 있는 온라인 핑퐁입니다.

- WebSocket을 통해 연결됨.
- 서버에서 물리 계산을 수행하고 클라이언트에 위치만 전송하는 방식으로 구현.
- 최초 릴리즈에는 1초에 60번 전체 상태를 전송함.
- diff 계산으로 변경 점만 전송하도록 수정. 순서에 민감한 점은 논리 시계를 사용하면 해결할 수 있지만 구현하진 않음.
- 클라이언트에서 선형 보간을 하도록 수정하여, 서버에서 1초에 30번 상태를 전송해도 자연스럽게 보이게 됨.