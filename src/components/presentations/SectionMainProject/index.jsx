import React from 'react'
import styled from 'styled-components'

import theme from '../../global_styles/theme'
import { ThemeProvider } from 'styled-components'
import FeaturedProjectContainer from './FeaturedProjectContainer'
import { projectsData } from './projectsData'

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

const SectionMainProject = () => {
  return (
    <ThemeProvider theme={theme}>
      <OuterContainer>
        <InnerContainer>
          <HeaderContainer>
            <LeftLine />
            <SectionTitle>Projects</SectionTitle>
            <Line />
          </HeaderContainer>

          <BodyContainer>
            {/* render the projects */}
            {projectsData.map((project) => (
              <FeaturedProjectContainer
                imageUrl={project.imageUrl}
                title={project.title}
                startDate={project.startDate}
                endDate={project.endDate}
                projectDescription={project.projectDescription}
                resources={project.resources}
                liveApp={project.liveApp}
                githubRepo={project.githubRepo}
              />
            ))}
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    </ThemeProvider>
  )
}

export default SectionMainProject
