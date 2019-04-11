import React, {Component} from 'react';
import './styles.css' ;
import axios from "axios";
import HeaderComponent from '../Header';

class UserComponent extends Component {
    constructor (props) {
        super(props)
        this.state={
            userData: null
        }
    }

    componentWillMount() {
       const params = this.props.match.params;
       const thisClass = this; 
       axios.get(`https://api.github.com/users/${params.userName}`)
       .then(function (response) {
            thisClass.setState({userData:response.data});
            console.log(response.data);
       })
       .catch(function (error) {
           console.log(error);
       });
    }
   
    render() {
        const {userData} = this.state;
        return (
            <div className="user__wrapper">
                <div className="user__wrapper--border"> 
                    <HeaderComponent header = "Person" to = "/" />
                    {
                        userData && (
                            <div className="user__content">
                                <img src={userData.avatar_url} alt = ""/>
                                <div>
                                    <div className="user__name">{userData.name} </div>
                                    <div className="user__location">{userData.location || "_"} </div>
                                </div>
                                
                            </div>
                        ) 
                    }
                </div>
            </div>
            
        );
    }
}
export default UserComponent;