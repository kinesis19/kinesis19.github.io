---
title: Ubuntu를 부팅 USB로 설치하기
author: cotes
date: 2024-10-03 23:00:00 +0900
categories: [OS 설치하기]
tags: [Windows, FreeDos, Ubuntu, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 프리도스 환경의 노트북에서 우분투(22.04)를 설치하는 방법에 대하여 안내하고 있다.

<br><br>

## 준비물
- Ubuntu를 설치할 노트북 * 1
- Ubuntu Booting USB(8GB이상) * 1
- 유선 마우스 * 1

## 작성자 환경
- Ubuntu를 설치할 노트북 * 1
- Ubuntu Booting USB(8GB이상) * 1
- 유선 마우스 * 1

## 시작하기 전에..
Ubuntu를 설치하는 방법은 다양하다. 이번에는 로빛 17기이신 주장님의 포스트를 참고하여 진행하였다. 나 역시 주장님께서 포스트 하신 방법대로 진행할 예정이며, 느낀 부분과 실패한 케이스를 위주로 이번 포스트를 작성하려고 한다. 주장님의 설치 방법을 보고 진행할 사람들은 아래 포스트를 참고하는 게 도움이 될 것이다.

[[Linux] 001 : Ubuntu 설치 18.04/20.04/22.04. Rufus & Ventoy 사용법
](https://menggu1234.tistory.com/8)





## Ubuntu 소개
Ubuntu는 리눅스 기반의 오픈 소스 운영 체제로, Canonical이라는 회사에서 개발하고 유지 보수하고 있다. 이 운영 체제는 데비안(Debian) 리눅스를 기반으로 하여, 사용자에게 더 직관적이고 친숙한 환경을 제공하는 것이 특징이다. 주요 장점은 다음과 같다.

1. **무료 및 오픈 소스**: Ubuntu는 누구나 무료로 사용할 수 있으며, 오픈 소스이기 때문에 코드가 공개되어 있어 필요에 따라 수정하거나 기능을 추가할 수 있다.

2. **사용자 친화적**: 많은 리눅스 배포판 중에서도 Ubuntu는 상대적으로 직관적이고 사용하기 쉬운 그래픽 인터페이스를 제공하여, Windows나 macOS에서 리눅스로 처음 전환하는 사용자도 비교적 적은 어려움으로 적응할 수 있다.

3. **소프트웨어 지원 및 호환성**: 다양한 개발 도구, 애플리케이션과의 호환성이 뛰어나며, 소프트웨어 설치가 쉽도록 패키지 관리 시스템(apt)이 잘 구성되어 있다.

4. **장기 지원(LTS) 버전**: Ubuntu는 2년마다 장기 지원(LTS) 버전을 발표하는데, 이는 5년간 보안 업데이트와 버그 수정이 제공되어 안정성을 유지하는 데 매우 유리하다.

5. **커뮤니티 기반 지원**: 전 세계적으로 많은 Ubuntu 사용자와 개발자들이 존재하며, 이들로부터 방대한 온라인 자료와 기술 지원을 받을 수 있다. 이러한 커뮤니티는 사용자가 문제에 직면했을 때 중요한 자원이 된다.

6. **클라우드 및 서버 환경에 최적화**: Ubuntu는 데스크톱뿐만 아니라 서버 운영 환경에도 널리 사용된다. 특히 클라우드 인프라와의 호환성이 뛰어나, AWS, Azure, Google Cloud 같은 주요 클라우드 서비스에서 Ubuntu를 손쉽게 사용할 수 있다.

이러한 이유로 Ubuntu는 개인 사용자부터 기업, 서버 관리자, 클라우드 개발자들까지 폭넓게 선택받고 있는 운영 체제이다.

## Ubuntu 22.04 Booting USB 만들기

이제부터 Ubuntu를 설치하기 위한 Booting USB를 만들어보겠다. 내가 설치할 Ubuntu의 버전은 22.04이다. 나는 ROS2를 구동 시킬 것 이며, 다른 Ubuntu 프로그램과 호환성이 뛰어나 안정적인 버전인 22.04를 선택하게 되었다.

### 1. 윈도우 파티션 분할하기

Ubuntu를 설치할 때 그냥 Booting USB로 설치를 진행해도 되지만, 안정성을 위해 파티션 분할을 먼저 진행했다.

먼저 윈도우 화면에 보이는 윈도우 버튼을 우클릭한다.
![img1](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img1.jpg)
<center>[윈도우 버튼]</center>
<br>

여러 항목 중, Disk Management(디스크 관리)를 클릭한다.
![img2](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img2.jpg)
<center>[Disk Management 항목]</center>
<br>

내가 가지고 있는 노트북의 메모리는 1TB이다. 나는 `C:`라는 파티션을 대상으로 파티션 축소를 진행할 예정이다.

![img3](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img3.jpg)
<center>[파티션 목록]</center>
<br>

> 100MB가 할당 되어 있는 EFI System 파티션과 642MB가 할당 되어 있는 Recovery 파티션을 건들면 안 된다. (Recovery 파티션은 개인마다 할당된 용량이 다름) 왜 건들면 안 되는지 궁금하면 직접 해당 파티션을 축소해 보자.
{: .prompt-danger }

파티션 `C:`를 클릭해 선택된 상태에서 우클릭을 누르고, Shrink Volume을 선택해 파티션 축소를 진행한다.

![img4](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img4.jpg)
<center>[Shrink Volume을 클릭]</center>
<br>

현재 내가 파티션을 분할하여 사용할 수 있는 모든 파티션의 총 용량은 953GB이다. 나는 이 파티션을 다음과 같이 구성하여 사용려고 한다.
- Windows용 파티션(700GB) : Window 프로그램을 구동하기 위한 파티션.
- Ubuntu용 파티션(200GB) : Linux 프로그램을 구동하기 위한 파티션.
- 공유용 파티션(53G) : 윈도우와 우분투 사이로 파일을 공유하기 위한 로컬 파티션. 만약 당신이 클라우드 스토리지를 확보하고 있다면 클라우드 스토리지 사용도 괜찮은 방안이다.

나는 다음과 같은 순서대로 파티션 분할을 했다.

[순서]
1. `C:` 파티션에서 Ubuntu와 공용으로 사용할 파티션 만큼의 용량을 확보하여 파티션 축소를 진행함.
2. 순서1을 통해 생긴 파티션(253GB)에서 공용 파티션으로 사용할 용량(53GB) 만큼만 다시 파티션 축소를 진행함.
3. 과정1과 과정2를 통해 아무것도 할당되지 않은 파티션(200GB)은 Ubuntu를 위한 파티션이므로, Ubuntu 설치를 진행할 때 사용할 예정임.

Ubuntu용 파티션(253GB)과 공유용 파티션(53GB)는 다음과 같은 공식으로 인해 `259,072MB`만큼만 할당함.

> 1GB = 1024MB<br><br>
> 200GB = 1GB * 200 = 1024 * 200 = 204,800MB<br>
> 53GB = 1GB * 53 = 1024 * 53 = 54,272MB<br><br>
> 204,800MB + 54,272MB = 259,072MB<br>

![img5](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img5.jpg)
<center>[과정1 - Ubuntu & 공유용 파티션 분할하기]</center>
<br>

[과정1]을 통해 파티션 하나가 생겨났다. 그러나 지금은 아직 아무것도 할당 되지 않은 상태이다. 여기서 방금 생긴 검정색 파티션을 클릭 및 우클릭하여 `공유용 파티션`을 생성해준다.

![img6](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img6.jpg)
<center>[새로 생성되었지만 할당되지 않은 파티션(253GB)]</center>
<br>

위에서 `Simple Volume`을 클릭했다. 이제 공유용 파티션을 만들어야 한다. 그리고 할당되지 않고 남은 파티션은 Ubuntu용 파티션으로 사용할 것이다.

![img7](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img7.jpg)
<center>[공유용 파티션 생성을 위한 용량 할당]</center>
<br>

생성을 진행하다보면 Format Patition 단계에 들어오게 된다. 이 단계에서 다른 것은 건들지 말고, 이름만 변경해 주었다. 나는 Shared로 변경해 주었다.

할당을 완료해 주면, 아래 사진과 같이 Shared라는 새로운 파티션이 생성된 것을 알 수 있다. 이제 아무것도 할당되지 않은 저 파티션(200GB)에 Ubuntu를 설치할 거다.

![img8](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img8.jpg)
<center>[공유용 파티션이 정상적으로 할당된 상태]</center>
<br>


### 2. Ubuntu Booting USB 만들기
Ubuntu를 설치하기 위한 방법은 여러가지가 있다. Rufus를 사용해 만들어도 되고, Ventoy를 사용해서 만들어도 된다. 각각의 장단점이 존재하겠지만, 나는 익숙한 Rufus를 사용해서 Ubuntu용 Booting USB를 만들었다.

먼저 Rufus 공식 홈페이지에 들어간다.

[https://rufus.ie/en/](https://rufus.ie/en/)

들어가서 화면을 내리다보면 `Download` 항목이 보인다. 각자 알맞는 운영체제를 선택하면 된다. 나는 `rufus-4.5p.exe`를 다운로드했다.

![img9](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img9.jpg)
<center>[Rufus 다운로드하기]</center>
<br>

Rufus를 다운로드 했다면, Ubuntu를 다운로드하자.

[Ubuntu 22.04 설치 페이지]

[https://releases.ubuntu.com/jammy/](https://releases.ubuntu.com/jammy/)

페이지에 들어가면 Desktop image를 설치할 수 있는 텍스트가 있다. 해당 텍스트를 클릭하여 다운로드를 진행한다. 내가 설치한 Ubuntu 버전은 22.04이다. 여담으로 처음에 24.04를 설치했다가 다시 지우느라 고생했었다. 

![img10](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img10.jpg)
<center>[Ubuntu 22.04 다운로드하기]</center>
<br>

Ubuntu 22.04 파일을 다운로드 하는 시간은 상당히 길다. 그야 OS를 구동하기 위한 이미지 파일을 설치하는 것이기에 오랫동안 기다려야 한다. 웹툰을 보거나, 유튜브를 보거나, 백준에서 문제 풀이를 하면서 기다리다보면 우분투가 설치된 모습을 확인할 수 있다.

Ubutu가 다 설치 되었다면, Rufus를 실행해준다. 그리고 아래와 같은 순서대로 진행하면 된다.
1. Rufus에서 Ubuntu Booting USB로 사용할 Device를 선택한다.
2. Boot selectin 항목에서 `SELECT` 버튼을 클릭 -> 설치한 Ubuntu 이미지 파일 `ubuntu-22.04.5-desktop-amd64`을 선택한다.
3. 정상적으로 설정되었으면 `START` 버튼을 클릭하여 Booting USB를 만든다.

![img11](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img11.jpg)
<center>[Booting USB 만들기]</center>
<br>


### 3. BIOS에 진입해서 Ubuntu 설치하기
Booting USB를 성공적으로 설정하였다면, USB를 제거하고 노트북을 종료한다. 이후, 해당 USB를 장착한 상태에서 전원을 다시 킨다. 이때 주의할 점은 BIOS에 진입해야 하는 것이다. BIOS에 진입 하는 방법은 메이커마다 다르다. 레노버 같은 경우에는 `F12` 키를 연타하여 진입할 수 있다.

BIOS창에 진입했다면, Boot device를 USB로 변경해준다.

![img12](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img12.jpg)
<center>[Boot device 변경하기]</center>
<br>

아래 사진과 같은 화면이 나타날텐데, `Try or Install Ubuntu` 항목이 선택된 상태에서 `Enter`를 누른다. (가만이 있어도 어느정도 시간이 지나면 자동으로 선택된 항목으로 이동된다)

![img13](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img13.jpg)
<center>[Ubuntu 설치 선택]</center>
<br>

Install 창이 뜨면 `Try Ubuntu` 항목과 `Install Ubuntu` 항목이 나타난다. 여기서 `Install Ubuntu` 항목을 선택하여 Ubuntu 설치를 진행해준다.


![img14](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img14.jpg)
<center>[Install Ubuntu 선택]</center>
<br>

아래 사진과 같이 Keyboard layout을 설정하는 화면이 나타난다. 우선은 `English`로 설정하자. 한글 키보드 활성화 방법은 나중에 안내하겠다.

![img15](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img15.jpg)
<center>[Keyboard layout 선택]</center>
<br>

Wireless 항목에서는 와이파이 연결을 해줄 수 있다. 나는 Ubuntu를 설치하고 있는 시점에 학교 와이파이를 사용하고 있으므로, 학교 와이파이에 연결해 주었다.


![img16](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img16.jpg)
<center>[와이파이 연결]</center>
<br>

그 다음으로 Ubuntu와 기타 software를 업데이트했다. other options에서 `Install third-party software for graphics and Wi-Fi hardware and addotional media formats.`를 선택하여 업데이트를 진행해 주었다. 해당 옵션은 그래픽 카드와 Wi-Fi 하드웨어의 전용 드라이버를 설치하고, MP3, H.264 같은 추가 미디어 코덱을 포함한다. 이를 선택하면 하드웨어 성능을 최적화하고 다양한 미디어 파일을 재생할 수 있다. 선택하지 않으면 이후에 별도로 드라이버와 코덱을 설치해야 할 수 있다.

![img17](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img17.jpg)
<center>[third-party software 설치]</center>
<br>

이제 Installation type 창이 나타난다. 여기서 맨 아래에 있는 `Something else` 항목을 선택해서 전에 나눠 놓은 파티션에 설치할 수 있도록 한다.

![img18](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img18.jpg)
<center>[Installation Type 선택]</center>
<br>

Ubuntu를 설치하기 위해 비워 놓은 파티션을 선택한다. 만약, 사용하려는 파티션이 다르거나 free space로 나타나 있지 않다면 해당 Device를 선택 후 `Delete`를 통해 파티션 초기화를 진행한다. 

> 이 작업은 신중해야 한다. 이 포스트에서는 자세하게 안내하지 않으나, 구글링 혹은 GPT 같은 AI 플랫폼을 사용하여 정확한 방법을 따라하도록 하자. (예전에 나는 사용하려는 파티션이 무언가로 채워져 있어서 `Delete`를 통해 초기화한 후 사용했었다.)
{: .prompt-danger }

![img19](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img19.jpg)
<center>[파티션 선택하기]</center>
<br>


선택을 했으면 좌측 하단에 있는 `+` 버튼을 클릭한다. 윈도우에서 우분투를 깔기 위해 남겨 놓은 파티션에서 세부 설정을 해야 한다. 관련 내용은 주장님께서 작성하신 [포스트]에 자세히 안내 되어 있다.

여기서 나는 우분투를 위해 따로 빼 놓은 공간을 전부 선택해 주었다. 그리고 `Type for the new partition`을 `Logical`로, `Mount point`를 `/`로 할당해 주었다.
> `/`는 root partition을 의미한다고 한다.
{: .prompt-tip }

![img20](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img20.jpg)
<center>[파티션 만들기 - 세부 설정]</center>
<br>

이후, free space였던 부분에 Ubuntu 파티션이 대상으로 할당 되었는지 확인하고, `Install Now` 버튼을 눌러 설치를 진행한다. 다음 사진과 같은 경고 창은 해당 disk를 Ubuntu를 구동하기 위한 disk로 사용할 것인지 묻는 문구로, `Continue` 버튼을 통해 설치를 진행한다.

![img21](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img21.jpg)
<center>[파티션 만들기 - 생성]</center>
<br>

위치는 현재 내가 위치해 있는 `Seoul`로 자동 선택 되어 있었다.

![img22](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img22.jpg)
<center>[언어 선택]</center>
<br>

이제 Ubuntu에서 사용할 이름을 설정해 준다. 아래 예시를 준비했다. 

linux 명령창을 본 사람들은 알 것이다. 아래 terminal 구조를 보면서 설정을 잘 해주도록 하자. 물론, computer's name을 잘못 설정해도 큰 문제는 없다. 명령어로 바꾸면 된다.

```bash
(Pick a username)@(Your computer's name):/ 식으로 되어 있다.
```

![img23](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img23.jpg)
<center>[Ubuntu 이름 설정]</center>
<br>

설치가 되고 있다.

![img24](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img24.jpg)
<center>[Ubuntu 설치가 되고 있는 모습]</center>
<br>

설치가 완료되면 재시작하라고 창이 나타날텐데, `Restart Now` 버튼을 클릭해주면 된다.

재시작을 진행하면 `Please remove the installation medium, then press ENTER:`라는 문구가 나타날 것이다. 이때, ENTER키를 눌러준다.

![img25](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img25.jpg)
<center>[안내 문구]</center>
<br>

ENTER를 누르고 시간이 흐르면 아래와 같은 창이 나타날텐데, 최상단에 있는 `Ubuntu` 항목이 선택된 상태에서 다시 `ENTER`를 누른다.

Windows11로 부팅하고 싶으면 방향키(Up, Down)를 이용해 `Windows Boot Manager` 항목이 선택된 상태에서 `ENTER` 버튼을 누르면 된다.

![img26](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img26.jpg)
<center>[Boot Select]</center>
<br>

화면에 내가 설정한 이름이 나타났다. 좌클릭은 안 먹히는 듯하니 우클릭으로 선택 및 패스워드를 입력해 로그인해준다.

![img27](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img27.jpg)
<center>[우분투 로그인]</center>
<br>

우분투에 성공적으로 로그인하였다. 이제 두근두근 신나는 커스터마이징을 할 준비가 되었다. 우분투를 사용하면서 필요한 프로그램과 설치 방법은 이후에 다루도록 하겠다.

![img28](/assets/img/2024_10_03/Ubuntu_Install_with_usb/img28.jpg)
<center>[리눅스 로그인]</center>
<br>

## 마무리
지금까지 Ubuntu를 구동하기 위해 Booting System USB를 만들고, 설치 및 실행까지 진행했다. 이후 Windows로 로그인하고 싶다면 우분투를 종료하고 재시작시 `Windows Boot Manager`를 선택하면 된다.