import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import axios from "axios"

class AddContact extends Component {
    state = {  }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    add = () => {
        axios.post('/new_contact',{...this.state})
       .then(()=> this.props.addReducer({...this.state}))
       .catch((err)=>alert (err))
    }

    render() { 
        return ( 
            <div className="addcontact-container">
                <h2>Add Contact</h2>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleChange}/>
                <label>Phone Number:</label>
                <input type="text" name="phone" onChange={this.handleChange}/>
                <label>E-mail Address:</label>
                <input type="email" name="mail" onChange={this.handleChange}/>
                <Link to='/contacts'>
                    <button onClick={this.add}>Add</button>
                </Link>
            </div>
         );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addReducer: newcontact => {
            dispatch({
                type: 'ADD_CONTACT',
                newcontact
            })
        }
    }
}
 
export default connect(null, mapDispatchToProps)(AddContact);