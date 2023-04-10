import React from 'react'
import box from '/public/box.png'
import styles from '@/styles/Related.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Related() {
  return (
    <div className={styles.main}>
        <p className={styles.tbg}>Related Services
<hr/></p>

<div className={styles.items}>
    <div className={styles.item}>
        <Image src={box}/>
        <Link style={{textDecoration:"none"}} href='/'>Pest Control services</Link>
    </div>
    <div className={styles.item}>
        <Image src={box}/>
        <Link style={{textDecoration:"none"}} href='/'>Pest Control services</Link>
    </div>
    <div className={styles.item}>
        <Image src={box}/>
        <Link style={{textDecoration:"none"}} href='/'>Pest Control services</Link>
    </div>
    <div className={styles.item}>
        <Image src={box}/>
        <Link style={{textDecoration:"none"}} href='/'>Pest Control services</Link>
    </div>
    <div className={styles.item}>
        <Image src={box}/>
        <Link style={{textDecoration:"none"}} href='/'>Pest Control services</Link>
    </div>
    <div className={styles.item}>
        <Image src={box}/>
        <Link style={{textDecoration:"none"}} href='/'>Pest Control services</Link>
    </div>
</div>
    </div>
  )
}
