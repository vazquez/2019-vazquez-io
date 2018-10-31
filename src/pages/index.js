import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'

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
          <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" fill="white" />
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="YOUR-SVG-VALUES" />
          </svg>
        </div>
      </div>
    </div>   
  </Layout>
)

export default IndexPage
