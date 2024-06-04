---
title: 소프트웨어 래스터라이저
begin: 2020-06-17
end: 2020-07-18
github: https://github.com/tnraro/graphics
website: https://graphics-phi.vercel.app/
stack:
  - JavaScript
---

3D를 픽셀(래스터 이미지)로 변환하는 Rasterizer를 JavaScript로 구현한 프로젝트입니다. 수학적 원리 학습과 구현을 목표로 했습니다. 질량 중심 좌표계로 삼각형에 색을 채우는 래스터라이저, 폴리곤을 동적으로 삼각형으로 자르기, 텍스처 적용, z-culling 등을 구현했습니다.

- 렌더링 속도 개선
  - 매 프레임 새로 생성하는 객체를 최소화했습니다.
  - 4.5만 개의 삼각형을 그리는 속도가 350 ms에서 50 ms로 감소했습니다.