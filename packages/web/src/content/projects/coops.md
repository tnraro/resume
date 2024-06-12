---
title: COOPS
begin: 2021-04-03
end: 2021-06-15
team: 2
github: https://github.com/hoshi-hitsuji/coops
stack:
  - Next.js
  - Docker
  - Redis
---

게이머를 위한 익명 음성 대화 서비스입니다. 일시적인 모임에서 번거로운 절차나 개인정보 노출 없이 빠르게 음성 대화에 참여할 수 있습니다.

- 디자인과 개발 담당
  - [디자인 (Figma)](https://www.figma.com/design/3DEVGLyLa21yYCE7kU8Nr0/coops?node-id=12-806&t=xLZtTXKOK5VU8qly-1)
- AWS EC2에서 2개월 간 운영
- 음성 대화 구현
  - 음성 대화는 WebRTC를 이용해 구현했습니다. 하지만, ICE 서버를 따로 구축하지 않아, 사용자의 네트워크 환경에 따라 연결되지 않는 문제가 존재합니다.