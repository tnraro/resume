---
title: dht22
github: https://github.com/tnraro/dht22monitor
website: https://dev.tnraro.com/dht22/
begin: 2023-05-22
end: 2023-06-05
stack:
  - C
  - TypeScript
---

DHT22 센서로 방의 온습도를 측정하는 툴이다.

- 센서에서 값 읽기
  - 대부분의 DHT22 드라이버가 deprecated된 sysfs에 의존했다. 따라서 chardev를 이용하는 libgpiod로 직접 값을 읽었다.
- 값 저장하고 사용하기
  - 읽은 데이터는 시간(4), 습도(2), 온도(2) 총 8 Bytes를 단일 파일에 축적시켰다. 클라이언트에서는 해당 파일을 Range 헤더와 함께 직접 요청해서 스트리밍할 수 있다.
  - 불러온 데이터는 정점으로 변환해 Canvas에 그렸다.