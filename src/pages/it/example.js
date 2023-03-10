import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ExamplePage = () => (
  <Layout>
    <h1>Hi from the example page</h1>
    <p>Welcome to the example page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default ExamplePage
