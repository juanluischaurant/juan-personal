import React from 'react'
import styled from 'styled-components'
import { IoMdOpen } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import theme from '../../global_styles/theme'
import { ThemeProvider } from 'styled-components'

const OuterContainer = styled.section`
  padding-inline: 1em;
  background: ${(props) => props.theme.colors.primaryColor};

  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerContainer = styled.div`
  margin: 2em auto 4em auto;
  width: 95%;
  max-width: 1000px;

  @media ((min-width: ${(props) => props.theme.breakpoints.tabletX1})) {
    width: 80%;
  }
  @media ((min-width: ${(props) => props.theme.breakpoints.extraLargeX1})) {
    width: 70%;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 1.4em;
`
const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.fontMainColor};
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.fontScale.smallScreen.medium};
`

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;
`

const LeftLine = styled.div`
  display: none;
  flex-grow: 1;
  height: 1px;
  background: rgb(95, 126, 151);
  margin-left: 16px;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  margin-top: calc(4em + 2em);

  @media ((min-width: ${(props) => props.theme.breakpoints.largeX1})) {
    flex-direction: row;
    column-gap: 2.4em;
  }
`

// new component
// ++++++++++++++++++

const FeaturedContainer = styled.div`
  background: rgb(11, 41, 66);
  display: flex;
  min-width: 50%;
  min-height: 700px;

  flex-direction: column;
  align-items: center;

  margin-top: 2em;
  padding-bottom: 4em;
`

const FeaturedContainerImage = styled.div`
  width: 90%;
  /* height: 80%; */
  max-width: 30em;
  max-height: 30em;
  transform: translateY(-4em);
`

const Image = styled.img.attrs((props) => ({ src: props.imageUrl }))`
  max-width: 100%;
`

const FeaturedContainerContent = styled.div`
  max-width: 85%;
  margin-top: -2em;
`

const FeaturedContainerDate = styled.div`
  color: ${({ theme }) => theme.colors.accentColor};
`
const FeaturedContainerTitle = styled.h3`
  color: ${({ theme }) => theme.colors.fontMainColor};

  font-size: var(--fs-500);
  margin-top: 0;
  margin-bottom: 0em;
`

const FeaturedContainerText = styled.div`
  color: ${({ theme }) => theme.colors.fontBodyColor};

  line-height: 1.5em;
  padding-bottom: 1em;
`

const FeaturedContainerFooter = styled.div`
  & > *:first-child {
    margin-bottom: 0.8em;
  }
`

const LinkContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`

const LinkItem = styled.div`
  font-size: ${(props) => props.theme.fontScale.smallScreen.small};
  margin-right: 8px;
  color: rgb(95, 126, 151);
`
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 0.4em;
  /* align-items: flex-end; */
  color: ${(props) => props.theme.colors.fontMainColor};
  margin-top: 8px;

  & > * {
    cursor: pointer;
  }
`
const Link = styled.a`
  cursor: pointer;
  color: rgb(204, 215, 245);
`

const SectionMainProject = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <InnerContainer>
          <HeaderContainer>
            <LeftLine />
            <SectionTitle>Les Projects</SectionTitle>
            <Line />
          </HeaderContainer>

          <BodyContainer>
            <FeaturedContainer>
              <FeaturedContainerImage>
                <Image
                  imageUrl={
                    'http://res.cloudinary.com/dm7mqsupu/image/upload/v1646162180/react-calculator_z2sgg0.png'
                  }
                />
              </FeaturedContainerImage>

              <FeaturedContainerContent>
                <FeaturedContainerDate>
                  February 25 - March 2, 2022
                </FeaturedContainerDate>
                <FeaturedContainerTitle>
                  Simple Calculator
                </FeaturedContainerTitle>

                <FeaturedContainerText>
                  <p>
                    A simple calculator developed using React, CSS Grid/Flexbox.
                    The best part of developing this app was using the
                    "useReducer()" hook for handling state.
                  </p>
                  <p>
                    Managing state with React Hooks is great since there’s no
                    need to install external packages or add a bunch of files.
                  </p>
                </FeaturedContainerText>

                <FeaturedContainerFooter>
                  <LinkContainer>
                    <LinkItem>NODE</LinkItem>
                    <LinkItem>NPM</LinkItem>
                    <LinkItem>React</LinkItem>
                  </LinkContainer>

                  <IconContainer>
                    <Link
                      href="https://621e85bd0b8c921ace762106--musing-lichterman-f22c19.netlify.app/"
                      target="_blank"
                    >
                      <IoMdOpen size="2rem" />
                    </Link>
                    <Link
                      href="https://github.com/juanluischaurant/react-calculator"
                      target="_blank"
                    >
                      <FiGithub size="2rem" />
                    </Link>
                  </IconContainer>
                </FeaturedContainerFooter>
              </FeaturedContainerContent>
            </FeaturedContainer>
            {/* end of FeaturedContainer */}

            <FeaturedContainer>
              <FeaturedContainerImage>
                <Image
                  imageUrl={
                    'http://res.cloudinary.com/dm7mqsupu/image/upload/v1646162180/react-calculator_z2sgg0.png'
                  }
                />
              </FeaturedContainerImage>

              <FeaturedContainerContent>
                <FeaturedContainerDate>
                  March 1 - March 9, 2022
                </FeaturedContainerDate>
                <FeaturedContainerTitle>Notes App</FeaturedContainerTitle>

                <FeaturedContainerText>
                  <p>
                    A compact note-taking app that actually works, it uses Local
                    Storage for persistng user's data. It also includes an
                    option for filtering the list of notes based on title or
                    content.
                  </p>
                  <p>
                    It's build with React, taking advantage of hooks such as
                    useEffect, useState, useRef. As well as prop drilling.
                  </p>
                </FeaturedContainerText>

                <FeaturedContainerFooter>
                  <LinkContainer>
                    <LinkItem>NODE</LinkItem>
                    <LinkItem>NPM</LinkItem>
                    <LinkItem>React</LinkItem>
                  </LinkContainer>

                  <IconContainer>
                    <Link
                      href="https://621e85bd0b8c921ace762106--musing-lichterman-f22c19.netlify.app/"
                      target="_blank"
                    >
                      <IoMdOpen size="2rem" />
                    </Link>
                    <Link
                      href="https://github.com/juanluischaurant/react-calculator"
                      target="_blank"
                    >
                      <FiGithub size="2rem" />
                    </Link>
                  </IconContainer>
                </FeaturedContainerFooter>
              </FeaturedContainerContent>
            </FeaturedContainer>
            {/* end of FeaturedContainer */}
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    </ThemeProvider>
  )
}

export default SectionMainProject
