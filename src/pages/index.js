import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
// import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Design and code React apps!</h1>
          <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
          {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
            <Image />
          </div> */}
          <Link to="/video"> Watch our video</Link>

          <div className="logos">
            <img src={require('../images/logo-figma.png')} alt="logo" width="50" />          
            <img src={require('../images/logo-framer.png')} alt="logo" width="50" />
            <img src={require('../images/logo-invision.png')} alt="logo" width="50" />
            <img src={require('../images/logo-react.png')} alt="logo" width="50" />
            <img src={require('../images/logo-sketch.png')} alt="logo" width="50" />           
            <img src={require('../images/logo-studio.png')} alt="logo" width="50" />
            <img src={require('../images/logo-swift.png')} alt="logo" width="50" />
            <img src={require('../images/logo-xcode.png')} alt="logo" width="50" />
          </div>

          <Wave/>

        </div>
        {/* End of .HeroGroup */}
      </div>
      <div className="Cards">
        <h2>11 courses, more incoming</h2>
        <div className="CardGroup">
          <Card
            image={require('../images/wallpaper.jpg')}
            alt="Section image"
            title="React for Designers"
            text="12 sections"
          />
          <Card
            image={require('../images/wallpaper2.jpg')}
            alt="Section image"
            title="React for Designers"
            text="12 sections"
          />
          <Card
            image={require('../images/wallpaper3.jpg')}
            alt="Section image"
            title="React for Designers"
            text="12 sections"
          />
          <Card
            image={require('../images/wallpaper4.jpg')}
            alt="Section image"
            title="React for Designers"
            text="12 sections"
          />
        </div>
      </div>

      <Section 
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        alt="Image"
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
      />

      <p className="SectionCaption">12 sections – 6 hours</p>
      <div className="SectionCellGroup">
        {staticdata.cells.map((cell, index) => (
          <Cell
            key={index}
            title={cell.title} 
            image={cell.image}
          />
        ))}
      </div>
      
    </div>   
    {/* <Footer links={data.allContentfulLink.edges}>
      Backgrounds made in Cinema 4D, iOS app in Swift, site in React. <a href="mailto:support@designcode.io">Email us</a> to ask anything. © 2018
    </Footer> */}
  </Layout>
)

export default IndexPage
