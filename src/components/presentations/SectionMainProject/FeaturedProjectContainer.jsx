import React from 'react'
import styled from 'styled-components'
import { IoMdOpen } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import { projectsData } from './projectsData' // no need

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

const FeaturedProjectContainer = ({
  startDate,
  endDate,
  imageUrl,
  title,
  projectDescription,
  resources,
  liveApp,
  githubRepo
}) => {
  return (
    <FeaturedContainer>
      <FeaturedContainerImage>
        <Image imageUrl={imageUrl} />
      </FeaturedContainerImage>

      <FeaturedContainerContent>
        <FeaturedContainerDate>
          {`${startDate} - ${endDate}`}
        </FeaturedContainerDate>
        <FeaturedContainerTitle>{title}</FeaturedContainerTitle>

        <FeaturedContainerText>
          {projectDescription.map((desc) => (
            <p>{desc}</p>
          ))}
        </FeaturedContainerText>

        <FeaturedContainerFooter>
          <LinkContainer>
            {resources.map((resource) => (
              <LinkItem>{resource}</LinkItem>
            ))}
          </LinkContainer>

          <IconContainer>
            <Link href={liveApp} target="_blank">
              <IoMdOpen size="2rem" />
            </Link>
            <Link href={githubRepo} target="_blank">
              <FiGithub size="2rem" />
            </Link>
          </IconContainer>
        </FeaturedContainerFooter>
      </FeaturedContainerContent>
    </FeaturedContainer>
  )
}

export default FeaturedProjectContainer
