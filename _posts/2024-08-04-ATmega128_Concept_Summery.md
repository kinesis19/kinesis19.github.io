---
title: ATmega128 개념 정리
author: cotes
date: 2024-08-04 15:00:00 +0900
categories: [ATmega128]
tags: [ATmega128, Robit, Study]
render_with_liquid: false
toc: true
---

본 포스트는 ATmega128을 공부하면서 처음 접하거나, 이해하지 못 했거나, 궁금한 개념 및 모든 요소에 대한 내용을 공부하고 작성 및 정리하여 관리하는 용도의 포스트입니다.

<br><br>

# Register 정리
## I/O Register
### DDRx
DDRx(Data Direction Register x)는 각 PIN들의 출력 방향을 I/O으로 설정합니다.
- 1 : 출력
- 0 : 입력

[예시1]
```c
DDRA = 0xFF;
```
A포트를 전체 출력으로 설정합니다.

[예시2]
```c
DDRD = 0x00;
```
D포트를 전체 입력으로 설정합니다.

<br>

### PORTx
출력용 데이터 값을 설정합니다.
- 1 : 5V (High)
- 0 : 0V (Low)

[예시1]
```c
PORTA = 0xFF;
```
A포트에 전체 5V를 출력합니다.
제가 사용하고 있는 ATmega128의 회로는 Active-Low 방식이므로, 5V가 흐르게 되면 PORTA에 연결된 LED 센서에 불빛이 안 들어옵니다.

[예시2]
```c
PORTA = 0x00;
```
A포트에 전체 0V를 출력합니다.

<br>

### PIN
입력으로 설정된 PIN의 값을 읽습니다.

<br>

### DDRx, PORTx, PINx의 연관성?
DDRx, PORTx, PINx 등을 레지스터라고 부릅니다.
PIN51 : PA0 = PORTA의 첫 번째 포트.
DDRA = PORTA의 입출력을 설정하는 레지스터.

<br>

