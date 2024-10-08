---
title: SOLID 원칙과 객체지향 설계의 기본기
description: "SOLID 원칙을 바탕으로 객체지향 디자인 패턴을 이해하고 적용하는 방법에 대한 설명" # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2024-10-08 20:18:00 +0900
categories: [Programming, DesignPatterns]
tags: [SOLID, 객체지향, 프로그래밍, 디자인 패턴, 개발]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
---

이 포스트는 '얄팍한 코딩사전' 유튜브 채널의 [SOLID원칙 - 객체지향 디자인 패턴의 기본기](https://youtu.be/4O6k9GN8FPo?si=yoFDSEuufvePQfGp) 강의를 참고하여 작성되었다. 강의는 Java로 진행되지만, 이 포스트에서는 모든 예제 코드를 C++로 작성하였습니다
.

<br>

## 선수 지식
SOLID 원칙을 이해하기 위해서는 Class, object, method 등에 대한 개념을 알고 있어야 한다. 추후에 Class, object, method 관련해서 C++ 개념 정리 관련 포스트를 포스팅할 예정이다.

## SOLID 원칙이란?

SOLID는 객체지향 설계에서 중요한 5가지 원칙을 나타내는 약어이다. 각 원칙은 시스템의 유지보수성, 확장성, 재사용성을 높이기 위해 만들어졌으며, 이 원칙들은 다음과 같다:

1. **SRP (Single Responsibility Principle, 단일 책임 원칙)**: 각 클래스는 하나의 책임만 가져야 한다.
2. **OCP (Open/Closed Principle, 개방-폐쇄 원칙)**: 소프트웨어는 확장에는 열려 있고, 수정에는 닫혀 있어야 한다.
3. **LSP (Liskov Substitution Principle, 리스코프 치환 원칙)**: 자식 클래스는 부모 클래스를 대체할 수 있어야 한다.
4. **ISP (Interface Segregation Principle, 인터페이스 분리 원칙)**: 특정 클라이언트를 위한 인터페이스는 구체적이어야 한다.
5. **DIP (Dependency Inversion Principle, 의존성 역전 원칙)**: 고수준 모듈은 저수준 모듈에 의존해서는 안 된다.

## SRP(단일 책임 원칙)
이제 SOLID 원칙 중 첫 번째인 SRP(Single Responsibility Principle)에 대해 자세히 설명하겠다. SRP에 따라 각 클래스는 하나의 책임(method)만을 가져야 한다 이 원칙은 각 클래스가 "변화의 이유는 단 하나"여야 함을 의미하며, 클래스는 오직 하나의 책임만을 맡고, 그 책임에 대한 이유로만 수정되어야 한다.

이해하기 쉽게 클래스를 IT 직군으로 비유하겠다. `기획자`, `프로그래머`, `디자이너`라는 각각의 클래스가 존재한다. 각각의 클래스는 다음과 같은 핵심 책임을 가지고 있다고 하자.

- 기획자: Planning()
- 프로그래머: Programming()
- 디자이너: Designing()

기획자는 기획을 하는 일(Planning), 프로그래머는 프로그래밍하는 일(Programming), 디자이너는 디자인하는 일(Designing)을 담당하기 위해 존재해야 한다.

SRP를 지키지 않으면 클래스가 여러 책임을 가지게 되어, 한 책임의 변화가 다른 책임에 영향을 미칠 수 있다. 이로 인해 코드를 수정할 때 다른 부분까지 변경해야 하며, 유지보수 및 테스트가 어려워질 수 있다. 따라서 각 클래스는 단일 책임만 맡도록 설계해야 한다.

[SRP를 위반한 코드]

![img1](/assets/img/2024_10_08/SOLID_DesignPatterns/img1.png)
<center>[user_process.h]</center> <br>

![img2](/assets/img/2024_10_08/SOLID_DesignPatterns/img2.png)
<center>[user_process.cpp]</center> <br>


클래스 `UserProcess`는 기획하는 일, 프로그래밍하는 일, 디자인하는 일까지 수행한다. 이러한 클래스는 핵심적인 일 세 가지를 담당하며, 정확히 어떤 역할을 하는지 직관적으로 이해하기 어렵다. 그리고 가진 책임의 개수만큼 각 클래스를 수정할 이유가 많아진다. 여러 책임이 한 곳에 얽혀 있기 때문에 테스트와 리팩토링이 까다로워진다.

### Q&A
**Q1. SRP를 지키지 않으면 어떤 문제가 발생할 수 있을까?**
- **A1**: SRP를 지키지 않는 클래스는 여러 가지 역할을 동시에 수행하므로, 하나의 책임이 변경될 때 다른 책임들도 영향을 받을 수 있다. 이는 코드 유지보수와 확장성을 어렵게 만들며, 불필요한 버그가 발생할 가능성이 높아진다.

**Q2. SRP를 지킬 때의 장점은 무엇인가?**
- **A2**: SRP를 지키면 클래스가 단일 책임을 맡게 되어, 코드 수정 시 다른 클래스에 미치는 영향을 최소화할 수 있다. 이는 코드의 이해도를 높이고, 테스트와 디버깅을 더 간편하게 만든다. 또한, 각 클래스는 역할이 분명하므로 확장성과 재사용성이 높아진다.

**Q3. SRP를 실생활에 적용할 수 있는 예는 무엇인가?**
- **A3**: 예를 들어, 회사에서 프로젝트 관리를 할 때, 각 직원은 자신의 역할에 따라 일하는 것이 효율적이다. 기획자는 기획에만 집중하고, 디자이너는 디자인만, 개발자는 코딩에만 집중하는 것이 SRP에 해당한다. 만약 한 사람이 여러 역할을 맡는다면 혼란이 생길 수 있고, 이는 프로젝트 관리에서 비효율성을 초래할 수 있다.

**Q4. SRP를 위반한 클래스를 어떻게 리팩토링할 수 있을까?**
- **A4**: SRP를 위반한 클래스를 리팩토링하는 첫 번째 단계는 클래스가 수행하는 책임들을 분석하는 것이다. 여러 책임을 가진 클래스는 각 책임별로 기능을 나누고, 이를 각각의 클래스로 분리해야 한다. 예를 들어, `UserProcess` 클래스가 여러 역할을 수행한다면, 이를 `PlanningProcess`, `ProgrammingProcess`, `DesignProcess`로 나누는 것이 적합하다.

[SRP 적용 예제 코드]

(1) PlanningProcess 클래스
![img3](/assets/img/2024_10_08/SOLID_DesignPatterns/img3.png)
<center>[planning_process.h]</center> <br>

![img4](/assets/img/2024_10_08/SOLID_DesignPatterns/img4.png)
<center>[planning_process.cpp]</center> <br>

[2.ProgrammingProcess 클래스]
![img5](/assets/img/2024_10_08/SOLID_DesignPatterns/img5.png)
<center>[programming_process.h]</center> <br>

![img6](/assets/img/2024_10_08/SOLID_DesignPatterns/img6.png)
<center>[programming_process.cpp]</center> <br>

![alt text](image.png)

[3.DesigningProcess 클래스]
![img7](/assets/img/2024_10_08/SOLID_DesignPatterns/img7.png)
<center>[designing_process.h]</center> <br>

![img8](/assets/img/2024_10_08/SOLID_DesignPatterns/img8.png)
<center>[designing_process.cpp]</center> <br>