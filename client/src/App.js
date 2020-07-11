import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/creator/creatorDashboard/dashboard'
import CreateProject from './components/creator/projects/CreateProject'
import DonerDashboard from './components/doner/donerDashboard/donerDashboard'
import ProjectDonated from './components/doner/projectDonated/projectDonated'
import MyProjects from './components/creator/projects/MyProjects'
import { connect } from 'react-redux';

class App extends Component {
	render () { 
		if (this.props.auth.uid){
    	return (
			<div>
				<BrowserRouter>				
					<Navbar/>
					<Switch>
						<Route exact path = '/' component = { Dashboard } /> 			
						<Route path = '/signin' component = { SignIn } /> 			
						<Route path = '/signup' component = { SignUp } /> 			
						<Route path = '/create' component = { CreateProject } /> 			
						<Route path = '/donerdashboard' component = { DonerDashboard } /> 			
						<Route path = '/projectdonated' component = { ProjectDonated } /> 			
						<Route path = '/myprojects' component = { MyProjects } /> 			
					</Switch>
				</BrowserRouter>				
			</div> 
		)
		}
		else {
			return (
				<BrowserRouter>				
				<Redirect to='/signin'/>
					<Switch>
						<Route path = '/signup' component = { SignUp } />
						<Route path = '/signin' component = { SignIn } /> 								 			
					</Switch>
				</BrowserRouter>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		auth : state.firebase.auth
	}
}

export default connect(mapStateToProps)(App);
