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
            <ul className={styles.navmenu}>
              <li>
                <Link href="#">Documentation</Link>
              </li>
              <li>
                <Link href="#">Navigations</Link>
                <ul className={styles.submenu}>
                  <li>
                    <Link href="#">Basic</Link>
                    <ul className={styles.submenu}>
                      <li>
                        <Link href="#">Hamburger Menu</Link>
                      </li>
                      <li>
                        <Link href="#"> Horizontal Menu</Link>
                      </li>
                      <li>
                        <Link href="#">Vertical Sidebar Nav</Link>
                      </li>
                      <li>
                        <Link href="#">Footer Navbar</Link>
                      </li>
                      <li>
                        <Link href="#">Mega Dropdown</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">Medium</Link>
                    <ul className={styles.submenu}>
                      <li>
                        <Link href="#">Hover Activated Dropdown</Link>
                      </li>
                      <li>
                        <Link href="#">Fixed/sticky Menu</Link>
                      </li>
                      <li>
                        <Link href="#">Centered layout Nav</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">Complex</Link>
                    <ul className={styles.submenu}>
                      <li>
                        <Link href="#">Scroll Triggered</Link>
                      </li>
                      <li>
                        <Link href="#">Parallax Powered </Link>
                      </li>
                      <li>
                        <Link href="#">Interactive Nav</Link>
                      </li>
                      <li>
                        <Link href="#">Multimedia Navbar</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
            </div>
          </nav>
        </div>
        </header>
 )
     
}