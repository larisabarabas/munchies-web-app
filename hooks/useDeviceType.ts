import { useState, useEffect } from 'react';


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