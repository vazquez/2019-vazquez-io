import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn to design and code React apps!</h1>
          <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
          <p>Now go build something great.</p>
          {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
          </div> */}
          <Link to="/video"> Watch our video</Link>
        </div>
      </div>
    </div>   
  </Layout>
)

export default IndexPage
