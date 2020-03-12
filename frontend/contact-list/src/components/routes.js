import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import ContactList from './ContactList';
import AddContact from './addContact';
import EditContact from './EditContact'

class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="routes-container">
                <Route exact path="/" component={Home}/>
                <Route exact path="/contacts" component={ContactList}/>
                <Route exact path="/addcontact" component={AddContact}/>
                <Route exact path="/editcontact/:id" render={(props) => <EditContact
                cin={props.match.params.id}/>}/>
            </div>
         );
    }
}
 
export default Routes;