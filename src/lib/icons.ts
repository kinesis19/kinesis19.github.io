// 기술 칩 / 카테고리에 붙는 아이콘.
// - 브랜드 로고는 simple-icons 패키지(빌드 시 포함, 외부 요청 없음)를 사용합니다.
// - 로고가 없는 항목은 직접 그린 선 아이콘을 사용합니다.
// 새 기술 이름을 추가하려면 아래 ICONS 에 한 줄만 더하세요. 없는 이름은 작은 점 아이콘이 표시됩니다.
import {
  siRos,
  siCplusplus,
  siPython,
  siKicad,
  siStmicroelectronics,
  siUnity,
  siJavascript,
  siReact,
  siAstro,
  siGithub,
  siAndroid,
  siNextdotjs,
  siFirebase,
  siEspressif,
  siNvidia,
  siUbuntu,
  siArduino,
  siOpencv,
} from 'simple-icons';

export type Icon = { type: 'fill'; path: string } | { type: 'line'; body: string };

const brand = (i: { path: string }): Icon => ({ type: 'fill', path: i.path });
const line = (body: string): Icon => ({ type: 'line', body });

const CUBE = '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5"/>';
const BUS =
  '<path d="M3 8h18M3 16h18M7 8v3M12 16v-3M17 8v3"/><circle cx="7" cy="12.5" r="1.5"/><circle cx="12" cy="11.5" r="1.5"/><circle cx="17" cy="12.5" r="1.5"/>';
const CHIP =
  '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>';
const PCB = '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h4l2 3h4M7 15h3"/>';
const FLAG = '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>';
const HASH = '<path d="M9 4L7 20M17 4l-2 16M4 9h16M3 15h16"/>';

export const ICONS: Record<string, Icon> = {
  // 브랜드
  'ros 2': brand(siRos),
  'ros 2 dds': brand(siRos),
  'zenoh dds': line('<circle cx="12" cy="14" r="1.5"/><path d="M8.5 10.5a5 5 0 0 1 7 0M5.5 7.5a9 9 0 0 1 13 0M12 15.5V21"/>'),
  dds: line('<circle cx="12" cy="14" r="1.5"/><path d="M8.5 10.5a5 5 0 0 1 7 0M5.5 7.5a9 9 0 0 1 13 0M12 15.5V21"/>'),
  'micro-ros': brand(siRos),
  'c++': brand(siCplusplus),
  python: brand(siPython),
  kicad: brand(siKicad),
  stm32: brand(siStmicroelectronics),
  unity: brand(siUnity),
  javascript: brand(siJavascript),
  react: brand(siReact),
  astro: brand(siAstro),
  github: brand(siGithub),
  // 직접 그린 아이콘
  android: brand(siAndroid),
  'next.js': brand(siNextdotjs),
  firebase: brand(siFirebase),
  esp32: brand(siEspressif),
  'isaac sim': brand(siNvidia),
  ubuntu: brand(siUbuntu),
  arduino: brand(siArduino),
  opencv: brand(siOpencv),
  temi: line('<rect x="6" y="3" width="12" height="9" rx="2"/><path d="M12 12v4M8 21h8M9 21l1-5h4l1 5"/>'),
  rviz: line('<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 14l3-4 3 3 4-5"/>'),
  urdf: line('<circle cx="6" cy="18" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="18" cy="16" r="2"/><path d="M7 16l4-6M13.5 9.5l3.500 5"/>'),
  solidworks: line('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5"/>'),
  '3d printing': line('<rect x="4" y="3" width="16" height="4" rx="1"/><path d="M12 7v4M9 11h6l1 4H8z M6 21h12"/>'),
  'hardware design': line('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h4l2 3h4M7 15h3"/>'),
  'computer vision': line('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  nav2: line('<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M6 16c0-7 12-3 12-8" stroke-dasharray="2 3"/>'),
  gazebo: line(CUBE),
  'moveit 2': line('<path d="M5 20h8M9 20v-6l5-5M14 9l4-4"/><circle cx="14" cy="9" r="2"/>'),
  foc: line('<circle cx="12" cy="12" r="6"/><path d="M12 6V3M12 21v-3M3 12h3M18 12h3"/><path d="M9 12a3 3 0 0 1 6 0"/>'),
  altium: line(PCB),
  'pcb design': line(PCB),
  atmega128: line(CHIP),
  can: line(BUS),
  socketcan: line(BUS),
  uart: line('<path d="M4 8h14l-3-3M20 16H6l3 3"/>'),
  spi: line(CHIP),
  i2c: line('<path d="M3 8h18M3 16h18"/><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="16" r="1.5"/><path d="M8 8v4M16 16v-4"/>'),
  'c#': line(HASH),
  redbrick: line('<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 10h18M3 15h18M9 5v5M15 10v5M9 15v4"/>'),
  makecode: line('<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><path d="M13 16.5h7M16.5 13v7"/>'),
  json: line('<path d="M8 4c-2 0-3 1-3 3v2c0 1-1 2-2 3 1 1 2 2 2 3v2c0 2 1 3 3 3M16 4c2 0 3 1 3 3v2c0 1 1 2 2 3-1 1-2 2-2 3v2c0 2-1 3-3 3"/>'),
  leadership: line(FLAG),
  'team leader': line(FLAG),
  award: line('<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4v1a3 3 0 0 0 4 3M16 6h4v1a3 3 0 0 1-4 3M12 13v4M8 20h8"/>'),
  'solo dev': line('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'),
  'team project': line('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-5 6.5-5s6.5 1.5 6.5 5M16 5a3.5 3.5 0 0 1 0 7M18 15c2.5.5 4 2 4 5"/>'),
  'level design': line('<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14"/>'),
  'game logic': line('<rect x="3" y="8" width="18" height="10" rx="4"/><path d="M8 11v4M6 13h4M15 12h.01M18 14h.01"/>'),
  'web game': line('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'),
  optimization: line('<path d="M4 17a8 8 0 1 1 16 0M12 17l4-5"/>'),
  algorithm: line('<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 7v10M18 11c0 4-6 3-12 6"/>'),
  'cross-platform': line('<rect x="3" y="4" width="14" height="10" rx="1"/><path d="M8 18h4M10 14v4"/><rect x="15" y="9" width="6" height="11" rx="1.5"/>'),
  automation: line('<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>'),
  'video production': line('<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>'),
  metaverse: line(CUBE),
  '3d design': line(CUBE),
  '3d game': line(CUBE),
  portfolio: line('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'),
};

const DOT: Icon = line('<circle cx="12" cy="12" r="3"/>');
export const getIcon = (name: string): Icon => ICONS[name.trim().toLowerCase()] ?? DOT;

/** 카테고리 아이콘 (선 아이콘 본문) */
export const CATEGORY_ICON: Record<string, string> = {
  Robotics: '<path d="M5 20h8M9 20v-6l5-5M14 9l4-4"/><circle cx="14" cy="9" r="2"/>',
  Circuits: CHIP,
  Communication: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
  Software: '<path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/>',
};

export const githubIconPath = siGithub.path;
export const LINKEDIN_PATH =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';
export const MAIL_PATH = 'M2 5h20v14H2zm2 2.5V8l8 5.2L20 8v-.5zM4 17h16V10.4l-8 5.2L4 10.4z';
export const DOC_PATH = 'M6 2h9l5 5v15H6zm8 1.5V8h4.5zM9 12h8v1.8H9zm0 4h8v1.8H9z';
