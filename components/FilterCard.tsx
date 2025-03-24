"use client"
import Image from 'next/image';
import React from 'react';

const FilterCard = React.memo(({filter, onSelect, isSelected} : {filter:CategoryFilter, onSelect: (filter:CategoryFilter) => void, isSelected:boolean}) => {
  return (
    <div className={`shrink-0 w-[160px] h-[80px] border bg-white rounded-md px-3 py-4 flex flex-row relative hover:shadow-lg cursor-pointer ${isSelected ? 'border-munchies-green' : 'border-munchies-gray'}`} onClick={() => onSelect(filter) }>
      <div className='text-wrap'>
        <p className='text-sm'>{filter.name}</p>
      </div>
      <Image src={`/assets${filter.image_url}`} width={80} height={80} alt="Card Image" className='absolute w-[80px] h-[80px] -top-1 -right-1 mr-1.5'/>
    </div>
  )
})
FilterCard.displayName = 'FilterCard';
export default FilterCard