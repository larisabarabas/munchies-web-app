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
    price_range?: string,
    isOpen?: boolean
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
    price_range: string,
    delivery_time: DeliveryTimeInterval | null,
    categories: CategoryFilter[],
    toggleCategories: (category: CategoryFilter) => void,
    setPriceRange: (price_range: string) => void,
    setDeliveryTime: (delivery_time: DeliveryTimeInterval) => void,
    clearFilters: () => void
}

interface DeliveryTimeInterval {
    id: number,
    min: number,
    max: number
}
