export interface TableOfContentItem {
  id: string;
  issueNumber: string;
  englishTitle: string;
  koreanQuestion: string;
  tag: string;
}

export const TOC_ITEMS: TableOfContentItem[] = [
  {
    id: 'issue-01',
    issueNumber: '01',
    englishTitle: 'MINORITY ≠ FEW',
    koreanQuestion: '사회적 소수자는 단순히 수가 적은 사람일까?',
    tag: '사회적 소수자 · 차별과 편견',
  },
  {
    id: 'issue-02',
    issueNumber: '02',
    englishTitle: 'SAME ≠ EQUAL',
    koreanQuestion: '똑같이 대하는 것이 언제나 평등할까?',
    tag: '형식적 평등과 실질적 평등',
  },
  {
    id: 'issue-03',
    issueNumber: '03',
    englishTitle: 'BEFORE YOU WORK',
    koreanQuestion: '일을 시작하는 순간 어떤 권리를 가지게 될까?',
    tag: '근로계약서 · 휴게시간 · 근로자의 권리',
  },
  {
    id: 'issue-04',
    issueNumber: '04',
    englishTitle: 'UNDER 18',
    koreanQuestion: '청소년 근로자를 왜 추가로 보호할까?',
    tag: '15세와 18세 · 근로시간 · 야간근로 제한',
  },
  {
    id: 'issue-05',
    issueNumber: '05',
    englishTitle: 'TOGETHER',
    koreanQuestion: '왜 근로자는 함께 행동할 권리를 가질까?',
    tag: '노동 3권 · 힘의 불균형 해소',
  },
  {
    id: 'issue-06',
    issueNumber: '06',
    englishTitle: 'THE FINAL FILE',
    koreanQuestion: '우리가 배운 개념들은 어떻게 연결될까?',
    tag: '지우의 첫 직장 · 실질적인 인권 보장',
  },
];

// Issue 01 Data
export const SCENE_01_FACTORS = [
  { id: '숫자', label: '단순 통계(숫자)', hint: '왼손잡이 학생 비율(약 5%)이라는 수치적 데이터' },
  { id: '사회적 불리함', label: '사회적 불리함', hint: '사회적 관계 및 구조에서 불리한 위치에 놓여 있는가' },
  { id: '차별 경험', label: '차별적 대우 경험', hint: '왼손잡이라는 이유로 배제되거나 불이익을 당하는가' },
  { id: '권력 관계', label: '권력의 열세', hint: '사회적 자원이나 의사결정에서 힘이 열세에 있는가' },
];

export const SCENE_02_PHRASES = [
  { id: '학생들은', text: '학생들은' },
  { id: '책임감이 부족해서', text: '책임감이 부족해서' },
  { id: '원래', text: '원래' },
  { id: '잘 안 뽑습니다', text: '잘 안 뽑습니다.' },
];

// Issue 03 Labor Contract items
export interface ContractPart {
  id: string;
  field: string;
  content: string;
  annotation: string;
  legalBasis: string;
}

