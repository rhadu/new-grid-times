import React from 'react'
import styled from 'styled-components/macro'

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data'

import SectionTitle from '../SectionTitle'
import MainStory from '../MainStory'
import SecondaryStory from '../SecondaryStory'
import OpinionStory from '../OpinionStory'
import Advertisement from '../Advertisement'

import { COLORS, QUERIES } from '../../constants'

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper key={story.id}>
              <SecondaryStory key={story.id} {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    column-gap: 0;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';

    grid-template-columns: 67% 33%;
  }

  @media ${QUERIES.laptopAndUp} {
    row-gap: 0;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
  }
`

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    --divider-space: 16px;
    padding-right: var(--divider-space);
    margin-right: var(--divider-space);
    border-right: 1px solid ${COLORS.gray[300]};
  }
`

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    --divider-space: 16px;
    padding-right: var(--divider-space);
    margin-right: var(--divider-space);
    border-right: 1px solid ${COLORS.gray[300]};
  }
`

const SecondaryStoryWrapper = styled.div`
  &:not(:last-of-type) {
    --divider-space: 16px;
    padding-bottom: var(--divider-space);
    margin-bottom: var(--divider-space);
    border-bottom: 1px solid ${COLORS.gray[300]};
  }
`

const OpinionStoryWrapper = styled(SecondaryStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    &:not(:last-of-type) {
      border-bottom: revert;
      padding-bottom: revert;
      margin-bottom: revert;
    }
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  margin-top: -8px;
`

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp} {
    --divider-space: 16px;
    padding-top: var(--divider-space);
    margin-top: var(--divider-space);
    border-top: 1px solid ${COLORS.gray[300]};
  }
`

export default MainStoryGrid
