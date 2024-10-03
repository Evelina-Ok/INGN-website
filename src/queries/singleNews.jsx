// $newsslug is a name we are giving
// using nearly same query but changing it to take single article instead of all
export const singleNews = `query singleNewsQuery ($newsslug: String!) {
newscard(where: {slug: $newsslug}) {
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