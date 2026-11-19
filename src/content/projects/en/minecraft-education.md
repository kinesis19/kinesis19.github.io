---
title: "Minecraft Education RPG"
summary: "A story RPG built with Minecraft Education Edition, improving user experience through route optimization and balancing."
date: 2018-11-30
category: Software
tags: ["Game Logic", "MakeCode", "Team Leader", "Level Design"]
role: "Team leader · Planning · Coding"
team: "Team Hahyundal"
image: "/images/thumb-minecraft-education.webp"
---
## 1. Overview
This RPG mini-game was developed for the "Minecraft EduCreator Contest".
Going beyond simply building a map, I used MakeCode and command blocks to implement a **class system, an economy (shop) and combat logic** in software.

- **Period:** 2018.10.12 ~ 2018.11.30
- **Role:** Team leader, planning, coding and command implementation
- **Result:** **Excellence Award**, Software category, Minecraft EduCreator Contest

## 2. Key Features and Implementation
I formed the team "Hahyundal" and led everything from planning to development.

### A. Class and combat system
At the start of the game, players choose one of **four classes (Tank, Warrior, Archer, Mage)**. Each class receives matching equipment, and I wrote the logic that awards points for defeating monsters.

### B. Economy and upgrade system
I managed the points as variables to build a shop system.
- Buying consumables and upgrading equipment
- Linking currency units to data

## 3. Technical Challenges and Solutions (Engineering Approach)

### Optimizing routes for user experience
In the early planning stage I expected that, as the map grew, the time players spent travelling would grow too.
- **Problem:** wasted travel between the shop and the combat areas
- **Solution:** I designed the map and logic with zone-entry triggers and teleport logic to minimize the player's travel.

### Data-driven difficulty balancing
Feedback showed that the boss fight, easy for the developer, was hard for first-time players.
- **Solution:** I ran hundreds of rounds of iterative testing and tuned the boss's health and attack patterns, finding a difficulty where players could stay immersed.

## 4. Development Process
- **Planning:** narrowed the direction from an MMORPG to a story-based RPG
- **Collaboration:** remote meetings and file sharing on Discord, with roles split (building, coding, story and so on)
- **Design:** used paper prototyping to visualize the game's routes and layout in advance, which made development more efficient

---

## 5. Demo Video
<div class="aspect-video w-full mt-4">
  <iframe 
    class="w-full h-full rounded-xl"
    src="https://www.youtube.com/embed/sXFeypoqifY" 
    title="Minecraft RPG Project" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>
