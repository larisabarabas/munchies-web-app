import FilterCard from './FilterCard';

const FilterCardsScrollable = ({filters}:FiltersResponse) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x min-w-0">
        <div className="flex gap-3">
          {filters.map((filter) => (
            <FilterCard key={filter.id} filter={filter}/>
          ))}
        </div>
    </div>
  )
}

export default FilterCardsScrollable