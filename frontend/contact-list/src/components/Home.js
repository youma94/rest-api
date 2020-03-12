import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-container">
                <h2>Home Page</h2>
                <Link to="/contacts">
                    <button>Contact List</button>
                </Link>
                <Link to="/addcontact">
                    <button>Add Contact</button>
                </Link>
            </div>
         );
    }
}
export default Home;