import Image from 'next/image';

import FilterCardsScrollable from "@/components/FilterCardsScrollable";
import RestaurantListView from "@/components/RestaurantListView";
import FilterSideCard from "@/components/FilterSideCard";

import logoBlack from "../../public/assets/images/logo-black.svg";
import { getFilters, getFilterStaticContent, getRestaurants } from '@/lib/actions';

const Restaurants = async () => {
  const restaurants = await getRestaurants()
  const filters = await getFilters()
  const content = await getFilterStaticContent()
  console.log(content)
  return (
  <div>
    <Image
      src={logoBlack}
      alt="Munchies Logo Black"
      width={273.42}
      height={40}
      className="w-[167px] h-[24px] lg:w-[273.42px] lg:h-[40px]"
    />
    <div className="min-h-screen flex flex-col md:flex-row mt-0 lg:mt-12">
      <div className="w-full md:w-[239px] mr-5">
        <FilterSideCard isMobile staticContent={content[0]} filters={filters} />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <FilterCardsScrollable filters={filters}/>
        <div className="flex-grow md:mt-6 mt-6">
          <RestaurantListView restaurants={restaurants}/>
        </div>
      </div>
    </div>
  </div>
  )}


export default Restaurants