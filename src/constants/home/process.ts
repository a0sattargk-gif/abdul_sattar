import type { ProcessStep } from "@/types/home";

export const HOME_PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    description:
      "I begin by understanding the business problem, target users, required features, technical constraints, and expected project outcome.",
    icon: "discovery",
    deliverables: [
      "Business requirements",
      "User needs",
      "Technical constraints",
      "Project objectives",
    ],
    order: 1,
  },
  {
    id: "planning",
    number: "02",
    title: "Planning",
    description:
      "I define the application structure, technology stack, data flow, service boundaries, milestones, and acceptance criteria before development begins.",
    icon: "planning",
    deliverables: [
      "Technical architecture",
      "Technology selection",
      "Development milestones",
      "Delivery plan",
    ],
    order: 2,
  },
  {
    id: "development",
    number: "03",
    title: "Development",
    description:
      "I build the product using reusable components, modular backend services, secure APIs, maintainable database workflows, and clean implementation patterns.",
    icon: "development",
    deliverables: [
      "Frontend implementation",
      "Backend services",
      "Database integration",
      "Third-party integrations",
    ],
    order: 3,
  },
  {
    id: "testing",
    number: "04",
    title: "Testing",
    description:
      "I validate functionality, responsiveness, API behavior, error handling, performance, and production readiness across the complete application.",
    icon: "testing",
    deliverables: [
      "Functional testing",
      "Responsive testing",
      "API validation",
      "Performance review",
    ],
    order: 4,
  },
  {
    id: "deployment",
    number: "05",
    title: "Deployment",
    description:
      "I prepare the production environment, deploy the application, verify runtime behavior, configure monitoring, and document the delivered system.",
    icon: "deployment",
    deliverables: [
      "Production deployment",
      "Environment configuration",
      "Runtime verification",
      "Technical documentation",
    ],
    order: 5,
  },
];
