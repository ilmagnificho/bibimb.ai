# Bibimb.ai Landing Page - PRD (Product Requirements Document)

**Version**: 1.0
**Date**: 2026.02.21
**Purpose**: Claude Code가 이 문서 하나만으로 랜딩페이지를 완성할 수 있도록 작성된 상세 스펙.

---

## 1. 프로젝트 개요

### What
Bibimb.ai의 런칭 전 랜딩페이지. 서비스 컨셉을 설명하고 웨이트리스트 이메일을 수집한다.

### Who
- 타겟 바이어: AI 도구를 찾는 개발자, 인디해커, 스타트업
- 타겟 공급자: AI 프로덕트를 만들어서 팔고 싶은 메이커

### One-liner
**"Every AI product starts FREE for the first 5. Then $4.99. Prices rise as people buy."**

### 핵심 컨셉
비빔밥처럼 다양한 AI 도구를 섞어 쓰는 마켓플레이스.
Kickstarter의 Early Bird 가격 모델을 AI 프로덕트에 적용.

---

## 2. 기술 스택

```
Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS
Deploy: Vercel
Font: Google Fonts (아래 디자인 섹션 참고)
Animation: CSS + Framer Motion (가벼운 수준)
Email 수집: Waitlist form → Supabase (테이블 1개) 또는 외부 서비스(Loops, Resend Audience 등)
Analytics: Vercel Analytics (무료)
```

### 프로젝트 구조

```
bibimb-landing/
├── app/
│   ├── layout.tsx          # 메타데이터, 폰트, 글로벌 스타일
│   ├── page.tsx            # 메인 랜딩페이지 (싱글 페이지)
│   └── api/
│       └── waitlist/
│           └── route.ts    # POST: 이메일 저장
├── components/
│   ├── Hero.tsx            # 히어로 섹션
│   ├── HowItWorks.tsx      # 작동 방식 설명
│   ├── EarlyBirdDemo.tsx   # Early Bird 가격 상승 인터랙티브 데모
│   ├── ForWhom.tsx         # 바이어/공급자 양쪽 가치 제안
│   ├── WaitlistForm.tsx    # 이메일 수집 폼
│   ├── Footer.tsx          # 푸터
│   └── ui/                 # 재사용 컴포넌트 (Button, Badge 등)
├── lib/
│   └── supabase.ts         # Supabase 클라이언트 (or 다른 이메일 저장 방식)
├── public/
│   ├── og-image.png        # OG 이미지 (1200x630)
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 3. 페이지 구조 (싱글 페이지, 위에서 아래)

### Section 1: Hero

**목적**: 3초 안에 "이게 뭔지" 이해시키고, 스크롤하게 만들기

**레이아웃**:
```
[Nav: 로고(Bibimb.ai) ..................... Join Waitlist 버튼]

          Every AI product
          starts FREE 🆓
          
   First 5 users get it free. Then $4.99 ☕
   Prices rise as people buy.

      [🍳 I'm a Buyer]  [🧑‍🍳 I'm a Maker]
         (두 버튼 모두 → waitlist 섹션으로 스크롤)

   "Think Kickstarter Early Bird, but for AI tools."
