---
title: Windows11 부팅 USB로 설치하기
author: cotes
date: 2024-10-03 18:00:00 +0900
categories: [OS 설치하기]
tags: [Windows, FreeDos, Ubuntu, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 프리도스 환경의 노트북에서 윈도우11을 설치하는 방법에 대하여 안내하고 있다.

<br><br>

## 준비물
- Windows를 설치할 노트북 * 1
- Windows Booting USB(8GB이상) * 1
- Driver USB(4GB 이상) * 1 (필요한 경우)
- 유선 마우스 * 1

## 작성자 환경
- FreeDos 상태의 노트북 * 1
- Windows Booting System와 Driver를 설치할 PC * 1
- Booting USB(128GB) * 1
- Driver USB(32GB) * 1
- 유선 마우스 * 1

## Windows 소개
윈도우(Windows)는 마이크로소프트(Microsoft)에서 개발한 운영 체제로, 전 세계적으로 가장 널리 사용되는 상업용 운영 체제 중 하나이다. Windows는 데스크톱, 노트북, 서버, 그리고 태블릿까지 다양한 환경에서 사용 가능하다.


## FreeDos 소개
FreeDOS는 MS-DOS와 호환되는 오픈 소스 운영 체제로, MS-DOS의 기능을 대체하기 위해 개발된 무료 DOS(Disc Operating System) 운영 체제이다. 주로 오래된 DOS 기반 소프트웨어를 실행하거나 임베디드 시스템, 시스템 유지보수 및 복구용으로 사용된다.


## Windows11 Booting USB 설치하기
구글 검색창에서 `윈도우11 다운로드` 라고 입력한다. 이후 마이크로소프트사에서 지원하는 software-download 페이지로 들어간다.
![img1](/assets/img/2024_10_03/Windows11_Install_with_usb/img1.jpg)
<center>[구글에서 윈도우11 다운로드 검색]</center>
<br>

이후 최상단에 보이는 Windows 11 다운로드 페이지에 접속한다. 하단에 보이는 `Windows 11 설치 미디어 만들기` 항목에 들어가 `지금 다운로드` 버튼을 클릭한다.

![img2](/assets/img/2024_10_03/Windows11_Install_with_usb/img2.jpg)
<center>[Windows 11 설치 미디어 다운로드]</center>
<br>

다운로드가 되면 `mediacreationtool.exe` 이름의 파일 하나가 다운로드 되었다. 클릭하여 실행해 준다. `관련 통지 및 사용 조건` 항목이 나타나면 하단에 있는 `동의` 버튼을 클릭한다. 이후 `언어 및 버전 선택` 항목이 나타나면 본인이 설치하고 싶은 Windows의 언어를 선택하면 된다. 나는 영어 버전으로 선택하겠다.
![img3](/assets/img/2024_10_03/Windows11_Install_with_usb/img3.jpg)
<center>[Windows 언어 및 버전 선택]</center>
<br>

다음 버튼을 클릭해 준다. `사용할 미디어 선택` 항목에서 무조건 `USB 플래시 드라이브`를 선택해 준다.
![img4](/assets/img/2024_10_03/Windows11_Install_with_usb/img4.jpg)
<center>[Windows 사용할 미디어 선택]</center>
<br>

이후 Windows Booting System을 설치할 USB를 선택해 준다. Windows Booting System을 설치하게 되면 USB에 있는 모든 파일이 삭제되므로, 중요한 파일들은 미리 백업을 해주는 것이 좋다.
![img5](/assets/img/2024_10_03/Windows11_Install_with_usb/img5.jpg)
<center>[Windows 사용할 미디어 선택]</center>
<br>

설치가 완료되면 `마침` 버튼을 눌러 준다.
![img6](/assets/img/2024_10_03/Windows11_Install_with_usb/img6.jpg)
<center>[Windows Booting USB 설치 완료하기]</center>
<br>


## FreeDos에 Windows11 설치하기
Windows11 Booting System이 설치된 USB를 설치할 노트북에 장착한다. 이후, 노트북 전원을 키고 BIOS에 진입한다. 내가 사용하고 있는 레노버의 BIOS 진입 키는 `F12`이다. BIOS에 진입하면, boot device를 Windows11 Booting System을 설치한 `USB`로 지정한다.

![img7](/assets/img/2024_10_03/Windows11_Install_with_usb/img7.jpg)
<center>[BIOS 창에서 Windows11 Booting USB로 선택하기]</center>
<br>


![img8](/assets/img/2024_10_03/Windows11_Install_with_usb/img8.jpg)
<center>[Windows11 설치 화면1]</center>
<br>

이후 설정을 진행해 주면 Windows11이 설치 된다. 나 같은 경우애는 기존에 Windows11과 Ubuntu 22.04가 설치 되어 있어서 Patition을 다 지우고 설치했다.

![img9](/assets/img/2024_10_03/Windows11_Install_with_usb/img9.jpg)
<center>[Windows11 설치 화면2]</center>
<br>

참고로 내가 사용하고 있는 제품은 FreeDos 제품이므로, 네트워크 관련 드라이버가 설치되어 있지 않다. 그래서 미리 관련 드라이버를 설치해 놓은 USB를 장착해 설치를 진행해 주었다.


![img10](/assets/img/2024_10_03/Windows11_Install_with_usb/img10.jpg)
<center>[Windows11 추가 드라이버 설치 화면]</center>
<br>

이후 설정을 몇 번 더 해주면 Windows11이 설치된다.

![img11](/assets/img/2024_10_03/Windows11_Install_with_usb/img11.jpg)
<center>[Windows11 설치 완료]</center>
<br>


Windows11이 정상적으로 설치 되었다. 다음 포스트에서는 Ubuntu를 설치해 보겠다.