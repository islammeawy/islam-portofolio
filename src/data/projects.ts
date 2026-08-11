import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "subscription-manager",
    slug: "subscription-manager",
    title: "Full-Stack Subscription Manager",
    tagline: "A web application for tracking recurring billing, renewal schedules, and expense analytics.",
    summary: "Built a full-stack subscription management platform enabling users to track recurring payments, monitor renewal dates, analyze monthly spend analytics, and manage active service commitments.",
    category: "Full-Stack",
    featured: true,
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "TypeScript", "REST APIs"],
    githubUrl: "https://github.com/islammeawy/subscription-manager",
    problem: "Users frequently lose track of active recurring subscriptions across different services, leading to unmonitored monthly spend, unexpected renewal charges, and difficulty auditing total software expenses.",
    solution: "Developed a centralized full-stack web application featuring RESTful authentication endpoints, CRUD subscription management APIs, automated renewal schedule calculations, and category expense analytics.",
    architectureDecisions: [
      "Designed RESTful API endpoints enforcing session/token authentication and strict user ownership checks on subscription records.",
      "Structured relational PostgreSQL schemas with indexed user foreign keys and constrained billing cycle enum types.",
      "Built a type-safe React & TypeScript dashboard interface with responsive filtering by category, payment status, and renewal urgency.",
    ],
    challenges: [
      "Accurately computing next-renewal dates for custom billing frequencies (weekly, monthly, annual) while accounting for leap years and calendar edge cases.",
      "Structuring real-time spending aggregation calculations efficiently without redundant database round-trips.",
    ],
    outcome: "Delivered a clean subscription tracking platform empowering users to audit active services, monitor monthly recurring budgets, and avoid unintended automatic renewals.",
  },
  {
    id: "job-search-platform",
    slug: "job-search-platform",
    title: "Full-Stack Job Search Platform",
    tagline: "A role-based recruitment and candidate application management system.",
    summary: "Developed a full-stack recruitment platform connecting employers, applicants, and administrators with secure authentication, role-based authorization, and optimized query execution.",
    category: "Full-Stack",
    featured: true,
    technologies: ["Django", "PostgreSQL", "JavaScript", "REST APIs", "Python", "HTML5/CSS3"],
    problem: "Recruitment workflows require strict access controls between employers posting vacancies, applicants submitting credentials, and admins managing platform integrity, alongside clean database design to avoid redundant queries.",
    solution: "Built a structured Django & PostgreSQL application featuring RESTful authentication endpoints, role-based access middleware, and custom database indexing to support fast job listing searches and application tracking.",
    architectureDecisions: [
      "Decoupled authentication logic into structured REST API endpoints supporting session & token authentication.",
      "Utilized Django ORM select_related and prefetch_related queries to eliminate N+1 database queries on job listing views.",
      "Implemented schema constraints in PostgreSQL to enforce transactional data integrity for job application submissions.",
    ],
    challenges: [
      "Ensuring strict role isolation across employer dashboard views and candidate application portals without duplicating endpoint handlers.",
      "Optimizing query performance for filtering job listings across multiple criteria (location, category, employment type).",
    ],
    outcome: "Delivered a fully functional recruitment backend and frontend interface supporting multi-role user workflows, fast page load response times, and clean modular code layout.",
    snippet: {
      language: "python",
      code: `class JobListingViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Optimized DRF viewset fetching active job listings with single-query JOIN.
    Reduces N+1 query overhead across related employer profiles.
    """
    serializer_class = JobListingSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return (
            JobListing.objects.filter(is_active=True)
            .select_related('employer', 'employer__user')
            .prefetch_related('skills_required')
            .order_by('-created_at')
        )`,
      explanation: "Using Django ORM select_related('employer') performs a single SQL JOIN query, reducing N+1 API latency when loading job listings with employer details.",
    },
  },
  {
    id: "react-ecommerce",
    slug: "react-ecommerce",
    title: "React E-Commerce Application",
    tagline: "Modern shopping application emphasizing component reusability and type safety.",
    summary: "Built a scalable ecommerce application leveraging React, TypeScript, and state management patterns to deliver a responsive shopping experience with live product filtering and cart operations.",
    category: "Frontend",
    featured: true,
    technologies: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "State Management"],
    problem: "Dynamic cart interactions and product filtering in frontend web apps frequently suffer from state synchronization bugs, unhandled API edge cases, and sluggish re-renders if component boundaries are poorly isolated.",
    solution: "Designed a clean React & TypeScript architecture with explicit type definitions for product entities, cart state reducers, and custom hooks managing REST API data fetching and error states.",
    architectureDecisions: [
      "Strict TypeScript interfaces for product items, cart payloads, and API response structures to ensure compile-time type safety.",
      "Modular component hierarchy separating layout primitives, cart UI controls, and API state handlers.",
      "Optimized state updates to prevent unnecessary component re-renders during high-frequency cart actions.",
    ],
    challenges: [
      "Managing persistent cart state across page reloads while maintaining instant visual updates upon adding or removing items.",
      "Handling asynchronous REST API latency gracefully with loading skeletons and fallback UI states.",
    ],
    outcome: "Created a maintainable frontend application with clean component breakdown, high responsiveness, and zero runtime type errors.",
  },
];
