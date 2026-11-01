# OpenCode build prompt: Hello Stores

Act as a senior frontend engineer and an experienced brand/UI designer. Build a polished, responsive website for **Hello Stores**, reproducing the supplied website references as closely as practical.

Implement the website in the current repository. Do not stop after proposing a plan, writing a brief, or generating an image. Build real components and interactions, run the application, inspect it at desktop and mobile sizes, and fix the result before handing it back.

## 1. Your reference materials

Read these files before implementing:

- `reference/Hello-Stores-Desktop-Hero.jpg`: the precise visual direction for the opening screen, including colour, typography, image treatment, navigation, spacing and buttons.
- `reference/Hello-Stores-Desktop-Full.jpg`: the complete page composition and section order. This is a long screenshot; inspect individual sections at a useful scale rather than relying only on its thumbnail.
- `reference/design-reference.css`: the original design stylesheet. Use its tokens, font definitions, proportions, breakpoints and detailed component treatments as implementation references. You may reorganise the CSS, but preserve the visual result.
- `public/images/`: the original optimised illustrations.
- `public/fonts/`: the fonts used by the reference, including their licence.
- `public/favicon.svg`: the supplied favicon.

The screenshots show the current design, not an invitation to invent a different direction. Match the design language, section rhythm, typographic hierarchy, image crops and key copy. Implement live HTML/CSS/React; do not place a screenshot over the page as a substitute for building it.

If this repository already has a framework or component system, inspect and respect it. Otherwise use **Next.js App Router, TypeScript, ordinary CSS or CSS Modules, and lucide-react icons**. Use the supplied local fonts instead of substituting an unrelated Google font. Prefer simple CSS and small React components over unnecessary UI or animation dependencies.

The original hosted site has a private access gate. Reproducing that hosting-specific gate is outside this brief. The supplied screenshots and assets are sufficient; do not depend on access to the original URL.

## 2. Business context and scope

**Brand:** Hello Stores.

**Tagline:** Your neighbourhood, connected.

Hello Stores is a neighbourhood retail network being built around independently operated kirana stores. Local entrepreneurs continue running their stores. The proposed network supports them with branding, shared sourcing and supply, store technology, local online discovery and ordering, and neighbourhood delivery.

The first chapter is planned for Kochi, Kerala, India. Communicate this as a planned model and showcase-store rollout, not an already completed nationwide operation.

Primary audiences:

1. Existing kirana owners considering an upgrade.
2. Entrepreneurs exploring a new store.
3. Brands, staples producers and suppliers interested in the network.

Primary conversion: a genuine partnership enquiry.

This version is a brand and partnership website. Explain the customer-ordering concept, but do not add a grocery checkout, shopping cart, customer account system, store locator with invented addresses, payment gateway or operational delivery promises. Do not invent franchise pricing, guaranteed returns, store counts, revenue, testimonials, customer logos, launch dates, phone numbers or email addresses.

## 3. Visual direction

Think of a contemporary **neighbourhood journal**: warm, confident, editorial and rooted in Kerala. It should feel like a distinctive retail brand with a story, not a generic software landing page.

The defining qualities are:

- An immersive illustrated opening that spans the page width.
- Very large geometric sans-serif headings paired with warm italic serif emphasis.
- Deep forest green, warm cream and confident yellow colour fields.
- Spacious sections with thin rules, small editorial labels and numbered chapters.
- Original Kerala neighbourhood illustrations, with familiar shopkeepers and customers.
- Flat, carefully composed surfaces with small corner radii, restrained shadows, an occasional tilted paper note and sun/ray motifs.
- A strong visual rhythm: green cover → yellow ribbon → cream story → yellow network explorer → cream owner principles → green Kochi chapter → cream FAQs → green partnership section → deeper green footer.

Avoid replacing this with a generic two-column hero containing a rounded image card, floating statistics, repeated feature cards, glossy gradients, glassmorphism, purple/blue accents, neon, excessive pills, stock photography or emoji decoration.

### Colour tokens

