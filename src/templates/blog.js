import React from "react"
import { Card, Col, Row } from 'antd';
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "@components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "@components/seo"
import { CalendarOutlined } from '@ant-design/icons';

const { Meta } = Card;

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes


  if (!posts.length) {
    return (
      <Layout>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="All posts" />

      <div className="site-card-wrapper">

        <Row gutter={16}>
          {posts.map(post => {
            const title = post.title
            const featuredimage = post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
            return (
              <Link to={post.uri}>
                <Col key={post.uri} span={8}>
                  <Card
                    hoverable
                    cover={<GatsbyImage
                      image={featuredimage}
                      alt="example" height="200px"
                    />}
                  >
                    <Meta title={parse(title)} description={parse(post.excerpt)} />
                    <p><CalendarOutlined /> {post.date}</p>
                  </Card>
                </Col>
              </Link>

            )
          })}
        </Row>
      </div>

      {
        previousPagePath && (
          <>
            <Link to={previousPagePath}>Previous page</Link>
            <br />
          </>
        )
      }
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout >
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
        title
        excerpt
      }
    }
  }
`
