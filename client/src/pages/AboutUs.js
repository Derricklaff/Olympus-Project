import React from 'react';
import StripeContainer from '../components/Stripe/StripeContainer';



export default function AboutUs() {
    const [showItem, setShowItem] = useState(false)
    return (

        <div>
            <section>
                <h1>About Us</h1>
              
                {showItem ? <StripeContainer/> : <> <h3>$5.00</h3> <img src=''></img></>} <button onClick={()=> setShowItem(true)}>Buy us a coffee</button>
            </section>

            <section id="welcome" >
                <article >
                    <div>

                        <h2>About The Game</h2>
                        <p>
                            Hello, and welcome to the Olympus-project. A fun and interactive video that reviews coding concepts covered in a coding bootcamp. The best way to learn about a new concept in anything is to turn it into a game. With the Olympus project, a player can review important concepts in coding to ensure that they are learning and retaining the content taught. If you like what we have created support us by buying us a cup of coffee. 
                        </p>
                    </div>

                    <div>
                        <h2>About The Developers</h2>
                        <p>
                            This program was created by three talented full stack web developers; Tristan Saragosa, Derrick Lafforthun, and Gayle Hoefer. This team are recent graduates of the University of Arizona coding bootcamp. If you like what we have created, please checkout our  GitHub pages.
                        </p>

                        <p>Derrick Lafforthun</p>
                        <li href="https://github.com/derricklaff">GitHub</li>
                        <p>Tristan Saragosa</p>
                        <li href="https://github.com/trufl">GitHub</li>
                        <p>Gayle Hoefer</p>
                        <li href="https://github.com/hoeferg">GitHub</li>
                    </div>

                </article>
            </section>
        </div >

    )
}
