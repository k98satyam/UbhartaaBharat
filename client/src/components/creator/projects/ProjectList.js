import React from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux'

const ProjectList = ({ projects, auth }) => {
    return (
        <div>
            { projects && projects.map(project => {
                //console.log(project)
                //if (project.authorID === auth.uid) {
                    return (
                        <ProjectSummary project = { project } key = { project.id }/>
                    )
                //}
            }) }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
} 

export default connect(mapStateToProps)(ProjectList)