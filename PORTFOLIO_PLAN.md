# Portfolio V2 --- Rebuild Plan {#portfolio-v2--rebuild-plan}

## 1. Project Overview {#1-project-overview}

Rebuild the existing personal portfolio from the ground up.

The current portfolio was created when I was a student / early-career
developer. It should NOT be treated as a site that only needs content
updates. The new version should represent my current identity as a
professional Software Engineer with real production experience,
backend/system expertise, architecture exposure, and growing technical
leadership responsibilities.

The portfolio should communicate:

> Who I am now, what I build, how I engineer systems, and the kind of
> engineer I am becoming.

This is a professional engineering portfolio, not a visual CV rendered
as a website.

------------------------------------------------------------------------

## 2. Primary Objective {#2-primary-objective}

Build a modern, highly professional portfolio that positions me as:

> A backend-focused Software Engineer evolving toward system design,
> architecture, larger-system ownership, and technical leadership.

The site should appeal to:

-   Software engineering recruiters
-   MNC / international company recruiters
-   Senior engineers and engineering managers
-   Technical interviewers
-   Potential freelance/consulting clients
-   Developers interested in the engineering behind the projects

Do not position me as merely a NestJS developer, generic web developer,
frontend developer, or student developer.

Technology names should support the engineering story rather than become
the story.

------------------------------------------------------------------------

## 3. Core Engineering Identity {#3-core-engineering-identity}

The portfolio should communicate experience across:

-   Backend systems
-   APIs
-   Database design and optimization
-   Redis and caching
-   Queues and background processing
-   Authentication and authorization
-   RBAC
-   Microservices
-   Third-party integrations
-   Docker/Linux/Nginx/PM2
-   Cloud deployment
-   Production debugging
-   Performance optimization
-   System architecture
-   Requirement analysis and technical planning

The story should progress naturally:

``` text
Engineering foundation
        ↓
Software engineering
        ↓
Backend development
        ↓
Production systems
        ↓
Architecture & system design
        ↓
Larger technical ownership
        ↓
Future technical leadership
```

------------------------------------------------------------------------

## 4. Portfolio Philosophy {#4-portfolio-philosophy}

### Engineering over decoration

Visual quality matters, but the site should primarily communicate
engineering capability.

Avoid excessive gradients, 3D effects, generic developer illustrations,
meaningless code snippets, and decorative terminal windows.

### Show how I think

Major projects should explain:

**Problem → Architecture → Engineering Challenges → Solution → Outcome**

Not merely:

> Built with NestJS, PostgreSQL and Redis.

### Production experience comes first

Professional engineering experience should dominate student-era
achievements.

### Confident but humble

Tone should be:

-   Professional
-   Technically confident
-   Humble
-   Clear
-   Practical
-   Mature

Avoid exaggerated phrases such as \"10x developer\", \"coding ninja\",
\"rockstar\", or \"guru\".

### Portfolio ≠ CV {#portfolio--cv}

The CV says what I have done.

The portfolio should additionally explain:

-   How I approach engineering problems
-   What systems I have worked on
-   Architectural decisions
-   Problems solved
-   Technologies and why they were used
-   Lessons from production systems

------------------------------------------------------------------------

## 5. Recommended Information Architecture {#5-recommended-information-architecture}

``` text
HOME
├── Hero
├── Engineering Snapshot
├── Selected Work
├── Professional Experience
├── How I Engineer
├── About
├── Education
└── Contact
```

Optional dedicated pages:

``` text
/work
/work/[slug]
/about
/resume
```

A strong single-page experience is preferred initially, with dedicated
case-study pages if they improve the presentation.

------------------------------------------------------------------------

# 6. Homepage {#6-homepage}

## Hero

Immediately communicate:

-   Name
-   Current role
-   Engineering focus
-   Short value proposition
-   Primary CTA
-   Secondary CTA

Suggested direction:

**Eyebrow:**\
`Software Engineer · Backend & Systems`

**Heading:**\
`Building reliable backend systems and production-ready applications.`

Alternative:

`Software Engineer focused on backend systems, architecture, and scalable applications.`

