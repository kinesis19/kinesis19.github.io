---
title: Ubuntu에서 Chrome 설치하기 (두 가지 방법)
author: cotes
date: 2024-10-06 00:00:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 Ubuntu에서 Chrome을 설치하는 방법에 대해 안내하고 있다.

<br><br>


## 작업 환경
- Ubuntu(22.04)

## Chrome에 대해서 알아보기
Chrome은 빠른 성능, 사용자 친화적 인터페이스, 확장 기능 지원, 강력한 보안을 제공하는 웹 브라우저로, 개발자 도구와 최신 기술 지원을 통해 사용자 및 개발자 모두에게 효율적인 브라우징 경험을 제공한다. Google 계정으로 로그인하여 다양한 Google 서비스를 이용할 수 있다는 것이 큰 특징이다.

## Ubuntu에서 Chrome 설치하기
Ubuntu에서 Chrome을 설치하는 방법은 크게 두 가지로 나뉜다. 직접 Chrome Download 페이지에 접속해서 `.deb` 파일을 설치하는 방법과 terminal에서 명령어 입력을 통해 설치할 수 있다.

### 1. 명령어 없이 설치하기
먼저 Ubuntu에 기본으로 설치되어 있는 Firefox를 실행하여, Chrome 다운로드 페이지에 접속한다. Firefox 검색창에서 `Chrome`을 검색하거나, 아래 링크를 통해 접속할 수 있다. 나 같은 경우에는 English Version으로 설치했다. 외국어 버전은 도메인에서 변경할 수 있다.

- 한국어 Version : ko_kr
- 영어 Version : en_us

[Google Chrome(English Ver)](https://www.google.com/intl/us_en/chrome/)

중앙에 있는 파란색 `Download Chrome` 버튼을 클릭한다.

![img1](/assets/img/2024_10_06/Ubuntu_Install_Chrome/img1.png)
<center>[설치 페이지]</center>
<br>

이후 본인이 사용하고 있는 Linux 기반의 운영체제를 선택하면 된다. 나는 Ubuntu를 사용하고 있으므로 `.deb` 확장자의 파일을 다운로드했다.

![img2](/assets/img/2024_10_06/Ubuntu_Install_Chrome/img2.png)
<center>[확장자 선택]</center>
<br>

이후 다운로드 아이콘을 클릭해서 들어간다. 다운로드 아이콘은 우측 상단에 있다.

![img3](/assets/img/2024_10_06/Ubuntu_Install_Chrome/img3.png)
<center>[다운로드 아이콘 클릭]</center>
<br>

방금 다운로드한 파일을 더블클릭한다.

![img4](/assets/img/2024_10_06/Ubuntu_Install_Chrome/img4.png)
<center>[파일 더블클릭]</center>
<br>

`Open With..` 창이 나타나는데, 하단에 있는 `Software Install`을 선택하고 열어준다.

![img5](/assets/img/2024_10_06/Ubuntu_Install_Chrome/img5.png)
<center>[Software Install 항목 선택]</center>
<br>

아래와 같이 소프트웨어 설치 창이 나타나면, Install 버튼을 클릭하여 설치를 진행한다. 이 소프트웨어 설치 창은 `.deb` 패키지 파일을 설치할 때 나타나는 창이다. 따라서, 명령어 입력 없이 편리하게 설치할 수 있다.

![img6](/assets/img/2024_10_06/Ubuntu_Install_Chrome/img6.png)
<center>[Install 버튼 클릭]</center>
<br>

Chrome이 정상적으로 설치 되었다. Chrome 창이 자동으로 안 나타나면 검색 혹은 terminal을 통해 Chrome을 실행시킬 수 있다.

![img7](/assets/img/2024_10_06/Ubuntu_Install_Chrome/img7.png)
<center>[Chrome 실행]</center>
<br>


### 2. Terminal에서 Chrome 설치하기
Terminal을 통해 Google-Chrome을 다운로드해보겠다. 먼저 Chrome의 최신 버전 파일을 다운로드한다.

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

#### wget 관련 에러가 발생할 때
wget 관련 에러가 발생하는 경우는 보통 wget 패키지가 설치되어 있지 않아서 이다. 아래 명령어를 입력해 wget이 설치 되어 있는지 확인한다.

```bash
wget --version
```

명령어를 입력하고, 하단에 `GNU Wget 1.xx.x built on linux-gnu.` 라고 나타난다면 wget 패키지가 설치되어 있는 것이다. 만약, 위와 같은 문구가 안 나타난다면 wget 패키지 설치를 진행하자.

```bash
sudo apt update
sudo apt install wget
```

Chrome의 최신 버전 파일을 다운로드 했다면, 이제 패키지를 다운로드해야 한다.

```bash
sudo dpkg -i google-chrome-stable_current_amd64.deb
```

#### dpkg 관련 에러가 발생할 때
dpkg 관련 에러가 발생할 때는 보통 dpkg 패키지가 설치되어 있지 않아서 이다. 아래 명령어를 통해 dpkg가 설치 되어 있는지 확인하고, 설치 되어 있지 않다면 dpkg 패키지 설치를 진행한다.

```bash
dpkg --version
```

[dpkg 설치(선택)]
```bash
sudo apt update
sudo apt install dpkg
```

#### 의존성 문제가 발생할 때
설치 도중 의존성 관련 문제가 발생한 경우에는 아래 명령어를 통해 의존성 문제를 해결한다.

```bash
sudo apt --fix-broken install
```

## 마무리
Ubuntu에서 Chrome을 설치했다. 그러나, Chrome은 리소스를 많이 차지하므로 Firefox 사용을 추천한다.