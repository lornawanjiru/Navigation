import styles from '../styles/Home.module.css'
import Mega from '../components/Mega'
import Head from 'next/head'
import Image from "next/image";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import { useEffect } from 'react';

function Horizontal(){
    useEffect(() => {
        hljs.initHighlighting();
    }, []);
 return(
    <div className={styles.container}>
      <Head>
            <title>Navigation menu</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/logo.png" />
        </Head>
        <div className={styles.navimg}>
            <Image src= "/Nav1.png" height={60} width={600}/>
        </div>
        <div className={styles.showcase}>
          <Mega/>
        </div>
        <div className={styles.layout}>
            <div className={styles.flex}>
            <div className={styles.img}>
            <Image src= "/nav1.svg" height={350} width={430}/>
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
            <p> Disclaimer :- The code isnt responsive</p>
            </div> 
            </div>
        </div>
        <div className={styles.code}>
         <div className={styles.codesec}>
         
            <div className={styles.codebox}>
                <pre>
                <code className={styles.hljs}>
                {`
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

                `}
                </code>
                </pre>
            </div>
            <div className={styles.cssbox}>
                <pre>
                <code className={styles.hljs}>  
                {`
                  /* Navigation Tutorial Css */
                  /* Horizontal Menu */
                  .logo{
                      font-family: "akronim";
                      font-size: 2.5em;
                      color: #fff;
                      margin: 1%;
                      width: 5rem;
                      height: 5rem;
                      display: flex;
                    }
                    .logo p{
                      margin: auto;
                    }
                    .nav{
                      width: 100%;
                    }
                    .navmenu{
                      width: 100%;
                      top: 0;
                      height: auto;
                      margin-top: auto;
                      position: relative;
                      flex-direction: row;
                      background-color: inherit;
                      display: flex;
                    }
                    .navmenu li{
                      line-height: 6rem;
                      position: relative;
                    }
                    .navmenu a{
                      display: block;
                      padding: 0 1.5em 0 0;
                      transition: color 650ms;
                    }
                    .navmenu a:hover{
                      color: #864ef0;
                    }
                   
                `}
                </code>
                </pre>
            </div>
            
         </div>
        </div>
        <div className={styles.code}>
         <div className={styles.codesec}>
         <div className={styles.description}>
            <div className={styles.title}>
                <h1>The Code.</h1>
            </div>
               <p>This is a really simple navigation menu. The trick is your css file.
               <br/><br/>
                A number of factors influence the decision to choose horizontal navigation,
                including design, usability and intention of content.<br/> <br/>Small websites often prefer horizontal
                type at the top of the site,
                while large corporate websites often use both horizontal and vertical type. </p> 
                <p> <br/>
                The Next.js Link component takes a route or navigation path as the value of its href property.
                You can embed any other component within Link as long as that component can take an href prop as seen in the first code IDE
                for nav.js File.<br/>
                Then using your layout css file ensure you navigation is flexed in a row direction, pad between the links.
                Add hover effect to inform the user the link he/she is about to click.<br/>
                Easy right!!! I hope :)  </p> 
            </div> 
         </div>
        </div>
        
    </div>
 )
}
export default Horizontal
