---
title: "마인크래프트 에듀케이션 RPG"
summary: "Minecraft Education Edition을 활용한 스토리 RPG 게임 개발. 동선 최적화 및 밸런싱을 통한 사용자 경험 개선 프로젝트."
date: 2018-11-30
category: Software
tags: ["Game Logic", "MakeCode", "Team Leader", "Level Design"]
role: "팀장 · 기획 · 코딩"
team: "팀 하현달"
featured: false
image: "/images/thumb-minecraft-education.webp"
---
## 1. 프로젝트 개요
'마인크래프트 에듀크리에이터 콘테스트' 출품을 위해 개발된 RPG 장르의 미니게임입니다
단순한 맵 제작을 넘어, MakeCode와 커맨드 블록을 활용하여 **직업 시스템, 경제(상점), 전투 로직**을 소프트웨어적으로 구현했습니다

- **진행 기간:** 2018.10.12 ~ 2018.11.30
- **역할:** 팀장(Team Leader), 기획, 코딩 및 커맨드 구현
- **성과:** 마인크래프트 에듀크리에이터 콘테스트 SW 분야 **우수상 수상**

## 2. 주요 기능 및 구현
팀 '하현달'을 결성하여 기획부터 개발까지 전 과정을 주도했습니다.

### A. 클래스 및 전투 시스템
플레이어가 게임 시작 시 **4가지 직업(탱커, 전사, 아처, 법사)** 중 하나를 선택하도록 구현했습니다. 각 클래스에 맞는 장비가 지급되며, 몬스터 처치 시 포인트를 획득하는 로직을 작성했습니다.

### B. 경제 및 강화 시스템
획득한 포인트를 변수로 관리하여 상점 시스템을 구축했습니다.
- 소모품 구매 및 장비 강화 기능 구현
- 화폐 단위 데이터 연동

## 3. 기술적 도전과 해결 (Engineering Approach)

### 사용자 경험을 고려한 동선 최적화
초기 기획 단계에서 맵이 방대해짐에 따라 플레이어의 이동 시간이 길어지는 문제가 예상되었습니다.
- **문제 정의:** 상점과 전투 구역 간의 동선 낭비 발생
- **해결:** 특정 구역 진입 트리거와 텔레포트 로직을 활용해 플레이어의 동선을 최소화하도록 맵과 로직을 설계했습니다.

### 데이터 기반의 난이도 밸런싱
개발자 입장에서는 쉽지만, 처음 접하는 플레이어에게는 보스전이 어렵다는 피드백을 확인했습니다.
- **해결:** 수백 번의 반복 테스트(Iterative Testing)를 수행하여 보스 몬스터의 체력과 공격 패턴을 조정했습니다. 이를 통해 플레이어가 몰입할 수 있는 적정 난이도를 찾아냈습니다.

## 4. 개발 프로세스
- **기획:** MMORPG에서 스토리 기반 RPG로 프로젝트 방향성 구체화
- **협업:** Discord를 활용한 비대면 회의 및 자료 공유, 역할 분담(건축, 코딩, 스토리 등)
- **설계:** 종이 프로토타이핑을 통해 게임의 동선과 구성을 미리 시각화하여 개발 효율 증대

---

## 5. 데모 영상
<div class="aspect-video w-full mt-4">
  <iframe 
    class="w-full h-full rounded-xl"
    src="https://www.youtube.com/embed/sXFeypoqifY" 
    title="Minecraft RPG Project" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
