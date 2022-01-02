import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Footer from './Footer'
export default function Section(){

    return(
    <div className={styles.container}>
        <div className={styles.flex}>
        <div className={styles.img}>
          <Image src= "/Landing.png" height={350} width={430}/>
        </div>
        </div>
        <div className={styles.flex}>
        <div className={styles.description}>
          <h1>Hello There,</h1>
          <h2>This is a navigation menu tutorial. </h2>
          <p> I will be using Next.js Framework.</p>
          <p>For better understanding use a desktop.</p>
          <p>This is the :-</p>
          <p> The Navigation name appears here.</p>
          <div className={styles.buttonsec}>
          <div className={styles.button}>
            <button> View code </button>
          </div>
          <div className={styles.button}>
            <button> Documentation </button>
          </div>
          </div>
        </div> 
        </div>
        <br></br>
        <Footer />
    </div>
 )
     
}

