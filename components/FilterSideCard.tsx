"use client"
import { Badge } from "../components/ui/badge";


import { GetServerSideProps } from 'next';
import { NextApiRequest } from 'next';

import { useDeviceType } from "@/hooks/useDeviceType";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = (req as NextApiRequest).headers['user-agent'];
  const isMobile = /mobile/i.test(userAgent || '');

  return {
    props: {
      isMobile,
    },
  };
};

// Add mobile view
const FilterSideCard = ({ isMobile }: { isMobile: boolean }) => {
  const isFromMobile = useDeviceType(isMobile);
  const deliveryTimeValues:string[] = ['0-10 min', '10-30 min', '30-60 min', '1 hour+'];
  const priceRangeValues:string[] = ['$', '$$', '$$$', '$$$$'];

  if(isFromMobile){
    return (
      <div className="my-6">
      <p className="uppercase text-sm">Delivery Time</p>
      <div className="mt-4 flex gap-2.5">
        <Badge variant="outline" className="rounded-lg border-munchies-gray py-2 px-3">5-10 min</Badge>
        <Badge variant="outline" className="rounded-lg border-munchies-gray py-2 px-3">10-15 min</Badge>
      </div>
    </div>
    )
  }
  return (
    <div className='bg-white w-[239px] border-munchies-gray border-[0.6px] rounded-md p-6 h-full'>
      <p className="text-2xl">Filter</p>
      <div className="my-8">
        <p className="uppercase text-sm">Food Category</p>
        <div className="mt-4 grid gap-2.5">
          <Badge variant="outline" className="rounded-lg border-munchies-gray py-2 px-3">Hamburger</Badge>
          <Badge variant="outline" className="rounded-lg border-munchies-gray py-2 px-3">Coffee</Badge>
        </div>
      </div>
      <div className="my-8">
        <p className="uppercase text-sm">Delivery Time</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {deliveryTimeValues.map((value)=> (
            <Badge key={value} variant="outline" className="rounded-lg border-munchies-gray py-2 px-3">{value}</Badge>
          ))}
        </div>
      </div>
      <div className="my-8">
        <p className="uppercase text-sm">Price Range</p>
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