---
title: "Power Stability - BMS Problem Analysis and Brake Chopper Design"
summary: "After adding a battery protection circuit (BMS), motor torque cut out momentarily. I analyzed it with measurements and designed and built a brake chopper circuit that burns regenerative current in a resistor. I ran bench tests, but I have not yet verified on the real robot whether it dissipates the energy as heat when torque is applied."
date: 2026-09-28
category: Circuits
tags: ["Altium", "PCB Design", "BMS", "Brake Chopper", "Power Electronics", "Debugging"]
role: "Problem analysis · Circuit redesign"
team: "ROBIT team"
featured: false
---
<!-- TODO(author to confirm): The brake chopper has **not yet been verified on the real robot (whether it dissipates the energy as heat when torque is applied)**, so the text says so. Please share the verification results (bus voltage, resistor heating, behavior with the BMS put back) when you have them. -->
## 1. The Problem: Torque Cuts Out After Adding the BMS
In August 2026, after we added a battery protection circuit (BMS) and a power relay to the robot, **motor torque momentarily turned off while driving or during certain motions**.

- Power path: battery → BMS → relay → power distribution → motor driver
- Sending the command to the motor controller again recovers it immediately.
- Before adding the BMS and relay, there was no problem in the same environment.
- When torque cut out while slowly returning to the ground from a folded-leg pose, the body dropped straight to the ground.

> This is a power configuration that the junior members continue to use, so **I do not disclose schematics, part choices, or setting values**, and only describe the analysis and judgments.

## 2. Measurements
I recorded the BMS state with its app when the torque cut out.
- The discharge-side switch stayed on. That is, the BMS had **not** fully cut the power.
- The charge-side switch turned on automatically during operation even when I turned it off manually.
- Cell voltages, temperatures, and voltage spread were all within the normal range.

I also found and fixed wrong initial settings. **The symptom continued.**

## 3. Estimated Cause
Based on the measurements, I estimated the following sequence.

`certain motion → motor decelerates sharply and produces regenerative (reverse) current → BMS reads it as charging current → charge switching → power bus voltage spikes momentarily → motor driver's internal protection trips → recovers when the command is re-sent`

The evidence: the discharge switch stays on, the charge switch turns on automatically during operation even if turned off manually, and there was no problem before the BMS was added. **This is an estimate, not something I confirmed directly.**

The solutions I considered:
- Adding capacitors: commercial motor controllers already have enough, so I did not add any.
- Manually turning the charge switch off: the BMS turned it back on during operation, so it was pointless.
- Limiting deceleration: not applied because a constant speed had to be kept in the competition.
- A component that blocks reverse current: I considered this approach and prepared the part.

For the time being, ahead of the competition I avoided the problem by **removing the BMS**.

## 4. Change of Direction: Brake Chopper
A component that blocks reverse current only decides the **direction** of regenerative current and does not consume the energy. The energy ends up back in the battery and BMS, and if the BMS's overcharge protection kicks in, the protection is lost. So I settled on a **brake chopper** that senses the power bus voltage and consumes the energy in a resistor. I referenced the brake chopper structure of another team in ROBIT, redesigned the whole circuit, and **built it.** But I have not yet confirmed on the real robot that it works as intended (chapter 6).

The redesign focused on:
- Adding **overvoltage protection** to protect the switching device.
- Because regenerative energy is large for an instant, **splitting the dissipating resistance** so heat does not concentrate in one part.
- **Changing the way the circuit's own supply is made** so it does not swing with the bus voltage.
- Recalculating the voltage at which protection starts so there is **margin** between the battery's full-charge voltage and the overvoltage protection limit.

## 5. Bench Tests
I tested the built chopper **on the workbench** with different resistor types, and watched the resistor's heating with a thermal camera at the same time. These tests look at the behavior of the circuit and the resistors themselves, and **are not tests with torque applied to the real robot's motors.**

<video controls muted playsinline preload="metadata" src="/videos/brake-chopper-test-aluminum.mp4"></video>

A bench test with an aluminum resistor.

<video controls muted playsinline preload="metadata" src="/videos/brake-chopper-test-cement.mp4"></video>

A bench test with a cement resistor.

## 6. Limits and What I Learned
- **Not yet verified:** I have not confirmed on the real robot whether, when torque is applied to the motors, the regenerative energy is **dissipated as heat in the resistor so the bus voltage does not spike**. The same goes for whether the torque cut-outs disappear with the BMS put back. The chopper in this article stands at **design, fabrication, and bench tests.**
- The cause above is an **estimate**, and I changed direction from the reverse-current-blocking approach with only the part prepared. This article has no result comparing the effect of the two approaches under the same conditions.
- The symptom remained even after I fixed the BMS setting errors, so I began to suspect a structural cause (regenerative current) rather than the settings. To separate causes, you have to **decide what to measure and in what order beforehand**.
- Regenerative current is a design factor to consider from the moment you connect a motor to a power source.
