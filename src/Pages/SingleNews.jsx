import { useQuery, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { format } from "date-fns";
import { useEffect } from "react";
import { singleNews } from "../queries/SingleNews";
import { useParams } from "react-router-dom";
import { SingleCard } from "../Components/SingleCard/SingleCard";






export function SingleNews ({title, date, author, image, content}) {
    
    const {slug} = useParams()

    const {data, isLoading, error} = useQuery({
        queryKey: ["singleNews"],
        queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, singleNews, {articleSlug: slug}),
        enabled:!!slug,
    });

    useEffect(() => {}, [data]);

    if (isLoading) {
        return <p>Loading news</p>;
      }
      if (error) {
        return <p>Error{error.message}</p>;
      }

    //   className={style.singleCardStyle}
    // className={style.textRed}
    return (
    <>
        <section >
        <SingleCard
        key={item.petSlug}
        title={item.title}       
        content={item.content}
        date={item?.date}
        author={item?.author}
        image={item?.assets[0]?.url}
        //slug is used as prop in NewsCard component. in Hygraph I called it petSlug, but I'm naming my prop slug
        slug={item?.petSlug}
      >
      
      </SingleCard>
        </section>
    </>
    )
}