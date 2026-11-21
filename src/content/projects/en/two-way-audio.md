---
title: "2-Way Audio - Two-Way Audio Between the Operator and the Robot"
summary: "For RoboCup 2026 I developed a ROS 2 package that exchanges audio in both directions between the operator and the robot. The operator turns it on and off by command, and it is designed to work with the task planner."
date: 2026-06-22
category: Communication
tags: ["ROS 2", "Audio", "Lifecycle Node", "Communication"]
role: "Package design · Development · Testing"
team: "ROBIT team"
featured: false
---
<!-- TODO(author to confirm): Please share the validation results in the competition environment (sound quality, delay, stability, etc.). The text is currently centered on the design direction. -->
## 1. Overview
While preparing for RoboCup Rescue 2026, I developed a **ROS 2 package that exchanges audio in both directions (2-way) between the operator and the robot**.

## Why I Built It
In one of the Victim box missions in Rescue, **audio can earn 2 points**. To carry out a scoring mission reliably, we needed a structure that reliably exchanges sound between the operator and the robot.

> This is a system that the junior members continue to use and improve, so **I do not disclose the internal structure or settings**, and only describe the design direction.

## 2. Design Direction
- **Manage node state systematically.** I built the audio nodes with ROS 2's lifecycle approach so the on/off state is managed clearly.
- **One package on both sides.** The robot side and the operator side use the same package with only the role changed.
- **The operator turns it on and off.** The audio function is switched on and off by the operator's command, and when it is on, the direction of transmission and reception is controlled by a separate signal.
- **Work with the task planner.** I modified the package so it detects requests from the task planner and acts on them.

## 3. Limits
- I have not yet organized quantitative validation results from the competition environment in this article.
