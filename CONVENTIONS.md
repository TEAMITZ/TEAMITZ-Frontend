# 코딩 컨벤션

이 문서는 TEAMITZ-Frontend 프로젝트의 코딩 컨벤션을 정의합니다.

## 목차

1. [일반 규칙](#일반-규칙)
2. [네이밍 컨벤션](#네이밍-컨벤션)
3. [파일 구조](#파일-구조)
4. [컴포넌트 작성 규칙](#컴포넌트-작성-규칙)
5. [타입 정의](#타입-정의)
6. [상태 관리](#상태-관리)
7. [API 호출](#api-호출)
8. [스타일링](#스타일링)
9. [커밋 메시지](#커밋-메시지)

## 일반 규칙

### 코드 포맷팅

- **Prettier**를 사용하여 자동 포맷팅
- 세미콜론(`;`) 사용하지 않음
- 작은따옴표(`'`) 사용
- 들여쓰기: 2칸 (스페이스)
- 최대 줄 길이: 100자

### 코드 품질

- **ESLint** 규칙 준수
- TypeScript strict 모드 사용
- 사용하지 않는 변수/import 제거
- `any` 타입 사용 지양

## 네이밍 컨벤션

### 파일명

- **컴포넌트**: PascalCase (예: `Button.tsx`, `UserProfile.tsx`)
- **유틸리티/헬퍼**: camelCase (예: `formatDate.ts`, `validateEmail.ts`)
- **타입 정의**: camelCase (예: `userTypes.ts`, `apiTypes.ts`)
- **상수**: UPPER_SNAKE_CASE (예: `API_ENDPOINTS.ts`)
- **스토어**: camelCase with `use` prefix (예: `useAuthStore.ts`)

### 변수 및 함수

- **변수**: camelCase (예: `userName`, `isLoading`)
- **함수**: camelCase (예: `handleSubmit`, `fetchUserData`)
- **상수**: UPPER_SNAKE_CASE (예: `MAX_RETRY_COUNT`, `API_BASE_URL`)
- **Boolean 변수**: `is`, `has`, `should` prefix 사용 (예: `isLoading`, `hasError`)

### 컴포넌트

- **컴포넌트명**: PascalCase (예: `Button`, `UserCard`)
- **Props 인터페이스**: `{ComponentName}Props` (예: `ButtonProps`, `UserCardProps`)

### 타입 및 인터페이스

- **인터페이스**: PascalCase (예: `User`, `ApiResponse`)
- **타입 별칭**: PascalCase (예: `UserStatus`, `ApiError`)
- **제네릭**: 단일 대문자 (예: `T`, `K`, `V`)

## 파일 구조

### 아토믹 디자인 패턴

```
src/
├── components/
│   ├── atoms/              # 가장 작은 단위의 컴포넌트
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   └── Input/
│   ├── molecules/          # atoms를 조합한 컴포넌트
│   │   ├── SearchForm/
│   │   └── UserCard/
│   ├── organisms/          # 복잡한 컴포넌트
│   │   ├── Header/
│   │   └── Sidebar/
│   └── templates/          # 레이아웃 템플릿
│       └── MainLayout/
├── pages/                  # 페이지 컴포넌트
│   ├── Home/
│   └── Login/
├── stores/                 # Zustand 스토어
│   ├── useAuthStore.ts
│   └── index.ts
├── api/                    # API 호출 함수
│   ├── auth.ts
│   └── axios.ts
├── types/                  # 타입 정의
│   └── index.ts
└── utils/                  # 유틸리티 함수
    └── index.ts
```

### 컴포넌트 폴더 구조

각 컴포넌트는 자체 폴더를 가지며, 다음 구조를 따릅니다:

```
ComponentName/
├── ComponentName.tsx       # 메인 컴포넌트 파일
├── ComponentName.test.tsx   # 테스트 파일 (선택사항)
├── ComponentName.stories.tsx # Storybook 파일 (선택사항)
└── index.ts                # export 파일
```

## 컴포넌트 작성 규칙

### 기본 구조

```tsx
import React from 'react'

export interface ComponentNameProps {
  // Props 타입 정의
}

const ComponentName: React.FC<ComponentNameProps> = ({
  // Props destructuring
}) => {
  // Hooks
  // Handlers
  // Render
  return (
    // JSX
  )
}

export default ComponentName
```

### 규칙

1. **함수형 컴포넌트만 사용**
2. **React.FC 타입 사용**
3. **Props는 인터페이스로 정의**
4. **컴포넌트명과 파일명 일치**
5. **export default 사용**
6. **index.ts에서 re-export**

### 예시

```tsx
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

export default Button
```

## 타입 정의

### 위치

- 공통 타입: `src/types/index.ts`
- 컴포넌트별 타입: 컴포넌트 파일 내부 또는 같은 폴더의 `types.ts`

### 네이밍

```typescript
// 인터페이스
export interface User {
  id: string
  name: string
  email: string
}

// 타입 별칭
export type UserStatus = 'active' | 'inactive' | 'pending'

// 유니온 타입
export type ApiResponse<T> = {
  data: T
  status: number
  message: string
}
```

## 상태 관리

### Zustand 사용 규칙

1. **스토어 파일명**: `use{StoreName}Store.ts` (예: `useAuthStore.ts`)
2. **스토어명**: `use{StoreName}Store` (예: `useAuthStore`)
3. **스토어는 `src/stores/` 폴더에 위치**
4. **`src/stores/index.ts`에서 export**

### 예시

```typescript
import { create } from 'zustand'

interface AuthState {
  user: User | null
  token: string | null
  login: (user: User, token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  login: (user, token) => set({ user, token }),
  logout: () => set({ user: null, token: null }),
}))
```

## API 호출

### 구조

- API 함수는 `src/api/` 폴더에 위치
- 도메인별로 파일 분리 (예: `auth.ts`, `hackathon.ts`)
- Axios 인스턴스는 `src/api/axios.ts`에서 관리

### 네이밍

- 함수명: `{action}{Resource}` (예: `getUser`, `createHackathon`, `updateTeam`)
- HTTP 메서드별 prefix:
  - GET: `get`, `fetch`
  - POST: `create`, `post`
  - PUT: `update`, `put`
  - DELETE: `delete`, `remove`

### 예시

```typescript
import apiClient from './axios'
import type { User, CreateUserRequest } from '@/types'

export const getUser = async (id: string): Promise<User> => {
  const response = await apiClient.get(`/users/${id}`)
  return response.data
}

export const createUser = async (data: CreateUserRequest): Promise<User> => {
  const response = await apiClient.post('/users', data)
  return response.data
}
```

## 스타일링

### Tailwind CSS 사용 규칙

1. **색상 및 스타일은 상수로 관리**
2. **인라인 클래스 사용**
3. **커스텀 클래스는 `@apply` 지시어 사용 지양**
4. **반복되는 스타일은 컴포넌트로 추출**
5. **반응형 디자인: 모바일 퍼스트**

### 스타일 상수 사용

모든 색상, 텍스트 스타일, 간격 등은 `src/constants/styles.ts`에서 정의된 상수를 사용합니다.

```tsx
import { COLORS, TEXT_STYLES, SPACING, BUTTON_VARIANTS } from '@/constants'

// 좋은 예
<button className={`${BUTTON_VARIANTS.primary} ${SPACING.padding.md}`}>
  버튼
</button>

<div className={`${COLORS.background.default} ${SPACING.padding.lg} ${TEXT_STYLES.size.base}`}>
  내용
</div>

// 나쁜 예 (하드코딩)
<button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
  버튼
</button>
```

### 클래스 순서

1. 레이아웃 (display, position, flex, grid)
2. 크기 (width, height, padding, margin)
3. 스타일 (background, border, color)
4. 효과 (shadow, transition, transform)

### 예시

```tsx
import { COLORS, SPACING, BORDER, SHADOW } from '@/constants'

<div className={`flex items-center justify-between ${SPACING.padding.md} ${COLORS.background.default} ${BORDER.radius.lg} ${SHADOW.md}`}>
  {/* content */}
</div>
```

## 커밋 메시지

### 형식

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등

### 예시

```
feat(auth): 로그인 기능 구현

- 이메일/비밀번호 로그인 추가
- JWT 토큰 저장 로직 구현
- 로그인 상태 관리 스토어 생성

Closes #123
```

## 추가 규칙

### Import 순서

1. React 및 라이브러리
2. 타입 import
3. 내부 컴포넌트/유틸리티
4. 상대 경로 import

```tsx
import React from 'react'
import { useRouter } from 'react-router-dom'
import type { User } from '@/types'
import Button from '@atoms/Button'
import { formatDate } from '@/utils'
```

### 주석

- **한국어 주석 허용**
- 복잡한 로직에만 주석 작성
- JSDoc 스타일 주석 권장

```typescript
/**
 * 사용자 정보를 가져옵니다.
 * @param userId - 사용자 ID
 * @returns 사용자 정보
 */
export const getUser = async (userId: string): Promise<User> => {
  // ...
}
```

### 에러 처리

- API 호출은 try-catch 사용
- 사용자에게 명확한 에러 메시지 제공
- 콘솔 에러 로깅

```typescript
try {
  const user = await getUser(userId)
  // ...
} catch (error) {
  console.error('Failed to fetch user:', error)
  // 에러 처리
}
``