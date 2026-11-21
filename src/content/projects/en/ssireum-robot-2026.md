---
title: "Ssireum Robot 2026 - Sensor-Processing Firmware, 2nd at IRC"
summary: "I formed a new team and entered the Ssireum robot category of the IRC Intelligent Robot Competition again, finishing 2nd by one point. On the team I owned the STM32 firmware that processes sensor values and the fixed-period control loop."
date: 2026-11-12
category: Robotics
tags: ["STM32", "C", "DMA", "Embedded", "Competition", "Team Project"]
role: "Sensor-processing firmware · Control board · Testing"
team: "ROBIT team (2026 team)"
featured: false
---
<!-- TODO(author to confirm): Please confirm the competition date (2026-11-12 is a placeholder), the score gap of the 2nd-place result (one point), and the split of work between me and teammates (motor control is recorded as a teammate's). -->
## 1. Overview
Building on the 2025 experience of 4th place, in 2026 I entered the same competition (the Ssireum robot category of the IRC Intelligent Robot Competition) again **with new teammates**, and we placed **2nd by one point**. → Last year's story: [Ssireum Robot 2025](/en/projects/ssireum-robot-2025/)

- **My role:** The firmware that processes sensor values, work on the control board, and testing
- **Team split:** A teammate took the drive (motor control) module.

> In Ssireum robot, strategy decides matches between teams, so **I do not disclose the algorithm, the sensors used, or details of the ring in this article.**

## 2. What I Did in the Firmware
- **A fixed-period control loop.** Without an RTOS, each timer tick runs one cycle of `sense → decide → drive → transmit`, and I built it to run at 480 Hz.
- **A structure where the CPU does not wait.** Sensor input is handled mainly with DMA and interrupts so the period does not slip.
- **Organizing sensor values.** I filtered the values of several sensors and merged them into one state structure, with flags showing whether sensors and motors are normal. The goal was that the decision side does not need to know sensor details.
- **Testing.** I measured the loop period directly and confirmed, over about 12,000 measurements, no lost ticks and an average tick of about 2.08 ms (480 Hz).

## 3. What Changed from 2025
In 2025 we lost points because sensor values differed between practice and the match. In 2026 I reworked sensor calibration and filtering to focus on **keeping values from swinging when the environment changes**.

## 4. Limits
- At the point where I wrapped up the sensor modules (mid-October), real-drive debugging and strategy refinement were still in progress.
- The test above measures the control loop alone, so it does not guarantee overall performance during a match.