| Token | Value | Main use |
|---|---|---|
| Forest green | `#094B3B` | Header, hero, partnership and launch backgrounds; primary ink |
| Deep green | `#063C30` | Footer and dark accents |
| Warm cream | `#F8F5E9` | Main page background and light text |
| Paper | `#FFFDF3` | Enquiry surface |
| Yellow | `#F4CE42` | Main CTAs, network section, ribbon and serif emphasis in dark sections |
| Ink | `#194837` | Text on light sections |
| Muted green | `#74816E` | Supporting copy |
| Rule/border | `#D9DECE` | Thin separators and light borders |

Use green overlays on illustrations, not a solid green rectangle that hides the illustration entirely. Maintain readable contrast over the hero image.

### Typography

Register the supplied fonts with `@font-face`:

| File | Intended role |
|---|---|
| `hello-regular.otf` | Body copy and normal UI text |
| `hello-bold.otf` | Bold UI labels and body emphasis |
| `hello-display.otf` | Bold geometric sans-serif headings and wordmark |
| `hello-editorial.otf` | Warm italic serif words and phrases |

Keep `public/fonts/LICENSE.txt` with the distributed fonts.

Desktop design targets:

- Main container: maximum 1280px with about 56px side space at the reference viewport.
- Main hero heading: approximately 100px, line-height about 1.01, letter-spacing about -4.6px.
- Hero serif line: approximately 108% of the sans heading size, italic, yellow.
- Main section headings: roughly 60–65px with tight but readable line-height.
- Normal descriptive text: approximately 13–16px with generous line-height; match each section to the reference CSS.
- Editorial labels: uppercase, small, widely tracked and visually quiet.
- Desktop section spacing: approximately 112px vertically, reducing at smaller widths.

Use fluid sizing and the reference breakpoints to avoid clipping. On phones, keep hero headings around 42–52px and section headings around 34–39px. Form fields must use at least 16px text on mobile. Do not enlarge every small caption into a heading; preserve the deliberate hierarchy.

## 4. Original asset mapping

Copy the supplied `public/` assets into the actual application public directory and reference them locally.

| File | Use |
|---|---|
| `hello-neighbourhood.webp` | Immersive hero background: connected Kerala neighbourhood |
| `original-store.webp` | Original kirana in the comparison slider |
| `hello-store.webp` | Hello-branded concept store in the comparison slider and social preview |
| `shared-supply.webp` | Service 01: shared sourcing, warehouse and replenishment |
| `store-technology.webp` | Service 02: organised store and connected billing |
| `order-online.webp` | Service 03: local shop on a customer's phone |
| `local-delivery.webp` | Service 04 and Kochi launch image |
| `happy-neighbours.webp` | Additional supplied brand illustration; optional, not a reason to add an extra section |

Use `object-fit: cover` with intentional focal points. The online-ordering image needs a crop that preserves the woman and phone; the reference uses approximately `34% center` for that service panel. The hero uses approximately `65% 50%` on desktop.

Do not recreate these illustrations with CSS or replace them with loosely related AI images. They are already provided. Use images as artwork within the layout; headings, buttons, captions and controls must be live text and UI.

## 5. Exact page structure and content

Build a single page with these anchor targets:

- `#our-story`
- `#network`
- `#for-store-owners`
- `#kochi`
- `#questions`
- `#partner`

### A. Announcement strip and sticky navigation

Announcement strip: warm cream, about 30px high on desktop.

- Left: **Local roots. New possibilities.**
- Right: map-pin icon, **FIRST CHAPTER: KOCHI, KERALA**, small diagonal arrow; link to `#kochi`.

Header: forest green, about 87px high on desktop, sticky at the top with a subtle border and restrained backdrop blur.

- Left: lowercase cream **hello** wordmark, three short yellow rays to its right, and small widely tracked **STORES** below.
- Beside it on desktop: **Your neighbourhood, / connected.**, separated by a fine vertical rule.
- Navigation: **Our story**, **The Hello way**, **For store owners**, **FAQs**.
- Yellow button: **Let’s grow together**, with an up-right arrow. Scroll to `#partner`.

