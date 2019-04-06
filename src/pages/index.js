import React from 'react'
import styles from './index.module.scss'
import ProgressiveImage from 'react-progressive-image'
import Plx from 'react-plx'
import NewContactForm from 'components/NewContactForm'
import SEO from 'components/SEO'
import RecentWork from 'components/RecentWork'
import Layout from 'components/Layout'

const plxAccent = [
  {
    start: 0,
    end: '10vh',
    properties: [
      {
        startValue: 0,
        endValue: -0.3,
        unit: 'em',
        property: 'translateX',
      },
      {
        startValue: 0.4,
        endValue: 0.15,
        unit: 'ch',
        property: 'width',
      },
      {
        startValue: 0.15,
        endValue: 0.4,
        unit: 'ch',
        property: 'height',
      }
    ],
  },
  {
    start: '10vh',
    end: '#bioContent',
    endOffset: '35vh',
    properties: [
      {
        startValue: 0,
        endValue: 2,
        unit: 'em',
        property: 'translateY',
      }
    ]
  },
  {
    start: '#bioContent',
    startOffset: '35vh',
    duration: '10vh',
    properties: [
      {
        startValue: -0.3,
        endValue: 0,
        unit: 'em',
        property: 'translateX',
      },
      {
        startValue: 0.15,
        endValue: 0.4,
        unit: 'ch',
        property: 'width',
      },
      {
        startValue: 0.4,
        endValue: 0.15,
        unit: 'ch',
        property: 'height',
      }
    ]
  },
  {
    start: '#bioContent',
    startOffset: '45vh',
    duration: '55vh',
    properties: [
      {
        startValue: 50,
        endValue: -5,
        unit: 'vh',
        property: 'top',
      },
      {
        startValue: 0,
        endValue: 0,
        property: 'translateY',
      }
    ]
  }
];

const plxMe = [
  {
    start: '#endBioContent',
    startOffset: '45vh',
    duration: '15vh',
    properties: [
      {
        startValue: 0.75,
        endValue: 0,
        property: 'opacity',
      }
    ]
  }
];

const plxBackground = [
  {
    start: '#sectionRecentWork',
    startOffset: '40vh',
    duration: '20vh',
    properties: [
      {
        startValue: '#ECE2D4',
        endValue: '#2D2A26',
        property: 'backgroundColor',
      }
    ]
  },
  {
    start: '#sectionRecentWork',
    startOffset: '60vh',
    duration: '30vh',
    easing: 'easeInOut',
    properties: [
      {
        startValue: 0,
        endValue: -25,
        unit: '%',
        property: 'translateX',
      }
    ]
  },
  {
    start: '#sectionRecentWorkEnd',
    startOffset: '-20vh',
    duration: '30vh',
    easing: 'easeInOut',
    properties: [
      {
        startValue: -25,
        endValue: 0,
        unit: '%',
        property: 'translateX',
      }
    ]
  } 
]

const IndexPage = () => (
  <Layout>
    <SEO 
      title={"Abel Hancock | Composer – Musician"}
      keywords={[
        "abel hancock",
        "musician",
        "composer",
        "film music",
        "cinematic"
      ]}
      description={"Abel Hancock is a musician and composer living in Los Angeles, CA"}
      robots={"index,follow"}
      />
    <Plx className={styles.background}
         parallaxData={ plxBackground }/>
    <Plx className={styles.accent}
         parallaxData={ plxAccent} />
    <section className={styles.sectionHello}>
      <div className={styles.aboutMe}>
        <h1>
          <span>Abel</span>
          <span>
            Hancock
            <h4>
              <span>Composer</span>
              <div></div>
              <span>Musician</span>
            </h4>
          </span>
        </h1>
      </div>
      <Plx className={styles.me} parallaxData={plxMe}>
        <ProgressiveImage src="images/me-color-bg-wide.jpg" placeholder="images/me-color-bg-wide-tiny.jpg">
          {src => <img src={src} alt="me" />}
        </ProgressiveImage>
      </Plx>
    </section>

    <section className={styles.sectionBio}>
      <div className={styles.bio}>
        <div id="bioContent">
          <h3>About Me</h3>
          <p>
            <span>I have been creating music for over 17 years as a hobby, a profession, and part of how I express myself.</span>
            <br></br>
            <br></br>
            <span>I love using my musical, technical, and creative talent to help you express emotions and ideas in any project.</span>
          </p>
        </div>
        <div id="endBioContent"></div>
        </div>
    </section>
    <RecentWork />
    <NewContactForm />
  </Layout>
)

export default IndexPage
