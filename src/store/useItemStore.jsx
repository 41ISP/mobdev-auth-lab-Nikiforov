import { create } from "zustand";
import { api } from "../api/api"

export const useItemStore = create((set) => ({
    items: [],
    getItems: async () => {
        try {
            const data = await api.itemsPage()
            set({ items: data })
        } catch (error) {
            console.error(error)
        }
    }
}    
))