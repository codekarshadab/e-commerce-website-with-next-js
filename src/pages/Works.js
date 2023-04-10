import React from 'react'
import Image from 'next/image'
import hassale from '/public/hassale.png'
import setting from '/public/setting.png'
import partner from '/public/partner.png'
import time from '/public/time.png'
import styles from '@/styles/Work.module.css'

export default function Works() {
  return (
    <div className={styles.main}>
<p className={styles.tbg}>How it Works
<hr/></p>
<div className={styles.items}>
    <div>
    <div className={styles.item}>
        <Image src={setting}/>
        <div className={styles.text}>
        <p className={styles.dark} >Choose Type of Service</p>
        <p className={styles.light}>Select the service required</p></div>
    </div>
    <div className={styles.item}>
        <Image style={{marginLeft:"-.5rem"}}src={time} width={50}/>
        <div className={styles.text}>
        <p className={styles.dark}>Choose your time slot</p>
        <p className={styles.light}>we serve from 9 - 9</p></div>
    </div>
    <div className={styles.item}>
        <Image src={partner}/>
        <div className={styles.text}>
        <p className={styles.dark}>Choose from our partner</p>
        <p className={styles.light}>Select the service required</p></div>
    </div>
    <div className={styles.item}>
        <Image src={hassale}/>
        <div className={styles.text}>
        <p className={styles.dark}> Hassale-free services</p>
        <p className={styles.light}>Select the service required</p></div>
    </div></div>
</div>

    </div>
  )
}
