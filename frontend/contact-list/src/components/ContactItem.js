import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import axios from 'axios'

class ContactItem extends Component {
    state = {  }
    remove = () => {
        axios.delete(`/delete_contact/${this.props.item._id}`)
        .then((res) => res.data)
        // .then((res) => {this.props.removeReducer(res.data)})
        .catch((err)=>alert(err))
        window.location.reload()
    }

    render() { 
        const {item} = this.props
        return ( 
            <div className="contactitem-container">
                <h2>Name: {item.name}</h2>
                <h3>Phone Number: {item.phone}</h3>
                <h3>E-mail: {item.mail}</h3>
                <Link to={`/editcontact/${item.id}`}>
                    <button>Edit</button>
                </Link>

                    <button onClick={this.remove}>Remove</button>
                
  
            </div>
         );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeReducer: _id => {
            dispatch({
                type: 'REMOVE_CONTACT',
                _id
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ContactItem);