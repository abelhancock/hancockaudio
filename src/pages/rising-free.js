import React from 'react'
import styles from '../styles/rising-free.module.scss'
import Plx from 'react-plx'

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
<div style={{display: 'flex'}}>
    <Plx className={styles.element} parallaxData={ plxElement }/>
    <img src="images/rising-free-soundtrack.jpg" alt="Rising Free soundtrack artwork"/>
    <iframe 
        src="https://abelhancock.wixsite.com/hancockaudio/rising-free"
        title="Rising Free Soundtrack"
        className={styles.iframe}></iframe>
</div>
)

export default RisingFree