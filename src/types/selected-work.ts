import type { ImageField } from "@prismicio/client";

export interface FeaturedProject {
  id: string;
  uid: string;
  name: string;
  description: string;
  thumbnail: ImageField;
  industry: string | null;
  role: string | null;
}