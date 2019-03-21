import React from 'react'
import styles from './index.module.scss'
import ProgressiveImage from 'react-progressive-image'
import Plx from 'react-plx'
import NewContactForm from 'components/NewContactForm';

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
]

const IndexPage = () => (
  <div>
    <Plx className={styles.background}/>
    <Plx className={styles.accent}
         parallaxData={ plxAccent} />
    <section className={styles.sectionHello}>
      <div className={styles.aboutMe}>
        <h1>
          <span>Abel</span>
          <span>
            Hancock
            <h4>
              <span>Musician</span>
              <div></div>
              <span>Composer</span>
            </h4>
          </span>
        </h1>
      </div>
      <Plx className={styles.me} parallaxData={plxMe}>
        <ProgressiveImage src="images/abel-hancock.png">
          {src => <img src={src} alt="me" />}
        </ProgressiveImage>
      </Plx>
    </section>

    <section className={styles.sectionBio}>
      <div className={styles.bio}>
        <p id="bioContent">
          <span>I have been creating music for over 17 years as a hobby, a profession, and part of how I express myself.</span>
          <br></br>
          <br></br>
          <span>I love using my musical, technical, and creative talent to help you express emotions and ideas in any project.</span>
        </p>
        <div id="endBioContent"></div>
        </div>
    </section>

    <NewContactForm />
  </div>
)

export default IndexPage
