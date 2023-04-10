import React from 'react'
import styles from '@/styles/Reviews.module.css'
import aadmi from '/public/aadmi.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Reviews() {
  return (
    <div className={styles.main}>
<p className={styles.tbg}>Electrician Reviews
<hr/></p>
<div className={styles.reviews}>
<div className={styles.review}>
    <div className={styles.left}>
    <Image src={aadmi}/>
    <div className={styles.content}>
        <p className={styles.dark}>Sajjan Kumar</p>
        <p className={styles.light}>Greater Kailash II, Greater Kailash, New Delhi, Del...</p>
    </div>
</div>
<div className={styles.right}>
<p>&#9733; 4.8</p>
<p className={styles.dark}>450 Jobs Done</p>
</div>
</div>
<p className={styles.reviewContent}>Although his work was professional I feel his charges were high. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, velit rerum doloribus accusamus voluptates nullavelit rerum doloribus accusamus voluptates nulla. Ratione, natus. For a full ac service charge even drain pipe... <button>Read More</button> <span><p style={{textAlign:"right"}}>-Madhu</p></span></p>
<hr style={{opacity:"80%"}}/>
<div className={styles.reply}>
    <p className={styles.light}>Thank you Sajjan! Excellet service.</p>
    <p className={styles.light}>-Vikas</p>
</div>
{/* <hr style={{opacity:"80%"}}/> */}
</div>
<div className={styles.reviews}>
<div className={styles.review}>
    <div className={styles.left}>
    <Image src={aadmi}/>
    <div className={styles.content}>
        <p className={styles.dark}>Sajjan Kumar</p>
        <p className={styles.light}>Greater Kailash II, Greater Kailash, New Delhi, Del...</p>
    </div>
</div>
<div className={styles.right}>
<p>&#9733; 4.8</p>
<p className={styles.dark}>450 Jobs Done</p>
</div>
</div>
<p className={styles.reviewContent}>Although his work was professional I feel his charges were high. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, velit rerum doloribus accusamus voluptates nullavelit rerum doloribus accusamus voluptates nulla. Ratione, natus. For a full ac service charge even drain pipe... <button>Read More</button> <span><p style={{textAlign:"right"}}>-Madhu</p></span></p>
<hr style={{opacity:"80%"}}/>
<div className={styles.reply}>
    <p className={styles.light}>Thank you Sajjan! Excellet service.</p>
    <p className={styles.light}>-Vikas</p>
</div>
{/* <hr style={{opacity:"80%"}}/> */}
</div>
<div className={styles.more}>
    <Link href="/" className={styles.moreTxt}>&darr;  Read More Reviews</Link>
    <p></p>
</div>
</div>
  )
}
