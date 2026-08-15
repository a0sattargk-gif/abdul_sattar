import { FOOTER_CONTACT_ITEMS } from "@/constants/footer";

export default function FooterContact() {
  return (
    <section aria-labelledby="footer-contact-heading">
      <h2
        id="footer-contact-heading"
        className="text-sm font-bold uppercase tracking-[0.14em] text-white"
      >
        Contact
      </h2>

      <dl className="mt-5 grid gap-4">
        {FOOTER_CONTACT_ITEMS.map((contactItem) => (
          <div key={contactItem.id}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-cool-gray-500">
              {contactItem.label}
            </dt>

            <dd className="mt-1 text-sm leading-6 text-cool-gray-300">
              {contactItem.href ? (
                <a
                  href={contactItem.href}
                  className="rounded-md transition-colors duration-200 hover:text-emerald-brand-400"
                >
                  {contactItem.value}
                </a>
              ) : (
                contactItem.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
