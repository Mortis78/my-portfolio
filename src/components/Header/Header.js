import React from "react";
import './Header.css'
import trees from '../../imgs/trees.jpg'
import clover from '../../imgs/clover.jpg'
import grays from '../../imgs/grays.jpg'


export const Header = () => {
    return(
        <section className="header-imgs">
            <div>
            <img className="imgs" src={trees}  alt="trees"/>
            <img className="imgs" src={grays}  alt="grays"/>
            <img className="imgs" src={clover}  alt="clover"/>

            </div>
            <div>   
            <h1>John Ammon - Software Engineer </h1>
            <p>Denver, CO - ammonj78@gmail.com - 720-312-3776 </p>
            <em>

            <a href="https://www.linkedin.com/in/johnathon-ammon-turing-01a86919a/" target="_blank">LinkedIn    </a> 

            <a href="https://github.com/Mortis78" target="_blank"> / GitHub</a>
            
            <a href="https://instagram.com/mistermortis78?igshid=ZDc4ODBmNjlmNQ==" target="_blank"> / Instagram</a>
            </em>
            </div>

        </section>
    )
}