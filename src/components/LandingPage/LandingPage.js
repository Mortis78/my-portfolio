import React from "react"
import './LandingPage.css'
import foodTruckUser from '../../imgs/foodTruckUserView.png'
import foodTruckOwner from '../../imgs/foodTruckOwnerView.png'


export const LandingPage = () => {
    return(
    <main>
        <section className="about-me-section">
          
            <p className="about-me">
                <br/> Hey there! I'm John, a passionate front-end developer with a creative edge. I'm a proud graduate of the Turing School of Software & Design, where I honed my skills and fostered a deep love for web development.
                
                During my time at Turing, I had the incredible opportunity to collaborate on a multitude of exciting projects. From crafting immersive user experiences to building dynamic and responsive interfaces, I thrive in the fast-paced, collaborative environment that the school provided. These projects not only challenged my technical abilities but also taught me the value of effective teamwork and communication.

                As a front-end developer, I specialize in bringing designs to life with clean, elegant code and intuitive user interactions. I have a strong command of <em>HTML, CSS, and JavaScript</em>. 
                Currently, I'm also diving into the world of <em>TypeScript</em>, expanding my skill set and exploring the advantages it brings to modern web development."

                Beyond code, I find inspiration in the art of web design, creating visually appealing and intuitive experiences that leave a lasting impact. I believe in the power of a well-crafted user interface to enhance journeys and spark joy. Passionate about leveraging technology for meaningful solutions, I prioritize building accessible websites and optimizing performance. My dedication ensures high-quality work that exceeds expectations.
                
                As a proud single parent, I have successfully raised my son for eight years, instilling in me a strong sense of responsibility, resilience, and adaptability. Together, we embrace the beauty of the mountains and find joy in every step we take.
                <br/>

                <br/>I am excited to bring my expertise, creativity, and life experiences to collaborate on boundary-pushing projects. Through technology, I aspire to make a positive impact on the world we live in. Let's create remarkable digital experiences together!"
            </p>
        </section>
        <section className="project-section">
            <h2>Projects</h2>
            <div>
                <b>Dude, Where's the FoodTruck</b>
                <p>Dude, Where's the Food Truck? is a web app where users can look up the available food trucks in a given area. As a user, when choosing a food truck, you can view where the food trucks will be on a given date, through a list of displayed events.</p>
                <div>
                <img className="imgs" src={foodTruckUser} alt="foodTruckUserView"/>
                </div>
                <div>
                    <p> As the owner of a food truck, you can add and edit events and your trucks's info. All 'events' visible are created by food truck owners.</p>
                    <img className="imgs" src={foodTruckOwner} alt="foodTruckOwnerView"/>
                    <p>This is a multi-page UI that allows users or owners to view and update food trucks. 
                    This project was a collaboration between a dedicated Front End and back end teams.
                    <br/>
                    <br/>
                    <em>
                    Technologies used:  React - TypeScript - CSS - HTML - RESTful API - GitHub - Cypress
                    </em>
                    </p>
                </div>
            </div> 
        </section>


    </main>
    )
}