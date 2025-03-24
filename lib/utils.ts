import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractStaticValue(content:StaticContent, key:string) {
  return content?.body?.find(item => item.key === key)?.value
}