```

**디자인 디테일**:
- "☕" 이모지는 $4.99 = 커피 한잔 연상
- 히어로 배경: 미묘한 그라디언트 또는 노이즈 텍스처. 순백 배경 금지.
- "🍳 I'm a Buyer" / "🧑‍🍳 I'm a Maker" - 비빔밥/요리 메타포를 이모지로 살짝 표현
- 헤드라인 폰트: 볼드하고 개성 있는 디스플레이 폰트 (예: Outfit, Sora, DM Sans 등 - Inter/Roboto 사용 금지)

### Section 2: How It Works (Early Bird 설명)

**목적**: Early Bird 가격 모델을 직관적으로 이해시키기

**레이아웃**:
```
         How Bibimb.ai Works

   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
   │ 1. List  │  │ 2. Taste │  │ 3. Rise  │  │ 4. Earn  │
   │          │  │          │  │          │  │          │
   │ Maker가  │  │ 처음 5명 │  │ 이후     │  │ 정가에   │
   │ AI 도구를│  │ 무료로   │  │ 사람들이 │  │ 도달하면 │
   │ 올린다.  │  │ 써보고   │  │ 살수록   │  │ 안정적   │
   │ 정가 설정│  │ 리뷰를   │  │ 가격이   │  │ 수익.    │
   │          │  │ 남긴다.  │  │ 올라간다.│  │          │
   │ 시작가는 │  │          │  │ $4.99 →  │  │ 공급자   │
   │ 항상     │  │ 🆓 FREE │  │ $9.99 →  │  │ 수수료   │
   │ FREE 🆓 │  │ 리뷰 필수│  │ $29      │  │ 0%       │
   └──────────┘  └──────────┘  └──────────┘  └──────────┘
```

**디자인 디테일**:
- 3단계를 카드 또는 스텝으로 시각화
- 각 스텝에 작은 아이콘 또는 이모지
- 스크롤 시 순차적으로 등장하는 애니메이션 (staggered fade-in)

### Section 3: Early Bird 인터랙티브 데모

**목적**: 가격 상승을 직접 체험하게 하는 핵심 인터랙션. 이 섹션이 바이럴의 핵심.

**레이아웃**:
```
         See it in action

   ┌─────────────────────────────────────┐
   │  🤖 ExampleBot                      │
   │  "AI meeting summarizer"            │
   │                                     │
   │  Target Price: $29                  │
   │                                     │
   │  🆓 FREE → ☕ $4.99 →       → $29  │
   │  ███░░░░░░░░░░░░░░░░░░  3/5 free   │
   │                                     │
   │  Current Price: FREE                │
   │  🆓 2 free spots left!             │
   │                                     │
   │       [ Get it FREE 🎉 ]           │
   │                                     │
   └─────────────────────────────────────┘

   버튼 클릭하면:
   → 프로그레스바 진행 + sold 카운트업 애니메이션
   → FREE 단계: "You got it FREE! Leave a review to unlock more 🎉"
   → FREE 5명 다 차면 → 가격이 $4.99로 전환 (숫자 애니메이션)
   → $4.99 단계: "You got it for $4.99! Next tier: $9.99"
   → 3초 후 리셋
