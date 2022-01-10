import styles from '../styles/Home.module.css'
import Navhori from '../components/Navhori'
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
        <div className={styles.navimg}>
            <Image src= "/Nav1.png" height={60} width={600}/>
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
        <div className={styles.code}>
         <div className={styles.title}>
          <h1> The Code </h1> 
         </div>
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
            <div className={styles.description}>
            <div className={styles.title}>
                <h2>The Horizontal Navigation page.</h2>
            </div>
            <p>This is a really simple navigation menu. The trick is just to ensure your css 
                file </p> 
            </div> 
         </div>
         </div>
        
    </div>
 )
}
export default Horizontal
