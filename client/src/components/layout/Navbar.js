import React from 'react'
import SignInLinks from './SignInLinks'
//import SignoutLinks from './SignOutLinks'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { auth, profile } = props
    //const links = auth.uid ? <SignInLinks profile = { profile } /> : <SignoutLinks />
    return (
        <div>
            { auth.isLoaded && <SignInLinks profile = { profile} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)