```

**구현 스펙**:
- React state로 구현 (실제 결제 아님, 데모)
- "Buy" 클릭 시:
  1. 버튼이 "✓ Got it!" 으로 변경 (초록색)
  2. sold 카운트 +1 애니메이션
  3. 프로그레스바 진행
  4. Tier 경계를 넘으면 가격이 점프 (예: 10/10 → $9.99로 변경)
  5. 토스트/메시지: "You got it for $4.99! Next buyer pays $9.99 🎉"
  6. 3초 후 자동 리셋 (또는 "Try again" 버튼)
- Early Bird Tier 구조:
  ```
  Tier 0 (Taster):   0-5명   → FREE (리뷰 필수)
  Tier 1 (Pioneer):  6-15명  → $4.99
  Tier 2 (Early):    16-35명 → $9.99
  Tier 3 (Growth):   36-85명 → $19.99
  Tier 4 (Full):     86+     → $29.00
  ```
- 프로그레스바: 현재 sold/총 85명 기준. Tier 경계에 작은 마커 표시.
- FREE 구간에서는 버튼이 초록색 "Get it FREE 🎉"
- $4.99+ 구간에서는 버튼이 primary 색상 "Buy for $X.XX ☕"

### Section 4: For Whom (바이어 + 공급자 가치)

**목적**: 양면 마켓의 두 고객 모두에게 어필

**레이아웃**: 2-column (모바일에서는 세로 스택)

```
┌─────────────────────┬─────────────────────┐
│  🍳 For Buyers      │  🧑‍🍳 For Makers      │
│                     │                     │
│  ✓ First 5 users    │  ✓ Get your first   │
│    try it FREE      │    5 users + reviews │
│                     │    guaranteed        │
│  ✓ Then just $4.99  │                     │
│    (a coffee ☕)     │  ✓ Set your own     │
│                     │    target price     │
│  ✓ Discover what's  │                     │
│    trending         │  ✓ Zero seller fees │
│                     │                     │
│  ✓ Be early -       │  ✓ Built-in launch  │
│    earliest buyers  │    marketing        │
│    pay the least    │                     │
│                     │  ✓ Early feedback   │
│  ✓ Real reviews     │    from real users   │
│    from real users  │                     │
│  [Join as Buyer →]  │  [List your tool →] │
└─────────────────────┴─────────────────────┘
```

**디자인 디테일**:
- 두 컬럼의 배경색을 미묘하게 다르게 (예: 왼쪽 따뜻한 톤, 오른쪽 쿨 톤)
- 체크마크는 커스텀 아이콘 또는 이모지
- 하단 버튼은 둘 다 → waitlist 섹션으로 스크롤

### Section 5: Waitlist Form (CTA)

**목적**: 이메일 수집. 이 페이지의 유일한 전환 목표.

**레이아웃**:
```
         Be the first to taste it 🍚

   Join the waitlist. Get early access when we launch.

   ┌──────────────────────────────────────────┐
   │                                          │
   │  [  your@email.com  ]                    │
   │                                          │
   │  ○ I want to BUY AI tools               │
   │  ○ I want to SELL my AI product          │
   │  ○ Both                                  │
   │                                          │
   │  [ Join Waitlist 🥢 ]                    │
   │                                          │
   └──────────────────────────────────────────┘

   성공 시: "You're in! 🎉 We'll notify you when Bibimb.ai launches."
   + 현재 웨이트리스트 인원 표시 (optional): "127 people ahead of you"
```

**구현 스펙**:
- 이메일 input (필수, 이메일 validation)
- Role radio: "buyer" | "maker" | "both" (필수)
- Submit → POST /api/waitlist
- 성공: 폼이 성공 메시지로 교체 (애니메이션)
- 실패: 에러 메시지 표시
- 중복 이메일: "You're already on the list! 🎉" (에러 아님, 긍정 메시지)
- 로딩 중: 버튼 스피너

**API 스펙 (POST /api/waitlist)**:
```typescript
// Request
{ email: string; role: "buyer" | "maker" | "both" }

// Response 200
{ success: true; message: string; position?: number }

// Response 409 (중복)
{ success: true; message: "Already registered" }

// Response 400
{ success: false; message: "Invalid email" }
```

**데이터 저장**:
- Option A (추천): Supabase 테이블
  ```sql
  CREATE TABLE waitlist (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    role text NOT NULL CHECK (role IN ('buyer', 'maker', 'both')),
    created_at timestamptz DEFAULT now()
  );
  ```
- Option B: 환경변수에 Google Sheets API 키 넣고 시트에 저장
- Option C: Resend Audience API

어떤 옵션이든 .env.local에 키를 넣는 구조로. 초기에 Supabase 무료 티어 추천.

### Section 6: Footer

```
Bibimb.ai

Built with 🌶️ in Seoul

