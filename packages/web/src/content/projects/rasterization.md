---
title: 소프트웨어 래스터라이저
begin: 2020-06-17
end: 2020-07-18
github: https://github.com/tnraro/graphics
website: https://graphics-phi.vercel.app/
stack:
  - JavaScript
---

3D 모델을 CPU로 렌더링하는 소프트웨어 래스터라이저를 JavaScript로 구현

수학적 원리의 학습과 구현이 목표

- 질량 중심 좌표계로 삼각형에 색을 채우는 레스터라이저 구현
- 폴리곤을 동적으로 삼각형으로 자르는 기능 구현
- 텍스처 로더 구현
- z buffer를 추가하여 z-culling 구현

- 렌더링 속도 개선
  - 매 프레임 새로 생성하는 객체 최소화
  - 4.5만 개의 삼각형 그리기 속도 350 ms -> **50 ms**