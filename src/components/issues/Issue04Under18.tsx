import React from 'react';
import { Issue04State, IssueId } from '../../types';
import {
  UNDER18_KEYWORDS,
  SORT_CARDS,
  CLIPPING_ARTICLES,
} from '../../data/curriculumData';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  AlertTriangle,
  FolderOpen,
  Newspaper,
  BookOpen,
  ChevronDown,
  Check,
} from 'lucide-react';

interface Issue04Under18Props {
  issue04State: Issue04State;
  onUpdateIssue04: (updater: (prev: Issue04State) => Issue04State) => void;
  onNextIssue: (next: IssueId) => void;
  onPrevIssue: (prev: IssueId) => void;
}

export const Issue04Under18: React.FC<Issue04Under18Props> = ({
  issue04State,
  onUpdateIssue04,
  onNextIssue,
  onPrevIssue,
}) => {
  const [selectedKeywordId, setSelectedKeywordId] = React.useState<string | null>(null);

  const toggleCase01Mark = (markId: string) => {
    onUpdateIssue04((prev) => {
      const exists = prev.case01Marks.includes(markId);
      return {
        ...prev,
        case01Marks: exists
          ? prev.case01Marks.filter((id) => id !== markId)
          : [...prev.case01Marks, markId],
      };
    });
  };

  const toggleCase02Number = (numStr: string) => {
    onUpdateIssue04((prev) => {
      const exists = prev.case02Numbers.includes(numStr);
      return {
        ...prev,
        case02Numbers: exists
          ? prev.case02Numbers.filter((n) => n !== numStr)
          : [...prev.case02Numbers, numStr],
      };
    });
  };

  const setCardCategory = (cardId: string, category: 'worker' | 'under18') => {
    onUpdateIssue04((prev) => ({
      ...prev,
      sortedCards: {
        ...prev.sortedCards,
        [cardId]: prev.sortedCards[cardId] === category ? null : category,
      },
    }));
  };

  const activeKeyword = UNDER18_KEYWORDS.find((k) => k.id === selectedKeywordId);

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* 1. Page Header: Typographic Focus 15 ≠ 18 */}
      <header className="border-b-2 border-[#1C1917] pb-8 text-center space-y-4">
        <div className="flex items-center justify-between font-mono text-xs text-[#78716C]">
          <span>RIGHTS FILE · ISSUE 04</span>
          <span>YOUTH LABOR PROTECTION / UNDER 18</span>
        </div>

        <div className="py-6">
          <div className="text-7xl sm:text-9xl font-display font-black tracking-tight text-[#1C1917] leading-none">
            15 <span className="text-[#881337] italic font-light">≠</span> 18
          </div>
          <p className="text-xl sm:text-2xl font-quote text-[#292524] mt-4">
            「두 숫자가 가리키는 서로 다른 법적 보호의 기준」
          </p>
        </div>
      </header>

      {/* 2. CONCEPT: 15 vs 18 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
          <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#881337]">
            CONCEPT 04-A
          </span>
          <span className="text-xs font-mono text-[#78716C]">/ 15세와 18세의 법적 의미</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 15 */}
          <div className="p-6 bg-white border border-[#292524]/20 space-y-3">
            <div className="flex items-center justify-between border-b border-[#292524]/10 pb-2">
              <span className="text-4xl font-serif font-black text-[#1C1917]">15</span>
              <span className="stamp-box px-2 py-0.5 text-[10px]">최저 취업 연령</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-[#1C1917]">
              “원칙적인 최저 취업 연령과 관련”
            </h3>
            <p className="text-sm font-sans text-[#44403C] leading-relaxed">
              만 15세 이상이 되어야 원칙적으로 근로자로 일할 수 있습니다. 어린 학생들의 의무교육과 신체적 성장을 지키기 위한 최소한의 출발선입니다.
            </p>
            <div className="p-2.5 bg-[#FBF9F5] border border-[#292524]/10 text-xs text-[#78716C]">
              💡 <strong>기억 팁:</strong> 15 → 합법적으로 “일할 수 있는 나이”의 원칙
            </div>
          </div>

          {/* 18 */}
          <div className="p-6 bg-white border-2 border-[#881337]/30 space-y-3">
            <div className="flex items-center justify-between border-b border-[#292524]/10 pb-2">
              <span className="text-4xl font-serif font-black text-[#881337]">18</span>
              <span className="stamp-box px-2 py-0.5 text-[10px] text-[#881337] border-[#881337]">
                연소근로자 보호
              </span>
            </div>
            <h3 className="text-lg font-serif font-bold text-[#881337]">
              “연소근로자에 대한 추가적인 보호와 관련”
            </h3>
            <p className="text-sm font-sans text-[#44403C] leading-relaxed">
              만 18세 미만인 사람은 ‘연소근로자’로서 성인 근로자보다 근로시간, 야간·휴일근로, 유해업무 등에서 더 엄격하고 두터운 특별 보호를 받습니다.
            </p>
            <div className="p-2.5 bg-[#881337]/5 border border-[#881337]/20 text-xs text-[#881337]">
              💡 <strong>기억 팁:</strong> 18 → 일할 때 “추가적으로 특별히 보호하는 기준”
            </div>
          </div>
        </div>

        {/* READ THE DETAILS Expandable Drawer */}
        <div className="border border-[#292524]/20 bg-[#F4F0E6] p-5">
          <button
            id="under18-read-details-btn"
            onClick={() => {
              onUpdateIssue04((prev) => ({ ...prev, readDetailsOpen: !prev.readDetailsOpen }));
            }}
            className="w-full flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#881337]" />
              <span className="font-mono text-xs font-bold text-[#1C1917] tracking-wider uppercase">
                [READ THE DETAILS] 15세 미만과 18세 미만 법률상 세부 요건 및 필수 서류
              </span>
            </div>
            <span className="font-mono text-xs text-[#881337] font-bold">
              {issue04State.readDetailsOpen ? '닫기 ▲' : '자세히 보기 ▼'}
            </span>
          </button>

          {issue04State.readDetailsOpen && (
            <div className="mt-4 pt-4 border-t border-[#292524]/15 space-y-3 text-xs text-[#292524] animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3.5 border border-[#292524]/10 space-y-1.5">
                  <span className="font-mono font-bold text-[#881337] block">
                    1. 15세 미만자(중학교 재학 중인 18세 미만 포함)의 예외:
                  </span>
                  <p className="leading-relaxed">
                    근로기준법 제64조에 따라 원칙적으로 고용할 수 없으나, <strong>고용노동부장관이 발급한 ‘취직인허증’</strong>을 받은 경우에 한하여 예외적으로 취업이 허용됩니다.
                  </p>
                </div>

                <div className="bg-white p-3.5 border border-[#292524]/10 space-y-1.5">
                  <span className="font-mono font-bold text-[#881337] block">
                    2. 사업장 필수 비치 서류 (근로기준법 제66조):
                  </span>
                  <p className="leading-relaxed">
                    사업주는 18세 미만자를 고용할 경우, 연령을 증명하는 <strong>‘가족관계기록사항에 관한 증명서’</strong>와 친권자 또는 후견인의 <strong>‘동의서’</strong>를 사업장에 반드시 갖추어 두어야 합니다.
                  </p>
                </div>

                <div className="bg-white p-3.5 border border-[#292524]/10 space-y-1.5">
                  <span className="font-mono font-bold text-[#881337] block">
                    3. 근로계약 독자 체결 및 대리 금지 (제67조):
                  </span>
                  <p className="leading-relaxed">
                    친권자나 후견인은 미성년자의 근로계약을 대리할 수 없습니다. 청소년 본인이 직접 체결해야 합니다. (단, 불리한 계약의 경우 친권자나 노동위원회가 해지 가능)
                  </p>
                </div>

                <div className="bg-white p-3.5 border border-[#292524]/10 space-y-1.5">
                  <span className="font-mono font-bold text-[#881337] block">
                    4. 독자적 임금 청구권 (제68조):
                  </span>
                  <p className="leading-relaxed">
                    미성년자는 일한 대가인 임금을 부모 등 대리인을 거치지 않고 독자적으로 직접 청구하고 지급받을 권리가 법률로 보장됩니다.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. CONCEPT: 18세 미만 추가 보호 인포그래픽 */}
      <section className="p-6 sm:p-10 bg-white border border-[#292524]/20 shadow-2xs space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">CONCEPT 04-B</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917]">
              「18세 미만 근로자 특별 보호 키워드」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">CLICK TO INSPECT RULES</span>
        </div>

        {/* Central Graphic with Surrounding Keywords */}
        <div className="relative py-8 bg-[#FBF9F5] border border-[#292524]/15 p-6 text-center">
          <div className="mb-6">
            <span className="text-7xl sm:text-9xl font-serif font-black text-[#881337]/90 tracking-tighter block">
              18
            </span>
            <span className="font-mono text-xs tracking-widest text-[#78716C] uppercase font-bold">
              UNDER 18 PROTECTION MATRIX
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
            {UNDER18_KEYWORDS.map((kw) => {
              const isSelected = selectedKeywordId === kw.id;
              return (
                <button
                  key={kw.id}
                  id={`kw-btn-${kw.id}`}
                  onClick={() => setSelectedKeywordId(isSelected ? null : kw.id)}
                  className={`px-3 py-2 text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#881337] text-white border-[#881337] shadow-xs'
                      : 'bg-white border-[#292524]/20 hover:border-[#1C1917] text-[#1C1917]'
                  }`}
                >
                  {kw.tag}
                </button>
              );
            })}
          </div>

          {/* Detailed Korean Legal Explanation on Click */}
          {activeKeyword ? (
            <div className="mt-8 p-6 bg-white border-2 border-[#881337] text-left max-w-xl mx-auto space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-[#292524]/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#881337] uppercase">
                  {activeKeyword.tag}
                </span>
                <span className="text-xs font-serif font-bold text-[#1C1917]">
                  {activeKeyword.title}
                </span>
              </div>
              <p className="font-serif text-base text-[#1C1917] leading-relaxed">
                {activeKeyword.koreanSummary}
              </p>
              <p className="text-xs font-sans text-[#57534E] bg-[#FBF9F5] p-3 border border-[#292524]/10">
                ⚖️ <strong>법적 조항 및 세부 요건:</strong> {activeKeyword.legalDetail}
              </p>
            </div>
          ) : (
            <p className="text-xs font-mono text-[#78716C] mt-6">
              * 키워드를 클릭하면 현행 근로기준법상 기준과 원칙·예외 요건이 펼쳐집니다.
            </p>
          )}
        </div>
      </section>

      {/* 4. CASE FILE 01: 17세, 밤 12시 */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="stamp-box px-2 py-0.5 text-[10px]">CASE FILE</span>
            <span className="font-mono text-xs font-bold text-[#881337]">#Y-017</span>
            <span className="font-serif font-bold text-lg text-[#1C1917]">
              「지우의 야간근무 요청 사건」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">DO NOT JUDGE YET</span>
        </div>

        {/* Case Record Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 bg-[#FBF9F5] p-5 border border-[#292524]/20 space-y-4 font-mono text-xs">
            <div className="border-b border-[#292524]/10 pb-2 flex justify-between">
              <span className="text-[#78716C]">CASE RECORD DOSSIER</span>
              <span className="text-[#881337] font-bold">CONFIDENTIAL</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[#1C1917]">
              <div>
                <span className="text-[#78716C] block">NAME</span>
                <span className="font-bold font-serif text-sm">지우</span>
              </div>
              <div>
                <span className="text-[#78716C] block">AGE</span>
                <button
                  onClick={() => toggleCase01Mark('17세')}
                  className={`font-bold font-serif text-sm px-1 rounded-xs transition-all cursor-pointer ${
                    issue04State.case01Marks.includes('17세')
                      ? 'bg-[#FEF08A] underline text-red-800'
                      : 'hover:bg-[#E7E3D8]'
                  }`}
                >
                  17세 (고등학생)
                </button>
              </div>
              <div>
                <span className="text-[#78716C] block">WORKPLACE</span>
                <button
                  onClick={() => toggleCase01Mark('카페')}
                  className={`font-bold font-serif text-sm px-1 rounded-xs transition-all cursor-pointer ${
                    issue04State.case01Marks.includes('카페')
                      ? 'bg-[#FEF08A] underline text-red-800'
                      : 'hover:bg-[#E7E3D8]'
                  }`}
                >
                  카페 (일반음식점)
                </button>
              </div>
              <div>
                <span className="text-[#78716C] block">SHIFT</span>
                <div className="space-x-1">
                  <button
                    onClick={() => toggleCase01Mark('17:00')}
                    className={`font-bold px-1 rounded-xs transition-all cursor-pointer ${
                      issue04State.case01Marks.includes('17:00')
                        ? 'bg-[#FEF08A] underline text-red-800'
                        : 'hover:bg-[#E7E3D8]'
                    }`}
                  >
                    17:00
                  </button>
                  <span>—</span>
                  <button
                    onClick={() => toggleCase01Mark('24:00')}
                    className={`font-bold px-1 rounded-xs transition-all cursor-pointer ${
                      issue04State.case01Marks.includes('24:00')
                        ? 'bg-[#FEF08A] underline text-red-800'
                        : 'hover:bg-[#E7E3D8]'
                    }`}
                  >
                    24:00 (자정)
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3 bg-white border border-[#292524]/10 space-y-1">
              <span className="text-[10px] text-[#78716C] block">사장의 발언:</span>
              <p className="font-serif italic text-sm text-[#1C1917]">
                “지우야, 오늘 다른 알바가 급하게 빠져서 그런데... 오늘만 자정(24:00)까지 해주면 안 될까?”
              </p>
            </div>
          </div>

          {/* Clues & Logic Connection */}
          <div className="md:col-span-6 space-y-4">
            <div className="p-4 bg-[#F2EFE8] border border-[#292524]/15 space-y-2">
              <span className="font-mono text-xs font-bold text-[#881337] uppercase">
                CLUE CONNECTION (단서와 법률의 연결)
              </span>
              <ul className="space-y-1.5 text-xs text-[#292524]">
                <li className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#881337]">[17세]</span>
                  <span>→ 18세 미만 연소근로자에 해당하여 특별 보호 대상</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-mono font-bold text-[#881337]">[24:00]</span>
                  <span>→ 밤 10시(22:00) 이후이므로 야간근로에 해당</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-white border border-[#292524]/20 space-y-2 text-xs">
              <span className="font-mono font-bold text-[#1C1917] block">
                ⚖️ 확인해야 할 법적 기준과 예외 요건:
              </span>
              <p className="text-[#57534E] leading-relaxed">
                근로기준법 제70조 제2항에 따라 18세 미만자의 야간근로(22:00~06:00)는 <strong>원칙적으로 제한</strong>됩니다.
                단, “절대 불가”는 아니며 <strong>근로자의 동의</strong>와 함께 <strong>고용노동부장관(지방고용노동청장)의 인가</strong>를 사전에 받은 경우에 한하여 예외적으로 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Student judgment */}
        <div className="space-y-2">
          <label htmlFor="case01-judgement-input" className="block text-xs font-mono font-bold text-[#57534E] uppercase">
            MY ANALYSIS / 이 사건에 대한 법적 판단
          </label>
          <input
            id="case01-judgement-input"
            type="text"
            value={issue04State.case01Judgement}
            onChange={(e) => {
              const val = e.target.value;
              onUpdateIssue04((prev) => ({ ...prev, case01Judgement: val }));
            }}
            placeholder="지우의 동의뿐 아니라 노동청 인가 유무 등 확인해야 할 절차를 포함해 판단을 남겨보세요."
            className="w-full bg-[#FBF9F5] border border-[#292524]/20 p-3 text-sm text-[#1C1917] focus:outline-hidden focus:border-[#881337] focus:bg-white"
          />
        </div>
      </section>

      {/* 5. CASE FILE 02: 하루 8시간? */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="stamp-box px-2 py-0.5 text-[10px]">CASE FILE</span>
            <span className="font-mono text-xs font-bold text-[#881337]">#H-008</span>
            <span className="font-serif font-bold text-lg text-[#1C1917]">
              「하루 8시간, 주 40시간 근무 계약」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">CRITICAL NUMBERS</span>
        </div>

        <div className="p-6 bg-[#FBF9F5] border border-[#292524]/15 space-y-4">
          <p className="font-serif text-sm text-[#57534E]">
            질문: “이 사건을 판단하는 데 가장 중요한 세 가지 숫자는 무엇일까요? 숫자를 직접 클릭해 표시해 보세요.”
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xl sm:text-2xl font-mono font-bold text-[#1C1917]">
            <span>AGE:</span>
            <button
              onClick={() => toggleCase02Number('17')}
              className={`px-2 py-1 rounded-xs border transition-all cursor-pointer ${
                issue04State.case02Numbers.includes('17')
                  ? 'bg-[#FEF08A] border-[#CA8A04] text-[#881337]'
                  : 'bg-white border-[#292524]/20 hover:border-[#1C1917]'
              }`}
            >
              17
            </button>
            <span className="text-[#78716C]">|</span>
            <span>MON — FRI</span>
            <span className="text-[#78716C]">|</span>
            <button
              onClick={() => toggleCase02Number('8')}
              className={`px-2 py-1 rounded-xs border transition-all cursor-pointer ${
                issue04State.case02Numbers.includes('8')
                  ? 'bg-[#FEF08A] border-[#CA8A04] text-[#881337]'
                  : 'bg-white border-[#292524]/20 hover:border-[#1C1917]'
              }`}
            >
              8
            </button>
            <span>HOURS / DAY</span>
            <span className="text-[#78716C]">|</span>
            <button
              onClick={() => toggleCase02Number('40')}
              className={`px-2 py-1 rounded-xs border transition-all cursor-pointer ${
                issue04State.case02Numbers.includes('40')
                  ? 'bg-[#FEF08A] border-[#CA8A04] text-[#881337]'
                  : 'bg-white border-[#292524]/20 hover:border-[#1C1917]'
              }`}
            >
              40
            </button>
            <span>HOURS / WEEK</span>
          </div>
        </div>

        {/* 4-Step Review Sequence */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold text-[#57534E] uppercase block">
            4-STEP LEGAL INSPECTION (순서대로 검토하는 법적 체크리스트)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-white border border-[#292524]/15 space-y-1">
              <span className="font-mono font-bold text-[#881337] block">① 나이 확인</span>
              <p className="text-[#44403C]">17세는 18세 미만 연소근로자 보호 기준 적용 대상입니다.</p>
            </div>
            <div className="p-3 bg-white border border-[#292524]/15 space-y-1">
              <span className="font-mono font-bold text-[#881337] block">② 1일 법정근로시간</span>
              <p className="text-[#44403C]">기본 7시간 한도입니다. (8시간 계약은 법정 한도 1시간 초과)</p>
            </div>
            <div className="p-3 bg-white border border-[#292524]/15 space-y-1">
              <span className="font-mono font-bold text-[#881337] block">③ 1주 법정근로시간</span>
              <p className="text-[#44403C]">기본 35시간 한도입니다. (40시간은 5시간 초과 상태)</p>
            </div>
            <div className="p-3 bg-white border border-[#292524]/15 space-y-1">
              <span className="font-mono font-bold text-[#881337] block">④ 합의에 의한 연장</span>
              <p className="text-[#44403C]">당사자 합의가 있더라도 1일 1시간, 1주 5시간을 넘을 수 없습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMPARISON SPREAD: WORKER vs UNDER 18 */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">COMPARATIVE MATRIX</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917]">
              「일반 근로자 보호 vs 18세 미만 추가 보호」
            </span>
          </div>
          <p className="text-xs text-[#57534E] mt-1">
            아래의 각 법적 보호 조항을 클릭하여 <strong>[WORKER (일반 근로자 공통)]</strong> 또는 <strong>[UNDER 18 (18세 미만 특별 보호)]</strong> 영역으로 올바르게 분류해 보세요.
          </p>
        </div>

        {/* Sorting Grid */}
        <div className="space-y-3">
          {SORT_CARDS.map((card) => {
            const currentCat = issue04State.sortedCards[card.id];
            return (
              <div
                key={card.id}
                id={`sort-card-${card.id}`}
                className="p-3.5 border border-[#292524]/15 bg-[#FBF9F5] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <span className="font-serif text-sm font-bold text-[#1C1917]">
                    {card.text}
                  </span>
                  {issue04State.comparedFile && (
                    <span className="block text-xs text-[#78716C]">
                      💡 {card.reason}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setCardCategory(card.id, 'worker')}
                    className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer border ${
                      currentCat === 'worker'
                        ? 'bg-[#1C1917] text-[#FBF9F5] border-[#1C1917] font-bold'
                        : 'bg-white text-[#57534E] border-[#292524]/20 hover:border-[#1C1917]'
                    }`}
                  >
                    WORKER
                  </button>
                  <button
                    onClick={() => setCardCategory(card.id, 'under18')}
                    className={`px-3 py-1.5 text-xs font-mono transition-all cursor-pointer border ${
                      currentCat === 'under18'
                        ? 'bg-[#881337] text-white border-[#881337] font-bold'
                        : 'bg-white text-[#57534E] border-[#292524]/20 hover:border-[#881337]'
                    }`}
                  >
                    UNDER 18
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compare the file button */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <button
            id="compare-file-btn"
            onClick={() => {
              onUpdateIssue04((prev) => ({
                ...prev,
                comparedFile: true,
                sortSubmitted: true,
                completed: true,
              }));
            }}
            className="px-6 py-2.5 bg-[#881337] hover:bg-[#1C1917] text-white text-xs font-serif font-bold tracking-wider transition-all cursor-pointer"
          >
            {issue04State.comparedFile ? '해설 검토 완료 ✓' : 'COMPARE THE FILE (결과 및 해설 검토) →'}
          </button>
          <span className="text-xs text-[#78716C] italic font-sans">
            * 분류 후 버튼을 눌러 정확한 법적 취지를 확인하세요. (정오답과 무관하게 확인 시 완료됩니다)
          </span>
        </div>
      </section>

      {/* 7. EXTRA CLIPPING: Optional Reading */}
      <section className="border border-[#292524]/20 bg-[#F5F2EA] p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#292524]/15 pb-2">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-[#881337]" />
            <span className="font-mono text-xs font-bold text-[#881337] tracking-widest uppercase">
              EXTRA CLIPPING / 신문 별도 기사 (선택 탐구)
            </span>
          </div>
          <span className="text-[11px] text-[#78716C] font-mono">OPTIONAL READING</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CLIPPING_ARTICLES.map((article) => {
            const isOpened = issue04State.activeClippingArticle === article.id;
            return (
              <div
                key={article.id}
                id={`article-card-${article.id}`}
                className="bg-white border border-[#292524]/15 p-4 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#881337] uppercase">
                    {article.tag}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#1C1917] mt-0.5">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#57534E] mt-1 font-sans">
                    {article.summary}
                  </p>
                </div>

                {isOpened && (
                  <div className="mt-3 pt-3 border-t border-[#292524]/10 space-y-2 text-xs text-[#292524] animate-in fade-in duration-200">
                    <p className="leading-relaxed">{article.body}</p>
                    <span className="font-mono text-[10px] text-[#78716C] block">
                      관련 법조문: {article.statute}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => {
                    onUpdateIssue04((prev) => ({
                      ...prev,
                      activeClippingArticle: isOpened ? null : article.id,
                    }));
                  }}
                  className="mt-2 pt-2 border-t border-dashed border-[#292524]/10 text-xs font-mono text-[#881337] font-semibold text-left cursor-pointer hover:underline"
                >
                  {isOpened ? '기사 닫기 ▲' : '기사 전문 읽기 →'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Navigation */}
      {(() => {
        const chapterCompleted = Boolean(
          issue04State.completed || issue04State.sortSubmitted || issue04State.comparedFile
        );

        return (
          <footer className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="issue04-prev-btn"
              onClick={() => {
                onPrevIssue('issue-03');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-mono text-[#57534E] hover:text-[#1C1917] cursor-pointer"
            >
              ← PREVIOUS: ISSUE 03
            </button>

            <div className="flex items-center gap-3">
              <span className={`text-[11px] font-mono px-2 py-0.5 border ${
                chapterCompleted
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                  : 'bg-stone-100 border-stone-200 text-stone-600'
              }`}>
                {chapterCompleted ? 'CHAPTER 04 COMPLETE ✓' : '비교 매트릭스 확인 후 이동'}
              </span>

              <button
                id="issue04-next-btn"
                disabled={!chapterCompleted}
                onClick={() => {
                  if (chapterCompleted) {
                    onNextIssue('issue-05');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-serif font-bold tracking-wider transition-all ${
                  chapterCompleted
                    ? 'bg-[#1C1917] hover:bg-[#881337] text-white cursor-pointer shadow-xs'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
                }`}
              >
                <span>{chapterCompleted ? 'CONTINUE TO ISSUE 05' : '매트릭스 확인 후 이동'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </footer>
        );
      })()}
    </article>
  );
};
