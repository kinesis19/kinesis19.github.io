---
title: Ubuntu에서 Terminator 설치하기
author: cotes
date: 2024-10-04 08:00:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 Ubuntu에서 Terminator를 설치하고 사용하는 방법에 대해 안내하고 있다.

<br><br>


## 작업 환경
- Ubuntu(22.04)

## Terminator에 대해서 알아보기
Terminator는 여러 터미널 세션을 한 화면에서 관리할 수 있는 기능을 제공하는 **터미널 에뮬레이터**이다. 여러 창을 분할하거나 탭을 사용하는 등 효율적으로 터미널 작업을 관리할 수 있다. 특히 개발자들이 여러 서버나 프로세스를 동시에 관리해야 할 때 유용하다.

## Ubuntu에서 Terminator 설치하기
Ubuntu의 기본 패키지 관리자 `apt`를 사용하여 `Terminator`를 설치할 수 있다. 먼저 관리자 권한으로 저장소에서 최신 패키지 정보를 업데이트한다. 그 이후에 terminator 패키지를 설치한다.

```bash
sudo apt update
sudo apt install terminator
```

## Ubuntu에서 Terminator 실행하기
`Win`키를 누르거나 직접 검색창에 들어가 Terminator를 입력하거나, `terminal`에서 아래와 같이 입력해 Terminator를 실행할 수 있다.

```bash
terminator
```


![img1](/assets/img/2024_10_04/Ubuntu_Install_Terminator/img1.png)
<center>[Terminator 실행]</center>
<br>

## Terminal 단축키 모음

| 단축키 | 설명 |
| --- | --- |
| Ctrl + Shift + O | 현재 창을 수평으로 분할 |
| Ctrl + Shift + E | 현재 창을 수직으로 분할 |
| Ctrl + Shift + T | 새로운 탭을 열기 |
| Ctrl + Shift + W | 현재 탭 닫기 |
| Ctrl + Shift + Q | Terminator 전체 종료 |
| Ctrl + Tab | 탭 간 이동 (순방향) |
| Ctrl + Shift + Tab | 탭 간 이동 (역방향) |
| Alt + 화살표키 | 창 사이 이동 (현재 분할된 창들 사이에서 이동) |
| Ctrl + Shift + X | 현재 활성화된 창을 전체 화면으로 확대/축소 |
| Ctrl + Shift + C | 복사 (현재 선택한 텍스트를 클립보드에 복사) |
| Ctrl + Shift + V | 붙여넣기 (클립보드에 복사된 텍스트를 붙여넣기) |
| Ctrl + Shift + N | 다음 창으로 포커스 이동 |
| Ctrl + Shift + P | 이전 창으로 포커스 이동 |
| Ctrl + + | 글자 크기 확대 |
| Ctrl + - | 글자 크기 축소 |
| Ctrl + 0 | 기본 글자 크기로 초기화 |
| Ctrl + Shift + R | 방송 모드 (입력한 명령어를 동일한 창에 전송, 여러 창 동시 입력) |
| F11 | 전체 화면 모드로 전환 |


