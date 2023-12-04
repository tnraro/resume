---
title: pickle
github: https://github.com/tnraro/pickle
begin: 2023-08-21
end: 2023-08-28
stack:
  - Svelte
  - Scss
is-hidden: true
---
- Picrew의 조합을 저장하는 UserScript
- Svelte를 배우기 위한 토이 프로젝트로 시작
- Svelte의 action 덕분에 [focus trap](https://github.com/tnraro/pickle/blob/main/packages/ui/src/actions/focusTrap.ts)을 쉽게 재사용 가능하게 구현할 수 있었다.
- 번들 크기 감소
	- @mixin을 남용하던 코드를 수정해서 스타일 크기를 대폭 줄였다. 5.0 kB -> **2.2 kB**
