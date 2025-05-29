---
title: Ubuntu에서 STM32CubeIDE를 설치하는 방법
description: "Ubuntu에서 STM32CubeIDE를 설치하는 방법에 대해서 다룹니다" # SEO & SNS 미리보기 (검색 노출을 위함)
author: cotes
date: 2025-05-29 19:50:00 +0900
categories: [STM32]
tags: [STM32, 개발, CubeIDE]
render_with_liquid: false
toc: true
image:  # 썸네일 (검색 노출을 위함)
pin: false #
---

## 들어가며
Ubuntu에서 STM32CubeIDE를 설치하는 방법에 대해 다루고 있다.


## 작업 환경
- Ubuntu 22.04 (Humble)

## 설치 파일 다운로드하기
공식 홈페이지에 있는 [STM32CubeIDE Install](https://www.st.com/en/development-tools/stm32cubeide.html)에 접속한다.

다양한 버전이 있는데, debian 버전(.deb)으로 설치를 진행한다. `Get latest` 버튼을 클릭하여 설치 파일을 다운로드한다.

![img](/assets/img/2025_05_29/How_to_Install_STM32CubeIDE/image.png)

`Log in to MyST` 버튼을 클릭하여 ST 계정으로 로그인을 먼저 진행하고 설치한다. `Download as a guest`를 통해 설치 파일만 먼저 다운로드할 수 있지만, 나중에 STM32를 build하기 위해서는 ST 계정이 무조건 필요하다. 따라서, 먼저 계정을 생성하고 설치를 진행하는 것을 추천한다.


## STM32CubeIDE 설치 진행하기
```bash
cd <다운로드한 경로>
chmod +x st-stm32cubeide_1.18.1_24813_20250409_2138_amd64.deb_bundle.sh # 권한 설정
./st-stm32cubeide_1.18.1_24813_20250409_2138_amd64.deb_bundle.sh # 설치 shell script 실행
```

라이센스 동의해서 설치를 진행해 주면 된다.

## STM32CubeIDE 실행하기
![img1](/assets/img/2025_05_29/How_to_Install_STM32CubeIDE/image-1.png)

검색창에서 `STM32CubeIDE` 프로그램 찾아서 실행하면 된다.


![img3](/assets/img/2025_05_29/How_to_Install_STM32CubeIDE/image-3.png)
정상적으로 Ubuntu에서 STM32CubeIDE가 실행된 것을 확인할 수 있다.