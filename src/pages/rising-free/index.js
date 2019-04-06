import React from 'react'
import styles from './styles.module.scss'
import Plx from 'react-plx'
import SEO from 'components/SEO'
import ProgressiveImage from 'react-progressive-image'

const plxElement = [
    {
      start: 'self',
      duration: '35vh',
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: 'opacity',
        }
      ]
    }
  ]

const RisingFree = () => (
<div style={{display: 'flex'}} className={styles.sectionRisingFree}>
  <SEO 
        title={"Rising Free Soundtrack | Abel Hancock | Composer – Musician"}
        keywords={[
          "abel hancock",
          "musician",
          "composer",
          "film music",
          "cinematic"
        ]}
        description={"Abel Hancock is a musician and composer living in Los Angeles, CA"}
        robots={"noindex, nofollow, noimageindex, noarchive, nocache"}
        />
  <Plx className={styles.element} parallaxData={ plxElement }/>
  <ProgressiveImage src="images/rising-free-soundtrack.jpg" placeholder="images/rising-free-soundtrack-tiny.jpg">
      {src => <img src={src} alt="Rising Free Soundtrack artwork" />}
  </ProgressiveImage>
  <iframe 
      src="https://abelhancock.wixsite.com/hancockaudio/rising-free"
      title="Rising Free Soundtrack"
      className={styles.iframe}></iframe>
</div>
)

export default RisingFree