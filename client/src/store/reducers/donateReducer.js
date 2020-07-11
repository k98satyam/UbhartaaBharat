const initState = {
    donateError : null
}

const donateReducer = (state = initState, action) => {
    switch(action.type) {
        case 'DONATE_SUCCESSFUL' :
            console.log('Donate Successful')
            return {
                ...state,
                donateError : null
            }
        case 'DONATE_UNSUCCESSFUL' :
            console.log('Donate UnSuccessful' , action.err)
            return {
                ...state,
                donateError : 'Donate Failed'
            }
        default :
            return state   
    }
}

export default donateReducer