---
title: Ubuntu에서 VS Code(Visual Studio Code) 설치하기
description: "Ubuntu 22.04에서 VS Code설치에 대한 튜토리얼" # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2024-10-06 05:57:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
---

본 포스트에서는 Ubuntu에서 Visual Studio Code를 APT 패키지 관리자를 통해 설치하는 방법에 대해 알아보겠다.<br>

## 작업 환경
- Ubuntu(22.04)

## VS Code에 대해서 알아보기
Visual Studio Code(이하 VS Code)는 마이크로소프트에서 제공하는 오픈 소스 코드 편집기다. VS Code는 다양한 프로그래밍 언어와 확장 기능을 지원하며, 리눅스, 맥, 윈도우에서 모두 사용할 수 있다.

## VS Code 설치하기

### 1. Microsoft repository 추가하기
APT 패키지를 통해 설치하려면, 먼저 Microsoft의 리포지터리를 추가해야 한다.

```bash
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

## 2. Visual Studio Code 설치하기

```bash
sudo apt update
sudo apt install code
```

## VS Code 실행하기
terminal에서 다음 명령어를 입력해서 실행하거나, 검색창에서 code를 입력해 실행할 수 있다.

```bash
code
```


## 마무리
APT 패키지 관리 시스템을 통해 설치하게 되면 자동으로 업데이트 된다. 새로운 버전이 나오면 다음 명령어를 입력해 업데이트할 수 있다.

```bash
sudo apt update
sudo apt upgrade
```