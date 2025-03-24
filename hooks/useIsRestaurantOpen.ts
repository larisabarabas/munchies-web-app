
import { getIsRestaurantOpen } from '@/lib/actions';
import { useState, useEffect } from 'react';

export function useIsRestaurantOpen(restaurant_id: string){
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
      const checkIfRestaurantIsOpen = async () => {
        const isRestaurantOpen = await getIsRestaurantOpen(restaurant_id)
        setIsOpen(isRestaurantOpen)
      }
  
      checkIfRestaurantIsOpen()
    
      return () => {}
    }, [])
  
    return isOpen
  }