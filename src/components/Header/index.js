import React, {Component} from 'react';  
import { Link } from 'react-router-dom'
import './styles.css' ;


class HeaderComponent extends Component {
    render() {
        const {header, to} = this.props;
        return (
          <div>
              <div> 
                {
                  to && <Link to={to}> Back </Link>
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