export type IssueId =
  | 'cover'
  | 'toc'
  | 'issue-01'
  | 'issue-02'
  | 'issue-03'
  | 'issue-04'
  | 'issue-05'
  | 'issue-06'
  | 'my-edition';

export interface Scene01State {
  markedElements: string[]; // '숫자' | '사회적 불리함' | '차별 경험' | '권력 관계'
  checkedConcept: boolean;
  completed?: boolean;
}

export interface Scene02State {
  markedPhrases: string[]; // '학생들은' | '책임감이 부족해서' | '원래' | '잘 안 뽑습니다'
  studentThought: string;
  checkedFeedback?: boolean;
  completed?: boolean;
}

export interface Issue02State {
  activeLens: 'none' | 'formal' | 'substantive' | 'both';
  stepStairNote: string;
  specialTreatmentLens: 'none' | 'formal' | 'substantive';
  specialTreatmentNote: string;
  // Chapter 2 A/B/C judgment activity
  answersABC?: {
    a: 'formal' | 'substantive' | null;
    b: 'formal' | 'substantive' | null;
    c: 'formal' | 'substantive' | null;
  };
  submittedABC?: boolean;
  completedABC?: boolean;
}

export interface Issue03State {
  markedContractParts: string[]; // 'wage' | 'hours' | 'holiday' | 'place' | 'written_delivery'
  conceptCardUnlocked?: boolean;
  restTimeChecks: string[]; // fact check items
  restTimeNote: string;
  submittedRestScene?: boolean;
  completed?: boolean;
}

export interface Issue04State {
  readDetailsOpen: boolean;
  selectedKeyword: string | null;
  case01Marks: string[]; // '17세' | '17:00' | '24:00' | '카페'
  case01Judgement: string;
  case01Submitted?: boolean;
  case02Numbers: string[]; // '17' | '8' | '40'
  sortedCards: { [key: string]: 'worker' | 'under18' | null };
  comparedFile: boolean;
  sortSubmitted?: boolean;
  activeClippingArticle: string | null;
  completed?: boolean;
}

export interface Issue05State {
  matchedRights: { [sceneId: string]: 'organize' | 'negotiate' | 'act' | null };
  matchedRightsSubmitted?: boolean;
  selectedTogetherKeywords: string[];
  revealedThinkConcept: boolean;
  togetherSubmitted?: boolean;
  completed?: boolean;
}

export interface Issue06State {
  markedSentences: string[];
  selectedClueForConcept: string | null;
  clueConceptMap: { [clueText: string]: string[] };
  fileRecords: {
    clue: string;
    concept: string;
    rationale: string;
  }[];
  finalCaseSubmitted?: boolean;
  completed?: boolean;
}

export interface AppState {
  activeIssue: IssueId;
  studentName: string;
  schoolClass: string;
  editionTitle: string;
  keySentence: string;
  scene01: Scene01State;
  scene02: Scene02State;
  issue02: Issue02State;
  issue03: Issue03State;
  issue04: Issue04State;
  issue05: Issue05State;
  issue06: Issue06State;
  // Progress & rights score tracking
  progress?: { [key in IssueId]?: boolean };
  rightsIndex?: number;
  unlockedConceptCards?: string[];
}