Mobile: hide the small tagline and inline navigation, preserve the wordmark and compact yellow CTA, and show a menu button. The expanded menu must contain real anchor links and a CTA, close after selecting a link, support keyboard use and expose its expanded state.

### B. Immersive illustrated hero

Desktop: approximately 700px tall, forest-green foundation, full-width neighbourhood illustration, and layered gradients that make the left side readable while keeping the right-hand stores, people and delivery van visible.

Small label with a yellow dot:
**A FRESH CHAPTER FOR THE LOCAL KIRANA**

Main heading, exactly two editorial lines:

**Small stores.**
*Big possibilities.*

The first line is large cream geometric sans-serif. The second is larger warm italic serif in yellow. Preserve this contrast and the composition in the hero screenshot.

Supporting copy:

> Your neighbourhood already has something special. We’re helping it grow. Familiar local shops, connected to a whole new world of supply, technology and opportunity.

Primary yellow CTA: **Bring Hello to my store**, with the arrow inside a small green square at the button’s right end. Select the existing-store partnership type and scroll to the enquiry section.

Secondary link: **Take a look around**, with a downward arrow, linking to the story.

Two specific visual details:

1. A small tilted yellow circular seal in the upper-right image area: **INDEPENDENT AT HEART. CONNECTED BY HELLO.** Include a sun motif and a subtle dashed inner ring.
2. A slightly rotated cream paper note toward the lower right. Its content is **A NEW KIND OF TOGETHER.**, then **Your store. / Your community. / A bigger tomorrow.**, and small **THE HELLO STORES VISION** below a rule.

Bottom editorial line across the hero:

- **THE NEIGHBOURHOOD EDIT** with a little **VOL. 01** outlined label.
- **Rooted in Kerala. Built around you.**
- A circular downward-arrow link to the story.

On mobile, follow the reference treatment rather than squeezing the desktop composition: text at the top of a green cover, illustration occupying the lower portion, no paper note, smaller seal, compact CTA and an accessible circular down-arrow link. Keep the complete headline legible without horizontal overflow.

### C. Yellow brand ribbon

A yellow horizontal strip, approximately 58px high on desktop and 48px on mobile. Repeat this sequence with small green sun motifs between phrases:

**LOCAL OWNERS — SHARED SUPPLY — FAMILIAR FACES — NEW POSSIBILITIES**

A slow continuous horizontal motion is appropriate. Respect reduced-motion preferences and provide a usable pause mechanism if the ribbon moves continuously. Give assistive technology one readable version rather than repeated decorative text.

### D. Story and interactive store comparison

Warm cream background.

Top thin rule and small labels:

- **01 / THE FAMILIAR, REIMAGINED**
- **GOOD STORES. HAPPIER NEIGHBOURS.**

Heading:

**A new chapter.**
*The same familiar face.*

Supporting copy:

> Every neighbourhood has that one shop. The owner knows your name. You know where to find them.
>
> Hello Stores is being built to give those local businesses more support, while keeping everything that makes them special.

Desktop: heading and paragraph group form an asymmetric two-column editorial row. Below them, a large comparison image spans the container, roughly 443px tall at the reference size.

Use the original store and Hello store illustrations at identical container dimensions. Place one over the other and reveal them with a vertical boundary. Default value: **48% original store, 52% Hello store**. The divider has a cream circular handle with a horizontal double-arrow icon.

Image labels:

- Left: **THE FAMILIAR KIRANA**.
- Right: **THE HELLO CHAPTER**, with a small sun.

Actual controls below:

- **Before Hello**: show the original store.
- **Compare**: return to the 48/52 comparison.
- **With Hello**: show the Hello store.

Instruction: **Drag to discover what’s possible.**
Caption: **An illustrated look at the Hello Stores model.**

Implement pointer, touch and native keyboard control. A native range input with an accessible label and meaningful value text is suitable. Do not create a static divider that only looks draggable. Avoid blocking normal vertical scrolling on touch devices. These are concept illustrations, not evidence of an actual photographed store refurbishment.

