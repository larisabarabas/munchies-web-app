"use client"
import { useFilterStore } from '@/store/useFilterStore';
import FilterCard from './FilterCard';
import React, {useCallback} from 'react';

const FilterCardsScrollable = ({filters}:{filters: CategoryFilter[]}) => {
  const {categories, toggleCategories} = useFilterStore()

    const handleOnSelect = useCallback((item:CategoryFilter) => {
      toggleCategories(item)
    }, [toggleCategories])

  if(!filters.length) return <p>No filters.</p>

  return (
    <div className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x min-w-0">
        <div className="flex gap-3">
          {filters.map((filter) => (
            <FilterCard key={filter.id} filter={filter} onSelect={handleOnSelect} isSelected={categories ? categories.some(category => category.id === filter.id) : false}/>
          ))}
        </div>
    </div>
  )
}

export default FilterCardsScrollable