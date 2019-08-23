import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SearchIconImage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "icon-search.png" }) {
                childImageSharp {
                    fluid(maxWidth: 180) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return <Img fluid={data.placeholderImage.childImageSharp.fluid} loading='eager' style={{ maxHeight: '30px' }} imgStyle={{ objectFit: 'contain' }} />
}

export default SearchIconImage
