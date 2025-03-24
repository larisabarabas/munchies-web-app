import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractStaticValue(content:StaticContent, key:string) {
  return content?.body?.find(item => item.key === key)?.value
}

export const getDeliveryTimeStringInterval = (interval:DeliveryTimeInterval) => {
  if(interval.max > 60) {
    return '1 hour+'
  } else {
    return `${interval.min}-${interval.max} min`
  }
}