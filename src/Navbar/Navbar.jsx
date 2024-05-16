import React from 'react'
import styles from './Navbar.module.css'
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoy } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
function Navbar() { 
  return (
    <>
    <div className={styles.maindiv}>
        <nav className={styles.nav}>
        <img className={styles.img} src='data:image/jpeg;base64,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'/>
        <p className={styles.p}>other Delhi,India</p>
        <div className={styles.seconddiv}>
            <ul className={styles.ul}>
          <li className={styles.li}>  <Link to='/' className={styles.a}>   <MdHome />      Home</Link></li>
          <li className={styles.li}>  <Link to='/Offer'className={styles.a}> <BiSolidOffer />     Offer</Link></li>
          <li className={styles.li}>  <Link to='/Help' className={styles.a}>   <IoHelpBuoy />     Help</Link></li>
          <li className={styles.li}>  <Link to='/Signin' className={styles.a}>  <RiAdminFill />    Signin</Link></li>
          <li className={styles.li}>  <Link to='/Cart' className={styles.a}>   <FaCartShopping /> Cart</Link></li>
          </ul>
        </div>
        </nav>
    </div>
    <div>
    </div>
</>  )
}

export default Navbar;