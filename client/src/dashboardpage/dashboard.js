import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container"
import "./style.css";
import image from "../components/images/dashboard-bg.png"
import Navbar from "../components/Navbar";

function Dashboard() {
    return (
        <div>

<Navbar />
        <Container style={{ marginTop: 30 }}>
        <Link
            to="/Lesson"
            className={
                window.location.pathname === "/" || 
                window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
        >
        <div class="circle-tile ">
            <a href="/lesson">
                <div class="circle-tile-headingblue"><i class="fa fa-book fa-fwfa-3x"></i></div>
            
            </a>
            <div class="circle-tile-content  blue">
                <div class="circle-tile-description-text-faded"> Lessons</div>
            </div>
        </div>
        </Link>
        
        <Link 
        to="/Result"
        className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
            ? "nav-link active"
            : "nav-link"
        }
        >
        <div class="circle-title">
            <a href="/result">
                <div class="circle-title-heading red"><i class="fa fa-users fa-fw fa-3x"
                ></i></div>
             </a>
             <div class="circle-tile-content red">
                <div class="circle-tile-description text-faded"> Result</div>
             
             </div>

        </div>
        </Link>

        <div className="large-image">
            <img src={image} alt = "dbimg"></img>
        </div>




        
        
        </Container>












        </div>




    );

}

export default Dashboard;