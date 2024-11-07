import './App.css'
import { useState } from 'react'
import { getMovieList, searchMovie } from "./js/api";
import { useEffect } from "react";

const App = () => {
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, [])

    const PopularMovieList = () => {
        return popularMovies.map((movie, i) => {
            return (
                <div className="w-full px-4 md:w-1/2 xl:w-1/3" key={i}>
                    <div className="rounded-xl shadow-lg overflow-hidden mb-10 bg-slate-800 shadow-yellow-500">

                        <img src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt={movie.title} />
                        <div className="-mt-10 ml-3">
                            <div className="flex items-center gap-2">
                                <div className="flex-none">
                                    <svg className="h-8 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                                    </svg>
                                </div>
                                <p className="text-md font-medium text-white">{movie.vote_average}</p>
                            </div>
                        </div>
                        <div className="py-6 px-4">
                            <h3 className="mb-1 font-bold text-xl text-white tracking-widest line-clamp-1">{movie.title}</h3>
                            <p className="mb-3 font-sm text-sm text-slate-400">Release date : {movie.release_date}</p>
                            <p className="mb-1 font-sm text-sm text-slate-400">Synopsis :</p>
                            <p className="font-medium text-base text-slate-300 line-clamp-3">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    const Search = async (keyword) => {
        if (keyword.length > 3) {
            const Keyword = await searchMovie(keyword)
            setPopularMovies(Keyword.results)
        }
    }

    return (
        <>
            <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href="/" className="font-bold uppercase text-xl tracking-widest text-yellow-400 block py-6 lg:text-3xl">🎬 Absolute Cinema</a>
                        </div>
                        <div className="px-4">
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                                <input className="bg-transparent border border-yellow-400 text-white ring-1 ring-yellow-400 text-sm rounded-lg block w-full p-2 focus:outline-none" placeholder="Search movie name..." onChange={({ target }) => Search(target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="main" className="pt-36 pb-32 bg-slate-950">
                <div className="container">
                    <div className="flex flex-wrap justify-center">
                        <PopularMovieList />
                    </div>
                </div>
            </section>

            <a href="#main" id="scroll-top" className="hidden fixed justify-center items-center z-[9999] bottom-4 right-4 p-4 h-14 w-14 rounded-full bg-transparent animate-pulse hover:-translate-y-3 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-500" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
            </a>

        </>
    )
}

export default App
