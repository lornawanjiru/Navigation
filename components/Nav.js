import { useState } from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css';


export default function Nav(){

    return(
      <header>
        <div className={styles.nav}>
          <nav>
            <div className={styles.menuicons}>
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div>
            
            <div className={styles.logo}>
              <p>Navi.</p> 
            </div>
            
            <div>
            <ul className={styles.navmenu}>
              <li>
                <Link href="#"><a  className ={styles.navlinks}>Documentation</a></Link>
              </li>
              <li>
                <Link href="#"><a  className ={styles.navlinks}>Navigations <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a></Link>
                <ul className={styles.submenu}>
                  <li>
                    <Link href="#"><a  className ={styles.navlinks}>Basic Horizontal Menu</a></Link>
                  </li>
                  <li>
                    <Link href="#"><a  className ={styles.navlinks}>Hamburger Menu </a></Link> 
                  </li>
                  <li>
                    <Link href="#"><a  className ={styles.navlinks}>Mega Dropdown Menu</a></Link> 
                  </li>
                  <li>
                    <Link href="#"><a  className ={styles.navlinks}>Vertical Sidebar Menu</a></Link> 
                  </li>
                  <li>
                    <Link href="#"><a  className ={styles.navlinks}>Sticky/fixed  Menu</a></Link> 
                  </li>
                  <li>
                    <Link href="#"><a  className ={styles.navlinks}>Footer Menu</a></Link> 
                  </li>
                  {/* <li>
                    <Link href="#"><a  className ={styles.navlinks}>Others<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a></Link>
                    <ul className={styles.submenu}>
                      <li>
                        <Link href="#"><a  className ={styles.navlinks}>Scroll Triggered</a></Link>
                      </li>
                      <li>
                        <Link href="#"><a  className ={styles.navlinks}>Hover Activated</a></Link>
                      </li>
                      <li>
                        <Link href="#"><a  className ={styles.navlinks}>Centered layout</a></Link>
                      </li>
                      <li>
                        <Link href="#"><a  className ={styles.navlinks}>Parallax Powered </a></Link>
                      </li>
                      <li>
                        <Link href="#"><a  className ={styles.navlinks}>Interactive Nav</a></Link>
                      </li>
                      <li>
                        <Link href="#"><a  className ={styles.navlinks}>Multimedia Navbar</a></Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li><Link href="#"><a  className ={styles.navlinks}>FAQ</a></Link></li>
            </ul>
           </div>
          </nav>
         </div>
        </header>
 )
     
}