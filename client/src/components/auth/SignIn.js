import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'
import { Redirect, Link } from 'react-router-dom'
import image from './images/image.svg'
import avatar from './images/avatar.svg'
import wave from './images/wave.png'
import './auth.css'

class SignIn extends Component {

    state = {
        email : '',
        password : ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //console.log(this.state)
        this.props.signIn(this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    render() {
        require('./auth.css')
        const { authError, auth } = this.props
        if (auth.uid) return <Redirect to='/' />
        if (!auth.isLoaded) return <div></div>
        return (
            <div>
                <img className="wave" src={ wave }/>
                <div className = "cont">
                    <div className='img'>
                        <img src={ image }/>
                    </div>
                    <div className='login-container'>
                    <form onSubmit = {this.handleSubmit}>
                        <img className="avatar" src={ avatar }/>
                        <h2>Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                              <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <input placeholder="Email" className="input" type="email" id="email" onChange = { this.handleChange } />
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div>
                                <input placeholder='Password' className="input" type="password" id="password" onChange = {this.handleChange} />
                            </div>
                        </div>
                        <Link to='/signup'>Don't have Account? Sign Up</Link>
                        <input type="submit" className="btn" value="Login" />
                        <div>
                            { authError ? <p>{ authError }</p> : null}
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authError : state.auth.authError,
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (cred) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)