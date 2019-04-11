import React, {Component} from 'react';  
import { Link } from 'react-router-dom'
import './styles.css' ;


class HeaderComponent extends Component {
    render() {
        const {header, to} = this.props;
        return (
          <div className="header">
              <div className="header__wrapper"> 
                {
                  to && <Link to={to}> 
                  <i className="fas fa-chevron-left"></i>
                  Back
                   </Link>
                }
                {
                  <div> {header} </div>
                }
              </div>
          </div>
        );
    }
}

export default HeaderComponent;