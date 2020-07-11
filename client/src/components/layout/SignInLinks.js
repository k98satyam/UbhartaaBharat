import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignInLinks = (props) => {

    return (
        <ul className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">                
                <li className="nav-item">
                    <NavLink to = '/' className = "navbar-brand">UbhartaaBharat</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to = '/create'>New Project</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to = '/donerdashboard'>Donate</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to = '/projectdonated'>My Donation</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to = '/myprojects'>My Project</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/profile'>{ props.profile.initials }</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick = { props.signOut }>LogOut</a>
                </li>
            </ul>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignInLinks)