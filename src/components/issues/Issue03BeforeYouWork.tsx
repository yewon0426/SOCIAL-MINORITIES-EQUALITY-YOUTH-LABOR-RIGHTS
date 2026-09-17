import React from 'react';
import { Issue03State, IssueId } from '../../types';
import { CONTRACT_PARTS } from '../../data/curriculumData';
import { ArrowRight, Paperclip, FileText, CheckSquare, Square, AlertCircle, HelpCircle } from 'lucide-react';

interface Issue03BeforeYouWorkProps {
  issue03State: Issue03State;
  onUpdateIssue03: (updater: (prev: Issue03State) => Issue03State) => void;
  onNextIssue: (next: IssueId) => void;
  onPrevIssue: (prev: IssueId) => void;
}

const REST_TIME_FACT_CHECKS = [
  { id: 'free_use', text: '손님이 없을 때 매장 밖을 자유롭게 나가거나 개인 용무를 볼 수 있었는가?' },
  { id: 'duty_to_serve', text: '손님이 문을 열고 들어왔을 때 즉시 일어서서 응대할 법적·업무상 의무가 있었는가?' },
  { id: 'designated_time', text: '근로계약서상에 사전에 확정된 휴게시간(예: 19:00~19:30)이 기재되어 있었는가?' },
  { id: 'employer_direction', text: '사업주의 지휘·감독 권한으로부터 완전히 벗어나 있었는가?' },
];

