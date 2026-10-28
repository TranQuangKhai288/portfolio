---
name: "Apple Minimal Luxury & Rauno Craft"
description: "Monolithic typography, expansive negative space, hairline glass materiality, and tactile spring micro-interactions inspired by Apple product storytelling and Rauno Freiberg interaction craft."
colors:
  primary: "#FFFFFF"
  primary-hover: "#E5E5EA"
  background-dark: "#000000"
  background-light: "#FAFAFA"
  surface-dark: "#0A0A0E"
  surface-light: "#FFFFFF"
  surface-elevated-dark: "#121218"
  surface-elevated-light: "#F5F5F7"
  border-hairline-dark: "rgba(255, 255, 255, 0.08)"
  border-hairline-light: "rgba(0, 0, 0, 0.08)"
  text-primary-dark: "#F5F5F7"
  text-primary-light: "#1D1D1F"
  text-secondary-dark: "#86868B"
  text-secondary-light: "#6E6E73"
  signal-blue: "#2997FF"
  signal-emerald: "#30D158"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  spec:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "128px"
---

# Design System: Apple Minimal Luxury & Rauno Craft

## Overview
This design system rejects the dense, boxy admin-dashboard look and generic SaaS card templates. Instead, it is built on the design ethos of Apple product keynotes and Rauno Freiberg's interaction craft:
- **Monolithic typography**: Giant, confident, finely tracked headlines (`-0.035em`) that command authority without screaming.
- **Expansive negative space**: Generous vertical rhythm (`128px` to `160px` between sections) where typography and imagery breathe effortlessly.
- **Cinematic flagship storytelling**: Flagship projects (ZenFlow Spa, Cupid, Tripdata) are showcased as full-bleed product releases with high-fidelity browser frames and quiet engineering specifications, rather than cramped 3-column cards.
- **Tactile micro-interactions**: Spring physics via Motion 14, magnetic button transitions, and fluid floating glass pill navigation.

## Color Palette
- **Deep Obsidian Ground**: `#000000` (Pure black foundation).
- **Surface Elevation**: `#0A0A0E` (Velvet dark) and `#121218` (Elevated focus surface).
- **Primary Text**: `#F5F5F7` (High-contrast titanium white).
- **Secondary Text**: `#86868B` (Refined Apple slate gray for secondary descriptions and specs).
- **Hairline Dividers**: `rgba(255, 255, 255, 0.08)` (Single-pixel hairline seams that divide sections without heavy borders).
- **Functional Accents**:
  - Electric Blue (`#2997FF`): Focused interactive highlights and link states.
  - Hardware Emerald (`#30D158`): Live production status beacon.

## Typography Hierarchy
- **Hero Title**: `text-5xl sm:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.05]`.
- **Section Headlines**: `text-3xl sm:text-5xl font-semibold tracking-[-0.025em] text-white`.
- **Supporting Narrative**: `text-lg sm:text-xl text-[#86868B] font-normal leading-relaxed max-w-2xl`.
- **Engineering Specifications**: Clean, tabular monospace (`JetBrains Mono`) for real numbers, latency figures, and architecture protocols only.

## Layout & Structure
- **Global Container**: Centered `max-w-6xl mx-auto px-6 sm:px-8`.
- **Floating Glass Nav**: Minimalist pill floating centered at the top (`backdrop-blur-2xl bg-black/60 border border-white/10 rounded-full px-5 py-2.5 shadow-2xl`).
- **Full-Bleed Project Releases**: Each flagship project occupies its own cinematic viewport area. Left/Right or stacked asymmetric flow with rich app previews, verified metrics, architecture breakdown, and live/GitHub CTAs.
- **Interactive Craft Sandbox**: Live interactive micro-widgets (spring physics, reactive state, telemetry toggles) demonstrating tangible frontend craft.
- **Minimalist Career Dossier**: Clean chronological timeline with generous spacing and verified enterprise achievements.

## Rules & Standards
- **No nested cards**: Never place a card inside another card. Let whitespace and hairlines create grouping.
- **No kickers / eyebrows**: Eliminate generic "MY WORKS", "ABOUT ME", "FEATURED PROJECTS" tags above headings. Let the headings speak directly.
- **No gradient text**: Headings use pure titanium white `#FFFFFF` or `#F5F5F7`.
- **No rainbow badge soup**: Do not dump 10 colorful skill pill badges on every project. Present tech stacks cleanly as engineering specs.
