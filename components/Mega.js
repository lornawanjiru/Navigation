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
            <div className={styles.navbar}>
                <Link href="#"><a>Home</a></Link>
                <Link href="#"> <a> News</a> </Link>
                <div class="dropdown">
                    <button class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <div class="header">
                        <h2>Mega Menu</h2>
                    </div>
                    <div class="row">
                        <div class="column">
                        <h3>Category 1</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                        <div class="column">
                        <h3>Category 2</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                        <div class="column">
                        <h3>Category 3</h3>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </ul>
           </div>
          </nav>
         </div>
      </header>
      </div>
 )
}
export default Navhori
