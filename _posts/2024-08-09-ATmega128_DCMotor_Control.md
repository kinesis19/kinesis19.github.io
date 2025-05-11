---
title: ATmega128 DC Motor Control
author: cotes
date: 2024-08-09 14:00:00 +0900
categories: [ATmega128]
tags: [ATmega128, Robit, Study]
render_with_liquid: false
toc: true
---

본 포스트는 ATmega128의 DC Motor를 제어하기 위해 연구하고 테스트 내용을 기록한 포스트입니다.

<br><br>

# Parts Information
- L298N(Driver Module) * 1
- pin header(male)
- pin header(female)
- diode * 8
- capacitor * 2

## L298N Connection Information
Index : 1 ~ 18 (Total : 18)<br>
[2] : OUT1<br>
[3] : OUT2<br>
[4] : 12V -> GND<br>
[5] : PB0<br>
[6] : PB5<br>
[7] : PB1<br>
[8] : GND<br>
[9] : 5V -> GND<br>
[10] : PB2<br>
[11] : PB6<br>
[12] : PB3<br>
[13] : OUT3<br>
[14] : OUT4<br>
[15] : GND<br>


# Source Code
[Github Repo](https://github.com/kinesis19/ROBIT_Intern_KiHongPark_HW_repo/blob/main/Projects/MCU_Microchip_Studio/Work/DC_Motor/DC_MotorTest/main.c)
```c
/*
 * DC_MotorTest.c
 *
 * Created: 2024-08-07 오후 3:45:12
 * Author : lordk
 */ 

#define F_CPU 16000000

#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include "LCD_Text.h"

void Initializing(void);

int main(void) {

	Initializing();
	
	while (1) {
		
	}	
}

void Initializing(void){
	// -----[Declare Register]-----
	DDRB = 0x6F;  // PB1, PB2 핀을 출력으로 설정하기(OC1A, OC1B).
	
	EIMSK = 0b00001111;
	EICRA = 0b10101010;
	
	TCCR1A = 0xA2; // 0b10100010
	TCCR1B = 0x1A; // 0b00011010
	TCCR1C = 0x00; // 0b00000000
	
	ICR1 = 399;
	TCNT1 = 0x00;
	
	sei();
	
	lcdInit();
	lcdClear();
}


// -----[Switch Interrupt Control]-----
// -----[Moving: Forward]-----
ISR(INT0_vect){
	PORTB = (PORTB & 0xF0) | 0x05;
	OCR1A = ICR1 * 1;
	OCR1B = ICR1 * 1;
	
	lcdClear();
	lcdString(0, 0, "Moving Foward!");
}

// -----[Moving: Back]-----
ISR(INT1_vect){
	PORTB = (PORTB & 0xF0) | 0x0A;
	OCR1A = ICR1 * 1;
	OCR1B = ICR1 * 1;
	
	lcdClear();
	lcdString(0, 0, "Moving Back!");
}


// -----[Turning: Right]-----
ISR(INT2_vect){
	PORTB = (PORTB & 0xF0) | 0x05;
	OCR1A = ICR1 * 1;
	OCR1B = ICR1 * 0;
	
	lcdClear();
	lcdString(0, 0, "Turning Right!");
}

// -----[Turning: Left]-----
ISR(INT3_vect){
	PORTB = (PORTB & 0xF0) | 0x05;
	OCR1A = ICR1 * 0;
	OCR1B = ICR1 * 1;
	
	lcdClear();
	lcdString(0, 0, "Turning Left!!");
}
```

# Description

## Preprocessing(전처리문)

```c
#define F_CPU 16000000

#include <avr/io.h>
#include <avr/interrupt.h>
#include <util/delay.h>
#include "LCD_Text.h"

void Initializing(void);
```

_delay_ms() 함수를 사용하기 위해 F_CPU 관련 정의가 필요합니다. 제가 사용하는 MCU의 처리 속도는 16Mhz입니다. 따라서, F_CPU를 정의할 때 16000000으로 값을 정의하였습니다.<br>
avr의 input, ouput이 가능하게 하기 위해 관련 헤더파일인<avr/io/h>를 선언하였습니다.<br>
switch의 입력에 따라 움직임을 다르게 하기 위해 <avr/interrupt.h>를 선언하였습니다.<br>
_delay_ms() 함수를 사용하기 위해 관련 헤더파일인 <util/delay.h>를 선언하였습니다.<br>
Register를 초기화 하기 위한 Initializing90000함수를 Prototype 형태로 선언하였습니다.
<br><br>



## main Function (main 함수 내부)

```c
int main(void) {

	Initializing();
	
	while (1) {
		
	}	
}
```

프로램이 시작 되면, Initializing() 함수를 통해 프로그램 내에서 사용할 register를 초기화 해주었습니다.<br>
while()문을 사용하여 프로그램이 종료되지 않도록 구현하였습니다.

## Initializzing Function

```c

void Initializing(void){
	// -----[Declare Register]-----
	DDRB = 0x6F;  // PB1, PB2 핀을 출력으로 설정하기(OC1A, OC1B).
	
	EIMSK = 0b00001111;
	EICRA = 0b10101010;
	
	TCCR1A = 0xA2; // 0b10100010
	TCCR1B = 0x1A; // 0b00011010
	TCCR1C = 0x00; // 0b00000000
	
	ICR1 = 399;
	TCNT1 = 0x00;
	
	sei();
	
	lcdInit();
	lcdClear();
}
```

DC 모터는 각각 PB1, PB2 PIN에 연결하였습니다. DC 모터를 사용하기 위해 DDRB를 출력 모드로 선언했습니다. 현재 저는 PB4를 제외한 모든 PB PIN들을 사용하고 있으므로 PB4를 제외한 나머지 PIN들을 출력모드로 선언했습니다.

switch0부터 ~ switch3까지에 대하여 interrupt 기능을 사용하기 위해 [EIMSK](https://kinesis19.github.io/posts/ATmega128_Concept_Summery/#eimsk){:target="_blank"} register를 선언했습니다. switch가 총 네 개이며, 사용할 interrupt 역시 네 개입니다. INT0부터 ~ INT3까지의 interrupt를 활성화 해주었습니다. 

INT0부터 ~ INT3까지의 interrupt에 대하여 감지 방법을 설정해 주기 위해 [EICRA](https://kinesis19.github.io/posts/ATmega128_Concept_Summery/#eicra){:target="_blank"} register를 선언했습니다.

TCCR1A register setting을 했습니다.
- COM1A1, COM1A0, COM1B1, COM1B1 register를 설정하여 Compare Output Mode를 low-level로 Setting 했습니다.

TCCR1B register setting을 했습니다. 
1. CS2, CS1, CS0을 각각 0, 1, 0으로 설정하여 Clock의 Prescaler를 8Bit로 설정하였습니다. 
2. WGM13, WGM12를 각각 1씩 Setting하여, Timer/Counter의 Operation Mode는 CTC Mode가 되었습니다.

> CTC는 Clear Timer on Compare Match의 약어로 다음과 같은 기능을 가지고 있습니다.
> 1. Waveform Generation
> 2. compare match interrupt를 이용하여 원하는 time interval으로 원하는 action을 control할 수 있습니다.
{: .prompt-info }

TCCR1C register setting을 했습니다. 
CTC Mode 또는 PWM Mode에서 강제로 Output Compare를 발생시킬 필요가 없으므로, 0Bit로 초기화 해주었습니다.

ICR1은 Input Capture Register로, 정확한 주파수 계산을 위해 사용했습니다. ICR1은 Timer의 TOP Value가 되니, 본 프로그램 에서 Timer의 TOP Value는 399가 되었습니다.

TCNT1 register의 전체 Bit를 0으로 초기화 했습니다.

Global Interrupt를 사용하기 위해 sei() 함수를 사용하여 Enable했습니다.

LCD에 현재 Select된 Mode를 출력하기 위해 LCDInit() 및 LCDClear() 함수를 호출했습니다.

<br><br>

## DC Motor Control - Moving Forward
```c
// -----[Switch Interrupt Control]-----
// -----[Moving: Forward]-----
ISR(INT0_vect){
	PORTB = (PORTB & 0xF0) | 0x05;
	OCR1A = ICR1 * 1;
	OCR1B = ICR1 * 1;
	
	lcdClear();
	lcdString(0, 0, "Moving Foward!");
}
```

switch0을 눌러 Interrupt0이 발생하면, Interrupt Service Routine이 실행됩니다. 
이 루틴이 실행되면 PORTB의 값은 0b11110101가 됩니다. PORTB의 Masking 작업을 해주었기에 해당 INT3과 INT1이 발생하여, 직진 방향을 지정하게 되었습니다.

OCR1A의 Duty Cycle(듀티비)을 설정해 주었습니다. ICR1 * 1로 설정하여 총 399 만큼의 Duty Cycle를 할당해 주었습니다. 이렇게 되면 OCR1A에 할당된 PB PIN에 연결된 DC Motor가 회전하게 됩니다. 마찬가지로 OCR1B의 Duty Cycle도 설정하여 양쪽의 DC Motor가 회전하게 되었습니다.

<br>

## DC Motor Control - Moving Backward

```c
// -----[Moving: Back]-----
ISR(INT1_vect){
	PORTB = (PORTB & 0xF0) | 0x0A;
	OCR1A = ICR1 * 1;
	OCR1B = ICR1 * 1;
	
	lcdClear();
	lcdString(0, 0, "Moving Back!");
}
```

PORTB에 Masking 작업을 통해 0b11111010가 되었습니다. 이는 INT2, INT0이 Enable 되면서 후진을 하게 됩니다.

## DC Motor Control - Moving Left
```c
// -----[Turning: Left]-----
ISR(INT2_vect){
	PORTB = (PORTB & 0xF0) | 0x05;
	OCR1A = ICR1 * 1;
	OCR1B = ICR1 * 0;
	
	lcdClear();
	lcdString(0, 0, "Turning LEft!");
}
```
좌회전 기능을 구현하기 위해 두 바퀴는 직진 상태로 Masking 처리를 했습니다. 그리고, 왼쪽 DC Motor의 Duty Cycle을 0으로 할당하여 오른쪽 DC Motor만 직진하도록 구현했습니다. 이렇게 하면 좌회전을 하게 됩니다.


<br>

## DC Motor Control - Moving Left
```c
// -----[Turning: Right]-----
ISR(INT3_vect){
	PORTB = (PORTB & 0xF0) | 0x05;
	OCR1A = ICR1 * 0;
	OCR1B = ICR1 * 1;
	
	lcdClear();
	lcdString(0, 0, "Turning Right!!");
}
```

우회전 기능도 좌회전 기능과 거의 동일합니다. 오른쪽 DC Motor의 Duty Cycle을 0으로 할당하여 해당 Motor만 움직이지 않게 설정하였으며, 반대 쪽 Motor는 직진할 수 있도록 구현하였습니다. 이를 통해 우회전 하는 것을 알 수 있습니다.


## Reivew
LED, Interrupt의 개념까지는 설명할 수 있을 정도로 이해하였는데, TIMER/COUNTER 관련 개념은 아직 설명까지는 어렵게 느껴집니다. 하나씩 공부해 가면서 이해할 수 있도록 노력하겠습니다.

C언어의 꽃이 포인터였는데, AVR의 꽃은 TIMER/COUNTER인 느낌이 듭니다.