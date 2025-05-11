---
title: Ubuntu에서 Terminator 커스터마이징하기
author: cotes
date: 2024-10-06 23:00:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial, Customizing]
render_with_liquid: false
toc: true
---

본 포스트는 Ubuntu에서 Terminator를 커스터마이징하는 방법에 대해 안내하고 있다.

<br><br>


## 작업 환경
- Ubuntu(22.04)

## 선행 과제
Terminator를 설치하려면 Terminator가 설치 되어 있어야 한다. 설치 방법은 아래 포스트를 참고하도록 하자.

[Kinesis - Ubuntu에서 Terminator 설치하기](https://kinesis19.github.io/posts/Ubuntu_Install_Terminator/)


## Terminator themes 설치하기
지금부터 다음 사진과 같이 멋 없는 terminator를 꾸며주겠다. 

![img1](/assets/img/2024_10_06/Ubuntu_Customizing_Terminal/img1.png)
<center>[기본 terminator]</center>
<br>

공식 문서는 다음과 같다. 공식 문서에도 친절하게 설명이 되어 있으니 따라해도 된다. 이번 포스트 역시 공식 문서에서 안내하는 흐름에 맞춰 진행하겠다.

[EliverLara - Terminator themes](https://github.com/EliverLara/terminator-themes?tab=readme-ov-file)


먼저 python3의 pip을 다운로드하고, requests 패키지를 다운로드한다.

```bash
sudo apt install python3-pip
python -m pip install requests
```

그 다음, 플러그인 디렉토리를 생성한다.

```bash
mkdir -p $HOME/.config/terminator/plugins
```

이후 현재 terminator 버전에 알맞는 플러그인을 다운로드한다. 자신이 사용하고 있는 terminator 버전을 확인하는 방법은 다음 명령어를 통해 확인할 수 있다.

```bash
terminator --version
```

자신이 사용하고 있는 terminator 버전을 확인했다면, 알맞는 플러그인 버전을 설치하자.


(terminator Version >= 1.9)

```bash
wget https://git.io/v5Zww -O $HOME"/.config/terminator/plugins/terminator-themes.py"
```

(terminator Version < 1.9)

```bash
wget https://git.io/v5Zwz -O $HOME"/.config/terminator/plugins/terminator-themes.py"
```

이후 terminator를 실행 후, 가운데 영역을 우클릭 -> `[Preferences]` -> `[Plugins]`에 들어가서 `Terminator Themes`를 체크하여 활성화 해준다.

![img2](/assets/img/2024_10_06/Ubuntu_Customizing_Terminal/img2.png)
<center>[Terminator Themes 활성화]</center>
<br>

그 다음 terminator의 가운데 영역을 우클릭 -> `[Themes]`에 들어가서 원하는 theme를 설치한다. 작성자 같은 경우에는 VS Code에서도 Dracula 테마를 애용하고 있기에 terminator 테마도 Dracula로 설치했다.

![img3](/assets/img/2024_10_06/Ubuntu_Customizing_Terminal/img3.png)
<center>[Dracula 테마 설치]</center>
<br>

다음 사진을 통해 Dracula 테마가 정상적으로 설치된 것을 알 수 있다.

![img4](/assets/img/2024_10_06/Ubuntu_Customizing_Terminal/img4.png)
<center>[Dracula 테마 설치 완료]</center>
<br>

설치만 했다고 끝나는 것이 아니다. 이제 terminator를 재실행해도 theme가 유지되도록 설정해 줘야 한다.

terminator의 가운데 영역을 우클릭 -> `[Preferences]` -> `[Layouts]` -> `[default]` -> `[Window]` -> `[Terminal]` -> `[Profile]` 항목에서 설치한 theme를 선택한다.

![img5](/assets/img/2024_10_06/Ubuntu_Customizing_Terminal/img5.png)
<center>[Theme 설정1]</center>
<br>

`[Global]` 탭에서 Re-use profiles for new terminals를 체크해서 새 terminal을 실행해도 설정이 적용되도록 해주었다.

![img6](/assets/img/2024_10_06/Ubuntu_Customizing_Terminal/img6.png)
<center>[Theme 설정2]</center>
<br>

이후 세부설정을 통해 커스터마이징을 즐기면 된다.

## 마무리
지금까지 terminator를 커스터마이징 하는 방법에 대해 알아보았다. 추후에 `zsh`를 사용해 더 꾸미는 방법에 대해 알아보겠다.