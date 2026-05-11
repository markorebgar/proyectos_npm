import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favoritos", {
    state: () => ({
        favorites: []
    }),

    getters: {
        getRate: (state) => (id) => {
            const fav = state.favorites.find(f => f.id === id)
            return fav?.rate ?? 0
        },
        esFavorito: (state) => (id) =>
            state.favorites.some(f => f.id === id),
        retornarFavoritos: (state) => (orden) => {
            let copia = [...state.favorites]
            if (orden == "Asc") {
                copia.sort((a, b) => (a.rate ?? 0) - (b.rate ?? 0))
            } else {
                copia.sort((a, b) => (b.rate ?? 0) - (a.rate ?? 0))
            }
            return copia;
        }
    },
    actions: {
        quitarPonerFavorito(product) {
            if (!this.favorites.some(e => e.id == product.id)) {
                this.favorites.push(product)
            } else {
                this.favorites = this.favorites.filter(e => e.id != product.id)
            }
        },

        setFavorito(product) {
            if (!this.favorites.some(e => e.id == product.id)) {
                this.favorites.push(product)
            }
        },
        setRate(productId, level) {

            const fav = this.favorites.find(f => f.id === productId)
            if (fav) fav.rate = level

        }

    }
});