import React from 'react';
import { Issue06State, IssueId } from '../../types';
import {
  FINAL_FILE_SEGMENTS,
  AVAILABLE_CONCEPTS_FOR_CONNECT,
} from '../../data/curriculumData';
import {
  Highlighter,
  Link2,
  FileCheck,
  ArrowRight,
  Sparkles,
  BookOpen,
  Scale,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface Issue06FinalFileProps {
  issue06State: Issue06State;
  onUpdateIssue06: (updater: (prev: Issue06State) => Issue06State) => void;
  onNextIssue: (next: IssueId) => void;
  onPrevIssue: (prev: IssueId) => void;
}

export const Issue06FinalFile: React.FC<Issue06FinalFileProps> = ({
  issue06State,
  onUpdateIssue06,
  onNextIssue,
  onPrevIssue,
}) => {
  // Toggle highlighter on a sentence in the story
  const toggleMarkSentence = (segId: string) => {
    onUpdateIssue06((prev) => {
      const exists = prev.markedSentences.includes(segId);
      const newMarked = exists
        ? prev.markedSentences.filter((id) => id !== segId)
        : [...prev.markedSentences, segId];

      // If selecting a new one, make it active for concept assignment
      return {
        ...prev,
        markedSentences: newMarked,
        selectedClueForConcept: exists
          ? prev.selectedClueForConcept === segId
            ? null
            : prev.selectedClueForConcept
          : segId,
      };
    });
  };

  // Toggle concept connection to currently active clue
  const toggleConceptForClue = (clueId: string, conceptName: string) => {
    onUpdateIssue06((prev) => {
      const currentList = prev.clueConceptMap[clueId] || [];
      const exists = currentList.includes(conceptName);
      const updatedList = exists
        ? currentList.filter((c) => c !== conceptName)
        : [...currentList, conceptName];

      const newClueConceptMap = {
        ...prev.clueConceptMap,
        [clueId]: updatedList,
      };

      // Auto update fileRecords
      const newFileRecords = prev.markedSentences.map((sId) => {
        const seg = FINAL_FILE_SEGMENTS.find((s) => s.id === sId);
        const concepts = newClueConceptMap[sId] || [];
        const existingRecord = prev.fileRecords.find((r) => r.clue === (seg?.clueKey || ''));
        return {
          clue: seg?.clueKey || '',
          concept: concepts.join(', ') || '개념 연결 중...',
          rationale: existingRecord?.rationale || seg?.editorialComment || '',
        };
      });

      return {
        ...prev,
        clueConceptMap: newClueConceptMap,
        fileRecords: newFileRecords,
      };
    });
  };

  const activeClueSegment = FINAL_FILE_SEGMENTS.find(
    (s) => s.id === issue06State.selectedClueForConcept
  );

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-16">
      {/* 1. Page Header: Investigative Reporter Desk Dossier */}
      <header className="border-b-2 border-[#1C1917] pb-8 space-y-4">
        <div className="flex items-center justify-between editorial-label text-[#78716C]">
          <span>RIGHTS FILE · ISSUE 06</span>
          <span className="editorial-meta">COMPREHENSIVE CASE STUDY / THE FINAL FILE</span>
        </div>

        <div className="py-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="stamp-box px-2.5 py-1 text-xs editorial-meta">EXHIBIT #F-006</span>
            <span className="editorial-meta text-[#881337] font-bold">CASE INVESTIGATION</span>
          </div>
          <h1 className="display-title text-5xl sm:text-7xl text-[#1C1917]">
            THE FINAL FILE
          </h1>
          <p className="editorial-quote text-xl sm:text-2xl text-[#44403C]">
            「우리가 배운 개념들은 현실에서 어떻게 연결될까?」
          </p>
        </div>
      </header>

      {/* 2. FINAL FILE: 「지우의 첫 직장」 Story & Highlighting Activity */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292524]/20 pb-2">
          <div className="flex items-center gap-2">
            <span className="editorial-label text-[#881337]">
              CASE DOSSIER
            </span>
            <span className="scene-title">
              「지우의 첫 직장」
            </span>
          </div>
          <span className="editorial-meta text-[#78716C]">
            CLICK TO HIGHLIGHT CLUES (단서 형광펜 표시)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Story Article */}
          <div className="lg:col-span-7 bg-white border border-[#292524]/20 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#292524]/10 pb-3 editorial-label text-[#78716C]">
              <span>INVESTIGATIVE REPORT</span>
              <span className="editorial-meta">WITNESS &amp; EVIDENCE</span>
            </div>

            <p className="learning-instruction text-xs text-[#57534E] pb-2">
              * 기사를 꼼꼼히 읽으며 문제의 소지가 있거나 법적으로 검토해야 할 문장을 직접 클릭하여 형광펜을 칠해보세요.
            </p>

            <div className="space-y-4 learning-body text-base sm:text-lg leading-loose text-[#1C1917]">
              {FINAL_FILE_SEGMENTS.map((seg) => {
                const isMarked = issue06State.markedSentences.includes(seg.id);
                const isCurrentActive = issue06State.selectedClueForConcept === seg.id;

                return (
                  <p
                    key={seg.id}
                    id={`story-seg-${seg.id}`}
                    onClick={() => toggleMarkSentence(seg.id)}
                    className={`p-2.5 rounded-xs transition-all cursor-pointer ${
                      isMarked
                        ? isCurrentActive
                          ? 'bg-[#FEF08A] ring-2 ring-[#881337] shadow-xs'
                          : 'bg-[#FEF08A]/75 hover:bg-[#FEF08A]'
                        : 'hover:bg-[#FBF9F5]'
                    }`}
                  >
                    <span>{seg.text}</span>
                    {isMarked && (
                      <span className="ml-2 inline-block editorial-meta text-[10px] text-[#881337] font-bold">
                        [단서 선택됨]
                      </span>
                    )}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Right: MY NOTES & Concept Connecting Studio */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="bg-[#F2EFE8] border border-[#292524]/15 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-[#292524]/20 pb-2">
                <span className="editorial-label text-[#881337] uppercase flex items-center gap-1.5">
                  <Link2 className="w-3.5 h-3.5" />
                  CONNECT CONCEPTS (개념 연결)
                </span>
                <span className="editorial-meta text-[10px] text-[#78716C]">
                  {issue06State.markedSentences.length}개 단서 표시됨
                </span>
              </div>

              {activeClueSegment ? (
                <div className="space-y-3">
                  <div className="p-3 bg-white border border-[#292524]/15">
                    <span className="editorial-meta text-[10px] text-[#78716C] block">
                      현재 선택된 문장 단서:
                    </span>
                    <p className="card-title text-sm text-[#1C1917] mt-1">
                      {activeClueSegment.text}
                    </p>
                  </div>

                  <p className="learning-instruction text-xs text-[#57534E]">
                    이 문장과 연관된다고 생각하는 개념을 아래에서 1개 이상 선택하세요:
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {AVAILABLE_CONCEPTS_FOR_CONNECT.map((concept) => {
                      const assignedList = issue06State.clueConceptMap[activeClueSegment.id] || [];
                      const isAssigned = assignedList.includes(concept);

                      return (
                        <button
                          key={concept}
                          onClick={() => toggleConceptForClue(activeClueSegment.id, concept)}
                          className={`px-2.5 py-1 text-xs learning-body rounded-xs transition-all cursor-pointer border ${
                            isAssigned
                              ? 'bg-[#881337] text-white border-[#881337] font-bold shadow-2xs'
                              : 'bg-white text-[#44403C] border-[#292524]/20 hover:border-[#1C1917]'
                          }`}
                        >
                          {isAssigned && '✓ '}
                          {concept}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 learning-instruction text-[11px] text-[#78716C]">
                    💡 <strong>에디터의 조언:</strong> 하나의 사건은 단 하나의 정답 개념으로만 환원되지 않습니다. 여러 권리 개념이 복합적으로 얽혀 있음을 확인해 보세요.
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center learning-instruction text-xs text-[#78716C] bg-white border border-[#292524]/10">
                  왼쪽 기사에서 형광펜으로 표시할 문장을 먼저 클릭해 보세요. 해당 문장과 연결할 수 있는 개념 팔레트가 활성화됩니다.
                </div>
              )}
            </div>

            {/* List of Marked Clues Summary */}
            {issue06State.markedSentences.length > 0 && (
              <div className="bg-white border border-[#292524]/15 p-4 space-y-2">
                <span className="editorial-label text-[#1C1917] block">
                  내가 발견한 단서 목록 ({issue06State.markedSentences.length}):
                </span>
                <div className="space-y-2">
                  {issue06State.markedSentences.map((sId) => {
                    const seg = FINAL_FILE_SEGMENTS.find((s) => s.id === sId);
                    const concepts = issue06State.clueConceptMap[sId] || [];
                    const isSelected = issue06State.selectedClueForConcept === sId;

                    return (
                      <div
                        key={sId}
                        onClick={() => {
                          onUpdateIssue06((prev) => ({
                            ...prev,
                            selectedClueForConcept: sId,
                          }));
                        }}
                        className={`p-2.5 text-xs border transition-all cursor-pointer rounded-xs ${
                          isSelected
                            ? 'border-[#881337] bg-[#881337]/5 font-medium'
                            : 'border-[#292524]/10 hover:border-[#292524]/40 bg-[#FBF9F5]'
                        }`}
                      >
                        <p className="learning-body text-xs text-[#1C1917] truncate">
                          “{seg?.text}”
                        </p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {concepts.length > 0 ? (
                            concepts.map((c) => (
                              <span
                                key={c}
                                className="bg-[#881337] text-white px-1.5 py-0.5 rounded-2xs editorial-meta text-[10px]"
                              >
                                #{c}
                              </span>
                            ))
                          ) : (
                            <span className="editorial-meta text-[10px] text-[#A8A29E]">
                              + 개념을 연결해 주세요
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* 3. 사건 분석 기록 (Auto-composed Dossier Records) */}
      <section className="p-6 sm:p-8 bg-white border border-[#292524]/20 shadow-2xs space-y-6">
        <div className="flex items-center justify-between border-b border-[#292524]/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="stamp-box px-2 py-0.5 text-[10px] editorial-meta">MY DOSSIER RECORD</span>
            <span className="scene-title">
              RIGHTS FILE : MY EDITION (사건 분석 기록철)
            </span>
          </div>
          <span className="editorial-meta text-[#78716C]">AUTO-COMPOSED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0, 1, 2].map((idx) => {
            const segId = issue06State.markedSentences[idx];
            const seg = FINAL_FILE_SEGMENTS.find((s) => s.id === segId);
            const concepts = segId ? issue06State.clueConceptMap[segId] || [] : [];

            return (
              <div
                key={idx}
                className="p-4 border border-[#292524]/20 bg-[#FBF9F5] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-[#292524]/10 pb-1 editorial-meta text-xs">
                    <span className="font-bold text-[#881337]">FILE 0{idx + 1}</span>
                    <span className="text-[#78716C]">RECORD ITEM</span>
                  </div>

                  <div>
                    <span className="editorial-meta text-[10px] text-[#78716C] block">
                      내가 발견한 문제:
                    </span>
                    <p className="learning-body font-semibold text-sm text-[#1C1917] mt-0.5 min-h-[3rem]">
                      {seg ? seg.text : '(기사에서 단서를 클릭하여 채워보세요)'}
                    </p>
                  </div>

                  <div>
                    <span className="editorial-meta text-[10px] text-[#78716C] block">
                      관련 개념:
                    </span>
                    <p className="editorial-meta text-xs text-[#881337] font-semibold mt-0.5 min-h-[1.5rem]">
                      {concepts.length > 0 ? concepts.join(', ') : '―'}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#292524]/10">
                  <span className="editorial-meta text-[10px] text-[#78716C] block">
                    중요하다고 본 근거:
                  </span>
                  <p className="card-body text-xs text-[#44403C] mt-0.5">
                    {seg ? seg.editorialComment : '단서를 선택하면 법적 근거가 정리됩니다.'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Confirmation Action Button */}
        <div className="pt-4 border-t border-[#292524]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <button
            id="issue06-confirm-btn"
            onClick={() => {
              onUpdateIssue06((prev) => ({
                ...prev,
                finalCaseSubmitted: true,
                completed: true,
              }));
            }}
            className="learning-btn px-6 py-2.5 bg-[#881337] hover:bg-[#1C1917] text-white tracking-wider transition-all cursor-pointer"
          >
            {issue06State.finalCaseSubmitted ? '사건 종합 분석 완료 ✓' : '사건 분석 기록 확인 (내 판단 확인하기) →'}
          </button>
          <span className="learning-instruction text-xs text-[#78716C]">
            * 단서 표시 후 버튼을 누르면 나의 최종 에디션 포스터로 이동할 수 있습니다.
          </span>
        </div>
      </section>

      {/* 4. 최종 개념 연결 (Final Editorial Spread: Substantive Protection) */}
      <section className="p-8 sm:p-12 bg-[#F7F5F0] border-2 border-[#1C1917] space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="editorial-label text-[#881337]">
            SYNTHESIS / 최종 개념 수렴
          </span>
          <h2 className="display-title text-3xl sm:text-5xl text-[#1C1917]">
            HUMAN DIGNITY<br />
            <span className="font-light italic text-[#881337]">&amp;</span> HUMAN RIGHTS
          </h2>
          <p className="learning-instruction text-xs sm:text-sm text-[#57534E]">
            헌법 제10조의 ‘인간의 존엄과 가치’를 향해 나아가는 두 갈래의 법적 보호
          </p>
        </div>

        {/* Dual Stream Flow Merging at Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          {/* Left: Social Minorities Flow */}
          <div className="lg:col-span-5 p-6 bg-white border border-[#292524]/20 space-y-3">
            <span className="editorial-label text-[#881337] block">
              STREAM 01 / SOCIAL MINORITIES (사회적 소수자)
            </span>
            <div className="space-y-2 learning-body text-xs text-[#292524]">
              <div className="p-2 bg-[#FBF9F5] border border-[#292524]/10">
                편견과 고정관념
              </div>
              <div className="text-center text-[#78716C]">↓</div>
              <div className="p-2 bg-[#FBF9F5] border border-[#292524]/10">
                사회적 불리함과 차별 발생
              </div>
              <div className="text-center text-[#78716C]">↓</div>
              <div className="p-2 bg-[#881337]/10 border border-[#881337]/30 font-bold text-[#881337]">
                실질적 평등의 보장 (적극적 개선 조치)
              </div>
            </div>
          </div>

          {/* Center Connector Indicator */}
          <div className="lg:col-span-2 text-center flex lg:flex-col items-center justify-center gap-2">
            <div className="h-8 lg:h-12 w-[1px] bg-[#1C1917]/30 hidden lg:block" />
            <span className="stamp-box px-2 py-1 text-xs whitespace-nowrap bg-white editorial-meta">
              수 렴
            </span>
            <div className="h-8 lg:h-12 w-[1px] bg-[#1C1917]/30 hidden lg:block" />
          </div>

          {/* Right: Workers & Labor Rights Flow */}
          <div className="lg:col-span-5 p-6 bg-white border border-[#292524]/20 space-y-3">
            <span className="editorial-label text-[#881337] block">
              STREAM 02 / WORKERS (근로자와 청소년 노동권)
            </span>
            <div className="space-y-2 learning-body text-xs text-[#292524]">
              <div className="p-2 bg-[#FBF9F5] border border-[#292524]/10">
                사용자와 근로자의 경제적·사회적 힘의 차이
              </div>
              <div className="text-center text-[#78716C]">↓</div>
              <div className="p-2 bg-[#FBF9F5] border border-[#292524]/10">
                근로조건의 법적 강제 보호 + 노동 3권
              </div>
              <div className="text-center text-[#78716C]">↓</div>
              <div className="p-2 bg-[#881337]/10 border border-[#881337]/30 font-bold text-[#881337]">
                청소년(18세 미만) 근로자의 추가적 특별 보호
              </div>
            </div>
          </div>
        </div>

        {/* Final Conclusion Box */}
        <div className="p-6 bg-white border-2 border-[#881337] text-center space-y-3 max-w-2xl mx-auto shadow-xs">
          <span className="editorial-label text-[#881337]">
            SUBSTANTIVE PROTECTION OF HUMAN RIGHTS
          </span>
          <h3 className="editorial-heading text-2xl sm:text-3xl text-[#1C1917]">
            「실질적인 인권 보장」
          </h3>
          <p className="editorial-quote not-italic text-sm sm:text-base text-[#44403C] leading-relaxed">
            “모든 사람이 같은 권리를 가지고 있다는 선언만으로 실질적인 인권이 자동으로 보장되는 것은 아니다.
            사회적 편견과 차별, 힘의 불균형으로 인해 권리를 누리기 어려운 사람들을 위해
            사회는 차별을 줄이고 법과 제도적 장치를 마련한다.”
          </p>
        </div>
      </section>

      {/* Footer Navigation to My Edition */}
      {(() => {
        const chapterCompleted = Boolean(
          issue06State.completed ||
          issue06State.finalCaseSubmitted ||
          issue06State.markedSentences.length > 0 ||
          Object.keys(issue06State.clueConceptMap).length > 0
        );

        return (
          <footer className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              id="issue06-prev-btn"
              onClick={() => {
                onPrevIssue('issue-05');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="editorial-meta text-[#57534E] hover:text-[#1C1917] cursor-pointer"
            >
              ← PREVIOUS: ISSUE 05
            </button>

            <div className="flex items-center gap-3">
              <span className={`text-[11px] editorial-meta px-2 py-0.5 border ${
                chapterCompleted
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 font-bold'
                  : 'bg-stone-100 border-stone-200 text-stone-600'
              }`}>
                {chapterCompleted ? 'CHAPTER 06 COMPLETE ✓' : '단서 표시 또는 분석 확인 후 이동'}
              </span>

              <button
                id="issue06-next-btn"
                disabled={!chapterCompleted}
                onClick={() => {
                  if (chapterCompleted) {
                    onNextIssue('my-edition');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`learning-btn flex items-center gap-2 px-7 py-3.5 transition-all shadow-xs ${
                  chapterCompleted
                    ? 'bg-[#881337] hover:bg-[#1C1917] text-white cursor-pointer'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed border border-stone-300'
                }`}
              >
                <span>OPEN MY EDITION POSTER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </footer>
        );
      })()}
    </article>
  );
};
