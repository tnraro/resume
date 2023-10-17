---
title: 잔소리 봇
github: https://github.com/tnraro/nagging-bot
begin: 2023-08-07
end: 2023-08-11
is-hidden: true
---

- 한 시간에 한 번씩 잔소리 해주는 봇. 주기적으로 스트레칭 하려고 만들었다.
- GitHub Actions의 schedule event와 Discord webhook만으로 [구현](https://github.com/tnraro/nagging-bot/blob/main/.github/workflows/do.yml)했다.
- GitHub Action은 인프라 없이 구현할 수 있어서 선택했으나, 정확한 정시에 울리지 않아 평균 20분, 최대 58분까지 늦어지는 문제를 겪었다.