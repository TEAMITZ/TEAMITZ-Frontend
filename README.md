# TEAMITZ-Frontend

## TEAMITZ

"우리 팀… 있지?"

해커톤에 참가하고 싶지만
같이할 팀원을 찾기 어렵지 않나요?

어떤 해커톤이 열리는지 찾기도 어렵고,
팀을 구성하고 프로젝트를 제출하고
결과를 확인하는 과정도 번거롭습니다.

TEAMITZ는 이러한 문제를 해결하기 위해 만들어진
해커톤 참가자를 위한 올인원 플랫폼입니다.

## Why TEAMITZ?

해커톤 참가자들은 여러 가지 어려움을 겪습니다.

- 어떤 해커톤이 열리는지 찾기 어렵다
- 함께할 팀원을 구하기 힘들다
- 프로젝트 제출과 결과 확인이 번거롭다
- 여러 플랫폼을 오가야 한다

TEAMITZ는 이러한 과정을 하나의 플랫폼에서 해결합니다.

## What TEAMITZ Does

TEAMITZ는 해커톤의 전 과정을 지원합니다.

- Hackathon Discovery: 다양한 해커톤을 쉽게 탐색
- Team Building: 함께 도전할 팀원 찾기 및 팀 구성
- Project Submission: 해커톤 프로젝트 제출
- Ranking & Results: 결과 확인 및 랭킹 경쟁

## Our Vision

TEAMITZ는 해커톤 참가자들이
더 쉽게 팀을 만들고, 더 빠르게 도전하며, 더 즐겁게 경쟁할 수 있는 환경을 만드는 것을 목표로 합니다.

Find your team.
Build your idea.
Compete in hackathons.

**TEAMITZ**

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **Zustand** - 상태 관리
- **Axios** - HTTP 클라이언트
- **React Router** - 라우팅

## 프로젝트 구조

아토믹 디자인 패턴을 따릅니다:

```
src/
├── components/
│   ├── atoms/          # 가장 작은 단위의 컴포넌트 (Button, Input 등)
│   ├── molecules/      # atoms를 조합한 컴포넌트 (Form, Card 등)
│   ├── organisms/      # molecules와 atoms를 조합한 복잡한 컴포넌트 (Header, Sidebar 등)
│   └── templates/      # organisms를 배치한 레이아웃
├── pages/              # 실제 페이지 컴포넌트
├── stores/             # Zustand 상태 관리 스토어
├── api/                # API 호출 관련 함수
├── types/              # TypeScript 타입 정의
└── utils/              # 유틸리티 함수
```

## 시작하기

### 설치

이 프로젝트는 **pnpm**을 사용합니다.

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

### 빌드

```bash
pnpm build
```

### 코드 포맷팅 및 린팅

```bash
# 코드 포맷팅
pnpm format

# 포맷팅 확인
pnpm format:check

# 린팅
pnpm lint

# 린팅 자동 수정
pnpm lint:fix

# 타입 체크
pnpm type-check
```

### 환경 변수 설정

`.env` 파일을 생성하고 다음을 추가하세요:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

## Path Alias

프로젝트에서 사용 가능한 경로 별칭:

- `@/*` - src 폴더
- `@atoms/*` - atoms 컴포넌트
- `@molecules/*` - molecules 컴포넌트
- `@organisms/*` - organisms 컴포넌트
- `@templates/*` - templates 컴포넌트
- `@pages/*` - pages
- `@stores/*` - Zustand stores
- `@api/*` - API 함수
- `@utils/*` - 유틸리티 함수
- `@types/*` - 타입 정의
- `@constants/*` - 상수 정의 (스타일, 색상 등)

## 코딩 컨벤션

프로젝트의 코딩 컨벤션은 [CONVENTIONS.md](./CONVENTIONS.md)를 참고하세요.

주요 내용:
- 네이밍 컨벤션
- 파일 구조 규칙
- 컴포넌트 작성 가이드
- 타입 정의 규칙
- 커밋 메시지 컨벤션

## Cursor Rules

이 프로젝트는 Cursor IDE의 Rules 기능을 사용하여 코딩 컨벤션을 자동으로 적용합니다.

`.cursor/rules/` 디렉토리에 다음 규칙 파일들이 있습니다:

- `general.mdc` - 일반적인 코딩 컨벤션 (항상 적용)
- `typescript-react.mdc` - TypeScript/React 파일 규칙
- `components.mdc` - 컴포넌트 작성 규칙
- `stores.mdc` - Zustand 스토어 규칙
- `api.mdc` - API 호출 규칙
- `styling.mdc` - Tailwind CSS 스타일링 규칙
- `commit.mdc` - 커밋 메시지 컨벤션

이 규칙들은 Cursor AI가 코드를 작성할 때 자동으로 참고하여 컨벤션에 맞는 코드를 생성합니다.