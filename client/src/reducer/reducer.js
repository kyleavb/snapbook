import {LIFT_USER, LOGOUT} from '../action/actions'
const initialState = {
  userId: '',
  firstName: '',
  lastName: '',
  userName: '',
  email: '',
  temp: '',
  createdAt: '',
  snaps: []
}

function userApp(state = initialState, action){
    switch(action.type){
        case LIFT_USER: 
            return(
                Object.assign({}, state, {
                    userId: action.data.userId,
                    firstName: action.data.firstName,
                    lastName: action.data.lastName,
                    userName: action.data.userName,
                    email: action.data.email,
                    memberSince: action.data.createdAt,
                    snaps: action.data.snaps
                })
            )

        case LOGOUT:
            return(
                Object.assign({}, state, {
                    userId: '',
                    firstName: '',
                    lastName: '',
                    userName: '',
                    email: '',
                })
            )
        default:
            return state
    }
}
export default userApp