Supporting direction:

> I build backend systems, APIs, and full-stack applications with a
> focus on architecture, performance, reliability, and maintainability.

CTAs:

-   View My Work
-   Get In Touch
-   Optional: View Resume

Keep the hero concise.

------------------------------------------------------------------------

# 7. Engineering Snapshot {#7-engineering-snapshot}

Show a compact categorized summary rather than a giant technology logo
wall.

### Backend

-   Node.js
-   TypeScript
-   NestJS
-   Express
-   Django
-   ASP.NET Core

### Data

-   PostgreSQL
-   MySQL
-   MSSQL
-   MongoDB
-   Redis

### Architecture

-   REST APIs
-   Microservices
-   RBAC
-   Caching
-   Queues
-   Background processing
-   Service-oriented architecture

### Infrastructure

-   Docker
-   Linux
-   Nginx
-   PM2
-   Cloud deployment
-   CDN / object storage

### Integrations

-   Payment services
-   Courier APIs
-   SMS
-   OAuth
-   YouTube Data API
-   External service integrations

Keep this section visually clean and compact.

------------------------------------------------------------------------

# 8. Selected Work {#8-selected-work}

This should be one of the strongest sections.

Do not present every project equally.

## 8.1 Render Mix Studio --- LMS & Video Streaming Platform {#81-render-mix-studio--lms--video-streaming-platform}

Role:

**Backend Developer & System Architect**

Relevant technologies:

-   NestJS
-   PostgreSQL
-   Redis
-   BullMQ
-   Next.js
-   YouTube Data API
-   OAuth 2.0
-   Cloud/object storage
-   CDN
-   Docker / Linux deployment

Engineering themes:

-   Large video uploads
-   Resumable/chunked uploads
-   YouTube integration
-   OAuth authentication
-   Course/content architecture
-   Background processing
-   Subscription/payment middleware
-   Production deployment
-   Storage/CDN architecture
-   API design

This should be a major case study because it demonstrates real system
engineering.

------------------------------------------------------------------------

## 8.2 Zarganz / Business Automation & POS Ecosystem {#82-zarganz--business-automation--pos-ecosystem}

Use the strongest accurate project/product naming available.

Position it around:

-   E-commerce
-   POS
-   Business automation
-   Inventory
-   ERP-style workflows
-   Branches
-   Warehouses
-   Employee permissions
-   RBAC
-   Courier integration
-   SMS automation
-   Production deployment
-   Performance optimization

Relevant technologies may include:

-   NestJS
-   TypeScript
-   PostgreSQL
-   Next.js
-   Redis
-   Docker / PM2 / Nginx where applicable

Engineering themes:

-   Complex business domains
-   Role/permission design
-   Inventory consistency
-   API architecture
-   Production troubleshooting
-   Deployment and operational concerns

Do not expose confidential client information.

------------------------------------------------------------------------

## 8.3 StockSync --- Business Automation & Inventory Suite {#83-stocksync--business-automation--inventory-suite}

Role:

**Lead Architect**

Technologies:

-   NestJS
-   MySQL
-   Redis
-   Message queues
-   Docker
-   Nginx
-   DigitalOcean
-   Courier API
-   SMS automation

Architecture themes:

-   POS → business automation ecosystem
-   Centralized inventory
-   Multi-tenant RBAC
-   Branches
-   Warehouses
-   Employee permissions
-   Distributed caching
-   Message queues
-   External integrations

Present this as an architecture-focused case study.

------------------------------------------------------------------------

## 8.4 TeaDo --- Task Management Platform {#84-teado--task-management-platform}

Role:

**Lead Developer**

Technologies:

-   Next.js
-   Express
-   PostgreSQL
-   Prisma
-   Zustand
-   NextAuth
-   RBAC

Use as a supporting project.

Focus on:

-   Full-stack architecture
-   Authentication
-   Authorization
-   State management
-   Data fetching
-   Task-management UX

------------------------------------------------------------------------

# 9. Case Study Format {#9-case-study-format}

Every major project should follow a consistent structure:

