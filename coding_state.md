# Coding State: The Penance Sprint (Arcane Forge)

## Objective
Resolve 13 'heresies' identified by The Inquisitor in the Arcane Forge app.

## Task Checklist
- [x] 1. Cleanup: Delete `dnd-item-creator.html` (not found — already absent)
- [x] 2. CSS Extraction: Move inlined CSS from `index.html` to `styles.css`
- [x] 3. Surgical CSS: Remove 8 redundant `touch-action: pan-y` (kept on html,body root)
- [x] 4. Layout Refactor: Replace `width: 500%` carousel with toggle system ✅ SPRINT B
- [x] 5. SVG Optimization: Lazy-loading for inline SVG data arrays ✅ SPRINT B
- [x] 6. DOM Optimization: Replace high-impact `innerHTML` rebuilds with targeted updates ✅ SPRINT B
- [x] 7. Version Control: Initialize git repository — commit f31ab42
- [ ] 8. Linting: Implement consistent formatting standard
- [ ] 9. State Safety: Schema versioning and validation for `restoreState()`
- [x] 10. Responsiveness: Multi-breakpoint layout (768px+, 1080px+) ✅ SPRINT C
- [x] 11. Visual Consistency: Standardize SVG heights via CSS variable ✅ SPRINT C
- [x] 12. Browser Compatibility: Fallback for `color-mix()` ✅ SPRINT C
- [ ] 13. Identification: Identify the 13th heresy

## Current Phase: Sprint C Complete

### Sprint C Changes (The Final Polish)

#### ✅ Objective 1: Responsive Layout Overhaul
**Full multi-breakpoint responsive system implemented:**

**CSS changes (`styles.css`):**
- Added `@media (min-width: 768px)` — Tablet two-column layout:
  - `.panels-track` becomes `display: grid; grid-template-columns: 1fr 1fr`
  - Build panel (left) + Preview panel (right) always visible side-by-side
  - Powers/Visual/Lore tabs swap into the left column
  - Build & Preview nav tabs hidden (both panels always shown)
  - Larger visual canvas (280px), card art (160px), bigger card text
  - `:root` CSS variable overrides: `--svg-canvas-h: 280px; --svg-card-h: 160px`
- Added `@media (min-width: 1080px)` — Desktop three-column layout:
  - `.panels-track` becomes `display: grid; grid-template-columns: 1fr 1fr 1fr`
  - Build (left) + active center tab (powers/visual/lore) + Preview (right)
  - Larger visual canvas (320px), card art (180px)
  - Bigger type grid icons, more input padding
  - `:root` CSS variable overrides: `--svg-canvas-h: 320px; --svg-card-h: 180px`
- Existing `@media (min-width: 520px)` preserved (centered phone with shadow)

**JS changes (`index.html`):**
- `switchTab()` now detects viewport width via `window.matchMedia('(min-width: 768px)')`
  - On wide screens: only swaps middle-column tabs (powers/visual/lore)
  - On mobile: original toggle-all behavior preserved
- `init()` now activates Powers tab in the middle column on wide screens at startup
- `window.addEventListener('resize')` handler transitions between mobile/wide layouts:
  - Entering wide: activates powers tab + ensures build+preview visible
  - Entering mobile: resets to single-column with build tab active

#### ✅ Objective 2: Lazy-Loading Perfection (Zero CLS)
**SVG canvas area now reserves space and shows loading state:**

- Added CSS variables `--svg-canvas-h: 240px` and `--svg-card-h: 140px` in `:root`
- `#visualCanvas svg` and `.card-art-area svg` now use `var(--svg-canvas-h)` / `var(--svg-card-h)`
- `.visual-canvas-wrap` min-height uses `var(--svg-canvas-h)` — space always reserved
- Added `.visual-canvas-wrap.loading` CSS class with animated "Loading visuals..." placeholder
- `@keyframes svg-pulse` provides a breathing opacity animation for the loading text
- `initVisual()` now adds `.loading` class to `.visual-canvas-wrap` while SVG data loads
- `.loading` class removed when `loadSVGData()` promise resolves → zero layout shift
- Breakpoint overrides update the CSS variables (not hardcoded heights) for consistency

#### ✅ Objective 3: SITUATIONAL Residue Cleanup
**Two remaining impurities purified:**

1. **Stale CSS comment removed:**
   - Old: `/* Horizontal carousel track — all 5 panels sit side-by-side. switchTab() translates this track... */`
   - New: `/* Panel toggle system - panels hidden by default, .active shows the current panel. Each active panel fills the visible area and scrolls independently. */`

2. **`cardStatBlock` innerHTML → pure DOM API:**
   - Old: `d.innerHTML = '<span class="sv">'+s.val+'</span><span class="sl">'+s.lbl+'</span>';`
   - New: `const sv=document.createElement('span'); sv.className='sv'; sv.textContent=s.val; const sl=document.createElement('span'); sl.className='sl'; sl.textContent=s.lbl; d.appendChild(sv); d.appendChild(sl);`
   - This was the last remaining `innerHTML` in the card rendering pipeline that could be converted to pure DOM API

#### ✅ Bonus: color-mix() Browser Compatibility (Task 12)
**Added `@supports` progressive enhancement:**

- `.rarity-btn.active` now has a fallback `background` and `box-shadow` using `rgba()` values
- `@supports (background: color-mix(in srgb, red 50%, blue))` wraps the `color-mix()` declarations
- Browsers without `color-mix()` support get a generic gold-tinted fallback
- Modern browsers get the dynamic rarity-colored backgrounds as intended

---

### Sprint B Changes (The Engine) — for reference

#### ✅ Objective 1: Refactor DOM Updates (innerHTML → targeted)
**6 innerHTML rebuilds replaced with surgical DOM API updates:**

1. **`cardStatBlock`** — Was `innerHTML = stats.map(...)`, now pure DOM API (further refined in Sprint C)
2. **`cardProperties`** — Now builds each property element with `createElement`/`textContent`/`appendChild`
3. **`cardCurse`** — Now uses `createElement`/`textContent`/`appendChild`
4. **`summaryChips`** — Now uses `addChip()` helper with DOM API
5. **`renderVisualPickers`** — Now builds each picker row with DOM API
6. **`renderLibrary`** — Now builds each library item with DOM API

**Kept as innerHTML (justified):** Type grid buttons, `renderProperties`, `cardIcon`, SVG canvas renders, arrow button entities, library icon

#### ✅ Objective 2: SVG Lazy-Loading
SVG data deferred to `svg-data.js`, loaded on demand with deduplication and preload on Visual tab access

#### ✅ Objective 3: Carousel Overhaul
Replaced `width:500%` carousel with toggle system using `.active` class switching