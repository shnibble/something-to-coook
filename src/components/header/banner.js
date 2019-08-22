import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 5934) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
                           style={{ position: 'absolute', top: '0', right: '0', bottom: '0', left: '0', zIndex: '-2' }}
          >
          </BackgroundImage>
       )
     }
     }
    />
)

const Banner = styled(BackgroundSection)`
    background-size: auto 100%;
    background-repeat: repeat-x;
`

export default Banner