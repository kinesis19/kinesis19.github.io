---
title: 레드브릭 버전 관리 및 협업 팁
description: "레드브릭 스튜디오에서 프로젝트 버전을 관리하며, 팀원들과 협업하는 방법에 대해 다룹니다." # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2024-11-01 17:55:00 +0900
categories: [Redbrick]
tags: [redbrick, 개발]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
---

## 들어가며
본 포스트는 레드브릭 스튜디오에서 버전을 관리하고, 팀원들과 협업 하는 방법에 대해 다루고 있습니다. 레드브릭 스튜디오에서 프로젝트 버전을 관리하고, 협업을 하는 방법은 다양합니다. 그중에서 레드브릭과 함께한 지난 4년간의 경험을 토대로 포스트를 작성하게 되었습니다. 

**중요! git 명령어, redbirick 개발 방법 등에 대한 자세한 안내는 본 포스트에서 다루지 않습니다. 오직 버전 관리와 협업 방법에 대해서만 다룹니다.**

## 작업 흐름
1. 작업 환경 세팅하기
2. repository 생성하기
3. repository 클론하기
4. Workspace 세팅하기
5. 레드브릭 프로젝트 생성하기
6. 로컬 디바이스에서 프로그래밍하기
7. 레드브릭 스튜디오에 업데이트하기
8. 레드브릭 스튜디오에서 테스트하기
9. 프로젝트 파일 다운로드하기
10. Workspace에 반영하기
11. 원격 저장소로 push하기


