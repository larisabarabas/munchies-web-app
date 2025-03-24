import { getIsRestaurantOpen } from '@/lib/actions';
import { useState, useEffect } from 'react';

// Custom hook to detect mobile/desktop
export function useDeviceType(initialIsMobile:boolean) {
  const [isMobile, setIsMobile] = useState(initialIsMobile);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
}

export function useIsRestaurantOpen(filter_id: string){
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const checkIfRestaurantIsOpen = async () => {
      const isRestaurantOpen = await getIsRestaurantOpen(filter_id)
      setIsOpen(isRestaurantOpen)
    }

    checkIfRestaurantIsOpen()
  
    return () => {}
  }, [])

  return isOpen
}