"use client"
import { useFilterStore } from '@/store/useFilterStore';
import FilterCard from './FilterCard';
import React, {useCallback} from 'react';

const FilterCardsScrollable = ({filters}:{filters: Filter[]}) => {
  
  const {selectedFilter, setFilter} = useFilterStore()
  const handleOnSelect = useCallback((item:Filter) => {
    setFilter(item)
  }, [setFilter])

  return (
    <div className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x min-w-0">
        <div className="flex gap-3">
          {filters.map((filter) => (
            <FilterCard key={filter.id} filter={filter} onSelect={handleOnSelect} isSelected={selectedFilter?.id === filter.id}/>
          ))}
        </div>
    </div>
  )
}

export default FilterCardsScrollable