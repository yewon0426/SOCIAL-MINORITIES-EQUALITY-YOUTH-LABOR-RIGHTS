import React from 'react';
import { IssueId } from '../types';
import { TOC_ITEMS } from '../data/curriculumData';
import { ArrowRight, FileCheck, Layers, BookMarked } from 'lucide-react';

interface TableOfContentsProps {
  activeIssue: IssueId;
  onSelectIssue: (issue: IssueId) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  activeIssue,
  onSelectIssue,
}) => {
  return (
    <div className="py-12 px-4 sm:px-10 max-w-5xl mx-auto">
      {/* TOC Header */}
      <div className="border-b-2 border-[#1C1917] pb-4 mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] font-bold text-[#881337] uppercase">
            EDITORIAL INDEX
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-[#1C1917] mt-1">
            TABLE OF CONTENTS
          </h2>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs text-[#78716C] block">
            ISSUE 01 / 2026 EDITION
          </span>
          <span className="text-xs text-[#57534E]">
            총 6개의 탐구 이슈와 1개의 종합 사건 기록
          </span>
        </div>
      </div>

      {/* Grid of Issues styled like magazine index entries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {TOC_ITEMS.map((item) => {
          const isSelected = activeIssue === item.id;
          return (
            <div
              key={item.id}
              id={`toc-card-${item.id}`}
              onClick={() => {
                onSelectIssue(item.id as IssueId);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`p-6 border transition-all cursor-pointer group relative bg-white/80 ${
                isSelected
                  ? 'border-[#881337] shadow-md ring-1 ring-[#881337]'
                  : 'border-[#292524]/20 hover:border-[#1C1917] hover:shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-3xl sm:text-4xl font-black text-[#881337]/70 group-hover:text-[#881337] transition-colors leading-none">
                  {item.issueNumber}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase border border-[#292524]/20 px-2 py-0.5 text-[#57534E]">
                  {item.tag}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1C1917] group-hover:text-[#881337] transition-colors">
                  {item.englishTitle}
                </h3>
                <p className="text-sm font-sans text-[#44403C] mt-1.5 leading-relaxed">
                  {item.koreanQuestion}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#292524]/10 flex items-center justify-between text-xs font-mono">
                <span className="text-[#78716C] group-hover:text-[#1C1917] transition-colors">
                  READ &amp; EXPLORE
                </span>
                <span className="text-[#881337] flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                  ENTER →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Special Portfolio Feature Card */}
      <div className="mt-8 p-6 border-2 border-dashed border-[#881337]/50 bg-[#881337]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="stamp-box px-2 py-0.5 text-[10px]">MY PORTFOLIO</span>
            <span className="font-mono text-xs text-[#881337] font-semibold">RIGHTS FILE : MY EDITION</span>
          </div>
          <h4 className="font-serif font-bold text-lg text-[#1C1917]">
            내가 발견한 권리의 장면들과 최종 기록 포스터
          </h4>
          <p className="text-xs text-[#57534E]">
            학습 중 남긴 형광펜과 메모, 최종 사건 분석 기록이 하나의 세련된 포스터로 자동 구성됩니다.
          </p>
        </div>

        <button
          id="toc-my-edition-btn"
          onClick={() => {
            onSelectIssue('my-edition');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="whitespace-nowrap px-5 py-2.5 bg-[#881337] hover:bg-[#1C1917] text-white text-xs font-serif font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
        >
          VIEW MY EDITION →
        </button>
      </div>
    </div>
  );
};
