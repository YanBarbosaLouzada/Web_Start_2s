import { animeActions } from "../AnimesSlice";

export const getAnimesFromStorage = () => {
    return async (done) => {
        const animes = localStorage.getItem("animesList");
        done(animeActions.setAnimesList(animes));
    };
};