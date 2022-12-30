import styled from '@emotion/styled'
import Image from 'next/image'
import { NewsBillBoard } from '~/components/page_components/home'
import { GeneralParagraph } from '~/components/_shared/Text'

type minimalArticle = {
  title: string
  url: string
}

type Props = {
  newsHeadlines: minimalArticle[]
}

const HomeTemplate: React.FC<Props> = ({ newsHeadlines }) => {
  return (
    <main style={{ backgroundColor: '#fff' }}>
      <Screen>
        <Wrapper>
          <NewsBillBoard newsHeadlines={newsHeadlines} />
          <TopSection>
            <TextCatch src="/assets/home/text_catch.svg" alt="catch" />
            <GeneralParagraph style={{ marginTop: 70 }}>
              貪婪な広告や虚報に渦巻く情報社会に、欲張らず誠実な立場で向き合って。
              <br />
              じっくりと読み手の思考をたどってゆけば、燦然と輝く情報を生み出せるはずです。
            </GeneralParagraph>
            <ImgWrapper>
              <PhotoCatch
                src={'/assets/home/img_catch.jpg'}
                alt={'Ordinary street'}
                fill
                sizes="(max-width: 1280px) 100vw,"
                priority={true}
              />
            </ImgWrapper>
            <ImgTip>散歩中に撮った、ただの日常風景。 ▲</ImgTip>
          </TopSection>
          <SecondSection>
            <TitleWrapper>
              <SectionTitle>この支離滅裂なWebページの趣旨</SectionTitle>
              <SectionSubTitle>About this page</SectionSubTitle>
            </TitleWrapper>
            <GeneralParagraph style={{ marginTop: 70, color: '#444' }}>
              あなたはこの変なWebページに ”何らかの意味”
              を求めて、ここまでスクロールしてきました。
              <br />
              それは至極自然な関心であり、その純朴な興味のままにインターネットを彷徨うことができれば、世界はとても面白くなると思うのです。
              <br />
              しかし今、世界のインターネットは ”評価”
              に取り憑かれており、それをとても難しくしています。
            </GeneralParagraph>
            <GeneralParagraph style={{ marginTop: 30, color: '#444' }}>
              このWebサイトはそういったインターネットの現状へのアンチテーゼであり、素直な気持ちでネットを楽しみたい人々に寄り添うWebサイトなのです。
              <br />
            </GeneralParagraph>
            <GeneralParagraph style={{ marginTop: 30 }}>
              豊かなインターネットへようこそ。
            </GeneralParagraph>
          </SecondSection>
        </Wrapper>
      </Screen>
    </main>
  )
}

export default HomeTemplate

const Screen = styled.section`
  display: block;
  position: relative;
  background-color: #fff;
  min-height: 100vh;
`

const Wrapper = styled.div`
  height: 100%;
  max-width: 1280px;
  padding: 80px 0;
  margin: 0 auto;
`

const TopSection = styled.section`
  padding: 80px 0;

  @media screen and (max-width: 1320px) {
    padding: 80px 20px;
  }
`

const TextCatch = styled.img`
  object-fit: contain;
  width: 100%;
  padding-right: 50%;

  @media screen and (max-width: 1320px) {
    padding-right: 35%;
  }

  @media screen and (max-width: 640px) {
    padding-right: 20%;
  }
`

const ImgWrapper = styled.div`
  position: relative;
  margin: 80px auto 0 30%;
  height: 500px;

  @media screen and (max-width: 1320px) {
    margin: 80px 0 0 0;
  }
`

const PhotoCatch = styled(Image)`
  object-fit: cover;
`

const ImgTip = styled.p`
  text-align: right;
  font-size: 1.1rem;
  letter-spacing: 1px;
`

const SecondSection = styled.section`
  padding: 80px 0;

  @media screen and (max-width: 1320px) {
    padding: 80px 20px;
  }
`
const TitleWrapper = styled.div`
  display: block;
  width: max-content;
`

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0 0 5px 0;
`

const SectionSubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding-left: 2px;
  margin: 0;
`
