---
title: Ubuntu에서 tree 설치하기
author: cotes
date: 2024-10-06 04:00:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 Ubuntu에서 tree를 설치하는 방법에 대해 알아보겠다.<br>

## 작업 환경
- Ubuntu(22.04)

## tree에 대해서 알아보기
tree 명령어는 리눅스 및 Ubuntu에서 파일과 디렉터리 구조를 계층적으로 시각화하는 데 사용된다. 즉, 파일 시스템을 트리 구조로 표시해 주어, 디렉터리 내의 파일 및 하위 디렉터리의 구조를 한눈에 파악할 수 있다. 이 명령어는 파일 탐색을 더 직관적으로 만들어 주며, 특히 복잡한 디렉터리 구조에서 유용하다.

## tree 설치하기

```bash
sudo apt update
sudo apt install tree
```

## tree 사용하기

현재 디렉토리를 출력하려면 다음 명령어를 입력하면 된다.

```bash
tree
```

![img9](/assets/img/2024_10_06/Ubuntu_Install_Tree/img1.png)
<center>[tree를 사용해서 디렉토리 구조 확인]</center>
<br>


더 자세한 사용법은 아래 블로그를 참고하자. 설명이 잘 되어 있다.

[하니_즐거운하루님님의 `리눅스 tree 명령어 사용법 ( -d, -a, -f, -L, -P,- l, -p, -u, -h, -s,-o)`][https://leevisual.tistory.com/75](https://leevisual.tistory.com/75)
