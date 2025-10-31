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
    role: '#프론트엔드 개발 #UI/UX 디자인 #WEB',
    period: '2025.03 - 2025.07 (총 3개월)',
    technologies: ['React', 'TypeScript', 'styled-components', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/Glym-2025/glym-frontend' }],
    images: [glym1, glym2, glym3, glym4, glym5, glym6],
    detail: {
      functions: [
        {
          title: '이미지 업로드 및 폰트 생성 요청',
          description: [
            '드래그 앤 드롭 및 파일 선택',
            'FormData로 이미지, 폰트명을 포함한 데이터 서버로 전송',
          ],
        },
        {
          title: 'SSE 기반 AI 폰트 생성 진행 상태 실시간 추적',
          description: [
            'SSE 연결을 통한 폰트 생성 진행 상태 스트리밍 수신',
            '진행 상태에 따른 로딩 모달 표시로 UX 개선',
          ],
        },
        {
          title: '생성된 폰트 미리보기 및 다운로드',
          description: [
            '<a> 요소의 download 속성 활용하여 생성된 폰트 자동 다운로드',
            '@font-face를 등록하여 웹 브라우저 내에서 폰트 미리보기 제공',
          ],
        },
        {
          title: '폰트 생성 내역 관리 - 일괄 다운로드 및 삭제 기능',
          description: ['일괄 처리를 통한 작업 효율성 개선 및 사용자 편의성 향상'],
        },
      ],
      TroubleshootingCases: [
        {
          title: '트러블 슈팅',
          issue: {
            situation: 'API 요청 시 정상적인 로그인 상태임에도 불구하고 401 Unauthorized 응답 발생',
            analysis:
              '브라우저에서 쿠키를 확인하려고 했으나 httpOnly 속성으로 인해 JS 코드로 직접 접근 불가 → 인증 토큰이 요청에 포함되지 않음',
          },
          resolution: {
            steps: [
              '백엔드 담당자와 소통하며 CORS 및 쿠키 속성(SameSite, Secure, withCredentials) 설정 확인',
              '프론트엔드에서 withCredentials: true 옵션 추가하여 브라우저가 쿠키를 자동으로 포함하도록 수정',
              '서버와 클라이언트 설정을 맞춘 뒤 정상적으로 인증 헤더가 전송되는 것 확인',
            ],
          },
          learnings: [
            '인증 흐름에 대한 이해도 향상 (특히 httpOnly 쿠키의 보안적 장점)',
            '프론트 - 백엔드 간 인터페이스 정의 및 협업 커뮤니케이션의 중요성 체감',
            '관련 내용을 블로그에 정리하여 재발 방지 및 지식 공유',
          ],
        },
      ],
    },
  },
  {
    id: 2,
    title: '현장 메모 문서 변환 (인턴십)',
    status: 'Completed',
    description:
      '현장 메모 이미지를 OCR + AI로 분석해 견적서를 자동 생성하는 기능입니다.\n사용자는 최소한의 입력만으로 간편하고 빠르게 견적서를 작성할 수 있습니다.',
    role: '#프론트엔드 개발 #AI 모델 연동 #APP',
    period: '2025.07 - 2025.08 (총 1개월)',
    technologies: ['React Native', 'TypeScript', 'Google Cloud Vision API', 'Gemini AI'],
    links: [],
    images: [memo1],
    detail: {
      functions: [
        {
          title: 'OS별 이미지 촬영',
          description: [
            'iOS: vision-camera 라이브러리를 활용해 커스텀 카메라 구현',
            'Android: 시스템 기본 카메라 호출 방식 적용',
          ],
        },
        {
          title: 'OCR 기반 데이터 추출 및 Gemini를 이용한 데이터 매칭',
          description: [
            'Google Cloud Vision API에 이미지(Base64) 전송, 텍스트 정보 추출',
            '사용자의 거래처, 품목 데이터를 추출된 텍스트와 위치값을 Gemini API에 전달하여 거래처, 품목 데이터 매칭',
            '매칭된 데이터는 기존 정보와 함께 자동으로 견적서에 반영되며, 매칭 실패 시 추출된 정보만 견적서 폼에 반영',
          ],
        },
      ],
      TroubleshootingCases: [
        {
          title: '트러블 슈팅',
          issue: {
            situation:
              '외부 이미지 편집 라이브러리 사용 중, 안드로이드 환경에서 편집 화면이 시스템 네비게이션 바에 가려지는 문제 발생',
            analysis:
              '사용하는 외부 라이브러리가 자체적으로 화면을 렌더링하는 구조라 기능이 적용되지 않았음',
          },
          resolution: {
            steps: [
              '사수님과 아이디어 공유 → ‘이미지 편집 화면에서만 네비게이션 바를 숨기자’는 결론 도출',
              '안드로이드 네이티브 모듈을 직접 구현하여 시스템 네비게이션 바를 숨기고/보이게 제어하는 기능을 추가하고, React Native에서 정상 동작하는 것을 확인',
              '직접 구현한 모듈이 이미지 편집 화면에서는 적용되지 않음을 확인 → 문제 해결 실패',
              '깃허브 이슈와 PR을 조사한 결과, 동일 문제가 여러 차례 제보된 것을 확인',
              '최신 라이브러리 버전에서 해당 문제를 공식적으로 해결한 것을 확인',
              '사이드 이펙트를 검토한 후 안전하게 라이브러리를 업데이트하여 문제 해결',
            ],
          },
          learnings: [
            '문제 해결 과정에서 직접 네이티브 모듈을 만들어보는 경험과, 오픈소스 업데이트를 통한 안정적 해결 과정을 모두 경험',
            '외부 라이브러리 사용 시 구조적 한계와 버전 관리의 중요성을 체감',
          ],
        },
      ],
    },
  },
  {
    id: 3,
    title: 'EEG 데이터 시스템',
    status: 'Completed',
    description:
      'EEG 데이터를 업로드하고 전처리, 분석 및 예측할 수 있는 웹 기반 시스템입니다.\n데이터 시각화, XAI(설명 가능한 AI) 기능을 제공하며 사용자 친화적인 인터페이스를 구현했습니다.',
    role: '#프론트엔드 개발 #UI/UX 디자인 #WEB',
    period: '2024.11 - 2024.12 (총 1개월)',
    technologies: ['JavaScript', 'Python', 'React', 'Flask', 'HTML/CSS', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/neaimt/eeg-data-system' }],
    images: [eeg],
    detail: {
      functions: [
        {
          title: 'EEG 데이터 업로드 및 파일 관리',
          description: [
            'EEG 데이터를 업로드하여 시스템 내에서 관리할 수 있는 기능 제공',
            '사용자는 EEG 신호 데이터(.txt 등)를 선택해 업로드 후 분석 절차 진행',
            '업로드된 파일은 자동으로 세션 리스트에 등록되어 이후 분석에 활용됨',
          ],
        },
        {
          title: '전처리(Pre-processing) 단계 설정',
          description: [
            '노이즈 제거(remove line noise), 고역 필터(high-pass filter), 아티팩트 제거(remove artifact) 등 선택적 전처리 가능',
            '평균 재참조(average re-reference), Min-Max 정규화 등 다양한 신호 처리 옵션 제공',
            '사용자가 직접 전처리 파이프라인을 구성하여 모델에 맞는 데이터 준비 가능',
          ],
        },
        {
          title: 'AI 모델 기반 EEG 데이터 분석 및 예측',
          description: [
            'CNN 모델을 활용하여 EEG 데이터를 분석하고 인지 부하 정도(높음/낮음) 예측',
            '여러 추천 설정(예: 설정1, 설정2)에 따라 분석 결과를 비교 가능',
            '각 설정별 모델 정확도와 세부 지표(정확도, 민감도 등)를 함께 제공',
          ],
        },
        {
          title: '결과 시각화 및 비교 인터페이스',
          description: [
            '분석 결과를 시각적으로 비교할 수 있는 결과 패널 구성',
            '각 설정별 예측 결과, 채널별 반응 등을 카드 형태로 표시하여 직관적인 비교 지원',
            '시각화 구현은 팀원과 협업하여 개발, 전체 시스템 내 통합',
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: '블로그 업로드 확인 시스템',
    status: 'Completed',
    description:
      '스터디원들의 블로그 포스팅 여부를 자동으로 확인하는 웹 기반 시스템입니다.\n각 블로그 플랫폼(Tistory, Velog)의 데이터를 크롤링하여 주차별 업로드 현황을 테이블 형태로 보여줍니다.',
    role: '#풀스택 개발 #웹 크롤링 #WEB',
    period: '2025.02 - 2025.03 (총 1개월)',
    technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Express', 'AWS EC2'],
    links: [{ text: '개발과정 포스팅', url: 'https://leebaek.tistory.com/134' }],
    images: [blog],
    detail: {
      functions: [
        {
          title: '블로그 데이터 자동 크롤링',
          description: [
            '스터디원의 블로그 플랫폼(Tistory, Velog)에서 게시글 정보를 자동으로 수집',
            'Tistory는 HTML 구조 내 `span.txt_date`, Velog는 `FlatPostCard_subInfo__cT3J6` 등의 요소를 파싱하여 게시글 업로드 날짜 추출',
            '상대적 날짜(‘방금 전’, ‘몇 시간 전’)와 절대적 날짜(‘2025년 2월 6일’)를 모두 처리하여 최신 게시글 탐지',
          ],
        },
        {
          title: 'MySQL 기반 주차별 업로드 현황 관리',
          description: [
            '스터디 시작일(예: 2025년 2월 16일 일요일 오후 6시)을 기준으로 주차 단위 관리',
            '각 사용자별 해당 주의 최신 게시글 데이터만 데이터베이스(tb_check 테이블)에 저장',
            '같은 주에 여러 게시물이 존재하더라도 가장 최근 업로드만 남도록 SQL 쿼리로 정제',
          ],
        },
        {
          title: 'Node.js 서버 및 자동 실행 시스템',
          description: [
            'Node.js + Express 기반 서버로 구성되어 웹 UI와 데이터 API를 통합 관리',
            'PM2를 이용해 서버를 항상 실행 상태로 유지하고, 매주 수요일, 일요일에만 크롤링 실행',
            'AWS EC2 환경에서 주기적으로 데이터 업데이트 및 주차별 결과 반영 수행',
          ],
        },
        {
          title: '웹 페이지 내 시각화 및 상태 표시',
          description: [
            '각 주차별로 모든 스터디원의 업로드 여부를 한눈에 확인할 수 있도록 테이블 형태로 표시',
            '요일, 주차 정보, 업로드 상태를 포함하여 시각적으로 구분된 행으로 렌더링',
            '사용자별 최신 기록이 반영되도록 자동 갱신되어 데이터의 신뢰성 확보',
          ],
        },
      ],
    },
  },
  {
    id: 5,
    title: 'FoodMate UI',
    status: 'Completed',
    description:
      '음식 취향이 비슷한 사람들과 소통하고 레시피를 공유할 수 있는 iOS 앱입니다.\n로그인, 온보딩, 홈 화면, 레시피 검색, 채팅, 마이페이지 등 다양한 기능의 UI를 구현했습니다.',
    role: '#iOS 앱 개발 #UI 디자인 #APP',
    period: '2024.01 - 2024.03 (총 3개월)',
    technologies: ['Swift', 'SwiftUI', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/neaimt/FoodMate' }],
    images: [food1],
    detail: {
      functions: [
        {
          title: '로그인 화면 UI',
          description: ['로그인 및 회원가입 화면 구성, 기본적인 입력 검증(UI 단) 적용'],
        },
        {
          title: '홈 및 레시피 검색 화면 UI',
          description: [
            '재료를 선택하면 음식 추천 및 레시피를 보여주는 화면 구성',
            '검색창을 통한 키워드 기반 레시피 탐색 기능을 UI 레벨에서 구현',
            '결과 리스트 및 상세 레시피 카드의 반응형 레이아웃 설계',
          ],
        },
        {
          title: '채팅 및 마이페이지 UI',
          description: [
            '사용자 간 커뮤니케이션을 위한 채팅 인터페이스의 UI 시안 제작',
            '마이페이지에서 사용자 프로필, 저장 레시피, 활동 내역 등을 확인하는 화면 구성',
            '전체적인 디자인은 Figma를 기반으로 제작하고 SwiftUI로 변환하여 구현',
          ],
        },
      ],
    },
  },
  {
    id: 6,
    title: '세종대 기숙사 앱 UI',
    status: 'Completed',
    description:
      '세종대학교 기숙사 생활을 편리하게 만들어주는 iOS 앱입니다.\n로그인, 공지사항, 민원 접수, 마이페이지, 식단 조회 등 기숙사 생활에 필요한 다양한 기능의 UI를 구현했습니다.',
    role: '#iOS 앱 개발 #UI 디자인 #APP',
    period: '2023.07 - 2024.09 (총 2개월)',
    technologies: ['Swift', 'SwiftUI', 'Figma'],
    links: [{ text: 'GitHub', url: 'https://github.com/neaimt/sejong-domitory-iOS' }],
    images: [sejong1],
    detail: {
      functions: [
        {
          title: '로그인 및 메인 홈 화면 UI',
          description: [
            '기숙사 학생을 위한 로그인 화면 UI 설계 및 구현',
            '홈 화면에 주요 공지사항, 식단표, 민원 접수 버튼 등을 직관적으로 배치',
            'SwiftUI를 활용한 반응형 컴포넌트 구성',
          ],
        },
        {
          title: '식단표 및 공지사항 조회 UI',
          description: [
            '요일별/식사별 메뉴를 한눈에 확인할 수 있는 식단표 화면 제작',
            '공지사항 리스트 및 상세 페이지의 UI 플로우 설계',
            '카드형 UI를 통해 정보 접근성을 높임',
          ],
        },
        {
          title: '마이페이지 및 민원 접수 UI',
          description: [
            '사용자 개인 정보, 입사/퇴사 일정, 민원 내역 등을 관리할 수 있는 마이페이지 구성',
            '민원 접수 프로세스의 UI 플로우 설계 및 피드백 모달 화면 구현',
            'SwiftUI로 구성된 Form 및 NavigationStack을 이용해 사용자 흐름 개선',
          ],
        },
      ],
    },
  },
];
