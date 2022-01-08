import styles from '../styles/Home.module.css'
import Navhori from '../components/Navhori'
import Footer from '../components/Footer'
import Image from "next/image";

function Horizontal(){
 return(
    <div className={styles.container}>
       <div className={styles.showcase}>
          <Navhori/>
          {/* <div className={styles.layout}>
            <div className={styles.flex}>
            <div className={styles.img}>
            <Image src= "/Landing.png" height={350} width={430}/>
            </div>
            </div>
            <div className={styles.flex}>
            <div className={styles.description}>
            <div className={styles.title}>
                <h1>NAVIGATION TUTORIAL WITH THE SOURCE CODE</h1>
            </div>  */}
            {/* <h2>Hello There,</h2> */}
            {/* <p>This is a navigation menu tutorial. </p>
            <p> I will be using Next.js Framework.</p>
            <p>For better understanding use a desktop.</p>
            <p>If you havent understood a thing feel free to ask</p> */}
            {/* <h2> The Basic/Standard Horizontal Menu.</h2>
            <div className={styles.buttonsec}>
            <div className={styles.button}>
                <button> View the code </button>
            </div>
            <div className={styles.button}>
                <button> Documentation </button>
            </div>
            </div>
            </div> 
            </div>
         </div>
         <Footer/> */}
        </div>
    </div>
 )
}
export default Horizontal
