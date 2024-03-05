---
title: 마이크로프론트엔드 (Micro Frontend)
description: 마이크로프론트엔드 (Micro Frontend)
sidebar:
  order: 2
---

### Micro Frontend란?

Micro Frontends의 기본 아이디어는 웹사이트나 웹 앱을 독립된 팀이 소유한 기능의 구성으로 생각하는 것입니다 .
각 팀에는 자신이 관심을 갖고 전문화하는 고유한 비즈니스 또는 임무 영역이 있습니다.
팀은 교차 기능적(cross functional)이며 데이터베이스에서 사용자 인터페이스에 이르기까지 end-to-end로 기능을 개발합니다 .
![Micro Frontend](../../../assets/micro-frontend1.png)

### Micro Frontend의 등장 배경

Martin Fowler는 Micro-Frontend 아키텍처를 "독립적으로 제공 가능한 프런트엔드 애플리케이션이 더 큰 전체로 구성되는 아키텍처 스타일"로 정의했습니다.
간단히 말해 Micro-Frontend는 웹페이지의 일부입니다(전체 페이지가 아님).
Micro-Frontend 아키텍처에는 하나 이상의 Micro-Frontend를 호스팅할 수 있는 "호스트" 또는 "컨테이너" 페이지가 있습니다.
호스트/컨테이너 페이지는 자체 Micro-Frontend 구성 요소 중 일부를 공유할 수도 있습니다.

### Micro Frontend 이점

- 더 작고, 더 응집력 있고 유지 관리 가능한 코드베이스
- 분리되고 자율적인 팀을 갖춘 보다 확장 가능한 조직
- 이전보다 더 점진적인 방식으로 프런트엔드의 일부를 업그레이드, 업데이트 또는 다시 작성할 수 있는 기능

### Micro Frontend 핵심 아이디어

- 기술에 구애 받지 마십시오.
  - 각 팀은 다른 팀과 협력할 필요 없이 스택을 선택하고 업그레이드할 수 있어야 합니다.
- 팀 코드 격리
  - 모든 팀이 동일한 프레임워크를 사용하더라도 런타임을 공유하지 마십시오. 자체 포함된 독립적인 앱을 구축하세요. 공유 상태나 전역 변수에 의존하지 마세요.
- 팀 접두사 설정
  - 아직 격리가 불가능한 경우 명명 규칙에 동의합니다. (충돌을 방지하고 소유권을 명확히 하기 위한 네임스페이스 CSS, 이벤트, 로컬 저장소 및 쿠키)
- 사용자 정의 API보다 기본 브라우저 기능을 선호합니다.
  - 글로벌 PubSub 시스템을 구축하는 대신 브라우저 이벤트를 사용하여 통신합니다 . 정말로 팀 간 API를 구축해야 한다면 가능한 한 단순하게 유지하십시오.
- 탄력적인 사이트 구축
  - JavaScript가 실패했거나 아직 실행되지 않은 경우에도 기능이 유용해야 합니다. 유니버설 렌더링 및 점진적 향상을 사용하여 인지 성능을 향상시킵니다.

### Micro Frontend 이점

### 관련 자료 링크

- https://wire.lgcns.com/confluence/pages/viewpage.action?pageId=826676590
- https://wire.lgcns.com/confluence/pages/viewpage.action?pageId=827415576
