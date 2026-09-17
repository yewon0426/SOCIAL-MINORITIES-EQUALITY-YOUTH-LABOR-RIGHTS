import React, { useState } from 'react';
import { AppState, IssueId } from '../types';
import { Printer, Copy, Check, Sparkles, BookOpen, Share2, ArrowLeft } from 'lucide-react';

interface MyEditionProps {
  state: AppState;
  onUpdateStudentInfo: (name: string, schoolClass: string) => void;
  onUpdateEditionTitle: (title: string) => void;
  onUpdateKeySentence: (sentence: string) => void;
  onSelectIssue: (issue: IssueId) => void;
}

const TITLE_SUGGESTIONS = [
  '우리가 당연하게 지나친 권리의 장면들',
  '같은 규칙은 왜 언제나 공정하지 않을까',
  '청소년도 온전한 노동자다',
  '형식의 잣대를 넘어 실질의 존엄으로',
];

export const MyEdition: React.FC<MyEditionProps> = ({
  state,
  onUpdateStudentInfo,
  onUpdateEditionTitle,
  onUpdateKeySentence,
  onSelectIssue,
}) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const summary = `
[ RIGHTS FILE : SPECIAL EDITION ]
발행인: ${state.studentName || '통합사회2 학생'} (${state.schoolClass || '방과후 수업'})
에디션 표제: 「${state.editionTitle || '우리가 당연하게 지나친 권리의 장면들'}」

■ 내가 남긴 한 줄의 기록 (KEY SENTENCE)
“${state.keySentence || '모든 인간이 실질적으로 동등한 권리를 누릴 수 있도록 제도를 살피는 눈을 기른다.'}”

■ 사건 탐구 기록 (EVIDENCE FILES)
1. 사회적 소수자 (ISSUE 01):
   - 단서: ${state.scene01.markedElements.join(', ') || '사례 단서 수집 완료'}
   - 생각: ${state.scene02.studentThought || '편견이 아닌 실질적 구별의 필요성'}

2. 평등의 두 렌즈 (ISSUE 02):
   - 계단 관찰: ${state.issue02.stepStairNote || '형식적 평등과 실질적 평등의 구분'}
   - 시험 편의: ${state.issue02.specialTreatmentNote || '조건의 차이를 보정하는 실질적 기회'}

3. 청소년 노동권 (ISSUE 03 & 04):
   - 근로계약 확인 항목: ${state.issue03.markedContractParts.length}개 법정 필수항목
   - 18세 미만 특별 보호: ${state.issue04.case02Numbers.join(', ')}시간 점검 및 법정 기준 대조

4. 종합 분석 (ISSUE 06):
   - 발견한 문제: ${state.issue06.markedSentences.length}개 핵심 단서 도출

--------------------------------------------
통합사회2 AFTER CLASS / RIGHTS FILE PORTFOLIO
`.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 print:hidden">
        <button
          onClick={() => onSelectIssue('issue-06')}
          className="flex items-center gap-1.5 text-xs font-mono text-[#57534E] hover:text-[#1C1917] cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO ISSUE 06</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopySummary}
            className="flex items-center gap-2 bg-white border border-[#292524]/20 hover:border-[#1C1917] px-4 py-2 text-xs font-mono text-[#1C1917] transition-all cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#881337]" />
                <span>COPY TEXT DOSSIER</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-[#1C1917] hover:bg-[#881337] text-white px-5 py-2 text-xs font-serif font-bold tracking-wider transition-all cursor-pointer shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PRINT / SAVE AS PDF</span>
          </button>
        </div>
      </div>

      {/* EDITABLE FORM (Screen only) */}
      <div className="bg-[#F2EFE8] border border-[#292524]/20 p-6 space-y-4 print:hidden">
        <span className="font-mono text-xs font-bold text-[#881337] uppercase block">
          PORTFOLIO CUSTOMIZATION / 학생 발행물 편집
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="font-mono text-[#57534E] block mb-1">
              학생 성명 (EDITOR NAME)
            </label>
            <input
              type="text"
              value={state.studentName}
              onChange={(e) => onUpdateStudentInfo(e.target.value, state.schoolClass)}
              placeholder="예: 홍길동"
              className="w-full bg-white border border-[#292524]/20 p-2.5 text-sm focus:outline-hidden focus:border-[#881337]"
            />
          </div>

          <div>
            <label className="font-mono text-[#57534E] block mb-1">
              학급 / 번호 (CLASS / NO.)
            </label>
            <input
              type="text"
              value={state.schoolClass}
              onChange={(e) => onUpdateStudentInfo(state.studentName, e.target.value)}
              placeholder="예: 1학년 3반 15번"
              className="w-full bg-white border border-[#292524]/20 p-2.5 text-sm focus:outline-hidden focus:border-[#881337]"
            />
          </div>
        </div>

        <div>
          <label className="font-mono text-xs text-[#57534E] block mb-1">
            나의 에디션 표제 선택 또는 직접 입력 (TITLE)
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {TITLE_SUGGESTIONS.map((sug) => (
              <button
                key={sug}
                onClick={() => onUpdateEditionTitle(sug)}
                className="text-[11px] px-2.5 py-1 bg-white border border-[#292524]/15 hover:border-[#881337] cursor-pointer text-[#44403C]"
              >
                {sug}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={state.editionTitle}
            onChange={(e) => onUpdateEditionTitle(e.target.value)}
            placeholder="에디션의 메인 헤드라인을 입력하세요."
            className="w-full bg-white border border-[#292524]/20 p-2.5 text-sm font-serif font-bold text-[#1C1917] focus:outline-hidden focus:border-[#881337]"
          />
        </div>

        <div>
          <label className="font-mono text-xs text-[#57534E] block mb-1">
            나의 생각 기록 (KEY SENTENCE / 한 줄의 통찰)
          </label>
          <textarea
            value={state.keySentence}
            onChange={(e) => onUpdateKeySentence(e.target.value)}
            rows={2}
            placeholder="이 매거진을 탐구하며 가장 기억에 남은 깨달음이나 권리에 대한 생각을 남겨보세요."
            className="w-full bg-white border border-[#292524]/20 p-2.5 text-sm font-serif text-[#1C1917] focus:outline-hidden focus:border-[#881337]"
          />
        </div>
      </div>

      {/* THE SPECIAL EDITION POSTER / BACK COVER PRINTABLE CANVAS */}
      <section
        id="printable-poster"
        className="bg-white border-4 border-[#1C1917] p-8 sm:p-14 shadow-lg space-y-10 relative overflow-hidden"
      >
        {/* Subtle Watermark Stamp */}
        <div className="absolute top-10 right-10 pointer-events-none opacity-10 font-serif font-black text-8xl sm:text-9xl text-[#1C1917] select-none -rotate-12">
          RIGHTS
        </div>

        {/* 1. Header Stamp Block */}
        <div className="border-b-2 border-[#1C1917] pb-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#78716C]">
            <span className="stamp-box px-2.5 py-1 font-bold text-[#881337] border-[#881337] bg-white">
              RIGHTS FILE : SPECIAL EDITION
            </span>
            <span>ISSUE 01 — 06 COMPREHENSIVE DOSSIER</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#78716C] uppercase block">
                EDITOR IN CHIEF (탐구 학생)
              </span>
              <p className="text-xl sm:text-2xl font-serif font-bold text-[#1C1917]">
                {state.studentName || '통합사회2 학생'}
                <span className="text-sm font-sans font-normal text-[#57534E] ml-2">
                  ({state.schoolClass || '방과후 수업'})
                </span>
              </p>
            </div>

            <div className="text-left sm:text-right font-mono text-xs text-[#78716C]">
              <span>DATE: {new Date().toLocaleDateString('ko-KR')}</span>
              <span className="block">CLASSIFICATION: COMPLETED</span>
            </div>
          </div>
        </div>

        {/* 2. Main Title */}
        <div className="py-2 space-y-3">
          <span className="font-mono text-xs tracking-widest text-[#881337] uppercase font-bold">
            SPECIAL REPORT HEADLINE
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#1C1917] leading-tight">
            「{state.editionTitle || '우리가 당연하게 지나친 권리의 장면들'}」
          </h1>
        </div>

        {/* 3. KEY SENTENCE BANNER (The Student's Voice) */}
        <div className="p-6 sm:p-8 bg-[#FBF9F5] border-l-4 border-[#881337] space-y-2">
          <span className="font-mono text-xs tracking-wider text-[#881337] uppercase font-bold">
            KEY SENTENCE : 나의 기록과 시선
          </span>
          <blockquote className="text-lg sm:text-xl font-serif italic text-[#1C1917] font-medium leading-relaxed">
            “{state.keySentence || '모든 인간이 실질적으로 동등한 권리를 누릴 수 있도록, 일상의 당연한 규칙들을 비판적으로 살피는 눈을 기른다.'}”
          </blockquote>
        </div>

        {/* 4. 3 KEY EVIDENCE FILES (Student's Findings Matrix) */}
        <div className="space-y-4">
          <span className="font-mono text-xs tracking-widest text-[#78716C] uppercase font-bold block border-b border-[#292524]/15 pb-2">
            THREE CRITICAL EVIDENCE FILES FROM THE JOURNEY
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            {/* File 1: Minority & Equality */}
            <div className="p-4 bg-white border border-[#292524]/20 space-y-2">
              <span className="font-mono text-xs font-bold text-[#881337] block">
                FILE 01 / EQUALITY
              </span>
              <h4 className="font-serif font-bold text-sm text-[#1C1917]">
                형식적 평등과 실질적 평등
              </h4>
              <p className="text-[#57534E] leading-relaxed">
                {state.issue02.stepStairNote ||
                  '모두에게 똑같은 계단을 적용하는 것은 기계적 평등일 뿐, 이동 약자의 접근권을 보장하는 경사로 설치가 실질적 평등이다.'}
              </p>
            </div>

            {/* File 2: Labor Contract & Protection */}
            <div className="p-4 bg-white border border-[#292524]/20 space-y-2">
              <span className="font-mono text-xs font-bold text-[#881337] block">
                FILE 02 / YOUTH LABOR
              </span>
              <h4 className="font-serif font-bold text-sm text-[#1C1917]">
                15세와 18세, 그리고 근로계약
              </h4>
              <p className="text-[#57534E] leading-relaxed">
                {state.issue04.case01Judgement ||
                  '청소년도 원칙적인 근로자이며, 18세 미만자는 1일 7시간·주 35시간 제한 및 야간근로 원칙적 제한 등 추가 보호를 받는다.'}
              </p>
            </div>

            {/* File 3: Labor 3 Rights & Collective Power */}
            <div className="p-4 bg-white border border-[#292524]/20 space-y-2">
              <span className="font-mono text-xs font-bold text-[#881337] block">
                FILE 03 / COLLECTIVE
              </span>
              <h4 className="font-serif font-bold text-sm text-[#1C1917]">
                노동 3권과 실질적 인권 보장
              </h4>
              <p className="text-[#57534E] leading-relaxed">
                {state.issue06.fileRecords[0]?.rationale ||
                  '힘의 비대칭을 극복하고 대등하게 교섭하기 위해 헌법은 단결권·단체교섭권·단체행동권을 부여하여 인간의 존엄을 지킨다.'}
              </p>
            </div>
          </div>
        </div>

        {/* 5. Editorial Verification Stamp & Signatures */}
        <div className="pt-8 border-t-2 border-[#1C1917] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs">
          <div className="space-y-1">
            <span className="text-[#78716C] block">CURRICULUM MAPPING</span>
            <p className="font-serif text-[#1C1917]">
              고등학교 1학년 통합사회2 · 사회적 소수자와 인권 · 청소년 노동권
            </p>
          </div>

          <div className="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-[#292524]/20 pt-4 sm:pt-0 sm:pl-6">
            <div className="text-center space-y-1">
              <span className="text-[10px] text-[#78716C] block">VERIFIED BY</span>
              <div className="stamp-box px-3 py-1 font-bold text-[#1C1917]">
                RIGHTS FILE
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-[#78716C] block">STUDENT SIGNATURE</span>
              <div className="border-b border-[#1C1917] w-32 h-6 flex items-end justify-center font-serif text-sm font-bold text-[#1C1917]">
                {state.studentName ? `${state.studentName} (서명)` : '________________'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restart / Re-explore Footer */}
      <footer className="text-center pt-6 print:hidden">
        <button
          onClick={() => {
            onSelectIssue('cover');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-mono text-[#78716C] hover:text-[#1C1917] underline cursor-pointer"
        >
          매거진 표지로 돌아가기 (RETURN TO COVER)
        </button>
      </footer>
    </article>
  );
};
