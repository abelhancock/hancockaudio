import React from 'react'
import styles from './styles.module.scss'
import Plx from 'react-plx'
import AudioPlayer from 'components/AudioPlayer'

const plxDividerContainer = [
    {
        start: '#sectionRecentWork',
        duration: '60vh',
        properties: [
            {
                startValue: 0,
                endValue: -60,
                unit: 'vh',
                property: 'translateY'
            }
        ]
    },
    {
        start: '#sectionRecentWork',
        startOffset: '60vh',
        duration: '30vh',
        properties: [
            {
                startValue: -60,
                endValue: -100,
                unit: 'vh',
                property: 'translateY'
            }
        ]
    },
    {
        start: '#sectionRecentWorkEnd',
        startOffset: '-20vh',
        duration: '30vh',
        properties: [
            {
                startValue: -100,
                endValue: -200,
                unit: 'vh',
                property: 'translateY'
            }
        ]
    }
]

const plxDivider = [
    {
      start: '#sectionRecentWork',
      startOffset: '10vh',
      duration: '50vh',
      properties: [
        {
          startValue: 0,
          endValue: 1,
          property: 'scaleY',
        }
      ]
    },
    {
        start: '#sectionRecentWork',
        startOffset: '60vh',
        duration: '30vh',
        properties: [
          {
            startValue: 1,
            endValue: 2,
            property: 'scaleY',
          }
        ]
    }
  ]
const plxLeftContent = [
    {
        start: '#sectionRecentWork',
        startOffset: '60vh',
        end: '#sectionRecentWorkEnd',
        endOffset: '100vh',
        properties: [
            {
                startValue: 0,
                endValue: 200,
                unit: "%",
                property: 'translateY'
            }
        ]
    },
    {
        start: '#sectionRecentWork',
        startOffset: '70vh',
        duration: 1,
        properties: [
            {
                startValue: 0,
                endValue: 1,
                property: 'opacity'
            }
        ]
    },
]
const plxStaff = [
    {
        start: '#sectionRecentWork',
        startOffset: '100vh',
        duration: '20vh',
        properties: [
            {
                startValue: 1,
                endValue: 1,
                property: 'opacity'
            }
        ]
    },
    {
        start: '#sectionRecentWork',
        startOffset: '120vh',
        duration: '20vh',
        properties: [
            {
                startValue: 1,
                endValue: 1,
                property: 'opacity'
            }
        ]
    },
    {
        start: '#sectionRecentWork',
        startOffset: '140vh',
        duration: '20vh',
        properties: [
            {
                startValue: 1,
                endValue: 1,
                property: 'opacity'
            }
        ]
    },
    {
        start: '#sectionRecentWork',
        startOffset: '160vh',
        duration: '20vh',
        properties: [
            {
                startValue: 1,
                endValue: 1,
                property: 'opacity'
            }
        ]
    },
]
const plxRight = [
    {
        start: '#sectionRecentWork',
        startOffset: '61vh',
        duration: 1,
        properties: [
            {
            startValue: 0,
            endValue: 1,
            property: 'opacity'
            }
        ]
    },
    {
        start: '#sectionRecentWork',
        startOffset: '61vh',
        duration: '100vh',
        properties: [
            {
            startValue: 0,
            endValue: 30,
            unit: '%',
            property: 'translateY'
            }
        ]
    }
]
const plxCover = [
    {
        start: '#sectionRecentWork',
        startOffset: '60vh',
        duration: '30vh',
        easing: 'easeInOut',
        properties: [
          {
            startValue: 1,
            endValue: 0,
            unit: '%',
            property: 'scaleX',
          }
        ]
    } 
]

const RecentWork = () => (
    <section className={styles.sectionRecentWork} id="sectionRecentWork">
        <div className={styles.left}> 
            <Plx className={styles.leftContent}
                parallaxData={plxLeftContent}>
                {/* <h3>New Project</h3>
                <ProgressiveImage src="images/rising-free-soundtrack.jpg" placeholder="images/rising-free-soundtrack-tiny.jpg">
                    {src => <img src={src} alt="new project coming soon" />}
                </ProgressiveImage>
                <h3>Releasing Soon</h3> */}
                <Plx className={styles.staff}
                     parallaxData={plxStaff}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Plx>
            </Plx>
        </div>
        <Plx className={styles.dividerContainer}
             parallaxData={plxDividerContainer}>
            <div className={styles.dividerTrack}/>
            <Plx className={styles.divider}
                parallaxData={ plxDivider}/>
        </Plx>
        <Plx className={styles.right}
             parallaxData={plxRight}>
            <h2>Recent Work</h2>
            <AudioPlayer title="JFTP I" file="audio/recent-work/jftp.mp3"/>
            <AudioPlayer title="JFTP II" file="audio/recent-work/jftp-2.wav"/>
            <AudioPlayer title="Compel I" file="audio/recent-work/compel-opener-2016.wav"/>
            <AudioPlayer title="Compel II" file="audio/recent-work/compel-opener-2017.wav"/>
            <AudioPlayer title="Now I see" file="audio/recent-work/now-i-see.wav"/>
            <AudioPlayer title="W & G Wedding" file="audio/recent-work/w-g-wedding.wav"/>
            <AudioPlayer title="Waking Ella" file="audio/recent-work/waking-ella.wav"/>
            <Plx className={styles.cover}
                 parallaxData={plxCover}/>
        </Plx>
        <div id="sectionRecentWorkEnd" 
             style={{
                 position: 'absolute',
                 bottom: '0'
              }} />
    </section>
)

export default RecentWork