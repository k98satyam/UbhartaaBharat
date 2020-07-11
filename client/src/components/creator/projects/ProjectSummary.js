import React from 'react'
import moment from 'moment'
import './projectSummary.css'

const ProjectSummary = ({ project }) => {
    //console.log(project)
    return (
        <div className='roww'>
            <div className='leftcolumn'>
                <div className="caard">
                    <h2>{ project.title }</h2>
                    <h5>{ moment(project.createdAt.toDate()).calendar() } </h5>
                    <h5>Description : </h5>
                    <p>{ project.description } </p>
                    <h5>Project Goal(In Ether) : { project.goal } </h5>
                    <h5>Uploaded by : { project.authorFirstName } { project.authorSecondName }</h5>
                    <h5>Recived Donation(In Ether) : { project.recived } </h5>
                    <img src={ project.url } height="250" width="400"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary