import React from 'react'
import styles from '@/styles/Choose.module.css'

export default function Choose() {
  return (
    <div className={styles.main}>
        <p className={styles.tbg}>Why Choose us
        <hr/></p>
        <div className={styles.contents}>
        <ul className={styles.content}> 
            <p><span>&#9733; 4.5/5</span> (based on 2,128 raatings)</p>
            <li>30-day service guarantee</li>
            <li>Protection against damage upto Rs.1000</li>
            <li>Within 90-minutes same day service</li>
            <li>Experienced electricians on-board</li>
        </ul></div>
        
    </div>
  )
}