export const Issue03BeforeYouWork: React.FC<Issue03BeforeYouWorkProps> = ({
  issue03State,
  onUpdateIssue03,
  onNextIssue,
  onPrevIssue,
}) => {
  const toggleContractPart = (partId: string) => {
    onUpdateIssue03((prev) => {
      const exists = prev.markedContractParts.includes(partId);
      const updated = exists
        ? prev.markedContractParts.filter((id) => id !== partId)
        : [...prev.markedContractParts, partId];
      const newlyUnlocked = prev.conceptCardUnlocked || updated.length >= 4;
      return {
        ...prev,
        markedContractParts: updated,
        conceptCardUnlocked: newlyUnlocked,
        completed: prev.completed || newlyUnlocked,
      };
    });
  };

  const toggleRestFact = (factId: string) => {
    onUpdateIssue03((prev) => {
      const exists = prev.restTimeChecks.includes(factId);
      return {
        ...prev,
        restTimeChecks: exists
          ? prev.restTimeChecks.filter((id) => id !== factId)
          : [...prev.restTimeChecks, factId],
      };
    });
  };

  const isCardUnlocked = Boolean(
    issue03State.conceptCardUnlocked || issue03State.markedContractParts.length >= 4 || issue03State.completed
  );
  const checkedCount = Math.min(issue03State.markedContractParts.length, 4);

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* 1. Dossier Header Styled like an Official Employment File Folder */}
      <header className="relative border-b-2 border-[#1C1917] pb-8 bg-[#F4F0E6] p-6 sm:p-10 border border-[#292524]/20 shadow-xs">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Paperclip className="w-5 h-5 text-[#881337] -rotate-45" />
          <span className="stamp-box px-2.5 py-1 text-[11px] font-mono bg-white">
            DOSSIER #W-003
          </span>
        </div>

        <div className="font-mono text-xs text-[#78716C] mb-3">
          <span>EMPLOYMENT RECORD / BEFORE YOU WORK</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl sm:text-7xl font-display font-black tracking-tight text-[#1C1917] leading-none">
            BEFORE<br />
            YOU WORK
          </h1>
          <p className="text-xl sm:text-2xl font-quote text-[#881337] pt-2">
            「일을 시작하는 순간, 당신은 근로자입니다.」
          </p>
        </div>
      </header>

      {/* 2. CONCEPT: 청소년도 근로자 */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#292524]/20 pb-2">
          <span className="font-mono text-xs tracking-widest uppercase font-bold text-[#881337]">
            CONCEPT 03
          </span>
          <span className="text-xs font-mono text-[#78716C]">/ FUNDAMENTAL LABOR STATUS</span>
        </div>

        {/* Big Statement Banner */}
        <div className="p-6 sm:p-8 bg-white border border-[#292524]/20 space-y-4 text-center">
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#78716C] uppercase">
            청소년 노동권을 이해하기 전에 먼저 기억해야 할 사실이 있습니다.
          </p>
          <div className="text-3xl sm:text-5xl font-display font-black text-[#1C1917]">
            “청소년도 <span className="text-[#881337] underline decoration-2 underline-offset-8">‘근로자’</span>입니다.”
          </div>
          <p className="text-[15px] sm:text-[16px] font-sans text-[#44403C] max-w-2xl mx-auto leading-[1.85] pt-2">
            따라서 특별한 예외가 아닌 한, 대한민국 근로기준법과 노동관계법령이 보장하는
            <strong> 모든 일반 근로자의 기본적 권리가 청소년에게도 원칙적으로 고스란히 적용</strong>됩니다.
          </p>
        </div>

        {/* FILE NOTE: All Workers Protection */}
        <div className="p-6 bg-[#FBF9F5] border border-[#292524]/20 space-y-4">
          <div className="flex items-center gap-2 border-b border-[#292524]/15 pb-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">FILE NOTE</span>
            <h3 className="font-serif font-bold text-sm text-[#1C1917]">
              모든 근로자에게 관련되는 핵심 법적 보호
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white border border-[#292524]/10">
              <span className="font-mono font-bold text-[#881337] block">01 근로조건의 명시</span>
              <span className="text-[#57534E] mt-0.5 block">임금, 근로시간, 휴일 등 법정 조건을 반드시 서면 명시</span>
            </div>
            <div className="p-3 bg-white border border-[#292524]/10">
              <span className="font-mono font-bold text-[#881337] block">02 최저임금 보장</span>
              <span className="text-[#57534E] mt-0.5 block">나이·신분에 따른 부당 감액 금지, 법정 최저시급 이상 지급</span>
            </div>
            <div className="p-3 bg-white border border-[#292524]/10">
              <span className="font-mono font-bold text-[#881337] block">03 4대 임금 지급 원칙</span>
              <span className="text-[#57534E] mt-0.5 block">통화불, 직접불, 전액불, 매월 1회 이상 정기일 지급</span>
            </div>
            <div className="p-3 bg-white border border-[#292524]/10">
              <span className="font-mono font-bold text-[#881337] block">04 휴게시간의 자유이용</span>
              <span className="text-[#57534E] mt-0.5 block">4시간 일하면 30분 이상, 8시간 일하면 1시간 이상 보장</span>
            </div>
            <div className="p-3 bg-white border border-[#292524]/10">
              <span className="font-mono font-bold text-[#881337] block">05 임금명세서 교부</span>
              <span className="text-[#57534E] mt-0.5 block">임금의 세부 계산 내역과 공제 내역을 서면·전자로 전달</span>
            </div>
            <div className="p-3 bg-white border border-[#292524]/10">
              <span className="font-mono font-bold text-[#881337] block">06 법정 유급휴일</span>
              <span className="text-[#57534E] mt-0.5 block">주 15시간 이상 근무 및 소정근로일 개근 시 주휴수당 부여</span>
            </div>
          </div>

          <p className="text-[11px] text-[#78716C] italic font-sans pt-2 border-t border-[#292524]/10">
            * 각 제도의 적용 요건(예: 주 15시간 이상 여부, 상시 5인 이상 사업장 여부 등)과 법률상 예외가 존재할 수 있으므로, 법률 내용을 지나치게 단순화하지 않고 사실관계를 정확히 대조해야 합니다.
          </p>
        </div>
      </section>

      {/* 3. DOCUMENT 01: 근로계약서 (Standard Labor Contract Marking) */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">DOCUMENT 01</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917]">
              「표준 근로계약서」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">MARK THE DOCUMENT</span>
        </div>

        <div>
          <p className="font-serif text-base text-[#1C1917] mb-1">
            “첫 출근 전, 근로계약서의 어떤 내용을 반드시 확인해야 할까요?”
          </p>
          <p className="text-xs text-[#57534E]">
            계약서의 주요 항목들을 클릭하여 밑줄을 긋고, 오른쪽에 나타나는 빨간 교정펜 메모를 확인해 보세요.
          </p>
        </div>

        {/* Counter and Unlocked Concept Card */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between p-3.5 bg-[#FBF9F5] border border-[#292524]/15 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1C1917]">계약서 필수 조항 탐색 진행도:</span>
              <span className="px-2 py-0.5 bg-white border border-[#292524]/20 font-bold text-[#881337]">
                {checkedCount} / 4 확인
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-[#57534E]">
              <span className={checkedCount >= 1 ? 'text-[#881337] font-bold' : ''}>1/4</span>
              <span>→</span>
              <span className={checkedCount >= 2 ? 'text-[#881337] font-bold' : ''}>2/4</span>
              <span>→</span>
              <span className={checkedCount >= 3 ? 'text-[#881337] font-bold' : ''}>3/4</span>
              <span>→</span>
              <span className={checkedCount >= 4 ? 'text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5' : ''}>
                4/4 {checkedCount >= 4 ? '해금 완료' : ''}
              </span>
            </div>
          </div>

          {/* Unlocked Concept Card #03 */}
          {isCardUnlocked && (
            <div className="p-6 bg-[#FEF2F2] border-2 border-[#B91C1C] space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-[#B91C1C]/20 pb-2">
                <span className="stamp-box px-2 py-0.5 text-xs text-[#B91C1C] border-[#B91C1C] font-mono font-bold">
                  ✨ [개념카드 해금] UNLOCKED CONCEPT CARD #03
                </span>
                <span className="font-mono text-xs font-bold text-[#B91C1C]">4/4 탐색 완료</span>
              </div>
              <h4 className="text-lg font-serif font-black text-[#1C1917]">
                「근로조건의 서면 명시 및 교부 의무」 (근로기준법 제17조)
              </h4>
              <p className="text-xs sm:text-sm font-sans text-[#44403C] leading-relaxed">
                사용자는 근로계약을 체결할 때 임금, 소정근로시간, 주휴일 등 핵심 근로조건을 <strong>서면으로 명시하고 근로자의 요구가 없더라도 반드시 1부를 직접 교부</strong>해야 합니다.
                구두 계약이나 서면 미교부는 근로기준법 위반으로 사용자가 형사처벌이나 과태료 대상이 되며, 청소년에게도 성인과 똑같이 보장됩니다.
              </p>
            </div>
          )}
        </div>

        {/* Contract Paper Mockup */}
        <div className="border border-[#292524]/30 bg-[#FFFDF9] p-6 sm:p-8 shadow-xs relative">
          <div className="text-center border-b border-[#292524]/20 pb-4 mb-6">
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917] tracking-widest uppercase">
              표 준 근 로 계 약 서
            </h4>
            <p className="text-xs font-mono text-[#78716C] mt-1">
              (사업주와 근로자 간의 근로조건 서면 명시 의무 준수용)
            </p>
          </div>

          <div className="space-y-4 font-sans">
            {CONTRACT_PARTS.map((part) => {
              const isMarked = issue03State.markedContractParts.includes(part.id);
              return (
                <div
                  key={part.id}
                  id={`contract-part-${part.id}`}
                  onClick={() => toggleContractPart(part.id)}
                  className={`p-3.5 border transition-all cursor-pointer rounded-xs ${
                    isMarked
                      ? 'border-[#B91C1C] bg-[#FEF2F2] shadow-2xs'
                      : 'border-[#292524]/10 bg-white hover:border-[#1C1917]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-bold text-[#1C1917] block">
                        {part.field}
                      </span>
                      <p className={`text-sm ${isMarked ? 'red-pen-underline text-[#1C1917] font-medium' : 'text-[#44403C]'}`}>
                        {part.content}
                      </p>
                    </div>

                    {/* Red correction pen annotation */}
                    {isMarked ? (
                      <div className="shrink-0 text-left sm:text-right font-serif text-xs text-[#B91C1C] font-bold animate-in fade-in duration-200">
                        <span>{part.annotation}</span>
                        <span className="block text-[10px] text-[#78716C] font-mono font-normal">
                          {part.legalBasis}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[11px] font-mono text-[#A8A29E] shrink-0">
                        [ 클릭하여 확인 ]
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Accuracy Callout */}
          <div className="mt-6 pt-4 border-t border-dashed border-[#292524]/20 p-4 bg-[#F9F7F1] text-xs text-[#44403C] space-y-1.5">
            <span className="font-mono font-bold text-[#881337] block">
              ⚖️ 현행 근로기준법상 구분의 핵심 (법적 정확성)
            </span>
            <p>
              근로기준법 제17조 제1항에 따른 <strong>‘명시해야 하는 근로조건’</strong>(임금, 소정근로시간, 주휴일, 연차휴가, 취업장소, 종사업무 등) 중에서도,
              동조 제2항에 따라 <strong>‘반드시 서면으로 명시하여 근로자에게 교부(전달)해야 하는 필수 사항’</strong>은 임금의 구성항목·계산방법·지급방법, 소정근로시간, 주휴일, 연차유급휴가 등입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SCENE 05: 휴게시간 */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">SCENE 05</span>
            <span className="font-serif font-bold text-lg sm:text-xl text-[#1C1917]">
              「손님 없을 때 앉아 있었잖아」
            </span>
          </div>
          <span className="font-mono text-xs text-[#78716C]">BREAK TIME VS WAITING TIME</span>
        </div>

        {/* Short dialogue interview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-[#FBF9F5] border border-[#292524]/15 space-y-1">
            <span className="font-mono text-xs font-bold text-[#78716C] uppercase">
              EMPLOYER (사장)
            </span>
            <p className="font-serif text-lg text-[#1C1917]">
              “손님 없을 때 의자에 편하게 앉아 있었잖아. 그게 쉬는 시간이지, 따로 쉴 시간이 어디 있어?”
            </p>
          </div>

          <div className="p-5 bg-white border-2 border-[#881337]/30 space-y-1">
            <span className="font-mono text-xs font-bold text-[#881337] uppercase">
              WORKER (근로자)
            </span>
            <p className="font-serif text-lg text-[#1C1917]">
              “그런데 손님이 오면 곧바로 일어나서 주문받고 일해야 했어요. 밖에도 못 나갔고요.”
            </p>
          </div>
        </div>

        <div className="py-2">
          <p className="font-serif italic text-lg text-[#881337] font-semibold">
            질문: “'일을 하지 않은 순간'과 법적인 의미의 '휴게시간'은 항상 같을까요?”
          </p>
        </div>

        {/* CONCEPT NOTE on Rest vs Waiting */}
        <div className="p-5 bg-[#F2EFE8] border border-[#292524]/15 space-y-3">
          <span className="font-mono text-xs font-bold text-[#881337] uppercase">
            CONCEPT NOTE : 대기시간 vs 휴게시간
          </span>
          <p className="font-sans text-sm text-[#292524] leading-relaxed">
            근로기준법 제54조에 따른 휴게시간은 <strong>근로자가 사용자의 지휘·감독에서 완전히 벗어나 자유롭게 이용할 수 있는 시간</strong>이어야 합니다.
            비록 일을 하지 않고 앉아 대기하고 있더라도, 손님이 오면 바로 응대해야 하거나 사업장을 떠날 수 없다면 이는 휴게시간이 아니라 <strong>‘대기시간(근로시간)’</strong>에 해당합니다.
          </p>
          <div className="font-mono text-xs text-[#57534E]">
            법정 기준: 근로시간 4시간인 경우 30분 이상 / 8시간인 경우 1시간 이상의 휴게시간을 근로시간 도중에 주어야 합니다.
          </div>
        </div>

        {/* Student Investigation Checklist */}
        <div className="space-y-3">
          <p className="text-xs font-mono font-bold text-[#57534E] uppercase">
            CHECKLIST : 이 사례를 법적으로 판단하기 위해 추가로 확인하고 싶은 사실을 선택하세요.
          </p>

          <div className="space-y-2">
            {REST_TIME_FACT_CHECKS.map((check) => {
              const isChecked = issue03State.restTimeChecks.includes(check.id);
              return (
                <div
                  key={check.id}
                  id={`fact-check-${check.id}`}
                  onClick={() => toggleRestFact(check.id)}
                  className={`p-3 border flex items-start gap-3 transition-all cursor-pointer ${
                    isChecked
                      ? 'border-[#881337] bg-[#881337]/5 font-medium'
                      : 'border-[#292524]/15 bg-white hover:border-[#1C1917]'
                  }`}
                >
                  <div className="mt-0.5">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-[#881337]" />
                    ) : (
                      <Square className="w-4 h-4 text-[#A8A29E]" />
                    )}
                  </div>
                  <span className="text-sm text-[#292524]">{check.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="rest-time-input" className="block text-xs font-mono font-bold text-[#57534E] uppercase">
            MY SUMMARY / 나의 메모
          </label>
          <input
            id="rest-time-input"
            type="text"
            value={issue03State.restTimeNote}
            onChange={(e) => {
              const val = e.target.value;
              onUpdateIssue03((prev) => ({ ...prev, restTimeNote: val }));
            }}
            placeholder="자유 이용 가능 여부와 대기시간에 대해 정리한 내용을 적어보세요."
            className="w-full bg-[#FBF9F5] border border-[#292524]/20 p-3 text-sm text-[#1C1917] focus:outline-hidden focus:border-[#881337] focus:bg-white"
          />
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          id="issue03-prev-btn"
          onClick={() => {
            onPrevIssue('issue-02');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-mono text-[#57534E] hover:text-[#1C1917] cursor-pointer"
        >
          ← PREVIOUS: ISSUE 02
        </button>

        <div className="flex items-center gap-3">
          <span className={`text-[11px] font-mono px-2 py-0.5 border ${
            isCardUnlocked
              ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
              : 'bg-stone-100 border-stone-200 text-stone-600'
          }`}>
            {isCardUnlocked ? 'CHAPTER 03 COMPLETE ✓' : `계약서 4개 탐색 (${checkedCount}/4)`}
          </span>

          <button
            id="issue03-next-btn"
            disabled={!isCardUnlocked}
            onClick={() => {
              if (isCardUnlocked) {
                onNextIssue('issue-04');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-serif font-bold tracking-wider transition-all ${
              isCardUnlocked
                ? 'bg-[#1C1917] hover:bg-[#881337] text-white cursor-pointer shadow-xs'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
            }`}
          >
            <span>{isCardUnlocked ? 'CONTINUE TO ISSUE 04' : '계약서 4/4 확인 후 이동'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </article>
  );
};
