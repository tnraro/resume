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

- 디자인과 개발을 담당했습니다.
- 음성 대화는 WebRTC를 이용해 구현했습니다. 하지만, ICE 서버를 따로 구축하지 않아, 사용자의 네트워크 환경에 따라 연결되지 않는 문제가 존재합니다.
- AWS EC2에서 2개월 간 운영했습니다.