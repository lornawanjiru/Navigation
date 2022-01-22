import Link from 'next/link'
import styles from '../styles/mega.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Mega(){

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
                <li><Link href="#"><a className ={styles.navlink}>Home</a></Link></li>
                <li><Link href="#"><a className ={styles.navlink}> News</a></Link></li>
                <li><Link href="#"><a className ={styles.navlink}>
                <div className={styles.dropdown}>
                    <Link href="#" ><a className={styles.navlink}>Dropdown
                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    </Link>
                    <div className={styles.dropdowncontent}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                        <h3>First Column</h3>
                        <li><Link href="#"><a>Link 1</a></Link></li> 
                        <li><Link href="#"><a>Link 2</a></Link></li> 
                        <li><Link href="#"><a>Link 3</a></Link></li> 
                        </div>
                        <div className={styles.column}>
                        <h3>Second Column</h3>
                        <li><Link href="#"><a>Link 1</a></Link></li> 
                        <li><Link href="#"><a>Link 2</a></Link></li> 
                        <li><Link href="#"><a>Link 3</a></Link></li> 
                        </div>
                        <div className={styles.column}>
                        <h3>Third Column</h3>
                        <li><Link href="#"><a>Link 1</a></Link></li> 
                        <li><Link href="#"><a>Link 2</a></Link></li> 
                        <li><Link href="#"><a>Link 3</a></Link></li> 
                        </div>
                    </div>
                
                </div>
                </div>
                </a>
                </Link>
                </li>
            </ul>
           </div>
          </nav>
         </div>
      </header>
      </div>
 )
}
export default Mega