``` text
Project Header
↓
Role
↓
Project Overview
↓
Problem
↓
Architecture
↓
Key Engineering Challenges
↓
Implementation
↓
Important Technical Decisions
↓
Outcome / Impact
↓
Technology Stack
```

### Problem

Explain what the system needed to accomplish.

### Architecture

Use simple architecture diagrams where useful.

Example:

``` text
Client
   ↓
Backend API
   ↓
Domain Services
   ├── PostgreSQL
   ├── Redis
   └── Queue Workers
          ↓
     External Services
```

### Engineering Challenges

Examples:

-   Large file handling
-   Database performance
-   Concurrent requests
-   Authentication
-   Authorization
-   Background jobs
-   Cache invalidation
-   External API reliability
-   Deployment constraints

### Solution

Explain implementation in engineering terms.

### Outcome

Use measurable outcomes only when genuinely known.

Never invent metrics.

Qualitative outcomes are acceptable:

-   Improved reliability
-   Reduced unnecessary database load
-   Simplified deployment
-   Better separation of responsibilities
-   Easier future feature expansion

------------------------------------------------------------------------

# 10. Professional Experience {#10-professional-experience}

This section should be much more prominent than the old portfolio.

Use a clean timeline or structured experience layout.

Emphasize:

-   Software engineering
-   Backend/system development
-   Production systems
-   Architecture
-   Optimization
-   Integrations
-   Infrastructure
-   Technical coordination
-   Requirement analysis

For each experience:

``` text
Company
Role
Duration
Short context
Key responsibilities
Selected engineering contributions
Technologies
```

Do not copy the entire CV into the page.

------------------------------------------------------------------------

# 11. How I Engineer {#11-how-i-engineer}

This section differentiates the portfolio from a CV.

Suggested principles:

### Start with the problem

Understand requirements, business rules, constraints, and expected
behavior before choosing implementation details.

### Keep boundaries clear

Use modular architecture and clear responsibility boundaries so systems
remain maintainable as they grow.

### Optimize based on evidence

Profile database/API/application bottlenecks instead of prematurely
optimizing everything.

### Design for production

Think about:

-   Failures
-   Logging
-   Retries
-   Resource usage
-   Security
-   Deployment
-   Observability
-   Data consistency

### Prefer practical architecture

Avoid unnecessary complexity.

Use microservices, queues, caching, or additional infrastructure when
the system actually needs them.

### Build for change

Architecture should make future requirements easier to implement without
turning every feature into a rewrite.

------------------------------------------------------------------------

# 12. About {#12-about}

The About section should be professional and personal without becoming a
biography.

Mention:

-   B.Sc. in Mechatronics Engineering from RUET
-   Transition into software engineering
-   Current professional engineering work
-   Interest in backend/system architecture
-   Experience solving real production problems
-   Growth toward larger technical ownership

The Mechatronics background is useful as an engineering foundation.

Do not spend excessive space on school history.

------------------------------------------------------------------------

# 13. Education {#13-education}

Primary education:

**B.Sc. in Mechatronics Engineering**\
Rajshahi University of Engineering & Technology (RUET)\
2019--2024

Optionally mention relevant engineering/software coursework.

Do not give SSC/HSC equal visual weight.

School education may be omitted or placed in a minimal secondary area.

------------------------------------------------------------------------

# 14. Student-Era Content {#14-student-era-content}

The old portfolio contains:

-   Research
-   University extracurricular activities
-   Achievements
-   Volunteering
-   HSC
-   SSC

These should NOT dominate the new portfolio.

Research can be retained only if it supports the professional story.

Possible small references:

-   Speech Emotion Analyzer using NLP
-   Deep Learning-Based Speech Enhancement survey

Extracurricular activities can be mentioned briefly under About if
desired.

The site should clearly communicate:

> I am now a professional engineer, not a student looking for my first
> internship.

------------------------------------------------------------------------

# 15. Visual Direction {#15-visual-direction}

Use a modern engineering-focused visual identity.

Existing LinkedIn visual direction uses:

`#1D4533`

Use this dark forest-green direction as inspiration rather than forcing
the exact color everywhere.

Suggested palette direction:

