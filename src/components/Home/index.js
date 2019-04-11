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
            <div>  
                <HeaderComponent header = "Home"/>
                <h2> Top 5 GitHub Users</h2>
                <div> Tap the username to see more information</div>
                {
                    topFive && topFive.map((user, key) => {
                        return (
                            <div key={key} > 
                                <Link to={`/user/:${user}`}> {user}</Link>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default HomeComponent;