import Image from "next/image";
import Link from "next/link";
import { createMailtoLink, PRIMARY_CONTACT_EMAIL } from "@/constants/email";

interface BlogAuthorBioProps {
  authorName?: string | null;
}

export default function BlogAuthorBio({
  authorName = "Abdul Sattar",
}: BlogAuthorBioProps) {
  const name = authorName || "Abdul Sattar";

  return (
    <aside
      aria-labelledby="author-bio-heading"
      className="mt-14 overflow-hidden rounded-3xl border border-cool-gray-300 bg-navy-50/50 p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-emerald-brand-500/30 shadow-md">
          <Image
            src="/images/abdul-sattar.webp"
            alt={`${name} - Full-Stack Software Engineer`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-brand-700">
                Written by
              </p>
              <h3
                id="author-bio-heading"
                className="text-xl font-extrabold text-navy-950"
              >
                {name}
              </h3>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Link
                href="/about"
                className="text-xs font-bold text-navy-800 hover:text-emerald-brand-700 underline underline-offset-4 transition"
              >
                About Me
              </Link>
              <span aria-hidden="true" className="text-cool-gray-300">
                •
              </span>
              <a
                href={createMailtoLink(PRIMARY_CONTACT_EMAIL, "Blog Inquiry")}
                className="text-xs font-bold text-navy-800 hover:text-emerald-brand-700 underline underline-offset-4 transition"
              >
                Email
              </a>
              <span aria-hidden="true" className="text-cool-gray-300">
                •
              </span>
              <Link
                href="/contact"
                className="text-xs font-bold text-emerald-brand-700 hover:text-emerald-brand-800 underline underline-offset-4 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-cool-gray-700">
            Full-stack software engineer and founder of{" "}
            <strong className="text-navy-950 font-semibold">
              Sattar Web Studio
            </strong>
            . Specializing in high-performance web applications, robust backend
            architectures, and scalable cloud systems using React, Next.js,
            Node.js, NestJS, and PostgreSQL.
          </p>
        </div>
      </div>
    </aside>
  );
}

