---
title: /Baram/Seminar/DeepLearning/Day1
author: cotes
date: 2024-03-18 12:30:00 +0900
categories: [Baram, Seminar]
tags: [blog]
render_with_liquid: false
toc: true
---
> 오늘은 광운대학교 로봇학부 동아리인 바람에서 진행하는 딥러닝 세미나에 참석했습니다.<br>
오늘은 딥러닝 세미나 1일차입니다.<br>
대학교에 진학해서 처음으로 참여하는 세미나여서 그런지 더욱 기대가 되었습니다.<br>
지금부터, 딥러닝 세미나 1일차에 참여하여 배우고 생각한 내용들을 정리하여 기록해 보겠습니다.

<br>

## 왜 AI를 공부해야 하는가?
> 제가 꿈꾸는 로봇을 만들기 위해서 AI를 공부해야 합니다.

그렇기에 저는 AI를 공부해야만 합니다.<br>
그렇다면 제가 꿈꾸는 로봇은 무엇일까요? <br>
### 1. 내가 생생하게 꿈꾸는 로봇은
제일 우선으로 만들고 싶은 로봇은 [안드로이드](https://namu.wiki/w/%EC%95%88%EB%93%9C%EB%A1%9C%EC%9D%B4%EB%93%9C)입니다.<br>
휴머노이드와 안드로이드는 비슷하게 보이지만 다른 개념입니다.<br>
휴머노이드가 아닌 안드로이드를 만들고 싶은 이유는 다음과 같습니다.
- 나노리스트의 [나노](https://namu.wiki/w/%EB%82%98%EB%85%B8(%EB%82%98%EB%85%B8%EB%A6%AC%EC%8A%A4%ED%8A%B8))같은 귀여운 안드로이드를 만들고 싶기 때문입니다.
- 사람과 같이 숨쉬고 행동하고 의사결정을 하는 로봇을 원하기 때문입니다.
- 안드로이드가 사람들 사이에서 함께 공존하는 그런 미래를 보고 싶기 때문입니다.

이 외에 다양한 이유와 꿈이 있기에 저는 안드로이드를 만들어 보다 더 행복하게 살고 싶습니다.<br>
어릴 적 안드로이드가 등장하는 나노리스트를 감명 깊게 봐서, 저도 나노리스트의 주인공과 같은 삶을 살아보고 싶기도 했습니다.<br>
물론, 지금도 그런 꿈을 생생하게 꿈꾸고 있습니다.<br>
나노 같은 귀여운 안드로이드가 나를 지켜주고 함께 해준다면 그 어떠한 일이라도 해낼 수 있을 것만 같았습니다.<br> 
만들기만 하고 끝이 아니라, 서비스 하고 유지보수 하는 것이 저의 목표입니다.<br>

<details>
<summary>(그 외에 관심 있는 분야의 로봇)</summary>
<div markdown="1">
그 다음으로 관심 있는 분야는 군사용 로봇(Military Robot)과 의료용 로봇(Medical Robot)입니다.<br>
간략하게 설명 드리겠습니다.<br>
군사용 로봇에 관심을 가지게 된 가장 큰 이유는 영화 아이언맨의 영향을 크게 받았습니다.<br>
의료용 로봇에 관심을 가지게 된 이유는 수술 로봇 다빈치가 멋있게 느껴졌으며 로봇 의수를 개발하시는 로봇 엔지니어이신 작은 아버지의 영향을 받았습니다.<br>
그렇기에 이러한 분야의 로봇에 관심을 가지게 되었습니다.
<br>
<br>
</div>
</details>
<br>
### 2. 상상의 로봇과 닮은 로봇의 공개
현 시점에서 공개된 로봇들 중에서, 제가 추구하고 꿈꾸는 로봇은 [피규어 사](https://www.figure.ai/)의 [Figure 01](https://www.youtube.com/watch?v=Sq1QZB5baNw)입니다.<br>
자연스러운 움직임과 Chat GPT의 인지-판단-사고 능력을 갖춘 `Figure 01`은 로봇 공학도들의 호기심을 자극한다고 생각합니다.<br>
> Fiqure 01은 몇 축 로봇일까?
{: .prompt-tip }
> 어깨 관절은 몇 개의 모터로 구성되어 있을까?
{: .prompt-tip }
등의 궁금증이 생겼습니다.<br>
로봇이나 IT기술 뿐만이 아니라 무언가를 보면 궁금해 해야하고, why?에 대한 해답을 계속 꼬리에 꼬리를 물어 저의 Schema에 닿을 때까지 생각하는 강박을 가지고 있는 것 같습니다.<br>
그래도 이번에 떠오른 why? 들은 강박이 아닌, 내면의 제가 순수하게 궁금해 하고 있다고 생각합니다.<br>
위에서 언급한 why?에 대한 해답은 포스팅 이후 찾아보고, 관련 내용을 추가해야겠습니다.<br>


불과 몇 십년 전만하더라도 휴머노이드인 휴보와 아시모가 공개되었고, 피규어 이전에는 테슬라사의 [옵티머스](https://namu.wiki/w/%ED%85%8C%EC%8A%AC%EB%9D%BC%20%EC%98%B5%ED%8B%B0%EB%A8%B8%EC%8A%A4)가 공개되었습니다.<br>
이렇게 급속도록 발전하는 로봇 산업을 보니 두근거리고, 전율이 흐릅니다.<br>

내용이 길어진 것 같습니다.<br>
이제 본격적으로 다음 내용에 대하여 정리하겠습니다.<br>

## AI, ML, DL ?
### 1. AI
AI(Artifical Inetelligence)는 인간의 지능을 모방한, 인공으로 만들어진 지능이라고 할 수 있습니다.
### 2. ML
ML(Machine Learning)은 알고리즘과 데이터의 융합된 AI라고 할 수 있습니다. <br>

### 3. DL
DL(Deep Learning)은 매우 진보된 형태의 ML이라고 할 수 있습니다. <br>
기존 ML이 처리하기 어려운, 크고 복잡한 data들을 처리하는 데 용이하게 사용됩니다.<br>
> 어떻게 DL은 ML보다 크고 복잡한 data들을 처리할 수 있을까?
{: .prompt-tip }
=> DL은 `Hidden Layer`를 무수히 많이 가지고 있기에 ML보다 크고 복잡한 data들을 처리할 수 있습니다.<br>
=> DL은 인간의 뉴런과 비슷한 인공 신경망을 무수히 많이 가지고 있습니다.
![HiddenLayer](/assets/img/2024_03_18/hiddenlayer-DeepAI.png)<br>
자료출처 : [deepai.org](https://deepai.org/machine-learning-glossary-and-terms/hidden-layer-machine-learning)

<br>
<br>

아래는 AI와 ML, DL의 관계를 나타내낸 자료입니다.<br>
![참고자료1](/assets/img/2024_03_18/ai_ml_dl_diagram.png)

### 알아두면 쓸모 있는 지식들
#### 1. 알콰리즈미
알고리즘은 [알콰리즈미](https://namu.wiki/w/%EC%95%8C%EC%BD%B0%EB%A6%AC%EC%A6%88%EB%AF%B8)라는 페르시아의 수학자로부터 유래되었습니다.<br>
#### 2. DT
DT는 Data Technology의 약어로, 데이터 시대를 의미합니다.<br>
> "이제는 IT(Information Technology)시대가 아닌, DT(Data Technology)의 시대다" 라는 말이 있습니다.<br>

관련 서적으로 [이것이 인공지능이다](https://product.kyobobook.co.kr/detail/S000001921136)라는 책을 추천합니다.<br>

#### 3. 중국어 방
[중국어 방](https://namu.wiki/w/%EC%A4%91%EA%B5%AD%EC%96%B4%20%EB%B0%A9)은 튜링 테스트의 반례를 위해 고안된 사고 실험입니다.<br>
인공지능이 인간의 감정을 이해하고 답변을 할까? 라는 호기심에 대한 답변은 중국어의 방 실험으로 답변이 가능합니다. <br>
중국어 방 실험을 통해서, 인공지능은 감정을 이해하고 답변하는 것이 아닌 감정을 이해하는 척하고 답변을 한다고 말씀드릴 수 있겠습니다.

## AI와 ML의 차이는 무엇인가?
AI와 ML은 동일하지 않습니다만, 밀접한 관계를 가지고 있습니다.<br>

|종류|AI|ML|
| :-: | :-: | :-: |
|Focusing|추론, 감지(포괄적)|data|

## ML vs DL
ML은 알고리즘과 빅데이터로 문제를 해결합니다.<br>
DL은 ML의 진보된 형태로, 스스로 패턴을 학습합니다.<br>
=> ML은 알고리즘에 따라 output을 도출하는 '레시피'로 비유할 수 있으며, DL은 사용자에게 조언까지 해주는 '요리사'로 비유할 수 있습니다.<br>
> Q. 어떻게 DL은 '조언'을 할 수 있을까?
{: .prompt-tip }
A. DL은 인공신경망을 가졌기 때문에 조언을 해줄 수 있습니다.<br>
> Q. 그러면 ML은 인공신경망을 안 가지고 있는가?
{: .prompt-tip }
A. 네, ML은 인공신경망을 가지고 있지 않습니다.<br>
DL은 인공신경망 방법을 이용하여 만든 ML이므로, ML은 인공신경망을 가지고 있지 않습니다.<br>
참고자료 : 코드스테이츠의 ['인공지능·머신러닝·딥러닝 차이점은?ㅣ개념부터 차이점까지 총 정리'](https://www.codestates.com/blog/content/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D-%EB%94%A5%EB%9F%AC%EB%8B%9D%EA%B0%9C%EB%85%90#:~:text=%EB%9D%BC%EA%B3%A0%20%EB%A7%90%ED%95%98%EA%B8%B0%EB%8F%84%20%ED%95%A9%EB%8B%88%EB%8B%A4.-,%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D%EC%9D%98%20%ED%8F%AC%ED%95%A8%EA%B4%80%EA%B3%84%EB%8A%94%3F,-%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%3E%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%20%3E%20%EB%94%A5%EB%9F%AC%EB%8B%9D)

<br>
<br>

## 인공신경망
인공신경망은 NN(Neural Network)라고 불립니다.<br>
NN은 여러개의 뉴런(노드)으로 연결되어 있습니다.<br>
따라서, 복잡한 데이터 처리와 패턴 처리가 가능합니다.<br>

### 1. DNN(Deep Neural Network)
DNN은 기존 NN보다 Hidden Layer(은닉층)가 deep하게 많은 형태입니다.<br>
은닉층이 많다는 것은, 문제 해결 능력이 뛰어나며 이는 학습 결과의 향상까지 이어집니다.<br>
(= 은닉층 많음 -> 해결 능력 뛰어남 -> 학습 결과 향상)<br>
![NN과 DNN의 차이](/assets/img/2024_03_18/NNvsDNN.png)<br>
참고자료 <1>

자료 출처 : 삶은 확률의 구름님의 ['[인공지능] ANN, DNN, CNN, RNN 개념과 차이'](https://ebbnflow.tistory.com/119#:~:text=%EC%88%98%20%EC%9E%88%EA%B2%8C%20%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.-,DNN(Deep%20Neural%20Network),-NN%20vs%20DNN) <br>

Image분석에 있어서는 DNN은 효과적이지 않습니다.<br>
이미지 공간 구조를 고려하지 않고 전체 픽셀을 한꺼번에 처리하기 때문입니다.<br>
그래서 등장한 것이 CNN입니다.<br>

### 2. CNN (Convolution Neural Network)
CNN(합성곱신경망)은 데이터의 특징을 추출하여 특징들의 패턴을 파악하는 구조입니다.<br>
![CNN 참고자료](/assets/img/2024_03_18/cnn-SlidingWindow.gif)<br>
자료 출처 : saisriteja kuppa님의 ['Deep Learning Series: Part 4'](https://medium.com/@kuppasaisriteja/deep-learning-series-part-4-978b1004af5b#:~:text=The%20convolution%20operation%20extracts%20patches) <br><br>

개와 고양이를 예시로 CNN에 대하여 마저 설명하겠습니다.<br>
개와 고양이의 이미지로 학습을 시킵니다.<br> 
개는 0이고, 고양이는 1입니다.<br>
학습하지 않았던 이미지가 input으로 들어오게 되면 학습했던 데이터를 통해 input으로 들어온 이미지가 개면 0을, 고양이면 1을 output으로 출력합니다.<br>
![CNN Model 참고자료](/assets/img/2024_03_18/CNN_Model.png)<br>


### 3. RNN (Recurrent Neural Network)
RNN(순환 신경망)은 연속형 데이터를 처리하기 위해 고안된 신경망 구조입니다.<br>
시계열 또는 순차 데이터를 예측하는 딥러닝을 위한 신경망 아키텍처라고 할 수도 있습니다.<br>
RNN은 자연어처리에서 사용됩니다.<br>
![RNN 참고자료](/assets/img/2024_03_18/RNN_Image.png)<br>
자료 출처 : yuns_u님의 ['순환 신경망(RNN, Recurrent Neural Network)'](https://velog.io/@yuns_u/%EC%88%9C%ED%99%98-%EC%8B%A0%EA%B2%BD%EB%A7%9DRNN-Recurrent-Neural-Network#:~:text=%EB%93%B1%ED%98%B8%EC%9D%98%20%EC%99%BC%EC%AA%BD%EC%9D%80%20RNN%EC%9D%98%20%EC%A0%84%EC%B2%B4%EC%A0%81%EC%9D%B8%20%EA%B5%AC%EC%A1%B0%EC%9D%B4%EB%8B%A4.)<br>

### 알아두면 쓸모 있는 지식들

#### 1. MNIST Dataset
MNIST Dataset은 손으로 쓰여진 숫자 데이터들의 대형 DB입니다.<br>
1986년, NIST에서 손으로 흘려 쓴 우편번호를 쉽게 파악하기 위해 시작된 데이터셋입니다.<br>
ML의 "Hello, World!"가 Iris Dataset이라면, DL에서는 MNIST라고 합니다.<br>
더 자세한 MNIST의 역사는 루나님의 ['딥러닝의 Hello World, MNIST 데이터셋'](https://brunch.co.kr/@hvnpoet/96)을 참고해주세요.<br>

#### 2. Sliding Window
MNIST Dataset중의 숫자 4입니다.<br>
사진과 같이 움직이는 방식을 Sliding Window 방식이라고 합니다.<br>
![Sliding Window 참고자료](/assets/img/2024_03_18/slidingwindow.png)<br>
자료 출처 : 별보는두더지님의 ['[논문 리뷰] CNN - Standard (기본) (Keras, PyTorch)'](https://mole-starseeker.tistory.com/11) <br>

## 행렬 (Matrix)
우리가 보는 이미지들은 RGB 각각 3개의 채널이 겹쳐져 3차원의 행렬로 표현됩니다.
![Matrix RGB 참고자료](/assets/img/2024_03_18/Matrix_RGB_Image.png)<br>
자료 출처 : 원본 자료 출처 확인 안 됨.

## 선형회귀 (Linear Regression)
선형회귀는 어떤 두 가지 것이 서로 어떤 관계가 있는지 알고 싶을 때 사용됩니다.<br>
![Sliding Window 참고자료](/assets/img/2024_03_18/LinearRegression.png)<br>
자료 출처 : 코사다마의 ['선형회귀분석'](https://curriculum.cosadama.com/machine-learning/3-2/#:~:text=%EC%98%A4%EC%B0%A8%EB%8A%94%20%ED%9A%8C%EA%B7%80%EC%84%A0%20%EC%9C%84%EC%9D%98%20%EA%B0%92%2C%20%EC%A6%89%20%EC%B6%94%EC%A0%95%EB%90%9C%20%EC%98%88%EC%B8%A1%EA%B0%92(%24%5Chat%7BY%7D%24)%EA%B3%BC%20%EC%8B%A4%EC%A0%9C%EA%B0%92(Y)%20%EA%B0%84%EC%9D%98%20%EC%B0%A8%EC%9D%B4%EB%A5%BC%20%EB%A7%90%ED%95%A9%EB%8B%88%EB%8B%A4.) <br>
가설을 예측 하는 직선은 아래과 같이 나타낼 수 있습니다.<br> 
$$y = Wx + b$$
W는 가중치이며, b는 편향입니다.<br>
직선의 방정식에서 기율기와 y절편을 선형회귀에서는 W와 b로 나타낸다고 말씀드릴 수 있습니다.<br>

### Loss Function
Loss Function은 대중적으로 손실함수라고 불리며, 비용함수, 목적함수, 오차함수로도 불립니다.<br>
딥러닝은 손실함수의 오차값을 최소화 시키는 것을 목표로 하는 작업입니다.<br>

## 정리

[인공지능의 분류] <br>
1. AI : 인간의 지능을 모방한 인공지능.
2. ML : 알고리즘과 빅데이터로 문제를 해결.
3. DL : 인공신경망을 이용하여 모델이 스스로 데이터를 분석 및 해결.

[NN] <br>
NN(Neural Network)은 인간의 뉴런을 모방하여 만든 구조입니다.<br>
NN은 퍼셉트론(노드)과 엣지로 구성되어 있습니다.<br>
주어진 입력에 대하여 W(가중치)와 b(편향)를 정해줘야 합니다.<br>
그러나, 딥러닝은 AI가 스스로 가중치와 편향을 알아낼 수 있습니다.<br>
NN에는 크게 세 종류가 존재합니다.<br>
1. DNN : 은닉층이 아주 깊고 많은 신경망.
2. CNN : Convolution을 사용하여 Sliding Window 이미지에 효과적인 신경망.
3. RNN : 언어와 시간에 아주 밀접한 관련이 있는 신경망.

[선형회귀] <br>
선형회귀는 두 변수간의 관계를 파악할 때 사용됩니다.<br>


## 마무리
오늘은 이렇게 바람에서 진행된 딥러닝 세미나 1일차에 참석하여 인공지능에 대하여 배울 수 있었습니다.<br>
개념 위주의 세미나이기에 인공지능에 대하여 거부감 없이 친숙하게 배울 수 있었던 것 같습니다.<br>
고등학생 때 배웠던 내용이지만, 까먹어서 기억이 잘 나지 않았습니다.<br>
그래도, 강의를 진행해주신 선배님께서 친절히 설명해 주셨기에 다시 떠올리며 복습할 수 있게 되었습니다.<br><br>

세미나 녹화 영상 : 바람 공식 유튜브 - [[파이썬 없이 배우는 딥러닝] OT & 인공지능의 기초 : 머신러닝과 딥러닝의 이해](https://youtu.be/4qwQ0qkHE08?si=Lj__aWTIuhcVvKK3)

## 참고자료
<1> 삶은 확률의 구름님의 ['[인공지능] ANN, DNN, CNN, RNN 개념과 차이'](https://ebbnflow.tistory.com/119#:~:text=%EC%88%98%20%EC%9E%88%EA%B2%8C%20%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.-,DNN(Deep%20Neural%20Network),-NN%20vs%20DNN)