// 홈의 ACTIVITY 섹션(수상, 타임라인, 활동 통계)에 쓰는 데이터입니다.
// 문장은 ko/en 이 쌍으로 있으니, 한국어를 고치면 영어도 함께 맞춰 주세요.
// slug 가 있으면 해당 프로젝트 글로 연결됩니다. (src/content/projects/*/<slug>.md)
// 수상 경력은 첫 수상인 2018년부터 적습니다.
// 타임라인에는 **행사와 수상 기록만** 넣습니다. (프로젝트, 교육, 수업 활동은 넣지 않습니다.)
export type ActKind = 'award' | 'event';

export interface ActItem {
  /** 'YYYY-MM' (월 단위). 날짜를 알 수 없으면 빈 문자열 */
  date: string;
  kind: ActKind;
  ko: string;
  en: string;
  slug?: string;
  /** 팀 성과이면 true (개인 성과와 구분해서 표시) */
  team?: boolean;
  /** 아직 열리지 않은 일정 */
  upcoming?: boolean;
}

// 최신순
export const awards: ActItem[] = [
  { date: '2026-11', kind: 'award', ko: 'IRC 지능로봇대회 씨름로봇 부문 2위 (1점 차)', en: 'IRC Intelligent Robot Competition, Ssireum Robot: 2nd place (by one point)', slug: 'ssireum-robot-2026', team: true },
  { date: '2026-09', kind: 'award', ko: '국방로봇경진대회 국방로봇 부문 대상 (ROBIT 팀, 2연속)', en: 'Defense Robot Competition, Defense Robot category: grand prize, second year in a row (ROBIT team)', slug: 'defense-robot-2026-electrical-comm', team: true },
  { date: '2026-07', kind: 'award', ko: 'RoboCup 2026 Rescue Robot League 세미파이널 진출(9위) · Best TDP 부문 수상', en: 'RoboCup 2026 Rescue Robot League: semifinalist (9th place) and the Best TDP award', slug: 'robocup-rescue-2026', team: true },
  { date: '2025-11', kind: 'award', ko: 'IRC 지능로봇대회 씨름로봇 부문 4위', en: 'IRC Intelligent Robot Competition, Ssireum Robot: 4th place', slug: 'ssireum-robot-2025', team: true },
  { date: '2025-10', kind: 'award', ko: '극한로봇경진대회 극한로봇 부문 대상 · 서울시장상 (ROBIT 팀)', en: "Extreme Robot Competition, Extreme Robot category: grand prize · Seoul Mayor's Award (ROBIT team)", slug: 'extreme-robot-2025-sim-vision', team: true },
  { date: '2025-09', kind: 'award', ko: '국방로봇경진대회 국방로봇 부문 대상 (ROBIT 팀)', en: 'Defense Robot Competition, Defense Robot category: grand prize (ROBIT team)', slug: 'defense-robot-2026-electrical-comm', team: true },
  { date: '2022-08', kind: 'award', ko: '2022 레드브릭 크리에이터 챌린지 시즌 4 수상', en: '2022 RedBrick Creator Challenge Season 4: award winner', slug: 'time-limited-life' },
  { date: '2022-05', kind: 'award', ko: '2022 레드브릭 월드 챌린지 타임어택 수상', en: '2022 RedBrick World Challenge: Time Attack: award winner', slug: 'airship-world' },
  { date: '2022-02', kind: 'award', ko: '2022 레드브릭 월드 챌린지 스핀오프 장려상', en: '2022 RedBrick World Challenge: Spin-off: Encouragement Award', slug: 'alice-world' },
  { date: '2020-08', kind: 'award', ko: '위즈랩 방탈출 크리에이터 챌린지 입상', en: 'Wizlab Escape Room Creator Challenge: prize', slug: 'wizlab-escape-room' },
  { date: '2019-10', kind: 'award', ko: '2019 인터넷윤리 창작콘텐츠 공모전 특별부문 기관상(아인세상)', en: '2019 Internet Ethics Creative Content Contest: Institutional Award (Ainsesang), Special Category', slug: 'minecraft-internet' },
  { date: '2018-11', kind: 'award', ko: '마인크래프트 에듀크리에이터 콘테스트 SW 분야 우수상', en: 'Minecraft EduCreator Contest, Software category: Excellence Award', slug: 'minecraft-education' },
];

