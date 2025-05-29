---
title: MCPUbuntu에서 Figma MCP 사용하는 방법
description: "Ubuntu에서 Figma MCP 사용하는 방법에 대해서 다룹니다" # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2025-05-11 18:48:00 +0900
categories: [MCP]
tags: [MCP, 개발, Figma]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
pin: true #
---

## 들어가며
본 포스트에서는 Figma MCP를 Ubuntu에서 사용하는 방법에 대해 다루고 있다. 유튜브에서 **대모산 개발단**님의 [피그마 MCP로 디자인 딸깍 가능?](https://youtu.be/H-yo6dzJ13g?si=c0bEs2PnouowJ2qj) 이라는 영상을 보고, Ubuntu에서 동일하게 실습한 내용을 포함하고 있다. Ubuntu에서 Claude 설치하는 것 이외에 나머지 진행 방식은 **대모산 개발단** 님께서 업로드해 주신 영상속 흐름과 동일하니 영상을 시청하면서 실습하는 것을 추천한다.

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

![img1](/assets/img/2025_05_11/MCP_with_Figma_in_Ubuntu/img1.png)


## Cursor Talk To Figma MCP Plugin 사용하기


Cursor Talk To Figma MCP Plugin라는 플러그인을 사용한다. 사용은 아래 하이퍼링크 처리된 부분을 클릭하고, 파란색 `Open in ...` 버튼을 통해 새 파일을 생성해 주거나 불러오면 된다.

플러그인: [Cursor Talk To Figma MCP Plugin](https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin)

생성된 Figma 페이지에서 방금 `Cursor Talk To Figma MCP Plugin` 을 활성화 해준다. 이후, Ubuntu에서 Claude를 실행 -> [File] -> [Settings] -> [Developer] 순으로 진행하여 `Edit Config` 버튼을 클릭한다. 그러면 `claude_desktop_config.json` 이라는 파일을 찾을 수 있는데, 해당 파일을 VS Code에서 열어주면 된다.

이후, 해당 파일을 아래와 같이 수정해주면 된다. 설정 내용은 Figma에서 해당 플러그인을 활성화 했을 때 하단에 나와 있는 설정 코드를 복사해서 붙여 넣으면 된다. 

```bash
{
    {
        "mcpServers": {
          "TalkToFigma": {
            "command": "bunx",
            "args": [
              "cursor-talk-to-figma-mcp@latest",
              "--server=vps.sonnylab.com"
            ]
          }
        }
      }
}
```

설정을 저장한 이후, Claude를 재시작한다.