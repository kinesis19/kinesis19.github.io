---
title: MCPUbuntu에서 Figma MCP 사용하는 방법
description: "Ubuntu에서 Figma MCP 사용하는 방법에 대해서 다룹니다" # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2024-05-11 18:48:00 +0900
categories: [MCP]
tags: [MCP, 개발, Figma]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
pin: true #
---

## 들어가며
본 포스트에서는 Figma MCP를 Ubuntu에서 사용하는 방법에 대해 다루고 있다.

## 작업 환경
- Ubuntu 22.04

## MCP란?
MCP는 Model Context Protocol의 약자로, AI 모델을 위한 개방형 프로토콜이다.

## claude-desktop-debian 패키지 설치하기
aaddrick이라는 개발자가 만든 debian용 claude-desktop 패키지가 있다. [Github](https://github.com/aaddrick/claude-desktop-debian)

해당 패키지를 다운로드하도록 하겠다.
설치 방법은 `README.md` 에 명시되어 있으니 따라하면 된다.

```bash
# Clone this repository
git clone https://github.com/aaddrick/claude-desktop-debian.git
cd claude-desktop-debian

# Build the package (Defaults to .deb and cleans build files)
./build.sh

# Example: Build an AppImage and keep intermediate files
./build.sh --build appimage --clean no

# Example: Build a .deb (explicitly) and clean intermediate files (default)
./build.sh --build deb --clean yes
```

나는 debian 확장자로 build하였다. 

이후, 아래 명령어를 입력하여 추가 설정을 진행했다.



```bash
# Replace VERSION and ARCHITECTURE with the actual values from the filename
sudo dpkg -i ./claude-desktop_VERSION_ARCHITECTURE.deb 

# If you encounter dependency issues, run:
sudo apt --fix-broken install 
```


`desktop_VERSION_ARCHITECTURE` 은 설치된 debian 확장자 파일의 버전을 입력해 주면 된다. 글 작성일(2025.05.11.) 기준으로 desktop 버전은 0.9.3이다.

```bash
sudo dpkg -i ./claude-desktop_0.9.3_amd64.deb
```

야호, 정상적으로 설치 및 로그인까지 완료된 것을 확인할 수 있다.

~~그러나, 창의 사이즈 대응 관련 이슈는 아직 해결되지 않았다. (패키지 자체 이슈인 듯)~~

[img1](/assets/img/2025_05_11/MCP_with_Figma_in_Ubuntu/img1.png)