export const CONTRACT_PARTS: ContractPart[] = [
  {
    id: 'wage',
    field: '임금 (시급 및 지급방법)',
    content: '시급: 최저임금 이상 지급 / 매월 10일 통장 직접 입금',
    annotation: '← “얼마를 어떻게 받는지” (최저임금 준수 & 전액·직접·통화·정기일 지급 원칙)',
    legalBasis: '근로기준법 제17조 제2항, 최저임금법 제6조',
  },
  {
    id: 'hours',
    field: '소정근로시간',
    content: '주 3일 (월, 수, 금), 17:00 ~ 21:30 (총 4시간 일, 30분 휴게)',
    annotation: '← “언제부터 언제까지 일하는지” (근무일 및 시작·종료 시간 확정)',
    legalBasis: '근로기준법 제17조 제2항, 제69조 (18세 미만 근로시간 원칙)',
  },
  {
    id: 'rest',
    field: '휴게시간',
    content: '19:00 ~ 19:30 (근무 중 30분 자유 이용)',
    annotation: '← “근무 중 언제 자유롭게 쉬는지” (사용자의 지휘·감독에서 온전히 벗어난 시간)',
    legalBasis: '근로기준법 제54조 (4시간 이상 30분, 8시간 이상 1시간 부여)',
  },
  {
    id: 'holiday',
    field: '휴일 및 유급휴일',
    content: '매주 일요일을 주휴일로 지정 (요건 충족 시 주휴수당)',
    annotation: '← “언제 쉬는지, 주휴일은 보장되는지”',
    legalBasis: '근로기준법 제17조 제2항, 제55조',
  },
  {
    id: 'place',
    field: '근무 장소 및 업무 내용',
    content: '근무장소: 카페 매장 / 업무내용: 음료 제조 보조 및 카운터 서빙',
    annotation: '← “어디서 어떤 일을 하는지”',
    legalBasis: '근로기준법 제17조 제1항',
  },
  {
    id: 'delivery',
    field: '서면 명시 및 교부 의무',
    content: '본 계약서는 2부 작성하여 사용자와 근로자가 각 1부씩 보관함',
    annotation: '← “서면으로 작성하여 근로자에게 반드시 교부해야 함”',
    legalBasis: '근로기준법 제17조 제2항 (위반 시 500만원 이하 벌금)',
  },
];

// Issue 04 Keyword Infographic items
export interface Under18Keyword {
  id: string;
  tag: string;
  title: string;
  koreanSummary: string;
  legalDetail: string;
}

export const UNDER18_KEYWORDS: Under18Keyword[] = [
  {
    id: '7hours',
    tag: '7 HOURS / DAY',
    title: '1일 7시간 근로 한도',
    koreanSummary: '18세 미만 근로자의 1일 법정 소정근로시간은 7시간을 넘지 못합니다.',
    legalDetail: '근로기준법 제69조: 성인 근로자(1일 8시간)보다 1시간 짧게 설정하여 성장과 발달, 학업을 보호합니다.',
  },
  {
    id: '35hours',
    tag: '35 HOURS / WEEK',
    title: '1주 35시간 근로 한도',
    koreanSummary: '18세 미만 근로자의 1주 법정 소정근로시간은 35시간을 초과할 수 없습니다.',
    legalDetail: '근로기준법 제69조: 성인(1주 40시간) 대비 5시간 짧습니다. 과도한 주당 노동으로부터 청소년을 보호합니다.',
  },
  {
    id: 'plus1hour',
    tag: '+1 HOUR / DAY',
    title: '1일 연장근로 한도 (+1시간)',
    koreanSummary: '당사자 간 합의가 있더라도 1일에 1시간을 초과하여 연장할 수 없습니다.',
    legalDetail: '근로기준법 제69조 단서: 합의하더라도 하루 최대 근로시간은 8시간(기본 7시간 + 연장 1시간)이 상한입니다.',
  },
  {
    id: 'plus5hours',
    tag: '+5 HOURS / WEEK',
    title: '1주 연장근로 한도 (+5시간)',
    koreanSummary: '당사자 간 합의가 있더라도 1주일에 5시간을 초과하여 연장할 수 없습니다.',
    legalDetail: '근로기준법 제69조 단서: 1주일 최대 총 근로시간은 40시간(기본 35시간 + 연장 5시간)을 절대 넘을 수 없습니다.',
  },
  {
    id: 'night_time',
    tag: '22:00 — 06:00',
    title: '야간근로 시간대 (밤 10시 ~ 오전 6시)',
    koreanSummary: '오후 10시부터 오전 6시까지의 야간근로는 원칙적으로 엄격히 제한됩니다.',
    legalDetail: '근로기준법 제70조 제2항: 심야 노동은 수면권과 건강권을 심각하게 침해하므로 원칙적으로 금지됩니다.',
  },
  {
    id: 'night_holiday',
    tag: 'NIGHT & HOLIDAY WORK',
    title: '야간·휴일근로의 원칙적 제한과 예외',
    koreanSummary: '원칙적으로 일할 수 없으나, 법률상 엄격한 요건을 갖춘 경우에만 예외가 인정됩니다.',
    legalDetail: '예외 요건: ① 18세 미만자의 명시적 동의 + ② 고용노동부장관(관할 고용노동청)의 인가가 모두 있어야만 가능합니다.',
  },
  {
    id: 'hazardous',
    tag: 'HAZARDOUS WORK',
    title: '유해·위험 업무 취업 제한',
    koreanSummary: '도덕상 또는 보건상 유해·위험한 사업에는 18세 미만자를 절대 고용할 수 없습니다.',
    legalDetail: '근로기준법 제65조, 청소년보호법: 유흥주점, 단란주점, 비디오물소극장, 위험물 취급 등 청소년 유해업종 취업 불가.',
  },
];