© 2026 Bibimb.ai · Twitter/X · GitHub
```

- 심플하게. 링크는 Twitter/X만 (있으면 GitHub도)
- "Built with 🌶️ in Seoul" = 한국산 자부심 + 위트

---

## 4. 디자인 시스템

### 색상 (CSS Variables)

```css
:root {
  /* Primary: 비빔밥의 고추장 - 따뜻한 레드/오렌지 계열 */
  --color-primary: #E8432A;        /* 메인 CTA, 강조 */
  --color-primary-hover: #D63820;
  --color-primary-light: #FFF0ED;  /* 배경 하이라이트 */

  /* Secondary: 참기름 - 따뜻한 골드/앰버 */
  --color-secondary: #D4940A;
  --color-secondary-light: #FFF8E6;

  /* Neutral */
  --color-bg: #FAFAF8;            /* 약간 따뜻한 화이트 (순백 금지) */
  --color-bg-card: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-secondary: #6B6B6B;
  --color-border: #E5E5E0;

  /* Accent: 비빔밥 재료 컬러 - 섹션 포인트용 */
  --color-green: #2D8B4E;         /* 시금치 */
  --color-yellow: #F2C94C;        /* 계란 */
  --color-brown: #8B6914;         /* 고기/버섯 */

  /* Early Bird 티어 컬러 */
  --color-tier-1: #E8432A;        /* Pioneer - 레드 */
  --color-tier-2: #D4940A;        /* Early - 골드 */
  --color-tier-3: #2D8B4E;        /* Growth - 그린 */
  --color-tier-4: #6B6B6B;        /* Full - 그레이 */
}
```

### 타이포그래피

```css
/* Display/Heading: 볼드하고 개성 있는 서체 */
/* 추천: "Outfit", "Sora", "Plus Jakarta Sans", "Bricolage Grotesque" 중 택1 */
/* Inter, Roboto, Arial 사용 금지 */

/* Body: 가독성 좋은 서체 */
/* 추천: "DM Sans", "Nunito Sans", "Source Sans 3" 중 택1 */

/* 크기 시스템 */
--text-hero: 4rem;      /* 64px - 히어로 헤드라인 */
--text-h1: 2.5rem;      /* 40px - 섹션 타이틀 */
--text-h2: 1.75rem;     /* 28px - 서브 헤드라인 */
--text-h3: 1.25rem;     /* 20px - 카드 타이틀 */
--text-body: 1rem;      /* 16px - 본문 */
--text-small: 0.875rem; /* 14px - 캡션, 뱃지 */

/* 모바일에서 히어로: 2.5rem, h1: 2rem 등으로 축소 */
```

### 간격/레이아웃

```
섹션 간 간격: 120px (모바일: 80px)
컨텐츠 최대 너비: 1200px (가운데 정렬)
카드 padding: 32px
카드 border-radius: 16px
버튼 border-radius: 12px
버튼 padding: 16px 32px
```

### 애니메이션 원칙

- **페이지 로드**: 히어로 텍스트 staggered fade-in (위에서 아래로, 0.1s 간격)
- **스크롤**: 각 섹션 fade-in-up (IntersectionObserver 또는 Framer Motion whileInView)
- **인터랙션**: 버튼 hover scale(1.02), 프로그레스바 smooth transition
- **데모**: 가격 변경 시 숫자 카운트업 애니메이션
- **과하지 않게**: 애니메이션은 subtle. 파티클/3D/무거운 효과 금지.

---

## 5. 반응형 디자인

### Breakpoints

```
Mobile:  < 768px   (1 column, 축소된 타이포)
Tablet:  768-1024px (적응형)
Desktop: > 1024px   (풀 레이아웃)
```

### 모바일 핵심 변경

- Hero: 헤드라인 2.5rem, 서브텍스트 1rem
- How It Works: 3 column → 세로 스택
- For Whom: 2 column → 세로 스택 (Buyer 먼저)
- Early Bird Demo: 카드 width 100%, padding 축소
- Nav: 로고 + CTA 버튼만 (햄버거 메뉴 불필요 - 싱글 페이지)
- Waitlist Form: full width

---

## 6. SEO / 메타데이터

### 기본 메타

```html
<title>Bibimb.ai - Every AI product starts FREE, then $4.99</title>
<meta name="description" content="A marketplace where AI tools launch FREE for the first 5 users, then $4.99, and prices rise as people buy. Like Kickstarter Early Bird, but for AI products. Discover, compare, and grab AI tools before the price goes up." />
```

### Open Graph

```html
<meta property="og:title" content="Bibimb.ai - Every AI product starts FREE, then $4.99" />
<meta property="og:description" content="First 5 users get AI tools FREE. Then $4.99. Prices rise as people buy. Be early. Pay less." />
<meta property="og:image" content="https://bibimb.ai/og-image.png" />
<meta property="og:url" content="https://bibimb.ai" />
<meta property="og:type" content="website" />
```

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Bibimb.ai - Every AI product starts FREE, then $4.99" />
<meta name="twitter:description" content="First 5 users get AI tools FREE. Then $4.99. Prices rise as people buy." />
<meta name="twitter:image" content="https://bibimb.ai/og-image.png" />
```

