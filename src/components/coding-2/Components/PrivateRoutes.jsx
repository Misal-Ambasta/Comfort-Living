import React from 'react';
import Login from "./Login"
import Items from "../../../Routes/Items";
import Cart from "../../../Routes/Cart";
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext"

export default class PrivateRoutes extends React.Component {

    render(){

        const {isAuth,data,handleCart,cartArr} = this.context

        console.log(this.props, "private" , isAuth);
        if(!isAuth){
            console.log("private-login")
            return <Redirect to="/login" />
        }
        // else{
        //     console.log("private-shop")
        //     return <Redirect to="/shoppingcart" />
        // }
        return (
            <div>
                {/* <Route path="/furniture/:id" render={(props)=> <Items cart={handleCart} auth={isAuth} data={data} {...props}/>} /> */}
                <Route path="/shoppingcart" render={(props)=> <Cart  cartItems={cartArr} {...props} /> } />
            </div>
        )
    }
}


PrivateRoutes.contextType = AuthContext