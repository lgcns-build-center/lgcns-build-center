---
title: 프론티어란?
description: 프론티어 설명
sidebar:
  order: 1
---

### What is Frontier?

Frontier는 [Micro Frontend](https://micro-frontends.org/) 아키텍쳐를 기반으로 독립적인 모듈 단위 화면을 손쉽게 구축하고 통합할 수 있는 Super App Framework<sup>[1](#Framwork)</sup>입니다.

### Why Frontier?

##### Super App 핵심기능

- 각 모듈별 개발/서비스 가능, **독립 빌드/배포구조**
- **동일한 UI/UX**를 통한 일관된 사용자 경험
- **공통 모듈**의 효율적 관리 및 손쉬운 활용
- 서비스간 **장애 전파 방지** 및 영향도 최소화

##### Frontier 구현기술

- **Core**
  - Module Federation
  - Static Asset Store
  - Safe Component
  - Monorepo
- **UI**
  - Design System
  - Build Optimization
- **API**
  - API Over/Under Fetch
  - BFF<sup>[2](#BFF)</sup> Pattern

---

[<a name="Framwork">1</a>] 소프트웨어를 개발할 때 빠르게 완성하는데 도움을 주는 반제품 상태의 소프트웨어 구성 요소 모음 (라이브러리, API, 코딩 규칙 등)<br>
[<a name="BFF">2</a>] Backend For Frontend의 약자로 화면과 각 업무별 서버가 직접 연결되지 않고, 각 화면에 맞게 구축된 중간 서버를 통해 필요한 정보와 기능을 제공하는 아키텍처 구성 방식
