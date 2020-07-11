import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { donateAction, updateRecivedAmountProject } from '../../../store/actions/donateAction'
import moment from 'moment'
import './donerDashboard.css'
import Web3 from 'web3'
import CrowdFunding from '../../../build/contracts/CrowdFunding.json'

class DonerDashboard extends Component {

    async componentDidMount(){
        await this.loadWeb3()
        await this.loadBlockChainData()
      }
    
      async loadWeb3() {
        if (window.ethereum) {
          window.web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
        }
        else if (window.web3) {
          window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
          window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
      }
    
      async loadBlockChainData() {
        const web3 = window.web3
        //load Account
        const accounts = await web3.eth.getAccounts()
        //console.log(accounts)
        this.setState({ account : accounts[0] })
        //Find NetworkID
        const networkID =  await web3.eth.net.getId()
        //console.log(networkID)
        const networkData = CrowdFunding.networks[networkID]
        //console.log(networkData)
        if (networkData) {
          const instance = web3.eth.Contract(CrowdFunding.abi,networkData.address)
          //console.log(instance)
          this.setState({ web3 : web3, contract : instance})
        }
        else {
          window.alert('Social Network Contract not deployed to this network')
        }
      }

    state = {
        web3 : null,
        account : '',
        contract: '',
        projectID: '', 
        donerID : '', 
        amount : '0',
        ethAdd : ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        }, () => {
            console.log(this.state)
        })
    }

    donate = (event,donerID,project) => {
        event.preventDefault()
        // console.log(project.recived)
        const amount = this.state.web3.utils.toWei(this.state.amount, 'Ether')
        var projecRecivedAmount = project.recived === undefined || null ? 0 : project.recived 
        projecRecivedAmount = +projecRecivedAmount + +this.state.amount
        const details = {
            projecRecivedAmount,
            id : project.id
        }
        //console.log(projecRecivedAmount,project.id)
        this.props.updateRecivedAmountProject(details)
        
        let dbAmt = 0
        if (this.props.donate) {
            this.props.donate.map(don => {
            if (don.id === donerID) {
                    dbAmt = don[project.id] || 0          
                }
           }) 
        }
        //console.log(dbAmt)
        //const dbAmt = this.props.donate[donerID] === null ? 0 : ( this.props.donate[donerID][projectID] || 0 ) 
        //console.log(this.props.donate)
        const amt =  +this.state.amount + +dbAmt
        this.setState({
            projectID : project.id,
            donerID,
            amount: amt
        }, () => {
            //console.log(projectID,this.state)
            this.props.donateAction(this.state)
            
            this.state.contract.methods.TransferEth(this.state.ethAdd).send({from : this.state.account, value : amount})
        })
        //console.log(this.props)
        
        
        //this.props.history.push('/projectdonated')
        //console.log(amt)
    }
    
    render() {
        const { auth, projects, profile } = this.props
        //console.log(auth)
        if (!auth.uid) return <div></div>
        return (
            <div>
                { projects && projects.map(project => {
                    return (
                        <div className='roww'>
                            <div className='leftcolumn'>
                            <form className='caard' id='form' key = { project.id }>
                                <h3>{ project.title }</h3>
                                <h5>{ moment(project.createdAt.toDate()).calendar() } </h5>
                                <h5>Description : </h5>
                                <p>{ project.description } </p>
                                <h5>Project Goal(In Ether) : { project.goal } </h5>
                                <h5>Uploaded by : { project.authorFirstName } { project.authorSecondName }</h5>
                                <input className = "create-input" placeholder="Amount In Ether" type = 'number' id = 'amount' onChange = { this.handleChange }/>
                                <input className = "create-input" placeholder="Ethereum Address" type = 'text' id = 'ethAdd' onChange = { this.handleChange }/>
                                <button className = "create-button" onClick = {(event) => this.donate(event,auth.uid,project) }>Donate</button>
                            </form>
                            </div>
                        </div>
                )}) }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        profile : state.firebase.profile,
        donate : state.firestore.ordered.donate,
        projects : state.firestore.ordered.projects,
        auth : state.firebase.auth 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        donateAction : (project) => dispatch(donateAction(project)),
        updateRecivedAmountProject : (details) => dispatch(updateRecivedAmountProject(details))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection : 'projects', orderBy : ['createdAt' , 'desc'] },
        { collection : 'donate' } 
    ])
)(DonerDashboard)