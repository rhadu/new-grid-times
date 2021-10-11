import React from 'react';

import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Footer from '../Footer';
import Spacer from '../Spacer';
import MainStoryGrid from '../MainStoryGrid';
import SpecialtyStoryGrid from '../SpecialtyStoryGrid';
import styled from 'styled-components';
import { QUERIES } from '../../constants';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <MaxWidthWrapper as="main">
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </MaxWidthWrapper>
      <Spacer size={64} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media ${QUERIES.desktopAndUp}{
    padding-top: 8px;
  }
`

export default App;
