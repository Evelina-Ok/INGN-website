import { useQuery, useQueryClient } from "@tanstack/react-query";
import request from "graphql-request";
import { format } from "date-fns";
import { useEffect } from "react";
import { singleNews } from "../queries/singleNews";
import { useParams } from "react-router-dom";
import { SingleCard } from "../Components/SingleCard/SingleCard";
import { Helmet } from "react-helmet-async";





export function SingleNews ({title, date, author, image, content}) {
    
    const {slug} = useParams()

    const {data, isLoading, error} = useQuery({
        queryKey: ["singleNews"],
        queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, singleNews, {articleSlug: slug}),
        // enabled:!!slug,
    });

    useEffect(() => {}, [data]);

    if (isLoading) {
        return <p>Loading news</p>;
      }
      if (error) {
        return <p>Error{error.message}</p>;

      }
      console.log(data);
      

    //   className={style.singleCardStyle}
    // className={style.textRed}
    return (
    <>
    <Helmet>
      <title>{data.article.title}</title>
      <meta name="description" content={data.article.title}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={data.article.title}/>
      <meta property="og:url" content={`https://merry-kulfi-0d62b6.netlify.app/SingleNews/${data.article?.petSlug}`}/>
    </Helmet>
        <section >
        <SingleCard
        key={data.article.petSlug}
        title={data.article.title}       
        content={data.article.content}
        date={data.article?.date}
        author={data.article?.author}
        image={data.article?.assets[0]?.url}
         //slug is used as prop in NewsCard component. in Hygraph I called it petSlug, but I'm naming my prop slug
        slug={data.article?.petSlug}
      >
      
      </SingleCard>
        </section>
    </>
    )
}