"use client"
import RestaurantListItem from "./RestaurantListItem";

import { useFilterStore } from "@/store/useFilterStore";

const RestaurantListView = ({restaurants}: {restaurants: Restaurant[]}) => {
  const {category, price_range, delivery_time} = useFilterStore()
  const filteredList = restaurants.filter((item) => {
    return (
      (!category || item.filter_ids.includes(category.id)) &&
      (!price_range || item.price_range === price_range) &&
      (!delivery_time || (Number(delivery_time.min) <= item.delivery_time_minutes && item.delivery_time_minutes < Number(delivery_time.max)))
    )
  })

  if(!filteredList.length) return <p>No restaurants found.</p>
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