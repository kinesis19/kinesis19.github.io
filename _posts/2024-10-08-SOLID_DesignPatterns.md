---
title: SOLID 원칙과 객체지향 설계의 기본 정리(강의 - 얄팍한 코딩사전)
description: "SOLID 원칙을 바탕으로 객체지향 디자인 패턴을 이해하고 적용하는 방법에 대한 설명" # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2024-10-08 20:18:00 +0900
categories: [Programming, DesignPatterns]
tags: [SOLID, 객체지향, 프로그래밍, 디자인 패턴, 개발]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
---

이 포스트는 '얄팍한 코딩사전' 유튜브 채널의 [SOLID원칙 - 객체지향 디자인 패턴의 기본기](https://youtu.be/4O6k9GN8FPo?si=yoFDSEuufvePQfGp) 강의를 참고하여 작성되었다. 강의는 Java로 진행되지만, 이 포스트에서는 모든 예제 코드를 C++로 작성했다. 또한, GPT-4를 통해 생성된 답변을 참고했다. (맹신X, 지식의 폭 넓히는 용도로의 참고는 괜찮다고 생각한다)

<br>

## 선수 지식
SOLID 원칙을 이해하기 위해서는 Class, object, method 등에 대한 개념을 알고 있어야 한다. 추후에 Class, object, method 관련해서 C++ 개념 정리 관련 포스트를 포스팅할 예정이다.

## SOLID 원칙이란?

SOLID는 객체지향 설계에서 중요한 5가지 원칙을 나타내는 약어이다. 각 원칙은 시스템의 유지보수성, 확장성, 재사용성을 높이기 위해 만들어졌으며, 이 원칙들은 다음과 같다:

1. **SRP (Single Responsibility Principle, 단일 책임 원칙)**: 각 클래스는 하나의 책임만 가져야 한다.
2. **OCP (Open-Closed Principle, 개방-폐쇄 원칙)**: 소프트웨어는 확장에는 열려 있고, 수정에는 닫혀 있어야 한다.
3. **LSP (Liskov Substitution Principle, 리스코프 치환 원칙)**: 자식 클래스는 부모 클래스를 대체할 수 있어야 한다.
4. **ISP (Interface Segregation Principle, 인터페이스 분리 원칙)**: 특정 클라이언트를 위한 인터페이스는 구체적이어야 한다.
5. **DIP (Dependency Inversion Principle, 의존성 역전 원칙)**: 고수준 모듈은 저수준 모듈에 의존해서는 안 된다.

## SRP(단일 책임 원칙)
이제 SOLID 원칙 중 첫 번째인 **SRP(Single Responsibility Principle)**에 대해 자세히 설명하겠다. SRP에 따라 각 클래스는 하나의 책임(method)만을 가져야 한다 이 원칙은 각 클래스가 "변화의 이유는 단 하나"여야 함을 의미하며, 클래스는 오직 하나의 책임만을 맡고, 그 책임에 대한 이유로만 수정되어야 한다.

이해하기 쉽게 클래스를 IT 직군으로 비유하겠다. `기획자`, `프로그래머`, `디자이너`라는 각각의 클래스가 존재한다. 각각의 클래스는 다음과 같은 핵심 책임을 가지고 있다고 하자.

- 기획자: Planning()
- 프로그래머: Programming()
- 디자이너: Designing()

기획자는 기획을 하는 일(Planning), 프로그래머는 프로그래밍하는 일(Programming), 디자이너는 디자인하는 일(Designing)을 담당하기 위해 존재해야 한다.

SRP를 지키지 않으면 클래스가 여러 책임을 가지게 되어, 한 책임의 변화가 다른 책임에 영향을 미칠 수 있다. 이로 인해 코드를 수정할 때 다른 부분까지 변경해야 하며, 유지보수 및 테스트가 어려워질 수 있다. 따라서 각 클래스는 단일 책임만 맡도록 설계해야 한다.

### 예제코드 - SRP를 위반한 코드

(1) UserProcess 클래스

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


### 예제 코드 - SRP를 준수한 코드

(1) PlanningProcess 클래스

![img3](/assets/img/2024_10_08/SOLID_DesignPatterns/img3.png)
<center>[planning_process.h]</center> <br>

![img4](/assets/img/2024_10_08/SOLID_DesignPatterns/img4.png)
<center>[planning_process.cpp]</center> <br>

(2) ProgrammingProcess 클래스

![img5](/assets/img/2024_10_08/SOLID_DesignPatterns/img5.png)
<center>[programming_process.h]</center> <br>

![img6](/assets/img/2024_10_08/SOLID_DesignPatterns/img6.png)
<center>[programming_process.cpp]</center> <br>

(3) DesigningProcess 클래스

![img7](/assets/img/2024_10_08/SOLID_DesignPatterns/img7.png)
<center>[designing_process.h]</center> <br>

![img8](/assets/img/2024_10_08/SOLID_DesignPatterns/img8.png)
<center>[designing_process.cpp]</center> <br>


## OCP(개방-폐쇄 원칙)
**OCP(Open-Closed Principle)**는 확장에는 열려 있고, 수정에는 닫혀 있어야 한다는 원칙이다. 즉, 새로운 기능을 추가할 때 기존 코드를 수정하지 않고 확장할 수 있도록 설계해야 한다는 의미이다.

로봇 관련 예제로 OCP를 설명하는 간단한 코드를 작성해보겠다. 이 예제는 로봇의 동작을 확장하는 상황을 가정한다. 기본적으로 로봇이 움직이는 메소드가 있고, 새로운 동작을 추가할 때 기존 코드를 수정하지 않고 확장할 수 있는 구조로 설계하는 것을 목표로 코딩해야 한다.

### 예제 코드 - OCP를 위반한 코드

(1) Robot 클래스

![img9](/assets/img/2024_10_08/SOLID_DesignPatterns/img9.png)
<center>[robot.h]</center> <br>

![img10](/assets/img/2024_10_08/SOLID_DesignPatterns/img10.png)
<center>[robot.cpp]</center> <br>


클래스 `Robot`은 'walk', 'jump', 또는 'spin'이라는 특정 동작을 파라미터로 받아 처리한다. 그러나 이 방식은 새로운 동작을 추가할 때마다 PerformAction() 메소드를 수정해야 하기 때문에, 코드가 점점 더 복잡해지고 유지보수가 어려워질 수 있다. 특히 동작이 늘어날수록 조건문이 길어지고, 실수로 기존 로직에 영향을 줄 가능성도 높아진다. 이러한 방식은 OCP를 위반하며, 확장 가능성 측면에서 적절하지 않다.

OCP를 준수하기 위해서는 새로운 기능을 추가할 때 기존 클래스를 수정하지 않고, 확장하는 방식으로 설계해야 한다. 이를 통해 코드의 안정성과 유연성을 유지할 수 있다.


### Q&A
**Q1. 새로운 동작을 추가할 때 클래스를 수정하지 말고 확장해서 사용해야 하는 이유는 무엇인가?**
- **A1**: 클래스 수정은 기존 코드를 위험에 빠뜨릴 수 있으며, 예기치 않은 부작용을 초래할 가능성이 크다. OCP를 준수하여 동작을 확장하게 되면, 기존 로직을 안전하게 유지하면서 새로운 기능을 손쉽게 추가할 수 있다. 이렇게 하면 코드가 더 깨끗해지고, 유지보수가 용이해지며, 확장 가능성이 높은 구조가 된다.

**Q2. OCP를 적용하면 코드의 유지보수가 왜 더 쉬워지는가?**
- **A2**: OCP를 적용하면 새로운 기능을 추가할 때 기존 코드를 수정할 필요 없이 새로운 클래스를 통해 확장할 수 있다. 이렇게 하면 기존 코드가 변경되지 않으므로, 예기치 않은 버그나 부작용이 발생할 가능성이 줄어든다. 예를 들어, 프로젝트에서 새로운 동작을 추가할 때 기존 코드를 수정하지 않아도 되기 때문에, 추가된 기능만 별도로 테스트할 수 있어 테스트의 용이성과 유지보수성이 크게 향상된다.

**Q3. OCP가 적용되지 않으면 어떤 문제가 발생할 수 있는가?**
- **A3**: OCP가 적용되지 않은 코드에서는 새로운 기능을 추가할 때마다 기존 코드를 계속해서 수정해야 한다. 이러한 구조는 코드의 복잡성을 높이고, 실수할 가능성을 증가시키며, 시간이 지나면서 코드가 유지보수하기 어려운 상태로 변한다. 특히, 조건문이 많아질수록 코드의 가독성이 떨어지고, 작은 변경이 다른 기능에 예상치 못한 영향을 미칠 수 있다.

**Q4. OCP를 구현하는 가장 좋은 방법은 무엇인가?**
- **A4**: OCP를 구현하는 가장 좋은 방법은 추상화를 통해 클래스의 인터페이스와 구현을 분리하는 것이다. 이를 통해 새로운 기능은 기존 인터페이스를 확장하는 방식으로 구현되고, 기존 코드를 수정할 필요가 없다. 이 과정에서 상속과 다형성을 활용하는 것이 대표적인 방법이다. 예를 들어, 동작을 추상화한 Action 클래스를 상속받아 각 동작별로 클래스를 구현하면, 로봇의 기존 동작을 수정하지 않고도 새로운 동작을 추가할 수 있다.

### OCP 적용을 위한 interface(추상 클래스)의 필요성
OCP(Open-Closed Principle)를 적용하기 위해서 **인터페이스(추상 클래스)**가 중요한 이유는, 확장 가능성을 높이면서 수정의 위험성을 최소화할 수 있기 때문이다. OCP는 "확장에는 열려 있고, 수정에는 닫혀 있어야 한다"는 원칙으로, 새로운 기능을 추가할 때 기존 코드를 수정하지 않고 확장할 수 있는 구조를 목표로 한다. 즉, **인터페이스(추상 클래스)**는 새로운 기능을 추가하면서도 기존 코드를 수정하지 않도록 구조를 설계할 수 있으며, 확장성과 유지보수성을 크게 향상시킨다.

### 다형성(polymorphism)의 중요성
로봇 클래스에서 OCP가 중요한 이유는 **다형성(polymorphism)**을 통해 구체적인 동작 구현에 상관없이 **Action 클래스를 기반으로 동작을 처리**할 수 있기 때문이다. 이는 새로운 동작이 추가될 때도 **Robot 클래스와 기존 동작 클래스를 수정할 필요가 없음을 의미**하며, 동작 확장 시에도 기존 코드에 영향을 주지 않게 설계된다.


### 예제 코드 - OCP를 준수한 코드

(1) Action 클래스 (추상 클래스)

![img11](/assets/img/2024_10_08/SOLID_DesignPatterns/img11.png)
<center>[action.h]</center> <br>

<details>
<summary>코드 설명</summary>
<div markdown="1">       
- Action 클래스의 역할: Action 클래스는 다양한 로봇 동작을 추상화한 인터페이스로, OCP의 핵심 원칙을 구현한다. 이를 통해 새로운 동작을 추가할 때 Action 클래스를 상속받아 구체적인 동작을 정의함으로써 기존 코드를 수정하지 않고 확장할 수 있다.<br><br>
- Execute() 메소드와 순수 가상 함수: Execute() 메소드는 순수 가상 함수로 선언되었기 때문에, 이를 상속받는 모든 클래스는 해당 메소드를 반드시 구현해야 한다. 이는 다양한 동작을 일관성 있게 확장할 수 있으며, 코드의 유연성과 확장성을 보장한다.<br><br>
- const 사용 이유: const 선언을 통해 Execute() 메소드가 객체의 상태를 변경하지 않음을 보장한다. 이는 함수 호출이 객체의 상태에 영향을 미치지 않도록 설계된 것이며, 안전한 코딩을 위한 좋은 관례라고 한다.<br><br>
- 가상 소멸자 생성 이유: 가상 소멸자는 추상 클래스에서 필수로 구현해야 한다. 이는 상속 구조에서 파생 클래스의 소멸자를 정확히 호출하기 위함이다. 추상 클래스에는 생성자가 필요 없을 수 있지만, 소멸자는 파생 클래스에서 메모리 누수를 방지하기 위해 꼭 필요하다.
</div>
</details>
<br>

(2) WalkAction 클래스

![img12](/assets/img/2024_10_08/SOLID_DesignPatterns/img12.png)
<center>[walk_action.h]</center> <br>

![img13](/assets/img/2024_10_08/SOLID_DesignPatterns/img13.png)
<center>[walk_action.cpp]</center> <br>

(3) JumpAction 클래스

![img14](/assets/img/2024_10_08/SOLID_DesignPatterns/img14.png)
<center>[jump_action.h]</center> <br>

![img15](/assets/img/2024_10_08/SOLID_DesignPatterns/img15.png)
<center>[jump_action.cpp]</center> <br>

(4) SpinAction 클래스 

![img16](/assets/img/2024_10_08/SOLID_DesignPatterns/img16.png)
<center>[spin_action.h]</center> <br>

![img17](/assets/img/2024_10_08/SOLID_DesignPatterns/img17.png)
<center>[spin_action.cpp]</center> <br>

(5) Robot 클래스

![img18](/assets/img/2024_10_08/SOLID_DesignPatterns/img18.png)
<center>[robot.h]</center> <br>

![img19](/assets/img/2024_10_08/SOLID_DesignPatterns/img19.png)
<center>[robot.cpp]</center> <br>

(6) main

![img20](/assets/img/2024_10_08/SOLID_DesignPatterns/img20.png)
<center>[main.cpp]</center> <br>

Robot 클래스와 main.cpp는 OCP를 적용한 코드를 실행했을 때, 어떻게 출력 되는지를 보여주기 위해 추가하였다.

로봇 동작을 확장하는 경우를 예로 들면, 인터페이스를 통해 각 동작(WalkAction, JumpAction, SpinAction)을 구현하고, Robot  클래스는 Action 추상 클래스에만 의존하게 된다. 이때 새로운 동작을 추가할 때는 Robot 클래스를 수정할 필요 없이 새로운 동작 클래스를 추가하기만 하면 된다. 이렇게 하면 OCP를 준수할 수 있게 된다.

### 정리
정리하자면, OCP를 준수하기 위해 새로운 기능은 클래스를 생성 및 추상 클래스에 있는 메소드를 오버라이딩해서 사용하면 된다.


## LSP(리스코프 치환 원칙)
**LSP (Liskov Substitution Principle)**는 리스코프 치환 원칙이라 하며, 하위 클래스는 상위 클래스의 기능을 완전히 대체할 수 있어야 한다는 원칙이다. 즉, 하위 클래스는 최소한 상위 클래스의 기능을 모두 사용할 수 있어야 한다.


### 예제 코드 - LSP를 위반한 코드
(1) Humanoid 클래스

![img21](/assets/img/2024_10_08/SOLID_DesignPatterns/img21.png)
<center>[humanoid.h]</center> <br>

(2) Hubo 클래스

![img22](/assets/img/2024_10_08/SOLID_DesignPatterns/img22.png)
<center>[hubo.h]</center> <br>

![img23](/assets/img/2024_10_08/SOLID_DesignPatterns/img23.png)
<center>[hubo.cpp]</center> <br>

(3) RBY1 클래스

![img24](/assets/img/2024_10_08/SOLID_DesignPatterns/img24.png)
<center>[rby1.h]</center> <br>

![img25](/assets/img/2024_10_08/SOLID_DesignPatterns/img25.png)
<center>[rby1.cpp]</center> <br>

### 왜 위반한 것으로 처리 되는가?
Humanoid 클래스에서 Walk() 메소드는 모든 휴머노이드가 걷는다는 전제하에 구현되었다. Hubo 클래스는 이 전제를 만족하며 정상적으로 걸을 수 있다. 하지만 RBY1 클래스는 바퀴가 달린 로봇으로 걷지 못하지만, Walk() 메소드를 상속받아야 하기 때문에 Walk() 메소드를 오버라이드하여 걷지 못한다고 출력하는 방식으로 구현되었다. 이로 인해, 상위 클래스의 계약(즉, 모든 휴머노이드는 걸을 수 있어야 한다)을 위반하게 된다.

위반 이유: LSP는 상위 클래스의 객체를 하위 클래스가 대체할 수 있어야 한다는 원칙을 요구한다. 하지만 RBY1은 상위 클래스인 Humanoid가 기대하는 동작(걷기)을 수행하지 못하므로, LSP를 위반한 상태이다.

> 레인보우 로보틱스의 로봇 [RB-Y1](https://www.rainbow-robotics.com/rby1)은 휴머노이드 형태의 로봇이다.
{: .prompt-tip }

### QNA
**Q1. LSP(Liskov Substitution Principle)를 왜 적용해야 하는가?**

- **A1**: LSP를 적용하면 하위 클래스가 상위 클래스의 기능을 대체할 수 있어 코드의 일관성과 유지보수성이 향상된다. 예를 들어, 상위 클래스 타입으로 작성된 코드를 하위 클래스 객체로 변경해도, 코드가 정상적으로 작동하게 된다. 이는 객체지향 설계에서 코드의 재사용성을 높이고, 예상치 못한 버그나 부작용을 줄이는 데 기여한다.

**Q2. LSP를 위반하면 어떤 문제가 발생할 수 있는가?**

- **A2**: LSP를 위반하면, 상위 클래스 대신 하위 클래스 객체를 사용했을 때 코드가 예상대로 동작하지 않거나 예기치 않은 동작을 일으킬 수 있다. 예를 들어, 상위 클래스가 모든 휴머노이드가 걷는다고 가정하는데, 하위 클래스에서 걷지 못하는 로봇이 구현된다면 코드의 일관성이 깨지게 된다. 이는 프로그램 오류를 초래할 수 있으며, 코드의 확장성도 저하된다.

**Q3. LSP를 적용한 예시는 무엇인가?**

- **A3**: 예를 들어, 상위 클래스가 휴머노이드 로봇이라면, 모든 하위 클래스(예: 걷는 로봇, 바퀴 달린 로봇)도 움직임에 대한 정의를 가지고 있어야 한다. 상위 클래스에서 정의된 Move() 메소드를 하위 클래스에서 일관되게 재정의하여, 각각의 로봇이 상황에 맞게 동작을 수행하지만 상위 클래스의 동작 계약을 위반하지 않도록 해야 한다.

### 예제 코드 - LSP를 준수한 코드

(1) Humanoid 클래스

![img26](/assets/img/2024_10_08/SOLID_DesignPatterns/img26.png)
<center>[humanoid.h]</center> <br>


(2) Hubo 클래스

![img27](/assets/img/2024_10_08/SOLID_DesignPatterns/img27.png)
<center>[hubo.h]</center> <br>

![img28](/assets/img/2024_10_08/SOLID_DesignPatterns/img28.png)
<center>[hubo.cpp]</center> <br>

(3) RBY1 클래스

![img29](/assets/img/2024_10_08/SOLID_DesignPatterns/img29.png)
<center>[rby1.h]</center> <br>

![img30](/assets/img/2024_10_08/SOLID_DesignPatterns/img30.png)
<center>[rby1.cpp]</center> <br>

### 정리
하위 클래스는 상위 클래스의 동작을 그대로 유지해야 한다. 상위 클래스에서 기대하는 동작을 하위 클래스가 변경하면 안 된다.

## ISP(인터페이스 분리 원칙)
**ISP(Interface Segregation Principle)**는 인터페이스를 분리하는 원칙이다. 풀어 설명하자면 클래스는 자신이 사용하지 않을 메소드를 구현하도록 강요받지 말아햐 한다는 원칙이다.

### 예제 코드 - ISP를 위반한 코드

(1) Worker 클래스

![img31](/assets/img/2024_10_08/SOLID_DesignPatterns/img31.png)
<center>[worker.h]</center> <br>

(2) Robot 클래스

![img32](/assets/img/2024_10_08/SOLID_DesignPatterns/img32.png)
<center>[robot.h]</center> <br>

![img33](/assets/img/2024_10_08/SOLID_DesignPatterns/img33.png)
<center>[robot.cpp]</center> <br>

(3) Human 클래스

![img34](/assets/img/2024_10_08/SOLID_DesignPatterns/img34.png)
<center>[human.h]</center> <br>

![img35](/assets/img/2024_10_08/SOLID_DesignPatterns/img35.png)
<center>[human.cpp]</center> <br>


고정형 로봇은 충전 기능이 필요하지 않음에도 불구하고, Worker 인터페이스에 의해 불필요한 Charge() 메소드를 구현해야 한다. 이는 불필요한 의존성을 유발하며, 코드의 확장성과 유지보수성을 저하시킨다. 로봇의 경우 필요에 따라 충전 인터페이스를 분리하여 ISP를 준수하도록 설계해야 한다. 이동형 로봇에게는 사람과 같이 충전 인터페이스가 필요하다.

### QNA
**Q1. 왜 ISP(Interface Segregation Principle)를 적용해야 하는가?**
- **A1**: ISP를 적용하면 인터페이스가 클라이언트에게 불필요한 기능을 강요하지 않도록 설계할 수 있다. 클라이언트가 필요로 하지 않는 메소드를 구현할 필요가 없어지며, 인터페이스는 특정 요구 사항에 맞게 작고 구체적으로 분리된다. 이를 통해 코드를 더 유연하게 만들고, 유지보수를 더 쉽게 할 수 있다. (=시스템 최적화 가능)

**Q2. ISP를 위반하면 어떤 문제가 발생하는가?**
- **A2**: ISP를 위반하면 클라이언트가 필요하지 않은 메소드까지 강제로 구현해야 한다. 이로 인해 코드가 복잡해진다. 사용하지 않는 메소드를 호출하지 않도록 주의해야 한다. 예를 들어, 고정된 로봇은 충전 기능이 필요 없지만, Charge() 메소드를 구현해야 하므로 불필요한 코드를 작성하게 된 것이다.

**Q3. ISP를 준수하면 어떤 이점이 있는가?**
- **A3**: ISP를 준수하면 인터페이스를 사용하는 클라이언트가 필요한 메소드만 구현할 수 있으므로 불필요한 의존성이 제거된다. 코드의 모듈성과 재사용성을 높이며, 시스템을 더 작은 단위로 나눠서 관리할 수 있게 되어 유지보수가 쉬워진다. 예를 들어, 충전이 필요한 로봇과 필요하지 않은 로봇을 각각 다른 인터페이스로 구분하여 처리할 수 있다.

**Q4. ISP가 적용된 설계에서는 어떻게 인터페이스를 분리하는가?**
- **A4**: ISP가 적용된 설계에서는 기능별로 인터페이스를 분리한다. 예를 들어, 로봇의 경우 작업만 필요한 로봇과 충전이 필요한 로봇을 분리해서 `Workable`과 `Chargeable`이라는 두 개의 인터페이스를 만들어 각각의 요구에 맞는 기능만 제공하게 할 수 있다. 이렇게 하면 각각의 클래스가 필요한 인터페이스만 상속받고, 사용하지 않는 메소드를 구현하지 않아도 된다.

**Q5. ISP는 어떤 상황에서 특히 유용한가?**
- **A5**: ISP는 다양한 클라이언트가 다양한 요구를 가질 때 유용하다. 예를 들어, 한 시스템에서 여러 유형의 로봇이 각각 다른 기능을 수행해야 하는 경우, 각 로봇의 기능에 맞는 인터페이스만 상속받아 구현할 수 있다. 이는 복잡한 시스템을 더 작은 단위로 분리해 관리할 수 있게 하며, 변화가 잦은 요구 사항에도 쉽게 대응할 수 있게 한다.


### 예제 코드 - ISP를 준수한 코드

(1) Workable 클래스

![img36](/assets/img/2024_10_08/SOLID_DesignPatterns/img36.png)
<center>[workable.h]</center> <br>

(2) Chargeable 클래스

![img37](/assets/img/2024_10_08/SOLID_DesignPatterns/img37.png)
<center>[chargeable.h]</center> <br>

(3) Robot 클래스

![img38](/assets/img/2024_10_08/SOLID_DesignPatterns/img38.png)
<center>[robot.h]</center> <br>

![img39](/assets/img/2024_10_08/SOLID_DesignPatterns/img39.png)
<center>[robot.cpp]</center> <br>

(4) Human 클래스

![img40](/assets/img/2024_10_08/SOLID_DesignPatterns/img40.png)
<center>[human.h]</center> <br>

![img41](/assets/img/2024_10_08/SOLID_DesignPatterns/img41.png)
<center>[human.cpp]</center> <br>

`Workable` 인터페이스는 작업과 관련된 메소드만 포함하고, `Chargeable` 인터페이스는 충전과 관련된 메소드만 포함한다. 로봇은 작업 기능만 필요하므로 `Workable`만 상속받아 사용하고, 사람은 작업과 충전 모두 필요하므로 두 인터페이스를 모두 상속받아 사용한다.


## DIP(의존성 역전 원칙)
**DIP (Dependency Inversion Principle)**는 SOLID 원칙 중 마지막으로, 의존성을 다루는 방법에 대한 원칙이다. DIP는 상위 모듈(고수준 모듈)이 하위 모듈(저수준 모듈)에 의존해서는 안 되고, 추상화된 인터페이스나 추상 클래스에 의존해야 한다.

### DIP의 주요 개념
- 고수준 모듈: 시스템의 상위 수준 로직을 처리하는 부분. 예를 들어, 비즈니스 로직을 포함한 모듈.
- 저수준 모듈: 고수준 모듈이 필요로 하는 세부 구현을 담당하는 부분. 예를 들어, 데이터베이스나 API 호출.
- 의존성 역전: 고수준 모듈과 저수준 모듈 간의 의존성을 반전시키는 방법으로, 양쪽이 추상화에 의존하도록 만드는 것.

### DIP의 원칙
고수준 모듈은 저수준 모듈에 직접 의존하지 않고, 인터페이스나 추상 클래스에 의존해야 한다.
저수준 모듈 역시 구체적인 구현이 아닌 추상화된 인터페이스에 의존해야 한다.

### 예제 코드 - DIP를 위반한 코드
(1) Roobt 클래스

![img42](/assets/img/2024_10_08/SOLID_DesignPatterns/img42.png)
<center>[robot.h]</center> <br>

![img43](/assets/img/2024_10_08/SOLID_DesignPatterns/img43.png)
<center>[robot.cpp]</center> <br>


(2) RemoteControl 클래스

![img44](/assets/img/2024_10_08/SOLID_DesignPatterns/img44.png)
<center>[remotecontrol.h]</center> <br>

![img45](/assets/img/2024_10_08/SOLID_DesignPatterns/img45.png)
<center>[remotecontrol.cpp]</center> <br>

`RemoteControl` 클래스는 `Robot`이라는 구체적인 클래스에 직접 의존한다. 만약 `RemoteControl`로 다른 종류의 로봇을 제어하거나 새로운 장치를 추가하고 싶다면, `RemoteControl` 클래스 자체를 수정해야 한다. 이는 DIP를 위반하는 설계이다.

### QNA
**Q1. DIP(Dependency Inversion Principle)를 왜 적용해야 하는가?**
- **A1**: DIP를 적용하면 고수준 모듈이 저수준 모듈에 직접 의존하지 않고, 추상화된 인터페이스에 의존하게 된다. 이를 통해, 저수준 모듈이 변경되더라도 고수준 모듈에 영향을 주지 않으며, 시스템이 더 유연하고 확장 할 수 있다. 예를 들어, 새로운 종류의 로봇을 추가할 때 `RemoteControl` 클래스를 수정할 필요 없이, `새로운 로봇` 클래스만 인터페이스를 구현하면 된다

**Q2. DIP를 위반하면 어떤 문제가 발생하는가?**
- **A2**: DIP를 위반하면, 고수준 모듈이 저수준 모듈에 직접 의존하게 되며, 저수준 모듈의 변경이 있을 때마다 고수준 모듈도 함께 수정해야 한다. 이는 코드의 유지보수성과 확장성을 저하시킨다. 예를 들어, `RemoteControl`이 `Robot`에 직접 의존하면, 새로운 기기(예: Android, TV 등)를 제어하려면 RemoteControl 코드를 수정해야 한다. 이는 DIP 위반의 전형적인 예시다.

**Q3. DIP를 준수하려면 어떻게 설계해야 하는가?**
- **A3**: DIP를 준수하려면, 고수준 모듈과 저수준 모듈이 추상화된 인터페이스를 통해 서로 의존하게 설계해야 한다. 저수준 모듈(예: `Robot`, `TV`)이 구체적인 클래스가 아니라, 인터페이스나 추상 클래스를 구현하고, 고수준 모듈(예: `RemoteControl`)은 해당 인터페이스를 통해 작동해야 한다. 이렇게 하면 고수준 모듈이 저수준 모듈의 세부 구현에 의존하지 않으므로, 저수준 모듈의 변경이 있을 때도 고수준 모듈을 수정할 필요가 없다. 
    
    swap 기능을 구현할 때 temp 변수를 만들어 놓고 대신 target value를 변경한 것처럼, DIP를 준수하기 위해서는 중간 매개체(변수)를 만들고 대상을 가리키도록 하는 것이 중요하다.


### 예제 코드 - DIP를 준수한 코드
(1) Movable 클래스

![img46](/assets/img/2024_10_08/SOLID_DesignPatterns/img46.png)
<center>[moveable.h]</center> <br>

(2) Robot 클래스

![img47](/assets/img/2024_10_08/SOLID_DesignPatterns/img47.png)
<center>[robot.h]</center> <br>

![img48](/assets/img/2024_10_08/SOLID_DesignPatterns/img48.png)
<center>[robot.cpp]</center> <br>

(3) RemoteControl 클래스

![img49](/assets/img/2024_10_08/SOLID_DesignPatterns/img49.png)
<center>[remotecontrol.h]</center> <br>

![img50](/assets/img/2024_10_08/SOLID_DesignPatterns/img50.png)
<center>[remotecontrol.cpp]</center> <br>

### 정리
RemoteControl 클래스는 이제 Robot 클래스에 직접 의존하지 않고, Movable 인터페이스에 의존하게 되었다.
이를 통해 Robot 외에도 새로운 유형의 움직임이 가능한 장치를 추가할 때, RemoteControl을 수정할 필요 없이 Movable 인터페이스만 구현하면 된다.
따라서 수정된 예제 코드는 고수준 모듈이 저수준 모듈에 의존하지 않고, 추상화된 인터페이스에 의존함으로써 DIP를 준수하게 된다.