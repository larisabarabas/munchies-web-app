import FilterSideCard from "@/components/FilterSideCard";
import logoBlack from "../../public/assets/images/logo-black.svg";
import Image from 'next/image';
import FilterCardsScrollable from "@/components/FilterCardsScrollable";

const Restaurants = () => {
  // fetch filters 
  // fetch restaurant
  // handle filtering
  return (
  <div>
    <Image
      src={logoBlack}
      alt="Munchies Logo Black"
      width={273.42}
      height={40}
      className="w-[167px] h-[24px] lg:w-[273.42px] lg:h-[40px]"
    />
    <div className="min-h-screen flex flex-col md:flex-row mt-12">
      <div className="w-full md:w-[239px] mr-5 mb-6">
        <FilterSideCard />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <FilterCardsScrollable/>
        {/* Restaurants List View */}
        <div className="flex-grow md:mt-6 mt-6">
          Restaurants - ListView ➔ List Item
        </div>

      </div>
    </div>
  </div>
  )}


export default Restaurants