[참고자료]
- [[AVR 기초][ATmega128] DDR, PORT, PIN, LED 8개 깜빡이기](https://blog.naver.com/PostView.naver?blogId=kim-nan-hee&logNo=221990648689&categoryNo=19&parentCategoryNo=0)

- [아트메가128의 DDRx,PORTx,PINx,포트특징 알아보기](https://wowon.tistory.com/55)

<br><br>

## Interrupt Register
### SREG
SREG(Status Register)는 Global Interrupt의 사용 여부를 설정합니다. index7 비트의 값에 따라 Global Interrupt를 활성화하거나 비활성화 할 수 있습니다.

![ATmega128_SREG.png](/assets/img/2024_08_04/ATmega128_SREG.png)

- 1 : 모든 Interrupt 활성화
- 0 : 모든 Interrupt 비활성화

비트7(I)는 CPU Interrupt를 전역으로 제어하는 비트입니다.


> Microchip Studio에서 SREG가 정상 작동 되지 않는 이슈가 있습니다. 따라서, SREG를 사용해 index7 비트를 직접 활성화 해주는 것 대신, sei() 함수를 사용하여 Global Interrupt를 활성화 해줄 수 있습니다.
{: .prompt-danger }


<br>

### EIMSK
EIMSK(External Interrupt Mask Register)는 INT 0번 핀부터 INT 7번 핀의 활성화 여부를 설정합니다.
![ATmega128_EIMSK.png](/assets/img/2024_08_04/ATmega128_EIMSK.png)

- 1 : 활성화
- 0 : 비활성화

reset하면 해당 interrupt가 금지 됩니다.
(Vector Num : 0, Program Address : $0000)

<br>

### EICRx
INTx PIN을 제어할 수 있는 레지스터입니다.
EICRx 레지스터는 두 가지로 나뉩니다.

#### EICRA
EICRA(External Interrupt Control Register A)는 INT0부터 ~ INT3까지 핀에 대하여 설정 값을 관리합니다. 
![ATmega128_EICRA.png](/assets/img/2024_08_04/ATmega128_EICRA.png)

#### EICRB
EICRA(External Interrupt Control Register B)는 INT4부터 ~ INT7까지 핀에 대하여 설정 값을 관리합니다. 
![ATmega128_EICRB.png](/assets/img/2024_08_04/ATmega128_EICRB.png)

<br>

### sei()
SREG에서 비트7의 값을 1로 설정합니다.

<br><br>

## ADC Register

### ADMUX
ADMUX(ADC Multiplexer Selection Register)는 AD 변환을 위한 Reference Voltage(기준 전압)와 Input Voltage(입력 전압)를 선택하는 데 사용됩니다.

![ATmega128_ADMUX.png](/assets/img/2024_08_04/ATmega128_ADMUX.png)

> [!Bit7, Bit6]
> 
> Bit7, 6은 각각 REFS1, REF0(Reference Selection Bit)를 담당하고 있습니다.
>
> | REFS1 | REFS0 | Reference Voltage |
> | :---: | :---: | :---: |
> |   0   |   0   | 외부의 AREF 단자로 입력된 전압을 사용 |
> |   0   |   1   | 외부의 AVCC 단자로 입력된 전압을 사용 |
> |   1   |   0   | - |
> |   1   |   1   | 내부의 2.56V를 사용 |

> [Bit 5]
> Bit5는 ADLAR(ADC Left Adjust Result) 기능을 확보하고 있습니다.
> ADLAR 값이 1이면, 변환 결과 값을 ADCH/L에 저장할 때 좌측으로 끝을 맞추어 저장합니다.

> [Bit4:0]
> Bit4부터 ~ Bit0까지 각각 MUXn (Analog Channel and Gain Selection Bit) 기능을 확보하고 있습니다.
> MUXn은 ADC에 연결되는 Analog Input Channel과 Differential Input Channel(차동 입력 채널)에 대한 선택을 할 수 있습니다.



### ADCSRA
ADCSRA(ADC Control and Status Register A)는 AD Conversion을 Control하거나 AD Conversion의 Status를 나타내는 데 사용됩니다.

![ATmega128_ADCSRA.png](/assets/img/2024_08_04/ATmega128_ADCSRA.png)

> [Bit7]
> ADEN(ADC Enable) : ADC Enable Bit입니다.
> 1 : Enable
> 0 : Disable(default)

> [Bit6]
> ADSC(Analog Start Conversion) : ADC Conversion을 Start합니다.
> 1 : Enable
> 0 : Disable(default)
> 단일 변환 모드일 때 단 한 번만 작동됩니다. Free Running Mode일 때, Conversion 동작을 반복합니다.

> [Bit5]
> ADFR(ADC Free Running Start) : ADC Free Running Mode입니다.
> 1 : Free Running Mode -> 연속해서 Conversion하는 Mode.
> 0 : Single Conversion Mode(default) -> 한 번씩 Conversion하는 Mode.

> [Bit4]
> ADIF(ADC Interrupt Flag) : ADC Conversion Done Interrupt가 request되고, 그 Status를 이 Bit(4)에 표시합니다.

> [Bit3]
> ADIE(ADC Interrupt Enable) : ADC Interrupt 활성화 관련 Bit입니다.
> 1 : Enable
> 0 : Disable(default)

> [Bit2:0]
> ADPS(ADC Prescaler Select Bit) : ADC에 인가되는 클럭(clock)의 분주비를 설정합니다.
> 
> | ADPS2 | ADPS1 | ASPS0 | Prescaler |
> | :---: | :---: | :---: | :---: | 
> | 0 | 0 | 0 | 1 |
> | 0 | 0 | 1 | 2 |
> | 0 | 1 | 0 | 4 |
> | 0 | 1 | 1 | 8 |
> | 1 | 0 | 0 | 16 |
> | 1 | 0 | 1 | 32 |
> | 1 | 1 | 0 | 64 |
> | 1 | 1 | 1 | 128 |

### ADCH/L
ADC의 Conversion Result를 Save합니다.

#### ADLAR = 0일 떄,
![ATmega128_ADLAR_0.png](/assets/img/2024_08_04/ATmega128_ADLAR_0.png)

Conversion Result를 ADCH/L에 저장할 때, 우측으로 끝을 맞추어 저장합니다.

#### ADLAR = 1일 때,
![ATmega128_ADLAR_1.png](/assets/img/2024_08_04/ATmega128_ADLAR_1.png)
Conversion Result를 ADCH/L에 저장할 때, 좌측으로 끝을 맞추어 저장합니다.

<br><br>

## UART Register
USART 0과 1을 제어하기 위해서는 USART 0 / 1 관련 레지스터( UDRn, UCSRnA, UCSRnB, UCSRnC, UBRRnH, UBRRnL )의 사용법을 알아야 합니다.
### URDn(Usart I/O Data Register)
![ATmega128_UART_URDn.png](/assets/img/2024_08_04/ATmega128_UART_URDn.png)
- UDRn 레지스터는 송/수신되는 Data 값을 저장하는 버퍼역할을 하게 됩니다.
- 송신할 때는 TXBn의 Data를 전송합니다.
- 수신할 때는 RXBn의 Data를 저장하게 됩니다.

<br>

### UCSRnA (Usart Control and Status Register A)
![ATmega128_UART_UCSRnA.png](/assets/img/2024_08_04/ATmega128_UART_UCSRnA.png)

> [Bit 1]
> U2Xn(Double the USART Transmission Speed)
> 비동기 모드에서만 유효한 것으로서, 클럭의 분주비를 16에서 8로 절반만큼 낮추어 전송 속도를 2배 높이는 기능을 수행합니다.
> - U2Xn = 0 : 분주비 16
> - U2Xn = 1 : 분주비 8

> [Bit 0]
> MPCMn(USART Multi-Processor Communication Mode)
> - MPCMn = 1 : 멀티프로세서 통신모드로 설정한다.

<br>

### UCSRnB (Usart Control and Status Register B)
![ATmega128_UART_UCSRnB.png](/assets/img/2024_08_04/ATmega128_UART_UCSRnB.png)

> [Bit 7]
> RXCIEn(RX Complete Interrupt Enable)
> - RXCIEn = 1 : 수신완료 인터럽트 활성화, UCSRnA의 RXn이 1이되면 인터럽트 발생됩니다.

> [Bit 6]
> TXCIEn(TX Complete Interrupt Enable)
> - TXCIEn = 1 : 송신완료 인터럽트 활성화, UCSRnA의 TXn이 1이되면 인터럽트 발생됩니다.


> [Bit 5]
> UDRIEn(Data Register Empty Interrupt Enable)
> - UDRIEn = 1 : 송신 데이터 레지스터 준비완료 인터럽트 활성화, UCSRnA의 UDREn이 1이되면 인터럽트 발생됩니다.

> [Bit 4]
> RXENn(Receiver Enable)
> - RXENn = 1 : 수신 동작 활성화, I/O핀이 아닌 통신핀으로 동작하도록 합니다.

> [Bit 3]
> TXENn(Transmitter Enable)
> - TXENn = 1 : 송신 동작 활성화, I/O핀이 아닌 통신핀으로 동작하도록 합니다.

> [Bit 2]
> UCSZn2(Character Size)
> UCSZnC의 UCSZn1~UCSZn0 bit와 함께 전송 문자의 데이터 bit수를 설정합니다.

> [Bit 1]
> RXB8n(Receive Data Bit 8)
> 전송 데이터수가 9로 설정된 경우 수신된 9번째 데이터를 저장하게 됩니다.
> UDRn 레지스터보다 먼저 읽혀야 합니다.

> [Bit 0]
> TXB8n(Transmit Data Bit 8)
> 전송 데이터수가 9로 설정된 경우 송신될 9번째 데이터를 저장하게 됩니다.
> UDRn 레지스터보다 먼저 쓰여야 합니다.

<br>

### UCSRnC (Usart Control and Status Register C)
![ATmega128_UART_UCSRnC.png](/assets/img/2024_08_04/ATmega128_UART_UCSRnC.png)

> [Bit 6]
> USMSELn(Mode Select)
> - USMSELn = 1 : 동기 전송 모드
> - USMSELn = 0 : 비동기 전송 모드


> [Bit 5:4]
> UPMn1, UPMn0(Parity Mode)
> ![ATmega128_UART_UPMnBitsSettings.png](/assets/img/2024_08_04/ATmega128_UART_UPMnBitsSettings.png)

> [Bit 3]
> USBSn(Stop Bit Select)
> - USBSn = 1 : Stop bit 2개로 설정
> - USBSn = 0 : Stop bit 1개로 설정

> [Bit 2:1]
> UCSZn1, UCSZn0(Character Size)
> UCSRnB의 UCSZn2 bit와 함께 전송합니다.
> 문자의 데이터 bit수를 설정합니다.
> ![ATmega128_UART_UCSZnBitsSettings.png](/assets/img/2024_08_04/ATmega128_UART_UCSZnBitsSettings.png)


> [Bit 0]
> UCPOLn(Clock Polarity)
> 동기 전송 모드의 슬레이브 동작에서만 사용됩니다.
> - UCPOLn = 1 : 송신데이터는 XCKn 클럭의 하강 엣지에서 새로운 값이 출력
> 수신데이터는 XCKn 클럭의 상승 엣지에서 검출됩니다.
> - UCPOLn = 0 : 송신데이터는 XCKn 클럭의 상승 엣지에서 새로운 값이 출력
> 수신데이터는 XCKn 클럭의 하강 엣지에서 검출됩니다.
> 

<br>

### UBRRnH/L (Baud Rate Register)
![ATmega128_UART_HBRRnHL.png](/assets/img/2024_08_04/ATmega128_UART_HBRRnHL.png)
USART의 송/수신 속도를 설정합니다. **UBRRnL 설정 후 UBRRnH를 나중에 write 해야 합니다.**

<br><br>


## Timer Interrupt Register
Timer Interrupt를 제어하기 위해서는 TIMSK, TCCRn, TCNTn register의 사용법을 알아야 합니다.
### TIMSK
TIMSK(Timer Interrupt Mask Register)


<br><br>


# 개념 정리

## Switch 관련 개념

### Switch 연결 방식
#### 1. Pull Up 방식
Pull Up 방식은 Floating 상태일 때 값을 끌어올리는 방식입니다.
Switch가 눌렸을 때는 논리값 0이 입력됩니다.
![ATmega128_Switch_PullUp.png](/assets/img/2024_08_04/ATmega128_Switch_PullUp.jpg)

#### 2. Pull Down 방식
Pull Down 방식은 Floating 상태일 때 값을 끌어내리는 방식입니다.
Switch가 눌렸을 때는 논리값 1이 입력됩니다.
![ATmega128_Switch_PullDown.png](/assets/img/2024_08_04/ATmega128_Switch_PullDown.jpg)


[참고자료]
- [pullup, pulldown](https://pjw97.tistory.com/entry/pullup-pulldown)
- [IO(Input and Output) - 2](https://m.blog.naver.com/alsrb968/220755036862)
<br>

### Floating 상태
스위치가 떨어져 입력이 5V인지, 0V인지 알 수 없는 상태를 의미합니다.

<br>

### Chattering 현상
스위치의 상태가 변하는 순간 기계적 진동에 의해 매우 짧은 시간 이내에 열림과 닫힘이 반복 되는 현상을 의미합니다. 한 번의 스위치 눌림이 여러 번 눌린 것처럼 인식 되는 현상입니다.

#### 해결 방안
[커패시터](https://namu.wiki/w/%EC%BB%A4%ED%8C%A8%EC%8B%9C%ED%84%B0)를 사용하여 Chattering 현상을 방지할 수 있습니다.



## Interrupt 관련 개념
Interrupt는 CPU가 현재 작업 중인 일보다 먼저 처리해야 하는 급한 일이 발행하면, 현재 작업을 잠시 중단하고 급한 일을 처리한 후 원래 일을 수행하는 작업을 의미합니다.

[처리 순서]
Interrupt 발생 -> 현재 실행 중인 프로그램의 주소 저장 -> ISR 실행 -> ISR 종료 후 기존 프로그램의 중지된 부분부터 다시 실행.

<br>

### Interrupt 우선순위
Interrupt 요청이 중복되는 경우, 우선순위가 높은 Interrupt가 먼저 실행됩니다.
- [Data Sheet p.59](https://ww1.microchip.com/downloads/en/devicedoc/doc2467.pdf)

<br>

### ISR
ISR(Interrupt Service Routine)은 Interrupt가 발생되었을 때 처리되는 작업입니다.

<br>

### External Interrupt
외부핀 INT0부터 ~ INT7까지 직접 입력되는(High & Low) 값으로 인터럽트 신호가 발생하여 미리 정해놓은 ISR이 실행되는 작업입니다.

<br>

### 감지 방법
![ATmega128_Interrupt_Sense_Control.png](/assets/img/2024_08_04/ATmega128_Interrupt_Sensing_Way.jpg)


<br><br>

## ADC 관련 개념
A/D Convertor(Analog to Digital Convertor)는 연속적인 Analog Signal을 부호화된 Digital Signal로 변환하는 기계 장치입니다.

예시)
- 온도
- 습도
- 압력 등.

### 변환 과정

Analog Signal을 표본화 -> 양자와 -> 부호화 순으로 변환합니다.

#### 표본화(sampling)
![ATmega128_ADC_Sampling.png](/assets/img/2024_08_04/ATmega128_ADC_Sampling.jpg)

Analog Signal을 일정한 간격으로 sampling하여 PAM(Pulse Amplitude Modulation) Signal을 얻습니다. 이때, data의 size가 최초로 결정됩니다. Analog Signal으로부터 많은 sample을 추출함으로서 데이터의 크기가 더 커집니다.


<br>

#### 양자화(Quantization)
![ATmega128_ADC_Quantization.png](/assets/img/2024_08_04/ATmega128_ADC_Quantization.jpg)

Quantization에서는 data의 size를 **결정**합니다. 1.23, 3.42 등의 Analog Signal을 0과 1인 Digital Signal로 매핑합니다. 이러한 매핑 과정을 Quantization이라고 합니다.



#### 부호화(Encoding)
![ATmega128_ADC_Encoding.png](/assets/img/2024_08_04/ATmega128_ADC_Encoding.jpg)

Quantization된 값을 2진 Digitan Sign(부호)로 변환하는 과정입니다.

[참고 자료]
- [디지털 신호 변환 과정(PCM) : 표본화, 양자화, 부호화](https://blog.naver.com/techref/222455905351)
- [표본화, 양자화, 부호화](https://jungreeyoung.tistory.com/entry/%ED%91%9C%EB%B3%B8%ED%99%94%EC%96%91%EC%9E%90%ED%99%94%EB%B6%80%ED%98%B8%ED%99%94)

<br>

### A/D Convertor 구성

#### 범용 PORTF의 특수 기능 
ADC0~ADC7 : 8채널 10bit A/D Convertor의 아날로그 입력 단자입니다.
<br>

#### ADC 정확도 성능 향상을 위한 독립 전원 구성 
- AVCC : Analog Supply (VCC의 전압의 ±0.3𝑉를 유지 해야 함)  = **독립적인 아날로그 회로 전원 단자**
- AGND : Analog Ground (반드시 GND와 연결) = **기준전원 입력 단자**
- AREF : Analog Reference Voltage = **아날로그 회로 접지 단자**
<br>

### A/D Convertor 잡음 제거
A/D Convertor의 경우에는 노이즈에 매우 민감하기 때문에 ATmega128 내에서도 AVCC, AREF, AGND와 같 은 ADC 전원 구성도 따로 되어 있으며, 사용자 또한 몇 가지 사항을 주의하여 사용해야 합니다.

1. 아날로그 입력선은 **최소한으로 짧게** 하고 **잡음의 영향이 없도록 회로를 구성**한다.
2. 아날로그 전원단자 **AVCC에 VCC를 인가할 때는 LC필터를 거쳐 안정화** 시킨다.
3. 아날로그 회로의 **모든 접지는 AGND에 접지하여 한 포인트에서만 GND**와 접속한다. 
4. ADC 동작중에는 **병렬 I/O 포트의 논리상태를 스위칭 하지 않는다.**
5. 잡음에 민감한 아날로그 소자의 ADC의 경우에는 Adc Noise Reduction mode를 사용한다.
6. 잡음이 심하여 결과값의 변동이 심하면 디지털 필터를 사용하거나 평균치를 구하여 사용한다.

## Text LCD 관련 개념
LCD(Liquid Crystal Display)는 액정표시장치입니다.

### LCD 특징
1. +5V 단일 전원 사용
2. LCD 컨트롤러에 CG ROM, CG RAM, DD RAM등을 내장하여 작은 사이즈 
3. MCU와의 인터페이스가 표준화 되어 있어 어떤 MCU이던 회로 구성이 쉬움
4. 8Bit, 4Bit 인터페이스 중에 선택할 수 있음
5. LCD 제조회사에 구별 없이 내부 명령이 표준화 되어 있음
6. 1행 분자 수에 따라 다양한 모델이 있음
7. ASCII 문자를 모두 표시할 수 있음

<br>

### LCD 모듈의 외부 구조
![ATmega128_LCD_External_Structure.png](/assets/img/2024_08_04/ATmega128_LCD_External_Structure.jpg)

#### RS(Register Select : PIN4)
입력 신호만 받는 단자로서 LCD의 제어명령/데이터 입력 제어신호를 설정합니다.

#### R/W (Read/Write : PIN5)
입력 신호만 받는 단자로서 액정 표시 모듈에 데이터 혹은 명령 읽기/쓰기를 할 때 사용합니다.

#### EN (Enable : PIN6)
입력 신호만 받는 단자로서 LCD를 동작하게 하는 단자입니다.

### LCD 모듈 프로그래밍

#### LCD Command List
![ATmega128_LCD_Command_List.png](/assets/img/2024_08_04/ATmega128_LCD_Command_List.jpg)

##### 표시 클리어
![ATmega128_LCD_Display_Clear.png](/assets/img/2024_08_04/ATmega128_LCD_Command_DisplayClear.jpg)
화면을 지운 후 커서는 홈 위치(00 번지 - 1 행 1 열)로 돌아갑니다.

##### 커서 홈
![ATmega128_LCD_CursorHome.png](/assets/img/2024_08_04/ATmega128_LCD_Command_CursorHome.jpg)
x는 무효 비트이며, 1 이든 0 이든 상관없습니다. 커서를 0 으로 돌아가게 합니다.


##### 엔트리 모드 세트
![ATmega128_LCD_EntryModeSet.png](/assets/img/2024_08_04/ATmega128_LCD_Command_EntryModeSet.jpg)
커서의 진행방향(AC의 증감 방향과 같다) 및 표시를 Shift 시킬 것인지를 지정합니다.
- Increment/Decrement 
- I/D = 1 : Address를 +1 
- I/D = 0 : Address 를 -1 
<br>
- Shift S가 1 일 때, 표시된 문자 전체를 좌/우로 이동시킵니다.
- 단, 이때 커서의 위치는 변하지 않습니다.
- I/D=1, S=1: 좌로 Shift 
- I/D=0, S=1: 우로 Shift 
- S=0: 표시는 Shift 되지 않습니다.

##### 표시 ON/OFF 제어
![ATmega128_LCD_Display_ONOFFControl.png](/assets/img/2024_08_04/ATmega128_LCD_Command_DisplayONOFFSet.jpg)
표시 ON/OFF, 커서 ON/OFF, 커서 위치에 있는 문자의 점멸을 설정합니다. 
- D=1: 표시 ON, D=0: 표시 OFF 
- C=1: 커서 ON, C=0: 커서 OFF 
- B=1: 점멸 ON, B=0: 점멸 OFF


##### 커서/표시 시프트
![ATmega128_CursorDisplayShift.png](/assets/img/2024_08_04/ATmega128_LCD_Command_CursorDisplayShift.jpg)

DD RAM의 내용은 변경하지 않고, 커서 이동과 표시 Shift 를 합니다.
커서의 이동은 1 행의 40 번째에서 2 행의 처음으로 옵니다.
그러나 표시 Shift 는 두 행이 동시에 됩니다.

S/C=0, R/L=0: 커서 위치를 좌로 이동 (AC -= 1) 
S/C=0, R/L=1: 커서 위치를 우로 이동 (AC += 1) 
S/C=1, R/L=0: 표시 전체를 좌로 이동, 표시는 커서에 따라 움직입니다.
S/C=1, R/L=1: 표시 전체를 우로 이동, 커서는 움직이지 않습니다.

##### 펑션 시프트
![ATmega128_LCD_FunctionShift.png](/assets/img/2024_08_04/ATmega128_LCD_Command_FunctionShift.jpg)

DL=1: 8 비트(DB[0:7]) 인터페이스 세트 
**DL=0: 4 비트(DB[4:7]) 인터페이스 세트, 상위 4 비트 전송 후 하위 4 비트 전송 **
N: 표시 행수의 설정(0: 1 행, 1: 2 행) 
F: 문자 폰트를 설정 (0: 5×7 도트, 1: 5×10 도트)

<br><br>

## 통신 관련 개념

### 통신 개념
*여기서 다루는 통신은 OSI 7계층 중, 물리 계층에 속한 통신을 주로 다룹니다.*

통신은 Serial Communication와 Parallel Communication으로 구분됩니다.

(TCP/UDP는 OSI 7계층 중 전송 계층에 포함되는 통신)


| 비교 기준 | Serial Bus | Parallel |
| :---: | :---: | :---: |
| 전송 속도 | 비교적 느림 | 비교적 빠름|
| 케이블 복잡성 | 단순, 2~4개의 와이어 | 복잡, 다수의 와이어 |
| 전송거리 | 긴거리에 적합 | 짧은 거리에 적합 |
| 노이즈 민감도 | 비교적 덜 민감 | 민감 |
| 비용 | 낮은 비용 | 높은 비용 |
| 동기화 | 동기 & 비동기 | 정교한 동기화 |
| 사용 사례 | 장거리 통신, MCU 인터페이스 | 컴퓨터 버스 |

<br>

### Serial Communication
한 번에 한 가지 data를 송수신 하는 방식입니다.
Data 전송 시, 하나의 Data Line이 필요합니다.

Serial Communication에는 다양한 통신 종류가 있습니다.
대표적으로 UART, I2C, SPI 등이 있습니다.

#### UART
UART0, UART1 2개의 통신 포트로 구성되어 있습니다.

-동기 모드/비동기 모드
-전이중통신
-멀티프로세서 통신
-높은 정밀도의 보레이트 발생기 내장
-전송데이터 5~9bit 설정
-Stop bit 1~2 설정
-패리티비트 bit 설정
-에러 검출 가능 (-> 패리티비트)
-노이즈 필터링

[MCU에 할당된 PORT PIN들]
![ATmega128_UART_MCU_PortDesign.png](/assets/img/2024_08_04/ATmega128_PORTPIN1.jpg)

[MCU 외부에 할당된 PORT PART들]
![ATmega128_UART_MCU_PortPart.png](/assets/img/2024_08_04/ATmega128_PORTPIN2.jpg)

##### UART Data 전송 Fromat
Atmega128의 비동기 모드 데이터 전송 포맷이 있습니다. 
- 항상 Low 상태
- 데이터 포함 비트
- 데이터 전송 시 오류 검증을 위한 비트, 3가지 모드  None : 설정 X, 이 모드 설정 시 비트 제거
    - Even : 짝수 패리티, 1의 개수가 짝수 일시 1
    - Odd : 홀수 패리티, 1의 개수가 홀수 일시 1
- 항상 High, 이 비트가 Low 상태이면 에러
- 두번째 비트는 동작 지연을 위하여 사용



전송 프레임은 최소 7bit 에서 최대 13bit로 구성되어 있습니다.

- Start Bit : 1  ( 표준 : 1 bit )
- Data Bit : 5 ~ 9  ( 표준 : 8 bit )
- Parity Bit : No, Even or Odd  ( 표준 : 0 bit )
- Stop Bit : 1 ~ 2  ( 표준 : 1 bit )



<br>

#### USART
USART(Universal Synchronous/ Asynchronous Receiver and Transmitter)는 Parallel Data의 form을 Serial form으로 conversion하여 data를 communicatino하는 개별 직접 회로입니다. RS-232, RS-422, RS-485와 같은 통신 표준과 함께 사용합니다.

이때, USART는 동기통신, UART는 비동기통신(통신 전 장치 간 전송 속도 동일하게 설정 필요)이라는 차이가 있습니다.

<br>

#### 통신 종류
##### RS-232
![ATmega128_Communication_RS232.png](/assets/img/2024_08_04/ATmega128_UART_RS232.jpg)
- 직렬 통신(RX, TX로 구성)
- 통신 길이가 짧음
- 1:1 통신에 유리함.

<br>

##### RS-485
![ATmega128_Communication_RS485.png](/assets/img/2024_08_04/ATmega128_UART_RS485.jpg)
- 다중 통신(D+, D-로 구성)
- 통신 길이가 긺
- DIR 설정이 필요함

<br>

![ATmega128_Communication_Type_Des.png](/assets/img/2024_08_04/ATmega128_RS_Specification.jpg)

Full Duplex : 양방향 동시 데이터 통신이 가능합니다.
Half Duplex : 송신과 수신이 동시에 불가능합니다.

<br>

### Parallel Communication
한 번에 여러가지 data를 송수신 하는 방식입니다.


[참고 자료]
- [실무자가 들려주는 Serial 통신 기술[직렬 통신]](https://anchive.tistory.com/3)
- [Serial 통신류(UART, I2C, TWI, SPI, RS-422, RS485)](https://m.blog.naver.com/crucian2k3/222642389070)


### 선 연결 시 주의사항
![ATmega128_UART_Notice.png](/assets/img/2024_08_04/ATmega128_UART_Notice.jpg)

> ISP Upload PIN(주황 박스)과 UART Communication PIN(파랑 박스)을 동시에 연결하면 안 됩니다.
{: .prompt-danger }


<br><br>


## TIMER 0/2 관련 개념

### Counter

- Counter는 Clock의 Rasing Edge를 Counting합니다.<br>

- Counter는 외부 핀(TOSC1, TOSC2, T1, T2, T3)을 통해서 들어오는 Pulse(펄스)를 계수Edge Detector(계수)하여 Event Counter로서 동작 됩니다.

<br>

### Timer
- Timer는 Counter의 Clock 입력을 일정 주기로 넣어 시간을 Counting합니다.<br>

- MCU의 내부 Clock을 이용하여 일정시간 간격의 Pulse를 만들어 내거나 일정시간 경과 후에 Interrupt를 발생시킵니다.

<br>

### Prescaler(분주비)

- Clock Source의 주기를 n배수로 늘려주는 모듈입니다.
- 긴 주기의 Timer를 만들 때 사용합니다.

<br>

### TIMER0/2 vs TIMER1/3
![ATmega128_TIMER02_TIMER13](/assets/img/2024_08_04/TIMER02_TIMER13.png)

<br>

### Timer Period Setting
Timer Period Setting은 Count 수를 Setting하는 방법입니다.<br>

Period : Clock Source * Prescale  * Count

$$T = \frac{Prescale * Count}{FreqMCU}$$

| Keyword | Description |
| --- | --- |
| BOTTOM | Timer/Counter가 가질 수 있는 Minimum Value 0x00을 나타냅니다. |
| MAX | Timer/Counter가 가질 수 있는 Maximum Value 0xFF를 나타냅니다. |
| TOP | 각 동작모드에 따라 Counter가 실제로 도달하는 Maximum Value를 나타냅니다. <br>(CTC모드의 경우 TOP = OCR) |

![ATmega128_TIMER_PERIOD_Setting](/assets/img/2024_08_04/ATmega128_TIMER_PERIOD_Setting.png)

<br><br>

## Timer Interrupt

Interrupt Type
- Overflow
- Compare Match
- Capture Event

![ATmega128_TimerInterrupt_1](/assets/img/2024_08_04/ATmega128_TimerInterrupt_1.png)

![ATmega128_TimerInterrupt_2](/assets/img/2024_08_04/ATmega128_TimerInterrupt_2.png)

<br>

### Timer Overflow Interrupt
![ATmega128_TimerInterrupt_Overflow](/assets/img/2024_08_04/ATmega128_TimerInterrupt_Overflow.png)

1. 1/Clock 마다 TCNTn의 값이 1 증가합니다.
2. TCNTn 값이 Overflow가 되면 interrupt가 발생합니다.



