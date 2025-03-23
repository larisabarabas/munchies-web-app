import Image from 'next/image';

import FilterCardsScrollable from "@/components/FilterCardsScrollable";
import RestaurantListView from "@/components/RestaurantListView";
import FilterSideCard from "@/components/FilterSideCard";

import logoBlack from "../../public/assets/images/logo-black.svg";

const Restaurants = () => {
  // fetch filters 
  // fetch restaurants
  // handle filtering
  const restaurants = [
    {
      "id": "79d66f8a-3170-4036-a466-09312c721239",
      "name": "Waynes Coffee",
      "rating": 4.5,
      "filter_ids": [
        "5e0f48b8-24df-417a-950a-4f1efb658974"
      ],
      "image_url": "/images/coffee.png",
      "delivery_time_minutes": 30,
      "price_range_id": "d09ff4c9-e90e-42c7-b78b-bdc65e3331ce"
    },
    {
      "id": "3d76ddd2-8018-48ca-9040-ec021ae72d6e",
      "name": "Oskars Tacos",
      "rating": 3.8,
      "filter_ids": [
        "0c99583e-93c8-47c5-b407-08082f31ea24"
      ],
      "image_url": "/images/taco.png",
      "delivery_time_minutes": 45,
      "price_range_id": "ff6b5391-2f0d-4b39-8ba8-d415c52a425d"
    }
  ]

  const filters = [
    {
      "id": "e1d72f68-77d2-4d18-b323-878984b60e12",
      "name": "Hamburger",
      "image_url": "/images/hamburger.png"
    },
    {
      "id": "59c5e8f0-8255-45e4-9674-1602e4f32998",
      "name": "Pizza",
      "image_url": "/images/pizza.png"
    },
    {
      "id": "0c99583e-93c8-47c5-b407-08082f31ea24",
      "name": "Taco´s",
      "image_url": "/images/taco.png"
    }
  ]
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
        <FilterSideCard isMobile />
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