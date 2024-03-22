import { animesActions } from "../slices/AnimesSlice";

export const saveAnimesToData = (animesFavoritLists) => {
    return async (done) => {
        localStorage.setItem("animes", animesFavoritLists);
        done(animesActions.setAnimesList(animesFavoritLists));
    };
};