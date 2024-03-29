import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../Routes/About';
import Contact from '../Routes/Contact';
import Furniture from '../Routes/Furniture';
import Homepage from '../Routes/Homepage';
import axios from 'axios';
import Items from '../Routes/Items'
import PrivateRoutes from './PrivateRoutes';
import Login from './Login';
import Cart from '../Routes/Cart';
import {AuthContext} from "../Context/AuthContext"
import Light from '../Routes/Light';
import Accessories from '../Routes/Accessories';
import Checkout from '../Routes/Checkout';
import FAQ from '../Routes/FAQ'

export default class Routes extends React.Component {
 
    

    render(){

        const {data, isAuth,id, flag, cartArr, handleCart, handlestore, handleSubmit} = this.context
       
        //console.log(this.context, "context");
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={()=><Homepage />} />
                    <Route path="/shoppingcart" render={(props)=> <PrivateRoutes cartItems={cartArr} {...props} />}/>
                    <Route path="/login" render={(props)=> <Login f_id={id} flag={flag} auth={isAuth} submit={handleSubmit} {...props} />} />
                    <Route path="/furniture/:id" render = {(props)=> <Items  cart={handleCart} auth={isAuth} data={data} {...props} /> } />
                    <Route path="/furniture" render={(props)=><Furniture store={handlestore} data={data} {...props} />} />
                    <Route path="/light/:id" render = {(props)=> <Items  cart={handleCart} auth={isAuth} data={data} {...props} /> } />
                    <Route path="/light" render={(props)=><Light store={handlestore} data={data} {...props} />} />
                    <Route path="/accessories/:id" render = {(props)=> <Items  cart={handleCart} auth={isAuth} data={data} {...props} /> } />
                    <Route path="/accessories" render={(props)=><Accessories store={handlestore} data={data} {...props} />} />
                    <Route path="/about" render={()=><About />} />
                    <Route path="/contact" render={()=><Contact />} />
                    <Route path="/faq" render={()=> <FAQ />} />
                    <Route path="/career" render={()=> <FAQ />} />
                    <Route path="/checkout" render={()=> <Checkout />} />
                </Switch>
            </div>
        )
    }
}

Routes.contextType = AuthContext;