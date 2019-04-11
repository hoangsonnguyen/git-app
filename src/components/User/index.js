import React, {Component} from 'react';
import './styles.css' ;
import axios from "axios";
import queryString from 'query-string';
import HeaderComponent from '../Header';

class UserComponent extends Component {
    constructor (props) {
        super(props)
        this.state={
            userData: null
        }
    }

    componentWillMount() {
       const params = queryString.parse(this.props.location.search);
       axios.get(`https://api.github.com/users/${params.userName}`)
       .then(function (response) {
           this.setState({userData:response.data});
       })
       .catch(function (error) {
           console.log(error);
       });
    }
   
    render() {
        const {userData} = this.state;
        return (
            <div> 
                <HeaderComponent header = "Person" to = "/" />
                {
                    userData && (
                        <div>
                            <div>{userData.name} </div>
                            <div>{userData.avatar_url} </div>
                            <div>{userData.location} </div>
                        </div>
                    ) 
                }
            </div>
        );
    }
}
export default UserComponent;