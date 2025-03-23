interface Filter {
    id: string,
    name: string,
    image_url: string
}

interface FiltersResponse {
    filters: Filter[]
}

interface Restaurant {
    id: string,
    name: string,
    rating: number,
    filter_ids: string[],
    image_url: string,
    delivery_time_minutes: integer
}

interface RestaurantsResponse{
    restaurants: Restaurant[]
} 

interface OpenStatus {
    restaurant_id: string,
    is_currently_open: boolean
}

interface PriceRange {
    id: string,
    range: string
}

interface ErrorResponse {
    error: boolean,
    reason: string
}