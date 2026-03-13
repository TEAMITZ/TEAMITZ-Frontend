import React from 'react'

const BackgroundElements: React.FC = () => {
  return (
    <>
      {/* 그라데이션 오브 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 메인 블루 오브 */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-[128px]" />
        {/* 세컨더리 보라색 오브 */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#7C3AED]/20 blur-[128px]" />
        {/* 액센트 그린 오브 */}
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#22C55E]/10 blur-[96px]" />
      </div>

      {/* 그리드 패턴 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* 코드 패턴 - 왼쪽 */}
      <div className="pointer-events-none absolute left-8 top-1/4 hidden select-none font-mono text-[10px] leading-relaxed text-white/[0.03] lg:block">
        <pre>{`const team = await createTeam({
  name: "Hackathon Heroes",
  members: ["alice", "bob"],
  project: "AI Assistant"
});

async function submitProject() {
  const result = await deploy({
    repo: team.repository,
    branch: "main"
  });
  return result.url;
}

export { team, submitProject };`}</pre>
      </div>

      {/* 코드 패턴 - 오른쪽 */}
      <div className="pointer-events-none absolute bottom-1/4 right-8 hidden select-none font-mono text-[10px] leading-relaxed text-white/[0.03] lg:block">
        <pre>{`interface Hackathon {
  id: string;
  name: string;
  teams: Team[];
  prizes: Prize[];
  deadline: Date;
}

type TeamStatus = 
  | "forming"
  | "building"
  | "submitted";

const hackathon: Hackathon = {
  id: "hack-2024",
  name: "TEAMITZ Global"
};`}</pre>
      </div>

      {/* 플로팅 네트워크 노드 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 노드 연결선 */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* 연결선 */}
          <line x1="10%" y1="20%" x2="30%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="30%" y1="35%" x2="25%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="70%" y1="25%" x2="85%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="85%" y1="45%" x2="75%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="15%" y1="75%" x2="35%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="65%" y1="80%" x2="90%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
          
          {/* 노드 */}
          <circle cx="10%" cy="20%" r="3" fill="#2563EB" opacity="0.5" />
          <circle cx="30%" cy="35%" r="4" fill="#7C3AED" opacity="0.5" />
          <circle cx="25%" cy="60%" r="3" fill="#22C55E" opacity="0.5" />
          <circle cx="70%" cy="25%" r="4" fill="#2563EB" opacity="0.5" />
          <circle cx="85%" cy="45%" r="3" fill="#7C3AED" opacity="0.5" />
          <circle cx="75%" cy="70%" r="4" fill="#22C55E" opacity="0.5" />
          <circle cx="15%" cy="75%" r="3" fill="#2563EB" opacity="0.5" />
          <circle cx="35%" cy="85%" r="3" fill="#7C3AED" opacity="0.5" />
          <circle cx="65%" cy="80%" r="4" fill="#22C55E" opacity="0.5" />
          <circle cx="90%" cy="70%" r="3" fill="#2563EB" opacity="0.5" />
        </svg>
      </div>

      {/* 미묘한 스캔 라인 효과 */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.02)_50%)] bg-[length:100%_4px]" />
    </>
  )
}

export default BackgroundElements
