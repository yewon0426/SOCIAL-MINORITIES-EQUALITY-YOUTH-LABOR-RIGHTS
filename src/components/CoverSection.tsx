import React from 'react';
import { IssueId } from '../types';
import { ArrowDown, ArrowRight, BookOpen, Compass, ShieldAlert } from 'lucide-react';

interface CoverSectionProps {
  onOpenIssue?: (target: IssueId) => void;
  onStartIssue01?: () => void;
  onOpenToc?: () => void;
}

export const CoverSection: React.FC<CoverSectionProps> = ({
  onOpenIssue,
  onStartIssue01,
  onOpenToc,
}) => {
  const handleStartIssue01 = () => {
    if (onStartIssue01) {
      onStartIssue01();
    } else if (onOpenIssue) {
      onOpenIssue('issue-01');
    }
  };

  const handleOpenToc = () => {
    if (onOpenToc) {
      onOpenToc();
    } else if (onOpenIssue) {
      onOpenIssue('toc');
    }
  };
  return (
    <div className="min-h-[calc(100vh-60px)] flex flex-col justify-between py-8 px-4 sm:px-10 border-b border-[#292524]/20 bg-[#FBF9F5] paper-texture relative overflow-hidden">
      {/* Editorial Decorative Corner Stamp */}
      <div className="absolute top-6 right-6 hidden md:block">
        <div className="stamp-box px-3 py-1.5 text-[11px] font-mono rotate-2 bg-white/70 shadow-2xs">
          OFFICIAL DOSSIER #01
        </div>
      </div>

      {/* Top Banner / Masthead Intro */}
      <div className="max-w-4xl mx-auto w-full pt-4">
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#1C1917] pb-3 text-[#1C1917]">
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-[#881337]">
            TONGHAP SOCIAL STUDIES II
          </span>
          <span className="font-mono text-xs tracking-widest text-[#57534E]">
            AFTER CLASS MAGAZINE · ISSUE 01
          </span>
        </div>

        {/* Hero Title Section */}
        <div className="mt-12 sm:mt-16 text-center space-y-6">
          <div className="inline-block border border-[#292524]/30 px-3 py-1 text-[11px] font-mono tracking-[0.2em] uppercase text-[#44403C]">
            COMMUNITY &amp; JUSTICE ARCHIVE
          </div>

          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-black tracking-tight text-[#1C1917] leading-none uppercase">
            RIGHTS<br />
            <span className="font-light italic text-[#881337]">FILE</span>
          </h1>

          <div className="pt-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-serif text-[#292524] tracking-normal">
              「우리가 당연하게 지나친 권리의 장면들」
            </p>
          </div>

          {/* Subtitle Subjects */}
          <div className="pt-6 max-w-xl mx-auto border-t border-[#292524]/15">
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#57534E] uppercase font-medium">
              SOCIAL MINORITIES · EQUALITY · YOUTH LABOR RIGHTS
            </p>
            <p className="text-xs text-[#78716C] mt-2 font-mono">
              ISSUE 01 / 2026 EDITION · HIGH SCHOOL SOCIAL STUDIES
            </p>
          </div>
        </div>
      </div>

      {/* Centerpiece: Today's Questions */}
      <div className="max-w-3xl mx-auto w-full my-12 bg-white/90 border border-[#292524]/20 p-6 sm:p-8 shadow-xs relative">
        <div className="absolute -top-3.5 left-6 bg-[#1C1917] text-[#FBF9F5] px-3 py-0.5 font-mono text-[11px] tracking-widest uppercase font-semibold">
          TODAY'S QUESTIONS
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-4">
            <span className="font-serif italic font-bold text-lg text-[#881337]">Q1.</span>
            <p className="font-serif text-base sm:text-lg text-[#1C1917] leading-relaxed">
              “같은 대우는 언제나 공정할까?”
            </p>
          </div>
          <div className="h-[1px] bg-[#292524]/10" />
          <div className="flex items-start gap-4">
            <span className="font-serif italic font-bold text-lg text-[#881337]">Q2.</span>
            <p className="font-serif text-base sm:text-lg text-[#1C1917] leading-relaxed">
              “계약에 동의했다면 모든 근로조건은 정당할까?”
            </p>
          </div>
          <div className="h-[1px] bg-[#292524]/10" />
          <div className="flex items-start gap-4">
            <span className="font-serif italic font-bold text-lg text-[#881337]">Q3.</span>
            <p className="font-serif text-base sm:text-lg text-[#1C1917] leading-relaxed">
              “권리를 가지고 있다는 것과 그 권리를 실제로 행사할 수 있다는 것은 같을까?”
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-dashed border-[#292524]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#57534E]">
          <p className="italic">
            * 퀴즈나 점수가 없습니다. 기사를 읽고, 단서를 찾아 표시하며, 개념을 스스로 연결합니다.
          </p>
          <span className="font-mono text-[11px] text-[#881337] font-semibold">
            READ · MARK · CONNECT · RECORD
          </span>
        </div>
      </div>

      {/* Action Footer: Magazine Index & Enter Button */}
      <div className="max-w-4xl mx-auto w-full pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-[#1C1917] pt-4">
          <div className="text-xs font-mono text-[#78716C] text-center sm:text-left">
            <span>READING TIME: ~25 MIN</span>
            <span className="mx-2">|</span>
            <span>INTERACTIVE DOSSIER</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto relative z-10">
            <button
              id="cover-toc-btn"
              type="button"
              onClick={handleOpenToc}
              className="flex-1 sm:flex-none border border-[#292524]/30 px-5 py-3 text-xs font-mono uppercase tracking-wider text-[#1C1917] hover:bg-white transition-all cursor-pointer text-center"
            >
              TABLE OF CONTENTS
            </button>
            <button
              id="cover-open-issue-btn"
              type="button"
              onClick={handleStartIssue01}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#881337] text-[#FBF9F5] px-7 py-3 text-xs sm:text-sm font-serif font-bold tracking-wider transition-all cursor-pointer"
            >
              <span>→ OPEN ISSUE 01</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
