import React, { Component } from 'react'
import {Redirect} from "react-router-dom"

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

    handleChange=(e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = this.state;
       // console.log("here")
        this.props.submit(email, password)
    }
    
    
    render() {
        const {email, password} = this.state
        const {auth, handleSubmit,f_id,history, flag} = this.props
        //console.log(this.props,"login")
        //console.log(auth)

        if(auth && flag){
            //console.log("shopping")
            history.push("../shoppingcart")
        }else if(auth){
            history.push("/")
        }



        return (
            <div style={{height:"66.6vh"}}>
            
                <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                    <input name='email'  value={email} onChange={this.handleChange} placeholder="Enter email"/>
                    <br/>
                    <input name='password' type="password"  value={password} placeholder="Enter password" onChange={this.handleChange} />
                    <br/>
                    <button>Login</button>
                </form>

            </div>
        )
    }
}


// Items.contextType = AuthContext;