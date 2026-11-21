// 홈의 EXPERIENCE 섹션(경력: 인턴, 학생자치기구, 멘토)에 쓰는 데이터입니다.
// 문장은 ko/en 이 쌍으로 있으니, 한국어를 고치면 영어도 함께 맞춰 주세요.
// slug 가 있으면 해당 프로젝트 글로 연결됩니다. (src/content/projects/*/<slug>.md)
export interface ExpLink { slug: string; ko: string; en: string }

export interface ExpItem {
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM'. 비어 있으면 현재 진행 중 */
  end: string;
  org: string;
  /** 소속 설명 (선택) */
  sub?: { ko: string; en: string };
  role: { ko: string; en: string };
  bullets: { ko: string[]; en: string[] };
  /** 소속의 공식 사이트 (선택) */
  url?: string;
  links?: ExpLink[];
}

// 최신 시작순
export const experience: ExpItem[] = [
  {
    start: '2025-03',
    end: '2025-12',
    org: 'RPG Robot Club',
    sub: { ko: '지역 청소년센터 × ROBIT 연계 고등학생 로봇 동아리', en: 'High-school robot club run by a local youth center × ROBIT' },
    role: { ko: '멘토', en: 'Mentor' },
    bullets: {
      ko: [
        '지역 청소년센터와 연계한 고등학생 동아리의 멘토로 활동했습니다.',
        '학생 면접, 주간 교육, 제안서 피드백, 학생 방문 일정 정리를 맡았습니다.',
      ],
      en: [
        'Worked as a mentor for a high-school club run with a local youth center.',
        'Took part in student interviews, weekly sessions, proposal feedback, and organizing the students\' visit.',
      ],
    },
    links: [{ slug: 'mentoring-education', ko: '교육과 멘토링 글 보기', en: 'Read: Education and Mentoring' }],
  },
  {
    start: '2024-07',
    end: '',
    org: 'ROːBIT',
    sub: { ko: '광운대학교 학생자치기구', en: 'Kwangwoon University student self-governing organization' },
    role: { ko: '지능형 로봇팀 팀원', en: 'Intelligent Robotics Team member' },
    bullets: {
      ko: [
        '국방로봇경진대회에서는 전장(전원 분배·배선·회로)과 무선 통신을, RoboCup Rescue에서는 배선·회로와 양방향 오디오 패키지를 맡았습니다.',
        '팀 성과: 극한로봇경진대회 대상(서울시장상), 국방로봇경진대회 국방로봇 부문 2연속 대상, RoboCup 2026 Rescue 세미파이널 진출(9위)·Best TDP, IRC 씨름로봇 4위·2위.',
        '신입생 교육 자료를 만들어 교육하고, 후배를 위한 회로·통신 인수인계 자료를 정리했습니다.',
      ],
      en: [
        'At the Defense Robot Competition I owned the electrical system (power distribution, wiring, circuits) and the wireless communication, and at RoboCup Rescue the wiring, circuits, and the two-way audio package.',
        'Team results: the grand prize (Seoul Mayor\'s Award) at the Extreme Robot Competition, the grand prize in the Defense Robot category of the Defense Robot Competition two years in a row, semifinalist (9th place) and Best TDP at RoboCup 2026 Rescue, and 4th and 2nd place at IRC Ssireum Robot.',
        'Made and taught training materials for new members, and organized hand-over materials on circuits and communication for the juniors.',
      ],
    },
    links: [
      { slug: 'defense-robot-2026-electrical-comm', ko: '국방로봇경진대회 2026', en: 'Defense Robot Competition 2026' },
      { slug: 'robocup-rescue-2026', ko: 'RoboCup Rescue 2026', en: 'RoboCup Rescue 2026' },
    ],
  },
  {
    start: '2024-06',
    end: '2024-09',
    org: 'Redbrick',
    role: { ko: '크리에이터 인턴 (프리랜서)', en: 'Creator Intern (Freelance)' },
    bullets: {
      ko: [
        'Redbrick 메타버스 플랫폼에서 자체 스튜디오 도구와 JavaScript로 게임 월드와 인터랙티브 콘텐츠를 설계하고 개발했습니다.',
        'Redbrick 팀과 직접 협업하며 피드백을 반영해 콘텐츠를 개선했습니다.',
        '몰입형 3D 환경을 위한 콘텐츠 기획부터 UX까지 전 과정을 맡았습니다.',
      ],
      en: [
        'Designed and developed game worlds and interactive content on the Redbrick metaverse platform using its studio tools and JavaScript.',
        'Worked directly with the Redbrick team and improved the content based on feedback.',
        'Covered the whole process for immersive 3D environments, from content planning to UX.',
      ],
    },
    url: 'https://redbrick.land/',
  },
];
