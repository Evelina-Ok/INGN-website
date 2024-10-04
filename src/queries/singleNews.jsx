// $articleSlug is a name we are giving for this varable
// using nearly same query but changing it to take single article instead of all
export const singleNews = `query singleNewsQuery ($articleSlug: String!) {
newscard(where: {petSlug: $articleSlug}) {
    id
    petSlug
    title
    category
    date
    author
    content
    assets {
      url
      id
    }
  }
}`