import React , { Component } from 'react';
import './styles.css';
// import axios from "axios";
import { Link } from 'react-router-dom';
import HeaderComponent from '../Header';

class HomeComponent extends Component {
    constructor (props) {
        super(props)
        this.state={
            topFive : ["GrahamCampbell","fabpot","weierophinney","rkh","josh"],
            userData: []
        }
    }

    render() {
        const {topFive} = this.state;
        return (
            <div className="home__wrapper">
                <div className="home__wrapper--border">  
                    <HeaderComponent header = "Home"/>
                    <div className="home__content">
                        <h2 className="home__header"> Top 5 GitHub Users</h2>
                        <div className="home__tab"> Tap the username to see more information</div>
                        {
                            topFive && topFive.map((user, key) => {
                                return (
                                    <div key={key} className="home__user"> 
                                        <Link to={`/user/${user}`}> {user}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
            
        );
    }
}

export default HomeComponent;