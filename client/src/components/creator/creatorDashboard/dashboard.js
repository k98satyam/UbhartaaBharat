import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ProjectList from '../projects/ProjectList'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class Dashboard extends Component {
    render() {
        const { auth, projects } = this.props
        //console.log(projects)
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div>
                <ProjectList projects = { projects } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        projects : state.firestore.ordered.projects,
        auth : state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'projects', orderBy : ['createdAt' , 'desc'] }
    ])
)(Dashboard)