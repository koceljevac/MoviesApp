import { useQuery } from "@tanstack/react-query";
import { ActorsRepository } from "../repository/ActorsRepository";

export const usePopularActors = ()=> {
    const {
        data: actors = [],
        isLoading: loading,
        isError,
        error
    }= useQuery({
        queryKey : ['popularActors'],
        queryFn: ActorsRepository.getPopularActors,
        retry: 1,
        refetchOnWindowFocus: false
    });
    const errorMessage = isError ? (error?.message || 'An error occurred') : null;

    return{
        actors,
        loading,
        error: errorMessage
    }
};