// Issue 04 Sorting Cards
export interface SortCardItem {
  id: string;
  text: string;
  category: 'worker' | 'under18';
  reason: string;
}

export const SORT_CARDS: SortCardItem[] = [
  {
    id: 'c1',
    text: '최저임금 보장',
    category: 'worker',
    reason: '나이와 관계없이 일하는 모든 근로자에게 공통으로 적용되는 기본 권리입니다.',
  },
  {
    id: 'c2',
    text: '휴게시간 보장 (4시간 30분 / 8시간 1시간)',
    category: 'worker',
    reason: '모든 근로자의 건강과 노동력 재생산을 위한 기본 안전장치입니다.',
  },
  {
    id: 'c3',
    text: '1일 7시간 · 주 35시간 근로시간 제한',
    category: 'under18',
    reason: '18세 미만 연소근로자의 성장과 학습권 보장을 위해 성인보다 짧게 특별 보호합니다.',
  },
  {
    id: 'c4',
    text: '오후 10시 ~ 오전 6시 야간근로 원칙적 제한',
    category: 'under18',
    reason: '신체적·정신적 발달 과정에 있는 18세 미만자의 건강을 위한 추가 보호 규정입니다.',
  },
  {
    id: 'c5',
    text: '임금명세서 교부 의무',
    category: 'worker',
    reason: '임금의 구성항목, 계산방법, 공제내역을 서면·전자문서로 모든 근로자에게 주어야 합니다.',
  },
  {
    id: 'c6',
    text: '유해·위험 업무 고용 금지',
    category: 'under18',
    reason: '18세 미만자의 도덕상·보건상 유해 위험 사업장 취업을 원천 차단하는 특별 조항입니다.',
  },
];

// Issue 04 Extra Clippings
export interface ClippingArticle {
  id: string;
  tag: string;
  title: string;
  summary: string;
  body: string;
  statute: string;
}

export const CLIPPING_ARTICLES: ClippingArticle[] = [
  {
    id: 'art-a',
    tag: 'ARTICLE A',
    title: '학생이면 최저임금을 조금 적게 받아도 될까?',
    summary: '“아직 학생이고 일도 배우는 중이니까 시급을 좀 깎아도 되겠지?”',
    body: '아닙니다. 최저임금법은 나이나 학생 신분을 이유로 임금을 감액할 수 없도록 규정하고 있습니다. 1인 이상 근로자를 사용하는 모든 사업장에서 청소년 근로자에게도 법정 최저임금 이상을 반드시 지급해야 합니다. (수습기간 감액은 1년 이상 계약 등 엄격한 법정 요건과 18세 이상 등에 한하여 제한적으로만 논의됩니다.)',
    statute: '최저임금법 제6조, 근로기준법 제6조',
  },
  {
    id: 'art-b',
    tag: 'ARTICLE B',
    title: '접시를 깨뜨렸다면 사장이 월급에서 바로 빼도 될까?',
    summary: '“일하다가 컵이랑 접시 깼으니까 이번 달 알바비에서 깔게.”',
    body: '절대 안 됩니다. 근로기준법 제43조는 ‘임금 전액 지급의 원칙’을 규정하고 있습니다. 사업주가 손해배상액을 임의로 산정하여 일방적으로 임금에서 공제(상계)하는 것은 불법입니다. 손해배상은 상호 협의나 별도의 민사 절차를 거쳐야 하며, 일한 대가인 임금은 먼저 전액이 근로자에게 지급되어야 합니다.',
    statute: '근로기준법 제43조 (임금 지급 원칙), 제20조 (위약 예정의 금지)',
  },
  {
    id: 'art-c',
    tag: 'ARTICLE C',
    title: '청소년이 할 수 없는 일도 있을까?',
    summary: '청소년의 취업이 법률상 원천 금지된 업종과 직무',
    body: '네, 있습니다. 근로기준법 제65조와 청소년보호법에 따라 18세 미만자는 도덕상·보건상 유해하거나 위험한 사업에 고용될 수 없습니다. 대표적으로 유흥주점, 단란주점, 비디오물소극장, 노래연습장(청소년실 제외), 성인오락실, 안마시술소, 고압가스나 유해화학물질 취급 업종 등에는 고용이 전면 금지됩니다.',
    statute: '근로기준법 제65조 (사용 금지), 청소년보호법 제30조',
  },
  {
    id: 'art-d',
    tag: 'ARTICLE D',
    title: '임금명세서에는 무엇이 적혀 있어야 할까?',
    summary: '일한 만큼 정확하게 받았는지 검증하는 투명한 문서',
    body: '2021년 11월부터 모든 사업주는 임금을 지급할 때 반드시 임금명세서를 교부해야 합니다. 임금명세서에는 ① 성명 및 생년월일, ② 임금 지급일, ③ 총액, ④ 기본급과 각종 수당, ⑤ 근로일수와 근로시간 수(연장·야간·휴일근로시간), ⑥ 세금 및 4대보험 등 공제 항목과 계산 방법이 구체적으로 명시되어야 합니다.',
    statute: '근로기준법 제48조 제2항 (임금명세서 교부 의무)',
  },
];

