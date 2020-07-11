const initState = {
    projects : [
        { id : '1', title : 'first', desc : 'blah blah blahhhaaha', createdAt : new Date(), goal : '$50' },
        { id : '2', title : 'second', desc : 'blah blah blahhhaaha * 2', createdAt : new Date(), goal : '$50' },
        { id : '3', title : 'third', desc : 'blah blah blahhhaaha * 3', createdAt : new Date(), goal : '$50' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' :
            console.log('created project' , action.project)
            return state
        case 'CREATE_PROJECT_ERROR' :
            console.log('created project error' , action.err)
            return state
        default :
            return state   
    }
}

export default projectReducer