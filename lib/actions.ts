"use server"
import { sanityFetch } from '@/sanity/lib/live';
import {FILTER_STATIC_CONTENT_QUERY, SPLASH_SCREEN_STATIC_CONTENT_QUERY} from '@/sanity/lib/queries'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://work-test-web-2024-eze6j4scpq-lz.a.run.app"

const constructUrl = (endpoint: string, params?: string[]) => {
    let fullEndpoint = endpoint

    if (params) {
        fullEndpoint = `${endpoint}/${params.join('/')}`
    }

    const url = new URL(fullEndpoint, API_URL)
    return url
}

export const getSplashScreenStaticContent = async () =>{
    const {data: content} = await sanityFetch({query: SPLASH_SCREEN_STATIC_CONTENT_QUERY})
    return content
}

export const getFilterStaticContent = async () =>{
    const {data: content} = await sanityFetch({query: FILTER_STATIC_CONTENT_QUERY})
    return content
}

export const getFilters = async() => {
    const url = constructUrl('/api/filter')
    try {
        const response = await fetch(url)
        const data = await response.json()
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
        const data = await response.json()
        return data.restaurants
    } catch (error) {
        console.error('Failed fetching restaurants:',error)
        throw new Error('Failed fetching restaurants. Please try again later!')
    }
}

export const getIsRestaurantOpen = async(id: string) => {
    const url = constructUrl('/api/open', [id])
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.is_open
    } catch (error) {
        console.error('Failed fetching restaurant data:',error)
        throw new Error('Failed fetching restaurant data. Please try again later!')
    }
}