Closing row: sun motif, **New tools. Shared supply. / The local heart stays.**, and a circular arrow linking to the network section.

### E. Yellow network explorer

Large yellow background section.

Top labels:

- **02 / THE POWER OF TOGETHER**
- **ONE STORE. A WHOLE NETWORK.**

Heading:

**A whole lot behind**
*your little shop.*

Supporting line:

> You take care of the neighbourhood. Here’s how the Hello model takes care of the everyday.

Four real tabs across the top on desktop:

1. **Stock your shelves**
2. **Simplify your day**
3. **Go online**
4. **Deliver locally**

Each tab has a small number, line icon and a diagonal arrow. The active tab uses cream and visually connects to the panel below. On mobile arrange tabs in a two-by-two grid.

The panel is a large illustrated split composition, not a small feature card: artwork on the left and cream content on the right. Stack these on mobile. Use the following complete tab data.

**01 — Supply that comes to you**

- Heading: **Fuller shelves. Fewer market trips.**
- Copy: A shared supply network brings everyday essentials to your doorstep, so you can spend more of the day doing what you do best: running your store.
- Points: **Central sourcing**, **Storefront replenishment**, **Everyday essentials**.
- Image: `shared-supply.webp`.

**02 — A smarter everyday store**

- Heading: **A familiar store, with a fresh start.**
- Copy: Welcoming shelves, useful variety and simple billing and stock tools. The Hello model connects everyday sales to replenishment, keeping your next delivery in view.
- Points: **Organised shelves**, **Connected billing**, **Stock visibility**.
- Image: `store-technology.webp`.

**03 — Your shop, now online**

- Heading: **The local shop. On their phone.**
- Copy: Bring the neighbourhood relationship online. Customers can discover their nearby Hello Store and browse everyday essentials, with orders picked at the store they already know.
- Points: **Local discovery**, **Online ordering**, **Store-based picking**.
- Image: `order-online.webp`.

**04 — The neighbourhood, delivered**

- Heading: **From your counter to their doorstep.**
- Copy: Make your store a nearby delivery point. Local orders stay connected to your shop, bringing the convenience of delivery to the personal touch of neighbourhood retail.
- Points: **Nearby orders**, **Local fulfilment**, **Familiar faces**.
- Image: `local-delivery.webp`.

Each panel shows a small **THE HELLO CONNECTION / 0N** image label, an active **0N / 04** counter and a **NEXT CONNECTION** button that advances and wraps from 04 to 01. Changing a tab must update the image, category, headline, paragraph, points and counter together. Implement accessible tab roles, selected states, focus handling and arrow-key navigation.

Bottom line: **Independent stores. Connected possibilities.** / sun / **The owner stays at the centre.**

### F. Owner principles

Warm cream background, thin rules and generous whitespace.

Labels:

- **03 / MADE FOR LOCAL HEROES**
- **YOUR STORE. YOUR NEXT CHAPTER.**

Heading:

**Your name on the door.**
*Our network behind it.*

A green circular diagonal-arrow CTA leads to the existing-store enquiry.

Three editorial columns, each with a small number, line icon, heading and paragraph. Use thin top rules rather than three rounded filled cards.

**01 — Stay the familiar face.**

> Your relationships and local knowledge are what make your store special. They stay at the heart of it.

**02 — Get more behind you.**

> Explore shared supply, a welcoming store identity, and simpler tools for billing and stock.

**03 — Open another door.**

> Bring your store to nearby customers’ phones, with orders picked and fulfilled locally.

Mobile: turn these into a comfortable vertical list with the icon beside each text group.

Closing line: **A familiar business. A fresh possibility.**
Link: **Let’s talk about your store**.

### G. Kochi chapter

An edge-to-edge green and illustrated split section. Green copy on the left, neighbourhood delivery illustration on the right.

Label: **OUR FIRST CHAPTER**, with a location icon.

Heading:

