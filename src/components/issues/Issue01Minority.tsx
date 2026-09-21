import React from 'react';
import { Scene01State, Scene02State, IssueId } from '../../types';
import { ArrowRight, Check, HelpCircle, Compass, FileText } from 'lucide-react';

interface Issue01MinorityProps {
  scene01State: Scene01State;
  onUpdateScene01: (updater: (prev: Scene01State) => Scene01State) => void;
  scene02State: Scene02State;
  onUpdateScene02: (updater: (prev: Scene02State) => Scene02State) => void;
  onNextIssue: (next: IssueId) => void;
}

type CaseKey = 'caseA' | 'caseB' | 'caseC' | 'caseD';
type JudgmentValue = 'minority' | 'difficult';

interface CaseItem {
  id: CaseKey;
  code: string;
  category: string;
  name: string;
  body: string[];
}

const CASES: CaseItem[] = [
  {
    id: 'caseA',
    code: 'CASE A',
    category: 'MIGRANT WORKER',
    name: '이주 노동자',
    body: [
      '한국에서 일하고 있는 이주 노동자이다.',
      '일상적인 한국어 의사소통에는 큰 어려움이 없다.',
      '그러나 출신 국가나 국적 등을 이유로 고용이나 노동 과정에서 불리한 대우를 경험할 가능성이 있다.',
    ],
  },
  {
    id: 'caseB',
    code: 'CASE B',
    category: 'WHEELCHAIR USER',
    name: '휠체어 이용자',
    body: [
      '휠체어를 이용한다.',
      '엘리베이터나 경사로 등이 충분하지 않은 건물에서는 다른 사람과 같은 시설을 이용하려 해도 접근에 어려움을 경험할 수 있다.',
    ],
  },
  {
    id: 'caseC',
    code: 'CASE C',
    category: 'LEFT-HANDED STUDENT',
    name: '왼손잡이 학생',
    body: [
      '학교 학생 중 왼손잡이는 약 5%뿐이다.',
      '현재 학교생활에서 왼손잡이라는 이유로 지속적인 차별이나 사회적 불이익을 경험하고 있다는 정보는 제시되지 않았다.',
    ],
  },
  {
    id: 'caseD',
    code: 'CASE D',
    category: 'FEMALE',
    name: '여성',
    body: [
      '전체 인구에서 수적으로 적은 집단이라고 보기는 어렵다.',
      '그러나 사회의 특정 영역에서는 성별을 이유로 불리한 대우나 차별을 경험할 수 있다.',
    ],
  },
];

const CRITERIA_OPTIONS = [
  { id: 'count', label: '사람의 수가 적은가?' },
  { id: 'distinction', label: '다른 사람과 구별되는 특징이 있는가?' },
  { id: 'power', label: '사회적 관계에서 상대적으로 불리한 위치에 놓이는가?' },
  { id: 'discrimination', label: '그 특성 때문에 차별적인 대우를 경험하는가?' },
  { id: 'identity', label: '집단의 구성원으로서 공통된 정체성을 가질 수 있는가?' },
];

const SCENE_02_OPTIONS = [
  {
    id: 'A' as const,
    label: 'A. 개인의 능력이 갑자기 달라졌기 때문이다.',
  },
  {
    id: 'B' as const,
    label: 'B. 개인의 특성뿐 아니라 그 사람이 놓인 사회적 환경과 관계도 영향을 미칠 수 있기 때문이다.',
  },
  {
    id: 'C' as const,
    label: 'C. 사람의 수가 달라졌기 때문이다.',
  },
];

