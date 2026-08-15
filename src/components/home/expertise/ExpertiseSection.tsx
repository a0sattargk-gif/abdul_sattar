import ExpertiseGroupCard from "@/components/home/expertise/ExpertiseGroupCard";
import SectionHeading from "@/components/shared/SectionHeading";

import { HOME_EXPERTISE_GROUPS } from "@/constants/home/expertise";

export default function ExpertiseSection() {
  const expertiseGroups = [...HOME_EXPERTISE_GROUPS].sort(
    (firstGroup, secondGroup) => firstGroup.order - secondGroup.order,
  );

  return (
    <section
      aria-labelledby="home-expertise-heading"
      className="bg-navy-900 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="home-expertise-heading"
          eyebrow="Technical Expertise"
          title="A complete stack for modern software products"
          description="My experience covers frontend development, backend systems, databases, cloud infrastructure, distributed architecture, and mobile applications."
          className="[&_h2]:text-white [&_p:last-child]:text-cool-gray-200"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {expertiseGroups.map((group) => (
            <ExpertiseGroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
