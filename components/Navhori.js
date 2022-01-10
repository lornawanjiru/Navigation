import Link from 'next/link'
import styles from '../styles/hori.module.css';


function Navhori(){

 return(
    <div className={styles.navhori}>
          <header>
        <div className={styles.nav}>
          <nav>
            <div className={styles.logo}>
              <p>HORI.</p> 
            </div>
            
            <div>
            <ul className={styles.navmenu}>
              <li>
                <Link href="#"><a  className ={styles.navlink}>Home</a></Link>
              </li>
              <li>
                <Link href="#"><a  className ={styles.navlink}>About</a></Link>
              </li>
              <li><Link href="#"><a  className ={styles.navlink}>Contact</a></Link></li>
            </ul>
           </div>
          </nav>
         </div>
      </header>
      </div>
 )
}
export default Navhori
