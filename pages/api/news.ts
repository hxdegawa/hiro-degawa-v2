// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type minimalArticle = {
  title: string
  url: string
}

type Data = {
  articles: minimalArticle[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const newsRes = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&country=jp&from=2022-12-27sortBy=publishedAt&pageSize=3&apiKey=${process.env.NEWS_API_KEY}`,
    {
      next: { revalidate: 60 * 30 }, // 30分
    }
  )

  const { articles } = await newsRes.json()
  const simplifiedArticles: minimalArticle[] = articles.map((article: any) => {
    return { title: article?.title || '', url: article.url || '' }
  })
  res.status(200).json({ articles: simplifiedArticles })
}
