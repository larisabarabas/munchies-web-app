interface CategoryFilter {
    id: string,
    name: string,
    image_url: string
}

interface Restaurant {
    id: string,
    name: string,
    rating: number,
    filter_ids: string[],
    image_url: string,
    delivery_time_minutes: integer,
    price_range_id: string,
    price_range?: string
}

interface RestaurantsResponse{
    restaurants: Restaurant[]
} 

interface OpenStatus {
    restaurant_id: string,
    is_open: boolean
}

interface PriceRange {
    id: string,
    range: string
}

interface ErrorResponse {
    error: boolean,
    reason: string
}

interface StaticContent {
    body: { key: string, value: string }[];
    key: string,
    name: string,
}

interface State {
    category: CategoryFilter | null;
    price_range: string,
    delivery_time: DeliveryTimeInterval | null,
    setCategory: (category_filter: CategoryFilter) => void,
    setPriceRange: (price_range: string) => void,
    setDeliveryTime: (delivery_time: DeliveryTimeInterval) => void 
}

interface DeliveryTimeInterval {
    id: number,
    min: number,
    max: number
}