**First stop,**
*Kochi.*

Use a large yellow italic serif for “Kochi.” and a small sun nearby.

Copy:

> Every movement starts with a neighbourhood. Ours begins in Kochi, with showcase stores planned to bring the Hello experience to life.

CTA: **Be part of the first chapter**.
Small line: **KOCHI, KERALA · ROOTED HERE. GROWING TOGETHER.**
Image label: **THE NEIGHBOURHOOD, DELIVERED.**

Use `local-delivery.webp`. On mobile place the green copy above a substantial illustration, not a tiny thumbnail.

### H. FAQs

Cream section, two-column layout on desktop and stacked on mobile.

Label: **04 / A LITTLE CLARITY**.
Heading: **Good questions. / Straight answers.**, with the second line in italic serif.
Small aside: **A new way to grow. / Let’s make it simple.**, beside a sun.

Accordion questions and answers:

1. **What is Hello Stores?**
   Hello Stores is a neighbourhood retail network being built around locally run kirana stores. The model brings branding, shared supply, simple store technology and local online shopping together, while keeping the store owner at the centre.
2. **Can my existing kirana store join?**
   Yes. Upgrading existing kiranas is part of the Hello Stores plan. Register your interest with your store name and city so the team can explore your location, store needs and the next steps with you.
3. **Who runs a Hello Store?**
   Local entrepreneurs run their stores. Hello Stores is designed to support them with a connected brand, supply network and store systems, while they continue to serve the neighbourhood they know.
4. **Where is Hello Stores launching?**
   The first chapter is planned for Kochi, with showcase stores demonstrating the connected experience. You can also register interest from another city as the network develops.
5. **What are the investment and partnership terms?**
   Investment, store requirements, commercial terms and timelines will be discussed directly with interested partners. This website does not promise a fixed investment, return or launch date.
6. **Can brands and suppliers work with Hello Stores?**
   Yes. Brands, staples producers and suppliers can register interest in the shared supply network. Choose “Brand or supplier” in the enquiry form and add your business name.

Use numbered rows, thin separators and plus/minus icons. Native `details`/`summary` or a properly accessible accordion is suitable. Opening an item should reveal the actual answer. Maintain usable focus states and keyboard behaviour.

### I. Partnership section

Forest-green background. Large expressive heading on the left; a warm paper enquiry form on the right. On mobile stack them.

Label: **05 / A NEW CONNECTION STARTS HERE**.

Heading with deliberate line breaks:

**Put a little**
*hello* **in your**
**next chapter.**

“hello” is yellow italic serif. The final period can be yellow.

Copy:

> Own a kirana? Starting a new store? Have products our neighbourhoods will love? There’s a conversation waiting to happen.

Three selectable audience rows with icons:

- **I own a kirana** → value `store-owner`.
- **I’m planning a new store** → value `new-store`.
- **I’m a brand or supplier** → value `supplier`.

The active row becomes yellow with a diagonal arrow. Selecting a row must update the form’s partnership-type select, and changing the select must update the active row. Main store CTAs preselect `store-owner`; do not reset the user’s typed form fields while selecting a type.

Location line: **Starting in Kochi. Welcoming interest from everywhere.**

Form styling:

- Paper background `#FFFDF3`, tiny radius, restrained shadow.
- Heading: **A little about you.**
- Intro: **Leave your details to explore a Hello partnership.**
- A dashed divider beneath the introduction.
- A subtle cut-paper/receipt treatment along the bottom edge.
- Green submit button across the form width.

Fields:

1. Your name — required; placeholder **Full name**.
2. Mobile number — required; fixed **+91** prefix and placeholder **10-digit number**.
3. Store or business name — optional; placeholder **Your store or company (optional)**.
4. City — required; placeholder **e.g. Kochi**.
5. I’m interested as — required; **Existing store owner**, **New store entrepreneur**, **Brand or supplier**.
6. Required unchecked consent checkbox: **I agree to be contacted by Hello Stores about my enquiry.**
7. **Privacy note** button opening a genuine accessible modal.
8. Hidden honeypot field named `website`.

