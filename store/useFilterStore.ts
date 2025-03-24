import { create } from 'zustand'

export const useFilterStore = create<State>((set) => ({
    category: null,
    price_range: '',
    delivery_time:null,
    setCategory: (category) => set({category: category}),
    setDeliveryTime: (delivery_time) => set({delivery_time: delivery_time}),
    setPriceRange: (price_range) => set({price_range: price_range})
}))