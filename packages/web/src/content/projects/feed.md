---
title: feed
github: https://github.com/tnraro/feed
website: https://feed.tnraro.com/
begin: 2022-02-25
end: 2023-03-16
stack:
  - Meilisearch
  - HTML
is-hidden: true
---

관심사의 새소식을 구독하는 개인용 서비스

- Meilisearch로 검색 구현
  - Meilisearch는 오픈소스 검색 엔진으로 별도의 플러그인 없이 한국어를 지원해서 선택
  - 또한 API 별로 권한 설정이 가능해서 별도의 중간 서버 없이 클라이언트에서 읽기 권한만 있는 Meilisearch API를 직접 호출하게 구현
