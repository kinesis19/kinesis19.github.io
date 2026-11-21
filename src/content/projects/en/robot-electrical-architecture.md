---
title: "Robot Electrical System Design - Power Distribution, Wiring, and Modular Boards"
summary: "From 2026 I designed the robot's power distribution, wiring, and circuits as a whole. I split the boards by function so parts can be replaced at the venue, and validated the design at both RoboCup Rescue and the Defense Robot Competition."
date: 2026-04-10
category: Circuits
tags: ["Altium", "PCB Design", "Power Distribution", "Wiring", "Modular Design"]
role: "Electrical system design · Board design · Wiring · Testing"
team: "ROBIT team"
featured: false
---
<!-- TODO(author to confirm): If you can provide a block diagram for public use or a photo of the finished robot (one that does not show detailed wiring), it will be added. -->
## 1. Overview
From 2026 I took on designing **the robot's whole electrical system (power distribution, wiring, circuits)**. I applied it to RoboCup Rescue 2026 first, and then to the Defense Robot Competition.

> This is a system that the junior members continue to use and improve, so **I do not disclose schematics, wiring diagrams, pin assignments, part lists, or connector specifications.** I wrote it around design principles and validation experience.

## 2. Design Principles
- **Split the boards by function.** I modularized power distribution, switching, DC-DC conversion, sensors, and more into several boards. The goal is that only the failed part can be replaced right at the venue.
- **Easy to unplug and replug.** I chose connectors and layout so a failed part can be reached and removed immediately.
- **Test before connecting.** For connectors that go to expensive motors, I always tested before connecting.
- **Gather voltage information in one place.** Instead of buying a separate voltage-sensing module, I designed the voltage-reading circuit onto one board and read it with a microcontroller. The battery state can be seen on the operator screen, and the same microcontroller makes it easy to add features such as lighting brightness control.
- **Draw the wiring in advance and review it.** I drew the wiring plan in advance, reviewed it, and finalized it, and when the competition requirements changed, I reconfigured the electrical system and reviewed the wiring again.

Related: DC-DC conversion board → [MPHB](/en/projects/mphb-dc-dc-converter/), power stability → [BMS Analysis and Brake Chopper Design](/en/projects/brake-chopper-bms/)

## 3. Validation Experience
- I applied it first at **RoboCup Rescue 2026** and operated it there. → [RoboCup Rescue 2026](/en/projects/robocup-rescue-2026/)
- At the **Defense Robot Competition 2026**, I found a short circuit at a power terminal and a motor housing carrying voltage during integration tests, replaced the part and the motor, and confirmed again that the anomaly was gone. → [Defense Robot Competition 2026](/en/projects/defense-robot-2026-electrical-comm/)

## 4. Limits and What I Learned
- Splitting into boards makes replacement easy, but **more boards mean more connector and wiring checks.**
- If a part's size in the PCB differs from the real part, the problem only shows up at soldering. A step to check part height and mountability before ordering is needed.
- Finding shorts and unexpected voltage early in integration tests reduced the risk at the venue the most.
