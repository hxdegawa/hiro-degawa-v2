import styled from '@emotion/styled'

type minimalArticle = {
  title: string
  url: string
}

type Props = {
  newsHeadlines: minimalArticle[]
}

const NewsBillBoard: React.FC<Props> = ({ newsHeadlines }) => {
  return (
    <LocalHeader>
      <Catch>
        <NewsText>
          <BlinkingRedCircle />
          <p style={{ paddingRight: 10 }}>News headlines:</p>
          <HorizontalScrolledTextWrapper>
            <div>
              {newsHeadlines.map(({ url, title }) => {
                return (
                  <a href={url} target="_blank">
                    <p key={title}>{title}</p>
                  </a>
                )
              })}
              {newsHeadlines.map(({ url, title }) => {
                return (
                  <a href={url} target="_blank">
                    <p key={title}>{title}</p>
                  </a>
                )
              })}
            </div>
          </HorizontalScrolledTextWrapper>
        </NewsText>
      </Catch>
    </LocalHeader>
  )
}

export default NewsBillBoard

const Catch = styled.div`
  padding: 7px 10px;

  p {
    margin: 0;
    font-size: 0.7rem;
  }
`

const LocalHeader = styled.div`
  position: relative;
  border-top: solid 1px #000;
  border-bottom: solid 1px #000;
`

const NewsText = styled.div`
  display: flex;
  align-items: center;

  & > p {
    flex-shrink: 0;
  }
`

const BlinkingRedCircle = styled.div`
  display: inline-block;
  background-color: red;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-right: 10px;
  animation: blink 1s ease infinite alternate;
  flex-shrink: 0;

  @keyframes blink {
    from {
      opacity: 1;
    }

    to {
      opacity: 0.3;
    }
  }
`

const HorizontalScrolledTextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  overflow: hidden;
  align-items: center;

  div {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 150px;
    flex-direction: row;
    animation: headline 30s linear infinite;

    p {
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 400;
      align-items: center;
      white-space: nowrap;
      pointer-events: none;
    }

    @keyframes headline {
      from {
        transform: translateX(0%);
      }

      to {
        transform: translateX(calc(-50% - 150px / 2)); // gap分
      }
    }
  }
`
