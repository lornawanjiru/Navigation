import styles from '../styles/Home.module.css'
import Navhori from '../components/Navhori'
import Footer from '../components/Footer'
import Image from "next/image";



function Horizontal(){
 return(
    <div className={styles.container}>
        <div className={styles.img}>
            <Image src= "/Nav1.png" height={30} width={400}/>
        </div>
        <div className={styles.showcase}>
          <Navhori/>
        </div>
        <div className={styles.layout}>
            <div className={styles.flex}>
            <div className={styles.img}>
            <Image src= "/Landing.png" height={350} width={430}/>
            </div>
            </div>
            <div className={styles.flex}>
            <div className={styles.description}>
            <div className={styles.title}>
                <h1>The Basic/Standard Horizontal Menu.</h1>
            </div>
            <p>This is the menu you see in all most all web apps.
               Its really simple to implement and has resources on how to do it. </p> 
            <p>It has the pages aligned horizontally next to each other and is placed at the website header. </p>   
            <p>It is developed by using HTML and CSS only.</p>
            <p> Disclaimer :- The code isnt responsive</p>
            </div> 
            </div>
        </div>
        <div className={styles.codesec}>
         <div className={styles.title}>
          <h1> The Code </h1> 
         </div>
        </div>
    </div>
 )
}
export default Horizontal
