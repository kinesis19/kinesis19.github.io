---
title: 템플릿 메소드 패턴 개념 정리(강의 - 얄팍한 코딩사전)
description: "객체지향 디자인 패턴 중 하나인 템플릿 메소드 패턴에 대한 개념 정리 및 예제 코드" # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2024-10-10 08:00:00 +0900
categories: [Programming, DesignPatterns]
tags: [OODP, 객체지향, 프로그래밍, 디자인 패턴, 개발]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
---

## 들어가며
소프트웨어 개발에서는 반복적이거나 비슷한 흐름의 알고리즘을 구현할 때, 코드 중복을 최소화하고 구조를 깔끔하게 유지할 필요가 있다. 템플릿 메소드(Template Method) 패턴은 이와 같은 상황에서 사용되는 객체지향 디자인 패턴이다. 이 패턴은 알고리즘의 뼈대를 상위 클래스에 정의하고, 세부적인 동작은 하위 클래스에서 재정의하여 유연하게 처리할 수 있도록 한다.

이 포스트는 '얄팍한 코딩사전' 유튜브 채널의 [03. 템플릿 메소드(Template Method) 패턴](https://youtu.be/JgOtZfly6DE?si=-8AJnWl1fx5WlBnC) 강의를 참고하여 작성되었다. 강의는 Java로 진행되었으나, 이 포스트에서는 예제 코드를 C++로 작성하였다. 템플릿 메소드 패턴의 개념을 명확하게 이해할 수 있도록 설명하고, C++ 코드를 통해 개념을 구체화하였다.

<br>

## 선수 지식
템플릿 메소드 패턴을 이해하기 위해 필요한 선수 지식은 다음과 같다.
- 클래스와 객체, 상속, 메소드 오버라이딩 등의 객체지향 프로그래밍 개념
- 추상 클래스와 순수 가상 함수 (C++에서의 인터페이스 역할) -> 추상 클래스와 인터페이스의 차이를 알아 두면 템플릿 메소드를 이해하는 데 있어 수월하다(간단하면서 큰 차이점 하나를 잘 생각해보자)

## Template Method 패턴
템플릿 메소드(Template Method) 패턴은 **알고리즘의 구조(큰 흐름)**는 상위 클래스에서 정의하고, **세부적인 구현**은 하위 클래스에서 재정의하는 방식으로 동작한다. 즉, 알고리즘의 일부를 고정하고, 변경이 필요한 부분만 하위 클래스에서 구현하도록 유도한다. 이 패턴을 사용하면 코드 중복을 줄이고, 알고리즘의 구조를 유지하면서도 세부 동작을 유연하게 변경할 수 있다.

### Template Method 패턴의 역할
템플릿 메소드 패턴은 다음과 같은 역할을 수행한다.
1. **알고리즘의 큰 틀 제공**: 상위 클래스에서 알고리즘의 공통된 흐름을 정의하고, 하위 클래스에서 세부적인 동작을 구현한다.
2. **코드 중복 방지**: 상위 클래스에서 공통 로직을 정의함으로써, 하위 클래스에서는 중복된 코드 없이 서로 다른 동작을 구현할 수 있다.
3. **알고리즘 구조 유지**: 알고리즘의 주요 흐름을 상위 클래스에서 관리하기 때문에, 알고리즘이 변경되더라도 구조적인 일관성을 유지할 수 있다.

### 언제 Template Method 패턴을 사용해야 하는가?
- **공통된 알고리즘의 큰 흐름이 있고, 일부 단계만 다를 때**: 알고리즘의 큰 흐름은 같지만, 세부적인 단계가 클래스에 따라 달라지는 경우, 템플릿 메소드 패턴을 사용하면 공통 로직을 재사용하면서도 각기 다른 동작을 쉽게 구현할 수 있다.
- **중복된 코드를 피하고 싶을 때**: 상위 클래스에 공통된 부분을 정의하고, 하위 클래스에서 세부적인 구현만 제공함으로써 코드 중복을 최소화할 수 있다.
- **알고리즘의 구조는 변경되지 않으면서도 세부 동작은 자유롭게 커스터마이징하고 싶을 때**: 알고리즘의 구조를 변경하지 않고도 세부 동작을 쉽게 변경할 수 있다.


### Template Method 패턴의 구조
템플릿 메소드 패턴의 구조는 다음과 같이 구성된다.
1. **Abstract Class (추상 클래스)**: 알고리즘의 기본 구조를 정의하는 클래스이다. 이 클래스는 하나 이상의 추상 메소드를 포함하며, 알고리즘의 큰 틀을 제공하는 메소드를 템플릿 메소드로 정의한다.

2. **Concrete Class (*구체 클래스)**: 추상 클래스를 상속받아, 알고리즘의 세부적인 동작을 구현하는 클래스이다. 템플릿 메소드에서 호출되는 추상 메소드를 구체적으로 구현하여 알고리즘의 커스텀 동작을 정의한다.

*구체 클래스는 구상 클래스, 구현 클래스라고도 불린다.

템플릿 메소드는 **고정된 알고리즘의 틀**을 제공하며, 세부 동작은 하위 클래스에서 오버라이딩하여 구현된다. 이를 통해 상위 클래스에서 알고리즘의 흐름을 제어하면서도 하위 클래스에서 세부 동작을 유연하게 변경할 수 있다.

### 게임으로 Template Method 이해하기
템플릿 메소드 패턴은 다양한 알고리즘이 동일한 틀 안에서 동작하는 게임 구조에 매우 유용하다. 예를 들어, 다양한 게임 캐릭터들이 **공격, 방어, 이동** 등의 행동을 하지만, 각 캐릭터의 세부 동작은 다를 수 있다. 이러한 경우 템플릿 메소드 패턴을 사용하면 캐릭터 클래스에서 행동의 틀을 정의하고, 각 캐릭터 클래스에서 세부 동작을 구현할 수 있다.

#### 예시:
1. **Abstract Class (Character)**: 공격, 방어, 이동 등의 행동을 템플릿 메소드로 정의한다.
2. **Concrete Class (Warrior, Mage)**: 전사와 마법사는 각각 공격, 방어, 이동 방식이 다르다. 이 클래스들에서 각 행동의 세부 동작을 구현하여 캐릭터 고유의 동작을 설정한다.

예를 들어, 전사는 검으로 공격하고 방패로 방어하지만, 마법사는 마법으로 공격하고 보호막으로 방어할 수 있다. 게임의 틀은 변하지 않지만, 캐릭터별로 행동의 구체적인 방식은 달라진다.

### Template Method 패턴이 필요한 이유
1. **코드 재사용성**: 알고리즘의 공통적인 부분을 상위 클래스에서 정의하여 중복된 코드를 제거하고, 하위 클래스에서는 구체적인 부분만을 구현할 수 있다.

2. **알고리즘 확장**: 템플릿 메소드를 이용하면 상위 클래스에서 알고리즘의 큰 흐름을 유지하면서도, 하위 클래스에서 세부 동작을 유연하게 확장할 수 있다.

3. **변경 최소화**: 알고리즘의 틀을 상위 클래스에 정의하기 때문에, 알고리즘의 주요 흐름을 유지하면서도 하위 클래스에서만 변경이 이루어진다. 이렇게 하면 유지보수 시 상위 클래스를 수정하지 않고도 새로운 동작을 추가하거나 기존 동작을 수정할 수 있다.

템플릿 메소드 패턴을 사용하면 알고리즘의 공통적인 부분을 재사용하면서도, 각기 다른 상황에 맞는 세부 동작을 유연하게 구현할 수 있어 개발의 효율성을 높일 수 있다.


### 예제 코드

![img1](/assets/img/2024_10_10/OODP_DesignPattern_TemplateMethod/img1.png)
<center> [main.cpp] </center><br>


![img2](/assets/img/2024_10_10/OODP_DesignPattern_TemplateMethod/img2.png)
<center> [실행 결과] </center><br>


한 눈에 코드를 보기 위해 선언부(.h)와 구현부(.cpp)로 분리하지 않고, main.cpp에서 통합하여 코드를 구현했다. 
> 실제로 C++로 코딩할 때는 선언부와 구현부를 나눠서 코딩하는 것을 추천한다. 프로젝트가 커질 수록 선언부와 구현부로 나눠서 작업해야 유지 보수하기 편리하고, 효율적이기 때문이다.
{: .prompt-tip }

### 코드 설명
#### 1. Character 클래스 (추상 클래스)
![img3](/assets/img/2024_10_10/OODP_DesignPattern_TemplateMethod/img3.png)
<center> [Character 클래스 (추상 클래스)] </center><br>

- 추상 클래스: Character는 추상 클래스이다. 이 클래스는 캐릭터가 수행하는 행동의 순서를 ActionSequence() 메소드로 정의한다. 이 메소드는 템플릿 메소드로서, 캐릭터가 전투에서 해야 할 순서(전투 준비 -> 공격 -> 방어 -> 이동)를 규정한다.
- PrepareForBattle(): 모든 캐릭터가 공통적으로 수행하는 전투 준비 과정을 담당한다.
- 순수 가상 함수: Attack(), Defend(), Move()는 순수 가상 함수로 정의되어 있어, 각 캐릭터의 고유한 공격, 방어, 이동 방식을 하위(구체) 클래스(여기서는 Warrior, Mage 클래스)에서 구체적으로 구현해야 한다.

#### 2. Warrior 클래스 (구체 클래스)

![img4](/assets/img/2024_10_10/OODP_DesignPattern_TemplateMethod/img4.png)
<center> [Warrior 클래스 (구체 클래스)] </center><br>

- Warrior는 구체 클래스로, Character 추상 클래스를 상속받아 전사 캐릭터의 고유한 공격, 방어, 이동 방식을 구현한다.
- Attack(): 전사는 검을 사용해 공격한다.
- Defend(): 전사는 방패로 방어한다.
- Move(): 전사는 빠르게 앞으로 이동한다.

#### 3. Mage 클래스 (구체 클래스)

![img5](/assets/img/2024_10_10/OODP_DesignPattern_TemplateMethod/img5.png)
<center> [Mage 클래스 (구체 클래스)] </center><br>

- Mage는 구체 클래스로, Character 추상 클래스를 상속받아 마법사 캐릭터의 고유한 공격, 방어, 이동 방식을 구현한다.
- Attack(): 마법사는 마법을 사용해 공격한다.
- Defend(): 마법사는 보호막을 사용해 방어한다.
- Move(): 마법사는 텔레포트를 사용해 이동한다.

#### 4. 클라이언트 (main 함수)

![img6](/assets/img/2024_10_10/OODP_DesignPattern_TemplateMethod/img6.png)
<center> [클라이언트 (main 함수)] </center><br>

- Warrior와 Mage 객체를 각각 생성한다.
- 각 캐릭터의 ActionSequence() 메소드를 호출하여 전사와 마법사의 행동을 차례대로 출력한다.
- 이때 ActionSequence() 메소드는 PrepareForBattle()을 먼저 호출한 후, 각 캐릭터의 고유한 Attack(), Defend(), Move() 메소드를 차례대로 실행한다.

### Q&A
**Q1. 템플릿 메소드 패턴은 언제 사용해야 하는가?**
- **A1**: 템플릿 메소드 패턴은 알고리즘의 기본적인 구조는 같지만, 특정 단계에서 세부적인 구현이 달라질 필요가 있을 때 사용한다. 즉, 공통된 흐름을 유지하되, 구체적인 동작은 서브 클래스에서 정의하고 싶을 때 유용하다.

**Q2. 템플릿 메소드 패턴이 적용된 게임의 전투 시스템은 어떻게 동작하는가?**
- **A2**: 게임에서 템플릿 메소드 패턴을 적용하면, 전투를 시작할 때 동일한 전투 절차(준비, 공격, 방어, 이동)는 유지하되, 전사, 마법사 같은 캐릭터에 따라 공격과 방어 방식이 달라진다. 이렇게 캐릭터별로 고유한 전투 스타일을 구현할 수 있다.

**Q3. Strategy 패턴과 템플릿 메소드 패턴의 차이점은 무엇인가?**
- **A3**: Strategy 패턴은 알고리즘을 개별 클래스로 캡슐화하여 런타임에 전략을 변경할 수 있도록 한다. 반면, 템플릿 메소드 패턴은 알고리즘의 구조를 정의한 뒤, 특정 단계만 서브 클래스에서 재정의할 수 있도록 한다. Strategy 패턴은 알고리즘을 유연하게 교체하는 데 더 초점이 있다.

**Q4. 템플릿 메소드 패턴을 사용하면 코드 중복이 줄어드는가?**
- **A4**: 템플릿 메소드 패턴은 알고리즘의 공통적인 부분을 상위 클래스에서 처리하고, 차이점만 서브 클래스에서 구현하면 되기에 코드 중복을 줄이는 데 큰 도움을 준다. 특히, 여러 캐릭터의 동작이 유사한 게임에서 중복 코드를 크게 줄일 수 있다.


## 결론
템플릿 메소드 패턴은 상속을 통해 공통된 알고리즘의 구조를 재사용하면서도, 세부적인 부분에서의 변화를 유연하게 적용할 수 있게 해주는 강력한 디자인 패턴이다. 이 패턴을 통해 공통된 작업의 흐름은 유지하면서도, 서브 클래스에서 필요한 세부 구현만을 커스터마이징할 수 있다. 템플릿 메소드 패턴을 사용하면 코드의 중복을 줄이고, 유지보수성과 확장성을 크게 향상시킬 수 있다는 것이다!

특히 게임과 같은 복잡한 시스템에서는 캐릭터의 행동이나 상호작용을 공통적으로 정의하면서도, 각 캐릭터가 고유의 방식으로 전투를 수행하거나 이동하는 시스템을 구현하는 데 적합하다. 이 패턴을 적용하면 코드가 더 읽기 쉽고, 명확한 구조를 가지며, 새로운 캐릭터나 행동을 추가할 때 최소한의 수정으로 확장할 수 있다고 한다.

따라서, 템플릿 메소드 패턴은 알고리즘의 큰 틀은 동일하지만, 세부적인 부분에서 차이가 나는 시스템에서 유용하게 적용 되고, 코드를 더 효율적이고 관리하기 쉽게 만들어 준다.


## 함께 보면 좋은 자료
함께 보면 좋은 자료는 다음과 같다.
- [SOLID 원칙과 객체지향 설계의 기본 정리(강의 - 얄팍한 코딩사전)](https://kinesis19.github.io/posts/SOLID_DesignPatterns/) by **Kinesis** - 객체지향 설계 원칙인 SOLID에 대한 상세 설명이 되어 있다.
- [Template Method](https://refactoring.guru/design-patterns/template-method) by **Refactoring.Guru** - 템플릿 메소드(Template Method) 패턴을 사용해야 하는 이유와 장단점 등에 대하여 설명하고 있다(디자인 패턴의 바이블 같은 플랫폼이 Refactoring.Guru이기에 애용하는 습관을 키우자).
- [💠 템플릿 메소드(Template Method) 패턴 - 완벽 마스터하기](https://inpa.tistory.com/entry/GOF-%F0%9F%92%A0-%ED%85%9C%ED%94%8C%EB%A6%BF-%EB%A9%94%EC%86%8C%EB%93%9CTemplate-Method-%ED%8C%A8%ED%84%B4-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90) by **Inpa** - 템플릿 메소드(Template Method) 패턴에 대한 개념이 자세하게 설명되어 있다(하단에 전략 패턴과 템플릿 메소드 패턴의 차이점에 대해 설명하고 있으니 한 번 보는 것도 괜찮다)
- [Factory Method](https://42jerrykim.github.io/collections/designpattern/03_factory_method/#gsc.tab=0) by **Jerry Kim** - 팩토리 메소드에 대하여 설명이 잘 되어 있다


## 참고 자료
본 포스트를 작성할 때 참고한 자료들이다.
- **유튜브 채널 얄팍한 코딩사전**: [03. 템플릿 메소드(Template Method) 패턴](https://youtu.be/JgOtZfly6DE?si=-8AJnWl1fx5WlBnC) - 본 포스트는 이 강의를 참고하여 작성되었다.