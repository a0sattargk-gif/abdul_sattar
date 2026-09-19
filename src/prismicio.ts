import {
  createClient as baseCreateClient,
  type ClientConfig,
  type Route,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = sm.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: Route[] = [
  {
    type: "project",
    path: "/projects/:uid",
  },
  {
    type: "service",
    path: "/services/:uid",
  },
  {
    type: "blog_post",
    path: "/blog/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: ClientConfig = {}) => {
  const defaultTags = ["prismic"];
  const customNext = (config.fetchOptions as { next?: { tags?: string[] } } | undefined)?.next;
  const customTags = customNext?.tags ?? [];
  const mergedTags = Array.from(new Set([...defaultTags, ...customTags]));

  const client = baseCreateClient(repositoryName, {
    routes,
    fetchOptions: {
      ...config.fetchOptions,
      next: {
        revalidate: process.env.NODE_ENV === "production" ? false : 5,
        ...customNext,
        tags: mergedTags,
      },
      cache: process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
    },
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
};
