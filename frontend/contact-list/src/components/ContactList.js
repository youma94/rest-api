import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import ContactItem from './ContactItem';
import {connect} from 'react-redux'
import axios from 'axios';


class ContactList extends Component {

    state = {  }
    componentDidMount=()=>{
        axios.get('/contacts')
        .then((res)=>this.props.updateReducer(res.data))
    }
    render() {
        const{contactsReducer} = this.props
        return ( 
            <div className="contactlist-container">
                <h2>Contact List:</h2>
                <div className="contactlist">
                    {(contactsReducer.length === 0) ? <h1>There's no contact here</h1> : contactsReducer.map((el, index) => <ContactItem key={index} item={el}/>)}
                </div>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return{
        contactsReducer: state.ReducerContacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateReducer: updated => {
            dispatch({
                type: 'UPDATE_CONTACT',
                updated
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);