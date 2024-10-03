import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { NavLink } from "react-router-dom";
import { allNews } from "../queries/allNews"
import { useEffect } from "react";
import { NewsCard } from "../Components/NewsCard/NewsCard"; 


export function Home () {
  
        const { data, isLoading, error} = useQuery({
            queryKey: ["allNews"],
            queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, allNews),
            
            
        });
        console.log(data)

        useEffect(() => {
        },[data])

        if (isLoading) {
            return <p>Loading news</p>
        }
        if (error) {
            return <p>Error{error.message}</p>
        }

    return (
        <NewsCard
        key={data.articles.petSlug}
        title={data.articles.title}
        // first 100 character plus '...' .substring(0, 100)+"..."
        content={data.articles.content}
        date={data.articles.date}
        author={data.articles.author}
        image={data?.articles[0]?.assets[0]?.url}
        >
            {/* to={} */}
        {/* <NavLink >Read more</NavLink> */}

        </NewsCard>
    );
}