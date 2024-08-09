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

