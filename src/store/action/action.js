import ActionTypes from '../constant/constant';
import history from '../../History';
import firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9AHbfx8Lauz5tPbkxHPTEYBdSypbgTzk",
    authDomain: "hackathon-a.firebaseapp.com",
    databaseURL: "https://hackathon-a.firebaseio.com",
    projectId: "hackathon-a",
    storageBucket: "",
    messagingSenderId: "834077280609"
};
firebase.initializeApp(config);



export function signupAction(user) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                delete user.confirmPassword;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                let currentUserUid = firebase.auth().currentUser.uid;
                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                history.push('/home');
            })
    }
}



export function signinAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        let currentUserUid = firebase.auth().currentUser.uid;
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                        history.push('/Home');
                    })
            })
    }
}



// export function getData() {
//     return dispatch => {
//         firebase.database().ref('/').child("users/").on("child_added", function (data) {
//             var obj = data.val();
//             // obj.id = data.key;
//             dispatch({ type: ActionTypes.ALLUSERS, payload: obj })
//         })
//     }
// }



// export function chatid(id, ind) {
//     // console.log(id)
//     return dispatch => {
//         firebase.database().ref('/').child("users/" + id).once('value')
//             .then((data) => {
//                 let userName = data.val()
//                 // console.log(userName)
//                 history.push('/About');
//                 dispatch({ type: ActionTypes.CHATIDS, payload: userName })
//             })

//     }
// }


