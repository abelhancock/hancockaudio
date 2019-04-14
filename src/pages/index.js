import React, { Component } from 'react'
import styles from './index.module.scss'
import ProgressiveImage from 'react-progressive-image'
import Plx from 'react-plx'
import ContactForm from 'components/ContactForm'
import SEO from 'components/SEO'
import RecentWork from 'components/RecentWork'
import Layout from 'components/Layout'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ReactCursorPosition from 'react-cursor-position'
import CursorOutline from '../components/CursorOutline'
import Cursor from '../components/Cursor'

const plxInView = [
  {
    start: 'self',
    duration: 1,
    properties: [
      {
      startValue: 1,
      endValue: 1,
      propery: 'saturate'
      }
    ]
  }
]
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
const plxScrollIndicator = [
  {
    start: 0,
    startOffset: 32,
    duration: 40,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      }
    ]
  }
]
const plxScrollLine = [
  {
    start: 0,
    duration: 32,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'scaleY',
      }
    ]
  }
]
const plxContainerBackground = [
  {
    start: 0,
    duration: '60vh',
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      }
    ]
  }
]
const plxMe = [
  {
    start: '#endBioContent',
    startOffset: '45vh',
    duration: '15vh',
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      }
    ]
  },
  {
    start: '#endBioContent',
    startOffset: '45vh',
    duration: '15vh',
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: 'grayscale',
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


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {enter: false}
  }
  componentDidMount() {
    setTimeout(function() {
        this.setState({enter: !this.state.enter})
    }.bind(this), 2800)
  }
  render() {
    if (typeof window !== 'undefined') {
      if(this.state.enter) {
        document.body.style.position = "unset";
      }
      else {
        document.body.style.position = "fixed";
      }
    }
    return(
      <Layout>
        <ReactCursorPosition>
        <Cursor>
          <div
            className={styles.cursor}
            id="cursor">
          </div>
        </Cursor>
        <CursorOutline>
          <div
            className={styles.cursorOutline}
            id="cursorOutline">
          </div>
        </CursorOutline>
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
        <div className={styles.accentWelcome}/>
        <Plx className={styles.accent}
            parallaxData={ plxAccent} />
        <Plx className={styles.scrollIndicator}
            parallaxData={plxScrollIndicator}
            data-siteentered={this.state.enter ? "true" : "false"}>
          <AnchorLink offset="200" href='#aboutMeEnd' data-hover>scroll</AnchorLink>
          <Plx parallaxData={plxScrollLine} />
        </Plx>
        <section className={styles.sectionHello}>
          <div className={styles.aboutMe}>
            <h1>
              <Plx className={styles.containerBackground}
                  parallaxData={plxContainerBackground}
                  data-siteentered={this.state.enter ? "true" : "false"}
                  />
              <div className={styles.abel}>Abel</div>
              <div className={styles.hancock}>
                Hancock
                <h4>
                  <span>Composer</span>
                  <div></div>
                  <span>Musician</span>
                </h4>
              </div>
            </h1>
          </div>
          <div className={styles.anchorLink} id="aboutMeEnd">{null}</div>
          <Plx className={styles.me} parallaxData={plxMe}>
            <ProgressiveImage src="images/me-color-bg-wide.jpg" placeholder="images/me-color-bg-wide-tiny.jpg">
              {src => <img src={src} alt="me" />}
            </ProgressiveImage>
          </Plx>
        </section>
        <section className={styles.sectionBio}>
          <div className={styles.bio}>
            <div id="bioContent">
              <h3>It's nice to meet you.</h3>
              <p>
                <span>I'm Abel – I have been creating <Plx parallaxData={ plxInView } tagName={'u'}><i>music</i></Plx> for over 17 years as a hobby and profession. </span>
                <span>I love using sound to express <Plx parallaxData={ plxInView } tagName={'u'}><i>emotions</i></Plx> and <Plx parallaxData={ plxInView } tagName={'u'}><i>ideas</i></Plx> that words can't express. As with any artform, I feel that music can communicate and <Plx parallaxData={ plxInView } tagName={'u'}><i>connect</i></Plx><Plx parallaxData={ plxInView } tagName={'u'}><i> with </i></Plx><Plx parallaxData={ plxInView } tagName={'u'}><i>people</i></Plx> in a unique way. </span>
              </p>
            </div>
            <div id="endBioContent"></div>
            </div>
        </section>
        <RecentWork />
        <ContactForm />
        </ReactCursorPosition>

      </Layout>
    );
  }
}

export default IndexPage
