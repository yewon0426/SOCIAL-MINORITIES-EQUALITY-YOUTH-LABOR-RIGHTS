import React, { useState, useEffect } from 'react';
import { AppState, IssueId } from './types';
import { HeaderNavigation } from './components/HeaderNavigation';
import { CoverSection } from './components/CoverSection';
import { TableOfContents } from './components/TableOfContents';
import { Issue01Minority } from './components/issues/Issue01Minority';
import { Issue02Equality } from './components/issues/Issue02Equality';
import { Issue03BeforeYouWork } from './components/issues/Issue03BeforeYouWork';
import { Issue04Under18 } from './components/issues/Issue04Under18';
import { Issue05Together } from './components/issues/Issue05Together';
import { Issue06FinalFile } from './components/issues/Issue06FinalFile';
import { MyEdition } from './components/MyEdition';

const STORAGE_KEY = 'rights_file_magazine_state_v1';

const INITIAL_STATE: AppState = {
  activeIssue: 'cover',
  studentName: '',
  schoolClass: '',
  editionTitle: '우리가 당연하게 지나친 권리의 장면들',
  keySentence: '',
  scene01: {
    markedElements: [],
    checkedConcept: false,
  },
  scene02: {
    markedPhrases: [],
    studentThought: '',
  },
  issue02: {
    activeLens: 'none',
    stepStairNote: '',
    specialTreatmentLens: 'none',
    specialTreatmentNote: '',
  },
  issue03: {
    markedContractParts: [],
    restTimeChecks: [],
    restTimeNote: '',
  },
  issue04: {
    readDetailsOpen: false,
    selectedKeyword: null,
    case01Marks: [],
    case01Judgement: '',
    case02Numbers: [],
    sortedCards: {},
    comparedFile: false,
    activeClippingArticle: null,
  },
  issue05: {
    matchedRights: {},
    selectedTogetherKeywords: [],
    revealedThinkConcept: false,
  },
  issue06: {
    markedSentences: [],
    selectedClueForConcept: null,
    clueConceptMap: {},
    fileRecords: [],
  },
};

export const App: React.FC = () => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...INITIAL_STATE, ...JSON.parse(saved) };
      }
    } catch {
      // ignore storage parsing error
    }
    return INITIAL_STATE;
  });

  // Save state updates to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore storage save error
    }
  }, [state]);

  const handleSelectIssue = (issue: IssueId) => {
    setState((prev) => ({ ...prev, activeIssue: issue }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetData = () => {
    if (window.confirm('작성 중인 모든 기록과 형광펜 표시를 초기화하시겠습니까?')) {
      setState(INITIAL_STATE);
      localStorage.removeItem(STORAGE_KEY);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] flex flex-col paper-texture selection:bg-[#881337] selection:text-white">
      {/* Editorial Header Navigation */}
      <HeaderNavigation
        activeIssue={state.activeIssue}
        onSelectIssue={handleSelectIssue}
        onResetData={handleResetData}
        studentName={state.studentName}
      />

      {/* Main Magazine Page Router */}
      <main className="flex-1 w-full">
        {state.activeIssue === 'cover' && (
          <CoverSection
            onOpenIssue={handleSelectIssue}
            onOpenToc={() => handleSelectIssue('toc')}
            onStartIssue01={() => handleSelectIssue('issue-01')}
          />
        )}

        {state.activeIssue === 'toc' && (
          <TableOfContents
            onSelectIssue={handleSelectIssue}
            activeIssue={state.activeIssue}
          />
        )}

        {state.activeIssue === 'issue-01' && (
          <Issue01Minority
            scene01State={state.scene01}
            onUpdateScene01={(updater) =>
              setState((prev) => ({ ...prev, scene01: updater(prev.scene01) }))
            }
            scene02State={state.scene02}
            onUpdateScene02={(updater) =>
              setState((prev) => ({ ...prev, scene02: updater(prev.scene02) }))
            }
            onNextIssue={handleSelectIssue}
          />
        )}

        {state.activeIssue === 'issue-02' && (
          <Issue02Equality
            issue02State={state.issue02}
            onUpdateIssue02={(updater) =>
              setState((prev) => ({ ...prev, issue02: updater(prev.issue02) }))
            }
            onNextIssue={handleSelectIssue}
            onPrevIssue={handleSelectIssue}
          />
        )}

        {state.activeIssue === 'issue-03' && (
          <Issue03BeforeYouWork
            issue03State={state.issue03}
            onUpdateIssue03={(updater) =>
              setState((prev) => ({ ...prev, issue03: updater(prev.issue03) }))
            }
            onNextIssue={handleSelectIssue}
            onPrevIssue={handleSelectIssue}
          />
        )}

        {state.activeIssue === 'issue-04' && (
          <Issue04Under18
            issue04State={state.issue04}
            onUpdateIssue04={(updater) =>
              setState((prev) => ({ ...prev, issue04: updater(prev.issue04) }))
            }
            onNextIssue={handleSelectIssue}
            onPrevIssue={handleSelectIssue}
          />
        )}

        {state.activeIssue === 'issue-05' && (
          <Issue05Together
            issue05State={state.issue05}
            onUpdateIssue05={(updater) =>
              setState((prev) => ({ ...prev, issue05: updater(prev.issue05) }))
            }
            onNextIssue={handleSelectIssue}
            onPrevIssue={handleSelectIssue}
          />
        )}

        {state.activeIssue === 'issue-06' && (
          <Issue06FinalFile
            issue06State={state.issue06}
            onUpdateIssue06={(updater) =>
              setState((prev) => ({ ...prev, issue06: updater(prev.issue06) }))
            }
            onNextIssue={handleSelectIssue}
            onPrevIssue={handleSelectIssue}
          />
        )}

        {state.activeIssue === 'my-edition' && (
          <MyEdition
            state={state}
            onUpdateStudentInfo={(name, schoolClass) =>
              setState((prev) => ({ ...prev, studentName: name, schoolClass }))
            }
            onUpdateEditionTitle={(title) =>
              setState((prev) => ({ ...prev, editionTitle: title }))
            }
            onUpdateKeySentence={(sentence) =>
              setState((prev) => ({ ...prev, keySentence: sentence }))
            }
            onSelectIssue={handleSelectIssue}
          />
        )}
      </main>

      {/* Editorial Footer (Screen Only) */}
      <footer className="border-t border-[#292524]/15 py-8 bg-[#F5F2EA] text-[#78716C] text-xs font-mono print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-[#1C1917]">RIGHTS FILE</span> · 통합사회2 AFTER CLASS / ISSUE 01
          </div>
          <div className="text-center sm:text-right">
            SOCIAL MINORITIES · EQUALITY · YOUTH LABOR RIGHTS
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
