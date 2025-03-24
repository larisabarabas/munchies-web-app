import { create } from 'zustand'

export const useFilterStore = create<State>((set) => ({
    category: null,
    price_range: '',
    delivery_time:null,
    setCategory: (category) =>set((state) => ({
        category: state.category === category ? null : category,
    })),
    setDeliveryTime: (delivery_time) => set((state) => ({
        delivery_time: state.delivery_time === delivery_time ? null : delivery_time
    })),
    setPriceRange: (price_range) => set(((state) => ({
        price_range: state.price_range === price_range ? '' : price_range
    })))
}))