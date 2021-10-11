import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { FAMILIES, QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MobileHeader>
        <Logo />
      </MobileHeader>

      <DesktopHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <LoginAlt>Already a subscriber?</LoginAlt>
        </SubscribeWrapper>
      </DesktopHeader>
    </header>
  )
}

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  @media ${QUERIES.desktopAndUp} {
    padding-top: 2px;
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`

const MobileHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`

const DesktopHeader = styled(MaxWidthWrapper)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items:center;
    margin-bottom: 72px;
  }
`

const SubscribeWrapper = styled.div`
  justify-self: end;
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 2px;
`

const LoginAlt = styled.span`
  font-size: ${14 / 16}rem;
  font-family: ${FAMILIES.serif};
  text-decoration: underline;
  font-style: italic;
`

export default Header
