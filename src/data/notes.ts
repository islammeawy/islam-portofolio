import type { EngineeringNote } from "../types";

export const engineeringNotes: EngineeringNote[] = [
  {
    id: "django-orm-query-optimization",
    slug: "django-orm-query-optimization",
    title: "Fixing N+1 Relational Database Queries in Django",
    date: "Aug 2026",
    readTime: "3 min read",
    summary: "While building my Django job recruitment platform, I noticed API response times slowing down when fetching job listings alongside employer records. I learned how Django ORM executes queries under the hood and used select_related to reduce 50+ redundant SQL queries into a single SQL join.",
    tags: ["Backend", "Django", "PostgreSQL", "Databases"],
    sections: [
      {
        heading: "The Problem I Encountered",
        body: [
          "While developing the full-stack Job Search Platform, I set up REST Framework API endpoints to deliver job listings along with associated employer details. During testing, I noticed response latency rising steadily as the number of listings grew.",
        ],
      },
      {
        heading: "Discovering N+1 Queries in Django ORM",
        body: [
          "Inspecting database logs revealed that Django ORM was executing 1 query for the main job listings list, followed by N separate SQL queries to fetch the associated employer profile for each individual listing. For a list with 50 job listings, that resulted in 51 database round-trips for a single HTTP request.",
        ],
      },
      {
        heading: "The Solution & Takeaway",
        body: [
          "By applying Django's select_related('employer') to the queryset, Django ORM generated a single SQL JOIN query. This eliminated the extra N queries, significantly dropped API response time, and taught me the importance of inspecting database queries early when building web applications.",
        ],
      },
    ],
  },
  {
    id: "subscription-billing-logic",
    slug: "subscription-billing-logic",
    title: "Handling Recurring Billing Schedules in a Subscription Manager",
    date: "Aug 2026",
    readTime: "3 min read",
    summary: "Building my full-stack Subscription Manager taught me that tracking recurring payment dates (monthly vs. annual) is trickier than it looks. I had to design clean REST API validation and PostgreSQL schema constraints to handle varying month lengths and user billing filters accurately.",
    tags: ["Full-Stack", "Node.js", "PostgreSQL", "REST APIs"],
    sections: [
      {
        heading: "Why Billing Cycles Are Tricky",
        body: [
          "When building the Full-Stack Subscription Manager to help users track active software commitments, calculating next renewal dates seemed simple initially. However, edge cases like leap years, varying month lengths (28 vs 31 days), and quarterly vs annual cycles quickly caused date drift bugs if calculated naively.",
        ],
      },
      {
        heading: "Backend Validation & Schema Constraints",
        body: [
          "I structured backend Express.js middleware to validate incoming billing cycle payloads before database insertion and set explicit enum constraints in PostgreSQL for allowed frequencies (monthly, quarterly, annual). Date calculations were centralized on the server side to ensure consistent UTC calculations regardless of client timezone.",
        ],
      },
      {
        heading: "Key Takeaway",
        body: [
          "Handling date arithmetic and recurring schedules requires strict server-side validation. Designing explicit data constraints in PostgreSQL saved me from dealing with inconsistent user state in the frontend interface.",
        ],
      },
    ],
  },
  {
    id: "react-typescript-state-locality",
    slug: "react-typescript-state-locality",
    title: "Refactoring State Locality in React & TypeScript",
    date: "Jul 2026",
    readTime: "3 min read",
    summary: "When I first built cart state in React, I over-complicated component props and state hoisting. Refactoring my e-commerce application with strict TypeScript interfaces helped me understand where state should live and how to keep re-renders predictable.",
    tags: ["Frontend", "React", "TypeScript", "Architecture"],
    sections: [
      {
        heading: "Over-Complicating State Early On",
        body: [
          "In my initial draft of the React E-Commerce Application, I tried lifting transient UI state (like product search filters and modal highlights) into a single global state object. This caused unnecessary re-renders across unrelated components whenever a user typed in a search bar.",
        ],
      },
      {
        heading: "Refactoring with TypeScript Strictness",
        body: [
          "I refactored the component tree by creating clear TypeScript interface contracts for component props. Local UI state (like dropdown toggles and filter inputs) was moved back down into local component hooks, while global state was reserved strictly for cart payloads.",
        ],
      },
      {
        heading: "Key Takeaway",
        body: [
          "TypeScript interfaces act as documentation and force you to think about component boundaries before writing code. Keeping state local until it genuinely needs to be shared keeps React applications predictable and easy to maintain.",
        ],
      },
    ],
  },
];
