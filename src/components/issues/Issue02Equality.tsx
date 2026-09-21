import React from 'react';
import { Issue02State, IssueId } from '../../types';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface Issue02EqualityProps {
  issue02State: Issue02State;
  onUpdateIssue02: (updater: (prev: Issue02State) => Issue02State) => void;
  onNextIssue: (next: IssueId) => void;
  onPrevIssue: (prev: IssueId) => void;
}

export const Issue02Equality: React.FC<Issue02EqualityProps> = ({
  onNextIssue,
  onPrevIssue,
}) => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      {/* Editorial Header */}
      <header className="border-b-2 border-[#1C1917] pb-6">
        <div className="flex items-center justify-between editorial-label text-[#78716C] mb-3">
          <span>RIGHTS FILE · ISSUE 02</span>
          <span>CURRICULUM NOTE</span>
        </div>
        <h1 className="display-title text-3xl sm:text-5xl text-[#1C1917]">
          FORMAL &amp; SUBSTANTIVE EQUALITY
        </h1>
        <p className="editorial-meta text-sm sm:text-base text-[#881337] mt-2">
          형식적 평등과 실질적 평등
        </p>
      </header>

      {/* Curriculum Note Banner */}
      <section className="bg-white border border-[#292524]/20 p-8 sm:p-10 shadow-2xs space-y-6">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#881337]" />
          <span className="stamp-box px-2.5 py-0.5 text-xs text-[#881337] border-[#881337]">
            학습 완료 안내
          </span>
        </div>

        <h2 className="learning-subheading text-xl sm:text-2xl font-bold text-[#1C1917]">
          본 수업에서 이미 학습을 마친 개념입니다.
        </h2>

        <div className="learning-body text-base sm:text-[17px] text-[#292524] leading-relaxed space-y-3">
          <p>
            ‘형식적 평등’과 ‘실질적 평등’의 기본 개념 및 비교는 교과 정규 수업에서 이미 다루었습니다.
          </p>
          <p>
            이번 방과후 에디션에서는 복습 활동을 생략하고, 다음 핵심 탐구 주제인 <strong>청소년 근로 권리(ISSUE 03)</strong>로 곧바로 이어집니다.
          </p>
        </div>

        <div className="pt-4 border-t border-[#292524]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              onPrevIssue('issue-01');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-xs sm:text-sm editorial-meta text-[#57534E] hover:text-[#1C1917] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>이전: 사회적 소수자 (ISSUE 01)</span>
          </button>

          <button
            type="button"
            id="issue02-skip-next-btn"
            onClick={() => {
              onNextIssue('issue-03');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="learning-btn flex items-center gap-2 px-6 py-3 bg-[#1C1917] hover:bg-[#881337] text-white tracking-wider transition-all cursor-pointer shadow-xs"
          >
            <span>청소년 근로 파트로 바로 이동하기 (ISSUE 03)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </article>
  );
};