export const Issue01Minority: React.FC<Issue01MinorityProps> = ({
  scene01State,
  onUpdateScene01,
  scene02State,
  onUpdateScene02,
  onNextIssue,
}) => {
  // Safe default states
  const judgments = scene01State.caseJudgments || {};
  const selectedCriteria = scene01State.selectedCriteria || [];
  const hasSubmittedCriteria = Boolean(scene01State.hasSubmittedCriteria);

  const selectedScene02 = scene02State.selectedScene02Option || null;
  const hasSubmittedScene02 = Boolean(scene02State.hasSubmittedScene02);

  // Check if all 4 cases are judged
  const allCasesJudged = Boolean(
    judgments.caseA && judgments.caseB && judgments.caseC && judgments.caseD
  );

  const handleSelectCaseJudgment = (caseId: CaseKey, val: JudgmentValue) => {
    onUpdateScene01((prev) => ({
      ...prev,
      caseJudgments: {
        ...(prev.caseJudgments || {}),
        [caseId]: val,
      },
    }));
  };

  const handleToggleCriterion = (criterionId: string) => {
    onUpdateScene01((prev) => {
      const current = prev.selectedCriteria || [];
      const exists = current.includes(criterionId);
      const next = exists
        ? current.filter((id) => id !== criterionId)
        : [...current, criterionId];
      return {
        ...prev,
        selectedCriteria: next,
      };
    });
  };

  const handleSubmitCriteria = () => {
    onUpdateScene01((prev) => ({
      ...prev,
      hasSubmittedCriteria: true,
      completed: true,
    }));
  };

  const handleSelectScene02Option = (opt: 'A' | 'B' | 'C') => {
    onUpdateScene02((prev) => ({
      ...prev,
      selectedScene02Option: opt,
    }));
  };

  const handleSubmitScene02 = () => {
    onUpdateScene02((prev) => ({
      ...prev,
      hasSubmittedScene02: true,
      completed: true,
    }));
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* ━━━━━━━━━━━━━━━━━━━━
          02. ISSUE TITLE
          ━━━━━━━━━━━━━━━━━━━━ */}
      <header className="border-b-2 border-[#1C1917] pb-8">
        <div className="flex items-center justify-between editorial-label text-[#78716C] mb-3">
          <span>RIGHTS FILE · ISSUE 01</span>
          <span>WHO IS A MINORITY?</span>
        </div>
        <div className="space-y-3">
          <h1 className="display-title text-4xl sm:text-6xl text-[#1C1917] leading-tight">
            WHO IS A MINORITY?
          </h1>
          <p className="editorial-heading text-2xl sm:text-3xl text-[#1C1917]">
            누가 ‘사회적 소수자’일까?
          </p>
          <p className="editorial-meta text-base sm:text-lg text-[#881337] pt-1">
            “숫자만으로는 알 수 없습니다.”
          </p>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━
          03. CASE FILE — 네 사람
          04. 학생이 먼저 판단
          ━━━━━━━━━━━━━━━━━━━━ */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="editorial-label text-[#881337]">CASE FILE</span>
            <span className="editorial-meta text-[#78716C]">/ 네 사람의 이야기</span>
          </div>
          <span className="editorial-meta text-xs text-[#78716C]">
            * 정의를 미리 확인하지 않고, 주어진 정보로 먼저 판단합니다.
          </span>
        </div>

        {/* Lead question banner */}
        <div className="p-5 sm:p-6 bg-white border border-[#292524]/20 shadow-2xs space-y-2">
          <span className="editorial-label text-[#881337] block">
            EXPLORATION QUESTION
          </span>
          <p className="learning-question text-lg sm:text-xl text-[#1C1917]">
            “이 정보만 보고 누가 사회적 소수자인지 판단해 보세요.”
          </p>
          <p className="learning-instruction text-xs sm:text-sm text-[#57534E]">
            각 사례 카드를 읽고, 하단의 두 선택지 중 본인의 생각을 선택해 보세요.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((item) => {
            const currentJudgment = judgments[item.id];
            const isJudged = Boolean(currentJudgment);

            return (
              <div
                key={item.id}
                id={`case-card-${item.id}`}
                className="bg-white border border-[#292524]/20 p-6 flex flex-col justify-between space-y-5 shadow-2xs hover:border-[#1C1917]/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#292524]/10 pb-2.5">
                    <span className="editorial-label text-[#881337]">
                      {item.code}
                    </span>
                    <span className="editorial-meta text-[11px] text-[#78716C]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="editorial-subheading text-xl text-[#1C1917]">
                    {item.name}
                  </h3>

                  <div className="space-y-2 text-[#44403C] learning-body text-sm sm:text-[15px] leading-relaxed">
                    {item.body.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* 04. Student Choice Buttons (Strict: neutral design, no pre-revealed correct/wrong colors) */}
                <div className="pt-4 border-t border-[#292524]/10 space-y-2">
                  <span className="editorial-label text-[11px] text-[#78716C] block">
                    나의 판단 선택
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      type="button"
                      id={`btn-${item.id}-minority`}
                      onClick={() => handleSelectCaseJudgment(item.id, 'minority')}
                      className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-[13px] learning-body border transition-all cursor-pointer flex items-center justify-between ${
                        currentJudgment === 'minority'
                          ? 'bg-[#1C1917] text-white border-[#1C1917] font-medium shadow-2xs'
                          : 'bg-[#FBF9F5] text-[#292524] border-[#292524]/20 hover:border-[#1C1917]'
                      }`}
                    >
                      <span>사회적 소수자로 볼 수 있다</span>
                      {currentJudgment === 'minority' && (
                        <Check className="w-4 h-4 text-white shrink-0" />
                      )}
                    </button>

                    <button
                      type="button"
                      id={`btn-${item.id}-difficult`}
                      onClick={() => handleSelectCaseJudgment(item.id, 'difficult')}
                      className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-[13px] learning-body border transition-all cursor-pointer flex items-center justify-between ${
                        currentJudgment === 'difficult'
                          ? 'bg-[#1C1917] text-white border-[#1C1917] font-medium shadow-2xs'
                          : 'bg-[#FBF9F5] text-[#292524] border-[#292524]/20 hover:border-[#1C1917]'
                      }`}
                    >
                      <span>이 정보만으로 판단하기 어렵다</span>
                      {currentJudgment === 'difficult' && (
                        <Check className="w-4 h-4 text-white shrink-0" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress guide if not yet finished judging 4 cases */}
        {!allCasesJudged && (
          <div className="p-4 bg-[#F2EFE8] border border-[#292524]/15 text-center editorial-meta text-xs sm:text-sm text-[#57534E]">
            네 가지 사례를 모두 판단하면 다음 질문이 열립니다. (현재{' '}
            {Object.values(judgments).filter(Boolean).length}/4 완료)
          </div>
        )}
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━
          05. 한 단계 더 질문
          ━━━━━━━━━━━━━━━━━━━━ */}
      {allCasesJudged && (
        <section
          id="criteria-question-section"
          className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[#292524]/10 pb-3">
            <span className="editorial-label text-[#881337]">QUESTION</span>
            <span className="editorial-meta text-xs text-[#78716C]">
              STEP 02 : CRITERIA SELECTION
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="learning-question text-xl sm:text-2xl text-[#1C1917]">
              “당신은 무엇을 기준으로 판단했나요?”
            </h3>
            <p className="learning-instruction text-xs sm:text-sm text-[#57534E]">
              네 사람의 사례를 판단할 때 고려했던 기준을 모두 선택해 보세요. (복수 선택)
            </p>
          </div>

          {/* Checkboxes List */}
          <div className="space-y-2.5 pt-2">
            {CRITERIA_OPTIONS.map((opt) => {
              const isChecked = selectedCriteria.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  id={`criteria-opt-${opt.id}`}
                  onClick={() => handleToggleCriterion(opt.id)}
                  className={`w-full text-left p-3.5 border transition-all cursor-pointer flex items-center gap-3 ${
                    isChecked
                      ? 'bg-[#F2EFE8] border-[#881337] text-[#1C1917] shadow-2xs font-medium'
                      : 'bg-white border-[#292524]/20 hover:border-[#1C1917] text-[#44403C]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-xs border flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-[#881337] border-[#881337] text-white'
                        : 'border-[#292524]/30 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <span className="learning-body text-sm sm:text-[15px]">
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-[#292524]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <button
              type="button"
              id="submit-criteria-btn"
              disabled={selectedCriteria.length === 0}
              onClick={handleSubmitCriteria}
              className={`learning-btn px-6 py-3 border tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 ${
                selectedCriteria.length > 0
                  ? 'bg-[#1C1917] hover:bg-[#881337] text-white border-[#1C1917] shadow-xs'
                  : 'bg-stone-200 text-stone-400 border-stone-300 cursor-not-allowed'
              }`}
            >
              <span>
                {hasSubmittedCriteria ? '내 판단 확인 완료 ✓' : '내 판단 확인하기 →'}
              </span>
            </button>
            <span className="learning-instruction text-xs text-[#78716C]">
              * 기준을 1개 이상 선택 후 버튼을 누르면 개념 분석이 공개됩니다.
            </span>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━
          06. 판단 후 CONCEPT FILE 공개
          07. 핵심 오개념 발견 (≠ FEW)
          08. CASE 다시 보기 (REVIEW THE EVIDENCE)
          ━━━━━━━━━━━━━━━━━━━━ */}
      {hasSubmittedCriteria && (
        <div className="space-y-16 animate-in fade-in duration-500">
          {/* 06. CONCEPT FILE */}
          <section className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
              <span className="editorial-label text-[#881337]">CONCEPT FILE</span>
              <span className="editorial-meta text-[#78716C]">
                / WHAT MAKES A MINORITY?
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="editorial-heading text-2xl sm:text-3xl text-[#1C1917]">
                WHAT MAKES A MINORITY?
              </h2>
              <p className="learning-instruction text-sm sm:text-base text-[#57534E]">
                단순 암기용 체크리스트가 아니라, 사회적 소수자를 다각도로 이해하기 위해 살펴볼 수 있는 주요 특징입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Feature 01 */}
              <div className="bg-white border border-[#292524]/20 p-5 space-y-2.5 shadow-2xs">
                <span className="editorial-label text-[#881337] block">01</span>
                <h4 className="editorial-subheading text-base sm:text-lg text-[#1C1917]">
                  식별 가능성
                </h4>
                <p className="learning-body text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  신체적·문화적 특징 등으로 다른 집단과 구별될 수 있다.
                </p>
              </div>

              {/* Feature 02 */}
              <div className="bg-white border border-[#292524]/20 p-5 space-y-2.5 shadow-2xs">
                <span className="editorial-label text-[#881337] block">02</span>
                <h4 className="editorial-subheading text-base sm:text-lg text-[#1C1917]">
                  권력의 열세
                </h4>
                <p className="learning-body text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  사회적 관계에서 상대적으로 불리한 위치에 놓일 수 있다.
                </p>
              </div>

              {/* Feature 03 */}
              <div className="bg-white border border-[#292524]/20 p-5 space-y-2.5 shadow-2xs">
                <span className="editorial-label text-[#881337] block">03</span>
                <h4 className="editorial-subheading text-base sm:text-lg text-[#1C1917]">
                  차별적 대우
                </h4>
                <p className="learning-body text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  특정한 특성을 이유로 불리하거나 차별적인 대우를 경험할 수 있다.
                </p>
              </div>

              {/* Feature 04 */}
              <div className="bg-white border border-[#292524]/20 p-5 space-y-2.5 shadow-2xs">
                <span className="editorial-label text-[#881337] block">04</span>
                <h4 className="editorial-subheading text-base sm:text-lg text-[#1C1917]">
                  집단적 정체성
                </h4>
                <p className="learning-body text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  공통된 경험 등을 바탕으로 집단 구성원으로서의 정체성을 가질 수 있다.
                </p>
              </div>
            </div>
          </section>

          {/* 07. 핵심 오개념 발견: ≠ FEW */}
          <section className="p-8 sm:p-12 bg-white border-2 border-[#1C1917] space-y-6 relative overflow-hidden shadow-xs">
            <div className="flex items-center gap-2 border-b border-[#292524]/15 pb-3">
              <span className="editorial-label text-[#881337]">CORE INSIGHT</span>
              <span className="editorial-meta text-[#78716C]">
                / 핵심 오개념 바로잡기
              </span>
            </div>

            <div className="space-y-4">
              <div className="display-title text-5xl sm:text-7xl text-[#1C1917] tracking-tight">
                ≠ FEW
              </div>
              <blockquote className="quote text-xl sm:text-2xl text-[#881337] not-italic font-medium">
                “소수라는 말은 단순히 숫자가 적다는 뜻이 아니다.”
              </blockquote>
            </div>

            <div className="pt-2 border-t border-[#292524]/10 learning-body text-sm sm:text-base text-[#292524] leading-relaxed max-w-3xl space-y-2">
              <p>
                사회적 소수자는 단순히 구성원의 수가 적은 집단을 의미하지 않습니다.
              </p>
              <p className="font-medium text-[#1C1917]">
                중요한 것은 사회적 관계 속에서 상대적으로 불리한 위치에 놓이거나 차별을 경험하는가 하는 점입니다.
              </p>
            </div>
          </section>

          {/* 08. CASE 다시 보기: REVIEW THE EVIDENCE */}
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#292524]/20 pb-2">
              <div className="flex items-center gap-2">
                <span className="editorial-label text-[#881337]">
                  REVIEW THE EVIDENCE
                </span>
                <span className="editorial-meta text-[#78716C]">
                  / 사례 다시 보기
                </span>
              </div>
              <span className="editorial-meta text-xs text-[#78716C]">
                4가지 기준과 시선의 적용
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: 왼손잡이 학생 */}
              <div className="bg-[#FBF9F5] border border-[#292524]/20 p-6 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="editorial-label text-[#78716C]">CASE C REVIEW</span>
                  <span className="stamp-box px-2 py-0.5 text-[10px] text-[#881337] border-[#881337]">
                    수적 소수 ≠ 사회적 소수자
                  </span>
                </div>
                <h4 className="editorial-subheading text-lg text-[#1C1917]">
                  왼손잡이 학생
                </h4>
                <div className="editorial-meta text-xs text-[#881337] font-bold">
                  “5%”
                </div>
                <p className="learning-body text-xs sm:text-sm text-[#44403C] leading-relaxed">
                  → 숫자가 적다는 사실만으로 사회적 소수자라고 판단하기는 어렵습니다. 학교생활에서 지속적인 불이익이나 차별적 대우가 확인되지 않는다면 단순한 수적 소수입니다.
                </p>
              </div>

              {/* Card 2: 여성 */}
              <div className="bg-[#FBF9F5] border border-[#292524]/20 p-6 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="editorial-label text-[#78716C]">CASE D REVIEW</span>
                  <span className="stamp-box px-2 py-0.5 text-[10px] text-[#881337] border-[#881337]">
                    수적 다수도 소수자 가능
                  </span>
                </div>
                <h4 className="editorial-subheading text-lg text-[#1C1917]">
                  여성
                </h4>
                <div className="editorial-meta text-xs text-[#881337] font-bold">
                  “수적으로 소수가 아님”
                </div>
                <p className="learning-body text-xs sm:text-sm text-[#44403C] leading-relaxed">
                  → 수적으로 소수가 아니더라도 특정한 사회적 관계에서 불리한 위치나 차별을 경험할 수 있습니다. 중요한 것은 인구 수가 아닌 사회적 권력 관계입니다.
                </p>
              </div>

              {/* Card 3: 이주 노동자 / 휠체어 이용자 */}
              <div className="bg-[#FBF9F5] border border-[#292524]/20 p-6 space-y-3 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="editorial-label text-[#78716C]">CASE A &amp; B REVIEW</span>
                  <span className="stamp-box px-2 py-0.5 text-[10px] text-[#881337] border-[#881337]">
                    사회적 관계와 환경
                  </span>
                </div>
                <h4 className="editorial-subheading text-lg text-[#1C1917]">
                  이주 노동자 / 휠체어 이용자
                </h4>
                <div className="editorial-meta text-xs text-[#881337] font-bold">
                  “위치와 환경의 맥락”
                </div>
                <p className="learning-body text-xs sm:text-sm text-[#44403C] leading-relaxed">
                  → 단순히 ‘외국인이라서’, ‘장애가 있어서’라고 판단하는 것이 아니라, 사회적 관계에서의 위치, 차별적 대우, 접근을 가로막는 사회적 환경 등을 함께 살펴봅니다.
                </p>
              </div>
            </div>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━
              09. 새로운 적용 사례 (SCENE 02)
              ━━━━━━━━━━━━━━━━━━━━ */}
          <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#292524]/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="editorial-label text-[#881337]">SCENE 02</span>
                <span className="editorial-meta text-[#78716C]">
                  / NEW APPLICATION CASE
                </span>
              </div>
              <span className="stamp-box px-2 py-0.5 text-[10px]">새로운 적용 사례</span>
            </div>

            <div className="space-y-2">
              <h3 className="editorial-heading text-2xl sm:text-3xl text-[#1C1917]">
                SAME PERSON, DIFFERENT PLACE
              </h3>
              <p className="quote text-base sm:text-lg text-[#57534E]">
                「같은 사람, 다른 장소」
              </p>
            </div>

            {/* Situation comparison */}
            <div className="space-y-3 pt-2">
              <p className="editorial-label text-xs text-[#1C1917]">
                한 사람이 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Situation A */}
                <div className="p-5 bg-[#FBF9F5] border border-[#292524]/15 space-y-2">
                  <span className="editorial-label text-[#57534E] block">
                    상황 A
                  </span>
                  <p className="learning-body text-sm sm:text-[15px] text-[#1C1917] leading-relaxed">
                    자신이 사용하는 언어로 정보를 충분히 얻고 의사소통할 수 있는 환경에서는 일상생활에 큰 어려움을 느끼지 않는다.
                  </p>
                </div>

                {/* Situation B */}
                <div className="p-5 bg-[#FBF9F5] border border-[#292524]/15 space-y-2">
                  <span className="editorial-label text-[#881337] block">
                    상황 B
                  </span>
                  <p className="learning-body text-sm sm:text-[15px] text-[#1C1917] leading-relaxed">
                    같은 사람이 자신에게 익숙하지 않은 언어로만 중요한 정보가 제공되는 환경에서는 병원 이용, 행정 서비스, 계약 등의 과정에서 정보를 충분히 이해하기 어려울 수 있다.
                  </p>
                </div>
              </div>
            </div>

            {/* Question & Options */}
            <div className="space-y-4 pt-4 border-t border-[#292524]/10">
              <div className="space-y-1">
                <span className="editorial-label text-[#881337] block">QUESTION</span>
                <p className="learning-question text-lg sm:text-xl text-[#1C1917]">
                  “사람은 같은데, 왜 경험하는 어려움은 달라졌을까요?”
                </p>
              </div>

              <div className="space-y-2 pt-1">
                {SCENE_02_OPTIONS.map((opt) => {
                  const isSelected = selectedScene02 === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      id={`scene02-opt-${opt.id}`}
                      onClick={() => handleSelectScene02Option(opt.id)}
                      className={`w-full text-left p-3.5 border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#1C1917] text-white border-[#1C1917] font-medium shadow-2xs'
                          : 'bg-white text-[#292524] border-[#292524]/20 hover:border-[#1C1917]'
                      }`}
                    >
                      <span className="learning-body text-sm sm:text-[15px]">
                        {opt.label}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Submit button */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  id="submit-scene02-btn"
                  disabled={!selectedScene02}
                  onClick={handleSubmitScene02}
                  className={`learning-btn px-6 py-3 border tracking-wider transition-all cursor-pointer ${
                    selectedScene02
                      ? 'bg-[#1C1917] hover:bg-[#881337] text-white border-[#1C1917] shadow-xs'
                      : 'bg-stone-200 text-stone-400 border-stone-300 cursor-not-allowed'
                  }`}
                >
                  {hasSubmittedScene02 ? '내 판단 확인 완료 ✓' : '내 판단 확인하기 →'}
                </button>
                <span className="learning-instruction text-xs text-[#78716C]">
                  * 한 가지 보기를 선택한 뒤 버튼을 눌러 피드백을 확인하세요.
                </span>
              </div>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━
                10. 최종 개념 발견 (CASE NOTE)
                ━━━━━━━━━━━━━━━━━━━━ */}
            {hasSubmittedScene02 && (
              <div className="mt-6 p-6 bg-[#F2EFE8] border-l-4 border-[#881337] space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2">
                  <span className="editorial-label text-[#881337]">CASE NOTE</span>
                  <span className="editorial-meta text-xs text-[#78716C]">
                    / 개념의 확장
                  </span>
                </div>

                <blockquote className="quote text-lg sm:text-xl text-[#1C1917] not-italic font-bold">
                  “사람의 특성만 보지 말고, 그 사람이 놓인 사회적 관계와 환경도 살펴보세요.”
                </blockquote>

                <div className="learning-body text-sm sm:text-[15px] text-[#292524] leading-relaxed space-y-2">
                  <p>
                    사회적 소수자는 개인의 특성만으로 고정적으로 결정되는 것이 아니라, 그 사람이 놓인 <strong>사회적 관계, 환경, 제도, 문화적 맥락</strong> 등과 관련하여 이해할 필요가 있습니다.
                  </p>
                </div>

                {/* Additional reflective question */}
                <div className="pt-3 border-t border-[#292524]/15 bg-white/70 p-4 border rounded-xs space-y-1">
                  <span className="editorial-label text-xs text-[#881337] flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    생각해 볼 추가 질문
                  </span>
                  <p className="learning-question text-sm sm:text-base text-[#1C1917]">
                    “누군가가 일부러 차별하지 않아도 어떤 사람에게 불리한 상황이 만들어질 수 있을까요?”
                  </p>
                  <p className="learning-instruction text-xs text-[#57534E] pt-0.5">
                    * 정답을 맞히는 문제가 아니라, 우리 주변의 제도와 물리적 환경을 비판적으로 돌아보게 하는 열린 질문입니다.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━
              11. CASE SUMMARY
              ━━━━━━━━━━━━━━━━━━━━ */}
          {hasSubmittedScene02 && (
            <section className="p-6 sm:p-8 bg-[#F5F2EA] border-2 border-[#1C1917] space-y-6">
              <div className="flex items-center justify-between border-b border-[#292524]/20 pb-3">
                <span className="editorial-label text-[#881337]">
                  CASE SUMMARY
                </span>
                <span className="stamp-box px-2.5 py-0.5 text-[10px] text-[#1C1917] border-[#1C1917]">
                  최종 정리
                </span>
              </div>

              <h3 className="editorial-heading text-xl sm:text-2xl text-[#1C1917]">
                사회적 소수자 탐구 최종 요약
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-[#292524]/15 space-y-1.5 shadow-2xs">
                  <span className="editorial-label text-xs text-[#881337]">01</span>
                  <p className="learning-body text-sm sm:text-[15px] text-[#1C1917] leading-relaxed">
                    숫자가 적다고 해서 곧바로 사회적 소수자가 되는 것은 아니다.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#292524]/15 space-y-1.5 shadow-2xs">
                  <span className="editorial-label text-xs text-[#881337]">02</span>
                  <p className="learning-body text-sm sm:text-[15px] text-[#1C1917] leading-relaxed">
                    사회적 소수자는 사회적 관계 속에서 상대적으로 불리한 위치에 놓이거나 차별을 경험할 수 있다.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#292524]/15 space-y-1.5 shadow-2xs">
                  <span className="editorial-label text-xs text-[#881337]">03</span>
                  <p className="learning-body text-sm sm:text-[15px] text-[#1C1917] leading-relaxed">
                    사회적 소수자를 이해할 때는 <strong>식별 가능성, 권력의 열세, 차별적 대우, 집단적 정체성</strong> 등을 살펴볼 수 있다.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#292524]/15 space-y-1.5 shadow-2xs">
                  <span className="editorial-label text-xs text-[#881337]">04</span>
                  <p className="learning-body text-sm sm:text-[15px] text-[#1C1917] leading-relaxed">
                    같은 특성을 가진 사람이라도 사회적 환경과 상황에 따라 경험하는 불리함이 달라질 수 있다.
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* ━━━━━━━━━━━━━━━━━━━━
              13. 여기서 수정 종료 & 다음 청소년 근로 파트로 직결
              ━━━━━━━━━━━━━━━━━━━━ */}
          <footer className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="editorial-meta text-[#78716C]">
                NEXT: 청소년 근로 권리 탐구 (BEFORE YOU WORK)
              </span>
              <span
                className={`text-[11px] editorial-meta px-2.5 py-0.5 border ${
                  hasSubmittedScene02
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                    : 'bg-stone-100 border-stone-200 text-stone-600'
                }`}
              >
                {hasSubmittedScene02 ? 'ISSUE 01 COMPLETED ✓' : '활동 진행 중'}
              </span>
            </div>

            <button
              type="button"
              id="minority-continue-btn"
              disabled={!hasSubmittedScene02}
              onClick={() => {
                if (hasSubmittedScene02) {
                  // Direct connection to the existing youth labor section (Issue 03)
                  onNextIssue('issue-03');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={`learning-btn flex items-center gap-2 px-6 py-3 transition-all ${
                hasSubmittedScene02
                  ? 'bg-[#1C1917] hover:bg-[#881337] text-white cursor-pointer shadow-xs'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
              }`}
            >
              <span>
                {hasSubmittedScene02
                  ? '청소년 근로 권리 탐구로 이어가기 →'
                  : '최종 정리 완료 후 이동 가능'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </footer>
        </div>
      )}
    </article>
  );
};
