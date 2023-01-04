import Head from 'next/head'
import { HomeTemplate } from '~/components/page/Home'

type minimalArticle = {
  title: string
  url: string
}

type Props = {
  response: minimalArticle[]
}

const Home: React.FC<Props> = ({ response }) => {
  return (
    <>
      <Head>
        <title>Hiro Degawa</title>
      </Head>
      <HomeTemplate newsHeadlines={response} />
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const newsRes = await fetch(`${process.env.API_ORIGIN}/news`, {
    next: { revalidate: 60 * 30 }, // 30分
  })

  const { articles } = await newsRes.json()

  return { props: { response: articles } }
}
