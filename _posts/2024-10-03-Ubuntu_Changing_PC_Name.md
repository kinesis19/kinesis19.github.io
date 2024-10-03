---
title: Ubuntu에서 hostname(PC이름) 변경하기
author: cotes
date: 2024-10-04 06:00:00 +0900
categories: [Ubuntu]
tags: [Ubuntu, Command, Tutorial]
render_with_liquid: false
toc: true
---

본 포스트는 Ubuntu에서 hostname(PC이름)을 변경하는 방법에 대해 안내하고 있다.

<br><br>


## 작업 환경
- Ubuntu(22.04)

## Ubuntu에서 hostname 변경하기
hostname을 변경하기 위해서는 /etc/hostname 과 /etc/hosts 파일을 수정해야 한다.

변경 전 작성자의 hostname : kineiss-nanolist
변경 후 작성자의 hostname : nanolist

### 1. /etc/hostname 파일 수정하기
아래 명령어를 입력해 hostname 파일에 진입한다.

```bash
sudo nano /etc/hostname
```

현재 내 hostname에는 내가 변경하고 싶어하는 `kinesis-nanolist`가 존재한다. 해당 이름을 제거하고, 내가 원하는 이름 `nanolist`로 작성했다. 이후, `Ctrl` + `O`키를 눌러 저장한 후, `File Name to Write: /etc/hostname` 문구가 하단에 나타나면 `Enter`를 눌렀다. 그 다음, `Ctrl` + `X` 키를 눌러 빠져나왔다.

### 2. /etc/hosts 파일 수정하기
hostname을 수정했으니, hostname이 올바르게 매핑이 되도록 수정해보자.

```bash
sudo nano /etc/hosts
```

파일에 진입하면, 127.0.1.1 로 시작하는 부분에 변경을 원하는 이름(작성자 같은 경우에는 kinesis-nanolist)이 보일 것이다. 이 부분도 변경을 원하는 이름(작성자 같은 경우에는 nanolist)로 변경하여 저장 후 파일을 빠져나오자.

이후, 아래 명령어를 통해 시스템을 재부팅해주면 된다.

![img1](/assets/img/2024_10_04/Ubuntu_Changing_PC_Name/img1.png)
<center>[hostname 변경 전]</center>
<br>

![img2](/assets/img/2024_10_04/Ubuntu_Changing_PC_Name/img2.png)
<center>[hostname 변경 후]</center>
<br>