-   Deep forest green
-   Near-black / charcoal
-   Off-white
-   Soft mint/green accent
-   Neutral borders

The design should feel:

-   Premium
-   Calm
-   Technical
-   Mature
-   Trustworthy

Avoid looking like:

-   Gaming UI
-   Crypto landing page
-   Generic AI startup template
-   Junior developer template

------------------------------------------------------------------------

# 16. Typography {#16-typography}

Use one strong modern font family.

Good candidates:

-   Inter
-   Geist
-   Manrope
-   Plus Jakarta Sans

Typography hierarchy should be strong.

The hero heading should be visually dominant without consuming most of
the screen.

------------------------------------------------------------------------

# 17. Visual Components {#17-visual-components}

Possible elements:

-   Subtle grid
-   Fine technical lines
-   Minimal geometric shapes
-   System architecture diagrams
-   Small technology badges
-   Timeline
-   Code-inspired micro-details
-   Interactive project cards
-   Subtle hover effects

Visual elements must support the engineering identity.

Do not overload the page.

------------------------------------------------------------------------

# 18. Animation Philosophy {#18-animation-philosophy}

Use animation to communicate polish, not distraction.

Good:

-   Subtle fade/slide-in
-   Smooth hover transitions
-   Small card elevation
-   Section reveal
-   Understated background motion

Avoid:

-   Excessive parallax
-   Huge scroll animations
-   Spinning objects
-   Constant floating elements
-   Long entrance animations

Respect:

`prefers-reduced-motion`

------------------------------------------------------------------------

# 19. Responsive Design {#19-responsive-design}

Build mobile-first.

Cover:

-   Mobile
-   Tablet
-   Laptop
-   Large desktop

Requirements:

-   Hero remains readable on mobile
-   Navigation collapses cleanly
-   Case studies remain usable
-   Architecture diagrams are responsive/scrollable
-   Buttons remain touch-friendly
-   Do not merely shrink desktop layouts

------------------------------------------------------------------------

# 20. Navigation {#20-navigation}

Recommended:

``` text
Home
Work
Experience
About
Contact
```

Optional: `Resume`

Keep navigation simple and unobtrusive.

------------------------------------------------------------------------

# 21. Contact {#21-contact}

Provide:

-   Email
-   LinkedIn
-   GitHub
-   Optional resume

Possible CTA:

> Let\'s build something useful.

Do not add a contact form unless there is a real backend/service
supporting it.

------------------------------------------------------------------------

# 22. SEO {#22-seo}

Implement:

-   Title
-   Description
-   Canonical URL
-   Author
-   Robots metadata
-   Open Graph metadata
-   Social preview image
-   Twitter/X card metadata
-   `Person` structured data where appropriate

`Person` schema may include:

-   name
-   jobTitle
-   url
-   sameAs
-   knowsAbout

Never include inaccurate claims.

------------------------------------------------------------------------

# 23. Performance {#23-performance}

The portfolio itself should demonstrate good engineering.

Target:

-   Fast initial load
-   Optimized images
-   Minimal JavaScript
-   Good Core Web Vitals
-   Lazy loading where appropriate
-   No unnecessary dependencies

If using Next.js:

-   Use optimized images
-   Use server components where appropriate
-   Avoid unnecessary client components
-   Avoid large animation libraries unless genuinely needed
-   Review bundle size

------------------------------------------------------------------------

# 24. Accessibility {#24-accessibility}

Implement:

-   Semantic HTML
-   Correct heading hierarchy
-   Accessible navigation
-   Keyboard navigation
-   Visible focus states
-   Sufficient contrast
-   Meaningful alt text
-   Reduced-motion support
-   Accessible buttons and links

------------------------------------------------------------------------

# 25. Preferred Technology Stack {#25-preferred-technology-stack}

### Frontend

-   Next.js
-   TypeScript
-   Tailwind CSS
-   shadcn/ui where useful

### Animation

Motion / Framer Motion only where genuinely useful.

### Icons

Lucide or another single consistent icon library.

### Deployment

Vercel is acceptable unless another target is more appropriate.

