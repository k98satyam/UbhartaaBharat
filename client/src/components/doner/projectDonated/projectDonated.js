import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import FindProjectDonatedList from './findProjectDonatedList'

class ProjectDonated extends Component {
    
    // state = {
    //     uid : '',
    //     donate : '',
    //     loading : false
    // }

    // componentDidMount () {
    //     this.setState({
    //         uid : this.props.auth.uid,
    //         donate : this.props.donate,
            
    //     }, () => {
    //         this.setState({loading : true})
    //     })
    // }

    render() {
        const { donate, auth, projects } = this.props
        // const uid = auth.uid
        if (auth.uid){
        return (
            <div>
                <FindProjectDonatedList donate = { donate } projects = { projects } auth = { auth.uid } /> 
            </div>
        )}
        else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        donate : state.firestore.ordered.donate,
        projects : state.firestore.ordered.projects,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'donate' },
        { collection : 'projects' }
    ])
)(ProjectDonated)