// Issue 05 3 Rights Matching
export interface LaborRightConcept {
  id: 'organize' | 'negotiate' | 'act';
  code: string;
  name: string;
  definition: string;
  constitutionalBasis: string;
}

export const LABOR_RIGHTS: LaborRightConcept[] = [
  {
    id: 'organize',
    code: 'ORGANIZE',
    name: '단결권',
    definition: '근로자가 근로조건의 유지·개선을 위해 자주적으로 노동조합을 조직하거나 이에 가입할 수 있는 권리',
    constitutionalBasis: '대한민국 헌법 제33조 제1항',
  },
  {
    id: 'negotiate',
    code: 'NEGOTIATE',
    name: '단체교섭권',
    definition: '노동조합의 대표자가 근로조건과 제반 사항에 관하여 사용자와 교섭하고 단체협약을 체결할 수 있는 권리',
    constitutionalBasis: '대한민국 헌법 제33조 제1항',
  },
  {
    id: 'act',
    code: 'ACT',
    name: '단체행동권',
    definition: '근로조건의 향상을 위한 주장을 관철하기 위해 법이 정한 범위 안에서 파업 등 집단적인 쟁의행위를 할 수 있는 권리',
    constitutionalBasis: '대한민국 헌법 제33조 제1항',
  },
];

export const LABOR_RIGHT_SCENES = [
  {
    id: 'scene-org',
    text: '“동료 근로자들과 함께 자주적으로 노동조합을 결성하고 가입했다.”',
    expectedRight: 'organize',
    feedback: '노동조합을 스스로 만들거나 가입하여 힘을 결집하는 행위는 【단결권】에 해당합니다.',
  },
  {
    id: 'scene-neg',
    text: '“노동조합 대표가 회사 측 대표와 마주 앉아 올해의 임금과 휴게조건 개선을 교섭했다.”',
    expectedRight: 'negotiate',
    feedback: '대등한 위치에서 근로조건을 문서로 합의하기 위해 협상하는 행위는 【단체교섭권】입니다.',
  },
  {
    id: 'scene-act',
    text: '“합법적 절차를 거쳤으나 교섭이 결렬되어, 법이 정한 범위 내에서 파업(쟁의행위)에 돌입했다.”',
    expectedRight: 'act',
    feedback: '요구를 평화롭고 합법적으로 관철하기 위해 업무를 집단적으로 중단하는 행위는 【단체행동권】입니다.',
  },
];

// Issue 06 Final File
export interface FinalStorySegment {
  id: string;
  clueKey: string;
  text: string;
  isClickableClue: boolean;
  recommendedConcepts: string[];
  editorialComment: string;
}

