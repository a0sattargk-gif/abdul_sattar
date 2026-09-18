import type { ImageField } from "@prismicio/client";

export interface FeaturedService {
  id: string;
  uid: string;
  name: string;
  description: string;
  image: ImageField;
  timeline: string | null;
  deliveryModel: string | null;
}