Submit text: **Say hello. Let’s grow.**
Submitting text: **Sending your hello…** with a small spinner.
Footnote: **An expression of interest. No payment or commitment.**

On success, replace the form with:

- A small check-circle illustration.
- **A NEW CONNECTION BEGINS.**
- **Hello, future neighbour.**
- **Your interest has been registered with Hello Stores.**
- **YOUR ENQUIRY REFERENCE**, with the real returned reference.
- **The team has your details for a partnership conversation. Store plans and commercial terms will be discussed directly.**
- **Register another enquiry**, resetting the form and submission identifier for a new enquiry.

On failure, retain entered values and show a useful inline error. Never display success after an arbitrary timeout or a failed request.

### J. Footer

Deeper green background. Compact top row with the wordmark, **Good stores. / Happier neighbours.**, and navigation links.

Below it, an oversized cream **hello.** wordmark spanning much of the container, with a yellow sun/ray accent. It should feel like a memorable brand sign-off, not an ordinary small corporate footer.

Bottom rule and row:

- **© [current year] Hello Stores.**
- **Your neighbourhood, connected.**
- Working **Privacy note** button.

Back-to-top wordmark links should work. Avoid fictitious social links, addresses or contact details.

## 6. Privacy modal content

Heading: **Privacy note**.
Label: **YOUR DETAILS, TREATED WITH CARE.**

Use this text:

> When you register interest, Hello Stores collects your name, mobile number, city, partnership type, business name (if provided), your consent and the submission time.
>
> These details are stored to review and respond to your partnership enquiry. Submitting this form does not create an order, charge a payment, or commit either party to a partnership.
>
> Only share business enquiry details here. Please do not include financial, identity-document or other sensitive information. You can request a correction or withdrawal when the team contacts you.

Include a labelled close icon and **Got it** button. Support Escape, sensible focus placement and focus restoration. The background must not remain interactable while the modal is open.

## 7. Enquiry API and persistence

Build `POST /api/interest`. Keep secrets server-side. For a new portable Next.js project, use PostgreSQL through a server-only database adapter, configured with `DATABASE_URL`, with a schema migration. If the existing repository already has a durable database integration, use it instead of introducing a second database.

Store these fields in `partner_enquiries`:

| Field | Meaning |
|---|---|
| `id` | Unique UUID used for idempotent submission |
| `name` | Name, trimmed, 2–100 characters |
| `phone` | Ten Indian mobile digits, matching `^[6-9]\d{9}$` |
| `business` | Optional business name, maximum 160 characters |
| `city` | Trimmed city, 2–100 characters |
| `role` | `store-owner`, `new-store` or `supplier` |
| `consent` | Must be explicitly true |
| `created_at` | Server-generated timestamp |

Required behaviour:

- Validate on the server as well as the client; a schema validator such as Zod is appropriate.
- Normalise harmless phone-number spaces before validation, while keeping the visible +91 prefix separate.
- Reuse the same submission UUID during retries so a double click or network retry cannot create duplicate rows. Generate a new one when starting a new enquiry.
- Enforce a small request-size limit, approximately 4KB.
- Validate same-origin browser submissions and the empty honeypot.
- Do not expose a public endpoint that lists enquiry data.
- Return `{ "ok": true, "reference": "REALREF1" }` only after a successful durable insert or acknowledgement of the same already-saved UUID. A short uppercase reference derived from the UUID is sufficient.
- Return an appropriate error and useful message for invalid input or database failure.
- Do not send email, SMS or WhatsApp messages unless separately configured and requested.

If database credentials are unavailable, complete and verify the entire interface, provide `.env.example` and migration/setup instructions, and return a clear service-unavailable response on submission. Do not fake persistence, pretend a lead was saved, put contact details in localStorage as a database replacement, or block the whole page behind missing credentials. Clearly identify any remaining database configuration in the final handoff.

## 8. Responsive behaviour and accessibility