### OG Image 설명 (1200x630px)

Claude Code가 OG 이미지를 코드로 생성할 수 없으므로, 대안:
- HTML로 OG 이미지 레이아웃을 만들고 스크린샷하거나
- Vercel OG Image Generation API 사용 (app/api/og/route.tsx)

OG 이미지 내용:
```
배경: 따뜻한 그라디언트 (--color-primary-light → --color-secondary-light)
중앙: "Bibimb.ai" 로고 (큰 텍스트)
하단: "First 5 FREE. Then $4.99 ☕ Prices rise as people buy."
오른쪽 하단: 비빔밥 이모지 🍚 또는 간단한 일러스트
```

### Favicon

- 비빔밥 그릇 이모지(🍚) 스타일의 간단한 아이콘
- 또는 "B" 텍스트를 primary color로

---

## 7. 환경변수

```env
# .env.local

# Supabase (waitlist 저장용)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 8. 배포

```bash
# Vercel CLI로 배포
vercel

# 또는 GitHub repo 연결 후 자동 배포
# 도메인 연결: Vercel Dashboard > Domains > bibimb.ai 추가
```

임시 도메인: `bibimb-landing.vercel.app` (도메인 구매 전)

---

## 9. 성공 기준

| 지표 | 목표 |
|------|------|
| 로딩 속도 | Lighthouse Performance 90+ |
| 모바일 최적화 | Lighthouse Mobile 90+ |
| 웨이트리스트 전환율 | 방문자 대비 5-10% |
| 이탈률 | 60% 미만 |
| 데모 인터랙션 | 방문자 대비 30%+ 클릭 |

---

## 10. 구현 시 주의사항 (Claude Code용)

### DO
- Tailwind CSS 유틸리티 클래스를 적극 활용
- 컴포넌트를 깔끔하게 분리 (위 구조 참고)
- 모든 텍스트는 영어 (글로벌 타겟)
- 이모지를 포인트로 활용 (비빔밥 메타포)
- 다크 모드 불필요 (라이트 모드만)
- 접근성: alt 텍스트, aria-label, 키보드 네비게이션
- 폼 validation은 클라이언트 + 서버 양쪽

### DON'T
- Inter, Roboto, Arial 폰트 사용 금지
- 순백(#FFFFFF) 배경 금지 (약간 따뜻한 톤: #FAFAF8 등)
- 보라색 그라디언트 금지 (AI 클리셰)
- 과도한 애니메이션 금지 (subtle하게)
- 불필요한 라이브러리 설치 금지 (가볍게)
- 히어로에 스톡 이미지/일러스트 사용 금지 (텍스트 + 타이포그래피로 승부)
- 섀도우 과다 사용 금지

### 핵심 인터랙션 우선순위
1. **Early Bird Demo** (가장 중요 - 이게 바이럴의 핵심)
2. **Waitlist Form** (전환 목표)
3. **스크롤 애니메이션** (폴리시)

---

## 11. 요약: Claude Code에게 전달할 핵심 지시

```
Bibimb.ai 랜딩페이지를 만들어줘.

- Next.js 14+ App Router + TypeScript + Tailwind CSS
- 싱글 페이지: Hero → How It Works → Early Bird Demo → For Whom → Waitlist → Footer
- 핵심 인터랙션: Early Bird 가격 상승 데모 (FREE 5명 → $4.99 → ... → 정가 체험)
- 이메일 웨이트리스트 수집 (Supabase)
- 디자인: 비빔밥 테마 (따뜻한 레드/골드, 음식 이모지), Inter 금지, 보라 그라디언트 금지
- Vercel 배포

이 PRD 파일의 모든 스펙을 따라서 구현해줘.
```
