//provides a global state and functions to manage the movie data
import React, { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);
    useEffect(() =>{
        const storedFavs = localStorage.getItem("favourites");
        if(storedFavs)
            setFavourites(JSON.parse(storedFavs));

    },[]); //runs only once when the component mounts
    //json.parse converts the string to an array since localstorage only stores strings

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites)); // saves the favourites to local storage
        //JSON.stringify converts the array to a string
    }, [favourites]); //runs whenever favourites changes

    const addtoFavourites = (movie) => {
        setFavourites((prev) => [...prev, movie]); //adds the movie to the favourites array
    }
    //prev is the previous state of favourites, we spread it to keep the previous movies and add the new one

    const removeFromFavourites = (movieId) => {
        setFavourites((prev) => prev.filter((m) => m.id !== movieId)); //removes the movie from the favourites array
    }
    //filter creates a new array with all the movies except the one that matches the id of the movie to be removed
    //m is the current movie in the array, we check if its id is not equal to the id of the movie to be removed
    const isFavourite = (movieId) => {
        return favourites.some((m) => m.id === movieId); //checks if the movie is already in the favourites array
    }

    const value = {
        favourites,
        addtoFavourites,
        removeFromFavourites,
        isFavourite
    };
     //provides the state and functions to the components that use this context
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
} //provides state to any components wrapped inside it
//children is the components that will use this context

