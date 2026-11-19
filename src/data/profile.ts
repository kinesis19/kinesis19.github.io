// 언어와 상관없는 프로필 정보입니다. (문장/설명 같은 텍스트는 src/i18n/ko.ts, en.ts 에서 수정)
// 빈 문자열('')로 두면 해당 항목(배지, 버튼 등)은 화면에 표시되지 않습니다.
export const profile = {
  name: 'Kinesis',
  github: 'https://github.com/kinesis19',
  linkedin: 'https://www.linkedin.com/in/kinesis19/', // 예: 'https://www.linkedin.com/in/내-아이디'
  email: 'kinesis@kashic.dev', // 예: 'me@example.com'
  resume: '', // 이력서 PDF 경로. 예: '/resume.pdf' (public/resume.pdf 에 파일을 넣으세요)
  photo: '/images/profile.jpg', // 프로필 사진 경로. 예: '/images/profile.webp' (public/images/ 에 파일을 넣으세요)
  location: 'Seoul, KR', // 예: 'Seoul, KR'
  since: 2018,
  focus: 'ROS 2 · STM32 · Embedded',
  openToWork: true,
  // 영역별 대표 기술 칩 (아이콘은 src/lib/icons.ts 에 정의된 이름과 일치하면 자동으로 붙습니다)
  domains: {
    Robotics: ['ROS 2', 'C++', 'Python'],
    Circuits: ['Altium', 'STM32'],
    Communication: ['ROS 2 DDS', 'Zenoh DDS', 'UART', 'I2C'],
    Software: ['Unity', 'C#', 'JavaScript', 'Astro'],
  },
} as const;
