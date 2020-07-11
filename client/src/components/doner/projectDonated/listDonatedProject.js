import React from 'react'
import moment from 'moment'
import './listDonatedProject.css'

const ListDonatedProject = ({ project, donatedAmount }) => {
    console.log(project)
    return (
        <div className='roww'>
            <div className='leftcolumn'>
                <div className="caard">
                    <h2>{ project.title }</h2>
                    <h5>{ moment(project.createdAt.toDate()).calendar() } </h5>
                    <h5>Description : </h5>
                    <p>{ project.description } </p>
                    <h5>Project Goal : { project.goal } </h5>
                    <h5>Uploaded by : { project.authorFirstName } { project.authorSecondName }</h5>
                    <h5>Recived Donation : { project.recived } </h5>
                    <img src={ project.url } height="200" width="200"/>
                </div>
            </div>
        </div>
    )
}

export default ListDonatedProject