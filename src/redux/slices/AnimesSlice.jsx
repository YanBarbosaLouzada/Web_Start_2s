import { createSlice } from '@reduxjs/toolkit'


const AnimesSlice = createSlice({
    name: "cart",
    initialState: {
        animes: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addAnime(state, action) {
            const newAnime = action.payload;
            const existingItem = state.items.find((item) => item.mal_id === newAnime.mal_id);
            if (!existingItem) {
                state.totalQuantity++;
                state.animes.push(newAnime);
            }
        },
        removeAnime(state, action) {
            const id = action.payload;
            const existingItemIndex = state.animes.findIndex((item) => item.mal_id === id);
            if (existingItemIndex !== -1) {
                state.totalQuantity--;
                state.animes.splice(existingItemIndex, 1);
            }
        },
        setAnimesList(state, action) {
            const animeList = action.payload;
            state.animes = animeList;
        }
    }
})

export const animesActions = AnimesSlice.actions;
export default AnimesSlice;