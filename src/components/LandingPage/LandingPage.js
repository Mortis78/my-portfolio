import React from "react"
import './LandingPage.css'
import foodTruckUser from '../../imgs/foodTruckUserView.png'
import foodTruckOwner from '../../imgs/foodTruckOwnerView.png'
import allBooks from '../../imgs/allBooks.png'
import singleBook from '../../imgs/singleBook.png'
import favoriteBooks from '../../imgs/favoriteBooks.png'


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
            <div className="projects-div">
                <b>Dude, Where's the FoodTruck</b>
                <p>Dude, Where's the Food Truck? is a web app where users can look up the available food trucks in a given area. As a user, when choosing a food truck, you can view where the food trucks will be on a given date, through a list of displayed events.</p>
                <img className="imgs" src={foodTruckUser} alt="foodTruckUserView"/>
                
                <p> As the owner of a food truck, you can add and  edit events and your trucks's info. All 'events' visible are created by food truck owners.</p>
                <img className="imgs" src={foodTruckOwner} alt="foodTruckOwnerView"/>
                <p>This is a multi-page UI that allows users or owners to view and update food trucks. 
                    This project was a collaboration between a dedicated Front End and back end teams.
                <br/>
                <br/>
                <em>
                    Technologies used:  React - TypeScript - CSS - HTML - RESTful API - GitHub - Cypress
                </em>
                </p>
                <span>
                    <a href="https://github.com/Dude-Where-s-the-FoodTruck/fe-Dude-Wheres-the-FoodTruck#readme-top" target="_blank">GitHub ReadMe</a><br/>
                    <a href="https://fe-dude-wheres-the-food-truck.vercel.app" target="_blank">Dude where's The FoodTruck</a>
                </span>
            </div>
            <div>
                <b>Shelf Life</b>
                <p>This App is a book recomendation app where you are able to look at a database of books referred by the Creators and add the book to your favorites based on your interest and the recomendation! Further more, you are able to search the New York Times top 100 best sellers and add your recommendation to the recommendation database.</p>
                
                <img className="imgs" src={allBooks} alt="allBooks"/>
            
                <p> Click on the 'Learn More' button next to a book cover that interests you to view a book's details. On this page a description of the book's plot is presented. The user is also given the ability to add to or remove a book from their favorites as well as the option to buy the book on Amazon. </p>
                <img className="imgs" src={singleBook}  alt="singleBook"/>
                <p>They can view all of their favorited books by clicking the "Your favorites" button at the top right of the page. Click the book club logo at the top left of the page to return to the main page.
                </p>
                <img className="imgs" src={favoriteBooks}  alt="favoriteBooks"/>
                <br/>
                <br/>
                <em>
                    Technologies used: React - CSS - HTML -  PostgreSQL - Express - Node.js  - Cors - Heroku - Knex - Cypress
                </em>
                <br/>
                <br/>
                <span>
                <a href="https://github.com/Mortis78/shelf-life-FE#readme" target="_blank">GitHub ReadMe</a><br/>
                <a href="https://shelf-life-fe.vercel.app/" target="_blank">Shelf Life</a>
                </span>
            </div> 
        </section>
    </main>
    )
}