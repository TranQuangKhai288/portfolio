---
name: design-engineer-taste
description: Apply high-craft Design Engineer aesthetics (Linear, Vercel, Raycast style) and strictly eliminate generic AI-generated UI patterns ("AI Slop").
---

# Design Engineer Aesthetic & Anti-AI-Slop Rules

When designing or refactoring my portfolio (`khai-tran-software-engineer.id.vn`), you MUST follow these strict visual and architectural guidelines:

## 1. BANNED AI PATTERNS (Strictly Forbidden)
- **NO Generic AI Gradients:** Never use `from-purple-500 to-pink-500`, `from-blue-500 to-cyan-500`, or neon glowing text headings.
- **NO Floating Gradient Blobs:** Do not put giant blurred colorful circles (`blur-3xl opacity-30 bg-purple-600`) behind every section.
- **NO Centered 3-Card Feature Rows:** Avoid the repetitive layout of a centered title + subtitle + 3 identical cards with a big Lucide icon in a colored circle on top.
- **NO Fake Percentage Bars for Skills:** Never render "React 90%", "TypeScript 85%" progress bars. Senior/Mid engineers show skills through architecture diagrams, tech tags, and real metrics.
- **NO Heavy Drop Shadows:** Avoid `shadow-xl` or `shadow-2xl` on dark backgrounds. Use `1px` subtle borders instead.

## 2. COLOR & SURFACE SYSTEM (Monochrome + High-Craft Contrast)
- **Base Palette:** Use deep, warm/neutral zinc or stone tones (`zinc-950` for background, `zinc-900/50` for elevated surfaces) or crisp editorial light mode (`#FAFAFA` background, `#111111` ink).
- **Hairline Borders:** Define structure using `1px solid` semi-transparent borders (`border-white/[0.08]` in dark mode, `border-black/[0.08]` in light mode).
- **Single Intentional Accent:** Use monochromatic text (`zinc-100` for headings, `zinc-400` for body, `zinc-500` for metadata) and at most ONE subtle accent color (e.g., emerald-500 for "Available for work" status dot, or amber-500 for highlights).

## 3. TYPOGRAPHY & HIERARCHY (Swiss Grid & Editorial Precision)
- **Font Pairing:** 
  - Headings & Body: `Geist Sans` or `Inter` with tight tracking on headings (`tracking-tight`, `font-medium` or `font-semibold` instead of `font-extrabold`).
  - Technical Data, Dates, Metrics & Tags: `Geist Mono` or `JetBrains Mono` (`font-mono text-xs uppercase tracking-wider`).
- **Tabular Numbers:** Always apply `tabular-nums` to dates (`06/2025 – Now`) and engineering metrics (`~30% API reduction`, `2–3 to 5–9 tickets/week`).

## 4. LAYOUT & PORTFOLIO SHOWCASE STRATEGY
- **Bento Grid & Exposed Hairlines:** Use asymmetric Bento grids or exposed hairline grids (like Vercel/Linear) where sections share `1px` borders (`divide-y divide-x border-collapse`).
- **Show Architecture, Not Just Screenshots:** Since I am a Fullstack Developer (Frontend-focused) with strong architecture experience:
  - For **Tripdata Vietnam**: Highlight the Web Worker offloading, 30% API call reduction via TanStack Query/Zustand, and the 16-member team MCP/Skill workflow.
  - For **ZenFlow Spa**: Visually illustrate the Zero-Cold-Start edge flow (`Next.js 15` -> `Cloudflare Workers + Hono` -> `Supabase` + `Web Crypto HMAC`).
  - For **Cupid Echo**: Highlight the real-time signaling & WebRTC architecture (`React Native` + `Socket.IO` + `Stream.io`).
- **Micro-interactions:** Use subtle `150ms–200ms` cubic-bezier transitions. Hover states should subtly brighten the border (`hover:border-white/20`) or shift a small arrow icon (`translate-x-0.5 -translate-y-0.5`), never scale the entire card by `scale-105`.

## 5. MANDATORY UI PRIMITIVES USAGE
- **No Static / Bland Containers:** Khi xây dựng `Projects.jsx`, `Skills.jsx` và `Hero.jsx`, BẮT BUỘC phải import và sử dụng các component trong `src/components/ui/` (`AnimatedBeam`, `BentoGrid`, `MagicCard`/`Spotlight`, `InView`/`TextEffect`) thay vì chỉ viết thẻ HTML/Tailwind tĩnh.
  - **`AnimatedBeam`:** Bắt buộc dùng để minh họa luồng dữ liệu kiến trúc (ZenFlow Spa edge pipeline, Tripdata multi-tier worker & API, Cupid Echo WebRTC signaling).
  - **`BentoGrid` & `BentoCard`:** Bắt buộc áp dụng cho khu vực Projects Showcase để tạo bố cục bất đối xứng, hairline border chuẩn Vercel.
  - **`MagicCard` / `Spotlight`:** Bắt buộc dùng cho thẻ kỹ năng (Skills matrix) và các showcase card nhằm tạo hiệu ứng viền sáng 1px radial gradient di theo chuột.
  - **`InView` / `TextEffect`:** Bắt buộc áp dụng cho section headings, hero intro và transition khi cuộn với đường cong chuyển động `cubic-bezier(0.22, 1, 0.36, 1)`.


