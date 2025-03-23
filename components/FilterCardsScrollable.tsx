import React from 'react'
import FilterCard from './FilterCard';

// Props: filters[]

const FilterCardsScrollable = () => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x min-w-0">
        <div className="flex gap-3">
          {[...Array(14)].map((_, index) => (
          <FilterCard key={index}/>
          ))}
        </div>
    </div>
  )
}

export default FilterCardsScrollable