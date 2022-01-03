import styles from '../styles/Home.module.css';
import Image from 'next/image';

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
          <p>Hello There,</p>
          <p>This is a navigation menu tutorial. </p>
          <p> I will be using Next.js Framework.</p>
          <p>For better understanding use a desktop.</p>
          <p>This is the :-</p>
          <h1> The Basic/Standard Horizontal Menu.</h1>
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
  
 )
     
}

