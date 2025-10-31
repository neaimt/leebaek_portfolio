/** 프로젝트 아이템 타입 정의 */
export interface ProjectItemProps {
  id: number;
  status?: string; // 프로젝트 상태 (예: 진행 중, 완료 등)
  role?: string; // 담당 역할
  period: string; // 프로젝트 기간
  technologies?: Technology[]; // 사용 기술
  title: string; // 제목
  description: string; // 설명
  links?: { text: string; url: string }[]; // 관련 링크
  images: string[]; // 이미지 URL
  projectUrl?: string; // 링크
  detail?: ProjectItemDetail; // 상세 설명
}

export interface ProjectItemDetail {
  functions: {
    title: string;
    description: string[];
  }[]; // 개발 기능에 대한 상세 설명
  TroubleshootingCases?: TroubleshootingCase[]; // 트러블 슈팅 사례
}

export interface TroubleshootingCase {
  title: string; // 예: "트러블 슈팅"
  issue: {
    situation: string; // 문제 상황
    analysis: string; // 원인 분석
  };
  resolution: {
    steps: string[]; // 해결 과정 단계별 설명
  };
  learnings: string[]; // 배운 점
}

export type Technology =
  | 'React'
  | 'TypeScript'
  | 'styled-components'
  | 'Figma'
  | 'React Native'
  | 'JavaScript'
  | 'Python'
  | 'Flask'
  | 'HTML/CSS'
  | 'Node.js'
  | 'Express'
  | 'AWS EC2'
  | 'Swift'
  | 'SwiftUI'
  | 'Google Cloud Vision API'
  | 'Gemini AI';