Keep the implementation portable.

------------------------------------------------------------------------

# 26. Component Architecture {#26-component-architecture}

Suggested structure:

``` text
app/
components/
  layout/
    Navbar
    Footer

  sections/
    Hero
    EngineeringSnapshot
    SelectedWork
    Experience
    EngineeringApproach
    About
    Education
    Contact

  projects/
    ProjectCard
    ProjectCaseStudy
    ArchitectureDiagram
    TechStack

  ui/
    Button
    Badge
    Container
    SectionHeading
```

Do not over-engineer the component tree.

Create reusable components where reuse is real.

------------------------------------------------------------------------

# 27. Content Architecture {#27-content-architecture}

Project and experience content should ideally be data-driven.

Conceptual model:

``` ts
type Project = {
  slug: string
  title: string
  role: string
  description: string
  technologies: string[]
  problem: string
  architecture?: string
  challenges: string[]
  solution: string
  outcome?: string
  featured: boolean
}
```

This should make future project additions easy.

------------------------------------------------------------------------

# 28. Confidentiality {#28-confidentiality}

This portfolio describes real professional/client work.

Never expose:

-   Credentials
-   API keys
-   Server IPs
-   Private repositories
-   Database credentials
-   Confidential architecture details
-   Private customer information
-   Proprietary business data
-   Unpublished company metrics
-   Confidential source code

Use public-safe architectural abstractions for client/company projects.

------------------------------------------------------------------------

# 29. Content Accuracy {#29-content-accuracy}

Never invent:

-   Performance metrics
-   Number of users
-   Revenue
-   Traffic
-   Database size
-   Uptime
-   Team size
-   Business impact
-   Responsibilities

If an exact metric is unknown, use a qualitative statement.

Bad:

> Reduced API latency by 73%.

unless verified.

Good:

> Optimized database access and caching to reduce unnecessary API
> workload.

------------------------------------------------------------------------

# 30. GitHub / External Projects {#30-github--external-projects}

Only highlight repositories that are:

-   Public
-   Clean
-   Relevant
-   Presentable

Do not make GitHub quantity the focus.

Quality over quantity.

------------------------------------------------------------------------

# 31. Project Visuals {#31-project-visuals}

Every major case study should have at least one meaningful visual.

Possible:

-   Product screenshot
-   Architecture diagram
-   Workflow diagram
-   UI screenshot
-   System flow
-   Database relationship visualization

Avoid generic stock images.

If screenshots are unavailable, use clean architecture/workflow
diagrams.

------------------------------------------------------------------------

# 32. Homepage Length {#32-homepage-length}

The homepage should be substantial but not exhausting.

Recommended flow:

``` text
Hero
↓
Engineering Snapshot
↓
Selected Work
↓
Experience
↓
How I Engineer
↓
About
↓
Education
↓
Contact
```

Users should understand the professional profile within roughly 20--30
seconds.

------------------------------------------------------------------------

# 33. What NOT to Include {#33-what-not-to-include}

Avoid:

-   \"Welcome to my portfolio\"
-   Giant skill percentage bars
-   Fake years-of-experience counters
-   Generic \"I love coding\" paragraphs
-   Excessive personal biography
-   Fake client logos
-   Skill rating stars
-   Meaningless GitHub widgets
-   Excessive animations
-   Stock developer illustrations
-   Giant technology logo walls
-   Every university achievement
-   Every tiny project

------------------------------------------------------------------------

# 34. Messaging Direction {#34-messaging-direction}

The exact copy should be refined during implementation.

### Hero

> Software Engineer building backend systems and production-ready
> applications.

Supporting direction:

> I work across backend engineering, system architecture, databases,
> integrations, and infrastructure to build reliable software that can
> evolve with real-world requirements.

### Selected Work {#selected-work}

> A selection of systems and products I\'ve helped build, architect, and
> improve.

### Engineering Approach

> I care about clear boundaries, practical architecture, measurable
> performance, and software that remains maintainable after it reaches
> production.

These are directional examples, not mandatory final copy.

------------------------------------------------------------------------

# 35. Design Personality {#35-design-personality}

