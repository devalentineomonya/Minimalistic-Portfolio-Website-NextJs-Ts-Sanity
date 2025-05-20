import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useInView } from "react-intersection-observer";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function useReusableInView(
  options = { triggerOnce: false, threshold: 0.1 }
) {
  const { ref, inView } = useInView(options);
  return { ref, inView };
}


