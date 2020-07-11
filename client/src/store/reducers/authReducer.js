const initState = {
    authError : null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS' :
            console.log('LogIn Success')
            return {
                ...state,
                authError : null
            }
        case 'LOGIN_ERROR' :
            console.log('LogIn Error')
            return {
                ...state,
                authError : 'Log In Error'
            }
        case 'SIGNUP_ERROR' :
            console.log('Sign Up Error')
            return {
                ...state,
                authError : 'Sign Up Error'
            }
        case 'SIGNUP_SUCCESS' :
            console.log('SignUp Success')
            return {
                ...state,
                authError : null
            }
        case 'SIGNOUT_SUCCESS' :
            console.log('why you log out my child :( ')
            return state
        default :
            return state
    }
}

export default authReducer