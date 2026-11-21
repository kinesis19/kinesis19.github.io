---
title: "Defense Robot Competition 2026 - Building the Power, Wiring, and Communication System, Grand Prize"
summary: "The ROBIT team won the grand prize in the Defense Robot category of the Defense Robot Competition for the second year in a row. In 2026 I built the robot's power, wiring, circuits, and communication system and validated it in the competition environment."
date: 2026-09-05
category: Robotics
tags: ["Power Systems", "Wiring", "Communication", "ROS 2", "Zenoh DDS", "Competition", "Team Project"]
role: "Building and validating the power, wiring, circuit, and communication system"
team: "ROBIT team"
featured: false
image: "/images/thumb-defense-2026.webp"
---
<!-- TODO(author to confirm): (1) Please confirm the wording of the scope I did myself. (2) Please confirm the last sentence of section 5 (the 2025 retrospective), "became the starting point when I took it on myself in 2026". -->
## 1. Overview
At the **Defense Robot Competition**, held over two days on Saturday and Sunday, September 5–6, 2026, the ROBIT team won the **grand prize in the Defense Robot category**. Following 2025, it is the **second year in a row**, and a result of the whole team.

On this team I **designed the robot's whole power and communication architecture (electrical system and communication)**. This article covers how I built and validated that system at the competition. Of this, I applied the electrical design (power, wiring, circuits) to RoboCup Rescue 2026 first, and then to this competition. I built the wireless communication for this competition.

> This is a system that the junior members continue to use and improve, and it is tied to our competition strategy, so **I do not disclose configuration values or detailed design.** I wrote it around design decisions and validation results.

## 2. What I Took On
- **Electrical system (power, wiring, circuits):** I designed and built the power distribution, wiring, and the circuits and boards we needed. → [Robot Electrical System Design](/en/projects/robot-electrical-architecture/)
- **Communication:** I built the wireless communication between the robot and the operator. → [Wireless Teleoperation Communication](/en/projects/wireless-teleop-communication/)
- **Power stability:** I analyzed the torque cut-outs that appeared after adding a battery protection circuit, and designed and built a brake chopper circuit that consumes regenerative current (not yet verified in the real environment). → [BMS Analysis and Brake Chopper Design](/en/projects/brake-chopper-bms/)
- **Operator station:** I modified the operator station configuration to the competition's needs.

## 3. Validation Before the Competition
- **I found and fixed problems in integration tests.** I found a short circuit at a power terminal and an anomaly where voltage appeared on one motor housing. After replacing the shorted part and the faulty motor, I confirmed again that the voltage no longer appeared. I then completed driving and manipulator tests.
- **We responded to problems together for several days.** With teammates, we narrowed down and resolved issues such as some motors not being recognized.
- **I measured the venue's communication environment.** I measured how occupied the venue's network was and responded by choosing channels that did not overlap.

## 4. What I Learned
- Finding problems such as **shorts or unexpected voltage in the power section** early, at the integration-test stage, greatly reduces risk at the venue. I made checking before connecting a habit.
- By operating the electrical design in **two competitions with different environments** (an international one and a domestic one), I could check that the design was not tuned to only one environment.

## 5. Looking Back: The 2025 Defense Robot Competition
At the 2025 competition (September 13–14), **I did not take the lead on anything.** I **learned by watching** how the robot's wiring system was put together, and **helped with a small task or two**, such as soldering XT60 power connectors.

What I saw then, the wiring structure and how problems were handled, became the starting point when I took on the electrical and communication system myself in 2026.
