import React from 'react';
import { Issue02State, IssueId } from '../../types';
import { ArrowRight, Eye, Scale, HelpCircle } from 'lucide-react';

interface Issue02EqualityProps {
  issue02State: Issue02State;
  onUpdateIssue02: (updater: (prev: Issue02State) => Issue02State) => void;
  onNextIssue: (next: IssueId) => void;
  onPrevIssue: (prev: IssueId) => void;
}

export const Issue02Equality: React.FC<Issue02EqualityProps> = ({
  issue02State,
  onUpdateIssue02,
  onNextIssue,
  onPrevIssue,
}) => {
  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* 1. Header: Big Split Header */}
      <header className="border-b-2 border-[#1C1917] pb-8">
        <div className="flex items-center justify-between font-mono text-xs text-[#78716C] mb-3">
          <span>RIGHTS FILE · ISSUE 02</span>
          <span>FORMAL &amp; SUBSTANTIVE EQUALITY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1C1917]/20 pt-4">
          <div className="pb-6 md:pb-0 md:pr-8 space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#881337] uppercase font-bold">
              PREMISE
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-black tracking-tight text-[#1C1917]">
              SAME
            </h1>
            <p className="font-quote italic text-lg sm:text-xl text-[#292524]">
              “모든 사람에게 같은 규칙을 적용했습니다.”
            </p>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8 space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#881337] uppercase font-bold">
              QUESTION
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-black tracking-tight text-[#881337]">
              EQUAL?
            </h1>
            <p className="font-quote italic text-lg sm:text-xl text-[#881337]">
              “그렇다면 모두에게 같은 기회가 주어진 걸까요?”
            </p>
          </div>
        </div>
      </header>

      {/* 2. CONCEPT: FORMAL EQUALITY & SUBSTANTIVE EQUALITY */}
      <section className="space-y-8">
        <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
          <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#881337]">
            CONCEPT 02
          </span>
          <span className="text-xs font-mono text-[#78716C]">/ THE TWO DIMENSIONS OF EQUALITY</span>
        </div>

        {/* Centerpiece typography banner */}
        <div className="text-center py-6 border-y border-[#292524]/15 bg-white/50">
          <p className="font-display font-black text-3xl sm:text-5xl tracking-widest text-[#1C1917] uppercase">
            SAME <span className="text-[#881337] italic font-light">≠</span> ALWAYS FAIR
          </p>
          <p className="text-base sm:text-lg font-quote text-[#292524] mt-2">
            “같은 대우가 언제나 평등한 결과를 만드는 것은 아니다.”
          </p>
        </div>

        {/* Dual Concepts Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Formal Equality */}
          <div className="p-6 bg-white border border-[#292524]/20 space-y-4 relative">
            <div className="flex items-center justify-between border-b border-[#292524]/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#57534E]">
                FORMAL EQUALITY
              </span>
              <span className="stamp-box px-2 py-0.5 text-[10px]">기계적·절대적 평등</span>
            </div>
            <h3 className="text-2xl font-bold text-[#1C1917]">
              형식적 평등
            </h3>
            <p className="text-[15px] sm:text-base font-sans text-[#44403C] leading-[1.8]">
              모든 사람에게 처한 상황이나 차이에 관계없이 <strong>동일한 기준과 규칙, 기회를 기계적으로 적용</strong>하는 것을 중시합니다.
            </p>
            <div className="p-3.5 bg-[#FBF9F5] border border-[#292524]/10 text-xs sm:text-[13px] font-sans text-[#57534E] leading-relaxed">
              <strong>핵심 특징:</strong> 법 앞의 형식적 기회 제공. 하지만 출발선의 격차나 신체적·사회적 불리함을 상쇄하지는 못합니다.
            </div>
          </div>

          {/* Substantive Equality */}
          <div className="p-6 bg-white border-2 border-[#881337]/30 space-y-4 relative">
            <div className="flex items-center justify-between border-b border-[#292524]/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#881337]">
                SUBSTANTIVE EQUALITY
              </span>
              <span className="stamp-box px-2 py-0.5 text-[10px] text-[#881337] border-[#881337]">
                상대적·실질적 평등
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#881337]">
              실질적 평등
            </h3>
            <p className="text-[15px] sm:text-base font-sans text-[#44403C] leading-[1.8]">
              사람들이 처한 서로 다른 조건과 기존의 사회적·신체적 불리함을 고려하여 <strong>실질적으로 동등한 기회와 결과를 보장</strong>하는 것을 중시합니다.
            </p>
            <div className="p-3.5 bg-[#881337]/5 border border-[#881337]/20 text-xs sm:text-[13px] font-sans text-[#57534E] leading-relaxed">
              <strong>핵심 특징:</strong> “같은 것은 같게, 다른 것은 다르게.” 합리적 이유에 근거하여 실질적 기회의 사다리를 놓아주는 능동적 평등관입니다.
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCENE 03: 계단 (Dual Lens Interactive) */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">SCENE 03</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917]">
              「건물 출입구의 계단」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">DUAL LENS PERSPECTIVE</span>
        </div>

        {/* Narrative Box */}
        <div className="bg-[#FBF9F5] p-5 border border-[#292524]/15 space-y-2">
          <p className="font-serif text-base text-[#1C1917]">
            한 공공 건물의 유일한 출입구에는 가파른 10개의 계단만 설치되어 있다.
          </p>
          <blockquote className="font-serif italic text-lg text-[#881337] font-semibold">
            관리자는 말한다: “누구든 똑같이 이 계단으로 들어오면 됩니다. 어떠한 차별도 없이 모두에게 동일하게 개방되어 있습니다.”
          </blockquote>
        </div>

        {/* Interactive Lenses */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#57534E] uppercase">
              SWITCH THE LENS (관점 렌즈 전환):
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              id="lens-formal-btn"
              onClick={() => {
                onUpdateIssue02((prev) => ({
                  ...prev,
                  activeLens: prev.activeLens === 'formal' ? 'none' : 'formal',
                }));
              }}
              className={`p-4 text-left border transition-all cursor-pointer ${
                issue02State.activeLens === 'formal' || issue02State.activeLens === 'both'
                  ? 'border-[#1C1917] bg-[#1C1917] text-[#FBF9F5] shadow-xs'
                  : 'border-[#292524]/20 bg-white hover:border-[#1C1917] text-[#1C1917]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span>[ LENS A / 형식적 평등 ]</span>
                <Eye className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-serif">
                “모두에게 동일한 출입 방법을 적용했다.”
              </p>
              <span className="text-xs text-[#A8A29E] block mt-2 font-sans">
                누구에게나 동일한 계단 이용 규칙이 부여되었으므로 표면적으로는 차별이 없는 것처럼 보입니다.
              </span>
            </button>

            <button
              id="lens-substantive-btn"
              onClick={() => {
                onUpdateIssue02((prev) => ({
                  ...prev,
                  activeLens: prev.activeLens === 'substantive' ? 'none' : 'substantive',
                }));
              }}
              className={`p-4 text-left border transition-all cursor-pointer ${
                issue02State.activeLens === 'substantive' || issue02State.activeLens === 'both'
                  ? 'border-[#881337] bg-[#881337] text-white shadow-xs'
                  : 'border-[#292524]/20 bg-white hover:border-[#881337] text-[#1C1917]'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold mb-1">
                <span>[ LENS B / 실질적 평등 ]</span>
                <Scale className="w-3.5 h-3.5" />
              </div>
              <p className="text-sm font-serif">
                “하지만 이동 조건이 다른 사람에게도 실제로 동등한 접근 기회가 보장되었는가?”
              </p>
              <span className="text-xs text-rose-100 block mt-2 font-sans">
                휠체어 이용자, 유모차 동반자 등 신체 조건이 다른 사람에게는 출입 자체가 원천 차단된 불평등입니다.
              </span>
            </button>
          </div>
        </div>

        {/* Student Note prompt */}
        <div className="pt-4 border-t border-[#292524]/10 space-y-2">
          <label htmlFor="stair-reflection-input" className="block text-xs font-mono font-bold text-[#57534E] uppercase">
            THINK &amp; WRITE : “같은 규칙과 동등한 기회는 언제나 같은 의미일까요?”
          </label>
          <input
            id="stair-reflection-input"
            type="text"
            value={issue02State.stepStairNote}
            onChange={(e) => {
              const val = e.target.value;
              onUpdateIssue02((prev) => ({ ...prev, stepStairNote: val }));
            }}
            placeholder="두 렌즈를 통해 바라본 생각을 한 줄로 남겨보세요. (예: 규칙이 같더라도 이동 약자에게는 기회가 0이므로 경사로가 필요하다 등)"
            className="w-full bg-[#FBF9F5] border border-[#292524]/20 p-3 text-sm text-[#1C1917] focus:outline-hidden focus:border-[#881337] focus:bg-white"
          />
        </div>
      </section>

      {/* 4. SCENE 04: 특혜일까? */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">SCENE 04</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917]">
              SPECIAL TREATMENT?
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">CRITICAL REFLECTION</span>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
            「장애 학생에게 시험 편의(시간 연장, 점자 시험지)를 제공했습니다.」
          </h3>
          <p className="font-serif italic text-base text-[#881337] font-medium">
            “이 조치를 단순히 ‘모든 학생을 똑같이 대하지 않았다’는 이유만으로 불공정한 특혜라고 판단할 수 있을까요?”
          </p>
        </div>

        {/* Dual perspective cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            onClick={() => {
              onUpdateIssue02((prev) => ({ ...prev, specialTreatmentLens: 'formal' }));
            }}
            className={`p-4 border transition-all cursor-pointer ${
              issue02State.specialTreatmentLens === 'formal'
                ? 'border-[#1C1917] bg-[#F2EFE8]'
                : 'border-[#292524]/15 bg-[#FBF9F5] hover:border-[#1C1917]'
            }`}
          >
            <span className="font-mono text-xs font-bold uppercase text-[#78716C] block">
              FORMAL PERSPECTIVE
            </span>
            <h4 className="font-serif font-bold text-sm text-[#1C1917] mt-1">
              모든 학생에게 완전히 동일한 조건 적용
            </h4>
            <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
              모든 수험생에게 같은 시험지와 똑같은 60분의 시간을 부여해야 공정하다는 시각.
            </p>
          </div>

          <div
            onClick={() => {
              onUpdateIssue02((prev) => ({ ...prev, specialTreatmentLens: 'substantive' }));
            }}
            className={`p-4 border transition-all cursor-pointer ${
              issue02State.specialTreatmentLens === 'substantive'
                ? 'border-[#881337] bg-[#881337]/5 ring-1 ring-[#881337]'
                : 'border-[#292524]/15 bg-[#FBF9F5] hover:border-[#881337]'
            }`}
          >
            <span className="font-mono text-xs font-bold uppercase text-[#881337] block">
              SUBSTANTIVE PERSPECTIVE
            </span>
            <h4 className="font-serif font-bold text-sm text-[#881337] mt-1">
              기존 조건의 차이를 고려한 실질적 기회 보장
            </h4>
            <p className="text-xs text-[#57534E] mt-2 leading-relaxed">
              시각장애 학생이 점자를 해독하는 시간적 차이를 보정하여, 비장애 학생과 대등하게 지식을 발휘할 실질적 기회를 열어주는 정당한 적극적 우대조치라는 시각.
            </p>
          </div>
        </div>

        {/* Student thought on special treatment */}
        <div className="space-y-2">
          <label htmlFor="special-treatment-input" className="block text-xs font-mono font-bold text-[#57534E] uppercase">
            MY REASONING / 나의 판단 근거
          </label>
          <input
            id="special-treatment-input"
            type="text"
            value={issue02State.specialTreatmentNote}
            onChange={(e) => {
              const val = e.target.value;
              onUpdateIssue02((prev) => ({ ...prev, specialTreatmentNote: val }));
            }}
            placeholder="두 관점을 검토한 뒤, 당신의 판단과 그 근거를 적어보세요. (예: 점자 해독은 장애로 인한 조건 차이이므로 시험 편의는 특혜가 아니라 실질적 평등이다)"
            className="w-full bg-[#FBF9F5] border border-[#292524]/20 p-3 text-sm text-[#1C1917] focus:outline-hidden focus:border-[#881337] focus:bg-white"
          />
        </div>
      </section>

      {/* 5. A/B/C COMPARATIVE JUDGMENT SECTION (세 문항 판단 활동) */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">PRACTICE FILE</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917]">
              「A / B / C 세 가지 장면의 평등 판단」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">
            SELECT ALL 3 CASES → COMPARE
          </span>
        </div>

        <p className="text-xs text-[#57534E]">
          세 가지 현실 장면을 읽고, 각각의 정책이나 상황이 <strong>형식적 평등</strong>과 <strong>실질적 평등</strong> 중 어느 쪽에 더 가까운지 선택해 보세요.
          세 문항을 모두 선택한 후 [내 판단과 비교하기]를 누르면 법적·사회적 개념과 비교할 수 있습니다.
        </p>

        {(() => {
          const answers = issue02State.answersABC || { a: null, b: null, c: null };
          const allSelected = Boolean(answers.a && answers.b && answers.c);
          const hasSubmitted = Boolean(issue02State.submittedABC || issue02State.completedABC);

          const setAnswer = (qKey: 'a' | 'b' | 'c', val: 'formal' | 'substantive') => {
            onUpdateIssue02((prev) => {
              const prevAnswers = prev.answersABC || { a: null, b: null, c: null };
              return {
                ...prev,
                answersABC: {
                  ...prevAnswers,
                  [qKey]: val,
                },
                // If already completed once, preserve completion status
                completedABC: prev.completedABC || prev.submittedABC,
              };
            });
          };

          const handleCompareClick = () => {
            onUpdateIssue02((prev) => ({
              ...prev,
              submittedABC: true,
              completedABC: true,
            }));
          };

          return (
            <div className="space-y-6">
              {/* Question A */}
              <div className="p-4 bg-[#FBF9F5] border border-[#292524]/15 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-[#881337]">CASE A</span>
                  <span className="text-[#78716C]">출입구 계단 단독 설치</span>
                </div>
                <p className="text-sm font-serif text-[#1C1917]">
                  “모든 시민에게 예외 없이 똑같은 10개의 계단만 출입구로 제공하는 것은?”
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    id="case-a-formal-btn"
                    onClick={() => setAnswer('a', 'formal')}
                    className={`py-2 px-3 text-xs border transition-all cursor-pointer font-sans ${
                      answers.a === 'formal'
                        ? 'bg-[#1C1917] text-white border-[#1C1917] font-bold shadow-2xs'
                        : 'bg-white text-[#44403C] border-[#292524]/20 hover:border-[#1C1917]'
                    }`}
                  >
                    형식적 평등에 가까움
                  </button>
                  <button
                    id="case-a-substantive-btn"
                    onClick={() => setAnswer('a', 'substantive')}
                    className={`py-2 px-3 text-xs border transition-all cursor-pointer font-sans ${
                      answers.a === 'substantive'
                        ? 'bg-[#881337] text-white border-[#881337] font-bold shadow-2xs'
                        : 'bg-white text-[#44403C] border-[#292524]/20 hover:border-[#881337]'
                    }`}
                  >
                    실질적 평등에 가까움
                  </button>
                </div>
              </div>

              {/* Question B */}
              <div className="p-4 bg-[#FBF9F5] border border-[#292524]/15 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-[#881337]">CASE B</span>
                  <span className="text-[#78716C]">시험 편의 및 시간 연장</span>
                </div>
                <p className="text-sm font-serif text-[#1C1917]">
                  “시각장애 학생의 점자 해독 시간을 고려하여 시험 시간을 1.5배 부여하는 것은?”
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    id="case-b-formal-btn"
                    onClick={() => setAnswer('b', 'formal')}
                    className={`py-2 px-3 text-xs border transition-all cursor-pointer font-sans ${
                      answers.b === 'formal'
                        ? 'bg-[#1C1917] text-white border-[#1C1917] font-bold shadow-2xs'
                        : 'bg-white text-[#44403C] border-[#292524]/20 hover:border-[#1C1917]'
                    }`}
                  >
                    형식적 평등에 가까움
                  </button>
                  <button
                    id="case-b-substantive-btn"
                    onClick={() => setAnswer('b', 'substantive')}
                    className={`py-2 px-3 text-xs border transition-all cursor-pointer font-sans ${
                      answers.b === 'substantive'
                        ? 'bg-[#881337] text-white border-[#881337] font-bold shadow-2xs'
                        : 'bg-white text-[#44403C] border-[#292524]/20 hover:border-[#881337]'
                    }`}
                  >
                    실질적 평등에 가까움
                  </button>
                </div>
              </div>

              {/* Question C */}
              <div className="p-4 bg-[#FBF9F5] border border-[#292524]/15 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-[#881337]">CASE C</span>
                  <span className="text-[#78716C]">방과후 교육비 차등 지원</span>
                </div>
                <p className="text-sm font-serif text-[#1C1917]">
                  “경제적 여건이 어려운 학생에게 방과후 수강료와 교재비를 전액 지원하는 것은?”
                </p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    id="case-c-formal-btn"
                    onClick={() => setAnswer('c', 'formal')}
                    className={`py-2 px-3 text-xs border transition-all cursor-pointer font-sans ${
                      answers.c === 'formal'
                        ? 'bg-[#1C1917] text-white border-[#1C1917] font-bold shadow-2xs'
                        : 'bg-white text-[#44403C] border-[#292524]/20 hover:border-[#1C1917]'
                    }`}
                  >
                    형식적 평등에 가까움
                  </button>
                  <button
                    id="case-c-substantive-btn"
                    onClick={() => setAnswer('c', 'substantive')}
                    className={`py-2 px-3 text-xs border transition-all cursor-pointer font-sans ${
                      answers.c === 'substantive'
                        ? 'bg-[#881337] text-white border-[#881337] font-bold shadow-2xs'
                        : 'bg-white text-[#44403C] border-[#292524]/20 hover:border-[#881337]'
                    }`}
                  >
                    실질적 평등에 가까움
                  </button>
                </div>
              </div>

              {/* Compare Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <button
                  id="compare-abc-btn"
                  disabled={!allSelected}
                  onClick={handleCompareClick}
                  className={`px-6 py-3 text-xs font-serif font-bold tracking-wider transition-all cursor-pointer ${
                    allSelected
                      ? 'bg-[#1C1917] hover:bg-[#881337] text-white shadow-xs'
                      : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
                  }`}
                >
                  {hasSubmitted ? '내 판단과 비교 완료 ✓' : '내 판단과 비교하기 →'}
                </button>
                <span className="text-xs text-[#78716C] italic font-sans">
                  {allSelected
                    ? '* 세 문항 선택 완료. [내 판단과 비교하기]를 누르면 활동이 완료됩니다.'
                    : `* 세 문항을 모두 선택해 주세요 (${[answers.a, answers.b, answers.c].filter(Boolean).length}/3)`}
                </span>
              </div>

              {/* Comparative Feedback Display */}
              {hasSubmitted && (
                <div className="p-5 bg-[#F2EFE8] border-l-4 border-[#881337] space-y-3 animate-in fade-in duration-300">
                  <span className="font-mono text-xs font-bold text-[#881337] uppercase block">
                    EDITORIAL COMPARISON &amp; CONCEPTUAL REVIEW
                  </span>
                  <div className="space-y-2 text-xs font-sans text-[#292524] leading-relaxed">
                    <p>
                      <strong>CASE A:</strong> 표면적으로는 누구에게나 같은 규칙을 적용하는 <em>형식적 평등</em>의 모습을 띠지만, 이동 약자에게는 배제라는 결과를 낳으므로 경사로 등 <em>실질적 평등</em> 조치가 필수적입니다.
                    </p>
                    <p>
                      <strong>CASE B:</strong> 비장애인과의 신체적 해독 조건 차이를 보정하여 대등하게 실력을 발휘할 기회를 부여하는 대표적인 <em>실질적 평등</em>(합리적 편의 제공)입니다.
                    </p>
                    <p>
                      <strong>CASE C:</strong> 경제적 출발선의 격차를 상쇄하여 교육 기회를 실질적으로 열어주는 <em>실질적 평등</em>(적극적 개선 조치)에 해당합니다.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })()}
      </section>

      {/* Footer Navigation */}
      {(() => {
        const chapterCompleted = Boolean(issue02State.completedABC || issue02State.submittedABC);

        return (
          <footer className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="issue02-prev-btn"
              onClick={() => {
                onPrevIssue('issue-01');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-mono text-[#57534E] hover:text-[#1C1917] cursor-pointer"
            >
              ← PREVIOUS: ISSUE 01
            </button>

            <div className="flex items-center gap-3">
              <span className={`text-[11px] font-mono px-2 py-0.5 border ${
                chapterCompleted
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                  : 'bg-stone-100 border-stone-200 text-stone-600'
              }`}>
                {chapterCompleted ? 'CHAPTER 02 COMPLETE ✓' : 'A/B/C 비교 후 이동 가능'}
              </span>

              <button
                id="issue02-next-btn"
                disabled={!chapterCompleted}
                onClick={() => {
                  if (chapterCompleted) {
                    onNextIssue('issue-03');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-serif font-bold tracking-wider transition-all ${
                  chapterCompleted
                    ? 'bg-[#1C1917] hover:bg-[#881337] text-white cursor-pointer shadow-xs'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
                }`}
              >
                <span>{chapterCompleted ? 'CONTINUE TO ISSUE 03' : '비교 확인 후 다음으로 이동'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </footer>
        );
      })()}
    </article>
  );
};
