"use server"
import { sanityFetch } from '@/sanity/lib/live';
import {FILTER_STATIC_CONTENT_QUERY, SPLASH_SCREEN_STATIC_CONTENT_QUERY} from '@/sanity/lib/queries'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ""

const constructUrl = (endpoint: string, params?: string[]) => {
    let fullEndpoint = endpoint
    if (params) {
        fullEndpoint = `${endpoint}/${params.join('/')}`
    }
    const url = new URL(fullEndpoint, API_URL)
    return url
}

const handleApiResponse = async(response:Response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = response.json()
    return data;
}

export const getSplashScreenStaticContent = async () =>{
    try {
        const {data: content} = await sanityFetch({query: SPLASH_SCREEN_STATIC_CONTENT_QUERY})
        return content
    } catch (error) {
        console.error('Failed fetching splash screen static content:',error)
        throw new Error('Failed fetching splash screen static content. Please try again later!')
    }
}

export const getFilterStaticContent = async () =>{
    try {
        const {data: content} = await sanityFetch({query: FILTER_STATIC_CONTENT_QUERY})
        return content
    } catch (error) {
        console.error('Failed fetching filter static content:',error)
        throw new Error('Failed fetching filter static content. Please try again later!')
    }
}

export const getFilters = async() => {
    const url = constructUrl('/api/filter')
    try {
        const response = await fetch(url)
        const data = await handleApiResponse(response)
        return data.filters
    } catch (error) {
        console.error('Failed fetching filters:',error)
        throw new Error('Failed fetching filters. Please try again later!')
    }
}


export const getRestaurants = async() => {
    const url = constructUrl('/api/restaurants')
    try {
        const response = await fetch(url)
        const data = await handleApiResponse(response)
        const restaurants = await Promise.all(data.restaurants.map(async (restaurant: Restaurant) => {
            const priceRange = await getPriceRange(restaurant.price_range_id)
            const isOpen = await getIsRestaurantOpen(restaurant.id)
            return {
                ...restaurant,
                price_range: priceRange,
                isOpen: isOpen
            }
        }))
        return restaurants
    } catch (error) {
        console.error('Failed fetching restaurants:',error)
        throw new Error('Failed fetching restaurants. Please try again later!')
    }
}

export const getIsRestaurantOpen = async(id: string) => {
    const url = constructUrl('/api/open', [id])
    try {
        const response = await fetch(url)
        const data = await handleApiResponse(response)
        return data.is_open
    } catch (error) {
        console.error('Failed fetching restaurant data:',error)
        throw new Error('Failed fetching restaurant data. Please try again later!')
    }
}

export const getPriceRange = async(id: string) => {
    const url = constructUrl('/api/price-range', [id])
    try {
        const response = await fetch(url)
        const data = await handleApiResponse(response)
        return data.range
    } catch (error) {
        console.error('Failed fetching price_range:', error)
        throw new Error('Failed fetching price_range. Please try again later!')
    }
}