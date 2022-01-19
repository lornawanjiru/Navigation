import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Ham from '../components/Ham'
import Image from "next/image";
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import { useEffect } from 'react';

function Hambuger(){
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
            <Image src= "/Nav2.png" height={60} width={600}/>
        </div>
        <div className={styles.showcase}>
          <Ham />
        </div>
        <div className={styles.layout}>
            <div className={styles.flex}>
            <div className={styles.img}>
            <Image src= "/nav2.svg" height={350} width={430}/>
            </div>
            </div>
            <div className={styles.flex}>
            <div className={styles.description}>
            <div className={styles.title}>
                <h1>Hambuger Menu.</h1>
            </div>
            <p>
                A hamburger menu is an icon used on a website and in apps that, when clicked or tapped, opens a side 
                menu or navigation drawer. <br />It’s called a “hamburger menu” because it takes the form of the famous sandwich. 
                This icon was created by the designer Norm Cox for the graphical user interface of the Xerox Star workstation 
                in 1981.<br /> Cox’s goal was to create an icon that would communicate to users that a list of items was hidden 
                behind it.<br />
                 <br />
                You can get to read more on hamburger in following links:- <br /> <br />
                <a href={"https://www.howtogeek.com/720214/what-is-a-hamburger-menu-button/"}>1. https://www.howtogeek.com/720214/what-is-a-hamburger-menu-button/</a>  <br /> 
                <a href={"https://xd.adobe.com/ideas/principles/web-design/what-is-a-hamburger-menu/"}>2. https://xd.adobe.com/ideas/principles/web-design/what-is-a-hamburger-menu/</a> <br /> 
                <a href={"invisionapp.com/inside-design/pros-and-cons-of-hamburger-menus/"}>3. invisionapp.com/inside-design/pros-and-cons-of-hamburger-menus/</a> <br /> <br />
            </p>
            </div> 
            </div>
        </div>
        <div className={styles.code}>
         <div className={styles.codesec}>
         
            <div className={styles.codebox}>
                <pre>
                <code className={styles.hljs}>
                {`
                import Link from 'next/link'
                import styles from '../styles/ham.module.css';
                import { useState } from "react";
                
                function Ham(){
                
                  const [isOpen,setIsOpen] = useState(false);
                  const openMenu= ()=> setIsOpen(!isOpen);
                
                 return(
                    <div className={styles.navham}>
                      <header>
                        <div className={styles.nav}>
                          <nav>
                            <div className={styles.logo}>
                              <p>HAMBURGER.</p> 
                            </div>
                            <div className={styles.collapsiblesec}>
                            <ul className={isOpen === false ? 
                                styles.navmenu : styles.navmenu +' '+ styles.active }>
                              <li>
                                <Link href="#"><a  className ={isOpen === false ? 
                                            styles.navlink : styles.navlink+' '+styles.active}
                                            onClick={openMenu}>Home</a></Link>
                              </li>
                        
                              <li><Link href="#"><a  className ={isOpen === false ? 
                                            styles.navlink : styles.navlink+' '+styles.active}
                                            onClick={openMenu}>Documentation</a></Link></li>
                            </ul>
                            </div>
                            <div className={styles.button}>
                            <button className={isOpen === false ? 
                                            styles.hamburger : styles.hamburger+' '+styles.active}
                                            onClick={openMenu}
                                            >
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                                <span className={styles.bar}></span>
                            </button>
                            </div>
                          </nav>
                         </div>
                      </header>
                      </div>
                 )
                }
                export default Ham
                
                `}
                </code>
                </pre>
            </div>
            <div className={styles.cssbox}>
                <pre>
                <code className={styles.hljs}>  
                {`
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
                  .navmenu{
                    width: 20%;
                    text-align: center;
                    position: fixed;
                    top: 15%;
                    display: none;
                    margin-right: 10%;
                    height: 10vh;
                    flex-direction: column;
                    background-color: #3c02a9;
                    z-index: 1000;
                   
                  }
                  .navmenu.active {
                    right: 5%;
                    display: inline;
                    border-radius: 8px;
                    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
                  }
                  
                  .navitem {
                    margin: 2.5rem 0;
                  }
                  .button{
                      margin-top: 1.5%;
                  }
                  .hambuger{
                    margin-top: 2%;
                    margin-left: 87%;
                  }
                  .hamburger {
                    display: block;
                    cursor: pointer;
                  }
                  
                  .hamburger.active .bar:nth-child(2) {
                    opacity: 0;
                  }
                  
                  .hamburger.active .bar:nth-child(1) {
                    -webkit-transform: translateY(8px) rotate(45deg);
                    transform: translateY(8px) rotate(45deg);
                  }
                  
                  .hamburger.active .bar:nth-child(3) {
                    -webkit-transform: translateY(-8px) rotate(-45deg);
                    transform: translateY(-8px) rotate(-45deg);
                  }
                  .bar {
                    display: block;
                    width: 35px;
                    height: 3px;
                    margin: 5px auto;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    background-color: #fff;
                  }
                  .navmenu li{
                    line-height: 4rem;
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
export default Hambuger
