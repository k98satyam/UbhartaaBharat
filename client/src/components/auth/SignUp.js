import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authAction'
import { Redirect, Link } from 'react-router-dom'
import image1 from './images/img1.svg'
import avatar from './images/avatar.svg'
import wave from './images/wave.png'
import './auth.css'

class SignUp extends Component {

    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : '',
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        //console.log(this.state)
        this.props.signUp(this.state)
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.id] : event.target.value 
        })
    }

    handleClick = (event) => {
        this.setState({
            accType : event.target.id
        })
    }

    render() {
        require('./auth.css')
        const { auth,authError } = this.props
        if (auth.uid) return <Redirect to='/' />
        return (
            <div>
                <img className="wave" src={ wave }/>
                <div className = "cont">
                    <div className='img'>
                        <img src={ image1 }/>
                    </div>
                    <div className='login-container'>
                        <form onSubmit = {this.handleSubmit} >
                            <img className="avatar" src={ avatar }/>
                            <h2>Register</h2>
                            <div class="input-div three">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div>
                                <input placeholder="First Name" class="input" type="text" id="firstName"  onChange = {this.handleChange}/>
                            </div>
                            </div>
                            <div class="input-div four">
                                <div class="i">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div>
                                    <input placeholder="Last Name" class="input" type="text" id="lastName"  onChange = {this.handleChange}/>
                                </div>
                            </div>
                            <div class="input-div one">
                                <div class="i">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <input placeholder="Email" class="input" type="email" id="email"  onChange = {this.handleChange}/>
                                </div>
                            </div>
                            <div class="input-div two">
                                <div class="i">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div>
                                    <input placeholder="Password" class="input" type="password" id="password"  onChange = {this.handleChange}/>
                                </div>
                            </div>
                            <div>
                                <input type="submit" class="btn" value="Sign Up"/>
                                <div>
                                    { authError ? <p>{ authError }</p> : null}
                                </div>
                            </div>        
                            <Link to='/signin'>Already have Account? Sign In</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)