import RestaurantListItem from "./RestaurantListItem";

const RestaurantListView = ({restaurants}: RestaurantsResponse) => {
  return (
    <div>
        <p className="text-xl lg:text-[40px] mb-5 lg:mb-8">Restaurants</p>
        <div className="flex flex-wrap gap-[17px]">
          {restaurants.map((restaurant) => (
            <RestaurantListItem key={restaurant.id} restaurant={restaurant}/>
          ))}
        </div>
    </div>
  )
}

export default RestaurantListView