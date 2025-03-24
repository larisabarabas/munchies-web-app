import { create } from 'zustand'

export const useFilterStore = create<State>((set) => ({
    selectedFilter: null,
    setFilter: (filter) => set({selectedFilter: filter})
}))