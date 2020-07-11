import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { createProject } from '../../../store/actions/projectAction'
import { Redirect, Link } from 'react-router-dom'
import icon from './images/icon.svg'
import { storage } from '../../../config/fbConfig'

class CreateProject extends Component {
    state = {
        title : '',
        description : '',
        category : '',
        goal : '',
        image : null,
        url : '',
        progress : 0
    }

    handleSubmit = (e) => {
        //console.log(e)
        e.preventDefault()
        // console.log(this.state)
        const image = this.state.image
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        this.setState({
            image : null
        })
        uploadTask.on('state_changed', 
        (snapshot) => {
            // progrss function ....
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress});
            }, 
            (error) => {
                // error function ....
                console.log(error);
            }, 
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({
                        url : url 
                    },()=>{
                        this.props.createProject(this.state)
                        this.props.history.push('/')
                        // console.log(this.state)
                    });
                })
            });    
    }

    handleChange = (e) => {
        //console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleImageChange = (e) => {
        if (e.target.files[0]) {
            this.setState({
                image : e.target.files[0]
            })
        }
    }

    render() {
        require('./createProject.css')
        const { auth } = this.props

        if (!auth.uid) return <Redirect to = '/signin' />

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset=md-1">
                        <div className="row">
                            <div className="col-md-5 add-left">
                                <img src={ icon }/>
                                <h3>Donate Us</h3>
                                <p>Make a Donation to Project by Providing Funds. Donate Now!</p>
                                <Link to='/donerdashboard'>
                                    <button type="button" className="btn btn-primary">
                                        Donate
                                    </button>
                                </Link>
                            </div>
                            <div className="col-md-7 add-right">
                                <h2>Create Project Bio</h2>
                                <div className="add-form">
                                    <div className="form-group">
                                        <input type="text" id='title' className="form-control" placeholder="Title" onChange = {this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id='description' placeholder="Description" onChange = {this.handleChange}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id='category' onChange = {this.handleChange} placeholder="Category"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id='goal' onChange = {this.handleChange} placeholder="Goal"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" className="form-control" id='image' onChange = {this.handleImageChange} placeholder="Goal"/>
                                    </div>
                                    <button type="button"  onClick = {this.handleSubmit} className="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
