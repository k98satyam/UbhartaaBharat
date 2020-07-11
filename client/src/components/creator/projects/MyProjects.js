import React from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const MyProjects = ({ projects, auth }) => {
    //console.log(projects,auth)
    return (
        <div>
            { projects && projects.map(project => {
                //console.log(project,auth)
                if (project.authorID === auth.uid) {
                    //console.log(project)
                    return (
                        <ProjectSummary project = { project } key = { project.id }/>
                    )
                }
            }) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        projects : state.firestore.ordered.projects,
    }
} 

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'projects', orderBy : ['createdAt' , 'desc'] }
    ])
)(MyProjects)