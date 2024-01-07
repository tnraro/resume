---
title: COOPS
begin: 2021-04-03
end: 2021-06-15
priority: 0
team: 2
github: https://github.com/hoshi-hitsuji/coops
website: https://coops.tnraro.com/
stack:
  - Next.js
  - Docker
  - Redis
---

게이머를 위한 익명 음성 대화 서비스

대상: 레이드, 랜덤 팀 매치 등 일시적인 협력 관계에서 개인정보 유출을 최소화하고 싶은 게이머

- 디자인과 개발을 담당 (<a href="https://www.figma.com/file/3DEVGLyLa21yYCE7kU8Nr0/coops?node-id=12%3A806" rel="noreferrer external" target="_blank">Figma 링크</a>)
- AWS EC2에서 2개월 간 운영. 이후 개인 서버로 이주
- ICE 서버를 구축하지 않아, 사용자의 네트워크 환경에 따라 연결되지 않는 문제 존재