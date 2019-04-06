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

class SignUpForm extends Component {
  
  render() {

    return (
      <section className={styles.sectionContact}>
          <Plx className={styles.header} parallaxData={ plxHeader }>contact</Plx>
          <script src="https://cdn.jotfor.ms/static/prototype.forms.js" type="text/javascript"></script>
          <script src="https://cdn.jotfor.ms/static/jotform.forms.js?3.3.10353" type="text/javascript"></script>
          <form
              className={styles.form}
              action="https://submit.jotform.us/submit/90688265328165/"
              method="post"
              name="form_90688265328165"
              id="90688265328165"
              >

              <input type="hidden" name="formID" value="90688265328165" />

              <ProximityFeedback throttleInMs={1} threshold={100}>
                {({ ref, proximity }) => (
                  <ul>
                      <li>
                          <Input
                              proximity={proximity}
                              type="text"
                              name="q6_name"
                              id="q6_name"
                              data-type="input-textbox"
                              data-component="textbox"
                              required
                              />
                          <label htmlFor="q6_name">Name</label>
                      </li>
                      <li>
                          <Input
                              proximity={proximity}
                              type="text"
                              name="q3_email3"
                              id="q3_email3"
                              data-type="input-textbox"
                              placeholder="Email"
                              data-component="textbox"
                              required
                              />
                              <label htmlFor="q3_email3">Email</label>
                      </li>
                      <li>
                          <textarea
                              name="q7_message"
                              id="q7_message"
                              data-component="input-textbox"
                              placeholder="Message"
                              >
                          </textarea>
                          <label htmlFor="q7_message">Message</label>
                      </li>
                      <li data-type="control_button">
                          <button
                              ref={ref}
                              type="submit"
                              data-component="button"
                              id="submit"
                              target="_blank"
                              > 
                              Submit <svg viewBox="0 0 31 13" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1113 5.00195C24.1465 3.85091 23.1393 2.18359 22.0898 0H23.918C26.0677 2.53906 28.3529 4.41797 30.7734 5.63672V6.55078C28.3529 7.76953 26.0677 9.64844 23.918 12.1875H22.0898C23.1393 10.0039 24.1465 8.33659 25.1113 7.18555H0V5.00195H25.1113Z" fill="currentColor"/>
</svg>
                          </button>
                      </li>
                  </ul>
                  )}
              </ProximityFeedback>
              <input type="hidden" id="simple_spc1" name="simple_spc1" value="90688265328165" />
              <script type="text/javascript"> document.getElementById("si" + "mple" + "_spc1").value = "90688265328165-90688265328165"; </script>
          </form>
          <script type="text/javascript">JotForm.ownerView=true;</script>
      </section>
    )
  }
}

export default SignUpForm
