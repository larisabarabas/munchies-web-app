import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useFilterStore = create(
    persist<State>(
        (set) => ({
            price_range: '',
            delivery_time:null,
            categories: [],
            toggleCategories: (category) => {
                set((state) => {
                    const exists = state.categories?.some((item) => item.id === category.id);
                    return {
                        categories: exists
                        ? state.categories?.filter((item) => item.id !== category.id)
                        : [...state.categories, category], 
                    };
                    });
            },
            setDeliveryTime: (delivery_time) => set((state) => ({
                delivery_time: state.delivery_time === delivery_time ? null : delivery_time
            })),
            setPriceRange: (price_range) => set(((state) => ({
                price_range: state.price_range === price_range ? '' : price_range
            }))),
            clearFilters: () => {
                set({categories: [], price_range: '', delivery_time: null})
                localStorage.removeItem('filters-storage')
            }
        }),
        {
            name: 'filters-storage'
        }
    )
)