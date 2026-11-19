// 프로젝트/저널 카테고리 (content.config.ts 의 스키마와 홈 화면 탭 순서에서 공통으로 사용)
export const CATEGORIES = ['Robotics', 'Circuits', 'Communication', 'Software'] as const;
export type Category = (typeof CATEGORIES)[number];