// 최신순 (행사·수상만)
export const timeline: ActItem[] = [
  { date: '2026-11', kind: 'event', ko: 'K 로봇대회', en: 'K Robot Competition', upcoming: true },
  { date: '2026-11', kind: 'event', ko: '로보월드 2026 전시 참가', en: 'Exhibited at Robot World 2026' },
  { date: '2026-11', kind: 'award', ko: '씨름 로봇 2026: IRC 2위', en: 'Ssireum Robot 2026: 2nd at IRC', slug: 'ssireum-robot-2026' },
  { date: '2026-09', kind: 'award', ko: '국방로봇경진대회 2026 국방로봇 부문 대상 (9.5~9.6)', en: 'Defense Robot Competition 2026, Defense Robot category: grand prize (Sep 5–6)', slug: 'defense-robot-2026-electrical-comm' },
  { date: '2026-07', kind: 'award', ko: 'RoboCup 2026 인천 Rescue: 세미파이널 진출(9위), Best TDP 수상 (6.30~7.6)', en: 'RoboCup 2026 Incheon Rescue: semifinalist (9th place), Best TDP award (Jun 30 – Jul 6)', slug: 'robocup-rescue-2026' },
  { date: '2026-03', kind: 'event', ko: 'ROBIT 전시회와 신입생 설명회', en: 'ROBIT exhibition and new-member information session' },
  { date: '2026-01', kind: 'event', ko: 'ROSCon Korea 참석', en: 'Attended ROSCon Korea' },
  { date: '2025-11', kind: 'award', ko: '씨름 로봇 2025: IRC 4위', en: 'Ssireum Robot 2025: 4th at IRC', slug: 'ssireum-robot-2025' },
  { date: '2025-10', kind: 'award', ko: '극한로봇경진대회 2025 대상 · 서울시장상 (9.30~10.2, 코엑스)', en: "Extreme Robot Competition 2025: grand prize · Seoul Mayor's Award (Sep 30 – Oct 2, COEX)", slug: 'extreme-robot-2025-sim-vision' },
  { date: '2025-09', kind: 'award', ko: '국방로봇경진대회 2025 국방로봇 부문 대상 (9.13~9.14)', en: 'Defense Robot Competition 2025, Defense Robot category: grand prize (Sep 13–14)', slug: 'defense-robot-2026-electrical-comm' },
  { date: '2022-08', kind: 'award', ko: '레드브릭 크리에이터 챌린지 시즌 4 수상', en: 'RedBrick Creator Challenge Season 4: award winner', slug: 'time-limited-life' },
  { date: '2022-05', kind: 'award', ko: '레드브릭 월드 챌린지 타임어택 수상', en: 'RedBrick World Challenge (Time Attack): award winner', slug: 'airship-world' },
  { date: '2022-02', kind: 'award', ko: '레드브릭 월드 챌린지 스핀오프 장려상', en: 'RedBrick World Challenge (Spin-off): Encouragement Award', slug: 'alice-world' },
  { date: '2020-08', kind: 'award', ko: '위즈랩 방탈출 크리에이터 챌린지 입상', en: 'Wizlab Escape Room Creator Challenge: prize', slug: 'wizlab-escape-room' },
  { date: '2019-10', kind: 'award', ko: '인터넷윤리 창작콘텐츠 공모전 특별부문 기관상', en: 'Internet Ethics Creative Content Contest: Institutional Award', slug: 'minecraft-internet' },
  { date: '2018-11', kind: 'award', ko: '마인크래프트 에듀크리에이터 콘테스트 SW 분야 우수상', en: 'Minecraft EduCreator Contest (Software): Excellence Award', slug: 'minecraft-education' },
];

// 기록량 통계: 업무 기록 아카이브의 색인에서 건수만 뽑아 둔 값입니다. (제목·본문은 넣지 않음)
// 내용이 비어 있는 기록, 근태 분류, 교과목(로봇게임세미나) 기록, 2026-11-21 이후 날짜는 제외했습니다.
export const stats = {
  from: '2025-03',
  to: '2026-11',
  total: 301,
  docs: 127,
  logs: 174,
  months: [
    ['2025-03', 3], ['2025-04', 7], ['2025-05', 14], ['2025-06', 10], ['2025-07', 12], ['2025-08', 12],
    ['2025-09', 5], ['2025-10', 0], ['2025-11', 6], ['2025-12', 5],
    ['2026-01', 26], ['2026-02', 25], ['2026-03', 22], ['2026-04', 11], ['2026-05', 20], ['2026-06', 12],
    ['2026-07', 26], ['2026-08', 29], ['2026-09', 27], ['2026-10', 14], ['2026-11', 15],
  ] as [string, number][],
  projects: [
    { ko: '전기·전원·PCB·BMS', en: 'Electrical · Power · PCB · BMS', count: 106 },
    { ko: '국방·극한 로봇', en: 'Defense & extreme robot', count: 58 },
    { ko: '씨름 로봇 · IRC', en: 'Ssireum robot · IRC', count: 24 },
    { ko: '신입생 교육', en: 'New-member training', count: 20 },
    { ko: 'RoboCup Rescue', en: 'RoboCup Rescue', count: 10 },
    { ko: '고등학생 멘토링(RPG)', en: 'High-school mentoring (RPG)', count: 6 },
  ],
};
