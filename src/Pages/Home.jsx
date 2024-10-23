import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { allNews } from "../queries/allNews";
import { useEffect } from "react";
import { NewsCard } from "../Components/NewsCard/NewsCard";
import { Helmet } from "react-helmet-async";
import { Grid } from "../Components/Grid/Grid";



export function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allNews"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, allNews),
  });
  console.log(data);

  useEffect(() => {}, [data]);

  if (isLoading) {
    return <p>Loading news</p>;
  }
  if (error) {
    return <p>Error{error.message}</p>;
  }

  return (
    <>
    <Helmet>
      <title>Ologies</title>
      <meta name="description" content="See the latest recommended episodes of Ologies"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ologies"/>
      <meta property="og:url" content="https://merry-kulfi-0d62b6.netlify.app/"/>

    </Helmet>
    
    <Grid>
             {/* // need to map the articles to show all of them, not just one */}
         {data?.articles?.map((item, index) => (
      <NewsCard
        key={item.petSlug}
        title={item.title}
        // first 200 character plus '...' .substring(0, 200)+"..."
        content={item.content.substring(0, 200)+"..."}
        date={item?.date}
        author={item?.author}
        image={item?.assets[0]?.url}
        //slug is used as prop in NewsCard component. in Hygraph I called it petSlug, but I'm naming my prop slug
        slug={item?.petSlug}
      >
      
      </NewsCard>
      ) )}
    </Grid>
    </>
  );
} 
