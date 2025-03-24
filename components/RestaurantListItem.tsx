"use client"
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const RestaurantListItem = ({ restaurant }: { restaurant: Restaurant }) => {

  return (
    <div className="w-[327px] h-[202px] bg-white border-munchies-gray rounded-lg shadow-sm relative overflow-hidden flex flex-col justify-between p-4">
      <div>
        <div className="flex gap-2">
          {restaurant.isOpen ? (
            <>
              <Badge variant="outline" className="rounded-full border-munchies-gray py-2 px-3">
                <span className="rounded-full bg-munchies-green w-2 h-2"></span>
                <p>Open</p>
              </Badge>
              <Badge variant="outline" className="rounded-full border-munchies-gray py-2 px-3">
                <p>{restaurant.delivery_time_minutes} min</p>
              </Badge>
            </>
          ) : (
            <Badge variant="outline" className="rounded-full border-munchies-gray bg-white py-2 px-3 self-start">
              <span className="rounded-full bg-munchies-black w-2 h-2"></span>
              <p>Closed</p>
            </Badge>
          )}
        </div>
        <Image
          src={`/assets${restaurant.image_url}`}
          width={140}
          height={140}
          priority={false}
          alt="Card image"
          className={`absolute -top-9 -right-4 object-cover ${!restaurant.isOpen ? 'grayscale opacity-40' : ''}`}
        />
      </div>
      <div className="flex flex-row justify-between content-center">
        <p className={`text-2xl overflow-hidden text-ellipsis ${!restaurant.isOpen ? 'opacity-40' : ''}`}>{restaurant.name}</p>
        <Button
          variant="default"
          disabled={!restaurant.isOpen}
          className="bg-munchies-green self-center w-8 h-8 rounded-full text-white hover:bg-green-700 hover:scale-105 hover:shadow-lg active:bg-green-800 active:scale-95 active:shadow-sm"
        >
          <ArrowRight />
        </Button>
      </div>
      {!restaurant.isOpen && (
        <div className="w-[327px] h-[202px] border-munchies-gray rounded-lg absolute top-0 left-0 p-4 flex items-center justify-center">
            <Badge variant="outline" className="self-center rounded-md border-munchies-gray bg-munchies-white-off py-2 px-3">
              <p>Opens tomorrow at 12 pm</p>
            </Badge>
        </div>
      )}
    </div>
  );
};

export default RestaurantListItem;