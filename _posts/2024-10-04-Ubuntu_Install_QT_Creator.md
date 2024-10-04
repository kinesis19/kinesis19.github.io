---
title: Ubuntu에서 Qt Creator 설치하기 + Qt6 설치까지
author: cotes
date: 2024-10-04 08:53:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 Ubuntu에서 Qt Creator를 설치하는 방법에 대해 안내하고 있다.

<br><br>


## 작업 환경
- Ubuntu(22.04)

## Qt Creator에 대해서 알아보기
Qt Creator는 Qt 프레임워크를 기반으로 한 강력한 **통합 개발 환경(IDE)**으로, C++ 및 QML을 사용하여 크로스 플랫폼 애플리케이션을 쉽게 개발할 수 있다. UI 디자인 도구인 Qt Designer와 코드 작성, 디버깅, 빌드 등의 다양한 기능을 지원하며, Windows, macOS, Linux, 모바일 등 다양한 플랫폼에서 애플리케이션을 개발할 수 있는 강력한 도구이다.

## Qt Creator 설치하기
Qt Creator를 설치하는 방법은 두 가지 정도가 있다. APT 패키지 관리자를 사용해 설치하는 방법과, QT 공식 사이트를 통해 설치하는 방법으로 나뉜다. 

나는 두 가지 방법을 모두 시도해 보았다. Qt 공식 사이트를 통해 설치를 진행하게 되면 거짓말 안 하고 24시간 넘게 5%에서 멈춰있다. 설치 프로그램이 서버로부터 데이터를 못 바고 있는 현상이 지속되는 문제가 발생했다. 구글링과 GPT를 돌려도 해결 할 수 없었기에, 17기 선배님께서 알려주신 APT 패키지 관리자를 통해 Qt Creator를 설치할 수 있게 되었다. (우리는 Qt6 설치를 해야 한다는 것으로 알고 있었다)

### 1. APT 패키지 관리자로 설치하기
아래 명령어를 통해 설치할 수 있다.
```bash
sudo apt update
sudo apt install qtcreator
```


### 2. Qt 공식 사이트에서 설치하기
공식 사이트에서 설치하는 방법은 주장님의 포스트를 참고하길 바란다. 자세하게 설명 되어 있다.

[[QT] 002 : QT 설치](https://menggu1234.tistory.com/11)


## QT Creator 실행하기
Terminal에서 `qtcreator`라고 입력하면 Qt Creator가 실행된다.

![img1](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img1.png)
<center>[Qt Creator 화면]</center>
<br>

Qt Creator가 설치 되었다. 그러면 여기서 끝인가? 그건 아니다. 세부 설정을 해줘야 한다. 나도 세부 설정 법이 기억이 잘 안 나지만, 아마도 Build 관련 설정을 안내 받았던 것 같다.

`[Tools]` -> `[Options]` -> `[Build & Run]`에 들어와서 `Save all files before build` 항목을 활성화 한다. 그리고 `Apply` 및 `OK`를 눌러 저장한다.

![img2](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img2.png)
<center>[Build & Run 설정]</center>
<br>

## Qt Creator에서 프로젝트 생성하기
`[File]` -> `[New File or Project]` 또는 `[Ctrl]` + `[N]` 키를 눌러 새 프로젝트 생성 창을 띄운다. Projects Type을 `Non-Qt Project`로 설정하고, 세부 설정으로 `Plain C++ Application` 항목을 선택하여 `Choose` 버튼을 누른다.

![img3](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img3.png)
<center>[새 프로젝트 생성]</center>
<br>

나 같은 경우에는 Github에서 프로젝트를 관리하는 편이라 지금은 실험용으로 임시 폴더를 생성한 후에, 이름을 설정했다.

![img4](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img4.png)
<center>[프로젝트 경로 및 이름 설정]</center>
<br>

교육 받은대로 Build System은 `CMake`로 설정했다. C++를 사용해야하기에 CMake로 Build System을 설정한 것이다.

![img5](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img5.png)
<center>[Build System 설정]</center>
<br>

그 다음으로 Kit Location을 설정한다. 대부분 Desktop으로 설정 되어 있을 것이다.

![img6](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img6.png)
<center>[Kit 설정]</center>
<br>

최종적으로 Qt Project 생성에 대한 요약을 확인할 수 있다. Version Control은 git으로 설정할 수가 있는데, 아직 나는 git을 설치하지 않았다. 그리고, git은 vim으로 돌리는 게 편하다.

![img7](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img7.png)
<center>[프로젝트 생성 요약]</center>
<br>

프로젝트가 생성된 후에 모습이다. 여기서 "코드만 작성하고 빌드하면 되겠지?" 라고 생각했다면 큰 오산이다. 아직 세부 설정이 남아 있다. 

아마 온라인으로 Qt를 조금이라도 설치했다면(5%이하) 빌드를 할 때 필요한 Qt 패키지들이 같이 설치 되었을 것이다. 아니면 내 작업 환경이 잘 못 되었을 수도 있을 것 같다.

무튼 나 같은 경우에는 원래 되어야 하는 `Run`이 비활성화 되어 있는 상태이다.

![img8](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img8.png)
<center>[프로젝트 생성 후 모습 (Run 비활성화 상태)]</center>
<br>

Kit 설정을 확인해 보자. `[Tools]` -> `[Options]` -> `[Kit]` 순으로 진입하면 된다. 하단에 `Qt version`이 `None`으로 되어 있다. 이럴수가. 그렇다. Qt5는 설치 되어 있어도 할당이 되지 않았다. 왜 그런지는 모르겠는데, 무튼 할당이 안 되어 있는 상태이다. 여기서 Qt5를 할당하는 것 보다는, 주장님께서 말씀하신 Qt6 설치를 하고 Qt Creator에 할당해 보려고 한다.

![img9](/assets/img/2024_10_04/Ubuntu_Install_QT_Creator/img9.png)
<center>[프로젝트 생성 후 모습 (Run 비활성화 상태)]</center>
<br>

