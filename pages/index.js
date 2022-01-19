import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';



export default function Home() {
  return (  
    <div className={styles.container}>
      <Head>
        <title>Navigation menu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
        <div className={styles.flex}>
        <div className={styles.img}>
          <Image src= "/Landing.png" height={350} width={430}/>
        </div>
        </div>
        <div className={styles.flex}>
        <div className={styles.description}>
          <div className={styles.title}>
            <h1>NAVIGATION TUTORIAL WITH THE SOURCE CODE</h1>
          </div> 
          <p>Are you having trouble implementing the navigation menu on next.js? </p>
          <p> There might be a lot of new stuff on this amazing Framework.</p>
          <p> But there some new things that need to be put in place for stuff to work.</p>
          <p> This is not a Next.js tutorial, It only focuses on the navigation section .</p>
          <p>For better understanding use a desktop.</p>
          
          {/* <h1> The Basic/Standard Horizontal Menu.</h1>
          <div className={styles.buttonsec}>
          <div className={styles.button}>
            <button> View the code </button>
          </div>
          <div className={styles.button}>
            <button> Documentation </button>
          </div>
          </div> */}
        </div> 
        </div>
        
    </div>    
  
 )
     
}

      
   
