import Link from 'next/link'
import styles from '../styles/ham.module.css';
import { useState } from "react";

function Ham(){

  const [isOpen,setIsOpen] = useState(false);
  const openMenu= ()=> setIsOpen(!isOpen);

 return(
    <div className={styles.navham}>
      <header>
        <div className={styles.nav}>
          <nav>
            <div className={styles.logo}>
              <p>HAMBURGER.</p> 
            </div>
            <div className={styles.collapsiblesec}>
            <ul className={isOpen === false ? 
                styles.navmenu : styles.navmenu +' '+ styles.active }>
              <li>
                <Link href="#"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Home</a></Link>
              </li>
        
              <li><Link href="#"><a  className ={isOpen === false ? 
                            styles.navlink : styles.navlink+' '+styles.active}
                            onClick={openMenu}>Documentation</a></Link></li>
            </ul>
            </div>
            <div className={styles.button}>
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
      </div>
 )
}
export default Ham