export const FINAL_FILE_SEGMENTS: FinalStorySegment[] = [
  {
    id: 's1',
    clueKey: '지우는 17세 고등학생',
    text: '17세 고등학생 지우가 카페 아르바이트에 지원했다. 면접에서 사장은 말했다.',
    isClickableClue: false,
    recommendedConcepts: ['18세 미만 근로자 보호'],
    editorialComment: '17세는 연소근로자(18세 미만)에 해당하여 근로기준법상 특별 보호 대상입니다.',
  },
  {
    id: 's2',
    clueKey: '“학생들은 책임감이 없어서 원래 잘 안 뽑는데…”',
    text: '“학생들은 책임감이 없어서 원래 잘 안 뽑는데….”',
    isClickableClue: true,
    recommendedConcepts: ['편견과 고정관념', '사회적 소수자', '차별과 합리적 구별'],
    editorialComment: '학생이라는 집단 전체에 대한 선입견과 불리한 대우는 편견과 차별의 전형적인 장면입니다.',
  },
  {
    id: 's3',
    clueKey: '근로조건을 제대로 서면으로 확인하지 않은 채 일을 시작했다',
    text: '지우는 채용되었지만 근로조건을 제대로 서면으로 확인하지 않은 채 일을 시작했다.',
    isClickableClue: true,
    recommendedConcepts: ['근로자의 권리', '18세 미만 근로자 보호', '형식적 평등'],
    editorialComment: '근로기준법 제17조에 따라 임금, 소정근로시간, 휴일 등을 서면으로 명시하고 교부받아야 합니다.',
  },
  {
    id: 's4',
    clueKey: '“손님 없을 때 쉬었으니까 따로 쉬는 시간은 없어”',
    text: '근무 중에는 “손님 없을 때 쉬었으니까 따로 쉬는 시간은 없어.”라는 말을 들었다.',
    isClickableClue: true,
    recommendedConcepts: ['휴게시간', '근로자의 권리'],
    editorialComment: '손님 응대 대기시간은 근로시간에 포함되며, 사용자의 지휘·감독을 벗어난 온전한 휴게시간이 아닙니다.',
  },
  {
    id: 's5',
    clueKey: '“오늘만 밤 12시까지 해줘”',
    text: '며칠 뒤 사장은 “오늘만 밤 12시까지 해줘.”라고 부탁했다.',
    isClickableClue: true,
    recommendedConcepts: ['18세 미만 근로자 보호', '야간근로 제한'],
    editorialComment: '18세 미만자의 22시 이후 야간근로는 원칙적으로 금지되며 동의와 노동청 인가가 필수입니다.',
  },
  {
    id: 's6',
    clueKey: '거절하면 근무시간을 줄일까 봐 쉽게 거절하지 못했다',
    text: '지우는 거절하면 앞으로 근무시간을 줄일까 봐 쉽게 거절하지 못했다.',
    isClickableClue: true,
    recommendedConcepts: ['실질적 평등', '사회적 소수자', '근로자의 권리'],
    editorialComment: '계약상 대등해 보여도 경제적·사회적 힘의 비대칭으로 인해 권리를 행사하기 어려운 현실을 보여줍니다.',
  },
  {
    id: 's7',
    clueKey: '“우리 같이 사장님과 이야기해보자”',
    text: '다른 근로자들도 비슷한 문제를 경험하자 “우리 같이 사장님과 이야기해보자.”라고 제안했다.',
    isClickableClue: true,
    recommendedConcepts: ['노동 3권', '실질적인 인권 보장'],
    editorialComment: '개별 근로자의 힘의 열세를 극복하고 연대하여 권리를 지키는 집단적 노동권의 출발점입니다.',
  },
];

export const AVAILABLE_CONCEPTS_FOR_CONNECT = [
  '사회적 소수자',
  '편견과 고정관념',
  '차별과 합리적 구별',
  '형식적 평등',
  '실질적 평등',
  '근로자의 권리',
  '휴게시간',
  '18세 미만 근로자 보호',
  '야간근로 제한',
  '노동 3권',
];
