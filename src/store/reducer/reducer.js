import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: 'Haider',
    currentUser: '',
    allUsers: [],
    messages: {},
    recipientID: '',
    chatids: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })

        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })

        case ActionTypes.ALLUSERS:
            // console.log(action.payload)
            return ({
                ...state,
                allUsers: state.allUsers.concat(action.payload)
                // todo: state.todo.concat(action.payload),
                // allUsers: action.payload
            })

        case ActionTypes.CHANGERECPUID:
            return ({
                ...state,
                recipientID: action.payload
            })

        case ActionTypes.MESSAGES:
            return ({
                ...state,
                messages: action.payload
            })

        case ActionTypes.CHATIDS:
        console.log(action.payload)
            return ({
                ...state,
                chatids: state.chatids.concat(action.payload) 
            })

        default:
            return state;
    }

}