## 작업 환경 세팅하기
### 1. 버전 관리
- [Git](https://git-scm.com/)

버전 관리는 git을 사용하여 관리하고 있습니다. git 명령어 사용이 어려우거나 미숙하신 경우에는 [Github Desktop](https://github.com/apps/desktop?ref_cta=download+desktop&ref_loc=installing+github+desktop&ref_page=docs)이나 [Gitkraken](https://www.gitkraken.com/)과 같은 GUI 툴을 사용하시는 것을 추천드립니다.

### 2. 에디터
- [VS Code](https://code.visualstudio.com/)

에디터는 VS Code를 사용하고 있습니다. 레드브릭에서 제공되는 에디터를 사용해도 되지만, 개인적으로 사용하는 익스텐션이 VS Code에 존재하기에 VS Code를 애용하고 있습니다. **프로젝트 버전 관리를 위해 VS Code 같은 에디터 사용을 적극 추천드립니다.** 작업 방식은 아래에서 설명하겠습니다.

### 3. 협업 툴
- [Notion](https://www.notion.so/)
- [Discord](https://discord.com/)
- [Google Wokspace](https://workspace.google.com/features/)

노션을 베이스로 문서 관리와 프로젝트 진행 상황을 관리합니다. 동기화 이슈(버전 누락, 무료 라이센스로 인한 일부 기능 사용 불가 등) 등을 대비하여 Google Workspace(무료 라이센스)를 사용합니다. Discord를 사용하여 팀원들과의 커뮤니케이션을 원활하게 진행할 수 있습니다.

### 4. 그 외 프로그램
- [Chrome](https://www.google.com/intl/ko_kr/chrome/)
- [Firefox](https://www.mozilla.org/ko/firefox/new/)

보통 Chrome을 사용해 작업을 진행하고 있습니다. 그러나, 3D 스튜디오로 제작하는 경우 Firefox를 사용해 작업한 것이 개발 경험 측면에서는 더 나은 것 같았습니다.

### 5. 운영체제
운영체제에 대한 선택은 자유롭습니다. 작성자 같은 경우에는 Windows 환경에서 개발을 진행하다가, 최근에는 Linux(Ubuntu) 환경에서 작업을 진행하고 있습니다. 본 포스트는 Ubuntu 환경을 기반으로 설명을 드리겠으나, Windows, macOS에서도 동일하게 적용될 수 있습니다.

## 스튜디오 선택(2D/3D)
레드브릭에서는 2D 스튜디오와 3D 스튜디오를 제공하고 있습니다. 본 포스트에서는 3D 스튜디오에서의 버전 관리와 협업 방법을 주로 다루겠습니다. 2D 스튜디오에서의 버전 관리와 협업에도 동일하게 적용할 수 있는 부분이 있으니 참고하시면 되겠습니다.

## 버전 관리 방법(3D)
본 단계에서부터는 쉽게 이해하시고 따라하실 수 있도록 간단한 예제를 준비했습니다. 아래 예제를 통해 레드브릭 스튜디오에서의 버전 관리 방법에 대해 설명하겠습니다.

### 1. 작업 환경 구성하기
위에서 설명한 권장 프로그램(Git, VS Code 등)을 모두 설치합니다. 예제를 따라하기 위해서는 Git과 VS Code는 필수로 설치 되어야 합니다.

### 2. repository 생성하기 
repository는 저장소입니다. 본 예제에서는 Github에 원격 저장소를 생성하여, 로컬 디바이스에서 작업한 내용을 원격 저장소에 반영하여 버전을 관리합니다.

repository를 생성하기 위해서는 Github 계정이 필요합니다. Github 계정이 없으면, 하나 생성합니다. 계정을 생성했으면, repository 탭에 들어간 다음, 상단에 있는 [New] 버튼을 클릭하여 repository 생성을 위한 준비를 합니다.

팀 단위로 작업을 하게 된다면 Organization을 적극 활용하시는 것을 추천드립니다. Organization 에서의 작업 방식도 동일합니다.

![img1](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img1.png)
<center> [repository 탭에 들어가기] </center><br>


repository를 생성합니다. 

- Owner: repository의 저장소 위치(개인 계정일 경우 사용자의 아이디, Organization일 경우 Organization의 아이디로 선택)

- Repository name: 저장소 이름

- Description: 저장소 설명

- 공개/비공개 여부: 
    - Public 선택 시 저장소 공개(누구나 볼 수 있음)
    - Private 선택시 저장소 비공개(개인 혹은 지정한 사용자만 볼 수 있음)

- Add a README file: README 파일 추가 옵션(체크 하는 것을 추천)
    - README file: 저장소를 설명하는 문서

- Add .gitignore: 저장소에 무시할 파일을 관리하는 파일 (옵션 사항)
- Choose a license: 라이센스 선택(옵션 사항)


필수로 입력해야 하는 사항은 에스터리스크(*)로 표시된 항목입니다.

![img2](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img2.png)
<center> [repository 생성하기] </center><br>


### 3. repository 클론하기

repository를 클론하고, 관리하는 방법은 다양합니다. 본 예제에서는 CLI를 사용하여 관리하는 방법으로 설명하겠습니다. Git 명령어가 익숙하지 않으신 분들은 GUI 툴(Github Desktop, Gitkraten 등)을 사용하시면 됩니다.

우선 생성한 repository를 로컬 디바이스로 클론하겠습니다. 상단에 있는 [code] 버튼을 클릭합니다.

![img3](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img3.png)
<center> [code 버튼 클릭하기] </center><br>


CLI에서도 clone을 하는 방법은 다양합니다. 작성자 같은 경우에는 Github CLI 항목에 있는 `gh`를 사용하여 클론하겠습니다.

![img4](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img4.png)
<center> [code 버튼 클릭하기] </center><br>


작성자 같은 경우에는 repository를 관리하는 `Github`라는 폴더를 생성하고, 해당 폴더 내부에서 repository를 clone하고 관리하고 있습니다. 이 경로에서 방금 생성한 repository에 대하여 클론을 진행하겠습니다.

![img5](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img5.png)
<center> [로컬 디바이스에서 경로 지정하기] </center><br>


repository를 로컬 디바이스에 정상적으로 클론하였습니다.

다른 OS를 사용하고 계시다면 위와 같은 방법으로 클론하시면 됩니다. 혹은 GUI 툴을 사용하여 클론을 진행하시면 됩니다.

![img6](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img6.png)
<center> [repository 클론 완료] </center><br>

### 4. Workspace 세팅하기
repository 클론을 완료하였다면, Workspace 설정을 진행해야 합니다. VS Code를 실행하여 방금 클론한 `폴더`를 열어줍니다. 단축키는 `Ctrl` + `K` + `O` 입니다.


![img7](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img7.png)
<center> [VS Code에서 폴더 열기] </center><br>

repository 폴더를 열었으면, 아래와 같이 Github에서 repository를 생성할 때 추가한 README.md 파일이 보입니다. 여기서 소스코드와 프로젝트 파일을 원활하게 관리하기 위해 디렉토리를 추가하겠습니다.

![img8](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img8.png)
<center> [VS Code에서 repository 폴더를 연 상태] </center><br>

작성자 같은 경우에는 Scripts 폴더를 생성하고 레드브릭 스튜디오에서 생성한 모든 소스코드 파일을 관리합니다. 프로젝트 파일(scene.json)은 repository 하위 경로에 배치하여 관리하고 있습니다.

![img9](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img9.png)
<center> [Scripts 폴더를 생성한 상태] </center><br>


### 5. 레드브릭 프로젝트 생성하기
레드브릭에서 프로젝트를 생성은 아래 영상을 참고하여 생성하시면 됩니다.

[레드브릭 프로젝트 생성 영상](https://youtu.be/CofBf2q0Bsc?si=498eEhGmIFPkwpO8&t=93)


![img10](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img10.png)
<center> [레드브릭 프로젝트 생성] </center><br>

### 6. 로컬 디바이스에서 프로그래밍하기
레드브릭에서 `Metaverse` 플랫폼으로 프로젝트를 생성하게 되면, `PresetScript.js` 파일이 내장되어 있습니다. 로컬 디바이스에서도 `Scripts` 폴더 내부에 `PresetScript.js` 파일을 똑같이 생성합니다. 이후, 레드브릭 스튜디오 내에 있는 `PresetScript.js` 코드를 복사해서 방금 로컬에서 생성한 `PresetScript.js`에 붙여 넣습니다.


![img11](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img11.png)
<center> [레드브릭 스튜디오에서의 PresetScript.js] </center><br>


![img12](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img12.png)
<center> [repository에서의 PresetScript.js] </center><br>

### 7. 레드브릭 스튜디오에 업데이트하기
새로운 스크립트를 생성하거나 기존 스크립트에서 로직이 변경 될 경우에는 레드브릭 스튜디오에 업데이트하여 테스트를 진행해 줘야 합니다.

예제로 아래 소스코드를 로컬 디바이스에서 먼저 작성한 후, 레드브릭 스튜디오에 업데이트하겠습니다.

<PresetScript.js>

```javascript

// //카메라가 플레이어 위치로부터 떨어진 거리, 로테이션 값
const CAMERA_POSITION_WEIGHT_Y = 40; 
const CAMERA_ROTATION_X = -90;
const CAMERA_ROTATION_Z = 0;

const avatar = REDBRICK.AvatarManager.createDefaultAvatar();
const camera = WORLD.getObject("MainCamera");
avatar.setDefaultController();

//카메라 Y값 및 로테이션 초기값 설정.
camera.position.y = CAMERA_POSITION_WEIGHT_Y;
camera.rotation.set(toRadians(CAMERA_ROTATION_X), 0, toRadians(CAMERA_ROTATION_Z)); //rotation.set() 메소드는 매개변수를 라디안으로 입력 받음.

// Degree (도)를 Radian (라디안)으로 변환하는 함수.
function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

//매 프레임 마다 카메라의 X와 Z값을 플레이어로부터 일정한 거리로 업데이트 해줌.
function Update(){
    camera.position.x = avatar.position.x;
    camera.position.z = avatar.position.z;
}

```

![img13](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img13.png)
<center> [repository에서의 PresetScript.js 수정] </center><br>

이제 수정한 코드를 전체 복사하여, 레드브릭 스튜디오에 있는 PresetScript.js에 업데이트합니다.

![img14](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img14.png)
<center> [레드브릭 스튜디오에서의 PresetScript.js 업데이트] </center><br>

### 8. 레드브릭 스튜디오에서 테스트하기
업데이트한 로직이 정상 작동 되는지 확인합니다. 

![img15](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img15.png)
<center> [제대로 작동 되는지 테스트] </center><br>

### 9. 프로젝트 파일 다운로드하기
정상 작동 되는 것을 확인하였습니다. 이제 레드브릭 프로젝트 파일을 저장합니다. 프로젝트 파일은 좌측 상단에 있는 `Menu` 아이콘에서 `Save to File` 을 통해 로컬 디바이스로 저장할 수 있습니다.

### 10. Workspace에 반영하기
저장된 프로젝트 파일(scene.json)은 Downloads 폴더에 위치해 있습니다. 해당 경로에서 scene.json 파일을 복사해 repository 내부로 이동시킵니다.

![img16](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img16.png)
<center> [레드브릭 프로젝트 파일 이동] </center><br>

### 11. 원격 저장소로 push하기
이제 로컬 디바이스에서의 변경 사항을 원격 저장소로 반영하겠습니다. 

먼저 아래 명령어를 통해 로컬 디바이스에 위치한 repository의 변경 사항이 있는지 확인합니다.

```bash
git status
```

현재 Scripts 폴더 내부에 있는 파일과 scene.json이 원격 저장소에 반영되지 않고 있는 것을 확인할 수 있습니다.

![img17](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img17.png)
<center> [repository 상태 확인] </center><br>

여기서 아래 명령어를 통해 모두 트래킹 할 수 있도록 합니다. git 관련 명령어는 정리 잘 된 블로그와 자료가 많으니, 찾아 보시는 것을 추천드립니다.

```bash
git add .
```

추가를 진행한 다음, 다시 `git status` 명령어를 통해 제대로 모든 파일이 트래킹 되었는지 확인합니다.


![img18](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img18.png)
<center> [모든 파일 트래킹] </center><br>

이후, commit 메시지를 작성합니다. commit convention은 취향입니다.

```bash
git commit -m ":tada: Create Project"
```

commit을 완료했다면, push를 진행해 줍니다.

```bash
git push
```

![img19](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img19.png)
<center> [git push를 통해 원격 저장소에 반영하기] </center><br>


Github에 들어가서 확인하면, 정상적으로 반영된 것을 알 수 있습니다.

![img20](/assets/img/2024_11_01/Redbrick_TeamCollaboration/img20.png)
<center> [Github에서 확인하기] </center><br>

위와 같은 방법으로 레드브릭 프로젝트와 관련 스크립트 파일에 대한 버전을 관리할 수 있습니다.



## 협업 방법(3D)
레드브릭에서 협업을 통해 같이 프로젝트를 개발하는 방법은 다양합니다. 하나의 레드브릭 프로젝트를 생성하고, 팀원들끼리 프로젝트 파일을 주고 받으며 기능을 추가할 수도 있습니다. 하지만, 이는 비효율적입니다. 작성자 같은 경우에는 다음과 같이 협업을 진행했습니다.

메인 프로젝트:  모든 기능을 담당하며 퍼블리싱으로 이어지는 프로젝트입니다.
서브 프로젝트1: 기능1을 구현하기 위해 팀원1이 생성한 서브 프로젝트입니다.
서브 프로젝트2: 기능2를 구현하기 위해 팀원2가 생성한 서브 프로젝트입니다.

이런식으로 프로젝트를 분활한 다음, 기능 구현이 완료되면, 메인 프로젝트에 반영하는 방식으로 작업을 진행했습니다. 물론, conflict가 발생하지 않도록 팀 내에서 컨벤션을 정하고 규칙을 작성하거나 discord 같은 협업 메신저를 통해 원활한 소통이 중요합니다.