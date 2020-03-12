// let stateInitial = [
//     {
//         id: '10',
//         name: 'Moez',
//         phone:  54042343,
//         mail: 'mo.elkouni@gmail.com'
//     }
// ]

const ReducerContacts = ( state=[], action ) => {
    switch(action.type){
        case 'ADD_CONTACT':
            return (
                state.concat(action.newcontact) //[...state, action.newcontact]
            )
        case 'REMOVE_CONTACT':
                return (
                    state.filter(el => el.id !== action._id)
                )
        case 'EDIT_CONTACT':
                return (
                    state.map(el => el.id === action.editcontact.id ? action.editcontact : el)
                )      
        case 'UPDATE_CONTACT':
            return (
                state=action.updated
            )                 
        default:
            return state
    }
}

export default ReducerContacts