import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'gatsby';

const IndexPage = () => (
  <div>
    <div className={styles.background}/>
    <section className={styles.sectionThankYou}>
      <div className={styles.accent} />
        <h1>
          Talk to you soon!
        </h1>
        <p id="bioContent">
        Thanks for contacting me. I'll get back with you as soon as I can.
        </p>
        <Link to="/"><svg viewBox="0 0 31 13" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1113 5.00195C24.1465 3.85091 23.1393 2.18359 22.0898 0H23.918C26.0677 2.53906 28.3529 4.41797 30.7734 5.63672V6.55078C28.3529 7.76953 26.0677 9.64844 23.918 12.1875H22.0898C23.1393 10.0039 24.1465 8.33659 25.1113 7.18555H0V5.00195H25.1113Z" fill="currentColor"/>
</svg> back</Link>
    </section>
  </div>
)

export default IndexPage
