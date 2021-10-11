import React from 'react'
import styled from 'styled-components/macro'

import { MARKET_DATA, SPORTS_STORIES } from '../../data'

import MarketCard from '../MarketCard'
import SectionTitle from '../SectionTitle'
import MiniStory from '../MiniStory'
import { COLORS, QUERIES } from '../../constants'

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper key={data.id} >
              <MiniStory {...data} />
            </MiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    column-gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    column-gap: 0px;
    grid-template-columns: 1fr 1fr;
  }
`

const MarketsSection = styled.section``

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  @media ${QUERIES.laptopAndUp} {
    gap: 16px;
  }
`

const SportsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    --column-divider-gap: 16px;
    margin-left: var(--column-divider-gap);
    padding-left: var(--column-divider-gap);
    border-left: 1px solid ${COLORS.gray[300]};
  }
`

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media ${QUERIES.tabletAndUp} {
    overflow: auto;
    display: flex;
    gap: 16px;
  }
`
const MiniStoryWrapper = styled.div`
  flex: 1 0 220px;
`

export default SpecialtyStoryGrid
