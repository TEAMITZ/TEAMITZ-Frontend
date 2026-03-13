import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Input from '@atoms/Input'
import Label from '@atoms/Label'
import { TEXT_STYLES } from '@/constants'

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 로그인 API 호출
    console.log('Login:', { email, password })
  }

  return (
    <div className={`relative rounded-2xl border border-white/10 bg-[#1E293B]/70 p-10 shadow-2xl backdrop-blur-xl transition-shadow hover:shadow-[#2563EB]/20`}>
      {/* 글래스모피즘 글로우 효과 */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50" />
      
      {/* 카드 주변 부드러운 글로우 */}
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#2563EB]/10 via-transparent to-[#7C3AED]/10 blur-xl opacity-50" />

      {/* 환영 메시지 */}
      <div className="relative mb-8">
        <h2 className={`${TEXT_STYLES.size['2xl']} ${TEXT_STYLES.weight.bold} text-white mb-3`}>
          다시 만나서 반가워요
        </h2>
        <p className={`${TEXT_STYLES.size.sm} ${TEXT_STYLES.leading.relaxed} text-[#94A3B8]`}>
          팀을 찾고, 프로젝트를 제출하고, 결과를 확인하는
          <br />
          모든 과정을 하나의 플랫폼에서 시작하세요.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-6">
        {/* 이메일 입력 필드 */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-[#F8FAFC]">
            이메일
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 border-white/10 bg-[#0F172A]/60 pl-10 text-white placeholder:text-[#64748B] focus:border-[#2563EB] focus:ring-[#2563EB]/20"
            />
          </div>
        </div>

        {/* 비밀번호 입력 필드 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium text-[#F8FAFC]">
              비밀번호
            </Label>
            <a
              href="#"
              className="text-xs text-[#2563EB] transition-colors hover:text-[#3B82F6]"
            >
              비밀번호 찾기
            </a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 border-white/10 bg-[#0F172A]/60 pl-10 pr-10 text-white placeholder:text-[#64748B] focus:border-[#2563EB] focus:ring-[#2563EB]/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] transition-colors hover:text-white"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="h-11 w-full bg-[#2563EB] font-medium text-white shadow-lg shadow-[#2563EB]/25 transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/30 rounded-lg"
        >
          로그인
        </button>
      </form>

      {/* 회원가입 링크 */}
      <div className="relative mt-6 text-center text-sm">
        <span className="text-[#94A3B8]">계정이 없으신가요? </span>
        <a
          href="#"
          className="font-medium text-[#2563EB] transition-colors hover:text-[#3B82F6]"
        >
          회원가입
        </a>
      </div>
    </div>
  )
}

export default LoginForm
