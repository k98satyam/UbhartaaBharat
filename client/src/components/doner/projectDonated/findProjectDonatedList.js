import React from 'react'
import ListDonatedProject from './listDonatedProject'

const FindProjectDonatedList = ({ projects, donate, auth }) => {
    //console.log(projects,donate,auth)
    //console.log(uid)
    return (
        <div>
            { donate && donate.map(don => {
                if (don.id === auth){
                    return (
                        <div key = { don.id }>
                            {/* { console.log(don['02JVlRuFgVtEtoWPgPmj']) } */}
                            { projects && projects.map(project => {
                                if (don[project.id]) {
                                    //console.log(don[project.id])
                                    return (
                                        <div key = { project.id }>
                                            <ListDonatedProject project = { project } donatedAmount = { don[project.id] }/>
                                        </div>
                                    )
                                }
                            }) }
                        </div>
                    )
                }
            }) }
        </div>
    )
} 

export default FindProjectDonatedList