import { useState, useEffect } from 'react';


export function useDeviceType(initialIsMobile:boolean) {
  const [isMobile, setIsMobile] = useState(initialIsMobile);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(max-width: 768px)')

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    setIsMobile(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleResize)
    
    return () => {
      mediaQuery.removeEventListener('change', handleResize)
    }
  }, []);

  return isMobile;
}