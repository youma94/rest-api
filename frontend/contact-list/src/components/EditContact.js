import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';

class EditContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            phone:'',
            mail:''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    componentDidMount = () => {
        console.log(this.props.id)
        axios.get(`/contacts/${this.props.id}`)
        .then(res => {
            this.setState({
                name:res.data.name,
                phone:res.data.phone,
                mail:res.data.mail
            }, () => console.log(this.state)
            ) 
        })        
        .catch(err => alert(err)) 

        // this.setState({
        //     ...this.props.contactsReducer.filter(el => el.id === this.props.cin)[0]
        // })
    }


    edit = () => {
        axios.put(`/edit_contact/${this.props.match.params.id}`,
            {
                name:this.state.name,
                phone:this.state.phone,
                mail:this.state.mail
            }
        )
            // .then(() => this.props.editReducer(this.state))
            // .catch((err) => alert(err))
        // this.props.editReducer(this.state)
    }
    render() { 
        return ( 
            <div className="addcontact-container">
                <h2>Edit Contact</h2>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>Phone Number:</label>
                <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                <label>E-mail Address:</label>
                <input type="email" name="mail" value={this.state.mail} onChange={this.handleChange}/>
                <Link to='/contacts'>
                    <button onClick={this.edit}> Edit</button>
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
        editReducer: editcontact => {
            dispatch({
                type: 'EDIT_CONTACT',
                editcontact
            })
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);