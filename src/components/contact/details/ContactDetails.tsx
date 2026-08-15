import { CONTACT_DETAILS } from "@/constants/contact";

export default function ContactDetails() {
  return (
    <aside aria-labelledby="contact-details-heading">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-brand-700">
        Project Enquiries
      </p>

      <h2
        id="contact-details-heading"
        className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl"
      >
        Start with the essential details
      </h2>

      <p className="mt-4 max-w-lg text-base leading-7 text-cool-gray-700">
        Briefly describe what you are building, your current challenge, and the
        result you need.
      </p>

      <dl className="mt-8 grid gap-4">
        {CONTACT_DETAILS.map((detail) => (
          <div
            key={detail.id}
            className="rounded-2xl border border-cool-gray-200 bg-white p-5 shadow-brand-sm"
          >
            <dt className="text-xs font-bold uppercase tracking-[0.14em] text-cool-gray-600">
              {detail.label}
            </dt>

            <dd className="mt-2 text-sm font-semibold leading-6 text-navy-900">
              {detail.href ? (
                <a
                  href={detail.href}
                  className="rounded-md transition-colors hover:text-emerald-brand-700"
                >
                  {detail.value}
                </a>
              ) : (
                detail.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 rounded-2xl border border-emerald-brand-200 bg-emerald-brand-50 p-5">
        <p className="text-sm font-bold text-emerald-brand-900">
          Helpful information to include
        </p>

        <p className="mt-2 text-sm leading-6 text-emerald-brand-900">
          Project goal, required features, current status, preferred timeline,
          and approximate budget.
        </p>
      </div>
    </aside>
  );
}
