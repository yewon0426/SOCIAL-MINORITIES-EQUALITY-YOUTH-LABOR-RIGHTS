import React from 'react';
import { Scene01State, Scene02State, IssueId } from '../../types';
import { SCENE_01_FACTORS, SCENE_02_PHRASES } from '../../data/curriculumData';
import { Highlighter, Info, CheckCircle2, ArrowRight, CornerDownRight } from 'lucide-react';

interface Issue01MinorityProps {
  scene01State: Scene01State;
  onUpdateScene01: (updater: (prev: Scene01State) => Scene01State) => void;
  scene02State: Scene02State;
  onUpdateScene02: (updater: (prev: Scene02State) => Scene02State) => void;
  onNextIssue: (next: IssueId) => void;
}

export const Issue01Minority: React.FC<Issue01MinorityProps> = ({
  scene01State,
  onUpdateScene01,
  scene02State,
  onUpdateScene02,
  onNextIssue,
}) => {
  const toggleFactor = (factorId: string) => {
    onUpdateScene01((prev) => {
      const exists = prev.markedElements.includes(factorId);
      return {
        ...prev,
        markedElements: exists
          ? prev.markedElements.filter((id) => id !== factorId)
          : [...prev.markedElements, factorId],
      };
    });
  };

  const togglePhrase = (phraseId: string) => {
    onUpdateScene02((prev) => {
      const exists = prev.markedPhrases.includes(phraseId);
      return {
        ...prev,
        markedPhrases: exists
          ? prev.markedPhrases.filter((id) => id !== phraseId)
          : [...prev.markedPhrases, phraseId],
      };
    });
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* 1. Page Header */}
      <header className="border-b-2 border-[#1C1917] pb-8">
        <div className="flex items-center justify-between font-mono text-xs text-[#78716C] mb-3">
          <span>RIGHTS FILE · ISSUE 01</span>
          <span>SOCIAL MINORITIES &amp; DISCRIMINATION</span>
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tight text-[#1C1917] leading-tight">
            MINORITY<br />
            <span className="text-[#881337] font-light italic">≠</span> FEW
          </h1>
          <p className="font-quote text-xl sm:text-2xl text-[#292524] pt-2">
            「소수라는 말은 숫자만을 뜻하지 않는다.」
          </p>
        </div>
      </header>

      {/* 2. CONCEPT: WHAT MAKES A MINORITY? */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
          <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#881337]">
            CONCEPT 01
          </span>
          <span className="text-xs font-mono text-[#78716C]">/ EDITORIAL COLUMN</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Newspaper Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#1C1917] leading-snug">
              WHAT MAKES A MINORITY?
            </h2>

            <div className="font-sans text-[16px] sm:text-[16.5px] text-[#292524] leading-[1.85] space-y-5">
              <p className="reading-text">
                <span className="float-left text-4xl sm:text-5xl font-display font-black text-[#881337] leading-none pr-2 pt-0.5 select-none">
                  사
                </span>
                회적 소수자는 단순히 구성원의 수가 적은 집단을 의미하지 않는다. 중요한 것은 사회적 관계 속에서 다른 집단에 비해 상대적으로 불리한 위치에 놓이거나 차별을 경험하는지 여부이다.
              </p>
              <p className="reading-text text-[#44403C]">
                어떤 집단이 수적으로 다수일지라도 권력과 자원의 배분에서 배제되고 억압받는다면 사회적 소수자가 될 수 있으며,
                반대로 수적으로 적더라도 사회적 지배력과 특권을 쥐고 있다면 소수자로 분류되지 않는다.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="my-8 py-5 px-6 sm:px-7 border-l-4 border-[#881337] bg-white/70">
              <blockquote className="font-quote text-lg sm:text-xl md:text-2xl text-[#1C1917] leading-relaxed font-semibold">
                “10명 중 1명이라고 해서 자동으로 사회적 소수자가 되는 것은 아니다.”
              </blockquote>
              <cite className="block text-xs font-mono text-[#78716C] mt-2.5 not-italic tracking-wider">
                — 통합사회2 개념 노트 : 사회적 관계와 권력의 문제
              </cite>
            </div>

            {/* DO NOT CONFUSE Box */}
            <div className="p-6 bg-white border border-[#292524]/20 space-y-4">
              <div className="flex items-center gap-2 border-b border-[#292524]/10 pb-2.5">
                <span className="stamp-box px-2 py-0.5 text-[10px]">NOTICE</span>
                <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#1C1917]">
                  DO NOT CONFUSE (혼동하지 말아야 할 점)
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-[15px] sm:text-base text-[#292524] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-700 font-bold shrink-0 text-base">✕</span>
                  <div>
                    <span className="font-bold text-[#1C1917]">소수 = 숫자가 적음</span>
                    <span className="text-[#57534E] ml-1.5 font-normal">
                      : 단순한 산술적 통계 수치와 사회적 소수자는 같은 의미가 아닙니다.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-700 font-bold shrink-0 text-base">✕</span>
                  <div>
                    <span className="font-bold text-[#1C1917]">사회적 소수자 = 무조건 경제적으로 가난함</span>
                    <span className="text-[#57534E] ml-1.5 font-normal">
                      : 경제적 빈곤뿐 아니라 성별, 장애, 인종 등 다양한 사회적 맥락이 함께 작동합니다.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-700 font-bold shrink-0 text-base">✕</span>
                  <div>
                    <span className="font-bold text-[#1C1917]">특정 개인은 언제 어디서나 소수자라고 단정</span>
                    <span className="text-[#57534E] ml-1.5 font-normal">
                      : 구체적인 사회적 관계와 장소, 상황 맥락에 따라 위치가 달라질 수 있습니다.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 pt-3 border-t border-[#292524]/10">
                  <span className="text-emerald-700 font-bold shrink-0 text-base">⭕</span>
                  <div className="text-[#1C1917]">
                    <span className="font-bold text-[#881337]">핵심 기준</span>
                    <span className="ml-1.5 font-medium">
                      : 사회적 관계와 구조적 맥락 속의 <strong>상대적 불리함과 차별 여부</strong>를 함께 살펴보아야 합니다.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Margin: EDITOR'S NOTE */}
          <aside className="lg:col-span-5 xl:col-span-4 bg-[#F2EFE8] border border-[#292524]/15 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#292524]/20 pb-2">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#881337] uppercase">
                EDITOR'S NOTE
              </span>
              <span className="font-mono text-[10px] text-[#78716C]">#CRITERIA</span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#57534E] font-sans leading-relaxed">
              사회학에서 사회적 소수자를 이해할 때 공통적으로 살펴보는 4가지 특징입니다.
            </p>

            <ol className="space-y-3 font-sans">
              <li className="p-3 bg-white/80 border border-[#292524]/10 shadow-2xs">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-mono font-bold text-xs text-[#881337]">01</span>
                  <span className="font-bold text-sm text-[#1C1917]">식별 가능성</span>
                </div>
                <p className="text-[13.5px] sm:text-sm text-[#44403C] leading-relaxed font-normal">
                  신체적·문화적 특징 등에 의해 다른 집단과 뚜렷이 구별될 수 있는가?
                </p>
              </li>
              <li className="p-3 bg-white/80 border border-[#292524]/10 shadow-2xs">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-mono font-bold text-xs text-[#881337]">02</span>
                  <span className="font-bold text-sm text-[#1C1917]">권력의 열세</span>
                </div>
                <p className="text-[13.5px] sm:text-sm text-[#44403C] leading-relaxed font-normal">
                  사회적 의사결정권이나 자원 배분 과정에서 상대적으로 열등한 위치에 있는가?
                </p>
              </li>
              <li className="p-3 bg-white/80 border border-[#292524]/10 shadow-2xs">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-mono font-bold text-xs text-[#881337]">03</span>
                  <span className="font-bold text-sm text-[#1C1917]">차별적 대우</span>
                </div>
                <p className="text-[13.5px] sm:text-sm text-[#44403C] leading-relaxed font-normal">
                  정당한 이유 없이 배제되거나 불이익을 당하는 구조적 차별을 겪는가?
                </p>
              </li>
              <li className="p-3 bg-white/80 border border-[#292524]/10 shadow-2xs">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-mono font-bold text-xs text-[#881337]">04</span>
                  <span className="font-bold text-sm text-[#1C1917]">집단적 정체성</span>
                </div>
                <p className="text-[13.5px] sm:text-sm text-[#44403C] leading-relaxed font-normal">
                  차별받는 집단의 일원이라는 소속감과 연대 의식을 공유하는가?
                </p>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      {/* 3. SCENE 01: 숫자가 적으면 소수자? */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">SCENE 01</span>
            <span className="font-quote font-bold text-lg sm:text-xl text-[#1C1917]">
              「우리 학교 왼손잡이는 5%뿐입니다.」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">CASE ANALYSIS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 space-y-3 font-sans text-[#292524]">
            <p className="text-[16px] leading-[1.8] bg-[#FBF9F5] p-4 sm:p-5 border border-[#292524]/10 font-quote text-[#1C1917]">
              “전체 학생 중 왼손잡이 학생은 약 5%에 불과하다.”
            </p>
            <div className="font-quote italic text-[16px] sm:text-[17px] text-[#881337] font-semibold pt-1 leading-relaxed">
              질문: “이 사실만으로 왼손잡이 학생을 사회적 소수자라고 판단할 수 있을까?”
            </div>
            <p className="text-sm text-[#57534E] font-sans leading-relaxed">
              아래의 네 가지 요소 중, 이 사례를 올바르게 판단하기 위해 <strong>더 알아봐야 할 핵심 요소</strong>를 직접 눌러 형광펜으로 표시해 보세요.
            </p>
          </div>

          {/* Highlighter Tool Panel */}
          <div className="md:col-span-5 bg-[#F9F7F1] p-4 sm:p-5 border border-[#292524]/15 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#57534E]">
              <Highlighter className="w-3.5 h-3.5 text-[#881337]" />
              <span>MARK THE EVIDENCE</span>
            </div>

            <div className="space-y-2">
              {SCENE_01_FACTORS.map((factor) => {
                const isMarked = scene01State.markedElements.includes(factor.id);
                return (
                  <button
                    key={factor.id}
                    id={`factor-btn-${factor.id}`}
                    onClick={() => toggleFactor(factor.id)}
                    className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-[13px] font-sans transition-all cursor-pointer border ${
                      isMarked
                        ? 'bg-[#FEF08A] border-[#CA8A04] text-[#1C1917] font-bold shadow-2xs'
                        : 'bg-white border-[#292524]/20 hover:border-[#1C1917] text-[#44403C]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{factor.label}</span>
                      <span className="font-mono text-[10px] text-[#78716C]">
                        {isMarked ? '✓ MARKED' : '+ 표시'}
                      </span>
                    </div>
                    <span className="text-[11.5px] text-[#78716C] block mt-0.5 font-normal">
                      {factor.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Check the concept action button */}
        <div className="pt-3 border-t border-[#292524]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            id="scene01-check-btn"
            onClick={() => {
              onUpdateScene01((prev) => ({
                ...prev,
                checkedConcept: true,
                completed: true,
              }));
            }}
            className="px-5 py-2.5 border border-[#1C1917] bg-[#1C1917] hover:bg-[#881337] text-white text-xs sm:text-[13px] font-sans font-bold tracking-wider transition-all cursor-pointer"
          >
            {scene01State.checkedConcept ? 'COMMENT CHECKED ✓' : 'CHECK THE CONCEPT (내 판단 확인하기) →'}
          </button>
          <span className="text-xs text-[#78716C] italic font-sans">
            * 단서 표시 후 [내 판단 확인하기]를 눌러 개념과 비교해 보세요.
          </span>
        </div>

        {/* Revealed Editorial Commentary */}
        {scene01State.checkedConcept && (
          <div className="mt-4 p-5 sm:p-6 bg-[#F2EFE8] border-l-4 border-[#881337] space-y-2.5 animate-in fade-in duration-300">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase tracking-wider block">
              EDITORIAL ANALYSIS
            </span>
            <p className="font-sans text-[15.5px] sm:text-[16px] text-[#1C1917] leading-[1.85]">
              구성원의 수만으로는 충분하지 않습니다. 단순히 5%라는 숫자가 적다는 이유만으로 사회적 소수자가 되는 것은 아니며,
              학교나 사회에서 왼손잡이라는 이유로 <strong>권력의 열세, 조직적 불이익, 차별적 대우</strong>를 받고 있는지 사회적 관계 속의 위치를 추가로 살펴보아야 합니다.
            </p>
          </div>
        )}
      </section>

      {/* 4. SCENE 02: 채용 */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">SCENE 02</span>
            <span className="font-quote font-bold text-lg sm:text-xl text-[#1C1917]">
              「채용 현장의 말 한마디」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">EVIDENCE MARKING</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <p className="text-xs sm:text-[13px] text-[#57534E] font-sans tracking-wide">
              <strong className="text-[#881337] font-mono uppercase text-xs">MARK THE EVIDENCE :</strong> 아래 인용문에서 판단에 중요한 표현을 클릭하여 형광펜을 칠해보세요.
            </p>

            {/* Clickable interactive sentence */}
            <div className="p-6 sm:p-8 bg-[#FBF9F5] border border-[#292524]/15 rounded-xs">
              <div className="text-2xl sm:text-3xl font-quote text-[#1C1917] leading-loose flex flex-wrap gap-2 items-baseline">
                <span>“</span>
                {SCENE_02_PHRASES.map((phrase) => {
                  const isSelected = scene02State.markedPhrases.includes(phrase.id);
                  return (
                    <button
                      key={phrase.id}
                      id={`phrase-btn-${phrase.id}`}
                      onClick={() => togglePhrase(phrase.id)}
                      className={`transition-all cursor-pointer px-2 py-1 rounded-xs inline-block ${
                        isSelected
                          ? 'bg-[#FEF08A] text-[#1C1917] underline decoration-[#B91C1C] decoration-2 font-bold shadow-2xs'
                          : 'hover:bg-[#E7E3D8]/80 text-[#292524]'
                      }`}
                      title="클릭하여 단서 표시"
                    >
                      {phrase.text}
                    </button>
                  );
                })}
                <span>”</span>
              </div>
            </div>

            {/* Student Observation Input & Submission */}
            <div className="space-y-3">
              <label htmlFor="scene02-input" className="block text-xs font-mono font-bold text-[#57534E] uppercase">
                MY OBSERVATION / 나의 메모
              </label>
              <input
                id="scene02-input"
                type="text"
                value={scene02State.studentThought}
                onChange={(e) => {
                  const val = e.target.value;
                  onUpdateScene02((prev) => ({ ...prev, studentThought: val }));
                }}
                placeholder="표시한 단서들을 보며 어떤 의문이나 판단 기준이 떠오르나요? (예: 개별 역량이 아닌 집단 전체에 대한 편견인지 등)"
                className="w-full bg-[#FBF9F5] border border-[#292524]/20 p-3.5 text-sm sm:text-[15px] text-[#1C1917] font-sans focus:outline-hidden focus:border-[#881337] focus:bg-white"
              />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                <button
                  id="scene02-check-btn"
                  onClick={() => {
                    onUpdateScene02((prev) => ({
                      ...prev,
                      checkedFeedback: true,
                      completed: true,
                    }));
                  }}
                  className="px-5 py-2.5 border border-[#1C1917] bg-[#1C1917] hover:bg-[#881337] text-white text-xs sm:text-[13px] font-sans font-bold tracking-wider transition-all cursor-pointer"
                >
                  {scene02State.completed ? 'FEEDBACK CHECKED ✓' : 'CHECK THE CRITERIA (내 판단 확인하기) →'}
                </button>
                <span className="text-xs text-[#78716C] italic font-sans">
                  * 단서 표시 또는 메모 후 [내 판단 확인하기]를 누르면 활동이 완료됩니다.
                </span>
              </div>
            </div>
          </div>

          {/* Margin: HOW TO READ THIS SCENE */}
          <aside className="lg:col-span-5 xl:col-span-4 bg-[#F2EFE8] border border-[#292524]/15 p-5 sm:p-6 space-y-4">
            <div className="border-b border-[#292524]/20 pb-2">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#881337] uppercase block">
                HOW TO READ THIS SCENE
              </span>
              <span className="text-xs sm:text-[13px] text-[#57534E] font-sans mt-1 block leading-relaxed">
                처음부터 결론을 단정짓지 않고, 다음 3단계를 순서대로 점검합니다.
              </span>
            </div>

            <ul className="space-y-3 font-sans text-xs sm:text-[13px] leading-relaxed">
              <li className="p-3 bg-white/80 border border-[#292524]/10 space-y-1 shadow-2xs">
                <span className="font-bold text-[#1C1917] block">① 다른 대우가 있는가?</span>
                <span className="text-[#57534E] block">‘잘 안 뽑는다’는 실질적인 채용 배제 행위가 존재합니다.</span>
              </li>
              <li className="p-3 bg-white/80 border border-[#292524]/10 space-y-1 shadow-2xs">
                <span className="font-bold text-[#1C1917] block">② 무엇을 이유로 다른 대우를 하는가?</span>
                <span className="text-[#57534E] block">‘학생들은 책임감이 부족하다’는 일반화된 편견에 기인합니다.</span>
              </li>
              <li className="p-3 bg-white/80 border border-[#292524]/10 space-y-1 shadow-2xs">
                <span className="font-bold text-[#1C1917] block">③ 그 이유가 합리적이고 정당한가?</span>
                <span className="text-[#57534E] block">개인의 실제 능력이나 근무 태도를 검증하지 않고 집단 전체를 재단하므로 합리성을 결여하고 있습니다.</span>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-[#78716C] font-sans italic leading-normal">
              * 차별을 비판하기 위해서는 먼저 객관적 단서와 3단계 판단 기준을 세우는 훈련이 필요합니다.
            </div>
          </aside>
        </div>
      </section>

      {/* Footer Navigation to Issue 02 */}
      {(() => {
        const isScene01Done = Boolean(scene01State.checkedConcept || scene01State.completed);
        const isScene02Done = Boolean(scene02State.checkedFeedback || scene02State.completed);
        const chapterCompleted = isScene01Done && isScene02Done;

        return (
          <footer className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#78716C]">
                NEXT: ISSUE 02 / FORMAL &amp; SUBSTANTIVE EQUALITY
              </span>
              <span className={`text-[11px] font-mono px-2 py-0.5 border ${
                chapterCompleted
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                  : 'bg-stone-100 border-stone-200 text-stone-600'
              }`}>
                {chapterCompleted ? 'CHAPTER 01 COMPLETE ✓' : `PROGRESS: ${(isScene01Done ? 1 : 0) + (isScene02Done ? 1 : 0)}/2`}
              </span>
            </div>

            <button
              id="issue01-next-btn"
              disabled={!chapterCompleted}
              onClick={() => {
                if (chapterCompleted) {
                  onNextIssue('issue-02');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-serif font-bold tracking-wider transition-all ${
                chapterCompleted
                  ? 'bg-[#1C1917] hover:bg-[#881337] text-white cursor-pointer shadow-xs'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
              }`}
            >
              <span>{chapterCompleted ? 'CONTINUE TO ISSUE 02' : '활동 확인 후 다음으로 이동'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </footer>
        );
      })()}
    </article>
  );
};
