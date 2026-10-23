# Temporal Tourism Bureau

**Submission for Autumn of Code — 24-Hour Website Design Competition**
Prompt: *Time Traveler's Tourism Board*
Team: Mohammad Shadab & Samnan

A tourism board for destinations across time, presented as the public-facing website of a fictional government department: the **Temporal Tourism Bureau**, est. 2087. The tone is deadpan officialdom; the visual language is engraved era plates, bone paper, oxblood and burnt-gold ink, passport stamps and security-print microtext on a Swiss grid.

---

## Running the site

No build step, no dependencies, no server required.

1. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).
2. That's it. All styles, scripts and images are local and relative, so the site works directly from `file://`.

For a local server instead:

```bash
cd MohammadShadab_Samnan_AutumnOfCodeDesignCompetition
python -m http.server 8000
# then visit http://localhost:8000
```

The only network request is to Google Fonts. If the competition is judged offline, the site falls back to the system serif/sans/mono stacks declared in `style.css` and remains fully usable.

---

## Pages

| Page | File | What it does |
| --- | --- | --- |
| Home | `index.html` | Bureau front page: hero, live-era departures, standards, procedure, notices, CTA. |
| Era index | `destinations.html` | Eight open eras with live filtering, search and a chronological timeline rail. |
| Era dossier | `era.html` | Deep-dive template for a single era (`?era=mughal`, `?era=cretaceous`, …): itinerary, hazards, climate, pricing and booking hand-off. |
| Advisories | `advisories.html` | Hazard scale, six standing advisories as expandable legal documents, conduct protocol, customs lists, inoculation table. |
| Booking | `booking.html` | Four-step visa application with validation, live pricing, a boarding-pass aside and a filed confirmation. |
| Packing list | `packing.html` | Era-aware checklist: issued kit, what to bring, what to leave, prohibited items and live manifest completeness. |
| Souvenirs | `souvenirs.html` | Authorised gift shop: six certified-inert objects, a live souvenir case tally and customs rules. |
| Diaries | `diaries.html` | Traveller dispatches from six eras, with expandable full texts and bylines. |
| Paradox FAQ | `faq.html` | Twelve deadpan answers from the paradox desk, plus a question-filing form. |
| 404 | `404.html` | "This timeline is not on file" — themed re-routing page. |

### Interactions worth trying

- **Booking (`booking.html`)** — choose an era, party size, class, travel window and insurance. The boarding pass updates live with the reference code, hazard rating, total and 45% deposit. Step 3 validates names, birth year, email, phone, registry number and all three consents. Pressing Enter advances the form rather than skipping review.
- **Packing (`packing.html`)** — switch the destination era to change the era-specific kit, prohibited items and climate. The progress bar, counts and contextual note update as items are checked. `?era=` preselects an era.
- **Souvenirs (`souvenirs.html`)** — add or remove objects from the case; the sticky case bar tallies items and Bureau tender, with a toast confirmation.
- **Era index (`destinations.html`)** — filter by hazard and century, search by name/description, with a result count and empty state.
- **Deep links** — `era.html?era=quiet` and `packing.html?era=quiet` open the relevant era; advisory deep links (`advisories.html#a14b`) expand the matching document.

---

## Structure

```
Participant1_Participant2_AutumnOfCodeDesignCompetition/
├─ index.html
├─ destinations.html
├─ era.html
├─ advisories.html
├─ booking.html
├─ packing.html
├─ souvenirs.html
├─ diaries.html
├─ faq.html
├─ 404.html
├─ assets/
│  ├─ css/style.css          — full design system, components, responsive and print rules
│  ├─ js/
│  │  ├─ data.js             — the eight eras (copy, prices, hazard, kit)
│  │  ├─ main.js             — clock, nav, scroll reveals, ticker, toasts, deep links
│  │  ├─ destinations.js     — filtering, search, timeline
│  │  ├─ era.js              — dossier rendering from the querystring
│  │  ├─ booking.js          — multi-step form, validation, live pricing and pass
│  │  ├─ packing.js          — era-aware checklist and manifest progress
│  │  ├─ souvenirs.js        — souvenir case tally
│  │  └─ faq.js              — question-filing form
│  └─ img/                   — engraved era plates and souvenir catalogue plates
└─ README.md
```

No frameworks, no bundler, no backend, no cookies or storage. Classic scripts are used deliberately so the site runs from `file://`.

---

## Credits

**Typefaces** — served via Google Fonts under the SIL Open Font License:
- **Fraunces** — Undercase Type (Phaedra Charles & Flavia Zimbardi)
- **Archivo** — Omnibus-Type
- **Space Mono** — Colophon Foundry

**Images** — all eight era plates and six souvenir plates are original images generated for this entry with AI (Qoder ImageGen), art-directed to a single sepia copperplate palette. No stock photography, third-party artwork or copyrighted imagery is used.

**Icons, seals, stamps, maps and marks** — drawn as inline SVG for this entry. Typographic textures and paper grain are generated in CSS/SVG (`feTurbulence`), not sourced.

**Code** — written for this entry in plain HTML, CSS and vanilla JavaScript. No UI libraries, icon packs, animation libraries or templates.

**Content** — all bureau names, regulations, advisories, prices, itineraries and traveller diaries are fictional. Any resemblance to real tourism boards, living persons or actual temporal authorities is unintentional.

---

## Accessibility & robustness

- Skip link, landmark structure, labelled form controls, visible focus styles.
- Step changes and errors are announced (`role="alert"`, `aria-current`, `aria-pressed`), and focus moves to the first invalid field.
- Scroll reveals and the ticker respect `prefers-reduced-motion`.
- Layout is checked at 1440, 1024, 768 and 390 px; print styles produce a clean visa/packing sheet.
- The site degrades gracefully without JavaScript: all editorial content, prices and rules are in the HTML; only the interactive tallies and booking flow require it.
