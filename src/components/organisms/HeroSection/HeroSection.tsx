import React from 'react'
import { TEXT_STYLES } from '@/constants'

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex h-screen flex-col justify-center px-8 lg:px-16">
      {/* 히어로 섹션 글로우 효과 */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#2563EB]/18 blur-[150px]" />
      <div className="pointer-events-none absolute left-[5%] top-1/3 h-[450px] w-[450px] rounded-full bg-[#7C3AED]/12 blur-[130px]" />

      {/* 콘텐츠 영역 */}
      <div className="relative z-20 max-w-2xl">
        {/* 헤드라인 */}
        <h1 className={`mb-6 ${TEXT_STYLES.size['5xl']} lg:${TEXT_STYLES.size['6xl']} ${TEXT_STYLES.weight.bold} leading-[1.1] text-white`}>
          우리 팀… 있지?
        </h1>

        {/* 설명 */}
        <p className={`mb-4 ${TEXT_STYLES.size.lg} ${TEXT_STYLES.leading.relaxed} text-[#94A3B8] max-w-xl`}>
          해커톤에 참가하고 싶지만 같이할 팀원을 찾기 어렵지 않나요?
        </p>
        <p className={`mb-8 ${TEXT_STYLES.size.lg} ${TEXT_STYLES.leading.relaxed} text-[#94A3B8] max-w-xl`}>
          TEAMITZ는 해커톤 참가자들을 위한 올인원 플랫폼입니다.
          <br />
          팀을 찾고, 프로젝트를 제출하고, 결과를 확인하는 모든 과정을
          <br />
          하나의 플랫폼에서 해결하세요.
        </p>

        {/* 기능 칩 */}
        <div className="flex flex-wrap gap-3">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#2563EB]/30 hover:shadow-sm hover:shadow-[#2563EB]/10 cursor-default">
            해커톤 탐색
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#2563EB]/30 hover:shadow-sm hover:shadow-[#2563EB]/10 cursor-default">
            팀 구성
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#2563EB]/30 hover:shadow-sm hover:shadow-[#2563EB]/10 cursor-default">
            프로젝트 제출
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[#2563EB]/30 hover:shadow-sm hover:shadow-[#2563EB]/10 cursor-default">
            결과 확인
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
