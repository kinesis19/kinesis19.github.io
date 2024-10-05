---
title: Ubuntu에서 git 설치 및 git 환경 구성하기
author: cotes
date: 2024-10-06 01:00:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 Ubuntu에서 git을 설치하고 git 환경을 구성하는 방법에 대해 안내하고 있다.

<br><br>


## 작업 환경
- Ubuntu(22.04)

## Git에 대해서 알아보기
Git은 분산 버전 관리 시스템으로, 소스 코드나 프로젝트 파일을 효율적으로 관리하고 협업할 수 있도록 도와준다. 주로 소프트웨어 개발에서 사용되지만, 버전 관리를 필요로 하는 모든 프로젝트에 적용할 수 있다. Git은 Linus Torvalds가 2005년에 개발했으며, 현재 가장 널리 사용되는 버전 관리 도구이다.

## Git 설치하기
공식 메뉴얼을 보면서 설치하고 싶다면 아래 git 설치 페이지에 접속하는 것을 추천한다. 물론, 포스트에서도 git 설치 페이지에 나와 있는 방식대로 설치를 진행한다.

git 설치 페이지 : [https://git-scm.com/downloads/linux](https://git-scm.com/downloads/linux)

먼저 설치되어 있는 apt를 업데이트한다.

```bash
sudo apt update
```


그 다음, 명령어를 통해 git을 설치한다. 나는 보통 설치를 진행할 때 `superuser` 권한으로 설치를 진행한다.  

```bash
sudo apt-get install git
```

![img1](/assets/img/2024_10_06/Ubuntu_Install_Git/img1.png)
<center>[apt를 통해 git 설치]</center>
<br>

그 다음, git의 공식 repository를 추가한다.

![img2](/assets/img/2024_10_06/Ubuntu_Install_Git/img2.png)
<center>[git의 공식 repository 추가]</center>
<br>

이후 정상적으로 git이 설치되어 있는지 확인한다. 확인하는 방법은 다음과 같다.

```bash
git --version
```

![img3](/assets/img/2024_10_06/Ubuntu_Install_Git/img3.png)
<center>[git version 확인]</center>
<br>


## git 환경 구성하기
나는 보통 remote(Github)에서 repository를 생성하고, local에서 repository를 clone해서 사용한다. local에서 repository를 생성하고 remote에 publish하는 것 보다, remote에서 repository를 생성하고 local로 clone하는 게 제일 쉽기 때문이다. 물론 local에서 repository를 생성하고 remote에 publish 하는 방법도 알아 두면 나중에 도움이 된다.

clone을 하는 방법도 다양하다. 그중에서 작성자는 **Github CLI(Command Line Interface)**를 선호한다. repository를 관리할 때 인증을 자동으로 처리할 수 있기 때문이다. HTTPS나 SSH와 달리 push나 PR, Clone 등의 작업을 손쉽게 할 수 있다. 따라서 이번 포스트에서는 `gh`를 사용해 clone 하는 방법에 대해 안내하겠다.

### 1. gh 설치하기
먼저 패키지 목록을 업데이트하여 최신 상태의 패키지 정보를 가져온다. 

```bash
sudo apt update
```

그 다음으로 gh 패키지를 설치한다.

```bash
sudo apt install gh
```

![img4](/assets/img/2024_10_06/Ubuntu_Install_Git/img4.png)
<center>[gh 설치]</center>
<br>

gh 패키지를 설치했으면, gh가 정상적으로 설치되었는지 확인해 본다.

```bash
gh --version
```

![img5](/assets/img/2024_10_06/Ubuntu_Install_Git/img5.png)
<center>[gh 버전 확인]</center>
<br>

gh 버전이 확인 되었으면, 로그인을 진행해 준다.

```bash
gh auth login
```

login 방법을 고를 수 있는데, 다음과 같이 진행하였다.
`Github.com` -> `HTTPS` -> `Yes` -> `Login with a web browser`

![img6](/assets/img/2024_10_06/Ubuntu_Install_Git/img6.png)
<center>[gh 로그인]</center>
<br>

이후 'Press Ente'가 나타나면 'Enter' 키를 누른다. `Logged in as (UserID)` 을 통해 정상적으로 로그인이 된 것을 알 수 있다.


![img7](/assets/img/2024_10_06/Ubuntu_Install_Git/img7.png)
<center>[gh 로그인]</center>
<br>

### 2. local 환경 구성하기
작성자 같은 경우에는 `Home` 디렉토리에 `Github`라는 폴더를 생성하고, 해당 폴더 내부에서 repository들을 관리하는 편이다. `Github`라는 폴더를 생성하면 수많은 repository를 효율적으로 관리할 수 있기 때문이다.

#### 1. repository 관리 폴더 생성하기
먼저 repository들을 관리할 폴더를 하나 생성한다.
Terminal을 이용해서 생성해도 되고, Ubuntu에서 `Files` 프로그램에 들어가서 폴더를 생성해도 된다.

[Terminal에서 폴더를 생성하는 방법]
```bash
mkdir (폴더명)
```
*mkdir: make directory

#### 2. 현재 경로를 생성한 폴더 경로로 설정하기
방금 생성한 폴더 안에다가 repository를 clone할 것이므로 먼저 해당 경로에 들어가준다.

```bash
cd (폴더명)
```
*cd: change directory

### 2. repository 클론하기(Github)
Github에서 repository를 생성하는 방법과 각 옵션을 설명하면 포스트의 의도와는 달리 설명이 너무 길어진다. 관련 방법은 구글링을 하거나 아래 공식 문서를 참고하자.

공식문서: [새 리포지토리 만들기](https://docs.github.com/ko/repositories/creating-and-managing-repositories/creating-a-new-repository)

[옵션1] repository를 생성할 때, README파일이나 .gitignore, license 등의 파일을 추가하고 생성했다면 다음과 같은 화면일 것이다. 우측에 있는 `Code` 버튼을 클릭하고, `Github CLI` 항목을 선택한 후에 아래에 있는 명령어를 복사한다.

[옵션2] repository를 생성할 때, 아무것도 추가하지 않고 생성하면 다음과 같은 상태일 것이다. 당황하지 말고 생성한 repository의 이름만 확인하자. 작성자 같은 경우에는 repository 이름이 `repo_test2`이다.

이제 아까 실행한 terminal을 띄운다. 이때, 생성한 폴더로 경로가 지정되어 있어야 한다.

[예시]
```bash
(UserName)@(hostname):~/(폴더명)$
```


이렇게 clone을 