``` text
Professional      ██████████
Technical         ██████████
Modern            █████████
Minimal           ████████
Personal           ██████
Playful            ███
Flashy             ██
```

The portfolio should feel like it belongs to an engineer progressing
toward senior-level system ownership.

------------------------------------------------------------------------

# 36. Implementation Phases {#36-implementation-phases}

## Phase 1 --- Foundation {#phase-1--foundation}

-   Set up project
-   Configure fonts
-   Configure theme
-   Configure metadata
-   Create global layout
-   Create responsive container system
-   Create navigation/footer

## Phase 2 --- Hero + Identity {#phase-2--hero--identity}

-   Build hero
-   Add professional positioning
-   Add CTAs
-   Add social links
-   Add visual identity

## Phase 3 --- Engineering Snapshot {#phase-3--engineering-snapshot}

-   Add capability categories
-   Keep presentation concise

## Phase 4 --- Selected Work {#phase-4--selected-work}

-   Build reusable project cards
-   Build case-study layout
-   Add architecture diagrams
-   Add project visuals
-   Add technology stacks

## Phase 5 --- Experience {#phase-5--experience}

-   Build professional timeline
-   Add current/relevant roles
-   Connect projects to experience where useful

## Phase 6 --- Engineering Approach {#phase-6--engineering-approach}

-   Build \"How I Engineer\"
-   Communicate architecture/performance/reliability mindset

## Phase 7 --- About + Education {#phase-7--about--education}

-   Add professional background
-   Add RUET education
-   De-emphasize student-era content

## Phase 8 --- Contact {#phase-8--contact}

-   Add contact CTA
-   Add verified external links
-   Add resume

## Phase 9 --- SEO + Performance {#phase-9--seo--performance}

-   Metadata
-   Open Graph
-   Structured data
-   Image optimization
-   Bundle review
-   Accessibility audit

## Phase 10 --- Final Polish {#phase-10--final-polish}

-   Responsive QA
-   Browser testing
-   Animation tuning
-   Typography tuning
-   Spacing consistency
-   Lighthouse/performance review
-   Content proofreading

------------------------------------------------------------------------

# 37. Definition of Done {#37-definition-of-done}

## Identity

-   [ ] Clearly presents me as a professional Software Engineer.
-   [ ] Backend/system engineering is more prominent than generic
    frontend development.
-   [ ] Positioning reflects growth toward architecture and technical
    ownership.

## Content

-   [ ] Professional experience is prominent.
-   [ ] Render Mix Studio is represented as a serious engineering case
    study.
-   [ ] Zarganz/business systems work is represented appropriately.
-   [ ] StockSync is presented as an architecture-focused project.
-   [ ] TeaDo remains a supporting project.
-   [ ] Student-era content is minimized.
-   [ ] No inaccurate claims or invented metrics.

## Design

-   [ ] Visual identity feels mature and technical.
-   [ ] Forest-green theme direction is represented tastefully.
-   [ ] Design is not overly flashy.
-   [ ] Typography is strong.
-   [ ] Mobile design is excellent.

## Engineering

-   [ ] TypeScript is used properly.
-   [ ] Components are reasonably reusable.
-   [ ] No unnecessary dependencies.
-   [ ] Performance is strong.
-   [ ] Accessibility is addressed.
-   [ ] SEO is configured.
-   [ ] Open Graph preview exists.
-   [ ] Deployment is production-ready.

------------------------------------------------------------------------

# 38. Final Instruction to the Implementing Agent {#38-final-instruction-to-the-implementing-agent}

Do not treat this as a request to simply redesign the existing student
portfolio.

**Rebuild the portfolio around the engineer I am today.**

The strongest impression after viewing the portfolio should be:

> This is a software engineer who has worked on real systems,
> understands what happens beyond the API endpoint, and is growing
> toward architecture and larger technical ownership.

Use the existing portfolio only as a source of legacy content. Prefer
the current professional context and verified project information when
deciding what belongs in the new portfolio.

When information is uncertain or potentially confidential, do not invent
it. Use a safe placeholder or ask for clarification before publishing
it.
