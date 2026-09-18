"use client";

import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import type { FeaturedProject } from "@/types/selected-work";

interface ProjectCardProps {
  project: FeaturedProject;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const smoothX = useSpring(pointerX, {
    stiffness: 180,
    damping: 24,
    mass: 0.4,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 180,
    damping: 24,
    mass: 0.4,
  });

  const imageX = useTransform(smoothX, [0, 1], [-8, 8]);
  const imageY = useTransform(smoothY, [0, 1], [-6, 6]);

  const number = String(index + 1).padStart(2, "0");

  function handlePointerMove(
    event: React.PointerEvent<HTMLElement>
  ) {
    if (shouldReduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();

    pointerX.set(
      (event.clientX - bounds.left) / bounds.width
    );

    pointerY.set(
      (event.clientY - bounds.top) / bounds.height
    );
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.article
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 36,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.65,
          delay: shouldReduceMotion ? 0 : index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="group relative h-full"
      >
        <Link
          href={`/projects/${project.uid}`}
          aria-label={`View ${project.name} case study`}
          className="
            relative block h-full
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-emerald-brand-700
            focus-visible:ring-offset-4
          "
        >
          <m.div
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -7,
                  }
            }
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative flex h-full flex-col
              overflow-hidden
              border border-cool-gray-300
              bg-white
            "
          >
            {/* =====================================
                IMAGE AREA
            ====================================== */}

            <div className="relative overflow-hidden bg-cool-gray-100">
              <div className="aspect-[16/10] overflow-hidden">
                {project.thumbnail?.url ? (
                  <m.div
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            clipPath:
                              "inset(0 100% 0 0)",
                          }
                    }
                    whileInView={{
                      clipPath: "inset(0 0% 0 0)",
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.9,
                      delay: shouldReduceMotion
                        ? 0
                        : 0.1 + index * 0.12,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="h-full w-full"
                  >
                    <m.div
                      style={
                        shouldReduceMotion
                          ? undefined
                          : {
                              x: imageX,
                              y: imageY,
                            }
                      }
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 1.06,
                            }
                      }
                      transition={{
                        scale: {
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      className="h-full w-full"
                    >
                      <PrismicNextImage
                        field={project.thumbnail}
                        sizes="
                          (max-width: 767px) 100vw,
                          (max-width: 1023px) 50vw,
                          33vw
                        "
                        className="
                          h-full w-full
                          scale-[1.03]
                          object-cover
                        "
                        fallbackAlt=""
                      />
                    </m.div>
                  </m.div>
                ) : (
                  <div className="h-full w-full bg-cool-gray-100" />
                )}
              </div>

              {/* Dark image overlay */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-navy-950/0
                  transition-colors
                  duration-500
                  group-hover:bg-navy-950/15
                "
              />

              {/* Project number */}
              <m.div
                aria-hidden="true"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.05,
                      }
                }
                className="
                  absolute left-5 top-5
                  flex size-11
                  items-center justify-center
                  border border-white/80
                  bg-white/95
                  font-mono text-xs
                  font-bold tracking-[0.12em]
                  text-navy-950
                "
              >
                {number}
              </m.div>

              {/* View project button */}
              <m.div
                aria-hidden="true"
                initial={false}
                variants={{
                  rest: {
                    x: 16,
                    y: 16,
                    opacity: 0,
                  },
                  hover: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                  },
                }}
                className="
                  absolute bottom-5 right-5
                  grid size-12
                  place-items-center
                  bg-emerald-brand-700
                  text-xl font-medium text-white
                  opacity-0
                  transition-all duration-300
                  group-hover:translate-x-0
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  group-focus-visible:opacity-100
                "
              >
                ↗
              </m.div>

              {/* Image bottom line */}
              <span
                aria-hidden="true"
                className="
                  absolute bottom-0 left-0
                  h-[3px] w-0
                  bg-emerald-brand-700
                  transition-[width]
                  duration-500
                  ease-out
                  group-hover:w-full
                "
              />
            </div>

            {/* =====================================
                CONTENT
            ====================================== */}

            <div className="relative flex flex-1 flex-col p-6">
              {/* Industry + index */}
              <div className="flex items-center justify-between gap-4">
                {project.industry ? (
                  <span
                    className="
                      text-xs font-bold uppercase
                      tracking-[0.14em]
                      text-emerald-brand-700
                    "
                  >
                    {project.industry}
                  </span>
                ) : (
                  <span />
                )}

                <span
                  aria-hidden="true"
                  className="
                    font-mono text-[11px]
                    font-semibold tracking-[0.14em]
                    text-cool-gray-700
                  "
                >
                  PROJECT / {number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  mt-5
                  text-2xl font-bold
                  leading-[1.15]
                  tracking-[-0.03em]
                  text-navy-950
                  transition-colors
                  duration-300
                  group-hover:text-emerald-brand-700
                "
              >
                {project.name}
              </h3>

              {/* Description */}
              {project.description && (
                <p
                  className="
                    mt-3
                    line-clamp-3
                    text-sm leading-6
                    text-cool-gray-700
                  "
                >
                  {project.description}
                </p>
              )}

              {/* Bottom */}
              <div className="mt-auto pt-7">
                <div
                  className="
                    flex items-end
                    justify-between
                    gap-5
                    border-t border-cool-gray-300
                    pt-4
                  "
                >
                  {project.role ? (
                    <div>
                      <span
                        className="
                          block text-[11px]
                          font-bold uppercase
                          tracking-[0.12em]
                          text-cool-gray-700
                        "
                      >
                        Role
                      </span>

                      <span
                        className="
                          mt-1 block
                          text-sm font-semibold
                          text-navy-950
                        "
                      >
                        {project.role}
                      </span>
                    </div>
                  ) : (
                    <span />
                  )}

                  <div
                    className="
                      flex items-center
                      gap-3
                      text-sm font-bold
                      text-navy-950
                    "
                  >
                    <span>Explore</span>

                    <span
                      aria-hidden="true"
                      className="
                        relative block
                        w-7 overflow-hidden
                      "
                    >
                      <span
                        className="
                          block
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================
                INTERACTIVE FRAME
            ====================================== */}

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute left-0 top-0
                h-[2px] w-0
                bg-emerald-brand-700
                transition-[width]
                duration-500
                group-hover:w-full
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute right-0 top-0
                h-0 w-[2px]
                bg-emerald-brand-700
                transition-[height]
                delay-100 duration-500
                group-hover:h-full
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute bottom-0 right-0
                h-[2px] w-0
                bg-emerald-brand-700
                transition-[width]
                delay-150 duration-500
                group-hover:w-full
              "
            />

            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute bottom-0 left-0
                h-0 w-[2px]
                bg-emerald-brand-700
                transition-[height]
                delay-200 duration-500
                group-hover:h-full
              "
            />
          </m.div>
        </Link>
      </m.article>
    </LazyMotion>
  );
}