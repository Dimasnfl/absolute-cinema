import axios from "axios";

window.onscroll = function () {
    const header = document.querySelector("header");
    const navFixed = header.offsetTop;
    const scrollTop = document.querySelector("#scroll-top");

    if (window.scrollY > navFixed) {
        header.classList.add("nav-fixed");
        scrollTop.classList.remove("hidden");
        scrollTop.classList.add("flex");
    } else {
        header.classList.remove("nav-fixed");
        scrollTop.classList.remove("flex");
        scrollTop.classList.add("hidden");
    }
};

const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;
const baseURL = import.meta.env.VITE_REACT_APP_BASEURL;

export const getMovieList = async () => {
    const movie = await axios.get(
        `${baseURL}/movie/popular?page=1&api_key=${apiKey}`
    );
    return movie.data.results;
};

export const searchMovie = async (keyword) => {
    const search = await axios.get(
        `${baseURL}/search/movie?query=${keyword}&page=1&api_key=${apiKey}`
    );
    return search.data;
};
