import React from 'react';
import { Issue05State, IssueId } from '../../types';
import {
  LABOR_RIGHTS,
  LABOR_RIGHT_SCENES,
} from '../../data/curriculumData';
import { ArrowRight, Users, Scale, MessageSquareText, Shield, CheckCircle } from 'lucide-react';

interface Issue05TogetherProps {
  issue05State: Issue05State;
  onUpdateIssue05: (updater: (prev: Issue05State) => Issue05State) => void;
  onNextIssue: (next: IssueId) => void;
  onPrevIssue: (prev: IssueId) => void;
}

const TOGETHER_KEYWORDS = [
  { id: 'power_diff', label: '힘의 차이', hint: '개별 근로자와 사용자 간의 실질적인 경제적·사회적 비대칭' },
  { id: 'working_cond', label: '근로조건', hint: '임금, 근로시간, 안전 등 노동의 제반 대우 개선' },
  { id: 'negotiation', label: '협상력', hint: '동등한 교섭 주체로서 마주 앉을 수 있는 대등성 확보' },
  { id: 'collective', label: '집단적 연대', hint: '혼자서는 불이익이 두려워 말하지 못하는 문제를 함께 해결' },
  { id: 'human_dignity', label: '인간다운 생활', hint: '헌법 제32조·제33조가 지향하는 인간의 존엄성과 생존권' },
];

