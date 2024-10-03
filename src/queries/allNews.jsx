export const allNews = `query MyQuery {
  articles (first: 100) { 
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