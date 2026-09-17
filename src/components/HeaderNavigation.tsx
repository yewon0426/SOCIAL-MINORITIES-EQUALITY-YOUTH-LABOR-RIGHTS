import React from 'react';
import { IssueId } from '../types';
import { TOC_ITEMS } from '../data/curriculumData';
import { Bookmark, Menu, ArrowRight, RotateCcw, FileText } from 'lucide-react';

interface HeaderNavigationProps {
  activeIssue: IssueId;
  onSelectIssue: (issue: IssueId) => void;
  onResetAll: () => void;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  activeIssue,
  onSelectIssue,
  onResetAll,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-sm border-b border-[#292524]/15 px-4 sm:px-8 py-3 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Masthead Branding */}
        <div className="flex items-center gap-3">
          <button
            id="nav-logo-btn"
            onClick={() => {
              onSelectIssue('cover');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-[0.2em] font-semibold text-[#881337] uppercase font-mono">
                ISSUE 01 / 2026
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#292524]/40" />
              <span className="hidden sm:inline-block text-[11px] tracking-wider text-[#57534E]">
                통합사회2 AFTER CLASS
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#1C1917] group-hover:text-[#881337] transition-colors leading-none mt-0.5">
              RIGHTS <span className="italic font-normal">FILE</span>
            </div>
          </button>
        </div>

        {/* Current Issue pill & actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:flex items-center gap-1 border-x border-[#292524]/10 px-3">
            {TOC_ITEMS.map((item) => {
              const isActive = activeIssue === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => {
                    onSelectIssue(item.id as IssueId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-2.5 py-1 text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1C1917] text-[#FBF9F5] font-medium'
                      : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#E7E3D8]/60'
                  }`}
                >
                  {item.issueNumber}
                </button>
              );
            })}
          </div>

          {/* Quick jump to My Edition */}
          <button
            id="nav-my-edition-btn"
            onClick={() => {
              onSelectIssue('my-edition');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-serif font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeIssue === 'my-edition'
                ? 'bg-[#881337] text-white'
                : 'border border-[#881337] text-[#881337] hover:bg-[#881337]/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">MY EDITION</span>
            <span className="sm:hidden">나의 기록</span>
          </button>

          {/* Table of contents drawer toggle */}
          <button
            id="nav-toc-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[#292524]/20 hover:bg-[#E7E3D8]/50 text-[#1C1917] cursor-pointer"
            aria-label="목차 열기"
          >
            <Menu className="w-4 h-4" />
            <span className="font-mono text-[11px] tracking-wider">CONTENTS</span>
          </button>
        </div>
      </div>

      {/* Dropdown Menu Modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1C1917]/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-[#FBF9F5] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#292524]/20 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#292524]/15">
                <div>
                  <span className="text-[10px] tracking-[0.2em] font-mono text-[#881337] uppercase font-bold">
                    INDEX / CONTENTS
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                    RIGHTS FILE
                  </h3>
                </div>
                <button
                  id="close-menu-btn"
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 text-xs font-mono text-[#78716C] hover:text-[#1C1917] border border-[#292524]/20 cursor-pointer"
                >
                  CLOSE ✕
                </button>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  id="menu-cover-btn"
                  onClick={() => {
                    onSelectIssue('cover');
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left p-3 border border-[#292524]/10 hover:border-[#1C1917] hover:bg-white transition-all cursor-pointer group"
                >
                  <span className="text-[10px] font-mono text-[#78716C] tracking-wider">COVER</span>
                  <p className="text-sm font-serif font-bold text-[#1C1917] group-hover:text-[#881337]">
                    표지 및 오늘의 탐구 질문
                  </p>
                </button>

                {TOC_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    id={`menu-item-${item.id}`}
                    onClick={() => {
                      onSelectIssue(item.id as IssueId);
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left p-3 border transition-all cursor-pointer group ${
                      activeIssue === item.id
                        ? 'border-[#881337] bg-white shadow-xs'
                        : 'border-[#292524]/10 hover:border-[#292524]/40 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#881337]">
                        ISSUE {item.issueNumber}
                      </span>
                      <span className="text-[10px] font-mono text-[#78716C]">
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-sm font-serif font-bold text-[#1C1917] mt-0.5 group-hover:text-[#881337]">
                      {item.englishTitle}
                    </div>
                    <div className="text-xs text-[#57534E] mt-1 font-sans">
                      {item.koreanQuestion}
                    </div>
                  </button>
                ))}

                <button
                  id="menu-final-edition-btn"
                  onClick={() => {
                    onSelectIssue('my-edition');
                    setMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left p-3 bg-[#881337]/5 border border-[#881337] hover:bg-[#881337]/10 transition-all cursor-pointer group"
                >
                  <div className="text-xs font-mono font-bold text-[#881337] flex items-center justify-between">
                    <span>PORTFOLIO</span>
                    <span>FINAL POSTER</span>
                  </div>
                  <div className="text-sm font-serif font-bold text-[#881337] mt-0.5">
                    RIGHTS FILE : MY EDITION
                  </div>
                  <div className="text-xs text-[#57534E] mt-1">
                    내가 오늘 발견한 권리의 장면들과 최종 기록지
                  </div>
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#292524]/15 flex items-center justify-between">
              <button
                id="reset-notes-btn"
                onClick={() => {
                  if (window.confirm('작성한 모든 기록과 표시를 초기화하시겠습니까?')) {
                    onResetAll();
                    setMenuOpen(false);
                  }
                }}
                className="flex items-center gap-1.5 text-xs text-[#78716C] hover:text-[#991B1B] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>나의 학습 기록 초기화</span>
              </button>
              <span className="text-[10px] font-mono text-[#A8A29E]">2026 EDITION</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
