import React from 'react'
import Link from 'next/link'
import { BiBookContent } from 'react-icons/bi'
import { ImHome } from 'react-icons/im'
import { AiOutlineHeart } from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.main}>
            <header>
                <div className={styles.nav}>
                    <Link style={{textDecoration:"none",color:"black"}}href='/'><span><ImHome />         </span> Home</Link>
                    <Link style={{textDecoration:"none",color:"black"}}href='/'><span><BiBookContent />  </span>Bookings</Link>
                    <Link style={{textDecoration:"none",color:"black"}}href='/'><span><AiOutlineHeart /> </span> Favourites</Link>
                    <Link style={{textDecoration:"none",color:"black"}}href='/'><span><VscAccount />     </span>Accounts</Link>
                </div>

            </header>
        </div>
    )
}
