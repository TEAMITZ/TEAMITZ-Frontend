import React from 'react'

const UnifiedBackground: React.FC = () => {
  return (
    <>
      {/* 기본 그라데이션 배경  */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 25% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 120% 100% at 75% 50%, rgba(124, 58, 237, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 70%),
            linear-gradient(90deg, #0F172A 0%, #111827 30%, #111827 70%, #0F172A 100%)
          `,
        }}
      />

      {/* 그라데이션 오브 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* 왼쪽 */}
        <div className="absolute left-[5%] top-1/2 h-[750px] w-[750px] -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[170px]" />
        {/* 왼쪽 중앙 */}
        <div className="absolute left-[20%] top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#5B21B6]/14 blur-[140px]" />
        {/* 중앙 왼쪽 */}
        <div className="absolute left-[35%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-[130px]" />
        {/* 오른쪽 중앙 */}
        <div className="absolute right-[25%] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#5B21B6]/6 blur-[110px]" />
        {/* 오른쪽 */}
        <div className="absolute right-[10%] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#7C3AED]/5 blur-[90px]" />
        {/* 액센트 그린 글로우 */}
        <div className="absolute left-[15%] top-[25%] h-[300px] w-[300px] rounded-full bg-[#22C55E]/6 blur-[85px]" />
      </div>

      {/* 그리드 패턴 - 전체 페이지 */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* 코드 패턴 - 왼쪽 상단 */}
      <div className="pointer-events-none fixed left-96 top-16 hidden select-none font-mono text-[10px] leading-relaxed text-white/[0.06] lg:block">
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
}`}</pre>
      </div>

      {/* 코드 패턴 - 오른쪽 상단 */}
      <div className="pointer-events-none fixed top-16 right-4 hidden select-none font-mono text-[10px] leading-relaxed text-white/[0.06] lg:block">
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
  | "submitted";`}</pre>
      </div>

      {/* 코드 패턴 - 가운데 아래 */}
      <div className="pointer-events-none fixed bottom-20 left-1/2 -translate-x-1/2 hidden select-none font-mono text-[10px] leading-relaxed text-white/[0.06] lg:block">
        <pre>{`const result = await checkRanking({
  hackathonId: "hack-2024",
  teamId: team.id
});

console.log(\`Rank: \${result.rank}\`);
console.log(\`Score: \${result.score}\`);`}</pre>
      </div>

      {/* 플로팅 네트워크 노드 - 전체 페이지 */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* 연결선 */}
          <line x1="10%" y1="20%" x2="30%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="30%" y1="35%" x2="25%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="70%" y1="25%" x2="85%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="85%" y1="45%" x2="75%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="15%" y1="75%" x2="35%" y2="85%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="65%" y1="80%" x2="90%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          
          {/* 노드 */}
          <circle cx="10%" cy="20%" r="4" fill="#2563EB" opacity="0.6" />
          <circle cx="30%" cy="35%" r="5" fill="#7C3AED" opacity="0.6" />
          <circle cx="25%" cy="60%" r="4" fill="#22C55E" opacity="0.6" />
          <circle cx="70%" cy="25%" r="5" fill="#2563EB" opacity="0.6" />
          <circle cx="85%" cy="45%" r="4" fill="#7C3AED" opacity="0.6" />
          <circle cx="75%" cy="70%" r="5" fill="#22C55E" opacity="0.6" />
          <circle cx="15%" cy="75%" r="4" fill="#2563EB" opacity="0.6" />
          <circle cx="35%" cy="85%" r="4" fill="#7C3AED" opacity="0.6" />
          <circle cx="65%" cy="80%" r="5" fill="#22C55E" opacity="0.6" />
          <circle cx="90%" cy="70%" r="4" fill="#2563EB" opacity="0.6" />
        </svg>
      </div>

      {/* 스캔 라인 */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.03)_50%)] bg-[length:100%_4px]" />
    </>
  )
}

export default UnifiedBackground
