import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types/Movie";
import { MovieRepository } from "../repository/MovieRepository";

export const useTopRatedMovies = ()=>{
    const{
        data: movies = [],
        isLoading: loading,
        isError,
        error
    }= useQuery<Movie[],Error> ({
        queryKey: ['topRatedMovies'],
        queryFn: MovieRepository.getTopRatedMovies,
        staleTime: 5*6*1000,
        retry:1,
        refetchOnWindowFocus: false,
    });
    const errorMessage = isError ? (error?.message || 'An error occurr'): null;
    return{
        movies,
        loading,
        error: errorMessage,
    
    }
}