"use client"
import { Badge } from "@/components/ui/badge";
import { useDeviceType } from "@/hooks/useDeviceType";
import { extractStaticValue, getDeliveryTimeStringInterval } from "@/lib/utils";
import { useFilterStore } from "@/store/useFilterStore";

const deliveryTimeValues = [
  { id: 0, min: 0, max: 10 },
  { id: 1, min: 10, max: 30 },
  { id: 2, min: 30, max: 60 },
  { id: 3, min: 60, max: 100 },
];

const priceRangeValues: string[] = ['$', '$$', '$$$', '$$$$'];

const FilterSideCard = ({ isMobile, staticContent, filters }: { isMobile: boolean, staticContent: StaticContent, filters: CategoryFilter[] }) => {
  const isFromMobile = useDeviceType(isMobile);
  const { category, price_range, delivery_time, setCategory, setDeliveryTime, setPriceRange } = useFilterStore();

  const renderDeliveryTimeBadges = () => (
    deliveryTimeValues.map((item) => (
      <Badge
        key={item.id}
        onClick={() => setDeliveryTime(item)}
        variant="outline"
        className={`rounded-lg py-2 px-3 cursor-pointer ${delivery_time?.id === item.id ? 'border-munchies-green' : 'border-munchies-gray'}`}
      >
        {getDeliveryTimeStringInterval(item)}
      </Badge>
    ))
  );

  const renderPriceRangeBadges = () => (
    priceRangeValues.map((value) => (
      <Badge
        key={value}
        onClick={() => setPriceRange(value)}
        variant="outline"
        className={`rounded-lg border-munchies-gray p-2 cursor-pointer ${price_range === value ? 'border-munchies-green' : 'border-munchies-gray'}`}
      >
        {value}
      </Badge>
    ))
  );

  const renderCategoryBadges = () => (
    filters.map((filter: CategoryFilter) => (
      <Badge
        key={filter.id}
        onClick={() => setCategory(filter)}
        variant="outline"
        className={`rounded-lg border-munchies-gray py-2 px-3 cursor-pointer ${category?.id === filter.id ? 'border-munchies-green' : 'border-munchies-gray'}`}
      >
        {filter.name}
      </Badge>
    ))
  );

  if (isFromMobile) {
    return (
      <div className="my-6">
        <p className="uppercase text-sm opacity-40 font-medium">Delivery Time</p>
        <div className="mt-4 flex gap-2.5">
          {renderDeliveryTimeBadges()}
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white w-[239px] border-munchies-gray border-[0.6px] rounded-md p-6 h-full'>
      <p className="text-2xl">{extractStaticValue(staticContent, 'title')}</p>
      <div className="my-8">
        <p className="uppercase text-sm opacity-40 font-medium">{extractStaticValue(staticContent, 'food-category')}</p>
        <div className="mt-4 grid gap-2.5">
          {renderCategoryBadges()}
        </div>
      </div>
      <div className="my-8">
        <p className="uppercase text-sm opacity-40 font-medium">{extractStaticValue(staticContent, 'delivery-time')}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {renderDeliveryTimeBadges()}
        </div>
      </div>
      <div className="my-8">
        <p className="uppercase text-sm opacity-40 font-medium">{extractStaticValue(staticContent, 'price-range')}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {renderPriceRangeBadges()}
        </div>
      </div>
    </div>
  );
};

export default FilterSideCard;