export const Issue05Together: React.FC<Issue05TogetherProps> = ({
  issue05State,
  onUpdateIssue05,
  onNextIssue,
  onPrevIssue,
}) => {
  const matchSceneToRight = (sceneId: string, rightId: 'organize' | 'negotiate' | 'act') => {
    onUpdateIssue05((prev) => ({
      ...prev,
      matchedRights: {
        ...prev.matchedRights,
        [sceneId]: prev.matchedRights[sceneId] === rightId ? null : rightId,
      },
    }));
  };

  const toggleTogetherKeyword = (kwId: string) => {
    onUpdateIssue05((prev) => {
      const exists = prev.selectedTogetherKeywords.includes(kwId);
      return {
        ...prev,
        selectedTogetherKeywords: exists
          ? prev.selectedTogetherKeywords.filter((id) => id !== kwId)
          : [...prev.selectedTogetherKeywords, kwId],
      };
    });
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* 1. Page Header: Front Page Newspaper Headline */}
      <header className="border-b-2 border-[#1C1917] pb-8 space-y-4">
        <div className="flex items-center justify-between editorial-label text-[#78716C]">
          <span>RIGHTS FILE · ISSUE 05</span>
          <span className="editorial-meta">COLLECTIVE LABOR RIGHTS / THE 3 LABOR RIGHTS</span>
        </div>

        <div className="py-6 border-y-2 border-[#1C1917] text-center space-y-3 bg-[#FBF9F5]">
          <span className="editorial-label text-[#881337]">
            THE FRONT PAGE EDITORIAL
          </span>
          <h1 className="display-title text-4xl sm:text-6xl text-[#1C1917] leading-tight">
            “우리, 같이 이야기합시다.”
          </h1>
          <p className="editorial-label text-xs sm:text-sm tracking-[0.2em] text-[#57534E] pt-2">
            WHY DO WORKERS HAVE COLLECTIVE RIGHTS?
          </p>
        </div>
      </header>

      {/* 2. CONCEPT: 노동 3권 (3 Vertical Columns) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
          <span className="editorial-label text-[#881337]">
            CONCEPT 05
          </span>
          <span className="editorial-meta text-[#78716C]">/ THE THREE FUNDAMENTAL LABOR RIGHTS (헌법 제33조)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LABOR_RIGHTS.map((right) => (
            <div
              key={right.id}
              className="p-6 bg-white border border-[#292524]/20 space-y-4 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#292524]/10 pb-2">
                  <span className="editorial-meta text-[#881337] font-bold">
                    {right.code}
                  </span>
                  <span className="stamp-box px-1.5 py-0.5 text-[9px] editorial-meta">헌법상 기본권</span>
                </div>
                <h3 className="card-title text-xl sm:text-2xl text-[#1C1917] mt-2">
                  {right.name}
                </h3>
                <p className="card-body text-sm sm:text-[15px] text-[#292524] mt-2 leading-relaxed">
                  {right.definition}
                </p>
              </div>

              <div className="pt-3 border-t border-[#292524]/10 text-xs editorial-meta text-[#78716C]">
                근거: {right.constitutionalBasis}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SCENE MATCHING: 장면과 노동 3권 연결 */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="editorial-label text-[#881337]">CONNECT THE SCENES</span>
            <span className="scene-title">
              「현실 장면과 권리의 연결」
            </span>
          </div>
          <p className="learning-instruction text-[#57534E] mt-1">
            아래 세 가지 실제 상황에 해당하는 노동권을 선택해 연결해 보세요.
          </p>
        </div>

        <div className="space-y-4">
          {LABOR_RIGHT_SCENES.map((scene) => {
            const currentMatch = issue05State.matchedRights[scene.id];
            const isCorrect = currentMatch === scene.expectedRight;

            return (
              <div
                key={scene.id}
                id={`scene-match-${scene.id}`}
                className="p-4 border border-[#292524]/15 bg-[#FBF9F5] space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="learning-question text-base text-[#1C1917]">
                    {scene.text}
                  </p>

                  <div className="flex items-center gap-2 shrink-0">
                    {LABOR_RIGHTS.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => matchSceneToRight(scene.id, r.id)}
                        className={`px-2.5 py-1 text-xs editorial-label transition-all cursor-pointer border ${
                          currentMatch === r.id
                            ? 'bg-[#881337] text-white border-[#881337] font-bold shadow-xs'
                            : 'bg-white text-[#57534E] border-[#292524]/20 hover:border-[#1C1917]'
                        }`}
                      >
                        {r.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Note on selection */}
                {currentMatch && (
                  <div className="pt-2 border-t border-[#292524]/10 text-xs sm:text-sm text-[#57534E] flex items-center gap-2 animate-in fade-in duration-200">
                    <span className="editorial-meta text-xs text-[#881337] font-bold shrink-0">
                      [READ THE NOTE]
                    </span>
                    <span className="card-body text-sm sm:text-[15px] text-[#292524]">{scene.feedback}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. THINK: 왜 ‘함께’일까? */}
      <section className="p-8 sm:p-12 bg-white border-2 border-[#1C1917] space-y-8 text-center relative">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="stamp-box px-3 py-1 text-xs editorial-label">
            PHILOSOPHICAL &amp; CONSTITUTIONAL INQUIRY
          </span>

          <h2 className="editorial-heading text-3xl sm:text-5xl text-[#1C1917] leading-tight">
            “왜 헌법은 근로자에게 혼자가 아니라<br />
            <span className="text-[#881337] underline decoration-2 underline-offset-8">‘함께’</span> 행동할 권리까지 보장할까?”
          </h2>

          <p className="learning-body text-sm sm:text-base text-[#57534E] pt-2">
            개인 간의 자유로운 계약만을 중시하는 민법의 원리를 넘어, 국가 최고 규범인 헌법이 집단적 행동권을 기본권으로 명시한 까닭은 무엇일까요?
          </p>
        </div>

        {/* Interactive Keywords */}
        <div className="space-y-4 pt-4">
          <span className="learning-instruction text-[#78716C] uppercase block">
            관련 있다고 생각하는 키워드를 클릭하여 선택하세요:
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {TOGETHER_KEYWORDS.map((kw) => {
              const isSelected = issue05State.selectedTogetherKeywords.includes(kw.id);
              return (
                <button
                  key={kw.id}
                  id={`together-kw-${kw.id}`}
                  onClick={() => toggleTogetherKeyword(kw.id)}
                  className={`px-4 py-2 text-xs sm:text-sm learning-body transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#FEF08A] border-[#CA8A04] text-[#1C1917] font-bold shadow-xs'
                      : 'bg-[#FBF9F5] border-[#292524]/20 hover:border-[#1C1917] text-[#44403C]'
                  }`}
                  title={kw.hint}
                >
                  [{kw.label}]
                </button>
              );
            })}
          </div>
        </div>

        {/* Action button to reveal constitutional insight */}
        <div className="pt-6 border-t border-[#292524]/10">
          <button
            id="reveal-together-insight-btn"
            onClick={() => {
              onUpdateIssue05((prev) => ({
                ...prev,
                revealedThinkConcept: true,
                togetherSubmitted: true,
                completed: true,
              }));
            }}
            className="learning-btn px-6 py-3 bg-[#1C1917] hover:bg-[#881337] text-white tracking-wider uppercase transition-all cursor-pointer"
          >
            {issue05State.revealedThinkConcept ? '헌법적 배경 확인 완료 ✓' : 'READ THE CONSTITUTIONAL INSIGHT (내 판단 확인하기) →'}
          </button>
        </div>

        {/* Revealed Commentary */}
        {issue05State.revealedThinkConcept && (
          <div className="mt-6 p-6 bg-[#F2EFE8] border-l-4 border-[#881337] text-left max-w-2xl mx-auto space-y-3 animate-in fade-in duration-300">
            <span className="editorial-label text-[#881337] block">
              EDITORIAL EXPLANATION : 헌법적 배경
            </span>
            <p className="learning-body text-base sm:text-[17px] text-[#1C1917] leading-relaxed">
              “개별 근로자와 사용자 사이에는 <strong>경제적·사회적 힘의 차이(비대칭)</strong>가 필연적으로 존재할 수밖에 없습니다.
              혼자서는 계약 조건이 부당해도 일자리를 잃을까 두려워 항의하기 어렵습니다.
              따라서 헌법은 근로자들이 <strong>단결하여 집단의 힘으로 대등하게 협상</strong>할 수 있도록 단결권, 단체교섭권, 단체행동권을 부여하여, 실질적인 평등과 인간다운 생활을 보장하고자 하는 것입니다.”
            </p>
          </div>
        )}
      </section>

      {/* Footer Navigation */}
      {(() => {
        const chapterCompleted = Boolean(
          issue05State.completed ||
          issue05State.revealedThinkConcept ||
          issue05State.togetherSubmitted ||
          Object.values(issue05State.matchedRights).some(Boolean)
        );

        return (
          <footer className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="issue05-prev-btn"
              onClick={() => {
                onPrevIssue('issue-04');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="editorial-meta text-[#57534E] hover:text-[#1C1917] cursor-pointer"
            >
              ← PREVIOUS: ISSUE 04
            </button>

            <div className="flex items-center gap-3">
              <span className={`text-[11px] editorial-meta px-2 py-0.5 border ${
                chapterCompleted
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                  : 'bg-stone-100 border-stone-200 text-stone-600'
              }`}>
                {chapterCompleted ? 'CHAPTER 05 COMPLETE ✓' : '노동3권 또는 헌법 배경 확인 후 이동'}
              </span>

              <button
                id="issue05-next-btn"
                disabled={!chapterCompleted}
                onClick={() => {
                  if (chapterCompleted) {
                    onNextIssue('issue-06');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`learning-btn flex items-center gap-2 px-6 py-3 transition-all ${
                  chapterCompleted
                    ? 'bg-[#1C1917] hover:bg-[#881337] text-white cursor-pointer shadow-xs'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
                }`}
              >
                <span>{chapterCompleted ? 'CONTINUE TO ISSUE 06' : '활동 확인 후 다음으로 이동'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </footer>
        );
      })()}
    </article>
  );
};
