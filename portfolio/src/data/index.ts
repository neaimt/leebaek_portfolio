import type { ProjectItemProps } from '../types/projectItem';
import glym1 from '../assets/glym1.png';
import glym2 from '../assets/glym2.png';
import glym3 from '../assets/glym3.png';
import glym4 from '../assets/glym4.png';
import glym5 from '../assets/glym5.png';
import glym6 from '../assets/glym6.png';
import eeg from '../assets/eeg.png';
import blog from '../assets/blog.png';
import food1 from '../assets/food1.png';
import memo1 from '../assets/memo1.png';
import sejong1 from '../assets/sejong1.png';

/** 프로젝트 아이템 데이터 */
export const projectItems: ProjectItemProps[] = [
  {
    id: 1,
    title: 'Glym - AI 폰트 제작 시스템',
    status: 'Completed',
    description:
      'AI 기술을 활용하여 사용자의 손글씨를 폰트로 변환해주는 웹 서비스입니다.\n직관적인 UI/UX를 통해 누구나 쉽게 자신만의 폰트를 제작할 수 있도록 설계했습니다.',
    role: '#프론트엔드 개발 #UI/UX 디자인',
    period: '2025.03 - 2025.07 (총 3개월)',
    technologies: ['React', 'TypeScript', 'styled-components', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/Glym-2025/glym-frontend' }],
    images: [glym1, glym2, glym3, glym4, glym5, glym6],
  },
  {
    id: 2,
    title: '현장 메모 문서 변환 (인턴십)',
    status: 'Completed',
    description:
      '현장 메모 이미지를 OCR + AI로 분석해 견적서를 자동 생성하는 기능입니다.\n사용자는 최소한의 입력만으로 간편하고 빠르게 견적서를 작성할 수 있습니다.',
    role: '#프론트엔드 개발',
    period: '2025.07 - 2025.08 (총 1개월)',
    technologies: ['React Native', 'TypeScript'],
    links: [],
    images: [memo1],
  },
  {
    id: 3,
    title: 'EEG 데이터 시스템',
    status: 'Completed',
    description:
      'EEG 데이터를 업로드하고 전처리, 분석 및 예측할 수 있는 웹 기반 시스템입니다.\n데이터 시각화, XAI(설명 가능한 AI) 기능을 제공하며 사용자 친화적인 인터페이스를 구현했습니다.',
    role: '#풀스택 #UI/UX 디자인',
    period: '2024.11 - 2024.12 (총 1개월)',
    technologies: ['JavaScript', 'Python', 'React', 'Flask', 'HTML/CSS', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/neaimt/eeg-data-system' }],
    images: [eeg],
  },
  {
    id: 4,
    title: '블로그 업로드 확인 시스템',
    status: 'Completed',
    description:
      '스터디원들의 블로그 포스팅 여부를 자동으로 확인하는 웹 기반 시스템입니다.\n각 블로그 플랫폼(Tistory, Velog)의 데이터를 크롤링하여 주차별 업로드 현황을 테이블 형태로 보여줍니다.',
    role: '#풀스택 개발',
    period: '2025.02 - 2025.03 (총 1개월)',
    technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Express', 'AWS EC2'],
    links: [{ text: '개발과정 포스팅', url: 'https://leebaek.tistory.com/134' }],
    images: [blog],
  },
  {
    id: 5,
    title: 'FoodMate UI',
    status: 'Completed',
    description:
      '음식 취향이 비슷한 사람들과 소통하고 레시피를 공유할 수 있는 iOS 앱입니다.\n로그인, 온보딩, 홈 화면, 레시피 검색, 채팅, 마이페이지 등 다양한 기능의 UI를 구현했습니다.',
    role: '#iOS 앱 개발 #UI 디자인',
    period: '2024.01 - 2024.03 (총 3개월)',
    technologies: ['Swift', 'SwiftUI', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/neaimt/FoodMate' }],
    images: [food1],
  },
  {
    id: 6,
    title: '세종대 기숙사 앱 UI',
    status: 'Completed',
    description:
      '세종대학교 기숙사 생활을 편리하게 만들어주는 iOS 앱입니다.\n로그인, 공지사항, 민원 접수, 마이페이지, 식단 조회 등 기숙사 생활에 필요한 다양한 기능의 UI를 구현했습니다.',
    role: '#iOS 앱 개발 #UI 디자인',
    period: '2023.07 - 2024.09 (총 2개월)',
    technologies: ['Swift', 'SwiftUI', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/neaimt/sejong-domitory-iOS' }],
    images: [sejong1],
  },
];
