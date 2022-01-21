import { useState } from "react";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css';


export default function Nav(){
   
  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);
    
    return(
      <header>
        <div className={styles.nav}>
          <nav>
            <div className={styles.logo}>
              <p>Navi.</p> 
            </div>
            
            <div>
            <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+ styles.active }>
              <li>
                <Link href="/"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Home</a></Link>
              </li>
              <li>
                <Link href="#"><a  className ={styles.navlink}>Navigations <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a></Link>
                <ul className={styles.submenu}>
                  <li>
                    <Link href="/horizontalmenu"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Basic Horizontal Menu</a></Link>
                  </li>
                  <li>
                    <Link href="/hamburgermenu"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Hamburger Menu </a></Link> 
                  </li>
                  <li>
                    <Link href="megadrop"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Mega Dropdown Menu</a></Link> 
                  </li>
                  <li>
                    <Link href="#"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Vertical Sidebar Menu</a></Link> 
                  </li>
                  <li>
                    <Link href="#"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Sticky/fixed  Menu</a></Link> 
                  </li>
                  <li>
                    <Link href="#"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Footer Menu</a></Link> 
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
              <li><Link href="https://www.notion.so/NAVIGATION-WEBAPP-d0fd58f29ebf429bab7e54d2dfaae722"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Documentation</a></Link></li>
            </ul>
            <button className={isOpen === false ? 
                            styles.hamburger : styles.hamburger+' '+styles.active}
                            onClick={openMenu}
                            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
           </div>
          </nav>
         </div>
      </header>
 ) 
}

