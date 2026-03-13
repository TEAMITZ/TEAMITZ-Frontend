import React from 'react'
import LoginForm from '@molecules/LoginForm'
import HeroSection from '@organisms/HeroSection'
import UnifiedBackground from '@organisms/UnifiedBackground'
import { AUTH_STYLES, TEXT_STYLES } from '@/constants'

const Login: React.FC = () => {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${AUTH_STYLES.pageBackground}`}>
      {/* 통합 배경 */}
      <UnifiedBackground />

      {/* 로고 및 서비스 이름 */}
      <div className="fixed top-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 lg:left-8 lg:top-8 lg:translate-x-0 lg:gap-4">
        <img 
          src="/logo.png" 
          alt="TEAMITZ" 
          className="h-8 w-8 lg:h-16 lg:w-16 object-contain"
        />
        <span
          className={`${TEXT_STYLES.size.lg} lg:text-5xl ${TEXT_STYLES.weight.semibold} ${AUTH_STYLES.textLabel}`}
        >
          TEAMITZ
        </span>
      </div>

      {/* 분할 화면 레이아웃 */}
      <div className="relative z-10 flex min-h-screen">
        {/* 왼쪽 - 히어로 섹션 */}
        <div className="relative hidden lg:flex lg:w-1/2">
          {/* 부드러운 그라데이션 오버레이 */}
          <div className={`absolute inset-0 ${AUTH_STYLES.cardGlowOuter}`} />
          <HeroSection />
        </div>

        {/* 오른쪽 - 로그인 폼 */}
        <div className="relative flex w-full items-center justify-center px-4 py-8 lg:w-1/2">
          {/* 그라데이션 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#7C3AED]/6 via-[#7C3AED]/2 to-transparent" />
          
          <div className="relative z-10 w-full max-w-md">
            {/* 로그인 카드 */}
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login