Implement and inspect at approximately 1440, 1024, 768, 390 and 320px widths.

- At the desktop reference size, retain the 1280px content maximum and editorial whitespace.
- Scale typography and spacing progressively around 1200px and 1000px.
- Around 760px, switch navigation, comparison metadata, service panel, owner principles, Kochi section, FAQs and partnership form into mobile layouts.
- Use about 20px side margins on phones and about 17px at the smallest width.
- Keep the full hero headline readable. Never solve overflow by clipping meaningful text.
- Mobile inputs and selects must have at least 16px text and comfortable height.
- Provide labelled controls, a skip-to-content link, visible focus styles, correct tab semantics, useful image alt text and appropriate decorative-image hiding.
- The comparison slider must work with touch and keyboard.
- Avoid tiny interactive targets; expand their hit areas while retaining the reference appearance.
- Respect `prefers-reduced-motion` for smooth scrolling, ribbon motion, fades and transitions.
- Content must remain readable when entrance-animation JavaScript is unavailable.

## 9. Engineering and performance

Use a component structure such as:

- `app/page.tsx`: page composition and metadata integration.
- `app/layout.tsx`: local fonts/global styles and document shell.
- `components/site-header.tsx`.
- `components/hero.tsx`.
- `components/store-comparison.tsx`.
- `components/network-explorer.tsx`.
- `components/partner-enquiry.tsx`.
- `components/privacy-dialog.tsx`.
- `components/site-footer.tsx`.
- `lib/content.ts`: service and FAQ data.
- `lib/validation.ts`: shared enquiry validation.
- `lib/db.ts`: server-only persistence.
- `app/api/interest/route.ts`.
- Database migration, `.env.example` and a concise README.

Adapt filenames to the existing repository. Keep static content server-rendered where practical, and use small client components for interactions. Do not introduce a heavy design system solely to build this page.

Keep the supplied WebP artwork. Give images dimensions/aspect-ratio constraints to limit layout shifts. Load the hero promptly, lazy-load suitable lower-page artwork, and preserve focal points at different sizes. Avoid loading external fonts or an unnecessary video background.

Animations should be restrained: small section entrances, short tab-image fades, subtle button/arrow movement and slow ribbon movement. The brand and content should lead; animation should not dominate.

Metadata:

- Title: **Hello Stores | Your neighbourhood, connected**.
- Description: **The next chapter for your neighbourhood kirana. Discover Hello Stores: shared supply, simple store technology and local online shopping. Starting in Kochi.**
- Use the supplied favicon and an appropriate Hello store image for social previews.
- Make the production origin configurable rather than copying the original hosted domain into every environment.

## 10. Verification and final delivery

Run the repository’s appropriate type checks and production build. Inspect the real rendered page and compare it to the supplied screenshots. Fix the implementation, not just the written description of it.

Verify these meaningful interactions:

1. Header/hero/owner CTAs reach the enquiry section and choose the correct type.
2. Mobile navigation opens, closes and follows the chosen anchor.
3. Comparison dragging, keyboard movement and all three view buttons work.
4. All four network tabs and the next-connection control update the entire panel correctly.
5. FAQs expand and collapse.
6. Partner role buttons and the form select stay in sync.
7. Invalid phone input produces an understandable inline error without losing the enquiry.
8. Privacy modal opens, closes with its buttons and Escape, and handles focus correctly.
9. A genuine successful insert, database failure and retry behaviour are verified when a database is configured. Clearly state when this could not be tested.
10. No horizontal overflow, unreadable image-overlay text, clipped headings, broken artwork or missing fonts at the target widths.

Prioritise visual fidelity in this order: hero composition and typography; exact palette and artwork; section order and relative proportions; responsive layout; working interactions; then small decorative details.

Deliver the actual implementation, setup commands, required environment variables, checks performed and any concrete remaining configuration. Use the existing repository workflow for deployment if one is already specified; otherwise finish with a working local build and do not publish to an unrelated service or account.

Build it now, with the care of a senior frontend engineer reproducing a finished brand direction.
