"use client"
import { Badge } from "../components/ui/badge";


import { GetServerSideProps } from 'next';
import { NextApiRequest } from 'next';

import { useDeviceType } from "@/hooks/useDeviceType";
import { extractStaticValue } from "@/lib/utils";
import { useFilterStore } from "@/store/useFilterStore";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = (req as NextApiRequest).headers['user-agent'];
  const isMobile = /mobile/i.test(userAgent || '');

  return {
    props: {
      isMobile,
    },
  };
};

const FilterSideCard = ({ isMobile, staticContent, filters }: { isMobile: boolean, staticContent: StaticContent, filters: Filter[] }) => {
  const isFromMobile = useDeviceType(isMobile);
  const deliveryTimeValues:string[] = ['0-10 min', '10-30 min', '30-60 min', '1 hour+'];
  const priceRangeValues:string[] = ['$', '$$', '$$$', '$$$$'];
  const {selectedFilter, setFilter} = useFilterStore();

  if(isFromMobile){
    return (
      <div className="my-6">
      <p className="uppercase text-sm opacity-40 font-medium">Delivery Time</p>
      <div className="mt-4 flex gap-2.5">
          {deliveryTimeValues.map((value)=> (
            <Badge key={value} variant="outline" className="rounded-lg border-munchies-gray bg-white py-2 px-3">{value}</Badge>
          ))}
      </div>
    </div>
    )
  }
  return (
    <div className='bg-white w-[239px] border-munchies-gray border-[0.6px] rounded-md p-6 h-full'>
      <p className="text-2xl">{extractStaticValue(staticContent, 'title')}</p>
      <div className="my-8">
        <p className="uppercase text-sm opacity-40 font-medium">{extractStaticValue(staticContent, 'food-category')}</p>
        <div className="mt-4 grid gap-2.5">
          {
            filters.map((filter: Filter) => (
              <Badge key={filter.id} onClick={() => setFilter(filter)} variant="outline" className={`rounded-lg border-munchies-gray py-2 px-3 cursor-pointer ${selectedFilter?.id === filter.id ? 'border-munchies-green' : 'border-munchies-gray'}`}>{filter.name}</Badge>
            ))
          }
        </div>
      </div>
      <div className="my-8">
        <p className="uppercase text-sm opacity-40 font-medium">{extractStaticValue(staticContent, 'delivery-time')}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {deliveryTimeValues.map((value)=> (
            <Badge key={value} variant="outline" className="rounded-lg border-munchies-gray py-2 px-3">{value}</Badge>
          ))}
        </div>
      </div>
      <div className="my-8">
        <p className="uppercase text-sm opacity-40 font-medium">{extractStaticValue(staticContent, 'price-range')}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {priceRangeValues.map((value)=> (
            <Badge key={value} variant="outline" className="rounded-lg border-munchies-gray p-2">{value}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterSideCard