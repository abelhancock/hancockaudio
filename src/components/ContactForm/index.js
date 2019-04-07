import React, { Component } from 'react'
import styles from './styles.module.scss'
import Plx from 'react-plx'
import ProximityFeedback from 'react-proximity-feedback'
import Input from '../Input'




const plxHeader = [
  {
    start: 'self',
    duration: '100vh',
    properties: [
      {
        startValue: -70,
        endValue: 10,
        unit: '%',
        property: 'translateY',
      }
    ]
  }
]

class ContactForm extends Component {
  
  render() {

    return (
      <section className={styles.sectionContact}>
          <Plx className={styles.header} parallaxData={ plxHeader }>contact</Plx>
          <form
              className={styles.form}
              method="post"
              name="Contact"
              action="/thank-you/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              >
              <ProximityFeedback throttleInMs={1} threshold={100}>
                {({ ref, proximity }) => (
                  <ul>
                    <li>
                          <input
                              type="hidden"
                              name="bot-field"
                              />
                      </li>
                      <li>
                          <Input
                              proximity={proximity}
                              type="text"
                              name="Name"
                              id="name"
                              required
                              />
                          <label htmlFor="name">Name</label>
                      </li>
                      <li>
                          <Input
                              proximity={proximity}
                              type="email"
                              name="Email"
                              id="email"
                              required
                              />
                              <label htmlFor="email">Email</label>
                      </li>
                      <li>
                          <textarea
                              name="Message"
                              id="message"
                              >
                          </textarea>
                          <label htmlFor="message">Message</label>
                      </li>
                      <li data-type="control_button">
                          <button
                              ref={ref}
                              type="submit"
                              id="submit"
                              > 
                              Submit <svg viewBox="0 0 31 13" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1113 5.00195C24.1465 3.85091 23.1393 2.18359 22.0898 0H23.918C26.0677 2.53906 28.3529 4.41797 30.7734 5.63672V6.55078C28.3529 7.76953 26.0677 9.64844 23.918 12.1875H22.0898C23.1393 10.0039 24.1465 8.33659 25.1113 7.18555H0V5.00195H25.1113Z" fill="currentColor"/>
</svg>
                          </button>
                      </li>
                  </ul>
                  )}
              </ProximityFeedback>
          </form>
      </section>
    )
  }
}

export default ContactForm
