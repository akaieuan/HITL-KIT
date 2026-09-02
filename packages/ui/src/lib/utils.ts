import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind classname merge, the shadcn idiom. Installed by the registry as `lib/utils.ts`. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
