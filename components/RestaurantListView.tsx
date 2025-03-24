"use client"
import RestaurantListItem from "./RestaurantListItem";

import { useFilterStore } from "@/store/useFilterStore";

const RestaurantListView = ({restaurants}: {restaurants: Restaurant[]}) => {
  const {selectedFilter} = useFilterStore()
  const filteredList = selectedFilter ? restaurants.filter((item) => item.filter_ids.includes(selectedFilter.id)) : restaurants
 return (
    <div className="mb-8">
        <p className="text-xl lg:text-[40px] mb-5 lg:mb-8">Restaurants</p>
        <div className="flex flex-wrap gap-[17px]">
          {filteredList.map((restaurant) => (
            <RestaurantListItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
    </div>
  )
}

export default RestaurantListView